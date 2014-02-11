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
    borderStyle:Titanium.UI.INPUT_BORDERSTYLE_ROUNDED
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
    borderStyle: Titanium.UI.INPUT_BORDERSTYLE_ROUNDED
});

var signIn = Ti.UI.createButton({
    top:'340dp',
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

//Main Code
view.add(pic, user, pass, signIn);
mWin.add(view);
mWin.open();