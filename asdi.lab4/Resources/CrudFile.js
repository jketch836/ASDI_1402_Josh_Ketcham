var data = Ti.Database.open('council');
var wowData = Ti.App.Properties.getString('wowData');
data.execute('CREATE TABLE IF NOT EXISTS council (id INTEGER PRIMARY KEY, name TEXT, division TEXT, level TEXT, acheive TEXT)');

function insertData() {
	var dataInfo = [];

	var rowInfo = data.execute('SELECT * FROM council');

	while (rowInfo.isValidRow()) {
		var name = rowInfo.fieldByName('name');
		var division = rowInfo.fieldByName('division');
		var level = rowInfo.fieldByName('level');
		var acheive = rowInfo.fieldByName('acheive');
		var id = rowInfo.fieldByName('id');

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

var saveFunc = function(name, division, level, acheive) {
	input = {};
	input.gname = name;
	input.div = division;
	input.lvl = level;
	input.ach = acheive;
	console.log(input.ach);
	data.execute('INSERT INTO council (name, division, level, acheive) VALUES (?, ?, ?, ?)', input.gname, input.div, input.lvl, input.ach);
};
exports.saveFunc = saveFunc;

exports.select = function(a) {
	var id = a.rowData.id;
	input = {};
	input.gname = name;
	input.div = division;
	input.lvl = level;
	input.ach = acheive;
	input.id = id;
	data.execute('SELECT * FROM council WHERE ID=?', id);
};

function editFunc() {
	input = {};
	input.gname = name;
	input.div = division;
	input.lvl = level;
	input.ach = acheive;
	input.id = id;
	data.execute('UPDATE council SET name, division, level, acheive WHERE id=?', input.gname, input.div, input.lvl, input.ach, input.id);
	guildData;
};
exports.editFunc = editFunc;

function delFunc() {
	var id = a.rowData.id;
	data.execute('DELETE FROM council WHERE id=?', id); 
	guildData;

};
exports.delFunc = delFunc;
