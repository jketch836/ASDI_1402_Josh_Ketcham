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
var cTable = Ti.UI.createTableView({
	data: objectTable,
	height: 250,
	top: 0
});
var bTable = Ti.UI.createTableView({
	data: objectTable,
	height: 250,
	top: 250
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
var objectTableSec = [charSection];
var objectBookSec = [bookSection];


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
			var charaImage = Ti.UI.createImageView({
				image: objectData.chara[a.index].image,
				top: 20,
				height: '200dp',
				width: '175dp'
			});
			var statsLabel = Ti.UI.createLabel({
				text: objectData.chara[a.index].stats(),
				color: "#000",
				top: 230
			});	
			var infoLabel = Ti.UI.createLabel({
				text: objectData.chara[a.index].info(),
				color: "#000",
				top: 340
			});			
			var aboutLabel = Ti.UI.createLabel({
				text: objectData.chara[a.index].about(),
				color: "#000",
				top: 400
			});		

			console.log(objectData.chara[a.index].about());			
			winView.add(statsLabel, aboutLabel, infoLabel, charaImage);
			cInfoWindow.add(winView);	
			navWindow.openWindow(cInfoWindow, {animated:true});
		});	
		charaRow.add(charNameLabel);
		charSection.add(charaRow);
		objectTable.push(charaRow);
	};
};


function bookObjectRows () {
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

		bookRow.addEventListener("click", function(e){
			// console.log('Event fired.');
			// console.log(objectData.books);
			console.log(e.index);
			console.log(objectData.books[e.index]);
			console.log(objectData.books[e.index].author);
			console.log(objectData.books[e.index].series);
			var bInfoWindow = Ti.UI.createWindow({
				title: objectData.books[e.index].author,
				backgroundColor: "#fff"
			});	
			var bWinView = Ti.UI.createView({
				top: 0,
				borderRadius: 20,
				height: 'auto',
				width: 320,
				backgroundColor: "#EEE8CD"
			});
			var bookImage = Ti.UI.createImageView({
				image: objectData.books[e.index].image,
				top: 20,
				height: '200dp',
				width: '225dp'
			});			
			var bAboutLabel = Ti.UI.createLabel({
				text: objectData.books[e.index].about(),
				color: "#000",
				top: 300
			});		
			var bInfoLabel = Ti.UI.createLabel({
				text: objectData.books[e.index].info(),
				color: "#000",
				top: 245
			});
			bWinView.add(bAboutLabel, bInfoLabel, bookImage);
			bInfoWindow.add(bWinView);	
			navWindow.openWindow(bInfoWindow, {animated:true});
//			mWin.openWindow(bInfoWindow, {animated:true});
		});
		bookRow.add(bookNameLabel);
		bookSection.add(bookRow);
		objectTable.push(bookRow);
	};
};




//Main Code
bookObjectRows();
charObjectRows();
cTable.setData(objectTableSec);
bTable.setData(objectBookSec);
mWin.add(bTable, cTable);
navWindow.open();








// //Main Window and Table
// 
// var mWin = Titanium.UI.createWindow({
	// title: "Characters and Books",
	// backgroundColor: "#fff"
// });
// var navWindow = Ti.UI.iOS.createNavigationWindow({
	// window: mWin
// });
// 
// var objectData = require ('object_data');
// var objectTable = [];
// var aTable = Ti.UI.createTableView({
	// data: objectTable
// });
// 
// 
// //Table Sections
// var charSection = Ti.UI.createTableViewSection ({
	// headerTitle: "Rurouni Kenshin Characters",
	// footerTitle: "Hope you enjoyed Meeting the Characters"
// });
// var bookSection = Ti.UI.createTableViewSection ({
	// headerTitle: "Book Series Information",
	// footerTitle: "Hope you enjoyed the Information"
// });
// var objectTableSec = [charSection, bookSection];
// 
// 
// var charObjectRows = function () {
	// for (i = 0; i < objectData.chara.length; i++) {	
		// var charaRow = Ti.UI.createTableViewRow({
			// height: "40dp",
			// top: 20
		// });
		// var charNameLabel = Ti.UI.createLabel({
			// text: objectData.chara[i].name,
			// font: {fontSize: "18dp",fontWeight: "bold"},
			// left: 20
		// });
// 		
		// charaRow.addEventListener("click", function(a){
			// console.log(a.index);
			// console.log(objectData.chara[a.index]);
			// console.log(objectData.chara[a.index].weapon);
			// console.log(objectData.chara[a.index].stats);
			// var cInfoWindow = Ti.UI.createWindow({
				// title: objectData.chara[a.index].name,
				// backgroundColor: "#fff"
			// });	
			// var winView = Ti.UI.createView({
				// top: 0,
				// borderRadius: 20,
				// height: 'auto',
				// width: 320,
				// backgroundColor: "#C1CDCD"
			// });			
			// var charaImage = Ti.UI.createImageView({
				// image: objectData.chara[a.index].image,
				// top: 20,
				// height: '200dp',
				// width: '175dp'
			// });
			// var statsLabel = Ti.UI.createLabel({
				// text: objectData.chara[a.index].stats(),
				// color: "#000",
				// top: 230
			// });	
			// var infoLabel = Ti.UI.createLabel({
				// text: objectData.chara[a.index].info(),
				// color: "#000",
				// top: 340
			// });			
			// var aboutLabel = Ti.UI.createLabel({
				// text: objectData.chara[a.index].about(),
				// color: "#000",
				// top: 400
			// });			
			// winView.add(statsLabel, aboutLabel, infoLabel, charaImage);
			// cInfoWindow.add(winView);	
			// navWindow.openWindow(cInfoWindow, {animated:true});
// //			mWin.openWindow(cInfoWindow, {animated:true});
		// });	
		// charaRow.add(charNameLabel);
		// charSection.add(charaRow);
		// objectTable.push(charaRow);
	// };
// };
// 
// 
// var bookObjectRows = function () {
	// for (i = 0; i < objectData.books.length; i++) {	
		// // Set a new variable here for some shortening later on.
		// var book = objectData.books[i];
// 
		// var bookRow = Ti.UI.createTableViewRow({
			// top: 20,
			// height: "40dp",
			// bookData: book // Setting a custom property on thr bookRow object to be passed to the click event.
		// });
		// var bookNameLabel = Ti.UI.createLabel({
			// left: 20,
			// text: objectData.books[i].author,
			// font: {fontSize: "18dp",fontWeight: "bold"}
		// });
// 				
		// bookRow.addEventListener("click",function(e){
			// // console.log('Event fired.');
			// // console.log(objectData.books);
			// // console.log(e.row.myData);
			// // console.log(e.row.myData.author); 	// Use e.row.myData.author to return the value of objectData.books[i].author
			// var bInfoWindow = Ti.UI.createWindow({
				// title: e.row.bookData.author,
				// backgroundColor: "#fff"
			// });	
			// var bWinView = Ti.UI.createView({
				// top: 0,
				// borderRadius: 20,
				// height: 'auto',
				// width: 320,
				// backgroundColor: "#EEE8CD"
			// });
			// var bookImage = Ti.UI.createImageView({
				// image: e.row.bookData.image,
				// top: 20,
				// height: '200dp',
				// width: '225dp'
			// });			
			// var bAboutLabel = Ti.UI.createLabel({
				// text: e.row.bookData.about(),
				// color: "#000",
				// top: 300
			// });		
			// var bInfoLabel = Ti.UI.createLabel({
				// text: e.row.bookData.info(),
				// color: "#000",
				// top: 245
			// });
			// bWinView.add(bAboutLabel, bInfoLabel, bookImage);
			// bInfoWindow.add(bWinView);	
			// navWindow.openWindow(bInfoWindow, {animated:true});
// //			mWin.openWindow(bInfoWindow, {animated:true});
		// });	
		// bookRow.add(bookNameLabel);
		// bookSection.add(bookRow);
		// objectTable.push(bookRow);
	// };
// };
// 
// //Main Code
// bookObjectRows();
// charObjectRows();
// aTable.setData(objectTableSec);
// mWin.add(aTable);
// navWindow.open();
// //mWin.open();