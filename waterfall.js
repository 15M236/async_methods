import async from 'async'
let radius = 25

// waterfall([
//     function(customize){
//         console.log("1")
//         let pi = Math.PI
//         customize(null,pi)
//     },
//     function(pi,customize){
//         console.log("2")
//         let area = radius * radius * pi
//         customize(area)
//     },
//     function(area){
//         console.log("3")
//         console.log(area)
//     }
// ],function(err){
//     console.log("function err called")
//    if(err){
//     console.log("err "+err)
//   }else{
//     console.log(`area of radius ${radius} = ${area}`)
//   }
// })




// waterfall([
//   function firstStep(done) {
//     console.log('start!');

//     done(null, 'Value from step 1'); // <- set value to passed to step 2
//   },
//   function secondStep(step1Result, done) {
//     console.log(step1Result);

//     done(null, 'Value from step 2'); // <- set value to passed to step 3
//   },
//   function thirdStep (step2Result, done) {
//     console.log(step2Result);

//     done(null); // <- no value set for the next step.
//   }
// ],
// function (err) {
//     console.log("function err called")
//   if (err) {
//     throw new Error(err);
//   } else {
//     console.log('No error happened in any steps, operation done!');
//   }
// });

//WATERFALL METHOD

async.waterfall([
     function(callback){
        setTimeout(()=>{
            console.log("The value of Radius :",radius)
            let pi = Math.PI
            callback(null,pi)
        },2000)
    },
     function(pi,callback){
        setTimeout(() => {
            let area = pi * radius * radius ;
            callback(null,area)
        },1000)
    },
     function(area,callback){
        console.log(`The area of circle with radius ${radius} will be mention below`)
        setTimeout(() => {
            console.log(area)
            callback(null,"result")
        },500);
    }
],
    async function(err){
        if(err){
            console.log(err)
        }
        else {
            console.log("The calculation accomplished")
        }
    })


//series method