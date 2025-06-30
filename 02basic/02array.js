const books=["korth","firozon","raghuram"]
const subj=["os","dbms","dsa","cn"]

    // books.push(subj)
        // console.log(books); // array inside array[ 'korth', 'firozon', 'raghuram', [ 'os', 'dbms', 'dsa', 'cn' ] ]
    // console.log(books[2]);raghuram
    // console.log(books[3]); //[ 'os', 'dbms', 'dsa', 'cn' ]
    // console.log(books[3][2]); //dsa

    // it is NOT GOOD

    // we can use CONCAT
    //console.log(books);

//method-1

books.concat(subj)// it will print only books array since concat print string so store it in a string
const merged=books.concat(subj)

    //console.log(merged);// [ 'korth', 'firozon', 'raghuram', 'os', 'dbms', 'dsa', 'cn' ]
    // push work on exis iting array, whereas concat create new array

    // ----%%%%%----method-2   spread method eg water fall on floor

const allbooks=[...books, ...subj]
//console.log(allbooks); // do same as concat but easy and MOSTLY use

const arr1=[1,2,3,[4,5,6],7,[6,7,[4,5]]]
const flatteningarray=arr1.flat(Infinity)
    // console.log(flatteningarray); // 1,2,3,4,5,6,7,6,7,4,5

// during data scrapping u can use either to ak or convert it into
// intresting case fROM interview point

    // console.log(Array.isArray("appu"));// false
    // console.log(Array.from("apoorva"));//[a,p,o,o,r,v,a]
    // console.log(Array.from({name:"apoorva"}));// return empty  intresting****

let score1=34
let score2=45
let score3=65

    // console.log(Array.of(score1,score2,score3));//[34,45,65]








