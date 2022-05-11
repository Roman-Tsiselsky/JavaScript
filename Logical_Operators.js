//есть 4 логических операторов:||(или), &&(и), !(не), ??(Опиратор нулевого слияния)


//(ИЛИ)||

console.log( true || true );
console.log( false || true );
console.log( true || false );
console.log( false || false);


let day = 10;
let week = true;

if ( day > 14 || day < 3 || week ){
	console.log('good');
};


console.log( null || 1 || 123 );
console.log( undefined || null || 0 );


let x;

( x = 12 ) || true;

console.log(x);


//(И)&&
//возращает true если оба операнда истинны, а иначе false


console.log( true && false );
console.log( false && true );
console.log( false && false );
console.log( true && true );


let hour = 10;
let minute = 20;

if ( hour && minute ){
	console.log('верно');
};


let hour1 = 12;
let minute1 = '';

if ( hour1 && minute1 ){
	console.log('неправильно');
};


//если Если первый операнд истинный, возвращает второй

console.log(1 && 0);
console.log(1 && 5);

//если первый операнд ложный, тогда возращает его, второй операнд игнорируется

console.log( null && 5 );
console.log( 0 && 'no master what');

console.log( 2 && 4 && 6);


//!(НЕ)


console.log( !true );

let value1 = 12;
let value2 = 14;

if(value1 = !14){
	//false
}else {
	console.log('nice');
};

console.log(!!true);


//Оператор нулевого слияния '??'
//оператор ?? возращает первый аргумент,если он не null/undefined, иначе второй аргумент


let user;

console.log(user ?? 'Аноним');
console.log(typeof user);


let user1 = 'Иван';

console.log(user1 ?? 'Аноним');

let name1 = null;
let name2 = null;
let name3 = 'Roman';

console.log(name1 ?? name2 ?? name3 ?? 'hello');


// '||' возвращает 1 истенное значение
// '??' возвращает 1 определённое значение
// оператор '||' не различает false, o, "",null и undefined, для него они одинаковые

let height = 0;

console.log(height || 100);
console.log(height ?? 100);

//приоретет одинаковый у '||' и '??', но у '*' выше

let height1 = null;
let width1 = null;

let area = (height1 ?? 100) * (width1 ?? 50);

console.log(area);
