function sleep(milliseconds)
{
    /*
    http://stackoverflow.com/questions/16873323/javascript-sleep-wait-before-continuing
    */
    var start = new Date().getTime();
    console.log("Starting sleep...");
    for (var i = 0; i < 1e7; i++)
    {
        if ((new Date().getTime() - start) > milliseconds)
        {
            break;
        }
    }
    console.log("Sleep end.");
}

function toggleDebugHTML()
{
    var initial = "display: none; /*INITIAL*/";
    var hidden = "display: none; /*DONT EDIT ME*/";
    var shown = "display: inline; /*DONT EDIT ME*/";

    var de = document.getElementById("debugstuff");
    if(de.getAttribute("style") == hidden || de.getAttribute("style") == initial)
    {
        de.setAttribute("style",shown);
    }
    else
    {
        de.setAttribute("style",hidden);
    }
}