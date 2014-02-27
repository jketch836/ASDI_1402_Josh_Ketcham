var crud = require('CrudFile');

var tableWin = Ti.UI.createWindow({
	title : 'CoJ Members',
	backgroundColor : '#fff'
});
exports.tableWin = tableWin;

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
	}
});

memTable.addEventListener('click', function(e) {
	crud.editFunc();
	console.log(e.rowData.name);
	console.log(e.rowData.division);
	console.log(e.rowData.level);
	console.log(e.rowData.acheive);
	console.log(e.rowData.title);
});

memTable.setData(crud.guildData);
tableWin.add(searchbar);
tableWin.add(memTable);
tableWin.open();

