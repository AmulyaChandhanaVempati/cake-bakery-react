function square(num){
    return num * num
}

var x 

class Abc{
    getData(){
        console.log("this value",this)

        setTimeout(()=>{
            console.log("this value",this)
        },0)
    }
}

var obj1 = new Abc()
var obj2 = new Abc()

obj1.getData()
