/**
 * Created by Andrea on 19/03/2018.
 */

import Rules            from "./Rules";

const Answers = {

    answersIAEasy(mode){
        if (!mode)
            mode = "classic";
        let array = Rules.getCards(mode);
        let random = array[Math.floor(Math.random() * array.length)];
        return(random.reference)
    },

    answersIACheat(mode, opponentCard){
        if (!mode)
            mode = "classic";
        let cards = Rules.getCards(mode);
        for(let i = 0; i < cards.length; i++){
            if (cards[i].reference === opponentCard){
                let array = cards[i].loose;
                let random = array[Math.floor(Math.random()*array.length)];
                return(random)
            }
        }
    },

    answersIAMedium(mode){

    }

};

module.exports = Answers;