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
	// Window and nav begin
	var savWin = Ti.UI.createWindow({
		title : e.rowData.name,
		backgroundColor : '#fff'
	});

	var savWinNav = Ti.UI.iOS.createNavigationWindow({
		window : savWin
	});
	// Window and nav end

	crud.select;

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
		text : 'Name: ' + e.rowData.name
	});

	var achView = Ti.UI.createLabel({
		top : '125dp',
		left : 35,
		text : 'Class: ' + e.rowData.division
	});

	var lvlView = Ti.UI.createLabel({
		top : '175dp',
		left : 35,
		text : 'Level: ' + e.rowData.level
	});

	var divView = Ti.UI.createLabel({
		top : '225dp',
		left : 35,
		text : 'Acheivment Points: ' + e.rowData.acheive
	});

	var commView = Ti.UI.createLabel({
		top : '275dp',
		left : 35,
		text : 'Comment: ' + e.rowData.comment
	});
	//Labels End

	//Save Button Begin
	var saveBTN = Ti.UI.createButton({
		systemButton : Ti.UI.iPhone.SystemButton.EDIT
	});
	saveBTN.addEventListener('click', function() {
		crud.editFunc; //calling edit func from CrudFile
		memWin.close();
		memWinNav.close();
		alert(e.rowData.name + " is updated");
	});
	//Save Button End

	//Delete Button Begin
	var deleteBTN = Ti.UI.createButton({
		top : '275dp',
		center : 0,
		title : "Delete",
		style : Ti.UI.iPhone.SystemButtonStyle.ACTION,
		font : {
			fontWeight : 'bold',
			fontSize : 18,
			fontFamily : 'Helvetica'
		},
		color : '#EE2C2C'
	});
	deleteBTN.addEventListener('click', function() {
		crud.delFunc; //calling delete func from CrudFile
		savWin.close();
		savWinNav.close();
		alert(e.rowData.name + " is gone");
	});
	//Delete Button End

	savWin.setRightNavButton(saveBTN);
	savWin.setLeftNavButton(cancelBTN);
	savWin.add(nameView, lvlView, achView, divView, commView, deleteBTN);
	savWinNav.open();
});

// Main Code
saveMem.setData(crud.guildData);
fWin.add(picTabard, saveMem);
fWin.open();
