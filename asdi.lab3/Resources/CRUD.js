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
	    keyboardType: Ti.UI.KEYBOARD_NUMBER_PAD
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
	    keyboardType: Ti.UI.KEYBOARD_PHONE_PAD
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

	// var id = dataRows.fieldByName('id');
// 	
	// db.execute('SELECT * FROM contact WHERE id=?',id);


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
			    keyboardType: Ti.UI.KEYBOARD_NUMBER_PAD
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
			    keyboardType: Ti.UI.KEYBOARD_PHONE_PAD
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
				
			};
					
			var deleteBTN = Ti.UI.createButton({
				top:'220dp',
				systemButton:Ti.UI.iPhone.SystemButton.DELETE
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