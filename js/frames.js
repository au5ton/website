var frameObject = document.getElementById("mainframe");
var w;
var h;
var currentFrame;

var default_f = "picker";
var default_w = 970;
var default_h = 500;

var proj_h = 3200;

function changeFrame(nextFrame,nextWidth,nextHeight)
{
    frameObject = document.getElementById("mainframe");
    w = parseInt(nextWidth);
    h = parseInt(nextHeight);
    currentFrame = nextFrame;
    if(currentFrame == undefined)
    {
        currentFrame = "picker";
    }
    if(nextFrame == undefined)
    {
        nextFrame = "picker";
        currentFrame = nextFrame;
    }
    if(nextFrame != "ignore")
    {
        frameObject.src = nextFrame+".html";
    }
    if(w > 0)
    {
        frameObject.width = w;
    }
    if(h > 0)
    {
        frameObject.height = h;
    }
    redraw();
}