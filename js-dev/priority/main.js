
/*

Main.js
Client-code for austinj.net

If you're reading this from libraries.js, lol look at all the compressed code above, huh?
This is so we can use the async HTML attribute to make JavaScript loading non-blocking 😎

*/


//Geopattern pattern
try {
    var pattern = GeoPattern.generate(new Date());
    document.getElementById('canvas').style.background = pattern.toDataUrl();
}
catch(err){
    //If GeoPattern is unsupported... (Which it isn't in IE sometimes, thanks Microsoft)
    //Generate a new color
    var color = randomColor({
        luminosity: 'light'
    });
    //Convert to a tinycolor
    color = tinycolor(color);
    //If the color is too light
    if(color.toHsl().l >= 0.7) {
        color = color.toHsl();
        //Bring it down to 0.7
        color.l = 0.7;
    }
    //Convert back into a tinycolor
    color = tinycolor(color);
    //If the color is too saturated
    if(color.toHsl().s >= 0.6) {
        color = color.toHsl();
        //Bring it down to 0.6
        color.s = 0.6;
    }
    //Apply the color
    $('#canvas')[0].style.background = tinycolor(color).toHexString();
}

//Activity feed
GitHubActivity.feed({
    username: 'au5ton',
    selector: '#feed',
    limit: 6 // optional
});


//Most used languages
var keys = []; //keys to the Dictionary (object)
var graph_data = [];
var ctx;
var myDoughnutChart;
jQuery.get('https://austinjnet-stats.herokuapp.com/api/mostusedlanguages?include_colors=true',function(data){
    /*
    Gets the names of the keys and saves them in `keys` so that we can access
    `data` with bracket notation (like Swift dictionaries)
    */
    for(prop in data) {
        keys.push(prop);
    }

    for(var i = 0; i < keys.length; i++) {
        graph_data.push({
            value: data[keys[i]]['count'],
            color: data[keys[i]]['color'],
            label: keys[i]
        });
    }
    // Get the context of the canvas element we want to select
    ctx = document.getElementById('myChart').getContext('2d')
    // And for a doughnut chart
    myDoughnutChart = new Chart(ctx).Pie(graph_data)
});


//Auto Copyright
document.getElementById('copyright').innerHTML = new Date().getFullYear();
var birthday = new Date(1998,10,22);
var age = ((new Date() - birthday) / 1000 / 60 / 60 / 24 / 365);
var precision = 1000; //However many zeros is how many places
document.getElementById('age').innerHTML = Math.floor(age*precision)/precision;
