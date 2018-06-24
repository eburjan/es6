
//let and const
//declare variable

//var scope erzekeny csak function belsejeben
//let vezerlesi ciklusban is scope erzekeny
// use  const , ha nem kene utana valtozzon az erteke.

const player='bobby';
let experience = 100;
let wizardlevel=false;

if(experience>90){
	let wizardlevel=true;
	console.log('inside:'+wizardlevel);
}

console.log('outside'+wizardlevel);


const constobj={
	player: 'bobby',
	experience: 100,
	wizardlevel: false
}

// destructuring:
const player=constobj.player;
const experience=constobj.experience;
let wizardlevel=constobj.wizardlevel;
//helyett:
const { player, experience } = obj;
let { wizardlevel } = obj;

//ami meg vagany:
const name='snow';
const obj={
	[name]: 'hello',
	[1+2]: 'hihi'
}

const a='simon';
const b=true;
const c={};

const obj={
	a:a,
	b:b,
	c:c
}
//EZ A KETTO UGYANAZ, value match the property
const obj={
	a,
	b,
	c
}

//Template strings:
const greeting="hello"+name+" you seem to be doing "+greeting+"!";

const name="sally";
const age=34;
const pet="horse";

const greeting2=`Hello ${name} you are ${age} with lovely ${pet}`;
const greeting3=`Hello ${name} you are ${age-10} with lovely ${pet}`;

//Default arguments:
function greet(name='',age=30,pet='cat'){
	return `Hello ${name} you are ${age-10} with lovely ${pet}`;
}

//symbol
let sym1=Symbol();
let sym2=Symbol('foo');
let sym3=Symbol('foo');

let  bb=sym2===sym3;//false

//ARROW functions:
function add(a,b){
	return a+b;
}

const add=(a,b)=>a+b;

