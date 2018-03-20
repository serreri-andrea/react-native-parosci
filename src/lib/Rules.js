/**
 * Created by Andrea on 19/03/2018.
 */

import GameRuler        from "../config/game";

const Rules = {
    getCards(mode){
        if (!mode || (mode !== "classic" && mode !== "extended"))
            mode = "classic";
        let cards = {};
        for (let i = 0; i < GameRuler.length; i++){
            if (GameRuler[i].reference === mode){
                cards = GameRuler[i].cards
            }
        }
        return(cards)
    },

    getVictory(mode, playerOneCard, playerTwoCard){
        if (playerOneCard && playerTwoCard) {
            let cards = this.getCards(mode);
            let winner = "";
            for (let i = 0; i < cards.length; i++) {
                if (cards[i].reference === playerOneCard) {
                    if (cards[i].wins.includes(playerTwoCard)) {
                        /*Player one have win*/
                        return (winner = 1)
                    } else if (cards[i].loose.includes(playerTwoCard)) {
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
    },

};
module.exports = Rules;