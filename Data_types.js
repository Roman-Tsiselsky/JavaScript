//js является динамическим языком (переменные не привязаны к типам данных) 

let message = "hello";
console.log(message);
message = 12345;
console.log(message);


//Числовой тип Number
let n = 123;
n =12.345;
console.log(n);


//Infinity это особое значение числа и является бесконечностью
console.log( 1 / 0 );

console.log( Infinity );


//NaN(Not a Number) означает вычислительную ошибку
/**
  * Скрипт никогда не остановится с фатальной ошибкой (не «умрёт»).
  * В худшем случае мы получим NaN как результат выполнения.

*/
console.log( "not a numder" * 2);
console.log( "not a numder" / 2 + 5);


/**
   *Biglnt дает возможность работать с гиганскими числами
   *тип number не может содержать числа
   *больше чем '(2^53-1)''(165196813156484561518641564984154)'
   *или меньше числа '-(2^53-1)'
*/


const bigInt = 12345678912345678901223431234564778n;
console.log(typeof bigInt);


//Строковой тип string 
let str1 = "привет";
let str2 = 'hello';
let str3 = `salut`;
console.log(str1, str2, str3);

// обратные кавычки `` расширяют функционал, позваляют встраивать выражение в строку с помощью ${}

let name = 'Иван';
//Вставим переменную name
console.log(`hello, ${name}`);
//так же выражение 1 + 2
console.log(`result: ${name}`);


//Булевый (логический) тип
let nameFieldChecked = true;
let ageFieldChecked = false;
console.log(nameFieldChecked, ageFieldChecked);

//так же может быть результатом сравнений 

let isGreater = 4 > 1;
console.log(isGreater);

//Значение null никак не относится к выше перечислиным типам
//означает нулевой тип, "ничего" "пусто" "значение неизвестно"

let age = null;
console.log(age);


//значение undefined
//означает "занчение не было присвоено"

let name1;

console.log(name1);

//можно переменной присвоить значене undefined

let name2 = undefined;
console.log(age);

//тип object(обьект) этот тип не приметивен он может хранить в себе
//коллекции данных и более сложные структуры

let obj = {};
console.log(typeof obj);  

