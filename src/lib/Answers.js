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
            if (!opponentCard){
                return(this.answersIAEasy(mode))
            }else {
                if (cards[i].reference === opponentCard) {
                    let array = cards[i].loose;
                    let random = array[Math.floor(Math.random() * array.length)];
                    return (random)
                }
            }
        }
    },

    answersIAMedium(mode, previousOpponentCard, actualCard){
        let time = 0;
        if (!mode)
            mode = "classic";
        if (!previousOpponentCard)
            return(this.answersIAEasy(mode));
        else{
            let cards = Rules.getCards(mode);
            for(let i = 0; i < cards.length; i++){
                if (mode === "classic"){
                    if (cards[i].reference === previousOpponentCard) {
                        if (time ===0) {
                            // L'IA laisse gagné la première fois
                            time += 1;
                            let array = cards[i].wins;
                            let random = array[Math.floor(Math.random() * array.length)];
                            return (random)
                        }else{
                            //Si le joueur spam elle le bloque
                            let array = cards[i].loose;
                            let random = array[Math.floor(Math.random() * array.length)];
                            return (random)
                        }
                    }else {
                        //Elle joue un truc qui perd contre ce que le joueur a jouer avant
                        let array = cards[i].wins;
                        let random = array[Math.floor(Math.random() * array.length)];
                        return (random)
                    }
                }else {
                    if (cards[i].reference === previousOpponentCard) {
                        if (previousOpponentCard === actualCard) {
                            //Si le joueur spam elle le bloque
                            let array = cards[i].loose;
                            let random = array[Math.floor(Math.random() * array.length)];
                            return (random)
                        } else {
                            //Elle joue un truc qui perd contre ce que le joueur a jouer avant
                            let array = cards[i].wins;
                            let random = array[Math.floor(Math.random() * array.length)];
                            return (random)
                        }
                    }
                }
            }
        }
    }

};

module.exports = Answers;