
/*

Main.js
Client-code for austinj.net

If you're reading this from libraries.js, lol look at all the compressed code above, huh?
This is so we can use the async HTML attribute to make JavaScript loading non-blocking 😎

*/

function escapeHtml(string){return String(string).replace(/[&<>"'\/]/g,function(s){return entityMap[s]})}var entityMap={"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;","/":"&#x2F;"};

//Thanks: https://gist.github.com/jakebellacera/9261266
function css_time_to_milliseconds(time_string){var milliseconds,num=parseFloat(time_string,10),unit=time_string.match(/m?s/);switch(unit&&(unit=unit[0]),unit){case"s":milliseconds=1e3*num;break;case"ms":milliseconds=num;break;default:milliseconds=0}return milliseconds}

document.addEventListener("touchstart", function(){}, true);
console.log(document.body.clientWidth);

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
        url: 'https://austinjnet-stats.herokuapp.com/api/github/languages?include_colors=true',
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
