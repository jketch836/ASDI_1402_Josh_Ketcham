var crud = require('CrudFile');

//Window open
var tableWin = Ti.UI.createWindow({
	title : 'Council Members',
	backgroundColor : '#fff'
});
exports.tableWin = tableWin;
//Window end

//pic open
var picTabard = Ti.UI.createImageView({
	sheight : Ti.UI.setHeight,
	width : Ti.UI.setWidth,
	image : 'guild_tabard.png'
});
//pic end

//search and table open
var searchbar = Ti.UI.createSearchBar({
	top : 0,
	hintText : 'Search',
	barColor : '#fff'
});

var memTable = Titanium.UI.createTableView({
	search : searchbar,
	font : {
		fontStyle : 'Helvetica',
		fontSize : '12dp'
	},
	opacity : .8
});
exports.memTable = memTable;
//search and table close

//table eventlistener start
memTable.addEventListener('click', function(e) {
	var name, division, level, achieve, comment;
	
	name = e.rowData.name;
	division = e.rowData.division;
	level = e.rowData.level;
	achieve = e.rowData.acheive;
	comment = e.rowData.comment;
	
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
	var saveBTN = Ti.UI.createButton({
		systemButton : Ti.UI.iPhone.SystemButton.SAVE
	});
	saveBTN.addEventListener('click', function() {
		//calling edit func from CrudFile
		crud.saveFunc(name, division, level, acheive);
		// console.log(name);
		//closing window and nav
		savWin.close();
		savWinNav.close();
	});

	//table event listener main Code
	savWin.setRightNavButton(saveBTN);
	savWin.setLeftNavButton(cancelBTN);
	savWin.add(nameView, lvlView, achView, divView, commView);
	savWinNav.open();
});
//table eventlistener end

//Main Code
tableWin.add(picTabard, memTable);
tableWin.open();
