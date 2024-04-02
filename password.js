

let submit = document.querySelector(".submit")
let pas = document.querySelector(".password")
let str = "ABCDEFGHIJKLMNOPQRSSTUVWXYZabcdefghijklmnopqrstuvwxyz1234567890@#$%&*"
let str1 = "Aa1@&$Bb2*%"
let num = document.querySelector(".number")


pas.addEventListener("click", function copy() {
    pas.select()
    pas.setSelectionRange(0, 100)
    navigator.clipboard.writeText(pas.value)
})



submit.addEventListener("click", function subBtn() {
    let pasLen = num.value;
    let p = ""
    for (let i = 1; i <= pasLen; i++) {
        let ran = (Math.floor(Math.random() * str.length + 1))
        p += str.charAt(ran)
    }
    //return p;
    console.log(p)
    //pas.innerHTML="jjh";
    pas.value = p
})

//console.log(subBtn())
//function sub(number) {
// let p = ""
// for (let i = 1; i <= number; i++) {
//     let ran = (Math.floor(Math.random() * str.length + 1))
//     p += str.charAt(ran)

// }
// return p;


//}
//console.log(sub())

//let ran = (Math.floor(Math.random() * str.length + 1))
//console.log(ran)


// {


//      Function to generate combination of password
// function generatePass() {
// 	let pass = '';
// 	let str = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ' +
// 		'abcdefghijklmnopqrstuvwxyz0123456789@#$';

// 	for (let i = 1; i <= 8; i++) {
// 		let char = Math.floor(Math.random()* str.length + 1);

// 		pass += str.charAt(char)
// 	}

// 	return pass;
// }

// console.log(generatePass());

// }