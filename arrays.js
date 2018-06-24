//array handling
const array=[1,2,30,13];

const double=[];
const newArray=array.forEach((num)=>{
	double.push(num*2);
})

console.log(double);

//map, filter, reduce
//map
const mapArray=array.map((num)=>{
	return num*2;
})
const mapArrayMegint=array.map(num=>num*2);
//simple loop, map az a legjobb, map visszater, foreach az nem ter vissza.

console.log(mapArray);

//filter, bemeneti parametere bool-t visszaado fuggveny
const filteredArray=array.filter(num=>{
	return num>5;
})

const filteredArray2=array.filter(num=>num>5);

//reduce
//jo filter es mappingre is jo. powerful method
//accumulator: ideiglenes tarolo
const reduceArray=array.reduce((accumulator, num)=>{
	return accumulator+num;
}, 0); //0=kezdeti erteke az accumulatornak.

console.log(reduceArray);
