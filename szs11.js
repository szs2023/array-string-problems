// sheet1
// proplem 1
// function reverseString(str) {
//     return str.split('').reverse().join('');
//   }
  
//   console.log(reverseString("Hello World")); 

// proplem 2
// function test(name1,name2){
//     return name1.toLowerCase() == name2.toLowerCase();
// }
// console.log(test("Eraa", "eraa"));
// console.log(test("Mohamed", "Moamen"));

// proplem 3
// function check(letter){
// return letter== letter.toUpperCase();
// }
// console.log(check("HELLO"));
// console.log(check("HeLLO"));

// proplem 4
// function test(str,start,end){
//     return str.slice(start,end)
// }
// console.log(test("Moamen",1,4));

// proplem 5
// function family(firstname,midlename,lastname){
//    result=firstname.concat(midlename,lastname)
//    return result
// }
// console.log(family("saed","zakarya","el sokarry"));

// proplem 6




// proplem 7
// function remove(name1){
//     return name1.trim()
// }
// console.log(remove(         "mahmoud,zakzouk     "));
// proplem 8
// function checkurl(url){
//     if(url.startsWith("ww.") && url.endsWith(".eraa")){
//         return true
//     }
//     else{
//         return false
//     }
   
    
// }
// console.log(checkurl("ww.moamen.eraa"));
// console.log(checkurl("w3w.sherif.err"));
// proplem 9
// function removeo(letter1 ,letter2){
// return letter1.replace(/o/gi,"")
// }
// console.log(removeo("Eraoa"));
// console.log(removeo("oMOamen"));
// proplem 10
// =======================================================================================================================================================================





// / Sheet of Array

// problem 1
// function left(num){
// console.log(String(num)[0]);

// }
// left(432)

// problem 2
// let arr=[5,7,-2,0,4,-8,-3,6]
// for (let i=0 ; i<arr.length ;i++){
//     arr[i]>0 ?console.log("positive :",arr[i]):console.log("negative",arr[i])
//     arr[i]%2==0 ?console.log("even :", arr[i]):console.log("odd",arr[i])
    
// }


// // problem 3...
// function array(arr) {
// for(let i=0 ; i<arr.length ;i++){
//     if (arr.includes(String)){
//         console.log("this array has string")
//         }
// }
// }
// array([1 , Nan ,'a' ,'aba'])

// // problem 4
// function slice(arr){
// console.log(arr.slice(1,3))
// }
// slice(['sayed ','ahmed', 'adham', 'mahmoud' ,'hossam','mohamed'])

// problem5
// function arrays (arr1,arr2,arr3){
// const max1=Math.max(...arr1)
// const max2=Math.max(...arr2)
// const max3=Math.max(...arr3)

// console.log(Math.max(...arr1) ,Math.max(...arr2) ,Math.max(...arr3))

// }
// arrays ([1,2,3,4], [45 ,73,12], [13 ,13 ,10])

// // problem 6
// let string=prompt("Enter the string")
//     if (string.length <6){
//         console.log(string)
//     }
//     else{
//          console.log(string[0], (string.length)-2 , string[(string.length)-1])
//         }

// problem7
// function fourstring(str){

//     if(str[0] == str[3] && str[1]==str[2]){
//         console.log("True This concept have two kinds of characters")
//     }
//     else if(str[0]==str[1] && str[2]==str[3]){
//         console.log("True This concept have two inds of characters")
//     }
//     else if(str[0]==str[2]&& str[1]==str[3]){
//         console.log("True This concept have two inds of characters")
//     }
//     else{
//         console.log("False This concept doesn't heave two kinds of characters")
//     }

// }
// fourstring("STTO")

// problem9
// let a =['h','e','l','l','o']
// let char =prompt("Enter the letter")
// console.log(a.indexOf(char))
// console.log(a.lastIndexOf(char))
      
// problem10
// function check (arr , num){
//     for (let i=0 ;i<=arr.length ;i++){
//         if (arr[i]+arr[i+1]==num ||arr[i]+arr[i+1]+arr[i+2]==num||arr[i]+arr[i+1]+arr[i+2]+arr[3]==num){
//             console.log("True")
//         }
//         else{
            
//         }
//     }
// }
// check ([1,2,3,4,5],7)