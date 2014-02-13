var mWin = Ti.UI.createWindow({
	backgroundColor: "#fff"
});

var lionPic = Ti.UI.createImageView({
	top: '65dp',
	height: 'auto',
	width: '385dp',
	image: 'backgroundlion.png'
});

var guildMemView = Ti.UI.createView({
	backgroundColor: "#022d5a",
	borderRadius: 10,
	opacity: .8,
	height: '150dp',
	width: 'auto',
	top: '100dp',
	center: 0
});

var guildMemLabel = Ti.UI.createLabel({
	text: "Council Roster",
	font: {fontSize: 24, fontFamily: "Helvetica", fontWeight: "bold"},
	color: '#fff',
	center: 0
});
guildMemView.add(guildMemLabel);

guildMemView.addEventListener('click', function(){
	var remote1 = require('remoteAPImem');
});


var aboutGuildView = Ti.UI.createView({
	backgroundColor: "#c48c1b",
	borderRadius: 10,
	opacity: .8,
	height: '150dp',
	width: 'auto',
	top: '270dp',
	center: 0,
	file: 'remoteAPIguild.js'
});

var aboutGuildLabel = Ti.UI.createLabel({
	text: "About the Council",
	font: {fontSize: 24, fontFamily: "Helvetica", fontWeight: "bold"},
	color: "#fff",
	center: 0,
	file: 'remoteAPIguild.js'
});
aboutGuildView.add(aboutGuildLabel);

aboutGuildView.addEventListener('click', function(){
	var remote2 = require('remoteAPIguild');
});


//Main Code
mWin.add(lionPic, guildMemView, aboutGuildView);
mWin.open();