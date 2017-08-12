var app = angular.module('hangman.app',[]);

app.controller('HangmanController',['$scope', function($scope){

	var init = function(){
		$scope.currentWordArray = $scope.wordToFindArray.map(function(item){
			return '_';
		})
		$scope.currentWord = $scope.currentWordArray.join('');
	},
	indexesOf = function(array, char){
		var tableToReturn = [];
		for(var i = 0; i < array.length; i++){
			if(array[i] === char){
				tableToReturn.push(i);
			}
		}
		return tableToReturn;
	},
	replaceChars = function(string, indexes, char){
		console.log("replace :", string, "indexes", indexes, "char :", char);
		for(var i = 0; i < indexes.length; i++){
			console.log("index", indexes[i]);
			string = setCharAt(string, indexes[i], char);
			// string.replace('_', char);
		}
		console.log("after replace :", string);
		return string;
	},
	setCharAt = function(str,index,chr) {
		console.log("str", index > str.length-1);
		if(index > str.length-1) {
			return str;
		}
		return str.substring(0,index) + chr + str.substring(index+1);
	},
	isCharExist = function(char){
		return indexesOf($scope.wordToFindArray, char).length > 0
	},
	checkLetter = function(char){
		if(isCharExist(char)){
			return true;
		}
		else return false;
	},
	checkError = function(){

	}

	$scope.wordToFind = "impertinente";
	$scope.wordToFindArray = $scope.wordToFind.split('');
	$scope.currentWord = "";
	$scope.letter = "";
	$scope.nbErrors = 0;
	$scope.alphabet = {
		a: false,
		b: false,
		c: false,
		d: false,
		e: false,
		f: false,
		g: false,
		h: false,
		i: false,
		j: false,
		k: false,
		l: false,
		m: false,
		n: false,
		o: false,
		p: false,
		q: false,
		r: false,
		s: false,
		t: false,
		u: false,
		v: false,
		w: false,
		x: false,
		y: false,
		z: false
	};
	init();


	$scope.changeLetter = function($event){
		// console.log("event", $event);
		if($scope.inputWritted.length > 1){
			$scope.letter = $scope.inputWritted[$scope.inputWritted.length-1];
		} else {
			$scope.letter = $scope.inputWritted;
		}
		$scope.inputWritted = $scope.letter;
	}
	$scope.$watch('letter', function(newLetter, oldLetter){
		// Si la lettre n'est pas null
		if($scope.letter){
			// Si la lettre n'a pas encore ete taper, on met a jour les V et X
			if(!$scope.alphabet[$scope.letter]){
				$scope.alphabet[$scope.letter] = true;
			} else {
				console.warn("Lettre deja taper !");
			}
			// Si la lettre est dans le mot
			if(checkLetter($scope.letter)){
				//On remplace toutes les lettres existatne dans le mot
				$scope.currentWord = replaceChars($scope.currentWord, indexesOf($scope.wordToFindArray, $scope.letter), $scope.letter);
			} else {
				// Si on peut encore faire des erreurs
				if(!checkError()){
					//On incremente le nombre d'eerurs
					$scope.nbErrors++;
					// On dessine sur le canvas la nouvelle erreur
					draw($scope.nbErrors);
				}
			}
		}
	})

	$scope.$watch('currentWord', function(){
		$scope.currentWordArray = $scope.currentWord.split('');
	});

	$scope.$watch('currentWordArray', function(){
		$scope.currentWord = $scope.currentWordArray.join('');
	}, true);
}]);
