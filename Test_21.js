//Annoyomatic Demo
const annoyer = {

    phrases: ['literally', 'cray cray', 'I can"t even', 'totes', 'yolo', 'can"t stop, won"t stop'],

    pickPhrases(){
        const {
            phrases
        } = this;
        
            const idx = Math.floor(Math.random() * phrases.length);

            return phrases[idx];
        
    },

    start(){
        this.timerId = setInterval(() => {
            console.log(this.pickPhrases());
        });
    },

    stop(){
        clearInterval(this.timerId);
        console.log("Hey, I am stop!!!");
    }

};

const run =  ( obj ) => {
    return obj;
};
// for (let i = 0; i< 10; i++){
//     run(annoyer.start());
// }





