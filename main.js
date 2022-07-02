//alert("Hi JavaScript")
// khai bao bien
//var fullName =" Trinh Thi Kieu Oanh"
//var age =20

// Goi ham thong bao
//alert(fullName)
//alert(age)

//console.log('Day la 1 dong log')
//confirm('Xac nhan ban du tuoi!')
//prompt('Xac nhan ban du tuoi!')

/*chay 1 doan code sau 1 khoang thoi gian chi chay 1 lan */
/*setTimeout(function(){
    alert('Thong bao')
},100)
chay 1 doan code sau 1 khoang thoi gian
setInterval(function(){
    alert('xac nhan')
})
*/
 var a = 5;
 var b = 2
 var c = a % b
 console.log(c)
 /*
 var a = 6
 var output = a--
 console.log('output:',output)

 viec 1: a copy =6
 viec 2: tru 1 cua a, a= a-1 => a=5
 viec 3: tra ve a copy(l kq output = 6; a; 7)
 */
/* toan tu so sanh */
var a= 1;
var b= 2;
if( a>b){
    console.log('Dieu kien dung');
}else {
    console.log('dk sai')
}
/*
0
f
''(chuoi empty),undefined,NaN,null=>false
Boolearn*/
var fullName='nguyen'
if(fullName){
    console.log("d")
}
else{
    console.log('s')
}
/* || :or*/
var a = 1;
var b=2;
var c= 3;

if(!(a<0)){
    console.log('d');
}
/* du lieu nguyen thuy
-Number,string, boolean, undefined,null, Symbol
-complex DataTransfer-function-Object*
var fullName='kieu \ oanh'
var is Success = true;
var age;
console.log(age)
var is Null - null;// nothing
var id = Symbol('ID); // UNIQUE

*/var myFunction = function(){
    alert(' viet den day chuong trinh chua chay')
}
myFunction()
 
//object types
 var myObject = {
    name :"kieu oanh",
    age: 18,
    adress:'NinhbInh',
    myFunction:function(){

    }
 }
console.log(typeof myObject)
 var myArray = [
    'Javscript',
    'php',
    'ruby'
 ];
 console.log(myArray)
/* toan tu so sanh
===
!==
*/
var a = 1;
var b='1';

console.log( a === b)
 

var a =1
var b = 2

var result ='A'&& 'B' && 'C' && 'D';
console.log(result);

var fullName = ' kieu oanh la \'sieu nhan\'';
//search : 
console.log(fullName)
console.log(fullName.length);

// lam viec voi chuoi
var myString =' Hoc JS tai fB '
// tra ve vi tri JS dau tien 
//console.log(myString.lastindexOf('JS'))

// search: ( tim theo bieu thuc chinh quy)
// indexOf : + truyen dc tham so thu hai, + ko bth chinh quy
console.log(myString.replace(/JS/g,'JS,Javascriot'))
console.log(myString.toUpperCase())
console.log(myString.trim().length)

// 8. Split
var language ='JavaScript, PHP, Ruby';
console.log(language.split(''))
// Cach taoj vaf lam viec with Number
//var otherNumber = new Number(9);
//console.log(typeof otherNumber)
var PI = 3.52334342;
console.log(PI.toFixed(2))
// tao mang
// truy xuat mang
var languages = [
    'Jvascript',
    'PHP',
    "ruby"
]
//console.log(language)
console.log(Array.isArray(languages))
//  truy xuat mang
console.log(language,length)
// pop: xoa element cuoi mang, tra ve phan tu da xoa
console.log(languages.pop())
//push: them 1 hoac nhieu ptu o cuoi mang
console.log(languages.push('Dart'))
// shift: xoa ptu dau mang, tra ve ptu da xoa
console.log(languages.shift())
//unshift: them 1 hoac nhieu ptu o cuoi mang
//console.log(langiages.unshift())
//languages.splice(1, 0,'dark')
//console.log(languages)

var languages2 = [
    'moon',
    'sun'
]
console.log(languages.concat(languages2))
console.log(languages.slice(1)) // cut
