//I wonder when I'll need to use JavaScript

var theme = "light";

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
    }
    else if(theme == "dark")
    {
        theme = "light";
        document.getElementById("currentTheme").href="css/robotolight.css";
    }
    else
    {
        theme = "light";
        document.getElementById("currentTheme").href="css/robotolight.css";
    }
    window.reload();
}