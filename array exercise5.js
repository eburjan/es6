// Complete the below questions using this array:
const array = [
  {
    username: "john",
    team: "red",
    score: 5,
    items: ["ball", "book", "pen"]
  },
  {
    username: "becky",
    team: "blue",
    score: 10,
    items: ["tape", "backpack", "pen"]
  },
  {
    username: "susy",
    team: "red",
    score: 55,
    items: ["ball", "eraser", "pen"]
  },
  {
    username: "tyson",
    team: "green",
    score: 1,
    items: ["book", "pen"]
  },

];

//Create an array using forEach that has all the usernames with a "!" to each of the usernames
let outarray=[];
array.forEach(o=>{
  outarray.push(o.username+"!");
});

//Create an array using map that has all the usernames with a "? to each of the usernames
let outarray2=array.map(o=>{
  return o.username+='?';
});

//Filter the array to only include users who are on team: red
let filterArray=array.filter(o=>
{
  return o.team==="red";
})

//Find out the total score of all users using reduce
let array_reduce=array.reduce((acc,num)=>{
  return acc+num.score;
},0);

// (1), what is the value of i?
// (2), Make this map function pure:
const arrayNum = [1, 2, 4, 5, 8, 9];
const newArray = arrayNum.map((num, i) => {
	console.log(num, i);
	alert(num);
	return num * 2;
})
//

//BONUS: create a new list with all user information, but add "!" to the end of each items they own.
const cnarray=array.map(o=>{
  let a=o;
  a.username+='!';
  a.team+="!";
  a.score+='!';
  a.items=a.items.map(p=>{
    return p+='!';
  })
  return a;
});