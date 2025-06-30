//array
// JavaScript arrays are resizable and can contain a mix of different data types.
// JavaScript arrays are not associative arrays and so
// JavaScript arrays are zero-indexed
// JavaScript array-copy operations create shallow copies. 
// shallow -share common reference but not deep
//`slice()` creates a new array containing selected elements from the original, while 
// `splice()` modifies the original array by adding, removing, or replacing elements.

const mark=[21,23,24,22]
const fruits=["apple","litchi"]
const myarr=new Array(1,2,3)
    //console.log(myarr[1]);//2

                // array method
myarr.push(7)
    // console.log(myarr); //1 2 3 7
myarr.pop()
    // console.log(myarr); // 1 2 3

myarr.unshift(2)
    // console.log(myarr); // shifted this value at starting, so we dont use much
myarr.shift()
    // console.log(myarr); // 1 2 3

            // console.log(myarr.includes(9)); // false
            // console.log(myarr.indexOf(3));  // 2
            // console.log(myarr);

const newarr= myarr.join()// taken myarr as [1,2,3], joind binds array and convert to string datatypes
    // console.log(myarr); //[1,2,3]
    // console.log(newarr); // string :1,2,3

//------SLICE(doesnot modify)---Vs---SPLICE(modify)------//


const myarr1=new Array(1,2,3,4,5)
    // console.log("A",myarr1);

const  myn1=myarr1.slice(1,3) //[2,3]

    // console.log(myn1);
    // console.log("B",myarr1);

const myn2=myarr1.splice(1,3)

    // console.log("C",myarr1);// orignal- splice
    // console.log(myn2); //[2,3,4]

                    /*
                    A [ 1, 2, 3, 4, 5 ]
                    slice =[ 2, 3 ] 
                    B [ 1, 2, 3, 4, 5 ]
                    C [ 1, 5 ]
                    splice=[ 2, 3, 4 ]

                    */

// interview question 

//splice will change the original array but slice will not

// ------------part2-----















