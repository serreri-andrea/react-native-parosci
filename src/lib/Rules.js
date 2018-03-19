/**
 * Created by Andrea on 19/03/2018.
 */

import GameRuler        from "../config/game";

const Rules = {
    getCards(mode){
        if (!mode)
            mode = "classic";
        let cards = {};
        for (let i = 0; i < GameRuler.length; i++){
            if (GameRuler[i].reference === mode){
                cards = GameRuler[i].cards
            }
        }
        return(cards)
    },

    getVictory(playerOneCard, playerTwoCard){
        if (playerOneCard && playerTwoCard) {
            let rules = this.getCards();
            let winner = "";
            for (let i = 0; i < rules.length; i++) {
                if (rules[i].reference === playerOneCard) {
                    if (rules[i].wins.includes(playerTwoCard)) {
                        /*Player one have win*/
                        return (winner = 1)
                    } else if (rules[i].loose.includes(playerTwoCard)) {
                        /*Player two have win */
                        return (winner = 2)
                    } else {
                        /* Draw */
                        return (winner = 0)
                    }
                }
            }
            return (winner)
        }
    }
};
module.exports = Rules;