(function() {
	
	//function constructor
	var Question = function(question, answers, correctAnswer) {
		this.question = question;
		this.answers = answers;
		this.correctAnswer = correctAnswer;
	}
	
	//objects created from function constructor
	var q1 = new Question(
		'What color are aircraft black boxes?', 
		['Black', 'Orange', 'Blue', 'Silver'], 
		1 );
	var q2 = new Question(
		'What nationality was Cleopatra, Queen of Egypt?',
		['Greek', 'Ethiopian', 'Egyptian', 'German'],
		0);
	var q3 = new Question(
		'What color is blueberry jam?',
		['Black', 'Blue', 'Red', 'Purple'],
		3);
	var q4 = new Question(
		'The beaver is the national emblem of which country?',
		['Brazil', 'Japan', 'Canada', 'Finland'],
		2);
	var q5 = new Question(
		'Where did Spanish flu originate?',
		['Spain', 'USA', 'Siberia', 'South Africa'],
		1);
	var q6 = new Question(
		'What is the name of Batman’s butler?',
		['Alfred', 'Igor', 'James', 'Harold'],
		0);
	var q7 = new Question(
		'Which movie features the song Ding Dong The Witch Is Dead?',
		['Hocus Pocus', 'Sabrina', 'Maleficent ', 'The Wizard of Oz'],
		3);
	var q8 = new Question(
		'Which of the planets is closest to the sun?',
		['Venus', 'Mercury', 'Pluto', 'Mars'],
		1);
	var q9 = new Question(
		'How many letters are there in the German alphabet?',
		['26', '24', '30', '45'],
		2);
	var q10 = new Question(
		'In Toy Story, who is Andy\'s next door neighbour?',
		['George', 'Sid', 'Rex', 'Molly'],
		1);
	var q11 = new Question(
		'What type of beans does Hannibal Lecter like to enjoy with a nice chianti?',
		['Black beans', 'Beans in tomato sauce', 'Fava beans', 'Lima beans'],
		2);
	var q12 = new Question(
		'In Star Wars, what bird is associated with Han Solo\'s "Millenium" ship?',
		['Dove', 'Eagle', 'Hawk', 'Falcon'],
		3);
	var q13 = new Question(
		'Which is the largest continent?',
		['Africa', 'North America', 'Antarctica', 'Asia'],
		3);
	var q14 = new Question(
		'Which year did Princess Diana die?',
		['1997', '1991', '1994', '1979'],
		0);
	var q15 = new Question(
		'Which year did World War I start?',
		['1914', '1945', '1918', '1903'],
		0);
	var q16 = new Question(
		'Before pirates used it, whose ships flew the skull and cross-bones flag?',
		['The Vikings', 'Christopher Columbus', 'Knights Templar', 'Moses'],
		2);
	var q17 = new Question(
		'How many symphonies did Beethoven compose?',
		['10', '9', '8', '7'],
		1);
	var q18 = new Question(
		'What is Johnny Depp afraid of?',
		['Heights', 'Snakes', 'Clowns', 'Elephants'],
		2);
	var q19 = new Question(
		'What was Marilyn Monroe\'s natural hair colour?',
		['Blonde', 'Black', 'Ginger', 'Brown'],
		2);
	var q20 = new Question(
		'In which season do most burglaries take place?',
		['Spring', 'Summer', 'Autumn', 'Winter'],
		3);
	var q21 = new Question(
		'Who won the Rugby World Cup in 2019?',
		['South Africa', 'Japan', 'England', 'Germany'],
		0);
	var q22 = new Question(
		'Where would you find the Sea of Tranquility?',
		['Disney Land in Hong Kong', 'Yellowstone National Park', 'Miami', 'The Moon'],
		3);
	var q23 = new Question(
		'Who played Neo in The Matrix?',
		['Johnny Depp', 'Sean Connery', 'Pink', 'Keanu Reeves'],
		3);
	var q24 = new Question(
		'Which chess piece can only move diagonally?',
		['A Bishop', 'A Pawn', 'A Queen', 'A Knight'],
		0);
	var q25 = new Question(
		'What is the leading cause of death in Papua New Guinea?',
		['Drowning', 'Choking', 'Falling out of trees', 'Shark attacks'],
		2);
	var q26 = new Question(
		'In Terry Pratchett\'s book, Pyramids, what kind of animal has the name of "You Bastard"?',
		['A dog', 'A dragon', 'A camel', 'A monkey'],
		2);
	var q27 = new Question(
		'If you are discombobulated, what are you?',
		['Clinically insane', 'Happy', 'Wanted for questioning', 'Confused'],
		3);
	var q28 = new Question(
		'The collective noun for which animal is often known as an "embarrassment"?',
		['Skunks', 'Pandas', 'Pigs', 'Meerkats'],
		1);
	var q29 = new Question(
		'Which date in May is celebrated by many science fiction fans as Star Wars Day?',
		['23rd', '1st', '15th', '4th'],
		3);
	var q30 = new Question(
		'"I\'m bored with it all" were the last words of which famous British person?',
		['Amy Winehouse', 'Charles Darwin', 'Sir Winston Churchill', 'John Lennon'],
		2);
	var q31 = new Question(
		'In the Bible, what is the last word in the Old Testament?',
		['curse', 'it', 'life', 'love'],
		0);
	var q32 = new Question(
		'How many books of the Bible are names after women?',
		['None', '2', '3', '5'],
		1);
	var q33 = new Question(
		'The fictional islands of Lilliput, Azania and Skull Island are all supposedly located in which real ocean?',
		['The Atlantic', 'The Pacific', 'The Southern', 'The Indian'],
		3);
	var q34 = new Question(
		'What sort of animal was Paul, who predicted the winner of football games during the 2010 FIFA World Cup?',
		['A goat', 'A snail', 'An octopus', 'An orangutan'],
		2);
	var q35 = new Question(
		'Handball is the national sport of which country?',
		['Iceland', 'Norway', 'Uruguay', 'Zambia'],
		0);
	var q36 = new Question(
		'If you have Ephebiphobia, what do you have a fear of?',
		['Peanut butter', 'Flowers', 'Teenagers', 'The colour white'],
		2);
	var q37 = new Question(
		'When a burning cigarette is inhaled, what is the temperature at its tip?',
		['700 degrees celsius', '500 degrees celsius', '300 degrees celsius', '100 degrees celsius'],
		0);
	var q38 = new Question(
		'Which famous inventor averaged one patent for every three weeks of his life?',
		['Nikola Tesla', 'Henry Ford', 'Alfred Nobel', 'Thomas Edison'],
		3);
	var q39 = new Question(
		'What atmospheric gas is the most common?',
		['Oxygen', 'Nitrogen', 'Argon', 'Carbon Dioxide'],
		1);
	var q40 = new Question(
		'Which blood type is known as the universal donor?',
		['A-positive', 'O-Positive', 'B-Positive', 'O-Negative'],
		3);

	//array of question objects
	var questions = [q1, q2, q3, q4, q5, q6, q7, q8, q9, q10, q11, q12, q13, q14, q15, q16, q17, q18, q19, q20, q21, q22, q23, q24, q25, q26, q27, q28, q29, q30, q31, q32, q33, q34, q35, q36, q37, q38, q39, q40];
	
	var qNum, qPrompt;
	
	//function get the question and answer to print to the screen
	Question.prototype.getQ = function() {
		//console.log(this.question);
		document.querySelector('.question').textContent = this.question;
		var ansHTML = '';
		for(var i = 0; i<this.answers.length; i++) {
			//console.log(i+ ': ' +this.answers[i]);
			var indexNum1 = parseInt(i)+1;
			ansHTML += '' +indexNum1+ ': ' +this.answers[i]+ '<br>';
			document.querySelector('.answers').innerHTML = ansHTML;
		}
	}	
	
	//function to check if the user answered correctly
	Question.prototype.getA = function(ans) {
			if(this.correctAnswer === (parseInt(ans)-1)) {
				document.querySelector('.result').innerHTML = 'Wise, you are.<br>'+this.answers[this.correctAnswer]+', correct, it is.';
				} else {
					document.querySelector('.result').innerHTML = '' +this.answers[(parseInt(ans)-1)]+ ' is a ridiculous answer.<br>The correct answer is '+this.answers[this.correctAnswer];
				}	
		document.querySelector('.submit').style.display = 'none';
		document.querySelector('.next').style.display = 'block';		
	}
	
	function nextQ() {
		document.querySelector('.submit').style.display = 'block';
			document.querySelector('.next').style.display = 'none';
			document.querySelector('.answer').value = '';
			document.querySelector('.answer').focus();
			document.querySelector('.result').textContent = '';
		//random number to get one of the array items
		var qNum = Math.floor(Math.random()*questions.length)+1;
		
		//getting the questions and answers to print to the screen
		questions[qNum].getQ();		
		
		document.querySelector('.submit').addEventListener('click', function() {
		qPrompt = document.querySelector('.answer').value;
		//checking the user (prompt) answer against the correct answer		
		questions[qNum].getA(qPrompt);
		
		});	
	}
	
	document.querySelector('.start').addEventListener('click', function() {
		document.querySelector('#wrapper1').style.display = 'none';
		document.querySelector('#wrapper2').style.display = 'block';
		nextQ();
	});
	
	document.querySelector('.next').addEventListener('click', nextQ);
	
})();
