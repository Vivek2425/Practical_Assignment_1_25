const zlib=require('zlib');
const fs=require('fs');

var unzip=zlib.createUnzip();

const read=fs.createReadStream('./files/file1.txt.gz');
const write=fs.createWriteStream('./files/file1.txt');

read.pipe(unzip).pipe(write);