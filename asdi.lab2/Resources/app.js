var mWin = Ti.UI.createWindow({
	backgroundColor: "#fff"
});


var user = Titanium.UI.createTextField({
    top:290,
    left:10,    
    height:40,
    width:300,
    color:'#000',    
    hintText:'Username',
    value: '',
    font:{fontSize:15, fontWeight:'bold', fontFamily:'Helvetica'},
    borderStyle:Titanium.UI.INPUT_BORDERSTYLE_ROUNDED
});

var pass = Titanium.UI.createTextField({
    top:340,
    left:10,
    height:40,
    width:300,
    color:'#000',
    hintText:'Password',
    passwordMask: true,
    value: '',
    font:{fontSize:15, fontWeight:'bold', fontFamily:'Helvetica'},
    borderStyle: Titanium.UI.INPUT_BORDERSTYLE_ROUNDED
});

var signIn = Ti.UI.createButton({
    top:390,
    width:90,
    height:35,
    borderRadius:5,
    title:'Sign In',
   	font:{fontWeight:'bold',fontSize:16, fontFamily:'Helvetica'},
   	file: 'main_menu.js'
});
 
signIn.addEventListener('click', function(){
	// if (user.value != '' & pass.value != ''){
		// var alertDialog = Ti.UI.createAlertDialog({
        	// title: 'Login Successful',
        	// buttonNames: ['OK']
   		// });
   		var mainWindow = Titanium.UI.createWindow({  
			title:'Main Menu',
			backgroundColor:'#fff',
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


mWin.add(user, pass, signIn);
mWin.open();