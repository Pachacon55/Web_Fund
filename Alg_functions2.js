
function add(num1, num2){
    console.log("Summing Numbers!");
    console.log("num1 is: " + num1);
    console.log("num2 is: " + num2);
    var sum = num1 + num2;
    return sum;
}
var result1 = add(3,5);
var result2 = add(4,7);
console.log(result1);
console.log(result2);


function addingPositions(numbers){
    console.log("Starting array:" + numbers);
    for(var i=0; i<numbers.length-1; i++){
        numbers[i+1] = numbers[i] + numbers[i+1];    
    }
    return numbers;
}
var arr = [7,3,8,4,2,0,1];
var changedArr = addingPositions(arr);
console.log(changedArr)

