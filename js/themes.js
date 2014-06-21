//I wonder when I'll need to use JavaScript

var theme;

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
        alert(document.getElementById("currentTheme").href);
    }
    else if(theme == "dark")
    {
        theme = "light";
        document.getElementById("currentTheme").href="css/robotolight.css";
        alert(document.getElementById("currentTheme").href);
    }
    else
    {
        theme = "light";
        document.getElementById("currentTheme").href="css/robotolight.css";
        alert("[last resort]"+document.getElementById("currentTheme").href);  
    }
    location.reload();
}

