var data = Ti.Database.open('council');
var wowData = Ti.App.Properties.getString('wowData');
data.execute('CREATE TABLE IF NOT EXISTS council (id INTEGER PRIMARY KEY, name TEXT, division TEXT, level TEXT, acheive TEXT, comment TEXT)');

//inserting Data function begin
function insertData() {
	var dataInfo = [];

	var rowInfo = data.execute('SELECT * FROM council');

	while (rowInfo.isValidRow()) {
		var name = rowInfo.fieldByName('name');
		var division = rowInfo.fieldByName('division');
		var level = rowInfo.fieldByName('level');
		var acheive = rowInfo.fieldByName('acheive');
		var comment = rowInfo.fieldByName('comment');
		var id = rowInfo.fieldByName('id');

		dataInfo.push({
			name : name,
			level : level,
			acheive : acheive,
			division : division,
			comment : comment,
			title : name + "      " + division + "      " + level,
			id : id
		});

		rowInfo.next();
	};
	return dataInfo;
};
var guildData = insertData();
exports.guildData = guildData;
// console.log(guildData);
//inserting Data function end

//save function begin
var saveFunc = function(name, division, level, acheive, comment) {
	
	input = {};
	input.gname = name;
	input.div = division;
	input.lvl = level;
	input.ach = acheive;
	input.com = comment;
	//pushing to guildData
	data.execute('INSERT INTO council (name, division, level, acheive, comment) VALUES (?, ?, ?, ?, ?)', input.gname, input.div, input.lvl, input.ach, input.com);
};
exports.saveFunc = saveFunc;
//save function end

var select = function(a) {
	var id = a.rowData.id;
	input = {};
	input.gname = name;
	input.div = division;
	input.lvl = level;
	input.ach = acheive;
	input.com = comment;
	input.id = id;
	data.execute('SELECT * FROM council WHERE ID=?', id);
};

// //edit function begin
// function editFunc(a) {
// var id = a.rowData.id;
// input = {};
// input.gname = name;
// input.div = division;
// input.lvl = level;
// input.ach = acheive;
// input.com = comment;
// input.id = id;
// data.execute('UPDATE council SET name, division, level, acheive WHERE id=?', input.gname, input.div, input.lvl, input.ach, input.id);
// guildData;
// };
// exports.editFunc = editFunc();
// //edit function end

//delete function begin
function delFunc(a) {
	// var id = a.rowData.id;
	// data.execute('DELETE FROM council WHERE id=?', id); 
	guildData;
};
exports.delFunc = delFunc();
//delete function end