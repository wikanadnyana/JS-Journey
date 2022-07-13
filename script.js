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
if(result === 24){
    heading.textContent = "Hasilnya 24";
}else{
    heading.textContent = "Hasilnya bukan 24";
}

