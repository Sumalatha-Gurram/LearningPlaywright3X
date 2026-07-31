const arr=[1,2,3,4,5];
evenArr=[];
oddArr=[];
for(let i=0; i<arr.length; i++){
    if(arr[i]%2==0){
        evenArr.push(arr[i]);
    } else {
        oddArr.push(arr[i]);
    }
}
console.log('Even Numbers:', evenArr.join(', '));
console.log('Odd Numbers:', oddArr.join(', '));