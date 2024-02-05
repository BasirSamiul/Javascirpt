function birthcalc(birthyear){
    return 2023 - birthyear;
}

const myage = birthcalc(1998);
console.log(myage);

const mywife_age = function(birthyear){
    return 2023 - birthyear;
}
const age = mywife_age(2006);
console.log(age);