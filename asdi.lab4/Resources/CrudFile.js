var db = Ti.Database.open('covenant');
var sData = Ti.App.Properties.getString('sData');
db.execute('CREATE TABLE IF NOT EXISTS covenant (id INTEGER PRIMARY KEY, name TEXT, race TEXT, division TEXT, level TEXT, acheive TEXT, rank TEXT)');
		

db.execute('INSERT INTO covenant (c1,c2) VALUES (?,?)', 'value', 1);
db.execute('PUT INTO covenant (c1,c2) VALUES (?,?)', 'value', 1);

db.execute ('SELECT * FROM covenant WHERE ID=?', id);
db.execute ('GET * FROM covenant WHERE ID=?', id);

db.execute('UPDATE covenant SET c1=?,c2=? WHERE id=?','value1','value2',1);
db.execute('PATCH covenant SET c1=?,c2=? WHERE id=?','value1','value2',1);

db.execute('DELETE FROM covenant WHERE id=?', id);