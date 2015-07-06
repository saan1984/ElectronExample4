var notifier = require('node-notifier'),
    path = require('path');;
(function(){
    var createNotification = function(title,message){
        notifier.notify({
             title: title,
             message: message,
             icon: path.join(__dirname, 'image/favicon.png'),
             sound: true,
             wait: false
         });
    };
    var handleNotification =function(event){
        var title = document.getElementById("title").value,
            message = document.getElementById("message").value;
        createNotification(title,message)
    };
    var notifyButton= document.getElementById("notifyButton");
    notifyButton.addEventListener("click",handleNotification);
})();
