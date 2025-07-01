// singleton, merging using spread

const app={}// non singleton 
const mysite=new Object()// singleton object 
        // console.log(mysite); //{}

mysite.id="12sd"
mysite.account="login"
        //console.log(mysite); // { id: '12sd', account: 'login' }

// obj inside obje

const user={
    email:"hi@gmail.com",
    fullname:{
        userprefix:{
        firstname:"apoorva",
        lastname:"singh"
        }
        
    }
}
    // console.log(user.fullname);//{ userprefix: { firstname: 'apoorva', lastname: 'singh' } }
    // console.log(user.fullname.userprefix.lastname);//singh

//merging objects

const obj1={1:"a",2:"b"}
const obj2={3:"a",4:"d"}
        // const obj3={obj1,obj2}
        // console.log(obj3);  //{ obj1: { '1': 'a', '2': 'b' }, obj2: { '3': 'a', '4': 'd' } }

        // syntax1
        // The Object.assign() static method copies all enumerable own properties 
        // from one or more source objects to a target object. It returns the modified target object.
        //{} acts as target and rest source though not mandatory but good practice

const obj3=Object.assign(obj1,obj2)
    //console.log(obj3); // { '1': 'a', '2': 'b', '3': 'a', '4': 'd' }

// syntax2--optional parameter{}
const obj33=Object.assign({},obj1,obj2)
    //console.log(obj33); // { '1': 'a', '2': 'b', '3': 'a', '4': 'd' }

// best is spread 90% time used
const obj4={...obj1,...obj2}
    // console.log(obj4);

// when value comes from database
// array ke so many objects

const array=[
    {
        name:"apuu",
        age:21
    },
    {
        class:5,
        color:"black"
    }
]
   //console.log(array[1].color);

   console.log(mysite);
   console.log(Object.keys(mysite));// return type is array u can use loop
   console.log(Object.values(mysite));
   console.log(Object.entries(mysite));
   console.log(mysite.hasOwnProperty('login'));
     
   /*
 { id: '12sd', account: 'login' }
[ 'id', 'account' ]
[ '12sd', 'login' ]
[ [ 'id', '12sd' ], [ 'account', 'login' ] ]
false
   */







