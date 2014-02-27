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

memTable.addEventListener('click', function(e) {
	crud.editWin;
	// console.log(e.rowData.name);
	// console.log(e.rowData.division);
	// console.log(e.rowData.level);
	// console.log(e.rowData.acheive);
	// console.log(e.rowData.title);
});

//Main Code
memTable.setData(crud.guildData);
tableWin.add(picTabard, memTable);
tableWin.open();