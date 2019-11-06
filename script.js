(function() {
	var score = 0;
	var totalQuestions = 0;
	var qNum, qPrompt;

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
//	var q22 = new Question(
//		'',
//		['', '', '', ''],
//		1);
//	var q23 = new Question(
//		'',
//		['', '', '', ''],
//		1);
//	var q24 = new Question(
//		'',
//		['', '', '', ''],
//		1);
//	var q25 = new Question(
//		'',
//		['', '', '', ''],
//		1);
//	var q26 = new Question(
//		'',
//		['', '', '', ''],
//		1);
//	var q27 = new Question(
//		'',
//		['', '', '', ''],
//		1);
//	var q28 = new Question(
//		'',
//		['', '', '', ''],
//		1);
//	var q29 = new Question(
//		'',
//		['', '', '', ''],
//		1);
//	var q30 = new Question(
//		'',
//		['', '', '', ''],
//		1);
//	var q31 = new Question(
//		'',
//		['', '', '', ''],
//		1);
//	var q32 = new Question(
//		'',
//		['', '', '', ''],
//		1);
//	var q33 = new Question(
//		'',
//		['', '', '', ''],
//		1);
//	var q34 = new Question(
//		'',
//		['', '', '', ''],
//		1);
//	var q35 = new Question(
//		'',
//		['', '', '', ''],
//		1);
//	var q36 = new Question(
//		'',
//		['', '', '', ''],
//		1);
//	var q37 = new Question(
//		'',
//		['', '', '', ''],
//		1);
//	var q38 = new Question(
//		'',
//		['', '', '', ''],
//		1);
//	var q39 = new Question(
//		'',
//		['', '', '', ''],
//		1);
//	var q40 = new Question(
//		'',
//		['', '', '', ''],
//		1);

	//array of question objects
	var questions = [q1, q2, q3, q4, q5, q6, q7, q8, q9, q10, q11, q12, q13, q14, q15, q16, q17, q18, q19, q20];
//	, q21, q22, q23, q24, q25, q26, q27, q28, q29, q30, q31, q32, q33, q34, q35, q36, q37, q38, q39, q40

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
				score +=1;
				} else {
					document.querySelector('.result').innerHTML = '' +this.answers[(parseInt(ans)-1)]+ ' is a ridiculous answer.<br>The correct answer is '+this.answers[this.correctAnswer];
				}
			//document.querySelector('.result').innerHTML += '<br>Your current score is '+score+'.';	
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
		var qNum = Math.floor(Math.random()*questions.length);
		
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
	
	document.querySelector('.next').addEventListener('click', function() {
		nextQ();
	});
	
})();
