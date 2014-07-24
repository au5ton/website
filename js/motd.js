//I wonder when I'll need to use JavaScript

var motd_random;
var m = new Array();

//THIS IS THE INNER HTML SO HTML FORMATTING IS ALLOWED
m.push("JavaScript functionality!");
m.push("CSS riddled!");
m.push("Triangles!");
m.push("Absolutely no WebGL!");
m.push("<button onclick=alert(\"buttons!\")>Button featured!</button>");
m.push("Also checkout Srchub.org! They're awesome!");
m.push("Now on GitHub!");
m.push("Uses Octicons!");
m.push("Uses Socialico!");
m.push("Say hi to teen programmers!");
m.push("Thank <a href=\"http://twitter.com/qrohlf\" class=\"twitter\">@qrohlf</a> for the background!");
m.push("Say hi to <a href=\"http://twitter.com/zorcan1\" class=\"twitter\">@zorcan1!</a>");
m.push("Say hi to <a href=\"http://twitter.com/Jebs_Helper\" class=\"twitter\">@Jebs_Helper!</a>");
m.push("window.alert(\"Hello, World!\");");
m.push("Say hi to <a href=\"http://twitter.com/JavaFTW\" class=\"twitter\">@JavaFTW!</a>");
m.push("There's no place like 127.0.0.1!");
m.push("<span id=\"epoch\">Enable JavaScript!</span>");


function motd_apply()
{
    
    document.getElementById("motd").innerHTML = motd_get();
}

function motd_get()
{
    motd_random = Math.floor(Math.random() * m.length);
    console.log("motd_get() called, motd_random: " + motd_random);
    return m[motd_random];
}

var element = document.getElementById("element-id");
element.parentNode.removeChild(element);

function closeIFrame(){
     $('#motdgen').remove();
}

function updateEpoch()
{
    document.getElementById("epoch").innerHTML = "Epoch! " + Date.now();
    requestAnimationFrame(updateEpoch);
}