//I wonder when I'll need to use JavaScript

var motd_random;
var m = new Array();

//THIS IS THE INNER HTML SO HTML FORMATTING IS ALLOWED
m[0] = "JavaScript functionality!";
m[1] = "CSS riddled!";
m[2] = "Triangles!";
m[3] = "Absolutely no WebGL!";
m[4] = "<button onclick=alert(\"I_like_buttons._c:\")>Button featured!</button>";
m[5] = "Also checkout Srchub.org! They're awesome!";
m[6] = "Now on GitHub!";
m[7] = "Uses Octocons!";
m[8] = "Uses Socialico!";
m[9] = "Say hi to teen programmers!";
m[10] = "Thank @qrohlf for the background!";
m[11] = "Say hi to @zorcan1!";
m[12] = "Say hi to @Jebs_Helper!";
m[13] = "Say hi to @JavaFTW!";


function motd_apply()
{
    
    document.getElementById("motd").innerHTML = motd_get();
}

function motd_get()
{
    motd_random = Math.floor(Math.random() * m.length);
    console.log("motd_get() called, motd_random: "+motd_random);
    return m[motd_random];
}

var element = document.getElementById("element-id");
element.parentNode.removeChild(element);

function closeIFrame(){
     $('#motdgen').remove();
}