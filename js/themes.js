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

var currentTheme;
var cookie_theme = getCookie("theme");

var common = 0;
var effects = 1;
var fonts = 2;
var html = 3;
var position = 4;
var shapes = 5;
var spacing = 6;
var special = 7;
var text = 8;

var core = new Array(); //"Core" theme
core[common] = "css/core/common.css";
core[effects] = "css/core/effects.css";
core[fonts] = "css/core/fonts.css";
core[html] = "css/core/html.css";
core[position] = "css/core/position.css";
core[shapes] = "css/core/shapes.css";
core[spacing] = "css/core/spacing.css";
core[special] = "css/core/special.css";
core[text] = "css/core/text.css";

var light = new Array(); //"Light" theme
light[common] = "css/theme/light/common.css";
light[effects] = core[effects];
light[fonts] = core[fonts];
light[html] = core[html];
light[position] = core[position];
light[shapes] = core[shapes];
light[spacing] = core[spacing];
light[special] = core[special];
light[text] = core[text];

var dark = new Array(); //"Dark" theme
dark[common] = "css/theme/dark/common.css";
dark[effects] = core[effects];
dark[fonts] = core[fonts];
dark[html] = core[html];
dark[position] = core[position];
dark[shapes] = core[shapes];
dark[spacing] = core[spacing];
dark[special] = core[special];
dark[text] = core[text];

function themes_cookieupdate()
{
    var e = document.getElementById("swapper");
    if(cookie_theme == "light")
    {
        e.selectedIndex = 0;
        themes_light();
        currentTheme = "light";
        console.log("currentTheme is "+currentTheme);
        console.log("getCookie(\"theme\") is "+getCookie("theme"));
    }
    else if(cookie_theme == "dark")
    {
        e.selectedIndex = 1;
        themes_dark();
        currentTheme = "dark";
        console.log("currentTheme is "+currentTheme);
        console.log("getCookie(\"theme\") is "+getCookie("theme"));
    }
    else
    {
        themes_update(-1);
    }
}

function themes_update(value)
{
    switch(parseInt(value))
    {
        case 0:
            {
                themes_light();
                currentTheme = "light";
                console.log("currentTheme is "+currentTheme);
                setCookie("theme","light","180");
                console.log("getCookie(\"theme\") is "+getCookie("theme"));
                break;
            }
        case 1:
            {
                themes_dark();
                currentTheme = "dark";
                console.log("currentTheme is "+currentTheme);
                setCookie("theme","dark","180");
                console.log("getCookie(\"theme\") is "+getCookie("theme"));
                break;
            }
        default:
            {
                themes_reset();
                currentTheme = "core";
                console.log("currentTheme is "+currentTheme);
                console.log("getCookie(\"theme\") is "+getCookie("theme"));
                break;
            }
    }    
}

function themes_reset()
{
    document.getElementById("css_common").href = core[common];
    document.getElementById("css_effects").href= core[effects];
    document.getElementById("css_fonts").href= core[fonts];
    document.getElementById("css_html").href = core[html];
    document.getElementById("css_position").href = core[position];
    document.getElementById("css_shapes").href = core[shapes];
    document.getElementById("css_spacing").href = core[spacing];
    document.getElementById("css_special").href = core[special];
    document.getElementById("css_text").href = core[text];
}

function themes_light()
{
    document.getElementById("css_common").href = light[common];
    document.getElementById("css_effects").href= light[effects];
    document.getElementById("css_fonts").href= light[fonts];
    document.getElementById("css_html").href = light[html];
    document.getElementById("css_position").href = light[position];
    document.getElementById("css_shapes").href = light[shapes];
    document.getElementById("css_spacing").href = light[spacing];
    document.getElementById("css_special").href = light[special];
    document.getElementById("css_text").href = light[text];
}

function themes_dark()
{
    document.getElementById("css_common").href = dark[common];
    document.getElementById("css_effects").href= dark[effects];
    document.getElementById("css_fonts").href= dark[fonts];
    document.getElementById("css_html").href = dark[html];
    document.getElementById("css_position").href = dark[position];
    document.getElementById("css_shapes").href = dark[shapes];
    document.getElementById("css_spacing").href = dark[spacing];
    document.getElementById("css_special").href = dark[special];
    document.getElementById("css_text").href = dark[text];
}