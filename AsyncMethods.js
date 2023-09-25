import waterfall from 'async/waterfall'

let radius = 25

waterfall = ([
    function(callback){
        console.log("1")
        let pi = Math.PI
        callback(null,pi)
    },
    function(pi,callback){
        console.log("2")
        let area = radius * radius * pi
        callback(null,area)
    },
    function(area,callback){
        console.log("3")
        return area
    }
])