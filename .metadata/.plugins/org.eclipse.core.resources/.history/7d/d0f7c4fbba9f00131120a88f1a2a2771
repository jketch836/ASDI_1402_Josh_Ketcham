var table = require('RemoteTableView');
var memSave = require('favorites');

// created tab group
var theTabs = Ti.UI.createTabGroup();

// created character tab
var toonTab = Ti.UI.createTab({
	title : 'Council Members',
	window : table.tableWin
});

// created favorite tab
var favTab = Ti.UI.createTab({
	title : 'Favorite Members',
	window : memSave.fWin
});

//Main Code

theTabs.addTab(favTab);
theTabs.addTab(toonTab);
theTabs.open();