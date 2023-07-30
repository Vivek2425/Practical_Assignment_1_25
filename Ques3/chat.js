module.exports.chatbotreply = function(message){
    this.age = 25;
    this.name = 'chatGpt';
    this.university = 'vnsgu';
    this.country = 'india';
    message = message.toLowerCase()

    if(message.indexOf('hi')  > -1){
        return "hii,How are you ..!!";
    }else if(message.indexOf('fine')  > -1){
        return "Thats greate..!!\n How can i help you..!!";
    }else if(message.indexOf('can you tell me about your self ?')  > -1){
        return "Sure ..! , I am a chatBot \n, basically developed by Vivek lakhlani. My age is "+this.age  + " Thats all about me.";
    }else if(message.indexOf('bye')  > -1){
        return "Have a good day, Take care of yourself and your family..!!\nGood Bye...";
    }else{
        return "sorry i did not get it .!!";
    }
}