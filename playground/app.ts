// Arrow function

// var user = {
//     firstName : "Foo",
//     lastName : "Bar",
//     getFullName : function(){
//         // var that = this;
//         // function nestedFunc(){
//         //     console.log(this);      // ?
//         //     return "Hello " + that.firstName + " " + this.lastName
//         // }
//         // return nestedFunc();

//         var nestedFunc = () => "Hello " + this.firstName + " " +this.lastName;
//         return nestedFunc();
//     }
// }

// console.log(user.getFullName());            // ?

// Block Scopes

// const username = "Foo";

// username = "Bar";

// const user = {
//     name : "Foo"
// }

// user = {
//     name : "Bar"
// }
// // user.name = "Bar";

// console.log(user);

// Destructuring : Array & Objects

// let arr = ["Foo", "bar", "bas"];

// let [arr1, arr3] = arr;

// console.log(arr3);          // ?

// let drawObj = {
//     drawCircle : r => console.log(Math.PI * r * r),
//     drawTest : text => console.log("DRawing " + text),
//     test : true
// }

// let {drawTest, drawCircle, test} = drawObj;

// test = false;
// console.log(drawObj.test);              // ?
// drawCircle(3);

// let arr = [3, 4, 5];
// let newArr = [1, 2, arr, 6, 7];
// console.log(newArr); // [3,4,5]

// let newArr2 = [1,2,...arr,6,7];
// console.log(newArr2); // 3

// let obj = {
//     fname : "Foo"
// }

// let newObj = {
//     ...obj,
//     lname : "Bar",
//     fname : "Baz"
// }

// console.log(newObj);        // ?


function demo(name, ...args){
    console.log(args)
}
// demo("foo")
// demo("foo", "test@test.com")
demo("foo", "test@test.com", true)
