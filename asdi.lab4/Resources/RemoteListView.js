var crud = require('CrudFile');

exports.remote = function() {
	console.log('Start');
	var json = JSON.parse(this.responseText);

	var win = Ti.UI.createWindow({
		top : 65,
		height : Ti.UI.setHeight,
		width : Ti.UI.setWidth
	});

	var picTabard = Ti.UI.createImageView({
		height : Ti.UI.setHeight,
		width : Ti.UI.setWidth,
		image : 'guild_tabard.png'
	});
	// var searchbar = Ti.UI.createSearchBar({
	// top : 20,
	// hintText : 'Search',
	// barColor : '#000080',
	// showCancel : false
	// });

	var data = [];

	for (var i = 0; i < json.members.length; i++) {
		name = json.members[i].character.name;
		division = json.members[i].character['class'];
		level = json.members[i].character.level;
		acheive = json.members[i].character.achievementPoints;

		switch (division) {
			case 1:
				division = 'Warrior';
				break;
			case 2:
				division = 'Paladin';
				break;
			case 3:
				division = 'Hunter';
				break;
			case 4:
				division = 'Rogue';
				break;
			case 5:
				division = 'Priest';
				break;
			case 6:
				division = 'Death Knight';
				break;
			case 7:
				division = 'Shaman';
				break;
			case 8:
				division = 'Mage';
				break;
			case 9:
				division = 'Warlock';
				break;
			case 10:
				division = 'Monk';
				break;
			case 11:
				division = 'Druid';
				break;
			default:
				division = 'Null';
				break;
		}

		data.push({
			title : name,
			text : level
		});
	};

	var memTable = Titanium.UI.createTableView({
		opacity : .8,
		text : level,
		font : {
			fontStyle : 'Helvetica',
			fontSize : '12dp'
		}
	});

	memTable.addEventListener('click', function() {
		var memWin = Ti.UI.createWindow({
			title : name,
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

		var nameView = Ti.UI.createLabel({
			top : '75dp',
			left : 35,
			text : 'Name: ' + name
		});

		var lvlView = Ti.UI.createLabel({
			top : '175dp',
			left : 35,
			text : 'Level: ' + level
		});

		var achView = Ti.UI.createLabel({
			top : '125dp',
			left : 35,
			text : 'Acheivment Points: ' + acheive
		});

		var divView = Ti.UI.createLabel({
			top : '225dp',
			left : 35,
			text : 'Class: ' + division
		});

		var saveBTN = Ti.UI.createButton({
			systemButton : Ti.UI.iPhone.SystemButton.EDIT
		});
		saveBTN.addEventListener('click', crud.saveFunc);
		
		memWin.setRightNavButton(saveBTN);
		memWin.setLeftNavButton(cancelBTN);
		memWin.add(nameView, lvlView, achView, divView);
		memWinNav.open();
	});

	memTable.setData(data);
	win.add(picTabard, memTable);
	win.open();
	console.log('End');
};