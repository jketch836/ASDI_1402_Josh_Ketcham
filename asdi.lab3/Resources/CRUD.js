var curWin = Ti.UI.currentWindow;

var db = Ti.Database.open('contact');
var sData = Ti.App.Properties.getString('sData');
db.execute('CREATE TABLE IF NOT EXISTS contact (id INTEGER PRIMARY KEY, fName TEXT, email TEXT, age INTEGER, phone INTEGER)');
		

function pushData(){
	
	var some_info = [];

	var dataRows = db.execute('SELECT * FROM contact');

	while (dataRows.isValidRow()) {

		var fullName_add = dataRows.fieldByName('fName');
		var email_add = dataRows.fieldByName('email');	
		var phone_add = dataRows.fieldByName('phone');
		var age_add = dataRows.fieldByName('age');
		var id = dataRows.fieldByName('id');

		some_info.push({
			title: fullName_add,
			id: id
		});

		dataRows.next();
	};

	return some_info;
};
var theData = pushData();



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
	
	var addNav = Ti.UI.iOS.createNavigationWindow({
		window: addContactWin
	});

	var cancel = Ti.UI.createButton({
		systemButton:Ti.UI.iPhone.SystemButton.CANCEL
	});
	addContactWin.setLeftNavButton(cancel);
	
		cancel.addEventListener('click', function(){
			addNav.close();
		});
	
	var fName_label = Ti.UI.createLabel({
		top: '55dp',
	    left: 35, 
		text: 'Full Name: ',
		font:{fontSize: 16, fontWeight:'bold', fontFamily:'Helvetica'}
	});
	
	var email_label = Ti.UI.createLabel({
		top: '130dp',
	    left: 35, 
		text: 'Email: ',
		font:{fontSize: 16, fontWeight:'bold', fontFamily:'Helvetica'}
	});
	
	var phone_label = Ti.UI.createLabel({
		top: '205dp',
	    left: 35, 
		text: 'Phone Number: ',
		font:{fontSize: 16, fontWeight:'bold', fontFamily:'Helvetica'}
	});
	
	var age_label = Ti.UI.createLabel({
		top: '205dp',
	    right: 70, 
		text: 'Age: ',
		font:{fontSize: 16, fontWeight:'bold', fontFamily:'Helvetica'}
	});
	
	
	var fName = Ti.UI.createTextField({
	    top: '75dp',
	    center: 0,    
	    height: 50,
	    width: 250,
	    color: '#000',    
	    hintText: 'John Smith',
	    autocorret: false,
	    // value: '',
	    font:{fontSize: 14, fontWeight:'bold', fontFamily:'Helvetica'},
	    borderStyle: Ti.UI.INPUT_BORDERSTYLE_ROUNDED,
	    borderColor: "#000"
	});
	
	var email = Ti.UI.createTextField({
	    top: '150dp',
	    center: 0,    
	    height: 50,
	    width: 250,
	    color: '#000',    
	    hintText: 'abced@asdf.com',
	    autocorret: false,
	    // value: '',
	    font:{fontSize: 14, fontWeight:'bold', fontFamily:'Helvetica'},
	    borderStyle: Ti.UI.INPUT_BORDERSTYLE_ROUNDED,
	    borderColor: "#000"
	});
	
	var phone = Ti.UI.createTextField({
	    top:'225dp',
	    left: 35,
	    height: 50,
	    width: 145,
	    color: '#000',
	    hintText: '123-123-1234',
	    // value: '',	    
	    font:{fontSize: 14, fontWeight:'bold', fontFamily:'Helvetica'},
	    borderStyle: Ti.UI.INPUT_BORDERSTYLE_ROUNDED,
	    borderColor: "#000",
	    keyboardType: Ti.UI.KEYBOARD_NUMBER_PAD
	});
	
	var age = Ti.UI.createTextField({
	    top:'225dp',
	    right: 35,
	    height: 50,
	    width: 75,
	    color: '#000',
	    // value: '',	    
	    hintText: '18',
	    font:{fontSize: 14, fontWeight:'bold', fontFamily:'Helvetica'},
	    borderStyle: Ti.UI.INPUT_BORDERSTYLE_ROUNDED,
	    borderColor: "#000",
	    keyboardType: Ti.UI.KEYBOARD_PHONE_PAD
	});
	
	var save = function (){
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
		
			 		alert('Contact is saved!!');
			 		addNav.close();
			}
	};
	
	var saveBTN = Ti.UI.createButton({
		systemButton:Ti.UI.iPhone.SystemButton.SAVE
	});
	addContactWin.setRightNavButton(saveBTN);
	
	saveBTN.addEventListener('click', save);

	//addContact Main Code
	addContactWin.add(fName_label, email_label, phone_label, age_label);
	addContactWin.add(fName, email, age, phone);
	addNav.open();
});
		
		
				
// the table view
	var contactTable = Titanium.UI.createTableView({
		// data:some_info,
		editable:true,
		font: {fontStyle: 'Helvetica', fontSize: '10dp'}
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
	
	var contactNav = Ti.UI.iOS.createNavigationWindow({
		window: contactWin
	});

	var id = a.rowData.id;
	var contactInfo = db.execute ('SELECT * FROM contact WHERE ID=?', id);

	var theInfo = {
		full_name: contactInfo.fieldByName('fName'),
		phone_Num: contactInfo.fieldByName('phone'),
		email_Add: contactInfo.fieldByName('email'),
		age_date: contactInfo.fieldByName('age'),
		id: contactInfo.fieldByName('id')
	};	
		
	var nameView = Ti.UI.createLabel({
		top: '75dp',
	    left: 35,
		text: 'Name: ' + theInfo.full_name
	});
	
	var phoneView = Ti.UI.createLabel({
	    top:'175dp',
	    left: 35,
		text: 'Age: ' + theInfo.phone_Num
	});
	
	var emailView = Ti.UI.createLabel({
	    top:'125dp',
	    left: 35,
		text: 'eMail: ' + theInfo.email_Add
	});
	
	var ageView = Ti.UI.createLabel({
	    top:'225dp',
	    left: 35,
		text: 'Phone: ' + theInfo.age_date
	});	
	
	
	var cancel = Ti.UI.createButton({
		systemButton:Ti.UI.iPhone.SystemButton.CANCEL
	});
	contactWin.setLeftNavButton(cancel);
	
		cancel.addEventListener('click', function(){
			contactNav.close();
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
			
			var editnav = Ti.UI.iOS.createNavigationWindow({
				window: editContactWin
			});
			
			
			var fName_label = Ti.UI.createLabel({
				top: '55dp',
			    left: 35, 
				text: 'Full Name: ',
				font:{fontSize: 16, fontWeight:'bold', fontFamily:'Helvetica'}
			});
			
			var email_label = Ti.UI.createLabel({
				top: '130dp',
			    left: 35, 
				text: 'Email: ',
				font:{fontSize: 16, fontWeight:'bold', fontFamily:'Helvetica'}
			});
			
			var phone_label = Ti.UI.createLabel({
				top: '205dp',
			    left: 35, 
				text: 'Phone Number: ',
				font:{fontSize: 16, fontWeight:'bold', fontFamily:'Helvetica'}
			});
			
			var age_label = Ti.UI.createLabel({
				top: '205dp',
			    right: 70, 
				text: 'Age: ',
				font:{fontSize: 16, fontWeight:'bold', fontFamily:'Helvetica'}
			});
			
			
			var fName = Ti.UI.createTextField({
			    top: '75dp',
			    center: 0,    
			    height: 50,
			    width: 250,
			    color: '#000',    
			    autocorret: false,
			    value: theInfo.full_name,
			    font:{fontSize: 14, fontWeight:'bold', fontFamily:'Helvetica'},
			    borderStyle: Ti.UI.INPUT_BORDERSTYLE_ROUNDED,
			    borderColor: "#000"
			});
			
			var email = Ti.UI.createTextField({
			    top: '150dp',
			    center: 0,    
			    height: 50,
			    width: 250,
			    color: '#000',    
			    autocorret: false,
			    value: theInfo.email_Add,
			    font:{fontSize: 14, fontWeight:'bold', fontFamily:'Helvetica'},
			    borderStyle: Ti.UI.INPUT_BORDERSTYLE_ROUNDED,
			    borderColor: "#000"
			});
			
			var phone = Ti.UI.createTextField({
			    top:'225dp',
			    left: 35,
			    height: 50,
			    width: 145,
			    color: '#000',
			    value: theInfo.phone_Num,	    
			    font:{fontSize: 14, fontWeight:'bold', fontFamily:'Helvetica'},
			    borderStyle: Ti.UI.INPUT_BORDERSTYLE_ROUNDED,
			    borderColor: "#000",
			    keyboardType: Ti.UI.KEYBOARD_NUMBER_PAD
			});
			
			var age = Ti.UI.createTextField({
			    top:'225dp',
			    right: 35,
			    height: 50,
			    width: 75,
			    color: '#000',
			    value: theInfo.age_date,
			    font:{fontSize: 14, fontWeight:'bold', fontFamily:'Helvetica'},
			    borderStyle: Ti.UI.INPUT_BORDERSTYLE_ROUNDED,
			    borderColor: "#000",
			    keyboardType: Ti.UI.KEYBOARD_PHONE_PAD
			});
			
			
    		var deleteOk = function (){
				var alertDialogPTA = Ti.UI.createAlertDialog({
    				title: 'Are you Sure?',
        			buttonNames: ['Delete', 'Cancel']
    			});	
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
				
			fName.value = theInfo.full_name;
			phone.value = theInfo.phone_Num;
			email.value = theInfo.email_Add;
			age.value =	theInfo.age_date;
					
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
				
			var inputContact = {
				inputfName: fName.value,
				inputPhone: phone.value,
				inputEmail: email.value,
				inputAge: age.value
			};
						
		Ti.API.info('inserting data to table');
					
			db.execute("UPDATE contact SET fname=?, email=?, age=?, phone=? WHERE id=?", inputContact.inputfName, inputContact.inputPhone, inputContact.inputEmail, inputContact.inputAge, id);
					
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
				alert('Contact has been updated!!');
			}
	};

			
			var doneBTN = Ti.UI.createButton({
				systemButton:Ti.UI.iPhone.SystemButton.DONE
			});
			doneBTN.addEventListener('click', edit);

				
    			//editContactWin Main Code
				editContactWin.add(deleteBTN);		
				editContactWin.setRightNavButton(doneBTN);
				editContactWin.add(fName_label, email_label, phone_label, age_label);				
				editContactWin.add(fName, email, age, phone);
				editnav.open();
		});
//Main Code
contactWin.add(nameView, phoneView, emailView, ageView);
contactNav.open();
});


//Main Code
curWin.setRightNavButton(addBTN);
curWin.add(contactTable);