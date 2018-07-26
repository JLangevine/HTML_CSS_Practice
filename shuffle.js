function shuffle(){
		var ran = Math.floor(Math.random()*7 + 1);
		switch(ran){
		case 1:
			var word = "Joy";
			break;
		case 2:
			var word = "Cheesecake";
			break;
		case 3:
			var word = "Tres-Leches";
		case 4:
			var word = "Macaroni";
		case 5:
			var word = "Fifth"+ran;
		case 6:
			var word = "Almost"+ran;
		default:
			var word = "affable";
		}
		document.getElementById("word").innerHTML = word;
	}