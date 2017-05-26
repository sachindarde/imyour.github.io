$(document).ready(function (){
var isMobile = {
    Android: function() {
        return navigator.userAgent.match(/Android/i);
    },
    BlackBerry: function() {
        return navigator.userAgent.match(/BlackBerry/i);
    },
    iOS: function() {
        return navigator.userAgent.match(/iPhone|iPad|iPod/i);
    },
    Opera: function() {
        return navigator.userAgent.match(/Opera Mini/i);
    },
    Windows: function() {
        return navigator.userAgent.match(/IEMobile/i);
    },
    any: function() {
        return (isMobile.Android() || isMobile.BlackBerry() || isMobile.iOS() || isMobile.Opera() || isMobile.Windows());
    }
};
    if( isMobile.any()) 
	{
            var text =window.location.href.substring(0,window.location.href.length-10)+"index.html";
            var message = encodeURIComponent(text);
            var whatsapp_url = "whatsapp://send?text=" + message;
            window.location.href = whatsapp_url;
    } else {
            alert("Please share this article in mobile device");
        }
});