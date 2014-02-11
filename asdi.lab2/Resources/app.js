var mWin = Ti.UI.createWindow({
	backgroundColor: "#fff"
});

var view = Ti.UI.createView({
	top:20,
	height:'auto',
	width: 'auto',
	backgroundColor: "#333"
});

var pic = Ti.UI.createImageView({
	top: '40dp',
	height: '200dp',
	width: '300dp',
	image: 'guild_pic.jpg'
});


var user = Ti.UI.createTextField({
    top:'250dp',
    left:10,    
    height:40,
    width:300,
    color:'#000',    
    hintText:'Username',
    value: '',
    font:{fontSize:15, fontWeight:'bold', fontFamily:'Helvetica'},
    borderStyle: Ti.UI.INPUT_BORDERSTYLE_ROUNDED
});

var pass = Ti.UI.createTextField({
    top:'300dp',
    left:10,
    height:40,
    width:300,
    color:'#000',
    hintText:'Password',
    passwordMask: true,
    value: '',
    font:{fontSize:15, fontWeight:'bold', fontFamily:'Helvetica'},
    borderStyle: Ti.UI.INPUT_BORDERSTYLE_ROUNDED
});

//Enter App
var enterView = Ti.UI.createView({
	backgroundColor: "#a0a6a2",
	borderRadius: 5,
	height: 40,
	width: 100,
	top: '350dp',
	center: 0,
	file: 'main_menu.js'
});

var enterLabel = Ti.UI.createLabel({
	text: "Enter",
	font: {fontSize: 15, fontFamily: "Helvetica", fontWeight: "bold"},
	color: "#000",
	center: 0,
	file: 'main_menu.js'
});
enterView.add(enterLabel);
 
enterView.addEventListener('click', function(){
	// if (user.value != '' & pass.value != ''){
		// var alertDialog = Ti.UI.createAlertDialog({
        	// title: 'Login Successful',
        	// buttonNames: ['OK']
   		// });
   		var mainWindow = Titanium.UI.createWindow({  
			title:'Main Menu',
			backgroundColor: '#fff',
			url:'main_menu.js'
		});
		mainWindow.open(mainWindow, {animate: true});
		// alertDialog.show();
	// } else {
		// var alertDialogPTA = Ti.UI.createAlertDialog({
    		// title: 'Please try agin',
        	// buttonNames: ['OK']
    	// });	
    	// alertDialogPTA.show();
	// }
});

//Main Code
view.add(pic, user, pass, enterView);
mWin.add(view);
mWin.open();