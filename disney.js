function selectCharacter() {
	var char = ["Elsa", "Ariel", "Mulan", "Jasmine"]
	document.getElementById("selectedName").innerHTML = document.getElementById("name").value;
	x = document.getElementById("name").value
	if (x == "") {
		alert("Please enter your choice!");
	}
	else if (char.includes(x)) {
		
	} else {
		alert("Please choose only from the 4 given characters!")
	}
	
}
function getCharacter() {
	var i;
	var char = ["Elsa", "Ariel", "Mulan", "Jasmine"]
	var movie = ["Frozen", "The Little Mermaid", "Mulan", "Aladdin"];
	var bestFriend = ["Anna", "Flounder", "General Li Shang", "Aladdin"];
	var nemesis = ["Prince Hans", "Ursula", "Shan-Yu", "Jafar"];
	var song = ["Let It Go", "Under The Sea", "Reflection", "A Whole New World"];
	var lyrics = [
		"Let it go, let it go Can't hold it back anymore Let it go, let it go Turn away and slam the door! I don't care What they're going to say Let the storm rage on The cold never bothered me anyway!",

		"The seaweed is always greener In somebody else's lake You dream about going up there But that is a big mistake Just look at the world around you Right here on the ocean floor Such wonderful things surround you What more is you lookin' for?",

		"Who is that girl I see, staring straight back at me? Why is my reflection someone I don't know? Somehow I cannot hide? Who I am, though I've tried. When will my reflection show, who I am, inside? How I pray, that a time will come, I can free myself, from their expectations On that day, I'll discover someway to be myself, and to make my family proud.",

		"I can show you the world  Shining, shimmering, splendid Tell me, princess, now when did You last let your heart decide? I can open your eyes Take you wonder by wonder Over sideways and under On a magic carpet ride"
		];
	x = document.getElementById("name").value
	if (x == "") {
		alert("Please enter your choice!");
	}
	else if (char.includes(x)) {
		
	} else {
		alert("Please choose only from the 4 given characters!")
	}

	x = Math.random();
	x = x * 4;
	x = Math.floor(x);
	x = x + 1;

	document.getElementById("getName").innerHTML = char[x-1];
	document.getElementById("movie").innerHTML = movie[x-1];
	document.getElementById("getFriend").innerHTML = bestFriend[x-1];
	document.getElementById("getNemesis").innerHTML = nemesis[x-1];
	document.getElementById("getSong").innerHTML = song[x-1];
	document.getElementById("getLyrics").innerHTML = lyrics[x-1];

	if (x == 1) {
		document.getElementById("image").src = "images/elsa.png";//http://pgnsmundo.blogspot.com/2016/07/png-frozen-elsa-anna-olaf.html
	}
	else if (x == 2) {
		document.getElementById("image").src = "images/ariel.png";//http://www.pngonly.com/mermaid-png/
	}
	else if (x == 3) {
		document.getElementById("image").src = "images/mulan.png";//https://www.planetminecraft.com/skin/g00--disney--mulan-/
	}
	else {
		document.getElementById("image").src = "images/jasmine.png";//https://izanablogs.wordpress.com/2015/11/22/disney-princess-manicures/
	}


	if (char[x-1] == document.getElementById("name").value) {
		alert("Congratulations! You Win the game!");
		document.getElementById("ifWin").innerHTML = "Congratulations! You Win the game!";
	}

}

function slide() {
	var i;
	var x = document.getElementById("slider").value;
	for (i = -1; i < 10; i++) {
		if (x == i + 1) {
			document.getElementById("rating").innerHTML = x + "/ 10";
		}
	}
}