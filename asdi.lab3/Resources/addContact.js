var addContactWin = Ti.UI.createWindow({
	title: 'Add New Contact',
	backgroundColor: '#F8F8FF'
});

var navWin = Ti.UI.iOS.createNavigationWindow({
	window: addContactWin
});


var crud = require('CRUD');

var cancel = Ti.UI.createButton({
	height: '15dp',
	width:  '15dp',
	title: 'Cancel'
});
addContactWin.setLeftNavButton(cancel);

cancel.addEventListener('click', function(){
// var contact = require('app');
var contact = navWin.close();
});


var fName = Ti.UI.createTextField({
    top: '75dp',
    center: 0,    
    height: 50,
    width: 250,
    color: '#000',    
    hintText: 'Full Name',
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
    font:{fontSize:15, fontWeight:'bold', fontFamily:'Helvetica'},
    borderStyle: Ti.UI.INPUT_BORDERSTYLE_ROUNDED,
    borderColor: "#000",
    keyboardType: Ti.UI.KEYBOARD_PHONE_PAD
});


var save = Ti.UI.createButton({
	height: '15dp',
	width:  '15dp',
	title: 'Save'
});
addContactWin.setRightNavButton(save);

save.addEventListener('click', function(){
tableData.setData(crud.save);
});

//Main Code
addContactWin.add(fName, email, age, phone);
navWin.open();