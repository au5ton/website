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


if(theme == "light")
{
    setCookie("theme","light","9999999");
    theme = getCookie("theme")
    document.getElementById("currentTheme").href="css/robotolight.css";
}
else if(theme == "dark")
{
    setCookie("theme","dark","9999999");
    theme = getCookie("theme")
    document.getElementById("currentTheme").href="css/robotodark.css";
}
else
{
    setCookie("theme","light","9999999");
    theme = getCookie("theme")
    document.getElementById("currentTheme").href="css/robotolight.css";
}

function refreshTheme()
{
    if(theme != null)
    {
    document.getElementById("currentTheme").href="css/roboto"+theme+".css"; 
    location.reload();
    }
}
function getTheme()
{
    return "theme: "+theme+"\ncookie: "+getCookie("theme");
}
function switchTheme()
{
    document.getElementById("swapperSub").innerHTML="There may be delays between switches."; 
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
    //window.reload();
    changeFrame(currentFrame,w,h);
}
