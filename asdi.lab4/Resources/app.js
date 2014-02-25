// created tab group
var theTabs = Ti.UI.createTabGroup();

// created character tab and toon window
var toonWin = Ti.UI.createWindow({
	title : 'Council of Judgement Members',
	backgroundColor : '#fff',
	url : 'remoteAPI.js'
});
var toonTab = Ti.UI.createTab({
	image : 'toon.png',
	title : 'Council Members',
	window : toonWin
});

// created favorite tab and fav window
var favWin = Ti.UI.createWindow({
	height : '470dp',
	width : 320,
	title : 'Favorite Members',
	backgroundColor : '#fff',
	url : 'favorites.js'
});
var favTab = Ti.UI.createTab({
	image : 'fav.png',
	title : 'Favorite Members',
	window : favWin
});

//Main Code
theTabs.addTab(toonTab);
theTabs.addTab(favTab);
theTabs.open();