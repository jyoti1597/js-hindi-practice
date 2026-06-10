// Immediately Invoked Function Expressions(IIFE)


(function chai(){
    //name iife
    console.log(`DB Connected`)
})();

//(function definition)(execution call) to remove gobal scope variable or declaration remove we use this.

((name) => {
    non iife
    console.log(`DB Connected ${name}`);
})('jyoti')
// if want to run two function then use ; for stop function for work
