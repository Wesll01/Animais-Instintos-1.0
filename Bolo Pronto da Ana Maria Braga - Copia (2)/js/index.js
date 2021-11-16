var myQuestions = [
	{
		question: "1-O Lobo-Guará virou a cara de uma das cédulas no Brasil, qual é essa nota?",
		answers: {
			a: '50 Reais',
			b: '100 Reais',
			c: '200 Reais',
			d: '200 Cruzeiros'
		},
		correctAnswer: 'c'
	},
	{
		question: "2-A Arara-Azul é uma ave que costuma viver nos biomas da Floresta Amazônica, Pantanal e...",
		answers: {
			a: 'Cerrado',
			b: 'Caatinga',
			c: 'Pampas',
			d: 'Mata Atlântica'
		},
		correctAnswer: 'a'
	},
	{
		question: "3-Apenas um entre 17 espécies de pinguins vive no continente Africano, qual é o nome deste pinguim?",
		answers: {
			a: 'Pinguim-Africano',
			b: 'Pimguim de Madagascar',
			c: 'Pinguim-Rei',
			d: 'Pinguim-Imperador'
		},
		correctAnswer: 'a'
	},
	{
		question: "4-Uma das principais características do soldadinho-do-araripe, é a diferença de cor dos machos e das fêmeas. Enquanto os machos são coloridos(preto, branco e vermelho na cabeça), as fêmeas possuem apenas uma cor predominante, sendo essa a cor...A Arara-Azul é uma ave que costuma viver nos biomas da Floresta Amazônica, Pantanal e...",
		answers: {
			a: 'Azul',
			b: 'Verde',
			c: 'Laranja',
			d: 'Roxo'
		},
		correctAnswer: 'b'
	},
	{
		question: "5-Os Pandas-Gigantes alimentam-se, quase que exclusivamente, de folhas de bambu. Quanto kg por dia ele costuma se alimentar, em média?",
		answers: {
			a: '5kg',
			b: '30kg',
			c: '14 a 21kg',
			d: '9 a 14kg'
		},
		correctAnswer: 'd'
	},
	{
		question: "6-O Gorila-da-Montanha é um ser muito inteligente, conseguem até aprender a...",
		answers: {
			a: 'Aprender uma língua',
			b: 'Cantar',
			c: 'Usar ferramentas simples',
			d: 'Jogar Video-Game'
		},
		correctAnswer: 'c'
	},
	{
		question: "7-A Baleia Azul é o maior animal do mundo, quantos metros de comprimento o animal pode chegar?",
		answers: {
			a: '20 Metros',
			b: '30 Metros',
			c: '10 Metros',
			d: '15 Metros'
		},
		correctAnswer: 'b'
	},
];

var quizContainer = document.getElementById('quiz');
var resultsContainer = document.getElementById('results');
var submitButton = document.getElementById('submit');

generateQuiz(myQuestions, quizContainer, resultsContainer, submitButton);

function generateQuiz(questions, quizContainer, resultsContainer, submitButton){

	function showQuestions(questions, quizContainer){
		var output = [];
		var answers; 

		for(var i=0; i<questions.length; i++){
			
			answers = [];

			for(letter in questions[i].answers){

				answers.push(
					'<label>'
						+ '<input type="radio" name="question'+i+'" value="'+letter+'">'
					//	+ letter + ') '
						+ questions[i].answers[letter]
					+ '</label>'
				);
			}

			output.push(
				'<div class="question">' + questions[i].question + '</div>'
				+ '<div class="answers">' + answers.join('') + '</div>'
			);
		}

		quizContainer.innerHTML = output.join('');
	}


	function showResults(questions, quizContainer, resultsContainer){
			
		
		var answerContainers = quizContainer.querySelectorAll('.answers');
		
		
		var userAnswer = '';
		var numCorrect = 0;
		
		
		for(var i=0; i<questions.length; i++){

			
			userAnswer = (answerContainers[i].querySelector('input[name=question'+i+']:checked')||{}).value;
			
			
			
			if(userAnswer===questions[i].correctAnswer){
				
				numCorrect++;
				
				
				answerContainers[i].style.color = 'lightgreen';
			}
			
			else{
				
				answerContainers[i].style.color = 'red';
			}
		}

			
			resultsContainer.innerHTML = numCorrect + ' de ' + questions.length;
		}

	
	showQuestions(questions, quizContainer);

	
	submitButton.onclick = function(){
		showResults(questions, quizContainer, resultsContainer);
	}
}
