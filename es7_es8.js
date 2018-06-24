
//include
let valami="szoveg";
let igaze=valami.includes('ove');

const dragons = ['Tim', 'Johnathan', 'Sandy', 'Sarah'];
dragons.includes('John') // false

const dragons = ['Tim', 'Johnathan', 'Sandy', 'Sarah'];
dragons.filter(name => name.includes('John')) // ['Johnathan']

//math.pow = **
const square=(x)=>x**2;

const mathpow=(x,y)=>x**y;

//.padstart(), .padend(). kiparnazza a stringet, amin hivtak, X space-cel.
//string.padstart(10);
//
const fun=(a,b,c,d,)=>{
	//ez is mukodik, mert neha lustak az utolso , -t leszedni. ennyi.
}

Object.values//csak value
Object.entries//mind2
Object.keys//kulcs

let obj={
	username0: 'santa',
	username1:'rudolf',
	username2: 'mr.grinch'
}

Object.keys(obj).forEach((key,index)=>{
	console.log(key,obj[key]);
})

Object.entries(obj).map(value=>{
	return value[1]+value[0].replace('username','');
})

//async await; kesobb

for(let i=0;i<10;i++){
	debugger;
	console.log(i);
}
