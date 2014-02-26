var crud = require('CrudFile');

var fWin = Ti.UI.createWindow({
	top : 65,
	height : Ti.UI.setHeight,
	width : Ti.UI.setWidth
});

var picTabard = Ti.UI.createImageView({
	height : Ti.UI.setHeight,
	width : Ti.UI.setWidth,
	image : 'guild_tabard.png'
});

var saveMem = Titanium.UI.createTableView({
	opacity : .8,
	// text : level,
	font : {
		fontStyle : 'Helvetica',
		fontSize : '12dp'
	}
});

saveMem.addEventListener('click', function() {
	var savedWin = Ti.UI.createWindow({
		// title : name,
		backgroundColor : '#fff'
	});

	var saveNav = Ti.UI.iOS.createNavigationWindow({
		window : savedWin
	});

	var cancel = Ti.UI.createButton({
		systemButton : Ti.UI.iPhone.SystemButton.CANCEL
	});
	savedWin.setLeftNavButton(cancel);

	cancel.addEventListener('click', function() {
		saveNav.close();
		savedWin.close();
	});
	
	// var nameView = Ti.UI.createLabel({
		// top : '75dp',
		// left : 35,
		// text : 'Name: ' + name
	// });
// 
	// var lvlView = Ti.UI.createLabel({
		// top : '175dp',
		// left : 35,
		// text : 'Level: ' + level
	// });
// 
	// var achView = Ti.UI.createLabel({
		// top : '125dp',
		// left : 35,
		// text : 'Acheivment Points: ' + acheive
	// });
// 
	// var divView = Ti.UI.createLabel({
		// top : '225dp',
		// left : 35,
		// text : 'Class: ' + division
	// });

	var editBTN = Ti.UI.createButton({
		systemButton : Ti.UI.iPhone.SystemButton.EDIT
	});
	// editBTN.addEventListener('click', crud.edit);
	editBTN.addEventListener('click', editFunc);

	savedWin.setRightNavButton(editBTN);
	// savedWin.add(nameView, lvlView, achView, divView);
	saveNav.open();
});

// Main Code
saveMem.setData(crud.guildData);
fWin.add(picTabard, saveMem);
fWin.open();


function editFunc () {
	var editDIA = Ti.UI.createAlertDialog({
		title : 'Edit/Delete',
		buttonNames : ['Edit', 'Delete', 'Cancel']
	});
	editDIA.show();
	editDIA.addEventListener('click', function(b) {
		if (b.index === 0) {
			crud.data.execute('UPDATE council SET name, division, level, acheive WHERE id=?', name, division, level, acheive,id);
		} else if (b.index === 1) {
			crud.data.execute('DELETE FROM council WHERE id=?', id);
			crud.guildData;
			saveNav.close();
			savedWin.close();
			alert(name + ' is Deleted');
		} else {null;
		}
	});
};