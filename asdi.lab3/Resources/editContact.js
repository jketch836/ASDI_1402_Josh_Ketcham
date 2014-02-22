var curContactWin = Ti.UI.currentWindow();

var contactNav = Ti.UI.iOS.createNavigationWindow({
	window : curContactWin
});

var crud = require('CRUD');

	var contactInfo = db.execute('SELECT * FROM contact WHERE ID=?', id);

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
			    font:{fontSize:15, fontWeight:'bold', fontFamily:'Helvetica'},
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
			    font:{fontSize:15, fontWeight:'bold', fontFamily:'Helvetica'},
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
			    font:{fontSize:15, fontWeight:'bold', fontFamily:'Helvetica'},
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
			    font:{fontSize:15, fontWeight:'bold', fontFamily:'Helvetica'},
			    borderStyle: Ti.UI.INPUT_BORDERSTYLE_ROUNDED,
			    borderColor: "#000",
			    keyboardType: Ti.UI.KEYBOARD_PHONE_PAD
			});
			
			
	    	var deleteBTN = Ti.UI.createButton({
				top : 290,
				center : 0,
				title : "Delete",
				style : Ti.UI.iPhone.SystemButtonStyle.ACTION,
				font : {fontWeight:'bold',fontSize:18, fontFamily:'Helvetica'},
				color : '#EE2C2C'
			});
			deleteBTN.addEventListener('click', deleteOk);
	
	
			var doneBTN = Ti.UI.createButton({
				systemButton:Ti.UI.iPhone.SystemButton.DONE
			});
			doneBTN.addEventListener('click', crud.edit);

				
    			//editContactWin Main Code
				editContactWin.add(deleteBTN);		
				editContactWin.setRightNavButton(doneBTN);
				editContactWin.add(fName_label, email_label, phone_label, age_label);				
				editContactWin.add(fName, email, age, phone);
				editnav.open();
		});
//Main Code
curContactWin.add(nameView, phoneView, emailView, ageView);
contactNav.open();