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
	}
	checkLetter = function(char){
		if(isCharExist(char)){
			$scope.currentWord = replaceChars($scope.currentWord, indexesOf($scope.wordToFindArray, char), char);
			return true;
		}
		else return false;
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
		console.log("letter", "newLetter", newLetter, "oldLetter", oldLetter, "letter", $scope.letter);
		if($scope.letter){
						// console.log("on a taper une letter, existe-t-elle ? ", isCharExist($scope.letter));
			$scope.alphabet[$scope.letter] = true;
			if(checkLetter($scope.letter)){
				// draw();
			} else {
				$scope.nbErrors++;
				draw($scope.nbErrors);
				//TODO error !
			}

			// if(newLetter !== oldLetter){
			// 	if($scope.letter.length > 1){
			// 		$scope.letter = $scope.letter[0];
			// 	} else {
			// 		// it's a new letter, check if exists
			// 	}
			// }
		}
	})

	$scope.$watch('currentWord', function(){
		$scope.currentWordArray = $scope.currentWord.split('');
	});

	$scope.$watch('currentWordArray', function(){
		$scope.currentWord = $scope.currentWordArray.join('');
	}, true);
}]);
