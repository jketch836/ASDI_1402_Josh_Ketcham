var mainWin = Ti.UI.createWindow({
	backgroundColor:"#999",
	title:"Contacts",
	barColor:'#D4D4D4',
	url: 'CRUD.js'
});


var nWin = Ti.UI.iOS.createNavigationWindow({
  window: mainWin
});


//Main Code
nWin.open();