let total = Number(prompt("Enter the total number of 1's and 0's"));
for(let d = 0; d < total; d++){
    if(d % 2 == 0){
        console.log('0');
    }else{
        console.log('1');
    }
}