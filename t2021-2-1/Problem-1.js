// Problem-1: Create a small calculator which performs operations such as Addition, Subtraction, Multiplication and Division using class.
//     Calculator inputs :> ‘a’, ‘b’ and ‘type of operation’
//     Datatype :> ‘a’ = double, ‘b’ = double, ‘type of operation’ = string

class Calculation {

    constructor(a, b) {
        this.a = a
        this.b = b
    }
    add() {
        return this.a + this.b
    }

    subtract() {
        return this.a - this.b
    }

    mutliply() {
        return this.a * this.b
    }

    division() {
        if (this.b == 0) return "0 division error";
        return this.a / this.b
    }

    operator(opt) {
        if (opt == "+") return this.add()
        else if (opt == "-") return this.subtract()
        else if (opt == "*") return this.mutliply()
        else if (opt == "/") return this.division()
    }

}
//--<<<<<<<<<<<<<<<<<<<<<<<<<<<<<  ENTER THE INPUT HERE IN THE FORM OF STRING   >>>>>>>>>>>>>>>>

//pleaase enter the input seperated by space like this    -----> "5 + 10" <-------

let input = "5 / 00"


let arr = input.trim().split(" ")
let a = parseInt(arr[0])
let b = parseInt(arr[2])

let opt = arr[1]

//---------------------------------------FUNCTIONING

const cal = new Calculation(a, b)
let result = cal.operator(opt)

console.log(result)