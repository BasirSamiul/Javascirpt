//Computed Properties.
const role = 'host';

const person = 'Jools Holland';

const role2 = 'Director';

const person2 = 'James Cameron';

const team = {
    [role] : person,
    [role2] : person, 
    [1 + 6 +9] : 'Sixteen'
}

// function addProp(obj, k, v){
//     const copy = {
//         ...obj
//     };
//     copy [k] = v;
//     return copy;
// }
// const addProp(obj, k, v){
//     return {
//         ...obj,
//         [k] : v
//     }

// }
// const addProp = (obj, k, v) => {
//     return{
//         ...obj,
//         [k] : v

//     }
   
// }
const addProp = (obj, k, v) => {return{...obj, [k] : v}};
const res = addProp(team, 'Happy', ',:');

console.log(res);
