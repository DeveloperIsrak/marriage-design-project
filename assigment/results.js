//2.result project
let name = prompt('put your name here..');
let mark = prompt('put your mark here..');


if(mark >= 0 && mark <= 32 ){
    console.log(`apni fail korsen ...ricksa chalan`);



}else if( mark >= 33 && mark <= 45) {
    console.log(`Hi ${name}  apni D paisen. apnar CGPA 2.75`);
}else if( mark >= 45 && mark <= 55) {
    console.log(`Hi ${name} apni c paisen. apnar CGPA 3.55`);
}else if( mark >= 55 && mark <= 65) {
    console.log(`Hi ${name} apni A- paisen. apnar CGPA 3.97`);
}else if( mark >= 65 && mark <= 75) {
    console.log(`Hi ${name} apni A paisen. apnar CGPA 4.15`);
}else if( mark >= 75 && mark <= 100) {
    console.log(`Hi ${name} apni A+ paisen. apnar CGPA 5.00`);
}
    