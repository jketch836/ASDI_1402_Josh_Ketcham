// created tab group
var theTabs = Titanium.UI.createTabGroup();


// created character tab and toon window
var toonWin = Titanium.UI.createWindow({  
    title:'List of Characters',
    backgroundColor:'#fff',
    url: 'remoteAPI.js'
});
var toonTab = Titanium.UI.createTab({  
    image:'toon.png',
    title:'Grim Covanent Toons',
    window: toonWin
});


// created favorite tab and fav window
var favWin = Titanium.UI.createWindow({  
    title:'Favorite Toons',
    backgroundColor:'#fff'
});
var favTab = Titanium.UI.createTab({  
    image:'fav.png',
    title:'Favorite Characters',
    window: favWin
});


//Main Code
theTabs.addTab(toonTab);  
theTabs.addTab(favTab);  
theTabs.open();