var op=[];

function fizbuzz(){
    
     var i=0;
     while(i<=100){
        if(i%3===0 && i%5===0){
            op.push("fizzbizz");
        }
        else if(i%3===0){
            op.push("fizz");
        }
        else if(i%5===0){
            op.push("buzz");
        }
        else{
            op.push(i);
        }
        i++;
        console.log(op);
     }
}

fizbuzz();