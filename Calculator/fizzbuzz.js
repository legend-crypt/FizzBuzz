let answer = parseInt(prompt("Please enter the number you would like to Fizzbuss up to"))
for(i = 1 ; i <= answer; i++) {
    if(i % 3 && i % 5 ==0){
        console.log("Fizzbuzz");
    }
    else if(i % 3 === 0) {
        console.log("Fizz");
    }
    else if(i % 5 == 0){
        consloe.log("Buzz");
    }
    else{
    console.log(i);
    }
}