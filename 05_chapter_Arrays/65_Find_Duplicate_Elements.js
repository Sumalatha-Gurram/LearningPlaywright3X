const arr=[2, 7, 5, 7, 8, 6, 8, 4];
let duplicates = [];
for(let i=0; i<arr.length; i++){
    for(let j=i+1; j<arr.length; j++){
        if(arr[i] === arr[j] && !duplicates.includes(arr[i])){
            duplicates.push(arr[i]);
        }
    }
}
console.log("Duplicate elements in the array are: " + duplicates);