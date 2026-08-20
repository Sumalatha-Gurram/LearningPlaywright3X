let str="madam";
let rev="";
for (let i = str.length - 1; i >= 0; i--) {
    rev += str[i];
}
if (str === rev) {
    console.log("Given String is a Palindrome");
} else {
    console.log("Given String is not a Palindrome");
}