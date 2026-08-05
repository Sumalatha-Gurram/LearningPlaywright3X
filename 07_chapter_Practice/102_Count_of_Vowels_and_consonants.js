let str="The Testing Academy";
let vowels=0;
let consonants=0;
for(let ch of str){
    if(ch>='a' && ch<='z'){
        if("aeiou".includes(ch)){
            vowels++;
        }else {
            consonants++;
        }
    }
}
console.log("Vowels:", vowels);
console.log("Consonants:", consonants);
