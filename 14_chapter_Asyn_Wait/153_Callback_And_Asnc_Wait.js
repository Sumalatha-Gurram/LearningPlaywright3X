function greet(callback) {
    setTimeout(() => {
        console.log("Hello");
        callback();
    }, 2000);
}

function message() {
    console.log("Welcome");
}

greet(message);