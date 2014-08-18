var cinnabar_paths = [
"css/cinnabar.xs.min.css",
"css/cinnabar.sm.min.css",
"css/cinnabar.md.min.css",
"css/cinnabar.lg.min.css"
];

var cinnabar_xs = 0; //Don't mess with these
var cinnabar_sm = 1; //Don't mess with these
var cinnabar_md = 2; //Don't mess with these
var cinnabar_lg = 3; //Don't mess with these

var cinnabar_xs_max = 767; //Don't mess with these
var cinnabar_sm_min = 768; //Don't mess with these
var cinnabar_sm_max = 991; //Don't mess with these
var cinnabar_md_min = 992; //Don't mess with these
var cinnabar_md_max = 1199; //Don't mess with these
var cinnabar_lg_min = 1200; //Don't mess with these

var cinnabar_mode;

function cinnabar_width()
{
  return document.body.clientWidth;
}
function cinnabar_height()
{
  return Math.max(
    document.body.scrollHeight, document.documentElement.scrollHeight,
    document.body.offsetHeight, document.documentElement.offsetHeight,
    document.body.clientHeight, document.documentElement.clientHeight
  );
}

function cinnabar_isBetween(val,min,max)
{
  if(val >= min && val <= max)
  {
    return true;
  }
  else
  {
    return false;
  }
}

function cinnabar_set(xs,sm,md,lg)
{
  cinnabar_paths[0] = xs;
  cinnabar_paths[1] = sm;
  cinnabar_paths[2] = md;
  cinnabar_paths[3] = lg;
}

function cinnabar_getMode()
{
  if(cinnabar_width() <= cinnabar_xs_max)
  {
    cinnabar_mode = "xs";
  }
  else if(cinnabar_isBetween(cinnabar_width(),cinnabar_sm_min,cinnabar_sm_max))
  {
    cinnabar_mode = "sm";
  }
  else if(cinnabar_isBetween(cinnabar_width(),cinnabar_md_min,cinnabar_md_max))
  {
    cinnabar_mode = "md";
  }
  else if(cinnabar_width() >= cinnabar_lg_min)
  {
    cinnabar_mode = "lg";
  }
  else
  {
    console.log("[cinnabar_mode()] Mode could not be determined.");
    return "invalid";
  }
  console.log("[cinnabar_mode()] Mode determined as: "+mode);
  return mode;
}

function cinnabar_link()
{
  var e = document.getElementById("cinnabar_current");
  if(cinnabar_getMode() == "xs")
  {
    e.setAttribute("href",cinnabar_paths[0]);
  }
  else if(cinnabar_getMode() == "sm")
  {
    e.setAttribute("href",cinnabar_paths[1]);
  }
  else if(cinnabar_getMode() == "md")
  {
    e.setAttribute("href",cinnabar_paths[2]);
  }
  else if(cinnabar_getMode() == "lg")
  {
    e.setAttribute("href",cinnabar_paths[3]);
  }
  else
  {
    //
  }
}
