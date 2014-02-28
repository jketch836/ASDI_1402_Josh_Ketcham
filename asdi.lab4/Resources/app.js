var table = require('RemoteTableView');
var memSave = require('favorites');
var remote = require('remoteAPI');

// created tab group
var theTabs = Ti.UI.createTabGroup();

// created character tab
var toonTab = Ti.UI.createTab({
	title : 'Council Members',
	window : table.tableWin
});

// created favorite tab
var favTab = Ti.UI.createTab({
	title : 'Comments',
	window : memSave.comWin
});

//Main Code
theTabs.addTab(toonTab);
theTabs.addTab(favTab);
theTabs.open();