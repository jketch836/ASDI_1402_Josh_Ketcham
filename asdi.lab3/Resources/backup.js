// APP.JS
// var mainWin = Ti.UI.createWindow({
// title: 'Contacts',
// backgroundColor: '#fff'
// });
//
// var nWin = Ti.UI.iOS.createNavigationWindow({
// window: mainWin
// });
//
// var crud = require('CRUD');
//
// var addContact = Ti.UI.createButton({
// height: '15dp',
// width:  '15dp',
// backgroundImage: 'add.png'
// });
// mainWin.setRightNavButton(addContact);
//
// addContact.addEventListener('click', function(){
// var addContacts = require('addContact');
// // var addContactWin = Ti.UI.createWindow({
// // title: 'Add New Contact',
// // backgroundColor: '#F8F8FF',
// // url: 'addContact.js'
// // });
// // mainWin.open(addContactWin);
// });
//
//
// var tableData = Ti.UI.createTableView({
// top: 0,
// editable: true
// });
// tableData.setData(crud.buildRows);
//
// tableData.addEventListener('click', function(a){
// //Get stored data in dataRows
// var presentRow = db.execute('SELECT * fROM contact WHERE id=?', a.dataRows.id);
//
// var id = presentRow.fieldByName('id');
// var fName = presentRow.fieldByName('fName');
// var age = presentRow.fieldByName('age');
// var phone = presentRow.fieldByName('phone');
// var email = presentRow.fieldByName('email');
//
// var ContactWin = Ti.UI.createWindow({
// title: fName,
// backgroundColor: '#F8F8FF',
// url: 'editContact'
// });
// });
//
//
// //Main Code
// mainWin.add(tableData);
// nWin.open();

//CRUD.JS
// var db = Ti.Database.open('contact');
// var sData = Ti.App.Properties.getString('sData');
// db.execute('CREATE TABLE IF NOT EXISTS contact (id INTEGER PRIMARY KEY, fname TEXT, email TEXT, age INTEGER, phone INTEGER)');
//
// var buildRows = function(){
// // Ti.API.info('Create Empty Array');
// var some_info = [];
//
// // Ti.API.info('Grab the data');
// var dataRows = db.execute('SELECT * FROM contact');
//
// Ti.API.info('Loop through the data');
// while (dataRows.isValidRow()) {
// // Ti.API.info('Loop!');
//
// var fName = dataRows.fieldByName('fName');
// var email = dataRows.fieldByName('email');
// var age = dataRows.fieldByName('age');
// var phone = dataRows.fieldByName('phone');
//
// // Ti.API.info('Push data');
//
// some_info.push({
// title: dataRows.fName,
// id: dataRows.fieldByName('id')
// });
// // Ti.API.info('Next!');
//
// dataRows.next();
// };
// Ti.API.info('Some info is:' + some_info);
// return some_info;
// };
//
// exports.buildRows;
//
//
// var save = function () {
// var inputContact = {};
// inputContact.fName = fName.value;
// inputContact.email = email.value;
// inputContact.age = age.value;
// inputContact.phone = phone.value;
// // Ti.API.info(inputContact);
// if (inputContact.fName == '' && inputContact.phone == '') {
// alert('Please Enter Full Name and Phone Number');
// } else if (inputContact.fName == '') {
// alert('Please Enter Name');
// } else if (inputContact.phone == '') {
// alert('Please Enter Phone Number');
// } else {
// //Clear Feilds and drop Keyboard
// fName.value = '';
// email.value = '';
// age.value = '';
// phone.value = '';
//
// fName.blur();
// email.blur();
// age.blur();
// phone.blur();
// }
// db.execute('INSERT INTO contact (fname, email, phone, age) VALUES (?,?,?,?)', inputContact.fName, inputContact.email, inputContact.age, inputContact.phone);
// };
//
// exports.save;
//
//
// var edit = function(){
// //Get stored data in dataRows
// var presentRow = db.execute('SELECT * fROM contact WHERE id=?', dataRows.id);
//
// var id = presentRow.fieldByName('id');
// var fName = presentRow.fieldByName('fName');
// var age = presentRow.fieldByName('age');
// var phone = presentRow.fieldByName('phone');
// var email = presentRow.fieldByName('email');
//
// var inputContact = {};
// inputContact.fName = fName.value;
// inputContact.email = email.value;
// inputContact.age = age.value;
// inputContact.phone = phone.value;
//
// if (inputContact.fName === '' || inputContact.phone === '') {
// alert('Please Enter Name and Phone Number');
// } else if (inputContact.fName === '') {
// alert('Please Enter Name');
// } else if (inputContact.phone === '') {
// alert('Please Enter Phone Number');
// } else {
//
// //Clear Feilds and drop Keyboard
// fName.value = '';
// email.value = '';
// age.value = '';
// phone.value = '';
//
// fName.blur();
// email.blur();
// age.blur();
// phone.blur();
// db.execute('UPDATE contact SET fname=?, email=?, age=?, phone=? WHERE id=?', inputContact.fName, inputContact.email, inputContact.age, inputContact.phone);
// }
// };
//
// var deleteOk = function (){
// db.execute("DELETE contact SET fname=?, email=?, age=?, phone=? WHERE id = ?", inputContact.fName, inputContact.email, inputContact.age, inputContact.phone);
// };

//ADDCONTACTS.JS
// var addContactWin = Ti.UI.createWindow({
// title: 'Add New Contact',
// backgroundColor: '#F8F8FF'
// });
//
// navWin = Ti.UI.iOS.createNavigationWindow({
// window: addContactWin
// });
//
// var crud = Ti.include('CRUD.js');
//
//
// var save = Ti.UI.createButton({
// height: '15dp',
// width:  '15dp',
// title: 'Save'
// });
// addContactWin.setRightNavButton(save);
//
// save.addEventListener('click', function(){
//
// });
//
//
// var cancel = Ti.UI.createButton({
// height: '15dp',
// width:  '15dp',
// title: 'Cancel'
// });
// addContactWin.setLeftNavButton(cancel);
//
// cancel.addEventListener('click', function(){
// var contact = require('app');
// });
//
//
//
// var fName = Ti.UI.createTextField({
// top: '75dp',
// center: 0,
// height: 50,
// width: 250,
// color: '#000',
// hintText: 'Full Name',
// value: '',
// autocorret: false,
// font:{fontSize:15, fontWeight:'bold', fontFamily:'Helvetica'},
// borderStyle: Ti.UI.INPUT_BORDERSTYLE_ROUNDED,
// borderColor: "#000"
// });
//
// fName.addEventListener('return', function(){
// fName.blur();
// });
//
//
// var email = Ti.UI.createTextField({
// top: '133dp',
// center: 0,
// height: 50,
// width: 250,
// color: '#000',
// hintText: 'Email Address',
// value: '',
// autocorret: false,
// font:{fontSize:15, fontWeight:'bold', fontFamily:'Helvetica'},
// borderStyle: Ti.UI.INPUT_BORDERSTYLE_ROUNDED,
// borderColor: "#000"
// });
//
// email.addEventListener('return', function(){
// email.blur();
// });
//
// var age = Ti.UI.createTextField({
// top:'190dp',
// right: 35,
// height: 50,
// width: 75,
// color: '#000',
// hintText: 'Age',
// value: '',
// font:{fontSize:15, fontWeight:'bold', fontFamily:'Helvetica'},
// borderStyle: Ti.UI.INPUT_BORDERSTYLE_ROUNDED,
// borderColor: "#000",
// keyboardType: Ti.UI.KEYBOARD_NUMBER_PAD
// });
//
// age.addEventListener('return', function(){
// age.blur();
// });
//
// var phone = Ti.UI.createTextField({
// top:'190dp',
// left: 35,
// height: 50,
// width: 145,
// color: '#000',
// hintText: 'Phone Number',
// value: '',
// font:{fontSize:15, fontWeight:'bold', fontFamily:'Helvetica'},
// borderStyle: Ti.UI.INPUT_BORDERSTYLE_ROUNDED,
// borderColor: "#000",
// keyboardType: Ti.UI.KEYBOARD_PHONE_PAD
// });
//
// phone.addEventListener('return', function(){
// phone.blur();
// });
//
// var saveBTN = Ti.UI.createButton({
// title: "Save",
// top: '250dp',
// center: 0,
// systemButton: Ti.UI.iPhone.SystemButton.DONE
// });
// saveBTN.addEventListener('click', function(){
// // var saveData = "test";
// if (inputContact.fName === '' || inputContact.phone === '') {
// alert('Please Enter Name and Phone Number');
// } else if (inputContact.fName === '') {
// alert('Please Enter Name');
// } else if (inputContact.phone === '') {
// alert('Please Enter Phone Number');
// } else {
//
// var inputContact = {};
// inputContact.fName = fName.value;
// inputContact.email = email.value;
// inputContact.age = age.value;
// inputContact.phone = phone.value;
//
// //Clear Feilds and drop Keyboard
// fName.value = '';
// email.value = '';
// age.value = '';
// phone.value = '';
//
// fName.blur();
// email.blur();
// age.blur();
// phone.blur();
// db.execute('INSERT INTO contact (fName, email, phone, age) VALUES (?,?,?,?)', fName, email, age, phone);
// }
// });
//
//
// //Main Code
// addContactWin.add(fName, email, age, phone, saveBTN);
// navWin.open();

var save = function() {
	Ti.API.info('Going through loop');

		if (fName.value == '' && phone.value == '' && email.value == '') {
			alert('Please Enter Full Name, Phone Number, and eMail');
		} else if (fName.value == '') {
			alert('Please Enter Name');
		} else if (phone.value == '') {
			alert('Please Enter Phone Number');
		} else if (email.value == '') {
			alert('Please Enter Email Address');
		} else {

	Ti.API.info('all set');

		var inputContact = {};
		inputContact.fName_add = fName.value;
		inputContact.email_add = email.value;
		inputContact.age_add = age.value;
		inputContact.phone_add = phone.value;

	Ti.API.info('inserting data to table');

		db.execute('INSERT INTO contact (fName, email, phone, age) VALUES (?,?,?,?)', inputContact.fName_add, inputContact.email_add, inputContact.age_add, inputContact.phone_add);

	// Ti.API.info('stringing info');
// 
		// var contactInfo = escape(JSON.stringify(inputContact));

	Ti.API.info('pushing data to table');

		contactTable.setData(pushData());

	Ti.API.info('keyboard going down');

		fName.blur();
		email.blur();
		age.blur();
		phone.blur();

	Ti.API.info('clearing values');
		//Clearing Feilds and drop Keyboard
		fName.value = '';
		email.value = '';
		age.value = '';
		phone.value = '';

		alert(contactInfo + ' is saved!!');
	}
};
// exports.save;

// var edit = function(){
// //Get stored data in dataRows
// var presentRow = db.execute('SELECT * fROM contact WHERE id=?', dataRows.id);
//
// var id = presentRow.fieldByName('id');
// var fName = presentRow.fieldByName('fName');
// var age = presentRow.fieldByName('age');
// var phone = presentRow.fieldByName('phone');
// var email = presentRow.fieldByName('email');
//
// var inputContact = {};
// inputContact.fName = fName.value;
// inputContact.email = email.value;
// inputContact.age = age.value;
// inputContact.phone = phone.value;
//
// if (inputContact.fName === '' || inputContact.phone === '') {
// alert('Please Enter Name and Phone Number');
// } else if (inputContact.fName === '') {
// alert('Please Enter Name');
// } else if (inputContact.phone === '') {
// alert('Please Enter Phone Number');
// } else {
//
// //Clear Feilds and drop Keyboard
// fName.value = '';
// email.value = '';
// age.value = '';
// phone.value = '';
//
// fName.blur();
// email.blur();
// age.blur();
// phone.blur();
// db.execute('UPDATE contact SET fname=?, email=?, age=?, phone=? WHERE id=?', inputContact.fName, inputContact.email, inputContact.age, inputContact.phone);
// }
// };
//
// var deleteOk = function (){
// db.execute("DELETE contact SET fname=?, email=?, age=?, phone=? WHERE id = ?", inputContact.fName, inputContact.email, inputContact.age, inputContact.phone);
// };