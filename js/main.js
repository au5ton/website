
//Activity feed

GitHubActivity.feed({
    username: 'au5ton',
    selector: '#feed',
    limit: 6 // optional
});

var hidden = true;
$('#showmorestats').on('mouseup tap',function(){
    if(hidden) {
        $('.stats-section').show();
        hidden = false;
        $('#showmorestats').html('Hide extra stats');
    }
    else {
        $('.stats-section').hide();
        hidden = true;
        $('#showmorestats').html('Show more stats');
    }
});
$('.stats-section').hide();


//Most used languages

//data from austinj-stats
var data = {"Arduino":{"color":"#bd79d1","count":2},"HTML":{"color":"#e44b23","count":10},"Java":{"color":"#b07219","count":9},"JavaScript":{"color":"#f1e05a","count":9}};
var keys = []; //keys to the Dictionary (object)
var graph_data = [];

/*
Gets the names of the keys and saves them in keys so that we can access
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
var ctx = document.getElementById('myChart').getContext('2d');
// And for a doughnut chart
var myDoughnutChart = new Chart(ctx).Doughnut(graph_data);



//Popular repositories

function createRepoCardElement(repo) {
    var elem = document.createElement('div');
    elem.setAttribute('class','inline-block');
    elem.innerHTML = document.getElementById('repo-card-template').innerHTML;
    elem.innerHTML = String(elem.innerHTML).replace('{{REPO_FULL_NAME}}',repo['full_name']);
    elem.innerHTML = String(elem.innerHTML).replace('{{REPO_STARGAZERS_COUNT}}',repo['stargazers_count']);
    elem.innerHTML = String(elem.innerHTML).replace('{{REPO_DESCRIPTION}}',repo['description']);
    elem.innerHTML = String(elem.innerHTML).replace('{{REPO_HTML_URL}}',repo['html_url']);
    return elem;
}

var data2 = [{"full_name":"au5ton/DirectLinks","description":"Circumvents certain techniques used by Google and Facebook to track link clicks... for Chrome!","html_url":"https://github.com/au5ton/DirectLinks","updated_at":"2015-10-01T08:47:29Z","stargazers_count":9},{"full_name":"au5ton/resume","description":"A forkable résumé page for your Github Pages website","html_url":"https://github.com/au5ton/resume","updated_at":"2015-07-27T13:35:30Z","stargazers_count":3}];

$('.repo-card-container').empty();
for(var i = 0; i < data2.length; i++) {
    $('.repo-card-container').append(createRepoCardElement(data2[i]));
}







//Auto Copyright
document.getElementById('copyright').innerHTML = new Date().getFullYear();
var birthday = new Date(1998,10,22);
var age = ((new Date() - birthday) / 1000 / 60 / 60 / 24 / 365);
var precision = 1000; //However many zeros is how many places
document.getElementById('age').innerHTML = Math.floor(age*precision)/precision;
