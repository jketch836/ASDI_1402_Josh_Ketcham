var mainWin = Ti.UI.createWindow({
	title: 'Contacts',
	backgroundColor: '#fff'
});

var nWin = Ti.UI.iOS.createNavigationWindow({
	window: mainWin
});

var crud = require('CRUD');

var addContact = Ti.UI.createButton({
	height: '15dp',
	width:  '15dp',
	backgroundImage: 'add.png'
});
mainWin.setRightNavButton(addContact);

addContact.addEventListener('click', function(){
var addContacts = require('addContact');
	// var addContactWin = Ti.UI.createWindow({
		// title: 'Add New Contact',
		// backgroundColor: '#F8F8FF',
		// url: 'addContact.js'
	// });
	// mainWin.open(addContactWin);
});


var tableData = Ti.UI.createTableView({
	top: 0,
	editable: true
});
tableData.setData(crud.buildRows);

tableData.addEventListener('click', function(a){
//Get stored data in dataRows
var presentRow = db.execute('SELECT * fROM contact WHERE id=?', a.dataRows.id);

	var id = presentRow.fieldByName('id');
	var fName = presentRow.fieldByName('fName');
	var age = presentRow.fieldByName('age');
	var phone = presentRow.fieldByName('phone');
	var email = presentRow.fieldByName('email');
	
var ContactWin = Ti.UI.createWindow({
	title: fName,
	backgroundColor: '#F8F8FF',
	url: 'editContact'
});		
});


//Main Code
mainWin.add(tableData);
nWin.open();