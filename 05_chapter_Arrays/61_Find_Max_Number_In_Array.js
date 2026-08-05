let arr=[5, 10, 3, 8, 2];
let max=arr[0];
for(let i=1; i<arr.length; i++){
    if(arr[i]>max){
        max=arr[i];


    }

}
console.log("The maximum number in the array is: " + max);
