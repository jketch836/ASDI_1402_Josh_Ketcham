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
	top : '44dp',
	search : searchbar,
	font : {
		fontStyle : 'Helvetica',
		fontSize : '12dp'
	},
	opacity : .8
});

memTable.addEventListener('click', function(e) {
	crud.editWin();
	console.log(e.rowData.name);
	console.log(e.rowData.division);
	console.log(e.rowData.level);
	console.log(e.rowData.acheive);
	console.log(e.rowData.title);
});

memTable.setData(crud.guildData);
// tableWin.add(searchbar);
tableWin.add(picTabard, searchbar, memTable);
tableWin.open(); 