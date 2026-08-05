const arr=[2, 3, 5, 2, 3, 5, 2, 4];
let frequency={};
for(let i=0; i<arr.length; i++){
    if(frequency[arr[i]]){
        frequency[arr[i]]++;
    } else {
        frequency[arr[i]]=1;
    }
}
for(let key in frequency){
    console.log(key + " occurs " + frequency[key] + " times");
}           
console.log(frequency);
