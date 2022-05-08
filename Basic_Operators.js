//операнд- то, к чему применяется оператор. 
//оператор - это матиматические действия '*' 


//Унарный - оператор который применяется к одному операнду


let x = 1;

x = -x;

console.log(x);


//бинарный - оператор который применяется к двум операндам

let y1 = 1, x1 = 3;

console.log( y1 - x1 );


//взятие остатка "%"
//?

console.log( 5 % 2 );
console.log( 8 % 3 );


//возведение в степень "**"


console.log( 2 ** 2 );
console.log( 5 ** 2 );
console.log( 12 ** 8 );


//сложение строк '+'


let a = 'здесь ' + 'был ' + 'Рома';
console.log(a);


console.log( 'Number ' + 12 );
console.log( 4 - 2 + '24');
console.log( '2' + '2' );

console.log( 6 - '2' );


//приведение к числу, унарный '+'


let v = 1;
console.log( +v );

let v1 = -2;
console.log( +v1 );

console.log( +true );
console.log( +'' );

let apples = "2";
let oranges = '3';

console.log( +apples + +oranges );


// Оператор "=" может записать значение и возрощать его 


let a1 = 1;
let b1 = 2;

let c1 = 3 - ( a1 = b1 + 1 );

console.log(a1);
console.log(c1);

//Присваивание по цепочке


let  a2, b2, c2;

a2 = b2 = c2 = 3 * 5;

console.log(a2, b2, c2); 


//Сокращённая арифметика с присваиванием '+=', '-=', '/=', '*='


let f = 3;
f += 2;
console.log(f);
f *= 2;
console.log(f);
f /= 5;
console.log(f);
f -= 1;
console.log(f);


//Инкремент "++", Декремент "--"


let counter1 = 2;
console.log(counter1--);

let counter2 = 1;
console.log(counter2++);

let counter3 = 5;
console.log(++counter3);

let counter4 = 3;
console.log(--counter4);


//Оператор "," позволяет вычислить несколько выражений, разделяя их запятой
//выражение выполняется, НО возрощает результак последнего


let k = ( 1 + 2, 3 + 4);

console.log( k );
