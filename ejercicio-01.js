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
	return algoritmoLuhn(creditCardNumber)
		
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
function algoritmoLuhn(creditCardNumber){
	const odd=oddNumbers(creditCardNumber);
	const even=pairNumbers(creditCardNumber);
	const multOdd=multiplyOdd(odd);
	const all=concatNumbers(multOdd, even);
	const simplifyed=isDoubleDigit(all);
	const sum=sumNumbers(simplifyed);
	if(sum%10===0){
		return true;
	}else{
		return false;
	}
}
//Funciones auxiliares
function oddNumbers(creditCardNumber){
	const numbers = creditCardNumber;
	const numToString = numbers.toString();
	const arrayNumbers = numToString.split('');
	const oddNums = arrayNumbers.filter(function(item,i){
	return (i+1)%2!==0;});
	return oddNums;
}
function multiplyOdd(oddNums){
	const multiplied = oddNums.map(function(n){
		 return n*2
	});
	return multiplied;
	}
function pairNumbers(creditCardNumber){
	const numbers = creditCardNumber;
	const numToString = numbers.toString();
	const arrayNumbers = numToString.split('');
	const pairNumbers = arrayNumbers.filter(function(item,index){
	return (index+1)%2==0;});
	return pairNumbers;
	
}
function concatNumbers(multiplied, pairNumbers){
	const mixOfNums = multiplied.concat(pairNumbers);
	return mixOfNums;
	
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
	
}
function sumNumbers(modifNumbers){
	const numbers = modifNumbers;
	const sum = numbers.reduce(function(a,b){
		return parseInt(a)+parseInt(b);
	});
	return sum;
	
}
// NO TOCAR ESTE CÓDIGO O EXPLOTARÁ LA PC EN 10 SEGUNDOS
if (typeof exports !== 'undefined') {
    exports.isValidCard = isValidCard;
}
