Ti.UI.setBackgourndColor('white');

var curWindow = Ti.UI.currentWindow;

var addNav = Ti.UI.iOS.createNavigationWindow({
	window : curWindow
});

var crud = require('CRUD');

var cancel = Ti.UI.createButton({
	systemButton : Ti.UI.iPhone.SystemButton.CANCEL
});
addContactWin.setLeftNavButton(cancel);

cancel.addEventListener('click', function() {
	addNav.close();
});

var fName_label = Ti.UI.createLabel({
	top : '55dp',
	left : 35,
	text : 'Full Name: ',
	font : {
		fontSize : 16,
		fontWeight : 'bold',
		fontFamily : 'Helvetica'
	}
});

var email_label = Ti.UI.createLabel({
	top : '130dp',
	left : 35,
	text : 'Email: ',
	font : {
		fontSize : 16,
		fontWeight : 'bold',
		fontFamily : 'Helvetica'
	}
});

var phone_label = Ti.UI.createLabel({
	top : '205dp',
	left : 35,
	text : 'Phone Number: ',
	font : {
		fontSize : 16,
		fontWeight : 'bold',
		fontFamily : 'Helvetica'
	}
});

var age_label = Ti.UI.createLabel({
	top : '205dp',
	right : 70,
	text : 'Age: ',
	font : {
		fontSize : 16,
		fontWeight : 'bold',
		fontFamily : 'Helvetica'
	}
});

var fName = Ti.UI.createTextField({
	top : '75dp',
	center : 0,
	height : 50,
	width : 250,
	color : '#000',
	hintText : 'John Smith',
	autocorret : false,
	// value: '',
	font : {
		fontSize : 15,
		fontWeight : 'bold',
		fontFamily : 'Helvetica'
	},
	borderStyle : Ti.UI.INPUT_BORDERSTYLE_ROUNDED,
	borderColor : "#000"
});

var email = Ti.UI.createTextField({
	top : '150dp',
	center : 0,
	height : 50,
	width : 250,
	color : '#000',
	hintText : 'abced@asdf.com',
	autocorret : false,
	// value: '',
	font : {
		fontSize : 15,
		fontWeight : 'bold',
		fontFamily : 'Helvetica'
	},
	borderStyle : Ti.UI.INPUT_BORDERSTYLE_ROUNDED,
	borderColor : "#000"
});

var phone = Ti.UI.createTextField({
	top : '225dp',
	left : 35,
	height : 50,
	width : 145,
	color : '#000',
	hintText : '123-123-1234',
	// value: '',
	font : {
		fontSize : 15,
		fontWeight : 'bold',
		fontFamily : 'Helvetica'
	},
	borderStyle : Ti.UI.INPUT_BORDERSTYLE_ROUNDED,
	borderColor : "#000",
	keyboardType : Ti.UI.KEYBOARD_NUMBER_PAD
});

var age = Ti.UI.createTextField({
	top : '225dp',
	right : 35,
	height : 50,
	width : 75,
	color : '#000',
	// value: '',
	hintText : '18',
	font : {
		fontSize : 15,
		fontWeight : 'bold',
		fontFamily : 'Helvetica'
	},
	borderStyle : Ti.UI.INPUT_BORDERSTYLE_ROUNDED,
	borderColor : "#000",
	keyboardType : Ti.UI.KEYBOARD_PHONE_PAD
});

var saveBTN = Ti.UI.createButton({
	systemButton : Ti.UI.iPhone.SystemButton.SAVE
});
addContactWin.setRightNavButton(saveBTN);

saveBTN.addEventListener('click', function() {
	crud.save();
	navWin.close();
});

//Main Code
curWindow.add(fName_label, email_label, phone_label, age_label);
curWindow.add(fName, email, age, phone);
addNav.open();
