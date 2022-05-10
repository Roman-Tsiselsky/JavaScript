//Инструкция "if"
//if(условие){блок кода}если условие true выполняется блок кода
//else('иначе') выполняется если услове ложно
//if else используется если нужно проверить несколько условий

let year = 2015;

if (year == 2015){
	console.log('good');
} else {
	console.log('не правильно');
};

let age = 15;

if (age == 14){
	console.log('true');
} else {
	console.log('false');
};


let day = 14;

if(day > 14){
	console.log('Многовато');
} else if (day < 14){
	console.log('Маловато');
} else {
	console.log('true');
};

let number = 0

if(number > 0){
	console.log(1);
} else if (number < 0){
	console.log(-1);
} else {
	console.log(0);
};

//Условный оператор '?'
//Также умеет 3 аргумента "условие", "значение1", "значение2"

let value = 12;

let message = (value > 11) ? console.log('правильно') : console.log('неправильно');


