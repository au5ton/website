
/*

Main.js
Client-code for austinj.net

If you're reading this from libraries.js, lol look at all the compressed code above, huh?
This is so we can use the async HTML attribute to make JavaScript loading non-blocking 😎

*/

var v = new Viento();

var entityMap = {
    "&": "&amp;",
    "<": "&lt;",
    ">": "&gt;",
    '"': '&quot;',
    "'": '&#39;',
    "/": '&#x2F;'
};

function escapeHtml(string) {
    return String(string).replace(/[&<>"'\/]/g, function (s) {
        return entityMap[s];
    });
}

document.addEventListener("touchstart", function(){}, true);

console.log(document.body.clientWidth);

//We're making this Apple Watch compatible for shits and giggles

//Geopattern pattern
try {

    if(document.body.clientWidth <= 104) {
        console.log('hello');
        throw {};
    }

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

if(document.body.clientWidth > 104) {

    //Activity feed
    $('#loader-container1').remove();
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

    $.ajax({
        url: 'https://austinjnet-stats.herokuapp.com/api/mostusedlanguages?include_colors=true',
        type: 'get',
        error: function(XMLHttpRequest, textStatus, errorThrown){
            $('.chart-container').empty();
            $('.chart-container').html('<h5>Failed to load (HTTP '+XMLHttpRequest.status+')</h5><img style=\'width:60px;height:60px;\' src=\'img/red_x.png\'>');
        },
        success: function(data){
            $('#loader-container2').remove();
            /*
            Gets the names of the keys and saves them in `keys` so that we can access
            `data` with bracket notation (like Swift dictionaries)

            This is becuase the response object `data` isn't an array, it's an object with properties.
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
        }
    });

    $.ajax({
        url: 'https://austinjnet-stats.herokuapp.com/api/soundcloud/likes?count=10',
        type: 'get',
        error: function(XMLHttpRequest, textStatus, errorThrown){
            $('.song-grid').empty();
            $('.song-grid').html('<h5>Failed to load (HTTP '+XMLHttpRequest.status+')</h5><img style=\'width:60px;height:60px;\' src=\'img/red_x.png\'>');
        },
        success: function(likes){
            $('.song-grid').empty();
            for(var i = 0; i < likes.length; i++) {
                var elem = createSongElement(likes[i]);
                $(elem).addClass('hidden');
                $('.song-grid').append(elem);
            }
            $('.tooltipped').tooltip({delay: 0});

            v.burst({
                elements: $('.song-grid .song'),
                mode: 'oneAtATime',
                sortingMethod: "topToBottom",
                animation: {
                    name: 'zoomIn',
                    duration: '0.25s',
                    type: 'entrance'
                }
            });
        }
    });

}

function createSongElement(t) {
    var elem = document.createElement('div');
    elem.setAttribute('class', 'song');
    elem.innerHTML = document.getElementById('song-template').innerHTML;
    elem.innerHTML = String(elem.innerHTML).replace('{{PERMALINK}}',t['permalink']);
    elem.innerHTML = String(elem.innerHTML).replace('{{SONG_TITLE}}',escapeHtml(t['song_title']));
    elem.innerHTML = String(elem.innerHTML).replace('{{COVER_ART}}',t['cover_art']);
    return elem;
}

//Auto Copyright
document.getElementById('copyright').innerHTML = new Date().getFullYear();
