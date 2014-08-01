/*

macphage.github.io
main.js

This website is open-source.
http://github.com/macphage/macphage.github.io/

*/

var FourOhFour = function(){

  var random;
  var e = [];

  var verbose = quote("The 404 or Not Found error message is a HTTP standard response code indicating that the client was able to communicate with a given server, but the server could not find what was requested.","Wikipedia");

  var good = quote("The 404 or Not Found is an error message meaning the web server could be contacted, but the file trying to be accessed could not be found.","Wikipedia");

  function quote(message, person)
  {
    return (""+message+"<br><p class=\"align_right\"><bc>~"+person+"</bc></p>");
  }

  //THIS IS THE INNER HTML SO HTML FORMATTING IS ALLOWED
  e.push("Insert detailed explaination of what a 404 is here.");
  e.push("What you were looking for probably doesn\'t exist.");
  e.push("I seriously doubt you were looking for me.");
  e.push(good);
  e.push(verbose);
  e.push(good);
  e.push(verbose);
  e.push(good);
  e.push(verbose);
  e.push(good);
  e.push(verbose);
  e.push(good);
  e.push(verbose);
  e.push(good);
  e.push(verbose);
  e.push(good);
  e.push(verbose);

  e.push("hello");
  e.push("Warning: Dates in Calendar are closer than they appear.");
  e.push("Daddy, why doesn't this magnet pick up this floppy disk?");
  e.push("Give me ambiguity or give me something else.");
  e.push("I.R.S.: We've got what it takes to take what you've got!");
  e.push("We are born naked, wet and hungry.  Then things get worse.");
  e.push("Pentiums melt in your PC, not in your hand.");
  e.push("Suicidal twin kills sister by mistake!");
  e.push("Did anyone see my lost carrier?");
  e.push("Make it idiot proof and someone will make a better idiot.");
  e.push("I'm not a complete idiot, some parts are missing!");
  e.push("He who laughs last thinks slowest!");
  e.push("Always remember you're unique, just like everyone else.");
  e.push("Save the whales, collect the whole set");
  e.push("A flashlight is a case for holding dead batteries.");
  e.push("Lottery: A tax on people who are bad at math.");
  e.push("There's too much blood in my caffeine system.");
  e.push("Artificial Intelligence usually beats real stupidity.");
  e.push("Hard work has a future payoff.  Laziness pays off now.");
  e.push("Friends help you move. Real friends help you move bodies.");
  e.push("I wont rise to the occaasion, but I'll slide over to it.");
  e.push("Ever notice how fast Windows runs?  Neither did I.");
  e.push("Ever notice how fast Mac OS X runs? Me too!");
  e.push("Double your drive space - delete Windows!");
  e.push("What is a free gift ? Aren't all gifts free?");
  e.push("If ignorance is bliss, you must be orgasmic.");
  e.push("Very funny, Scotty. Now beam down my clothes.");
  e.push("Puritanism: The haunting fear that someone, somewhere may be happy.");
  e.push("Consciousness: that annoying time between naps.");
  e.push("Oops. My brain just hit a bad sector.");
  e.push("Don't take life too seriously, you won't get out alive.");
  e.push("I don't suffer from insanity.  I enjoy every minute of it.");
  e.push("A pedestrian hit me and went under my car.");
  e.push("Better to understand a little than to misunderstand a lot.");
  e.push("The gene pool could use a little chlorine.");
  e.push("When there's a will, I want to be in it.");
  e.push("Okay, who put a stop payment on my reality check?");
  e.push("Few women admit their age.  Few men act theirs.");
  e.push("I'm as confused as a baby in a topless bar.");
  e.push("We have enough youth, how about a fountain of SMART?");
  e.push("All generalizations are false, including this one.");
  e.push("Change is inevitable, except from a vending machine.");
  e.push("C program run.  C program crash.  C programmer quit.");
  e.push("C++ program run.  C++ program crash.  C++ programmer quit.");
  e.push("Criminal Lawyer is a redundancy.");
  e.push("Wax on, wax off!");
  e.push(quote("640K ought to be enough for anybody.","Bill Gates, 1981"));
  e.push("90% of all statistics are made up");
  e.push("A man needs a good memory after he has lied.");
  e.push("A little work, a little sleep, a little love and it is all over.");
  e.push("A lot of people mistake a short memory for a clear conscience.");
  e.push("Apple, copyright 6024 BC Adam & Eve");
  e.push("Apple, copyright 1767 Sir Isaac Newton.");
  e.push("Beam me aboard, Scotty..... Sure. Will a 2x10 do?");
  e.push("Build a watch in 179 easy steps - a book by C. Forsberg.");
  e.push("C++ should have been called B");
  e.push("COINCIDENCE happens.");
  e.push("Calvin, we will not have an anatomically correct snowman!");
  e.push("Careful.  We don't want to learn from this.");
  e.push("Energizer Bunny Arrested! Charged with battery.");


  function applyErrorMessage()
  {
    document.getElementById("error").innerHTML = getErrorMessage();
  }

  function getErrorMessage()
  {
    random = Math.floor(Math.random() * e.length);
    console.log("getErrorMessage() called, random: " + random);
    return e[random];
  }


};

/*
MESSAGE OF THE DAY
MESSAGE OF THE DAY
MESSAGE OF THE DAY
MESSAGE OF THE DAY
MESSAGE OF THE DAY
*/

var MessageOfTheDay = function(){

  //I wonder when I'll need to use JavaScript

  var motd_random;
  var m = [];
  var tagline = [];

  //THIS IS THE INNER HTML SO HTML FORMATTING IS ALLOWED
  m.push("JavaScript functionality!");
  m.push("CSS riddled!");
  m.push("Triangles!");
  m.push("Absolutely no WebGL!");
  m.push("<button onclick=alert(\"buttons!\")>Button featured!</button>");
  m.push("Also checkout Srchub.org! They're awesome!");
  m.push("Now on GitHub!");
  m.push("Uses Octicons!");
  m.push("Uses Socialico!");
  m.push("Say hi to teen programmers!");
  m.push("Thank <a href=\"http://twitter.com/qrohlf\" class=\"twitter\">@qrohlf</a> for the background!");
  m.push("Say hi to <a href=\"http://twitter.com/zorcan1\" class=\"twitter\">@zorcan1!</a>");
  m.push("Say hi to <a href=\"http://twitter.com/Jebs_Helper\" class=\"twitter\">@Jebs_Helper!</a>");
  m.push("window.alert(\"Hello, World!\");");
  m.push("Say hi to <a href=\"http://twitter.com/JavaFTW\" class=\"twitter\">@JavaFTW!</a>");
  m.push("There's no place like 127.0.0.1!");
  m.push("<span id=\"epoch\">Enable JavaScript!</span>");

  tagline.push("a programmers' website");
  tagline.push("a website for code");
  //tagline.push("austin jackson");


  function motd_apply()
  {
    document.getElementById("motd").innerHTML = motd_get();
  }

  function applyTagline()
  {
    document.getElementById("MainSubtitle").innerHTML = getTagline();
  }

  function motd_get()
  {
    motd_random = Math.floor(Math.random() * m.length);
    console.log("motd_get() called, motd_random: " + motd_random);
    return m[motd_random];
  }

  function getTagline()
  {
    motd_random = Math.floor(Math.random() * tagline.length);
    console.log("getTagline() called, motd_random: " + motd_random);
    return tagline[motd_random];
  }

  var element = document.getElementById("element-id");
  element.parentNode.removeChild(element);

  function closeIFrame(){
    $('#motdgen').remove();
  }

  function updateEpoch()
  {
    document.getElementById("epoch").innerHTML = "Epoch! " + Date.now();
    requestAnimationFrame(updateEpoch);
  }

};

/*
PICTURESHOW
PICTURESHOW
PICTURESHOW
PICTURESHOW
PICTURESHOW
*/

var PictureShow = function(){

  var shot = [];
  shot = [0,0,0,0];

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
                              };

                              /*
                              THEME
                              THEME
                              THEME
                              THEME
                              THEME
                              */

                              var Theme = function(){
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
                                    if (c.indexOf(name) === 0) return c.substring(name.length, c.length);
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
                                  var animation = 9;

                                  //var core = new Array(); //"Core" theme
                                  var core = [
                                  "",
                                  ""
                                  ];

                                  // core[common] = "css/core/common.css";
                                  // core[effects] = "css/core/effects.css";
                                  // core[fonts] = "css/core/fonts.css";
                                  // core[html] = "css/core/html.css";
                                  // core[position] = "css/core/position.css";
                                  // core[shapes] = "css/core/shapes.css";
                                  // core[spacing] = "css/core/spacing.css";
                                  // core[special] = "css/core/special.css";
                                  // core[text] = "css/core/text.css";
                                  // core[animation] = "css/core/animation.css";

                                  // var light = new Array(); //"Light" theme
                                  var light = [
                                  "",
                                  ""
                                  ];
                                  // light[common] = "css/theme/light/common.css";
                                  // light[effects] = core[effects];
                                  // light[fonts] = core[fonts];
                                  // light[html] = core[html];
                                  // light[position] = core[position];
                                  // light[shapes] = core[shapes];
                                  // light[spacing] = core[spacing];
                                  // light[special] = core[special];
                                  // light[text] = core[text];
                                  // light[animation] = core[animation];

                                  // var dark = new Array(); //"Dark" theme
                                  var dark = [
                                  "",
                                  ""
                                  ];
                                  // dark[common] = "css/theme/dark/common.css";
                                  // dark[effects] = core[effects];
                                  // dark[fonts] = core[fonts];
                                  // dark[html] = core[html];
                                  // dark[position] = core[position];
                                  // dark[shapes] = core[shapes];
                                  // dark[spacing] = core[spacing];
                                  // dark[special] = core[special];
                                  // dark[text] = core[text];
                                  // dark[animation] = core[animation];

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
                                                document.getElementById("css_animation").href = core[animation];
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
                                                document.getElementById("css_animation").href = core[animation];
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
                                                document.getElementById("css_animation").href = core[animation];
                                              }
                                            };
