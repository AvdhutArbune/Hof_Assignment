// let numbers=[10,20,30]
// let doubled=numbers.map(num=>{
//     num*2
// })
// console.log(doubled);



// const sum = [1, 2, 3].reduce((acc, val) => acc + val);
// console.log(sum);


// function step1(callback) {
//     setTimeout(() => {
//         console.log("Step 1 done");
//         callback();
//     }, 1000);
// }

// step1(() => {
//     step1(() => {
//         step1(() => {
//             console.log("All steps done");
//         });
//     });
// });


// const values = [2, 3, 4];
// const result = values.map(x => x + 1).reduce((a, b) => a * b);
// console.log(result);


function greet(name,callback){
    console.log(`good morning ${name}`);
    callback()
    
}
function callme(){
    setTimeout(()=>{
        console.log('Have a Nice Day');
        
    },5000)
}

greet('Avdhut',callme)

