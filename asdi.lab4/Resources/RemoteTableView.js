var crud = require('CrudFile'); //caling crudFlie

// Window Begin
var tableWin = Ti.UI.createWindow({
	title : 'Council Members',
	backgroundColor : '#fff'
});
exports.tableWin = tableWin;
// Window End

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

var data = [];
exports.data = data;

var memTable = Titanium.UI.createTableView({
	search : searchbar,
	font : {
		fontStyle : 'Helvetica',
		fontSize : '12dp'
	},
	opacity : .8
});
exports.memTable = memTable;


//Event Listner Begin
memTable.addEventListener('click', function(e) {
	// console.log(e.rowData.name);
	// console.log(e.rowData.division);
	// console.log(e.rowData.level);
	// console.log(e.rowData.acheive);
	// console.log(e.rowData.title);

// Window and nav Begin
	var memWin = Ti.UI.createWindow({
		title : e.rowData.name,
		backgroundColor : '#fff'
	});

	var memWinNav = Ti.UI.iOS.createNavigationWindow({
		window : memWin
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
		memWinNav.close();
		memWin.close();
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
//Labels End

//Save Button Begin
	var saveBTN = Ti.UI.createButton({
		systemButton : Ti.UI.iPhone.SystemButton.SAVE
	});
	saveBTN.addEventListener('click', function() {
		memWin.close();
		memWinNav.close();
		alert(e.rowData.name + " is saved");
	});
//Save Button End

//Delete Button Begin
	var deleteBTN = Ti.UI.createButton({
		top : 340,
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
		memWin.close();
		memWinNav.close();
		alert(e.rowData.name + " is gone");
	});
//Delete Button End

//memeTable Event listener Main Code
	memWin.setRightNavButton(saveBTN);
	memWin.setLeftNavButton(cancelBTN);
	memWin.add(nameView, lvlView, achView, divView, picTabard, deleteBTN);
	memWinNav.open();
});
//Event Listner End


//Main Code
memTable.setData(crud.guildData);
tableWin.add(picTabard, memTable);
tableWin.open();
