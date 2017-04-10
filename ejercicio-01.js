//Función principal
function isValidCard(creditCardNumber) {
    // Escribe tu código aquí
   if(indeterminate(creditCardNumber) == true){
		return 'Ingresa un numero';
	}
	if(isNumber(creditCardNumber) == true){
		return "Error de dato";
	}
	if(quantity(creditCardNumber) == false){
		return "Faltan numeros";
	}
	validateNum(sum)
}
//Función que validan los tipos de datos
function indeterminate(creditCardNumber){
	if(creditCardNumber == undefined){
		return true;
	}
}
function isNumber(creditCardNumber){
	if(typeof(creditCardNumber) !== 'number'){
		return true;
	}
}
function quantity(creditCardNumber){
	const numberToString = creditCardNumber.toString();
	const length  = numberToString.length ;
	if(length !== 16){
		return false;
	}
}
function validateNum(sum){
	if (sum%10==0){
		return true;
	} else {
		return false;
	}
}
//Funciones auxiliares
function oddNumbers(creditCardNumber){
	const numbers = creditCardNumber;
	const numToString = numbers.toString();
	const arrayNumbers = numToString.split('');
	const oddNums = arrayNumbers.filter(function(item){
	return (item+1)%2==0;});
	return oddNums;
	multiplyOdd(oddNums);
}
function multiplyOdd(oddNums){
	const multiplied = oddNums.map(function(n){
		 return n*2
	});
	return multiplied;
	concatNumbers(multiplied)
}
function pairNumbers(){
	const numbers = creditCardNumber;
	const numToString = numbers.toString();
	const arrayNumbers = numToString.split('');
	const pairNumbers = arrayNumbers.filter(function(item){
	return (item+1)%2!==0;});
	return pairNumbers;
	concatNumbers(pairNumbers);
}
function concatNumbers(multiplied, pairNumbers){
	const mixOfNums = multiplied.concat(pairNumbers);
	return mixOfNums;
	isDoubleDigit(mixOfNums);
}
function isDoubleDigit(mixOfNums){
	const modifNumbers = mixOfNums.map(function(n){
		if(n >=10){
			return n-9;
		} else{
			return n;
		}
	}); 
	return modifNumbers;
	sumNumbers(modifNumbers);
}
function sumNumbers(modifNumbers){
	const numbers = modifNumbers;
	const sum = numbers.reduce(function(a,b){
		return a+b;
	});
	return sum;
	validateNum(sum);
}

// NO TOCAR ESTE CÓDIGO O EXPLOTARÁ LA PC EN 10 SEGUNDOS
if (typeof exports !== 'undefined') {
    exports.isValidCard = isValidCard;
}
