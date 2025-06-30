//date is object
//  dates calculated in milli seconds fromm 1 jan 1960, new  proposal TREMPORAL will be use in future a global objec they are working

let mydate= new Date(); // date k e object or instance
 console.log(mydate); // 2025-06-29T07:11:48.743Z

    //  conversion to string 
        // console.log(mydate.toString());            //Sun Jun 29 2025 07:13:55 GMT+0000 (Coordinated Universal Time)
        // console.log(mydate.toDateString());       // Sun Jun 29 2025
        //     console.log(mydate.toISOString());        //2025-06-29T07:18:40.764Z
        //     console.log(mydate.toJSON());            //2025-06-29T07:18:40.764Z
        //     console.log(mydate.toLocaleDateString());   //6/29/2025
        //     console.log(mydate.toLocaleString());      //6/29/2025, 7:18:40 AM
        //     console.log(mydate.toLocaleTimeString());   //7:18:40 AM
        //     console.log(mydate.toTimeString());         //07:18:40 GMT+0000 (Coordinated Universal Time)
        //     console.log(mydate.toUTCString());          //Sun, 29 Jun 2025 07:18:40 GMT

                        //*****interview POV****
                            // console.log(typeof mydate);  // object

    //  declaring particular date
    let newdate= new Date(2002,7,3) //0-11
    //  console.log(newdate); //2002-09-03T00:00:00.000Z
    //  console.log(newdate.toDateString());//Tue Sep 03 2002

    // syntax 1
    let newdate1= new Date("2002-08-03") 
    //  console.log(newdate1.toLocaleString());//Tue Sep 03 2002

    //  syntax 2 mm dd yyyy, indians follow this
    let newdate2= new Date("08-03-2002") 
     //console.log(newdate2.toLocaleString());// 8/3/2002, 12:00:00 AM

//---------------TIMESTAMP--------------
// while designing quizes and polls 

let mytimestamp=Date.now()
    // console.log((mytimestamp));//1751182853266
    // console.log(mydate.getTime());

//  compare on milli conversion
// *****interview common ques : conert to SECONDS but no decimal****
    // console.log(Date.now());                   //1751183204608 milliseconds
    // console.log(Date.now()/1000);              //1751183204.608 seconds
    // console.log(Math.floor(Date.now()/1000)); //1751183204

    let newDate=new Date() 
      newDate.toLocaleString('default',{
        weekday:"long"
      }) 

                    

                // Component	   Local	                                UTC
                
            //            Get       	    Set	              Get                    	Set
            //Year	            getFullYear()	   setFullYear()	getUTCFullYear()	    setUTCFullYear()
            //Month	            getMonth()	       setMonth()	     getUTCMonth()	        setUTCMonth()
            //Date (of month)	getDate()	       setDate()	     getUTCDate()	        setUTCDate()
            //Hours	            getHours()	       setHours()	     getUTCHours()	        setUTCHours()
            //Minutes	        getMinutes()	   setMinutes()	     getUTCMinutes()	    setUTCMinutes()
            //Seconds	        getSeconds()	   setSeconds()	     getUTCSeconds()	    setUTCSeconds()
            //Milliseconds	    getMilliseconds()  setMilliseconds() getUTCMilliseconds()	setUTCMilliseconds()
            //Day (of week)	    getDay()	       N/A	             getUTCDay()	        N/A




    
     