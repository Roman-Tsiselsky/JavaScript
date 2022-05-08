//Операторы сравнения
//'>', '<' больше меньше
//'>=', '<=' больше меньше или равно
//'==' равно
//'!=' не равно


console.log( 2 > 1 );
console.log( 4 < 2 );
console.log( 5 >= 5 );
console.log( 10 == 10 );
console.log( 28 != 12 );

// сравнение строк 
//если первый символ первой строки больше, чем первый символ второй строки, то первая строка больше

console.log( 'W' > 'A');
console.log( 'Коты' > 'Кода' );
console.log( 'miner' > 'rock');


//Сравнение разных типов 

console.log( '2' > 1 ); //строка '2' становится числом 2
console.log( '12' < '13');
console.log( 12 == true );


//Строгое сравнение '===', '!==' 
//Сравнивает по типу, при сравнении разних типов возращает false


console.log( 2 === '2' );
console.log( 0 !== false );


//специальное правило языка

console.log( null == undefined );

//undefined нельзя сравнить 

console.log( undefined > 48 );
console.log( undefined < 12 );
console.log( undefined == 0 );
