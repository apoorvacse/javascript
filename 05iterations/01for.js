for(let i=0;i<=2;i++){
    console.log(`outer loop value: ${i}`);
    for(let j=0;j<=2;j++){
        console.log(`inner loop value${j} and inner loop ${i}`);
        
    }
}

for(let idx =1;idx<=20;idx++){
    if(idx==5){
        console.log(`detected 5`);
        break;
        
    }
    console.log(`value of idx is${idx}`);
    
}