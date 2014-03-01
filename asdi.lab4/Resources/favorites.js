var crud = require('CrudFile');

var fWin = Ti.UI.createWindow({
	title : 'Favorite Members',
	backgroundColor : '#fff'
});
exports.fWin = fWin;

var picTabard = Ti.UI.createImageView({
	height : Ti.UI.setHeight,
	width : Ti.UI.setWidth,
	image : 'guild_tabard.png'
});

var searchbar = Ti.UI.createSearchBar({
	top : 0,
	hintText : 'Search',
	barColor : '#fff'
});

var saveMem = Titanium.UI.createTableView({
	search : searchbar,
	font : {
		fontStyle : 'Helvetica',
		fontSize : '12dp'
	},
	opacity : .8
});

saveMem.addEventListener('click', function(e) {
	var name, division, level, achieve, comment, id;

	name = e.rowData.name;
	division = e.rowData.division;
	level = e.rowData.level;
	achieve = e.rowData.acheive;
	comment = e.rowData.comment;
	id = e.rowData.id;

	// Window and nav begin
	var savWin = Ti.UI.createWindow({
		title : name,
		backgroundColor : '#fff'
	});

	var savWinNav = Ti.UI.iOS.createNavigationWindow({
		window : savWin
	});
	// Window and nav end

	//image Begin
	var picTabard = Ti.UI.createImageView({
		height : Ti.UI.setHeight,
		width : Ti.UI.setWidth,
		image : 'guild_tabard.png',
		opacity : .2
	});
	//image End

	//Cancel Button Begin
	var cancelBTN = Ti.UI.createButton({
		systemButton : Ti.UI.iPhone.SystemButton.CANCEL
	});

	cancelBTN.addEventListener('click', function() {
		savWinNav.close();
		savWin.close();
	});
	//Cancel Button End

	//Labels Begin
	var nameView = Ti.UI.createLabel({
		top : '75dp',
		left : 35,
		text : 'Name: ' + name
	});

	var achView = Ti.UI.createLabel({
		top : '125dp',
		left : 35,
		text : 'Class: ' + division
	});

	var lvlView = Ti.UI.createLabel({
		top : '175dp',
		left : 35,
		text : 'Level: ' + level
	});

	var divView = Ti.UI.createLabel({
		top : '225dp',
		left : 35,
		text : 'Acheivment Points: ' + acheive
	});

	var commView = Ti.UI.createLabel({
		top : '275dp',
		left : 35,
		text : 'Comment: ' + comment
	});
	//Labels End

	//Save Button Begin
	var editBTN = Ti.UI.createButton({
		systemButton : Ti.UI.iPhone.SystemButton.EDIT
	});
	editBTN.addEventListener('click', function() {
		crud.editFunc(id);
	});
	//Save Button End

	savWin.setRightNavButton(editBTN);
	savWin.setLeftNavButton(cancelBTN);
	savWin.add(nameView, lvlView, achView, divView, commView);
	savWinNav.open();
});

// Main Code
saveMem.setData(crud.guildData);
fWin.add(picTabard, saveMem);
fWin.open();
