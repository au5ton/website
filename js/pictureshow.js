//I wonder when I'll need to use JavaScript

var shot = new Array();
shot = [0,0,0,0];

//function defaults()
//{
//    var proj = "obskewer";
//    
//    document.getElementById(proj+"tag").innerHTML = "No screenshots available. :(";
//    proj = "pcalc";
//    document.getElementById(proj+"tag").innerHTML = "No screenshots available. :(";
//    proj = "ptictac";
//    document.getElementById(proj+"tag").innerHTML = "No screenshots available. :(";
//}

function obskewerswap()
{ 
    var proj = "obskewer"; //Short-name of project in use
    var id = 0;
    var logo = "img/icon_obskewer.png"; //Manual setup
    var path = "img/"+proj+"screenshot";
    var min = 0;
    var max = 0;
    console.log("shot["+id+"]: "+shot[id]);
    if(max == min)
    {
        document.getElementById(proj+"tag").innerHTML = "No screenshots available. :(";
    }
    else if(shot[id] < max)
    {
        shot[id]++;
        path += shot[id]+".png";
        document.getElementById(proj+"screenshot").src = path;
        document.getElementById(proj+"tag").innerHTML = "Click to see another screenshot! Current screenshot: "+shot[id];
    }
    else
    {
        shot[id] = min;
        document.getElementById(proj+"screenshot").src = logo;
        document.getElementById(proj+"tag").innerHTML = "Click to see a screenshot!";
    }
}

function pcalcswap()
{ 
    var proj = "pcalc"; //Short-name of project in use
    var id = 1;
    var logo = "img/icon_pcalculator.png"; //Manual setup
    var path = "img/"+proj+"screenshot";
    var min = 0;
    var max = 0;
    console.log("shot["+id+"]: "+shot[id]);
    if(max == min)
    {
        document.getElementById(proj+"tag").innerHTML = "No screenshots available. :(";
    }
    else if(shot[id] < max)
    {
        shot[id]++;
        path += shot[id]+".png";
        document.getElementById(proj+"screenshot").src = path;
        document.getElementById(proj+"tag").innerHTML = "Click to see another screenshot! Current screenshot: "+shot[id];
    }
    else
    {
        shot[id] = min;
        document.getElementById(proj+"screenshot").src = logo;
        document.getElementById(proj+"tag").innerHTML = "Click to see a screenshot!";
    }
}

function pdrawswap()
{ 
    var proj = "pdraw"; //Short-name of project in use
    var id = 2;
    var logo = "img/pdrawlogo.png"; //Manual setup
    var path = "img/"+proj+"screenshot";
    var min = 0;
    var max = 4;
    console.log("shot["+id+"]: "+shot[id]);
    if(max == min)
    {
        document.getElementById(proj+"tag").innerHTML = "No screenshots available. :(";
    }
    else if(shot[id] < max)
    {
        shot[id]++;
        path += shot[id]+".png";
        document.getElementById(proj+"screenshot").src = path;
        document.getElementById(proj+"tag").innerHTML = "Click to see another screenshot! Current screenshot: "+shot[id];
    }
    else
    {
        shot[id] = min;
        document.getElementById(proj+"screenshot").src = logo;
        document.getElementById(proj+"tag").innerHTML = "Click to see a screenshot!";
    }
}

function ptictacswap()
{ 
    var proj = "ptictac"; //Short-name of project in use
    var id = 3;
    var logo = "img/ptictactoe.png"; //Manual setup
    var path = "img/"+proj+"screenshot";
    var min = 0;
    var max = 0;
    console.log("shot["+id+"]: "+shot[id]);
    if(max == min)
    {
        document.getElementById(proj+"tag").innerHTML = "No screenshots available. :(";
    }
    else if(shot[id] < max)
    {
        shot[id]++;
        path += shot[id]+".png";
        document.getElementById(proj+"screenshot").src = path;
        document.getElementById(proj+"tag").innerHTML = "Click to see another screenshot! Current screenshot: "+shot[id];
    }
    else
    {
        shot[id] = min;
        document.getElementById(proj+"screenshot").src = logo;
        document.getElementById(proj+"tag").innerHTML = "Click to see a screenshot!";
    }
}

function templateswap()
{ 
    var proj = "template"; //Short-name of project in use
    var id = -1;
    var logo = "img/icon_empty.png"; //Manual setup
    var path = "img/"+proj+"screenshot";
    var min = 0;
    var max = 0;
    console.log("shot["+id+"]: "+shot[id]);
    if(max == min)
    {
        document.getElementById(proj+"tag").innerHTML = "No screenshots available. :(";
    }
    else if(shot[id] < max)
    {
        shot[id]++;
        path += shot[id]+".png";
        document.getElementById(proj+"screenshot").src = path;
        document.getElementById(proj+"tag").innerHTML = "Click to see another screenshot! Current screenshot: "+shot[id];
    }
    else
    {
        shot[id] = min;
        document.getElementById(proj+"screenshot").src = logo;
        document.getElementById(proj+"tag").innerHTML = "Click to see a screenshot!";
    }
}