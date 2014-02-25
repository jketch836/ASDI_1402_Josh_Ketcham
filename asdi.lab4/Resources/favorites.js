// var crud = Ti.include('CrudFile.js');

var cWin = Ti.UI.currentWindow;

var picTabard = Ti.UI.createImageView({
	height : Ti.UI.setHeight,
	width : Ti.UI.setWidth,
	image : 'guild_tabard.png'
});

var characterScroll = Ti.UI.createScrollView({
	layout : 'vertical',
	height : '470dp',
	width : 320,
	showVerticalScrollIndicator : true
});
	
favListTemplate = {
	properties : 
	{
		top : 20,
		height : 60
	},
	childTemplates : 
	[
		{
			type : "Ti.UI.Label",
			bindId : 'name',
			properties : 
			{
				color : "black",
				font : 
				{
					fontSize : 18,
					fontFamily : "Arial",
					fontWeight : "bold"
				},
				left : 20,
				top : 5
			}
		}, 
		{
			type : "Ti.UI.Label",
			bindId : 'division',
			properties : 
			{
				color : "black",
				font : 
				{
					fontSize : 14,
					fontFamily : "Arial"
				},
				right : 25,
				top : 10
			},
		}, 
		{
			type : "Ti.UI.Label",
			bindId : 'level',
			properties : 
			{
				color : "grey",
				font : 
				{
					fontSize : 14,
					fontFamily : "Arial"
				},
				left : 20,
				top : 40
			}
		}, 
		{
			type : "Ti.UI.Label",
			bindId : 'acheive',
			properties : 
			{
				color : "black",
				font : 
				{
					fontSize : 14,
					fontFamily : "Arial"
				},
				right : 125,
				top : 40
			},
		}
	]
};

//API Object Info
var sectionList = Ti.UI.createListSection({
});
var savedListView = Ti.UI.createListView({
	top : 20,
	opacity : .8,
	templates : {
		'defaultTemplate' : favListTemplate
	},
	defaultItemTemplate : 'defaultTemplate'
});
// 
// var data = [];
// data.push({
			// properties : {
				// name : name,
				// level : level,
				// acheive : acheive,
				// division : division
			// },
			// name : {
				// text : name
			// },
			// level : {
				// text : 'LVL: ' + level
			// },
			// acheive : {
				// text : 'Points: ' + acheive
			// },
			// division : {
				// text : division
			// }
		// });
// 
// // Main Code
// sectionList.setItems(data);
savedListView.sections = [sectionList];
characterScroll.add(savedListView);
cWin.add(characterScroll);
cWin.open();
