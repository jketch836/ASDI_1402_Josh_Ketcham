

var comWin = Ti.UI.createWindow({
	title : 'Comments',
	backgroundColor : '#fff'
});
exports.comWin = comWin;

var picTabard = Ti.UI.createImageView({
	height : Ti.UI.setHeight,
	width : Ti.UI.setWidth,
	image : 'guild_tabard.png'
});

var comment = Ti.UI.createTextField({
	top : 0,
	left : 0,
	width : 250,
	height : 40,
	borderRadius : 5,
	borderColor : '#000',
	hintText : 'Comments',
	textAlign : 'center',
	font : {
		fontSize : 18,
		fontWeight : 'bold'
	},
	keyboardType : Ti.UI.KEYBOARD_DEFAULT,
	returnKeyType : Ti.UI.RETURNKEY_DEFAULT
});

//Submit button
var commBTN = Ti.UI.createButton({
	title : 'Submit',
	top : 5,
	right : 10,
	style : Ti.UI.iPhone.SystemButtonStyle.ACTION,
});

var saveMem = Titanium.UI.createTableView({
	top : 45,
	font : {
		fontStyle : 'Helvetica',
		fontSize : '12dp'
	},
	opacity : .8
});

saveMem.addEventListener('click', function() {
	var editDIA = Ti.UI.createAlertDialog({
		title : 'Edit/Delete',
		buttonNames : ['Edit', 'Delete', 'Cancel']
	});
	editDIA.show();
	editDIA.addEventListener('click', function(b) {
		if (b.index === 0) {
			var memWin = Ti.UI.createWindow({
				title : e.rowData.name,
				backgroundColor : '#fff'
			});

			var memWinNav = Ti.UI.iOS.createNavigationWindow({
				window : memWin
			});

			var cancelBTN = Ti.UI.createButton({
				systemButton : Ti.UI.iPhone.SystemButton.CANCEL
			});

			cancelBTN.addEventListener('click', function() {
				memWinNav.close();
				memWin.close();
			});

			var comView = Ti.UI.createLabel({
				top : '75dp',
				left : 35,
				text : b.rowData.comment
			});

			var updateBTN = Ti.UI.createButton({
				systemButton : Ti.UI.iPhone.SystemButton.SAVE
			});
			updateBTN.addEventListener('click', function() {
				// comment.edit;
				memWin.close();
				memWinNav.close();
				alert("Your Comment has been Updated");
			});

			memWin.setRightNavButton(updateBTN);
			memWin.setLeftNavButton(cancelBTN);
			memWin.add(comView);
			memWinNav.open();
		} else if (b.index === 1) {
			// comment.del;
		} else {
			null;
		}
	});
});

// Main Code
saveMem.setData();

comWin.add(picTabard, comment, commBTN, saveMem);
comWin.open();





	// // Window and nav Begin
	// var memWin = Ti.UI.createWindow({
		// title : e.rowData.name,
		// backgroundColor : '#fff'
	// });
// 
	// var memWinNav = Ti.UI.iOS.createNavigationWindow({
		// window : memWin
	// });
	// // Window and nav end
// 
	// //image Begin
	// var picTabard = Ti.UI.createImageView({
		// height : Ti.UI.setHeight,
		// width : Ti.UI.setWidth,
		// image : 'guild_tabard.png',
		// opacity : .2
	// });
	// //image End
// 
	// //Cancel Button Begin
	// var cancelBTN = Ti.UI.createButton({
		// systemButton : Ti.UI.iPhone.SystemButton.CANCEL
	// });
// 
	// cancelBTN.addEventListener('click', function() {
		// memWinNav.close();
		// memWin.close();
	// });
	// //Cancel Button End
// 
	// //Labels Begin
	// var nameView = Ti.UI.createLabel({
		// top : '75dp',
		// left : 35,
		// text : 'Name: ' + e.rowData.name
	// });
// 
	// var achView = Ti.UI.createLabel({
		// top : '125dp',
		// left : 35,
		// text : 'Class: ' + e.rowData.division
	// });
// 
	// var lvlView = Ti.UI.createLabel({
		// top : '175dp',
		// left : 35,
		// text : 'Level: ' + e.rowData.level
	// });
// 
	// var divView = Ti.UI.createLabel({
		// top : '225dp',
		// left : 35,
		// text : 'Acheivment Points: ' + e.rowData.acheive
	// });
// 
	// var divView = Ti.UI.createLabel({
		// top : '275dp',
		// left : 35,
		// text : 'Comment: ' + e.rowData.comment
	// });
	// //Labels End
// 
	// //Save Button Begin
	// var saveBTN = Ti.UI.createButton({
		// systemButton : Ti.UI.iPhone.SystemButton.SAVE
	// });
	// saveBTN.addEventListener('click', function() {
		// memWin.close();
		// memWinNav.close();
		// alert(e.rowData.name + " is saved");
	// });
	// //Save Button End
// 
	// //Delete Button Begin
	// var deleteBTN = Ti.UI.createButton({
		// top : 340,
		// center : 0,
		// title : "Delete",
		// style : Ti.UI.iPhone.SystemButtonStyle.ACTION,
		// font : {
			// fontWeight : 'bold',
			// fontSize : 18,
			// fontFamily : 'Helvetica'
		// },
		// color : '#EE2C2C'
	// });
	// deleteBTN.addEventListener('click', function() {
		// crud.delFunc//calling delete func from CrudFile
		// memWin.close();
		// memWinNav.close();
		// alert(e.rowData.name + " is gone");
	// });
	// //Delete Button End