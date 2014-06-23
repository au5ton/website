//I wonder when I'll need to use JavaScript


function setCookie(cname, cvalue, exdays) {
    var d = new Date();
    d.setTime(d.getTime() + (exdays*24*60*60*1000));
    var expires = "expires="+d.toGMTString();
    document.cookie = cname + "=" + cvalue + "; " + expires;
}

function getCookie(cname) {
    var name = cname + "=";
    var ca = document.cookie.split(';');
    for(var i=0; i<ca.length; i++) {
        var c = ca[i].trim();
        if (c.indexOf(name) == 0) return c.substring(name.length, c.length);
    }
    return "";
}


var theme = getCookie("theme");
document.getElementById("currentTheme").href="css/roboto"+theme+".css";
if(theme == "light")
{
    document.getElementById("swapper").innerHTML="Switch to Dark mode"; 
    alert("button light");
}
else if(theme == "dark")
{
    document.getElementById("swapper").innerHTML="Switch to Light mode"; 
    alert("button dark");
}
else
{
    document.getElementById("swapper").innerHTML="???";
}

if(theme != "light" || theme != "dark")
{
    theme = "light";
    setCookie("theme",theme,"9999999");
}

function setTheme(inputTheme)
{
    theme = inputTheme;
    document.getElementById("currentTheme").href="css/roboto"+inputTheme+".css"; 
    location.reload();
}
function getTheme()
{
    return theme;
}
function switchTheme()
{
    if(theme == "light")
    {
        theme = "dark";
        document.getElementById("currentTheme").href="css/robotodark.css"; 
        document.getElementById("swapper").innerHTML="Switch to Light mode"; 
        setCookie("theme",theme,"9999999");
    }
    else if(theme == "dark")
    {
        theme = "light";
        document.getElementById("currentTheme").href="css/robotolight.css";
        document.getElementById("swapper").innerHTML="Switch to Dark mode";
        setCookie("theme",theme,"9999999");
    }
    else
    {
        theme = "light";
        document.getElementById("currentTheme").href="css/robotolight.css";
        document.getElementById("swapper").innerHTML="Switch to Dark mode"; 
        setCookie("theme",theme,"9999999");
    }
    window.reload();
}