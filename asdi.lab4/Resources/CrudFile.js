// var grimCov = Ti.include('RemoteListView.js');
// var fav = Ti.include('favorites.js');

var data = Ti.Database.open('covenant');
var wowData = Ti.App.Properties.getString('wowData');
data.execute('CREATE TABLE IF NOT EXISTS covenant (id INTEGER PRIMARY KEY, name TEXT, division TEXT, level TEXT, acheive TEXT)');

function insertData() {

	var dataInfo = [];

	var rowInfo = data.execute('SELECT * FROM covenant');

	while (rowInfo.isValidRow()) {

	// function Mem (name, division, level, acheive){
		// this.name = name;
		// this.division = division;
		// this.level = level;
		// this.acheive = acheive;
	// }
		var name = rowInfo.fieldByName('name');
		var division = rowInfo.fieldByName('division');
		var level = rowInfo.fieldByName('level');
		var acheive = rowInfo.fieldByName('acheive');
		var id = rowInfo.fieldByName('id');

		dataInfo.push({
			title : name + level,
			id : id
		});

		rowInfo.next();
	};

	return dataInfo;
};
var guildData = insertData();

exports.savefunc = function() {
	data.execute('INSERT INTO covenant (name, division, level, acheive) VALUES (?, ?, ?, ?)', name, division, level, acheive);
	// fav.sectionList.setItems(guildData);
};

// data.execute ('SELECT * FROM covenant WHERE ID=?', id);
// 
// 
// 
// 
// 
// 
// var editFunc = function() {
	// var editDIA = Ti.UI.createAlertDialog({
		// title : 'Are You Sure?',
		// buttonNames : [ 'Edit', 'Delete', 'Cancel']
	// });
	// editDIA.show();
	// editDIA.addEventListener('click', function(b) {
		// if (b.index === 0){
			// data.execute('UPDATE covenant SET c1=?,c2=? WHERE id=?','value1','value2',1);
		// } else if (b.index === 1) {
			// db.execute('DELETE FROM covenant WHERE id=?', id);
// 			
			// alert('Member is Deleted');
		// } else {
			// null;
		// }
	// });
// };
// 
// var editBTN = Ti.UI.createButton({
	// style : Ti.UI.iPhone.SystemButtonStyle.EDIT,
// });
// deleteBTN.addEventListener('click', editFunc);
