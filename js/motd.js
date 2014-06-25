//I wonder when I'll need to use JavaScript

var motd_random;
var m = new Array();

//THIS IS THE INNER HTML SO HTML FORMATTING IS ALLOWED
m[0] = "JavaScript functionality!";
m[1] = "CSS riddled!";
m[2] = "Triangles!";
m[3] = "Absolutely no WebGL!";
m[4] = "&lt;iframe&gt; utilizing!";
m[5] = "<button onclick=alert('BUTTONS!')>Button featured!</button>";

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