const websocket = require('ws');
const http = require('http');
const url = require('url');

const st = require('node-static');

const fileserver = new st.Server('./public');