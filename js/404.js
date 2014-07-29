//I wonder when I'll need to use JavaScript

var random;
var e = new Array();
var l = new Array();

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
e.push("Apple, copyright 6024 b.c. Adam & Eve");
e.push("Apple, copyright 1767 Sir Isaac Newton.");
e.push("Beam me aboard, Scotty..... Sure. Will a 2x10 do?");
e.push("Build a watch in 179 easy steps - a book by C. Forsberg.");
e.push("C++ should have been called B");
e.push("COINCIDENCE happens.");
e.push("Calvin, we will not have an anatomically correct snowman!");
e.push("Careful.  We don't want to learn from this.");
e.push("Energizer Bunny Arrested! Charged with battery.");


l.push("Homepage, please.");
l.push("Save me!");
l.push("I think I\'d rather not.");
l.push("Oh, nope.");
l.push("I guess not.");
l.push("Well, then.");
l.push("Back to the start.");
l.push("La casa, por favor.");
l.push("go to index.html");

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

function applyLinkMessage()
{
    document.getElementById("link").innerHTML = getLinkMessage();
}

function getLinkMessage()
{
    random = Math.floor(Math.random() * l.length);
    console.log("getLinkMessage() called, random: " + random);
    return l[random];
}

