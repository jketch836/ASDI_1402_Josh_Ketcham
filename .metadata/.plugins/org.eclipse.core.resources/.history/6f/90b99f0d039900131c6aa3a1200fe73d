// APP.JS
	// mainWin = Ti.UI.createWindow({
		// title: 'Contacts',
		// backgroundColor: '#fff'
	// });
	// 
	// nWin = Ti.UI.iOS.createNavigationWindow({
		// window: mainWin
	// });
	// 
	// var crud = Ti.include('CRUD.js');
	// 
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
	// });
	// 
	// 
	// // var editBTN = Ti.UI.createButton({
		// // title: "Edit",
		// // style: Ti.UI.iPhone.SystemButtonStyle.DONE,
		// // font:{fontWeight:'bold',fontSize:10, fontFamily:'Helvetica'},
	// // });
	// // mainWin.setLeftNavButton(editBTN);
	// 
	// var tableData = Ti.UI.createTableView({
		// top: 0,
		// data: info,
		// editable: true
	// });
	// tableData.setData(info);
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
	// var info = [];
	// 
	// var dataRows = db.execute('SELECT * FROM contact');
	// 
	// Ti.API.debug("Data rows:" + dataRows.getFieldName(1));
	// Ti.API.debug("Data rows:" + dataRows.getFieldName(2));
	// Ti.API.debug("Data rows:" + dataRows.getFieldName(3));
	// Ti.API.debug("Data rows:" + dataRows.getFieldName(4));
	// 
	// while (dataRows.isValidRow()) {
		// var fName = dataRows.fieldByName('fName');
		// var email = dataRows.fieldByName('email');	
		// var age = dataRows.fieldByName('age');
		// var phone = dataRows.fieldByName('phone');
	// 	
		// info.push({
			// title: dataRows.fName,
			// id: dataRows.fieldByName('id')
		// });
		// console.log(email);
		// dataRows.next();
	// };
	// dataRows.close();
	// 
	// console.log(dataRows);
	// // saveBTN.addEventListener('click', function(){
		// // // var saveData = "test";
		// // if (inputContact.fName === '' || inputContact.phone === '') {
			// // alert('Please Enter Name and Phone Number');
		// // } else if (inputContact.fName === '') {
			// // alert('Please Enter Name');
		// // } else if (inputContact.phone === '') {
			// // alert('Please Enter Phone Number');
		// // } else {
	// // 		
		 	// // var inputContact = {};
		 		// // inputContact.fName = fName.value;
		 		// // inputContact.email = email.value;
		 		// // inputContact.age = age.value;
		 		// // inputContact.phone = phone.value;
	// // 	 		
		 		// // //Clear Feilds and drop Keyboard
		 		// // fName.value = '';
		 		// // email.value = '';
		 		// // age.value = '';
		 		// // phone.value = '';
	// // 	 		
		 		// // fName.blur();
		 		// // email.blur();
		 		// // age.blur();
		 		// // phone.blur();
		// // db.execute('INSERT INTO contact (fName, email, phone, age) VALUES (?,?,?,?)', fName, email, age, phone);
		// // }
	// // });
	// 
	// // //var curWin = Ti.UI.currentWindow();
	// 
	// // // var tableData = Ti.UI.createTableView({
		// // // top: 0,
		// // // data: info,
		// // // editable: true
	// // // });
	// // // 
	// // // tableData.setData(info);
	// 
	// // tableData.addEventListener('click', function(a){
	// // //Get stored data in dataRows
	// // 
	// // var presentRow = db.execute('SELECT * fROM contact WHERE id=?', a.dataRows.id);
	// // 
	// // 
		// // var id = presentRow.fieldByName('id');
		// // var fName = presentRow.fieldByName('fName');
		// // var age = presentRow.fieldByName('age');
		// // var phone = presentRow.fieldByName('phone');
		// // var email = presentRow.fieldByName('email');
	// // 		
			// // var opts = {
			  // // title: 'Edit/Delete Info',		
			  // // options: ['Edit', 'Delete', 'Cancel'],
			  // // selectedIndex: 1,
			  // // cancel: 2,
			  // // destructive: 1
			// // };
	// // 		
			// // opts.addEventListener('click', function(b){
				// // if(b.index === 0) {
	// // 				
					// // editfName.value = fName;
					// // editemail.value = email;
					// // editage.value = age;
					// // editphone.value = phone;
	// // 				
					// // editWindow.open();
	// // 				
					// // var editfunc = funtion(){
						   // // db.execute("UPDATE contact SET fName=?, email=?, age=?, phone=? WHERE id=?’, fName, email, age, phone);			
						   // // }	
				// // } else if (b.index === 1){
					// // var alertDialog = Ti.UI.createAlertDialog({
		        	// // title: 'Are you sure?',
		        	// // buttonNames: ['OK']
		   		// // });
		   			// // var deleteOk = function () {
		   				// // db.execute("DELETE contact SET fName=?, email=?, age=?, phone=? WHERE id = ?", fName, email, age, phone);
		   			// // };
				// // alertDialog.addEventListener('click', deleteOk);
	// 			
				// // } else {
	// // 					
				// // }
	// // 			
	// // });
	// // 
	// // 
	// // //Main Code
	// //curWin.add(tableData);
	




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