//Main Window and Table

var mWin = Titanium.UI.createWindow({
	title: "Object Data",
	backgroundColor: "#fff"
});
var navWindow = Ti.UI.iOS.createNavigationWindow({
	window: mWin
});

var objectData = require ('object_data');
var objectTable = [];
var aTable = Ti.UI.createTableView({
	data: objectTable
});


//Table Sections
var charSection = Ti.UI.createTableViewSection ({
	headerTitle: "Rurouni Kenshin Characters",
	footerTitle: "Hope you enjoyed Meeting the Characters"
});
var bookSection = Ti.UI.createTableViewSection ({
	headerTitle: "Book Series Information",
	footerTitle: "Hope you enjoyed the Information"
});
var objectTableSec = [charSection, bookSection];


var charObjectRows = function () {
	for (i = 0; i < objectData.chara.length; i++) {	
		var charaRow = Ti.UI.createTableViewRow({
			height: "40dp",
			top: 20
		});
		var charNameLabel = Ti.UI.createLabel({
			text: objectData.chara[i].name,
			font: {fontSize: "18dp",fontWeight: "bold"},
			left: 20
		});
		
		charaRow.addEventListener("click",function(a){
			var cInfoWindow = Ti.UI.createWindow({
				backgroundColor: "#fff"
			});	
			var winView = Ti.UI.createView({
				top: 0,
				borderRadius: 10,
				height: 'auto',
				width: 320,
				backgroundColor: "#C1CDCD"
			});
			var aboutLabel = Ti.UI.createLabel({
				text: objectData.chara[a.index].about(),
				color: "#000",
				top: 180
			});		
			var infoLabel = Ti.UI.createLabel({
				text: objectData.chara[a.index].info(),
				color: "#000",
				top: 50
			});
			console.log(objectData.chara[a.index].about());			
			winView.add(aboutLabel, infoLabel);
			cInfoWindow.add(winView);	
			navWindow.openWindow(cInfoWindow, {animated:true});
		});	
		charaRow.add(charNameLabel);
		charSection.add(charaRow);
		objectTable.push(charaRow);
	};
};


var bookObjectRows = function () {
	for (i = 0; i < objectData.books.length; i++) {	
		var bookRow = Ti.UI.createTableViewRow({
			top: 20,
			height: "40dp"
		});
		var bookNameLabel = Ti.UI.createLabel({
			left: 20,
			text: objectData.books[i].author,
			font: {fontSize: "18dp",fontWeight: "bold"}
		});
		
		bookRow.addEventListener("click",function(e){
			var bInfoWindow = Ti.UI.createWindow({
				backgroundColor: "#fff"
			});	
			var bWinView = Ti.UI.createView({
				top: 0,
				borderRadius: 10,
				height: 'auto',
				width: 320,
				backgroundColor: "#EEE8CD"
			});
//			console.log(objectData.books[e.index].about());
			var bAboutLabel = Ti.UI.createLabel({
				text: objectData.books[e.index].about(),
				color: "#000",
				top: 180
			});		
			var bInfoLabel = Ti.UI.createLabel({
				text: objectData.books[e.index].info(),
				color: "#000",
				top: 50
			});
			bWinView.add(bAboutLabel, bInfoLabel);
			bInfoWindow.add(bWinView);	
			navWindow.openWindow(bInfoWindow, {animated:true});
		});	
		bookRow.add(bookNameLabel);
		bookSection.add(bookRow);
		objectTable.push(bookRow);
	};
};


//Main Code
bookObjectRows();
charObjectRows();
aTable.setData(objectTableSec);
mWin.add(aTable);
navWindow.open();