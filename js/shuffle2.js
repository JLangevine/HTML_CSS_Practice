function shuffle(){
		var word;
		var ran = Math.floor(Math.random()*7 + 1);
		switch(ran){
		case 1:
			word = "Joy";
			break;
		case 2:
			word = "Cheesecake";
			break;
		case 3:
			word = "Tres-Leches";
		case 4:
			word = "Macaroni";
		case 5:
			word = "Fifth"+ran;
		case 6:
			word = "Almost"+ran;
		default:
			word = "affable";
		}
		document.getElementById("word").innerHTML = word;
		console.log(word);
		return word;
	}