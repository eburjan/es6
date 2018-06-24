//Closures:
//ez egy valtozas itt

//Currying:
const multiply=(a,b)=>a*b;
const curriedmultiply=(a)=>(b)=>a*b;
//=const curriedmultiply=(a)=>{(b)=>a*b};

//Compose
const compose=(f, g) => (a)=>f(g(a));

const sum=(num)=>num+1;

compose(sum,sum)(5);

//!!!!! avoiding side effects, and functional purity.
// fuction ne valtoztasson a kulso valtozokon!
// functional purity = no side effects es mindig van return value [nem undefined]

