var db = Ti.Database.open('contact');
var sData = Ti.App.Properties.getString('sData');
db.execute('CREATE TABLE IF NOT EXISTS contact (id INTEGER PRIMARY KEY, fname TEXT, email TEXT, age INTEGER, phone INTEGER)');

// Ti.API.debug("Data rows:" + dataRows.getFieldName(1));
// Ti.API.debug("Data rows:" + dataRows.getFieldName(2));
// Ti.API.debug("Data rows:" + dataRows.getFieldName(3));
// Ti.API.debug("Data rows:" + dataRows.getFieldName(4));
var buildRows = function(){
	// Ti.API.info('Create Empty Array');
	var some_info = [];
	
	// Ti.API.info('Grab the data');
	var dataRows = db.execute('SELECT * FROM contact');

	Ti.API.info('Loop through the data');
	while (dataRows.isValidRow()) {
		// Ti.API.info('Loop!');

		var fName = dataRows.fieldByName('fName');
		var email = dataRows.fieldByName('email');	
		var age = dataRows.fieldByName('age');
		var phone = dataRows.fieldByName('phone');
		
		// Ti.API.info('Push data');

		some_info.push({
			title: dataRows.fName,
			id: dataRows.fieldByName('id')
		});
		// Ti.API.info('Next!');

		dataRows.next();
	};
	Ti.API.info('Some info is:' + some_info);
	return some_info;
};

exports.buildRows;


var save = function () {
	var inputContact = {};
 	inputContact.fName = fName.value;
	inputContact.email = email.value;
	inputContact.age = age.value;
	inputContact.phone = phone.value;
		 		// Ti.API.info(inputContact);
	if (inputContact.fName == '' && inputContact.phone == '') {
		alert('Please Enter Full Name and Phone Number');
	} else if (inputContact.fName == '') {
		alert('Please Enter Name');
	} else if (inputContact.phone == '') {
		alert('Please Enter Phone Number');
	} else {
	 		//Clear Feilds and drop Keyboard
	 		fName.value = '';
	 		email.value = '';
	 		age.value = '';
	 		phone.value = '';
	 		
	 		fName.blur();
	 		email.blur();
	 		age.blur();
	 		phone.blur();
	}
	db.execute('INSERT INTO contact (fname, email, phone, age) VALUES (?,?,?,?)', inputContact.fName, inputContact.email, inputContact.age, inputContact.phone);
};

exports.save;

	
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
// 		
			// var deleteBTN = Ti.UI.createButton({
				// title: "Delete",
				// top: '250dp',
				// center: 0,
				// systemButton: Ti.UI.iPhone.SystemButton.DONE
			// });
			// deleteBTN.addEventListener('click', function(){
					// var alertDialog = Ti.UI.createAlertDialog({
			        	// title: 'Are you sure?',
			        	// buttonNames: ['OK']
			   		// });
			   			// var deleteOk = function () {
			   				// db.execute("DELETE contact SET fname=?, email=?, age=?, phone=? WHERE id = ?", inputContact.fName, inputContact.email, inputContact.age, inputContact.phone);
			   			// };
					// alertDialog.addEventListener('click', deleteOk);
			// });