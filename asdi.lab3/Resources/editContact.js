var curContactWin = Ti.UI.currentWindow();


navWin = Ti.UI.iOS.createNavigationWindow({
	window: curContactWin
});

// var crud = require('CRUD');


	var editBTN = Ti.UI.createButton({
		title: "Edit",
		style: Ti.UI.iPhone.SystemButtonStyle.DONE,
		font:{fontWeight:'bold',fontSize:10, fontFamily:'Helvetica'},
	});
	mainWin.setLeftNavButton(editBTN);
		
	editBTN.addEventListener('click', function(b){
		var crud = Ti.include('app.js');
		
		var editCon = Ti.UI.createWindow({
			title: 'Edit Contact',
			backgroundColor: '#F8F8FF'
		});
		
		var cancel = Ti.UI.createButton({
			height: '15dp',
			width:  '15dp',
			title: 'Cancel'
		});
		addContactWin.setLeftNavButton(cancel);
		
		cancel.addEventListener('click', function(){
		var contact = require('app');
		});
		
		
		var fName = Ti.UI.createTextField({
		    top: '75dp',
		    center: 0,    
		    height: 50,
		    width: 250,
		    color: '#000',    
		    hintText: 'Full Name',
		    value: '',
		    autocorret: false,
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
		    value: '',
		    autocorret: false,
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
		    value: '',
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
		    hintText: 'Phone Number',
		    value: '',
		    font:{fontSize:15, fontWeight:'bold', fontFamily:'Helvetica'},
		    borderStyle: Ti.UI.INPUT_BORDERSTYLE_ROUNDED,
		    borderColor: "#000",
		    keyboardType: Ti.UI.KEYBOARD_PHONE_PAD
		});
		
		
		var editSave = Ti.UI.createButton({
			height: '15dp',
			width:  '15dp',
			title: 'Save'
		});
		addContactWin.setRightNavButton(editSave);
		
		editSave.addEventListener('click', function(){
		
		 	var inputContact = {};
			 	inputContact.fName = fName.value;
			 	inputContact.email = email.value;
			 	inputContact.age = age.value;
				inputContact.phone = phone.value;
		
			if (inputContact.fName === '' || inputContact.phone === '') {
				alert('Please Enter Name and Phone Number');
			} else if (inputContact.fName === '') {
				alert('Please Enter Name');
			} else if (inputContact.phone === '') {
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
			  db.execute('UPDATE contact SET fname=?, email=?, age=?, phone=? WHERE id=?', inputContact.fName, inputContact.email, inputContact.age, inputContact.phone);
			}
		});
		
			var deleteBTN = Ti.UI.createButton({
				title: "Delete",
				top: '250dp',
				center: 0,
				systemButton: Ti.UI.iPhone.SystemButton.DONE
			});
			deleteBTN.addEventListener('click', function(){
					var alertDialog = Ti.UI.createAlertDialog({
			        	title: 'Are you sure?',
			        	buttonNames: ['OK']
			   		});
			   			var deleteOk = function () {
			   				db.execute("DELETE contact SET fname=?, email=?, age=?, phone=? WHERE id = ?", inputContact.fName, inputContact.email, inputContact.age, inputContact.phone);
			   			};
					alertDialog.addEventListener('click', deleteOk);
			});
			editCon.add(fName, email, age, phone);
		});
	
//Main Code
navWin.open();	