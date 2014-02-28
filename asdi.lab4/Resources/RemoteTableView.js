var crud = require('CrudFile');

var tableWin = Ti.UI.createWindow({
	title : 'Council Members',
	backgroundColor : '#fff'
});
exports.tableWin = tableWin;

var picTabard = Ti.UI.createImageView({
	sheight : Ti.UI.setHeight,
	width : Ti.UI.setWidth,
	image : 'guild_tabard.png'
});

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

memTable.addEventListener('click', function(e) {
	var saveDia = Ti.UI.createAlertDialog({
		title : 'Save ' + e.rowData.name + '?',
		buttonNames : ['Cancel', 'Save']
	});
	saveDia.addEventListener('click', function(c) {
		if (c.index === 1) {
			crud.saveFunc();
			alert(e.rowData.name + ' is saved');
		} else {
			null;
		}
	});
	saveDia.show();
});

//Main Code
tableWin.add(picTabard, memTable);
tableWin.open();