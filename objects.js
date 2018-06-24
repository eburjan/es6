//objects are reference types.

//reference type,
var object1={value:10};
var object2={value:20};
var object3=object1;

//context vs scope
function b(){
	let a=4;
}
//this= window object
const object4={
	a:function(){
		console.log(this);//itt az 'a' lesz a this.
	}
}
//instantiation
//https://www.tutorialspoint.com/es6/es6_classes.htm

class Player{
	constructor(name,type){
		this.name=name;
		this.type=type;
	}
	intro(){
		console.log('hi');
	}
}

class wizard extends Player{
	constructor(name, type){
		super(name,type);
	}
	play(){
		console.log('i am wiz');
	}
	intro(){
		super.intro();
		console.log('i am intro wiz');
	}
}

let wizard1=new wizard('shelly','healer');
let wizard2=new wizard('shawn','dark magic');

