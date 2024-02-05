//Using this keyword in a method.

const person ={
    fist : 'Cherilyn',
    last : 'Sarkisian',
    nickName : 'Cher',
    fullname(){
        const{
            fist,
            last,
            nickName
        } = this;
        return `${fist} ${last} AKA ${nickName}`;
    }
};

const PrintBio = (obj) => {
    const fullname = obj.fullname();
    console.log(`${fullname} is the person.`);
};
PrintBio(person);