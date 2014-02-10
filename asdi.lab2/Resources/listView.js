var councilURL = 'http://us.battle.net/api/wow/guild/the-venture-co/The%20Council%20of%20judgement?fields=members';


var json, wowAPI;
var remoteResponse = function() {
	json = JSON.parse(this.responseText);
//    wowAPI = json.members;
    
   var win = Ti.UI.createWindow();


//console.log(wowAPI);

for (var i=0; i < json.members[i].length; i++){
var apiTableView = Ti.UI.createTableView({	
//	search: search,
	top:0,
	height: 74
	});
var tableRows = Ti.UI.createTableViewRow({
		title: json.members[i].character["name"]
	});
var data = [];
		name = json.members[i].charcter.name;
		specName = json.members[i].charcter.spec.name;
		race = json.members[i].charcter.race;
		level = json.members[i].charcter.level;
		thumbnail = 'http://us.battle.net/static-render/us/' + json.members[i].charcter.thumbnail;
		description = json.members[i].charcter.spec.description;
		role = json.members[i].charcter.spec.role;
};
apiTableView.setData(data);
apiTableView.add(tableRows);
win.add(apiTableView);
win.open();

for (var i=0; i < json.members.length; i++){
		var name = json.members[i];
//		console.log(json.members);
	};
console.log(name);
};





var remoteError = function(e) {
    Ti.API.debug("Status: " + this.status);
    Ti.API.debug("Text: " + this.responseText);
    Ti.API.debug("Error: " + e.error);
    alert("There's a problem pulling remote data");
};

var xhr = Ti.Network.createHTTPClient({
    onload: remoteResponse,
    onerror: remoteError,
    timeout:5000
});

//Main Code
xhr.open('GET', councilURL);
xhr.send();

// 
// var allthem = xhr;
// 
// exports.allthem;