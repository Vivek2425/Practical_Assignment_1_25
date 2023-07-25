module.exports.chatbotreply = function(message){
    this.age = 25;
    this.name = 'chatGpt';
    this.university = 'vnsgu';
    this.country = 'india';
    message = message.toLowerCase()

    if(message.indexOf('hi')  > -1){
        return "h1!";
    }else if(message.indexOf('age')  > -1){
        return this.age;
    }else{
        return "sorry i did not get it .!!";
    }
}