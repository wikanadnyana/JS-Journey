// BELAJAR JAVASCRIPT

/*
    Materi 1 : 
    a. querySelector = fungsinya untuk select id pertama pada kode program yang
    memiliki nama sesuai yang di select.

*/

let a = [1,2,3,4];
let b = 12
let result = a[2] * b;
const heading = document.querySelector('#tes');
const heading2 = document.querySelector('#tesnew');
if(result === 24){
    heading.textContent = "Hasilnya 24";
}else{
    heading.textContent = "Hasilnya bukan 24";
}


function modulo(num1, num2 ) {
    let hasil = num1 % num2;
    return hasil;
}

hasilkedua = modulo (result, 2);

if (hasilkedua >= 0){
    heading2.textContent = "wkwkwkwkwkwk";
    //alert('wkwkwkwkkwkkwkwkw');
}

/*
    Materi 2 : 
    a. Event = these code structure that listen for activity in the browser and run code
    in response

    b. addEventListener()  = the function that we passed to addeventlistener called
    anonymous function, because they don't have a name. There's an alternative way of
    writing anonymous func, which we call an ARROW FUNCTION. 

    this is how u use that = "() => " instead of "function ()"

*/

document.querySelector('#inibutton').addEventListener('click', function(){
    alert('HAIII XIXIXI');
});

//example of how to use arrow function :

let sebuahevent = document.querySelector('#buttonkedua');
sebuahevent.addEventListener('click', () => {
    alert('HALLOOOO');
});
