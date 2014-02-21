Ti.UI.setBackgourndColor('white');

var curWindow = Ti.UI.currentWindow;
	
var navWin = Ti.UI.iOS.createNavigationWindow({
	window: curWindow
});


var crud = require('CRUD');

	var cancel = Ti.UI.createButton({
		systemButton:Ti.UI.iPhone.SystemButton.CANCEL
	});
	curWindow.setLeftNavButton(cancel);
	
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
	
	
	var addBTN = Ti.UI.createButton({
		systemButton:Ti.UI.iPhone.SystemButton.ADD
	});
	curWindow.setRightNavButton(addBTN);
	
	addBTN.addEventListener('click', function(){
		crud.save;
		navWin.close();
	});

	//Main Code
	curWindow.add(fName, email, age, phone);
	navWin.open();