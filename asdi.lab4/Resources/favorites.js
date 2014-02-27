var crud = require('CrudFile');

var fWin = Ti.UI.createWindow({
	title : 'Favorite Members',
	backgroundColor : '#fff'
});
exports.fWin = fWin;

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
	}
});

saveMem.addEventListener('click', function() {
	// crud.editWin();
});

// Main Code
saveMem.setData(crud.guildData);
fWin.add(saveMem);
fWin.open(); 