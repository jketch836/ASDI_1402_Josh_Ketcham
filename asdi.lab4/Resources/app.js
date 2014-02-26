var mWin = Ti.UI.createWindow({
	title : 'Council of Judgement',
	backgroundColor : '#fff'
});

var mainWinNav = Ti.UI.iOS.createNavigationWindow({
	window : mWin
});

var picTabard = Ti.UI.createImageView({
	height : Ti.UI.setHeight,
	width : Ti.UI.setWidth,
	image : 'guild_tabard.png'
});

//ButtonBar start
var bars = Titanium.UI.createButtonBar({
	labels : ['Council Members', 'Favorite Members'],
	backgroundColor : '#000080',
	top : 10,
	style : Titanium.UI.iPhone.SystemButtonStyle.BAR,
	height : 40,
	width : 250
});

bars.addEventListener('click', function(toons) {
	if (toons.index === 0) {
		var toonWin = Ti.UI.createWindow({
			title : 'CoJ Members',
			backgroundColor : '#fff',
			url : 'remoteAPI.js'
		});
	mainWinNav.openWindow(toonWin, {animate : true});
	
	} else if (toons.index === 1) {
		var favWin = Ti.UI.createWindow({
			title : 'Favorite Members',
			backgroundColor : '#fff',
			url : 'favorites.js',
			nav : mainWinNav
		});
		mainWinNav.openWindow(favWin, {animate : true});
	};
});
//ButtonBar End

//Main Code
mWin.add(picTabard, bars);
mainWinNav.open();