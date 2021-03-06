const GameRules = [
    {
        "reference": "classic",
        "modeAllow": ["pve", "eve"],
        "images": require('../images/mode/mode_classic.png'),
        "cards":[
            {
                "reference": "rock",
                "images": {
                    "default": require('../images/rock.png'),
                    "selected": require('../images/rock_selected.png'),
                },
                "key": "rock",
                "wins": ["scissors"],
                "loose": ["paper"]
            },
            {
                "reference": "paper",
                "images": {
                    "default": require('../images/paper.png'),
                    "selected": require('../images/paper_selected.png'),
                },
                "key": "paper",
                "wins": ["rock"],
                "loose":["scissors"]
            },
            {
                "reference": "scissors",
                "images": {
                    "default": require('../images/scissors.png'),
                    "selected": require('../images/scissors_selected.png'),
                },
                "key": "scissors",
                "wins": ["paper"],
                "loose": ["rock"]
            }
        ]
    },
    {
        "reference": "extended",
        "modeAllow": ["pve", "eve"],
        "images": require('../images/mode/mode_extended.png'),
        "cards":[
            {
                "reference": "rock",
                "images": {
                    "default": require('../images/rock.png'),
                    "selected": require('../images/rock_selected.png'),
                },                "key": "rock",
                "wins": ["scissors", "lizard"],
                "loose": ["paper", "spock"]
            },
            {
                "reference": "paper",
                "images": {
                    "default": require('../images/paper.png'),
                    "selected": require('../images/paper_selected.png'),
                },
                "key": "paper",
                "wins": ["rock", "spock"],
                "loose":["scissors", "lizard"]
            },
            {
                "reference": "scissors",
                "images": {
                    "default": require('../images/scissors.png'),
                    "selected": require('../images/scissors_selected.png'),
                },                "key": "scissors",
                "wins": ["paper", "lizard"],
                "loose": ["rock", "spock"],
            },
            {
                "reference": "spock",
                "images": {
                    "default": require('../images/spock.png'),
                    "selected": require('../images/spock_selected.png'),
                },                  "key": "spock",
                "wins": ["rock", "scissors"],
                "loose": ["lizard", "paper"]
            },
            {
                "reference": "lizard",
                "images": {
                    "default": require('../images/lizard.png'),
                    "selected": require('../images/lizard_selected.png'),
                },                  "key": "lizard",
                "wins": ["paper", "spock"],
                "loose": ["rock", "scissors"]
            }
        ]
    }

];

module.exports = GameRules;