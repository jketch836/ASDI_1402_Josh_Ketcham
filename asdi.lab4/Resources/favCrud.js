// var data = Ti.Database.open('favorites');
// var wowData = Ti.App.Properties.getString('wowData');
// data.execute('CREATE TABLE IF NOT EXISTS council (id INTEGER PRIMARY KEY, name TEXT, division TEXT, level TEXT, acheive TEXT, comment TEXT)');
// 
// 
// function insertData() {
	// var dataInfo = [];
// 
	// var rowInfo = data.execute('SELECT * FROM favorites');
// 
	// while (rowInfo.isValidRow()) {
		// var name = rowInfo.fieldByName('name');
		// var division = rowInfo.fieldByName('division');
		// var level = rowInfo.fieldByName('level');
		// var acheive = rowInfo.fieldByName('acheive');
		// var comment = rowInfo.fieldByName('comment');
		// var id = rowInfo.fieldByName('id');
// 
		// dataInfo.push({
			// name : name,
			// level : level,
			// acheive : acheive,
			// division : division,
// 			
			// title : name + "      " + division + "      " + level,
			// id : id
		// });
// 
		// Ti.API.info('End row look');
// 
		// Ti.API.info('=========================');
// 
		// rowInfo.next();
	// };
	// return dataInfo;
// };
// var guildData = insertData();
// exports.guildData = guildData;
// 
// console.log(guildData);
// 
// 
// var saveFunc = function(name, division, level, acheive) {
	// input = {};
	// input.gname = name;
	// input.div = division;
	// input.lvl = level;
	// input.ach = acheive;
	// input.com = comment;
	// data.execute('INSERT INTO favorites (name, division, level, acheive, comment) VALUES (?, ?, ?, ?, ?)', input.gname, input.div, input.lvl, input.ach, input.com);
// };
// exports.saveFunc = saveFunc;
// 
// 
// exports.select = function(a) {
	// var id = a.rowData.id;
	// input = {};
	// input.gname = name;
	// input.div = division;
	// input.lvl = level;
	// input.ach = acheive;
	// input.com = comment;
	// input.id = id;
	// data.execute('SELECT * FROM favorites WHERE ID=?', id);
// };
// 
// 
// function editFunc() {
	// input = {};
	// input.gname = name;
	// input.div = division;
	// input.lvl = level;
	// input.ach = acheive;
	// input.com = comment;
	// input.id = id;
	// data.execute('UPDATE favorites SET name, division, level, acheive WHERE id=?', input.gname, input.div, input.lvl, input.ach, input.id); 
	// guildData;
// };
// exports.edit = editFunc;
// 
// 
// function delFunc() {
	// data.execute('DELETE FROM favorites WHERE id=?', id); 
	// guildData;
// };
// exports.del = delFunc;
// 
// 
// exports.editWin = function() {
// 
	// input = {};
	// input.gname = name;
	// input.div = division;
	// input.lvl = level;
	// input.ach = acheive;
	// input.com = comment;
// 
	// var memWin = Ti.UI.createWindow({
		// title : input.gname,
		// backgroundColor : '#fff'
	// });
// 
	// var memWinNav = Ti.UI.iOS.createNavigationWindow({
		// window : memWin
	// });
// 
	// var cancelBTN = Ti.UI.createButton({
		// systemButton : Ti.UI.iPhone.SystemButton.CANCEL
	// });
// 
	// cancelBTN.addEventListener('click', function() {
		// memWinNav.close();
		// memWin.close();
	// });
// 
	// var nameView = Ti.UI.createLabel({
		// top : '75dp',
		// left : 35,
		// text : 'Name: ' + input.gname
	// });
// 
	// var lvlView = Ti.UI.createLabel({
		// top : '175dp',
		// left : 35,
		// text : 'Level: ' + input.lvl
	// });
// 
	// var achView = Ti.UI.createLabel({
		// top : '125dp',
		// left : 35,
		// text : 'Acheivment Points: ' + input.ach
	// });
// 
	// var divView = Ti.UI.createLabel({
		// top : '225dp',
		// left : 35,
		// text : 'Class: ' + input.div
	// });
	// var saveBTN = Ti.UI.createButton({
		// systemButton : Ti.UI.iPhone.SystemButton.SAVE
	// });
	// saveBTN.addEventListener('click', function() {
		// saveFunc();
		// memWin.close();
		// memWinNav.close();
		// alert(name + " is saved");
	// });
// 
	// var deleteBTN = Ti.UI.createButton({
		// top : 290,
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
		// delFunc();
		// memWin.close();
		// memWinNav.close();
		// alert(name + " is deleted");
	// });
// 
	// memWin.setRightNavButton(saveBTN);
	// memWin.setLeftNavButton(cancelBTN);
	// memWin.add(nameView, lvlView, achView, divView);
	// memWinNav.open();
// };