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
//var s_min[] = {0,0,0};
//var s_max[] = {0,0,4};
//var s_shot[] = {s_min[0],s_min[1],s_min[2]};

var pdraw_min = 0;
var pdraw_max = 4; //WIP recoding for all projects above
var pdraw_shot = pdraw_min;

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
function swap(index)
{
    var proj = "";
    switch(index)
    {
            case 0:
            {
                proj = "obskewer";
            }
            case 1:
            {
                proj = "pcalculator";
            }
            case 2:
            {
                proj = "pdraw";
            }
            case 3:
            {
                proj = "ptictactoe";
            }
            default:
            {
                proj = "empty";
            }
    }
    
    var logo = "img/"+"logo.png";
    var path = "img/pdrawscreenshot";
//    if(s_shot[index] < s_max[index])
//    {
//        pdraw_shot++;
//        path += pdraw_shot+".png";
//        document.getElementById("pdrawscreenshot").src = path;
//            document.getElementById("pdrawtag").innerHTML = "Click to see another screenshot! Current screenshot: "+pdraw_shot;
//    }
//    else
//    {
//        pdraw_shot = pdraw_min;
//        document.getElementById("pdrawscreenshot").src = logo;
//        document.getElementById("pdrawtag").innerHTML = "Click to see a screenshot!";
//    }
}
function pdrawswap()
{ 
    var logo = "img/pdrawlogo.png";
    var path = "img/pdrawscreenshot";
    if(pdraw_shot < pdraw_max)
    {
        pdraw_shot++;
        path += pdraw_shot+".png";
        document.getElementById("pdrawscreenshot").src = path;
            document.getElementById("pdrawtag").innerHTML = "Click to see another screenshot! Current screenshot: "+pdraw_shot;
    }
    else
    {
        pdraw_shot = pdraw_min;
        document.getElementById("pdrawscreenshot").src = logo;
        document.getElementById("pdrawtag").innerHTML = "Click to see a screenshot!";
    }
}