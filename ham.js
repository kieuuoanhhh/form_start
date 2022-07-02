// a-z, A-Z, 0-9, _, $
//function

//var age = 18;
function showDialog(){
    //code
    alert('Start Function')
}
// call
showDialog();

function writeLog(message) {
    console.log(message)
}

writeLog('Test mess')

function writeLog(){
    console.log(arguments)
}
writeLog('lof1','ldf2')

//
function writeLog(){
    
}
writeLog('lof1','ldf2')

//return


function cong(a,b) {
    return '2' +'8'; // tra ve chuoi string
}
var result = cong(2,8)
console.log(result)
// extend function
function showMessage(){
    console.log('mess1')
}
function showMessage(){
    console.log('mess2')
}
function showMessage(){
    console.log('me3')
}
showMessage()
// co the khai bao bien trong ham
function showMessagees() {
    var fullName ='kieu oanh'
    console.log(fullName);

}
showMessagees();

function showham(){
  
    function showham2(){
        console.log('ham2')
    }
    showham2()
}
// cac loai function
// declaration function
//showMe()
function showMe() {
    console.log('Declaration function')
}


// declaration: dc goi truoc khi duoc dinh nghia
showMe()

// Polyfill
// Object trong Javascript

//var emailKey ='email'
var myInfo ={
    name:'kieu oanh',
    age:"34",
    address:'ninh binh'
}
var myKey ='address'

delete myInfo.age
console.log(myInfo)
console.log(myInfo[myKey]);

//Object cóntructor

    function User (firstName, lastName, avatar) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.avatar = avatar;
    }
 var author = newUser('Kieu', 'Oanh', 'av')
 var user = new User('vu','ngy','jk')

 console.log(author)
 console.log(user)