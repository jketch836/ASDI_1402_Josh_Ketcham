var curWin = Ti.UI.currentWindow;

var db = Ti.Database.open('contact');
var sData = Ti.App.Properties.getString('sData');
db.execute('CREATE TABLE IF NOT EXISTS contact (id INTEGER PRIMARY KEY, fName TEXT, email TEXT, age INTEGER, phone INTEGER)');

// Ti.API.debug("Data rows:" + dataRows.getFieldName(1));
// Ti.API.debug("Data rows:" + dataRows.getFieldName(2));
// Ti.API.debug("Data rows:" + dataRows.getFieldName(3));
// Ti.API.debug("Data rows:" + dataRows.getFieldName(4));


function pushData(){
// Ti.API.info('Create Empty Array');
	
	var some_info = [];
	
// Ti.API.info('Grab the data');

	var dataRows = db.execute('SELECT * FROM contact');

// Ti.API.info('Loop through the data');
	while (dataRows.isValidRow()) {
		
// Ti.API.info('Loop!');

		var fullName_add = dataRows.fieldByName('fName');
		var email_add = dataRows.fieldByName('email');	
		var phone_add = dataRows.fieldByName('phone');
		var age_add = dataRows.fieldByName('age');
		var id = dataRows.fieldByName('id');
		
// Ti.API.info('Push data');
		some_info.push({
			title: fullName_add,
			id: id
		});
		
// Ti.API.info('Next!');
		dataRows.next();
	};
	
// Ti.API.info('Some info is:' + some_info);

	return some_info;
};
var theData = pushData();

// exports.data = pushData();


var addBTN = Ti.UI.createButton({
	systemButton:Ti.UI.iPhone.SystemButton.ADD
});
	
addBTN.addEventListener('click', function() {
	var addContactWin = Ti.UI.createWindow({
		title: 'Insert Contact Info',
		backgroundColor: '#fff',
		// url: 'contactInfo.js',
		barColor:'#D4D4D4'
	});
	
	var navWin = Ti.UI.iOS.createNavigationWindow({
		window: addContactWin
	});

	var cancel = Ti.UI.createButton({
		systemButton:Ti.UI.iPhone.SystemButton.CANCEL
	});
	addContactWin.setLeftNavButton(cancel);
	
		cancel.addEventListener('click', function(){
			navWin.close();
		});
	
	
	var fName = Ti.UI.createTextField({
	    top: '75dp',
	    center: 0,    
	    height: 50,
	    width: 250,
	    color: '#000',    
	    hintText: 'Full Name',
	    autocorret: false,
	    // value: '',
	    font:{fontSize:15, fontWeight:'bold', fontFamily:'Helvetica'},
	    borderStyle: Ti.UI.INPUT_BORDERSTYLE_ROUNDED,
	    borderColor: "#000"
	});
	
	var email = Ti.UI.createTextField({
	    top: '133dp',
	    center: 0,    
	    height: 50,
	    width: 250,
	    color: '#000',    
	    hintText: 'Email Address',
	    autocorret: false,
	    // value: '',
	    font:{fontSize:15, fontWeight:'bold', fontFamily:'Helvetica'},
	    borderStyle: Ti.UI.INPUT_BORDERSTYLE_ROUNDED,
	    borderColor: "#000"
	});
	
	var age = Ti.UI.createTextField({
	    top:'190dp',
	    right: 35,
	    height: 50,
	    width: 75,
	    color: '#000',
	    hintText: 'Age',
	    // value: '',	    
	    font:{fontSize:15, fontWeight:'bold', fontFamily:'Helvetica'},
	    borderStyle: Ti.UI.INPUT_BORDERSTYLE_ROUNDED,
	    borderColor: "#000",
	    keyboardType: Ti.UI.KEYBOARD_PHONE_PAD
	});
	
	var phone = Ti.UI.createTextField({
	    top:'190dp',
	    left: 35,
	    height: 50,
	    width: 145,
	    color: '#000',
	    // value: '',	    
	    hintText: 'Phone Number',
	    font:{fontSize:15, fontWeight:'bold', fontFamily:'Helvetica'},
	    borderStyle: Ti.UI.INPUT_BORDERSTYLE_ROUNDED,
	    borderColor: "#000",
	    keyboardType: Ti.UI.KEYBOARD_NUMBER_PAD 
	});
	
	
	var saveBTN = Ti.UI.createButton({
		systemButton:Ti.UI.iPhone.SystemButton.SAVE
	});
	addContactWin.setRightNavButton(saveBTN);
	
	saveBTN.addEventListener('click', function(){
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
			 		
			 		alert('Contact is saved!!');
			 		navWin.close();
			}
	});

	//Main Code
	addContactWin.add(fName, email, age, phone);
	navWin.open();
});
				
// the table view
	var contactTable = Titanium.UI.createTableView({
		// data:some_info,
		editable:true,
		font: {fontStyle: 'Helvetica', fontSize: '14dp'}
	});
contactTable.setData(theData);

// create table view eventlistener
contactTable.addEventListener('click', function(a){
	var contactWin = Ti.UI.createWindow({
		title: 'Contact Info',
		backgroundColor: '#fff',
		// url: 'editContact.js',
		barColor:'#D4D4D4'
	});
	
	var navWin = Ti.UI.iOS.createNavigationWindow({
		window: contactWin
	});

<<<<<<< HEAD
	var id = a.rowData.id;
	// var fullNAME = a.rowData.fNAme;
	// var phoneNUM = a.rowData.phone;
	// var emailADD = a.rowData.email;
	// var ageNUM = a.rowData.age;
	var contactInfo = db.execute('SELECT * FROM contact WHERE ID=?', id);

	var theInfo = {
		full_name: contactInfo.fieldByName('fName'),
		phone_Num: contactInfo.fieldByName('phone'),
		email_Add: contactInfo.fieldByName('email'),
		age_date: contactInfo.fieldByName('age')
	};	
		console.log ('Email' + theInfo.email_Add);
		console.log ('age' + theInfo.age_date);
		console.log ('phone' + theInfo.phone_Num);
		
		
	var nameView = Ti.UI.createLabel({
		top: '75dp',
	    left: 35,
		text: 'Name: ' + theInfo.full_name
	});
	
	var phoneView = Ti.UI.createLabel({
	    top:'175dp',
	    left: 35,
		text: 'Phone: ' + theInfo.phone_Num
	});
	
	var emailView = Ti.UI.createLabel({
	    top:'125dp',
	    left: 35,
		text: 'eMail: ' + theInfo.email_Add
	});
	
	var ageView = Ti.UI.createLabel({
	    top:'225dp',
	    left: 35,
		text: 'Age: ' + theInfo.age_date
	});	
	
	
=======
	// var id = dataRows.fieldByName('id');
// 	
	// db.execute('SELECT * FROM contact WHERE id=?',id);


>>>>>>> parent of 739d9da... ASDI_LAB3_LOCAL_STORAGE_P3
	var cancel = Ti.UI.createButton({
		systemButton:Ti.UI.iPhone.SystemButton.CANCEL
	});
	contactWin.setLeftNavButton(cancel);
	
		cancel.addEventListener('click', function(){
			navWin.close();
		});
				
	var editBTN = Ti.UI.createButton({
		systemButton:Ti.UI.iPhone.SystemButton.EDIT
	});
	contactWin.setRightNavButton(editBTN);
	
		editBTN.addEventListener('click', function(){
			
			var editContactWin = Ti.UI.createWindow({
				title: 'Edit Contact Info',
				backgroundColor: '#fff',
				barColor:'#D4D4D4'
				});
			
			var fName = Ti.UI.createTextField({
			    top: '75dp',
			    center: 0,    
			    height: 50,
			    width: 250,
			    color: '#000',    
			    hintText: 'Full Name',
			    autocorret: false,
			    // value: '',
			    font:{fontSize:15, fontWeight:'bold', fontFamily:'Helvetica'},
			    borderStyle: Ti.UI.INPUT_BORDERSTYLE_ROUNDED,
			    borderColor: "#000"
			});
			
			var email = Ti.UI.createTextField({
			    top: '133dp',
			    center: 0,    
			    height: 50,
			    width: 250,
			    color: '#000',    
			    hintText: 'Email Address',
			    autocorret: false,
			    // value: '',
			    font:{fontSize:15, fontWeight:'bold', fontFamily:'Helvetica'},
			    borderStyle: Ti.UI.INPUT_BORDERSTYLE_ROUNDED,
			    borderColor: "#000"
			});
			
			var age = Ti.UI.createTextField({
			    top:'190dp',
			    right: 35,
			    height: 50,
			    width: 75,
			    color: '#000',
			    hintText: 'Age',
			    // value: '',	    
			    font:{fontSize:15, fontWeight:'bold', fontFamily:'Helvetica'},
			    borderStyle: Ti.UI.INPUT_BORDERSTYLE_ROUNDED,
			    borderColor: "#000",
			    keyboardType: Ti.UI.KEYBOARD_PHONE_PAD 
			});
			
			var phone = Ti.UI.createTextField({
			    top:'190dp',
			    left: 35,
			    height: 50,
			    width: 145,
			    color: '#000',
			    // value: '',	    
			    hintText: 'Phone Number',
			    font:{fontSize:15, fontWeight:'bold', fontFamily:'Helvetica'},
			    borderStyle: Ti.UI.INPUT_BORDERSTYLE_ROUNDED,
			    borderColor: "#000",
			    keyboardType: Ti.UI.KEYBOARD_NUMBER_PAD
			});
			
			var doneBTN = Ti.UI.createButton({
				systemButton:Ti.UI.iPhone.SystemButton.DONE
			});
			doneBTN.addEventListener('click', edit);
			
			
			var deleteOk = function (){
				var alertDialogPTA = Ti.UI.createAlertDialog({
    				title: 'Please try agin',
        			buttonNames: ['Delete', 'Cancel']
    			});	
<<<<<<< HEAD
    			alertDialogPTA.show();    			
    				alertDialogPTA.addEventListener('click', function(a){
	    				if(a.index === 0){
	    					db.execute('DELETE FROM contact WHERE id=?', id);
							contactTable.setData(pushData());
							alert('Contact Deleted');
							editnav.close();
							contactNav.close();
	    				} else { 
	    					null;
	    				}

    				});		
    		};
    	
	    	var deleteBTN = Ti.UI.createButton({
				top : 290,
				center : 0,
				title : "Delete",
				style : Ti.UI.iPhone.SystemButtonStyle.ACTION,
				font : {fontWeight:'bold',fontSize:18, fontFamily:'Helvetica'},
				color : '#EE2C2C'
			});
			deleteBTN.addEventListener('click', deleteOk);			
			

var edit = function () {
		Ti.API.info('Going through loop');
				
			// fName.value = theInfo.full_name;
			// phone.value = theInfo.phone_Num;
			// email.value = theInfo.email_Add;
			// age.value =	theInfo.age_date;
					
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
=======
    				alertDialogPTA.show();
    			
    			alertDialogPTA.addEventListener('click', function(){
    				if(buttonNames === 0) {
    					db.execute('DELETE FROM contact WHERE id=?', id);
						contactTable.setData(pushData());
						alert('Contact Deleted');
    				} else {
    					null;
    				}
    				
    			});	
>>>>>>> parent of 739d9da... ASDI_LAB3_LOCAL_STORAGE_P3
				
			};
					
<<<<<<< HEAD
			db.execute("UPDATE contact SET fName=?, email=?, age=?, phone=? WHERE id=?", inputContact.inputfName, inputContact.inputPhone, inputContact.inputEmail, inputContact.inputAge, id);
					
		// Ti.API.info('stringing info');
// 
			// var contactInfo = escape(JSON.stringify(inputContact));
					
		Ti.API.info('pushing data to table');
				
			insertData = pushData();		
			contactTable.setData(insertData);
					
		Ti.API.info('clearing values and keyboard going down');
			//Clearing Feilds and drop Keyboard
			fName.value = '';
			email.value = '';
			phone.value = '';
			age.value = '';	
			fName.blur();
			email.blur();
			phone.blur();
			age.blur();
			
			doneBTN.removeEventListener('click', edit);
				editnav.close();
				editContactWin.close();
				contactNav.close();
				contactWin.close();
				alert('Contact has been updated!!');
			}
	};

			
			var doneBTN = Ti.UI.createButton({
				systemButton:Ti.UI.iPhone.SystemButton.DONE
=======
			var deleteBTN = Ti.UI.createButton({
				top:'220dp',
				systemButton:Ti.UI.iPhone.SystemButton.DELETE
>>>>>>> parent of 739d9da... ASDI_LAB3_LOCAL_STORAGE_P3
			});
			deleteBTN.addEventListener('click', deleteOk);

			
		//Main Code
		editContactWin.add(deleteBTN);		
		editContactWin.setRightNavButton(doneBTN);
		editContactWin.add(fName, email, age, phone);
	});
				
//Main Code
navWin.open();
});


//Main Code
curWin.setRightNavButton(addBTN);
curWin.add(contactTable);


function edit () {
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
		
		db.execute('UPDATE contact SET fname=?, email=?, age=?, phone=? WHERE id=?', inputContact.fName_add, inputContact.email_add, inputContact.age_add, inputContact.phone_add);
		
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
			
		doneBTN.removeEventListener('click', edit);
			editContactWin.close();
			alert('Contact has been updated!!');
		}
};
