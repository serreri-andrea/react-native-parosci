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
    }

}
module.exports = Rules;