//I wonder when I'll need to use JavaScript

var motd_random = Math.random();

function motd_apply()
{
    
    document.getElementById("motd").innerHTML = motd_get();
}

function motd_get()
{
    return "motd";
}

