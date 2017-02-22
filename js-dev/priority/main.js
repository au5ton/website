/*

Main.js
Client-code for austinj.net

If you're reading this from libraries.js, lol look at all the compressed code above, huh?
This is so we can use the async HTML attribute to make JavaScript loading non-blocking 😎

*/

function escapeHtml(string) {
    return String(string).replace(/[&<>"'\/]/g, function(s) {
        return entityMap[s]
    })
}
var entityMap = {
    "&": "&amp;",
    "<": "&lt;",
    ">": "&gt;",
    '"': "&quot;",
    "'": "&#39;",
    "/": "&#x2F;"
};

//Thanks: https://gist.github.com/jakebellacera/9261266
function css_time_to_milliseconds(time_string) {
    var milliseconds, num = parseFloat(time_string, 10),
        unit = time_string.match(/m?s/);
    switch (unit && (unit = unit[0]), unit) {
        case "s":
            milliseconds = 1e3 * num;
            break;
        case "ms":
            milliseconds = num;
            break;
        default:
            milliseconds = 0
    }
    return milliseconds
}

document.addEventListener("touchstart", function() {}, true);
console.log(document.body.clientWidth);

if (document.body.clientWidth > 104) {

    //Activity feed
    document.getElementById('loader-container1').outerHTML = '';
    GitHubActivity.feed({
        username: 'au5ton',
        selector: '#feed',
        limit: 6 // optional
    });

    //Most used languages
    var keys = []; //keys to the Dictionary (object)
    var graph_data = {
        labels: [],
        datasets: [{
            data: [],
            backgroundColor: []
        }]
    };
    var ctx;
    var myPieChart;
    Chart.defaults.global.legend.display = false;
    
    if(document.body.clientWidth > 600) {
        Chart.defaults.global.legend.display = true;
    }

    fetch('https://austinjnet-stats.herokuapp.com/api/github/languages?include_colors=true')
        .then(function(response) {
            // handle HTTP response
            if (response.ok) {
                return response.json();
            } else {
                console.log(response.statusText);
                document.querySelector('.chart-container').innerHTML = '<h5>Failed to load (HTTP ' + response.status + ')</h5><img style=\'width:60px;height:60px;\' src=\'img/red_x.png\'>';
            }
        })
        .then(function(data) {
            document.getElementById('loader-container2').outerHTML = '';
            /*
            Gets the names of the keys and saves them in `keys` so that we can access
            `data` with bracket notation (like Swift dictionaries)

            This is becuase the response object `data` isn't an array, it's an object with properties.
            */
            for (prop in data) {
                keys.push(prop);
            }

            for (var i = 0; i < keys.length; i++) {
                graph_data.labels.push(keys[i]);
                graph_data.datasets[0].data.push(data[keys[i]]['count']);
                graph_data.datasets[0].backgroundColor.push(data[keys[i]]['color']);
            }
            // Get the context of the canvas element we want to select
            ctx = document.getElementById('myChart').getContext('2d');
            // And for a pie chart
            myPieChart = new Chart(ctx, {
                type: 'pie',
                data: graph_data
            });
        })
        .catch(function(ex) {
            console.log(ex);
            document.querySelector('.chart-container').innerHTML = '<h5>Parsing failed (' + ex + ').</h5><img style=\'width:60px;height:60px;\' src=\'img/red_x.png\'>';
        });

}
