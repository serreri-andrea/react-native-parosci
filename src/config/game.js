const GameRules = [
    {
        "reference": "classic",
        "modeAllow": ["pve", "eve"],
        "cards":[
            {
                "reference": "rock",
                "images": require('../images/rock.png'),
                "key": "rock",
                "wins": ["scissors"],
                "loose": ["paper"]
            },
            {
                "reference": "paper",
                "images": require('../images/paper.png'),
                "key": "paper",
                "wins": ["rock"],
                "loose":["scissors"]
            },
            {
                "reference": "scissors",
                "images": require('../images/scissors.png'),
                "key": "scissors",
                "wins": ["paper"],
                "loose": ["rock"]
            }
        ]
    },
    {
        "reference": "extended",
        "modeAllow": ["pve", "eve"],
        "cards":[
            {
                "reference": "rock",
                "images": require('../images/rock.png'),
                "key": "rock",
                "wins": ["scissors", "lizard"],
                "loose": ["paper", "spock"]
            },
            {
                "reference": "paper",
                "images": require('../images/paper.png'),
                "key": "paper",
                "wins": ["rock", "spock"],
                "loose":["scissors", "lizard"]
            },
            {
                "reference": "scissors",
                "images": require('../images/scissors.png'),
                "key": "scissors",
                "wins": ["paper", "lizard"],
                "loose": ["rock", "spock"],
            },
            {
                "reference": "spock",
                "images": require('../images/spock.png'),
                "key": "spock",
                "wins": ["rock", "scissors"],
                "loose": ["lizard", "paper"]
            },
            {
                "reference": "lizard",
                "images": require('../images/lizard.png'),
                "key": "lizard",
                "wins": ["paper", "spock"],
                "loose": ["rock", "scissors"]
            }
        ]
    }

];

module.exports = GameRules;