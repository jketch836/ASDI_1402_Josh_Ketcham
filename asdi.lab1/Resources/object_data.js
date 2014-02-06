//Dot Notations Rurouni Kenshin Manga		
	var battosai = new Object();
		battosai.name = 'Himura Kenshin';
		battosai.aka = 'Hitokiri Battosai';
		battosai.robe = 'Red';
		battosai.age = 28;
		battosai.weapon = 'Reverse Blade Katana';
		battosai.info = function(){
			return battosai.name + "'s weapon is a " + battosai.weapon + '. It is a fictional sword.';
		};
		battosai.about = function (){
			return battosai.name + " was a former assassin called "  + battosai.aka + ". By the time the manga starts " + battosai.name + " is " + battosai.age + ", and wears a " + battosai.robe + " robe.";
		};	
	
	var zanza = new Object();
		zanza.name = 'Sagara Sanosuke';
		zanza.aka = 'Zanza';
		zanza.robe = 'white';
		zanza.age = 19;
		zanza.weapon = "his fists";
		zanza.info = function(){
			return zanza.name + "'s weapon is " + zanza.weapon + '.';
		};
		zanza.about = function (){
			return zanza.name + " was an underground fighter called " + zanza.aka + ". By the time the manga starts " + zanza.name + " is " + zanza.age + ", and wears a " + zanza.robe + " robe.";
		};	
		
	var karou = new Object();
		karou.name = 'Kamiya Karou';
		karou.aka = 'Kenjutsu Princess';
		karou.robe = 'Light Blue';
		karou.age = 17;
		karou.weapon = "Bokken";
		karou.info = function(){
			return karou.name + "'s weapon is a " + karou.weapon + '. It is a weapon used to train samurai.';
		};
		karou.about = function (){
			return karou.name + " is a dojo master some have nicknamed the " + karou.aka + ". By the time the manga starts " + karou.name + " is " + karou.age + ", and wears a " + karou.robe + " robe.";
		};	
		
	var yahiko = new Object();
		yahiko.name = 'Myojin Yahiko';
		yahiko.aka = 'Tokyo Shizoku';
		yahiko.robe = 'Green';
		yahiko.age = 10;
		yahiko.weapon = "Bokken";
		yahiko.info = function(){
			return yahiko.name + "'s weapon is a " + yahiko.weapon + '. It is a weapon used to train samurai.';
		};
		yahiko.about = function (){
			return yahiko.name + " is a dojo student. Some have nicknamed him " + yahiko.aka + ". By the time the manga starts " + yahiko.name + " is " + yahiko.age + ", and wears a " + yahiko.robe + " robe.";
		};
	
	var Shishio = new Object ();
		Shishio.name = 'Shishio Makoto';
		Shishio.aka = 'Hitokiri';
		Shishio.robe = 'Purple';
		Shishio.age = 30;
		Shishio.weapon = "Wakizashi";
		Shishio.info = function(){
			return Shishio.name + "'s weapon is a " + Shishio.weapon + ". It is a weapon that samurai's used.";
		};
		Shishio.about = function (){
			return Shishio.name + " is a deadly assassin nicknamed the " + Shishio.aka + ". By the time the manga starts " + Shishio.name + " is " + Shishio.age + ", and wears a " + Shishio.robe + " robe.";
		};
		
	var hiko = new Object ();
		hiko.name = 'Hiko Seijuro';
		hiko.aka = 'Kakunoshin';
		hiko.robe = 'white/red';
		hiko.age = 43;
		hiko.weapon = "Katana";
		hiko.info = function(){
			return hiko.name + "'s weapon is a " + hiko.weapon + ". It is a weapon that samurai's used.";
		};
		hiko.about = function (){
			return hiko.name + " is a deadly assassin nicknamed " + hiko.aka + ". By the time the manga starts " + hiko.name + " is " + hiko.age + ", and wears a " + hiko.robe + " robe.";
		};
	
// Character information gotten from http://kenshin.wikia.com/
// Sword information gotten from http://books.google.com/books id=zPyswmGDBFkC&pg=PA48&dq=wakizashi&hl=en&ei=KZYsTo-EIqTd0QGXndDkDg&sa=X&oi=book_result&ct=result&resnum=5&ved=0CDkQ6AEwBA#v=onepage&q=wakizashi&f=true


//Literal Notations Book Information
	var ASOIAFinfo = {
		author: 'George R.R. Martin',
		publisher: 'Bantam Books',
		series: 'A Song of Ice and Fire',
		numBooks: 7,
		book:["A Game of Thrones", "A Clash of Kings", "A Storm of Swords", "A Feast for Crows", "A Dance wtih Dragons", "The Winds of Winter", "A Dream of Spring"],
		info: function(){
			return this.author + " is the creator of a the " + this.series + " series.";
		},
		about: function(){
			return "There are [going to be] " + this.numBooks + " that are named " + this.book + " that are published by " + this.publisher;
		}
	};
	
	var LORinfo = {
		author: 'J.R.R. Tolkein',
		publisher: 'George Allen & Unwin, Ltd.',
		series: 'Lord of the Rings',
		numBooks: 6,
		book:["The Ring Sets Out", "The Ring Goes South", "The Treason of Isengard", "The Journey to Mordor", "The War of the Ring", "The Return of the King"],
		info: function(){
			return LORinfo.author + " is the creator of a the " + LORinfo.series + " series.";
		},
		about: function(){
			return "There are " + LORinfo.numBooks + " that are named " + LORinfo.book + " that are published by " + LORinfo.publisher;
		}		
	};

	var HGRinfo = {
		author: 'Suzanne Collins',
		publisher: 'Scholastic Inc.',
		series: 'Hunger Games Series',
		numBooks: 3,
		book:["The Hunger Games", "Catching Fire", "Mockingjay"],
		info: function(){
			return HGRinfo.author + " is the creator of a the " + HGRinfo.series + " series.";
		},
		about: function(){
			return "There are " + HGRinfo.numBooks + " that are named " + HGRinfo.book + " that are published by " + HGRinfo.publisher;
		}				
	};
	
	var HPinfo = {
		author: 'J.K. Rowling',
		publisher: 'Scholastic Inc.',
		series: 'Harry Potter',
		numBooks: 7,
		book:["The Sorcerer's Stone", "The Chamber of Secrets", "The Prizoner of Askaban", "The Goblet of Fire", "The Order of the Phoenix", "The Half-Blood Prince", "The Deathly Hallows"],
		info: function(){
			return "The " + this.series + " series was created by " + this.author;
		},
		about: function(){
			return "There are " + this.numBooks + " that are named " + this.book + " that are published by " + this.publisher;
		}
	};
	
	var InheritanceInfo = {
		author: 'Christopher Paolini',
		publisher: "Random House Children's Books",
		series: 'Inheritance Cycle',
		numBooks: 4,
		book:["Eragon", "Eldest", "Brisingr", "Inheritance"],	
		info: function(){
			return this.author + " is the creator of a the " + this.series + " series.";
		},
		about: function(){
			return "There are " + this.numBooks + " that are named " + this.book + " that are published by " + this.publisher;
		}			
	};
	
	var LangdonInfo = {
		author: 'Dan Brown',
		publisher: 'Penguin Group Inc.',
		series: 'Robert Langdon Series',
		numBooks: 4,
		book:["Angels and Demons", "The Davinci Code", "The Lost Symbol", "Inferno"],
		info: function(){
			return this.author + " is the creator of a the " + this.series + " series.";
		},
		about: function(){
			return "There are " + this.numBooks + " that are named " + this.book + " that are published by " + this.publisher;
		}				
	};

//Movie info found at http://www.barnesandnoble.com/


var booksInfo = [ASOIAFinfo, LORinfo, HGRinfo, HPinfo, InheritanceInfo, LangdonInfo];

exports.books = booksInfo;


var charInfo = [battosai, karou, zanza, yahiko, Shishio, hiko];
exports.chara = charInfo;