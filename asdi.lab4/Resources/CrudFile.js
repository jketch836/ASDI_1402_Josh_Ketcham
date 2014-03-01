var data = Ti.Database.open('council');
var wowData = Ti.App.Properties.getString('wowData');
data.execute('CREATE TABLE IF NOT EXISTS council (id INTEGER PRIMARY KEY, name TEXT, division TEXT, level TEXT, acheive TEXT, comment TEXT)');

function insertData() {
	var dataInfo = [];

	var rowInfo = data.execute('SELECT * FROM council');

	while (rowInfo.isValidRow()) {
		var name = rowInfo.fieldByName('name');
		var division = rowInfo.fieldByName('division');
		var level = rowInfo.fieldByName('level');
		var acheive = rowInfo.fieldByName('acheive');
		// var comment = rowInfo.fieldByName('comment');
		var id = rowInfo.fieldByName('id');
		console.log(name);
		dataInfo.push({
			name : name,
			level : level,
			acheive : acheive,
			division : division,
			title : name + "         " + division,
			id : id
		});

		Ti.API.info('End row ' + id + ' look');

		Ti.API.info('=========================');

		rowInfo.next();
	};
	return dataInfo;
};
var guildData = insertData();
exports.guildData = guildData;

// console.log(guildData);

var saveFunc = function(name, division, level, acheive, comment) {
	input = {};
	input.gname = name;
	input.div = division;
	input.lvl = level;
	input.ach = acheive;
	input.com = comment;
	console.log(input.ach);
	data.execute('INSERT INTO council (name, division, level, acheive, comment) VALUES (?, ?, ?, ?, ?)', input.gname, input.div, input.lvl, input.ach, input.com);
	//alert
	alert(name + " is saved");
};
exports.saveFunc = saveFunc;

function editFunc(a, id) {

// comment text field begin
	var comment = Ti.UI.createTextField({
		top : '275dp',
		right : 50,
		height : 25,
		width : 150,
		color : '#000',
		autocorret : false,
		font : {
			fontSize : 12,
			fontWeight : 'bold',
			fontFamily : 'Helvetica'
		},
		borderStyle : Ti.UI.INPUT_BORDERSTYLE_ROUNDED,
		borderColor : "#000"
	});
	// comment text field end

	var id = id;

	var insert_com = data.execute('SELECT * FROM council WHERE ID=?', id);

	input = {};
	input.gname = insert_com.fieldByName('name');
	input.div = insert_com.fieldByName('division');
	input.lvl = insert_com.fieldByName('level');
	input.ach = insert_com.fieldByName('acheive');
	input.com = insert_com.fieldByName('comment');
	input.id = insert_com.fieldByName('id');

	console.log(input.id);

	// Window and nav begin
	var editWin = Ti.UI.createWindow({
		title : input.gname,
		backgroundColor : '#fff'
	});

	var editWinNav = Ti.UI.iOS.createNavigationWindow({
		window : editWin
	});
	// Window and nav end

	//Cancel Button Begin
	var cancelBTN = Ti.UI.createButton({
		systemButton : Ti.UI.iPhone.SystemButton.CANCEL
	});

	cancelBTN.addEventListener('click', function() {
		editWinNav.close();
		editWin.close();
	});
	//Cancel Button End

	//Labels Begin
	var nameView = Ti.UI.createLabel({
		top : '75dp',
		left : 35,
		text : 'Name: ' + input.gname
	});

	var achView = Ti.UI.createLabel({
		top : '125dp',
		left : 35,
		text : 'Class: ' + input.div
	});

	var lvlView = Ti.UI.createLabel({
		top : '175dp',
		left : 35,
		text : 'Level: ' + input.lvl
	});

	var divView = Ti.UI.createLabel({
		top : '225dp',
		left : 35,
		text : 'Acheivment Points: ' + input.ach
	});

	var commView = Ti.UI.createLabel({
		top : '275dp',
		left : 35,
		text : 'Comment: '
	});
	//Labels End

	//Save Button Begin
	var saveBTN = Ti.UI.createButton({
		systemButton : Ti.UI.iPhone.SystemButton.SAVE
	});
	saveBTN.addEventListener('click', function() {
		//calling save func
		saveFunc(input.gname, input.div, input.lvl, input.ach, input.com);
		editWin.close();
		editWinNav.close();
		alert(name + " is updated");
	});
	//Save Button End

	//Delete func begin
	function delFunc(a) {

		data.execute('DELETE FROM council WHERE id=?', id); guildData;

	};
	//Delete func end

	//Delete Button Begin
	var deleteBTN = Ti.UI.createButton({
		top : '310dp',
		center : 0,
		title : "Delete",
		style : Ti.UI.iPhone.SystemButtonStyle.ACTION,
		font : {
			fontWeight : 'bold',
			fontSize : 18,
			fontFamily : 'Helvetica'
		},
		color : '#EE2C2C'
	});
	deleteBTN.addEventListener('click', function() {
		//calling delete func
		delFunc();
		editWin.close();
		editWinNav.close();
		alert(name + " is gone");
	});
	//Delete Button End

	editWin.setRightNavButton(saveBTN);
	editWin.setLeftNavButton(cancelBTN);
	editWin.add(nameView, lvlView, achView, divView, commView, comment, deleteBTN);
	editWinNav.open();

	data.execute('UPDATE council SET name, division, level, acheive, comment WHERE id=?', input.gname, input.div, input.lvl, input.ach, input.com, input.id);
	guildData;
};
exports.editFunc = editFunc;
