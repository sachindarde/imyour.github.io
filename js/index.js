var i=0;
var j=0;
var m=0,n=0,s=0;
var arr=["Lover",
    "Husband/Wife",
    "Bf/Gf",
    "Brother/Sister",
    "Granddad/Grandmom",
    "Besty", 
    "Worst Enemy",
    "Crush",
    "Date",
    "Best Friend",
    "Favorite Person",
    "Neighbour",
    "Classmate",
	"Great Fan",
	"Business Partner",
	"Guide",
	"Hero/Heroine",
	"Lifetime Partner",
	"Cutie Pie",
	"Honey",
	"Well Wisher",
	"Chat Friend",
	"Friend Forever",
	"No One"];
var myVar = setInterval(function(){ myTimer() }, 100);
function myTimer() {
	if(j==arr.length)
		j=0;
    document.getElementById("changeHere").innerHTML = arr[j++];
	var r1=255+m;
	var r2=128+n;
	var r3=0+s;
	var r4=108+m;
	var r5=161+n;
	var r6=161+s;
	document.getElementById("basePage").style.background ="-webkit-linear-gradient(left top, rgb("+r1+","+r2+","+r3+"),rgb("+r4+","+r5+","+r6+")";
	if(s>=256)
	{
		n++;
		s=0;
	}
	if(n>=256)
	{
		m++;
		n=0;
		s=0;
	}
	s++;
}

function myStopFunction() {/* 
	document.getElementById('send').data-text="Try This New WebApp";
	document.getElementById('send').data-link="www.google.com"; */
    clearInterval(myVar);
}
$(document).ready(function() {

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
 $(document).on("click", '.whatsapp', function() {
        if( isMobile.any() ) {
            var text ="Your My "+arr[j-1];
			var link =window.location.href.substring(0,window.location.href.length-10)+"share.html";
            var message = encodeURIComponent(text)+"    \nYou Can Click On this Link For share Others By Clicking This Link:- "+encodeURIComponent(link);
            var whatsapp_url = "whatsapp://send?text=" + message;
            window.location.href = whatsapp_url;
        } else {
            alert("Please share this article in mobile device");
        }

    });
});
function doThis()
{
	var c = document.getElementById('basePage');
	var t = c.getContext('2d');
	window.open('', document.getElementById('basePage').toDataURL());
}

