Ti.UI.setBackgroundColor('White');

var mWin = Ti.UI.createWindow({
	title: "Data, Data, Data"
});
var navWindow = Ti.UI.iOS.createNavigationWindow({
	window: mWin
});

var objectData = require('object_data');
var aTable = Ti.UI.createTableView;
var objectTableData = [];

//Table Sections
var mangaSection = Ti.UI.createTableViewSection ({
	headerTitle: "Rurouni Kenshin Manga",
	footerTitle: "Hope you enjoyed the Information"
});
var bookSection = Ti.UI.createTableViewSection ({
	headerTitle: "Book information",
	footerTitle: "Hope you enjoyed the Information"
});
var theDataSections = [mangaSection, bookSection];
aTable.setData(theDataSections);

//Table Row Info
var objectMangaRows = function(){
		var objectWin = Ti.UI.createWindow ({
			title: this.name
		});
		var objectLabel = Ti.UI.createLabel({
			top:0,
			left: 5,
			color: '#fff',
			text: objectData.manga[i].name,
			font: {fontFamily: 'Helvetica', fontSize:'18', fontColor: "'#000"}	
		});
		objectWin.add(objectLabel);
		navWindow.openWindow(objectWin);
};

for (i=0; j=objectData.manga[i].length; i<j, i++) {
	var tableRow = Ti.UI.createTableRow ({
		height: 100
	});
	mangaSection.add(tableRow);
	tableRow.addEventListener("click", objectMangaRows);


//Main Code
mWin.add(aTable);
navWindow.open();