import async from 'async'

async.series([
    function(callback){
       setTimeout(()=>{
           console.log("first callback")
           callback(null,"one")
       },2000)
   },
    function(callback){
       setTimeout(() => {
           console.log("second callback")
           callback(null,"two")
       },1000)
   },
    function(callback){
       setTimeout(() => {
           console.log("third callback")
           callback(null,"three")
       },500);
   },
   function(callback){
    setTimeout(() => {
        console.log("fourth callback")
        callback(null,"four")
    },500);
}
],
    async function(err,result){
        if(result){
            console.log(result)
        }
        else {
            console.log(err)
        }
    })