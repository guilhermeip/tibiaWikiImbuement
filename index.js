const urlImgImbue = "http://download.cipsoft.com/fansites/after_november_2011/misc_icons/imbuing.png";
const scaleImg = (-46);
const bonus_type = {
    "featherweight": {
        "name": "featherweight",
        "bonus-msg-small": "% Capacity Boost",
        "bonus-title": "Aumenta a Capacidade Total",
        "imbue_type": {
            "basic": {
                "imageImbue": "",
                "bonus-value": 3,
                "image": "https://www.tibiawiki.com.br/images/1/1d/Fairy_Wings.gif",
                "amount": "20",
                "link-tibiaWiki": "https://www.tibiawiki.com.br/wiki/Fairy_Wings",
                "title": "Fairy Wings"
            },
            "intricate": {
                "imageImbue": "",
                "bonus-value": 8,
                "image": "https://www.tibiawiki.com.br/images/3/38/Little_Bowl_of_Myrrh.gif",
                "amount": "10",
                "link-tibiaWiki": "https://www.tibiawiki.com.br/wiki/Little_Bowl_of_Myrrh",
                "title": "Little Bowl of Myrrh"
            },
            "powerful": {
                "imageImbue": "",
                "bonus-value": 15,
                "image": "https://www.tibiawiki.com.br/images/0/06/Goosebump_Leather.gif",
                "amount": "5",
                "link-tibiaWiki": "https://www.tibiawiki.com.br/wiki/Goosebump_Leather",
                "title": "Goosebump Leather"
            }
        }
    },
    "epiphany": {
        "name": "epiphany",
        "bonus-msg-small": " Magic Level Boost",
        "bonus-title": "Aumenta o Magic Level",
        "imbue_type": {
            "basic": {
                "imageImbue": "",
                "bonus-value": 1,
                "image": "https://www.tibiawiki.com.br/images/a/a4/Elvish_Talisman.gif",
                "amount": "25",
                "link-tibiaWiki": "https://www.tibiawiki.com.br/wiki/Elvish_Talisman",
                "title": "Elvish Talisman"
            },
            "intricate": {
                "imageImbue": "",
                "bonus-value": 2,
                "image": "https://www.tibiawiki.com.br/images/2/29/Broken_Shamanic_Staff.gif",
                "amount": "15",
                "link-tibiaWiki": "https://www.tibiawiki.com.br/wiki/Broken_Shamanic_Staff",
                "title": "Broken Shamanic Staff"
            },
            "powerful": {
                "imageImbue": "",
                "bonus-value": 4,
                "image": "https://www.tibiawiki.com.br/images/5/57/Strand_of_Medusa_Hair.gif",
                "amount": "15",
                "link-tibiaWiki": "https://www.tibiawiki.com.br/wiki/Strand_of_Medusa_Hair",
                "title": "Strand of Medusa Hair"
            }
        }
    },
    "blockade": {
        "name": "blockade",
        "bonus-msg-small": " Shield Skill Boost",
        "bonus-title": "Aumenta o Skill(habilidade) de Shield",
        "imbue_type": {
            "basic": {
                "imageImbue": "",
                "bonus-value": 1,
                "image": "https://www.tibiawiki.com.br/images/4/45/Piece_of_Scarab_Shell.gif",
                "amount": "20",
                "link-tibiaWiki": "https://www.tibiawiki.com.br/wiki/Piece_of_Scarab_Shell",
                "title": "Piece of Scarab Shell"
            },
            "intricate": {
                "imageImbue": "",
                "bonus-value": 2,
                "image": "https://www.tibiawiki.com.br/images/d/d9/Brimstone_Shell.gif",
                "amount": "25",
                "link-tibiaWiki": "https://www.tibiawiki.com.br/wiki/Brimstone_Shell",
                "title": "Brimstone Shell"
            },
            "powerful": {
                "imageImbue": "",
                "bonus-value": 4,
                "image": "https://www.tibiawiki.com.br/images/d/d6/Frazzle_Skin.gif",
                "amount": "25",
                "link-tibiaWiki": "https://www.tibiawiki.com.br/wiki/Frazzle_Skin",
                "title": "Frazzle Skin"
            }
        }
    },
    "precision": {
        "name": "precision",
        "bonus-msg-small": " Distance Skill Boost",
        "bonus-title": "Aumenta Skill de Distance",
        "imbue_type": {
            "basic": {
                "imageImbue": "",
                "bonus-value": 1,
                "image": "https://www.tibiawiki.com.br/images/c/cf/Elven_Scouting_Glass.gif",
                "amount": "25",
                "link-tibiaWiki": "https://www.tibiawiki.com.br/wiki/Elven_Scouting_Glass",
                "title": "Elven Scouting Glass"
            },
            "intricate": {
                "imageImbue": "",
                "bonus-value": 2,
                "image": "https://www.tibiawiki.com.br/images/c/ca/Elven_Hoof.gif",
                "amount": "20",
                "link-tibiaWiki": "https://www.tibiawiki.com.br/wiki/Elven_Hoof",
                "title": "Elven Hoof"
            },
            "powerful": {
                "imageImbue": "",
                "bonus-value": 4,
                "image": "https://www.tibiawiki.com.br/images/c/cf/Metal_Spike.gif",
                "amount": "10",
                "link-tibiaWiki": "https://www.tibiawiki.com.br/wiki/Metal_Spike",
                "title": "Metal Spike"
            }
        }
    },
    "bash": {
        "name": "bash",
        "bonus-msg-small": " Club Skill Boost",
        "bonus-title": "Aumenta o Skill(habilidade) de Club",
        "imbue_type": {
            "basic": {
                "imageImbue": "",
                "bonus-value": 1,
                "image": "https://www.tibiawiki.com.br/images/b/bd/Cyclops_Toe.gif",
                "amount": "20",
                "link-tibiaWiki": "https://www.tibiawiki.com.br/wiki/Cyclops_Toe",
                "title": "Cyclops Toe"
            },
            "intricate": {
                "imageImbue": "",
                "bonus-value": 2,
                "image": "https://www.tibiawiki.com.br/images/9/9b/Ogre_Nose_Ring.gif",
                "amount": "15",
                "link-tibiaWiki": "https://www.tibiawiki.com.br/wiki/Ogre_Nose_Ring",
                "title": "Ogre Nose Ring"
            },
            "powerful": {
                "imageImbue": "",
                "bonus-value": 4,
                "image": "https://www.tibiawiki.com.br/images/4/48/Warmaster%27s_Wristguards.gif",
                "amount": "10",
                "link-tibiaWiki": "https://www.tibiawiki.com.br/wiki/Warmaster%27s_Wristguards",
                "title": "Warmaster's Wristguards"
            }
        }
    },
    "slash": {
        "name": "slash",
        "bonus-msg-small": " Sword Skill Boost",
        "bonus-title": "Aumenta o Skill(habilidade) de Sword",
        "imbue_type": {
            "basic": {
                "imageImbue": "",
                "bonus-value": 1,
                "image": "https://www.tibiawiki.com.br/images/0/04/Lion%27s_Mane.gif",
                "amount": "25",
                "link-tibiaWiki": "https://www.tibiawiki.com.br/wiki/Lion%27s_Mane",
                "title": "Lion's Mane"
            },
            "intricate": {
                "imageImbue": "",
                "bonus-value": 2,
                "image": "https://www.tibiawiki.com.br/images/b/b2/Mooh%27tah_Shell.gif",
                "amount": "25",
                "link-tibiaWiki": "https://www.tibiawiki.com.br/wiki/Mooh%27tah_Shell",
                "title": "Mooh'tah Shell"
            },
            "powerful": {
                "imageImbue": "",
                "bonus-value": 4,
                "image": "https://www.tibiawiki.com.br/images/4/41/War_Crystal.gif",
                "amount": "5",
                "link-tibiaWiki": "https://www.tibiawiki.com.br/wiki/War_Crystal",
                "title": "War Crystal"
            }
        }
    },
    "chop": {
        "name": "chop",
        "bonus-msg-small": " Axe Skill Boost",
        "bonus-title": "Aumenta o Skill(habilidade) de Axe",
        "imbue_type": {
            "basic": {
                "imageImbue": "",
                "bonus-value": 1,
                "image": "https://www.tibiawiki.com.br/images/7/70/Orc_Tooth.gif",
                "amount": "20",
                "link-tibiaWiki": "https://www.tibiawiki.com.br/wiki/Orc_Tooth",
                "title": "Orc Tooth"
            },
            "intricate": {
                "imageImbue": "",
                "bonus-value": 2,
                "image": "https://www.tibiawiki.com.br/images/1/10/Battle_Stone.gif",
                "amount": "25",
                "link-tibiaWiki": "https://www.tibiawiki.com.br/wiki/Battle_Stone",
                "title": "Battle Stone"
            },
            "powerful": {
                "imageImbue": "",
                "bonus-value": 4,
                "image": "https://www.tibiawiki.com.br/images/0/0f/Moohtant_Horn.gif",
                "amount": "20",
                "link-tibiaWiki": "https://www.tibiawiki.com.br/wiki/Moohtant_Horn",
                "title": "Moohtant Horn"
            }
        }
    },
    "vibrancy": {
        "name": "vibrancy",
        "bonus-msg-small": "% probability remove paralysis",
        "bonus-title": "Possibilidade de remover paralise",
        "imbue_type": {
            "basic": {
                "imageImbue": "",
                "bonus-value": 15,
                "image": "https://www.tibiawiki.com.br/images/0/0d/Wereboar_Hooves.gif",
                "amount": "20",
                "link-tibiaWiki": "https://www.tibiawiki.com.br/wiki/Wereboar_Hooves",
                "title": "Wereboar Hooves"
            },
            "intricate": {
                "imageImbue": "",
                "bonus-value": 25,
                "image": "https://www.tibiawiki.com.br/images/f/f8/Crystallized_Anger.gif",
                "amount": "15",
                "link-tibiaWiki": "https://www.tibiawiki.com.br/wiki/Crystallized_Anger",
                "title": "Crystallized Anger"
            },
            "powerful": {
                "imageImbue": "",
                "bonus-value": 50,
                "image": "https://www.tibiawiki.com.br/images/f/fd/Quill.gif",
                "amount": "5",
                "link-tibiaWiki": "https://www.tibiawiki.com.br/wiki/Quill",
                "title": "Quill"
            }
        }
    },
    "swiftness": {
        "name": "swiftness",
        "bonus-msg-small": " Speed Boost",
        "bonus-title": "Aumenta a sua velocidade",
        "imbue_type": {
            "basic": {
                "imageImbue": "",
                "bonus-value": 10,
                "image": "https://www.tibiawiki.com.br/images/8/84/Damselfly_Wing.gif",
                "amount": "15",
                "link-tibiaWiki": "https://www.tibiawiki.com.br/wiki/Damselfly_Wing",
                "title": "Damselfly Wing"
            },
            "intricate": {
                "imageImbue": "",
                "bonus-value": 15,
                "image": "https://www.tibiawiki.com.br/images/1/1c/Compass.gif",
                "amount": "25",
                "link-tibiaWiki": "https://www.tibiawiki.com.br/wiki/Compass",
                "title": "Compass"
            },
            "powerful": {
                "imageImbue": "",
                "bonus-value": 20,
                "image": "https://www.tibiawiki.com.br/images/6/69/Waspoid_Wing.gif",
                "amount": "20",
                "link-tibiaWiki": "https://www.tibiawiki.com.br/wiki/Waspoid_Wing",
                "title": "Waspoid Wing"
            }
        }
    },
    "strike": {
        "name": "strike",
        "bonus-msg-small": "% critical boost",
        "bonus-title": "Aumento de dano critico",
        "imbue_type": {
            "basic": {
                "imageImbue": 1 * scaleImg,
                "bonus-value": 15,
                "image": "https://www.tibiawiki.com.br/images/f/fb/Protective_Charm.gif",
                "amount": "20",
                "link-tibiaWiki": "https://www.tibiawiki.com.br/wiki/Protective_Charm",
                "title": "Protective Charm"
            },
            "intricate": {
                "imageImbue": 2 * scaleImg,
                "bonus-value": 25,
                "image": "https://www.tibiawiki.com.br/images/d/dd/Sabretooth.gif",
                "amount": "25",
                "link-tibiaWiki": "https://www.tibiawiki.com.br/wiki/Sabretooth",
                "title": "Sabretooth"
            },
            "powerful": {
                "imageImbue": 3 * scaleImg,
                "bonus-value": 50,
                "image": "https://www.tibiawiki.com.br/images/f/f7/Vexclaw_Talon.gif",
                "amount": "5",
                "link-tibiaWiki": "https://www.tibiawiki.com.br/wiki/Vexclaw_Talon",
                "title": "Vexclaw Talon"
            }
        }
    },
    "void": {
        "name": "void",
        "bonus-msg-small": "% mana leech",
        "bonus-title": "Roubo de mana",
        "imbue_type": {
            "basic": {
                "imageImbue": 49 * scaleImg,
                "bonus-value": 3,
                "image": "https://www.tibiawiki.com.br/images/6/69/Rope_Belt.gif",
                "amount": "25",
                "link-tibiaWiki": "https://www.tibiawiki.com.br/wiki/Rope_Belt",
                "title": "Rope Belt"
            },
            "intricate": {
                "imageImbue": 50 * scaleImg,
                "bonus-value": 5,
                "image": "https://www.tibiawiki.com.br/images/d/d6/Silencer_Claws.gif",
                "amount": "25",
                "link-tibiaWiki": "https://www.tibiawiki.com.br/wiki/Silencer_Claws",
                "title": "Silencer Claws"
            },
            "powerful": {
                "imageImbue": 51 * scaleImg,
                "bonus-value": 8,
                "image": "https://www.tibiawiki.com.br/images/8/8c/Some_Grimeleech_Wings.gif",
                "amount": "5",
                "link-tibiaWiki": "https://www.tibiawiki.com.br/wiki/Some_Grimeleech_Wings",
                "title": "Some Grimeleech Wings"
            }
        }
    },
    "reap": {
        "name": "reap",
        "bonus-msg-small": "% death damage conversion",
        "bonus-title": "Converte dano Fisico em dano de morte/Death",
        "imbue_type": {
            "basic": {
                "imageImbue": 4 * scaleImg,
                "bonus-value": 10,
                "image": "https://www.tibiawiki.com.br/images/6/65/Pile_of_Grave_Earth.gif",
                "amount": "25",
                "link-tibiaWiki": "https://www.tibiawiki.com.br/wiki/Pile_of_Grave_Earth",
                "title": "Pile of Grave Earth"
            },
            "intricate": {
                "imageImbue": 5 * scaleImg,
                "bonus-value": 25,
                "image": "https://www.tibiawiki.com.br/images/8/8f/Demonic_Skeletal_Hand.gif",
                "amount": "20",
                "link-tibiaWiki": "https://www.tibiawiki.com.br/wiki/Demonic_Skeletal_Hand",
                "title": "Demonic Skeletal Hand"
            },
            "powerful": {
                "imageImbue": 6 * scaleImg,
                "bonus-value": 50,
                "image": "https://www.tibiawiki.com.br/images/0/0f/Petrified_Scream.gif",
                "amount": "5",
                "link-tibiaWiki": "https://www.tibiawiki.com.br/wiki/Petrified_Scream",
                "title": "Petrified Scream"
            }
        }
    },
    "electrify": {
        "name": "electrify",
        "bonus-msg-small": "% energy damage conversion",
        "bonus-title": "Converte o dano Fisico em dano de Energia",
        "imbue_type": {
            "basic": {
                "imageImbue": "",
                "bonus-value": 10,
                "image": "https://www.tibiawiki.com.br/images/b/b8/Rorc_Feather.gif",
                "amount": "25",
                "link-tibiaWiki": "https://www.tibiawiki.com.br/wiki/Rorc_Feather",
                "title": "Rorc Feathers"
            },
            "intricate": {
                "imageImbue": "",
                "bonus-value": 25,
                "image": "https://www.tibiawiki.com.br/images/f/fc/Peacock_Feather_Fan.gif",
                "amount": "5",
                "link-tibiaWiki": "https://www.tibiawiki.com.br/wiki/Peacock_Feather_Fan",
                "title": "Peacock Feather Fan"
            },
            "powerful": {
                "imageImbue": "",
                "bonus-value": 50,
                "image": "https://www.tibiawiki.com.br/images/d/dc/Energy_Vein.gif",
                "amount": "1",
                "link-tibiaWiki": "https://www.tibiawiki.com.br/wiki/Energy_Vein",
                "title": "Energy Vein"
            }
        }
    },
    "frost": {
        "name": "frost",
        "bonus-msg-small": "% ice damage conversion",
        "bonus-title": "Converte dano Fisico em dano de Gelo",
        "imbue_type": {
            "basic": {
                "imageImbue": 19 * scaleImg,
                "bonus-value": 10,
                "image": "https://www.tibiawiki.com.br/images/8/83/Frosty_Heart.gif",
                "amount": "25",
                "link-tibiaWiki": "https://www.tibiawiki.com.br/wiki/Frosty_Heart",
                "title": "Frosty Hearts"
            },
            "intricate": {
                "imageImbue": 20 * scaleImg,
                "bonus-value": 25,
                "image": "https://www.tibiawiki.com.br/images/6/6e/Seacrest_Hair.gif",
                "amount": "10",
                "link-tibiaWiki": "https://www.tibiawiki.com.br/wiki/Seacrest_Hair",
                "title": "Seacrest Hair"
            },
            "powerful": {
                "imageImbue": 21 * scaleImg,
                "bonus-value": 50,
                "image": "https://www.tibiawiki.com.br/images/3/3e/Polar_Bear_Paw.gif",
                "amount": "5",
                "link-tibiaWiki": "https://www.tibiawiki.com.br/wiki/Polar_Bear_Paw",
                "title": "Polar Bear Paws"
            }
        }
    },
    "venom": {
        "name": "venom",
        "bonus-msg-small": "% earth damage conversion",
        "bonus-title": "Converte dano Fisico em dano de Terra",
        "imbue_type": {
            "basic": {
                "imageImbue": "",
                "bonus-value": 10,
                "image": "https://www.tibiawiki.com.br/images/6/6f/Swamp_Grass.gif",
                "amount": "25",
                "link-tibiaWiki": "https://www.tibiawiki.com.br/wiki/Swamp_Grass",
                "title": "Swamp Grass"
            },
            "intricate": {
                "imageImbue": "",
                "bonus-value": 25,
                "image": "https://www.tibiawiki.com.br/images/b/b9/Poisonous_Slime.gif",
                "amount": "20",
                "link-tibiaWiki": "https://www.tibiawiki.com.br/wiki/Poisonous_Slime",
                "title": "Poisonous Slimes"
            },
            "powerful": {
                "imageImbue": "",
                "bonus-value": 50,
                "image": "https://www.tibiawiki.com.br/images/6/65/Slime_Heart.gif",
                "amount": "2",
                "link-tibiaWiki": "https://www.tibiawiki.com.br/wiki/Slime_Heart",
                "title": "Slime Hearts"
            }
        }
    },
    "scorch": {
        "name": "scorch",
        "bonus-msg-small": "% fire damage conversion",
        "bonus-title": "Converte dano fisico em dano de fogo",
        "imbue_type": {
            "basic": {
                "imageImbue": 13 * scaleImg,
                "bonus-value": 10,
                "image": "https://www.tibiawiki.com.br/images/7/7d/Fiery_Heart.gif",
                "amount": "25",
                "link-tibiaWiki": "https://www.tibiawiki.com.br/wiki/Fiery_Heart",
                "title": "Fiery Hearts"
            },
            "intricate": {
                "imageImbue": 14 * scaleImg,
                "bonus-value": 25,
                "image": "https://www.tibiawiki.com.br/images/a/ac/Green_Dragon_Scale.gif",
                "amount": "5",
                "link-tibiaWiki": "https://www.tibiawiki.com.br/wiki/Green_Dragon_Scale",
                "title": "Green Dragon Scale"
            },
            "powerful": {
                "imageImbue": 15 * scaleImg,
                "bonus-value": 50,
                "image": "https://www.tibiawiki.com.br/images/b/b8/Demon_Horn.gif",
                "amount": "5",
                "link-tibiaWiki": "https://www.tibiawiki.com.br/wiki/Demon_Horn",
                "title": "Demon Horn"
            }
        }
    },
    "vampirism": {
        "name": "vampirism",
        "bonus-msg-small": "% Life Leech",
        "bonus-title": "Roubo de vida",
        "imbue_type": {
            "basic": {
                "imageImbue": 46 * scaleImg,
                "bonus-value": 5,
                "image": "https://www.tibiawiki.com.br/images/f/f1/Vampire_Teeth.gif",
                "amount": "25",
                "link-tibiaWiki": "https://www.tibiawiki.com.br/wiki/Vampire_Teeth",
                "title": "Vampire Teeth"

            },
            "intricate": {
                "imageImbue": 47 * scaleImg,
                "bonus-value": 10,
                "image": "https://www.tibiawiki.com.br/images/1/1d/Bloody_Pincers.gif",
                "amount": "15",
                "link-tibiaWiki": "https://www.tibiawiki.com.br/wiki/Bloody_Pincers",
                "title": "Bloody Pincers"
            },
            "powerful": {
                "imageImbue": 48 * scaleImg,
                "bonus-value": 25,
                "image": "https://www.tibiawiki.com.br/images/8/85/Piece_of_Dead_Brain.gif",
                "amount": "5",
                "link-tibiaWiki": "https://www.tibiawiki.com.br/wiki/Piece_of_Dead_Brain",
                "title": "Piece of Dead Brain"
            }
        }
    },
    "lich_shroud": {
        "name": "lich_shroud",
        "bonus-msg-small": "% Death reduction",
        "bonus-title": "Redução dano Death",
        "imbue_type": {
            "basic": {
                "imageImbue": 25 * scaleImg,
                "bonus-value": 2,
                "image": "https://www.tibiawiki.com.br/images/c/c2/Flask_of_Embalming_Fluid.gif",
                "amount": "25",
                "link-tibiaWiki": "https://www.tibiawiki.com.br/wiki/Flask_of_Embalming_Fluid",
                "title": "Flask of Embalming Fluid"

            },
            "intricate": {
                "imageImbue": 26 * scaleImg,
                "bonus-value": 5,
                "image": "https://www.tibiawiki.com.br/images/f/ff/Gloom_Wolf_Fur.gif",
                "amount": "20",
                "link-tibiaWiki": "https://www.tibiawiki.com.br/wiki/Gloom_Wolf_Fur",
                "title": "Gloom Wolf Fur"
            },
            "powerful": {
                "imageImbue": 27 * scaleImg,
                "bonus-value": 10,
                "image": "https://www.tibiawiki.com.br/images/0/08/Mystical_Hourglass.gif",
                "amount": "5",
                "link-tibiaWiki": "https://www.tibiawiki.com.br/wiki/Mystical_Hourglass",
                "title": "Mystical Hourglass"
            },
        },
    },
    "snake_skin": {
        "name": "snake_skin",
        "bonus-msg-small": "% Earth reduction",
        "bonus-title": "Redução dano Terra",
        "imbue_type": {
            "basic": {
                "imageImbue": 28 * scaleImg,
                "bonus-value": 3,
                "image": "https://www.tibiawiki.com.br/images/f/f6/Piece_of_Swampling_Wood.gif",
                "amount": "25",
                "link-tibiaWiki": "https://www.tibiawiki.com.br/wiki/Piece_of_Swampling_Wood",
                "title": "Piece of Swampling Wood"

            },
            "intricate": {
                "imageImbue": 29 * scaleImg,
                "bonus-value": 8,
                "image": "https://www.tibiawiki.com.br/images/3/3e/Snake_Skin.gif",
                "amount": "20",
                "link-tibiaWiki": "https://www.tibiawiki.com.br/wiki/Snake_Skin",
                "title": "Snake Skin"
            },
            "powerful": {
                "imageImbue": 30 * scaleImg,
                "bonus-value": 15,
                "image": "https://www.tibiawiki.com.br/images/7/7a/Brimstone_Fangs.gif",
                "amount": "10",
                "link-tibiaWiki": "https://www.tibiawiki.com.br/wiki/Brimstone_Fangs",
                "title": "Brimstone Fangs"
            },
        },
    },
    "dragon_hide": {
        "name": "dragon_hide",
        "bonus-msg-small": "% Fire reduction",
        "bonus-title": "Redução dano Fogo",
        "imbue_type": {
            "basic": {
                "imageImbue": 34 * scaleImg,
                "bonus-value": 3,
                "image": "https://www.tibiawiki.com.br/images/d/d9/Green_Dragon_Leather.gif",
                "amount": "20",
                "link-tibiaWiki": "https://www.tibiawiki.com.br/wiki/Green_Dragon_Leather",
                "title": "Green Dragon Leather"

            },
            "intricate": {
                "imageImbue": 35 * scaleImg,
                "bonus-value": 8,
                "image": "https://www.tibiawiki.com.br/images/0/01/Blazing_Bone.gif",
                "amount": "10",
                "link-tibiaWiki": "https://www.tibiawiki.com.br/wiki/Blazing_Bone",
                "title": "Blazing Bone"
            },
            "powerful": {
                "imageImbue": 36 * scaleImg,
                "bonus-value": 15,
                "image": "https://www.tibiawiki.com.br/images/5/51/Draken_Sulphur.gif",
                "amount": "5",
                "link-tibiaWiki": "https://www.tibiawiki.com.br/wiki/Draken_Sulphur",
                "title": "Draken Sulphur"
            },
        },
    },
    "quara_scale": {
        "name": "quara_scale",
        "bonus-msg-small": "% Ice reduction",
        "bonus-title": "Redução dano gelo",
        "imbue_type": {
            "basic": {
                "imageImbue": 40 * scaleImg,
                "bonus-value": 3,
                "image": "https://www.tibiawiki.com.br/images/f/fa/Winter_Wolf_Fur.gif",
                "amount": "25",
                "link-tibiaWiki": "https://www.tibiawiki.com.br/wiki/Winter_Wolf_Fur",
                "title": "Winter Wolf Fur"

            },
            "intricate": {
                "imageImbue": 41 * scaleImg,
                "bonus-value": 8,
                "image": "https://www.tibiawiki.com.br/images/f/fc/Thick_Fur.gif",
                "amount": "15",
                "link-tibiaWiki": "https://www.tibiawiki.com.br/wiki/Thick_Fur",
                "title": "Thick Fur"
            },
            "powerful": {
                "imageImbue": 42 * scaleImg,
                "bonus-value": 15,
                "image": "https://www.tibiawiki.com.br/images/5/54/Deepling_Warts.gif",
                "amount": "10",
                "link-tibiaWiki": "https://www.tibiawiki.com.br/wiki/Deepling_Warts",
                "title": "Deepling Warts"
            },
        },
    },
    "cloud_fabric": {
        "name": "cloud_fabric",
        "bonus-msg-small": "% Energy reduction",
        "bonus-title": "Redução dano energia",
        "imbue_type": {
            "basic": {
                "imageImbue": 31 * scaleImg,
                "bonus-value": 3,
                "image": "https://www.tibiawiki.com.br/images/b/be/Crawler_Head_Plating.gif",
                "amount": "20",
                "link-tibiaWiki": "https://www.tibiawiki.com.br/wiki/Crawler_Head_Plating",
                "title": "Crawler Head Plating"

            },
            "intricate": {
                "imageImbue": 32 * scaleImg,
                "bonus-value": 8,
                "image": "https://www.tibiawiki.com.br/images/d/de/Wyrm_Scale.gif",
                "amount": "15",
                "link-tibiaWiki": "https://www.tibiawiki.com.br/wiki/Wyrm_Scale",
                "title": "Wyrm Scale"
            },
            "powerful": {
                "imageImbue": 33 * scaleImg,
                "bonus-value": 15,
                "image": "https://www.tibiawiki.com.br/images/a/a3/Wyvern_Talisman.gif",
                "amount": "10",
                "link-tibiaWiki": "https://www.tibiawiki.com.br/wiki/Wyvern_Talisman",
                "title": "Wyvern Talisman"
            }
        },
    },
    "demon_presence": {
        "name": "demon_presence",
        "bonus-msg-small": "% Holy reduction",
        "bonus-title": "Redução dano sagrado",
        "imbue_type": {
            "basic": {
                "imageImbue": 37 * scaleImg,
                "bonus-value": 3,
                "image": "https://www.tibiawiki.com.br/images/3/38/Cultish_Robe.gif",
                "amount": "25",
                "link-tibiaWiki": "https://www.tibiawiki.com.br/wiki/Cultish_Robe",
                "title": "Cultish Robe"

            },
            "intricate": {
                "imageImbue": 38 * scaleImg,
                "bonus-value": 8,
                "image": "https://www.tibiawiki.com.br/images/4/4c/Cultish_Mask.gif",
                "amount": "25",
                "link-tibiaWiki": "https://www.tibiawiki.com.br/wiki/Cultish_Mask",
                "title": "Cultish Mask"
            },
            "powerful": {
                "imageImbue": 39 * scaleImg,
                "bonus-value": 15,
                "image": "https://www.tibiawiki.com.br/images/a/a3/Hellspawn_Tail.gif",
                "amount": "20",
                "link-tibiaWiki": "https://www.tibiawiki.com.br/wiki/Hellspawn_Tail",
                "title": "Hellspawn Tail"
            }
        },
    },
}
const bonus_group_armor = [
    bonus_type.lich_shroud,
    bonus_type.snake_skin,
    bonus_type.dragon_hide,
    bonus_type.quara_scale,
    bonus_type.cloud_fabric,
    bonus_type.demon_presence
]
const bonus_group_helmet = [
    bonus_type.chop,
    bonus_type.slash,
    bonus_type.bash,
    bonus_type.precision,
    bonus_type.blockade,
    bonus_type.epiphany,
]
const bonus_group_distance = [
    bonus_type.vampirism,
    bonus_type.void,
    bonus_type.strike,
]
const bonus_group_weapon = [
    bonus_type.scorch,
    bonus_type.venom,
    bonus_type.frost,
    bonus_type.electrify,
    bonus_type.reap,
].concat(bonus_group_distance);

const item_imbuing = {
    "armor": {
        "Albino Plate": {
            "slots": {
                "actual": 0,
                "max": 2
            },
            "value-option": "albino_plate",
            "image": "https://www.tibiawiki.com.br/images/9/98/Albino_Plate.gif",
            "bonus": bonus_group_armor,
            "details": [
                { "armor": "5" },
                { "peso": "32.0 oz" }
            ]
        },
        "Amazon Armor": {
            "slots": {
                "actual": 0,
                "max": 2
            },
            "value-option": "amazon_armor",
            "image": "https://www.tibiawiki.com.br/wiki/Especial:Redirecionar/file/Amazon_Armor.gif",
            "bonus": bonus_group_armor,
        },
        "Blue Robe": {
            "slots": {
                "actual": 0,
                "max": 2
            },
            "value-option": "blue_robe",
            "image": "https://www.tibiawiki.com.br/images/8/8f/Blue_Robe.gif",
            "bonus": bonus_group_armor,
        },
        "Chain Armor": {
            "slots": {
                "actual": 0,
                "max": 2
            },
            "value-option": "chain_armor",
            "image": "https://www.tibiawiki.com.br/images/2/29/Chain_Armor.gif",
            "bonus": bonus_group_armor,
        },
        "Crown Armor": {
            "slots": {
                "actual": 0,
                "max": 2
            },
            "value-option": "crown_armor",
            "image": "https://www.tibiawiki.com.br/images/7/7c/Crown_Armor.gif",
            "bonus": bonus_group_armor,
        },
        "Demon Armor": {
            "slots": {
                "actual": 0,
                "max": 2
            },
            "value-option": "demon_armor",
            "bonus": bonus_group_armor,
            "image": "https://www.tibiawiki.com.br/images/e/e0/Demon_Armor.gif"
        },
        "Depth Lorica": {
            "slots": {
                "actual": 0,
                "max": 2
            },
            "value-option": "depth_lorica",
            "image": "https://www.tibiawiki.com.br/images/2/29/Depth_Lorica.gif",
            "bonus": bonus_group_armor
        },
        "Dragon Scale Mail": {
            "slots": {
                "actual": 0,
                "max": 2
            },
            "value-option": "dragon_scale_mail",
            "image": "https://www.tibiawiki.com.br/images/1/16/Dragon_Scale_Mail.gif",
            "bonus": bonus_group_armor

        },
        "Dream Shroud": {
            "slots": {
                "actual": 0,
                "max": 2
            },
            "value-option": "dream_shroud",
            "image": "https://www.tibiawiki.com.br/images/a/ad/Dream_Shroud.gif",
            "bonus": bonus_group_armor
        },
        "Dwarven Armor": {
            "slots": {
                "actual": 0,
                "max": 2
            },
            "value-option": "dwarven_armor",
            "bonus": bonus_group_armor,
            "image": "https://www.tibiawiki.com.br/images/2/2c/Dwarven_Armor.gif"
        },
        "Elite Draken Mail": {
            "slots": {
                "actual": 0,
                "max": 2
            },
            "image": "https://www.tibiawiki.com.br/images/2/28/Elite_Draken_Mail.gif",
            "bonus": bonus_group_armor,
            "value-option": "elite_draken_mail"
        },
        "Elven Mail": {
            "slots": {
                "actual": 0,
                "max": 2
            },
            "image": "https://www.tibiawiki.com.br/images/0/01/Elven_Mail.gif",
            "bonus": bonus_group_armor,
            "value-option": "elven_mail"
        },
        "Falcon Plate": {
            "slots": {
                "actual": 0,
                "max": 2
            },
            "image": "https://www.tibiawiki.com.br/images/d/dc/Falcon_Plate.gif",
            "bonus": bonus_group_armor,
            "value-option": "falcon_plate"
        },
        "Gnome Armor": {
            "slots": {
                "actual": 0,
                "max": 2
            },
            "image": "https://www.tibiawiki.com.br/images/a/a8/Gnome_Armor.gif",
            "bonus": bonus_group_armor,
            "value-option": "gnome_armor"
        },
        "Golden Amor": {
            "slots": {
                "actual": 0,
                "max": 2
            },
            "image": "https://www.tibiawiki.com.br/images/d/d0/Golden_Armor.gif",
            "bonus": bonus_group_armor,
            "value-option": "golden_armor"
        },
        "Heat Core": {
            "slots": {
                "actual": 0,
                "max": 2
            },
            "image": "https://www.tibiawiki.com.br/images/f/f2/Heat_Core.gif",
            "bonus": bonus_group_armor,
            "value-option": "heat_core"
        },
        "Heavy Metal T-Shirt": {
            "slots": {
                "actual": 0,
                "max": 2
            },
            "image": "https://www.tibiawiki.com.br/images/b/b7/Heavy_Metal_T-Shirt.gif",
            "bonus": bonus_group_armor,
            "value-option": "heavy_metal_t-shirt"
        },
        "Knight Armor": {
            "slots": {
                "actual": 0,
                "max": 2
            },
            "image": "https://www.tibiawiki.com.br/images/8/8e/Knight_Armor.gif",
            "bonus": bonus_group_armor,
            "value-option": "knight_armor"
        },
        "Leopard Armor": {
            "slots": {
                "actual": 0,
                "max": 2
            },
            "image": "https://www.tibiawiki.com.br/images/9/98/Leopard_Armor.gif",
            "bonus": bonus_group_armor,
            "value-option": "leopard_armor"
        },
        "Living Armor": {
            "slots": {
                "actual": 0,
                "max": 2
            },
            "image": "https://www.tibiawiki.com.br/images/c/c4/Living_Armor.gif",
            "bonus": bonus_group_armor,
            "value-option": "living_armor"
        },
        "Magic Plate Armor": {
            "slots": {
                "actual": 0,
                "max": 2
            },
            "image": "https://www.tibiawiki.com.br/images/3/31/Magic_Plate_Armor.gif",
            "bonus": bonus_group_armor,
            "value-option": "magic_plate_armor"
        },
        "Mammoth Fur Cape": {
            "slots": {
                "actual": 0,
                "max": 2
            },
            "image": "https://www.tibiawiki.com.br/images/4/4b/Mammoth_Fur_Cape.gif",
            "bonus": bonus_group_armor,
            "value-option": "mammoth_fur_cape"
        },
        "Master Archer's Armor": {
            "slots": {
                "actual": 0,
                "max": 2
            },
            "image": "https://www.tibiawiki.com.br/images/4/4e/Master_Archer%27s_Armor.gif",
            "bonus": bonus_group_armor,
            "value-option": "master_archers_armor"
        },
        "Mooh'tah Plate": {
            "slots": {
                "actual": 0,
                "max": 2
            },
            "image": "https://www.tibiawiki.com.br/images/2/23/Mooh%27tah_Plate.gif",
            "bonus": bonus_group_armor,
            "value-option": "moohtah_plate"
        },
        "Noble Armor": {
            "slots": {
                "actual": 0,
                "max": 2
            },
            "image": "https://www.tibiawiki.com.br/images/1/12/Noble_Armor.gif",
            "bonus": bonus_group_armor,
            "value-option": "noble_armor"
        },
        "Ornate Chestplate": {
            "slots": {
                "actual": 0,
                "max": 2
            },
            "image": "https://www.tibiawiki.com.br/images/d/de/Ornate_Chestplate.gif",
            "bonus": bonus_group_armor,
            "value-option": "ornate_chestplate"
        },
        "Paladin Armor": {
            "slots": {
                "actual": 0,
                "max": 2
            },
            "image": "https://www.tibiawiki.com.br/images/4/45/Paladin_Armor.gif",
            "bonus": bonus_group_armor,
            "value-option": "paladin_armor"
        },
        "Prismatic Armor": {
            "slots": {
                "actual": 0,
                "max": 2
            },
            "image": "https://www.tibiawiki.com.br/images/4/42/Prismatic_Armor.gif",
            "bonus": bonus_group_armor,
            "value-option": "prismatic_armor"
        },
    },
    "backpack": {
        "Anniversary Backpack": {
            "bonus": [bonus_type.featherweight],
            "image": "https://www.tibiawiki.com.br/images/5/5d/Anniversary_Backpack.gif",
            "value-option": "anniversary_bp"
        },
        "Backpack": {
            "bonus": [bonus_type.featherweight],
            "image": "https://www.tibiawiki.com.br/images/9/9a/Backpack.gif",
            "value-option": "bp"
        },
        "Red Backpack": {
            "bonus": [bonus_type.featherweight],
            "image": "https://www.tibiawiki.com.br/images/7/79/Red_Backpack.gif",
            "value-option": "red_bp"
        },
        "Purple Backpack": {
            "bonus": [bonus_type.featherweight],
            "image": "https://www.tibiawiki.com.br/images/1/17/Purple_Backpack.gif",
            "value-option": "purple_bp"
        },
        "Backpack of Holding": {
            "bonus": [bonus_type.featherweight],
            "image": "https://www.tibiawiki.com.br/images/4/47/Backpack_of_Holding.gif",
            "value-option": "backpack_of_holding"
        },
        "Beach Backpack": {
            "bonus": [bonus_type.featherweight],
            "image": "https://www.tibiawiki.com.br/images/2/20/Beach_Backpack.gif",
            "value-option": "beach_bp"
        },
        "Birthday Backpack": {
            "bonus": [bonus_type.featherweight],
            "image": "https://www.tibiawiki.com.br/images/9/94/Birthday_Backpack.gif",
            "value-option": "birthday_bp"
        },
        "Blue Backpack": {
            "bonus": [bonus_type.featherweight],
            "image": "https://www.tibiawiki.com.br/images/d/d7/Blue_Backpack.gif",
            "value-option": "blue_bp"
        },
        "Buggy Backpack": {
            "bonus": [bonus_type.featherweight],
            "image": "https://www.tibiawiki.com.br/images/6/6d/Buggy_Backpack.gif",
            "value-option": "buggy_bp"
        },
        "Book Backpack": {
            "bonus": [bonus_type.featherweight],
            "image": "https://www.tibiawiki.com.br/images/5/56/Book_Backpack.gif",
            "value-option": "buggy_bp"
        },
        "Brocade Backpack": {
            "bonus": [bonus_type.featherweight],
            "image": "https://www.tibiawiki.com.br/images/d/d8/Brocade_Backpack.gif",
            "value-option": "brocade_bp"
        },
        "Camouflage Backpack": {
            "bonus": [bonus_type.featherweight],
            "image": "https://www.tibiawiki.com.br/images/6/63/Camouflage_Backpack.gif",
            "value-option": "camouflage_bp"
        },
        "Cake Backpack": {
            "bonus": [bonus_type.featherweight],
            "image": "https://www.tibiawiki.com.br/images/4/4d/Cake_Backpack.gif",
            "value-option": "cake_bp"
        },
        "Crown Backpack": {
            "bonus": [bonus_type.featherweight],
            "image": "https://www.tibiawiki.com.br/images/1/13/Crown_Backpack.gif",
            "value-option": "crown_bp"
        },
        "Crystal Backpack": {
            "bonus": [bonus_type.featherweight],
            "image": "https://www.tibiawiki.com.br/images/f/f4/Crystal_Backpack.gif",
            "value-option": "crystal_bp"
        },
        "Demon Backpack": {
            "bonus": [bonus_type.featherweight],
            "image": "https://www.tibiawiki.com.br/images/6/66/Demon_Backpack.gif",
            "value-option": "demon_bp"
        },
        "Deepling Backpack": {
            "bonus": [bonus_type.featherweight],
            "image": "https://www.tibiawiki.com.br/images/c/c1/Deepling_Backpack.gif",
            "value-option": "deepling_bp"
        },
        "Dragon Backpack": {
            "bonus": [bonus_type.featherweight],
            "image": "https://www.tibiawiki.com.br/images/f/f0/Dragon_Backpack.gif",
            "value-option": "dragon_bp"
        },
        "Energetic Backpack": {
            "bonus": [bonus_type.featherweight],
            "image": "https://www.tibiawiki.com.br/images/5/52/Energetic_Backpack.gif",
            "value-option": "energetic_bp"
        },
        "Expedition Backpack": {
            "bonus": [bonus_type.featherweight],
            "image": "https://www.tibiawiki.com.br/images/f/ff/Expedition_Backpack.gif",
            "value-option": "expedition_bp"
        },
        "Feedbag": {
            "bonus": [bonus_type.featherweight],
            "image": "https://www.tibiawiki.com.br/images/2/28/Feedbag.gif",
            "value-option": "feedbag"
        },
        "Festive Backpack": {
            "bonus": [bonus_type.featherweight],
            "image": "https://www.tibiawiki.com.br/images/a/ad/Festive_Backpack.gif",
            "value-option": "festive_bp"
        },
        "Fur Backpack": {
            "bonus": [bonus_type.featherweight],
            "image": "https://www.tibiawiki.com.br/images/c/cc/Fur_Backpack.gif",
            "value-option": "fur_bp"
        },
        "Glooth Backpack": {
            "bonus": [bonus_type.featherweight],
            "image": "https://www.tibiawiki.com.br/images/a/a1/Glooth_Backpack.gif",
            "value-option": "glooth_bp"
        },
        "Golden Backpack": {
            "bonus": [bonus_type.featherweight],
            "image": "https://www.tibiawiki.com.br/images/1/1e/Golden_Backpack.gif",
            "value-option": "golden_bp"
        },
        "Green Backpack": {
            "bonus": [bonus_type.featherweight],
            "image": "https://www.tibiawiki.com.br/images/c/c6/Green_Backpack.gif",
            "value-option": "green_bp"
        },
        "Grey Backpack": {
            "bonus": [bonus_type.featherweight],
            "image": "https://www.tibiawiki.com.br/images/6/6d/Grey_Backpack.gif",
            "value-option": "grey_bp"
        },
        "Heart Backpack": {
            "bonus": [bonus_type.featherweight],
            "image": "https://www.tibiawiki.com.br/images/c/c5/Heart_Backpack.gif",
            "value-option": "heart_bp"
        },
        "Jewelled Backpack": {
            "bonus": [bonus_type.featherweight],
            "image": "https://www.tibiawiki.com.br/images/1/1f/Jewelled_Backpack.gif",
            "value-option": "jewelled_bp"
        },
        "Minotaur Backpack": {
            "bonus": [bonus_type.featherweight],
            "image": "https://www.tibiawiki.com.br/images/b/b8/Minotaur_Backpack.gif",
            "value-option": "minotaur_bp"
        },
        "Moon Backpack": {
            "bonus": [bonus_type.featherweight],
            "image": "https://www.tibiawiki.com.br/images/3/31/Moon_Backpack.gif",
            "value-option": "moon_bp"
        },
        "Mushroom Backpack": {
            "bonus": [bonus_type.featherweight],
            "image": "https://www.tibiawiki.com.br/images/e/e3/Mushroom_Backpack.gif",
            "value-option": "mushroom_bp"
        },
        "Orange Backpack": {
            "bonus": [bonus_type.featherweight],
            "image": "https://www.tibiawiki.com.br/images/5/53/Orange_Backpack.gif",
            "value-option": "orange_bp"
        },
        "Pannier Backpack": {
            "bonus": [bonus_type.featherweight],
            "image": "https://www.tibiawiki.com.br/images/0/03/Pannier_Backpack.gif",
            "value-option": "pannier_bp"
        },
        "Pillow Backpack": {
            "bonus": [bonus_type.featherweight],
            "image": "https://www.tibiawiki.com.br/images/e/e6/Pillow_Backpack.gif",
            "value-option": "pillow_bp"
        },
        "Pirate Backpack": {
            "bonus": [bonus_type.featherweight],
            "image": "https://www.tibiawiki.com.br/images/d/db/Pirate_Backpack.gif",
            "value-option": "pirate_bp"
        },
        "Santa Backpack": {
            "bonus": [bonus_type.featherweight],
            "image": "https://www.tibiawiki.com.br/images/d/d9/Santa_Backpack.gif",
            "value-option": "santa_bp"
        },
        "Wolf Backpack": {
            "bonus": [bonus_type.featherweight],
            "image": "https://www.tibiawiki.com.br/images/7/74/Wolf_Backpack.gif",
            "value-option": "wolf_bp"
        },
        "Old and Used Backpack": {
            "bonus": [bonus_type.featherweight],
            "image": "https://www.tibiawiki.com.br/images/e/e7/Old_and_Used_Backpack.gif",
            "value-option": "old_and_used_bp"
        },
    },
    "boots": {
        "Badger Boots": {
            "bonus": [bonus_type.swiftness, bonus_type.vibrancy],
            "image": "",
            "value-option": "abadger_boots"
        },
        "Boots of Haste": {
            "bonus": [bonus_type.swiftness, bonus_type.vibrancy],
            "image": "",
            "value-option": "boots_of_haste"
        },
        "Bunnyslippers": {
            "bonus": [bonus_type.swiftness, bonus_type.vibrancy],
            "image": "",
            "value-option": "bunnyslipers"
        },
        "Coconut Shoes": {
            "bonus": [bonus_type.swiftness, bonus_type.vibrancy],
            "image": "",
            "value-option": "coconut_shoes"
        },
        "Crocodile Boots": {
            "bonus": [bonus_type.swiftness, bonus_type.vibrancy],
            "image": "",
            "value-option": "crocodile_boots"
        },
        "Crystal Boots": {
            "bonus": [bonus_type.swiftness, bonus_type.vibrancy],
            "image": "",
            "value-option": "crystal_boots"
        },
        "Depth Calcei": {
            "bonus": [bonus_type.swiftness, bonus_type.vibrancy],
            "image": "",
            "value-option": "depth_calcei"
        },
        "Dragon Scale Boots": {
            "bonus": [bonus_type.swiftness, bonus_type.vibrancy],
            "image": "",
            "value-option": "dragon_scale_boots"
        },
        "Draken Boots": {
            "bonus": [bonus_type.swiftness, bonus_type.vibrancy],
            "image": "",
            "value-option": "draken_boots"
        },
        "Fur Boots": {
            "bonus": [bonus_type.swiftness, bonus_type.vibrancy],
            "image": "",
            "value-option": "fur_boots"
        },
        "Glacier Shoes": {
            "bonus": [bonus_type.swiftness, bonus_type.vibrancy],
            "image": "",
            "value-option": "glacier_shoes"
        },
        "Golden Boots": {
            "bonus": [bonus_type.swiftness, bonus_type.vibrancy],
            "image": "",
            "value-option": "golden_boots"
        },
        "Guardian Boots": {
            "bonus": [bonus_type.swiftness, bonus_type.vibrancy],
            "image": "",
            "value-option": "guardian_boots"
        },
        "Leather Boots": {
            "bonus": [bonus_type.swiftness, bonus_type.vibrancy],
            "image": "",
            "value-option": "leather_boots"
        },
        "Lightning Boots": {
            "bonus": [bonus_type.swiftness, bonus_type.vibrancy],
            "image": "",
            "value-option": "lightning_boots"
        },
        "Magma Boots": {
            "bonus": [bonus_type.swiftness, bonus_type.vibrancy],
            "image": "",
            "value-option": "magma_boots"
        },
        "Metal Spats": {
            "bonus": [bonus_type.swiftness, bonus_type.vibrancy],
            "image": "",
            "value-option": "metal_spats"
        },
        "Oriental Shoes": {
            "bonus": [bonus_type.swiftness, bonus_type.vibrancy],
            "image": "",
            "value-option": "oriental_shoes"
        },
        "Pair of Dreamwalkers": {
            "bonus": [bonus_type.swiftness, bonus_type.vibrancy],
            "image": "",
            "value-option": "pair_of_dreamwalkers"
        },
        "Patched Boots": {
            "bonus": [bonus_type.swiftness, bonus_type.vibrancy],
            "image": "",
            "value-option": "patched_boots"
        },
        "Pirate Boots": {
            "bonus": [bonus_type.swiftness, bonus_type.vibrancy],
            "image": "",
            "value-option": "pirate_boots"
        },
        "Prismatic Boots": {
            "bonus": [bonus_type.swiftness, bonus_type.vibrancy],
            "image": "",
            "value-option": "prismatic_boots"
        },
        "Sandals": {
            "bonus": [bonus_type.swiftness, bonus_type.vibrancy],
            "image": "",
            "value-option": "sandals"
        },
        "Steel Boots": {
            "bonus": [bonus_type.swiftness, bonus_type.vibrancy],
            "image": "",
            "value-option": "steel_boots"
        },
        "Terra Boots": {
            "bonus": [bonus_type.swiftness, bonus_type.vibrancy],
            "image": "",
            "value-option": "terra_boots"
        },
        "Treader of Torment": {
            "bonus": [bonus_type.swiftness, bonus_type.vibrancy],
            "image": "",
            "value-option": "treader_of_torment"
        },
        "Vampire Silk Slippers": {
            "bonus": [bonus_type.swiftness, bonus_type.vibrancy],
            "image": "",
            "value-option": "vampire_silk_slippers"
        },
        "Zaoan Shoes": {
            "bonus": [bonus_type.swiftness, bonus_type.vibrancy],
            "image": "",
            "value-option": "zaoan_shoes"
        },
    },
    "helmet": {
        "Amazon Helmet": {
            "bonus": bonus_group_helmet,
            "image": "",
            "value-option": "amazon_helmet"
        },
        "Ancient Tiara": {
            "bonus": bonus_group_helmet,
            "image": "",
            "value-option": "ancient_tiara"
        },
        "Batwing Hat": {
            "bonus": bonus_group_helmet,
            "image": "",
            "value-option": "batwing_hat"
        },
        "Bonelord Helmet": {
            "bonus": bonus_group_helmet,
            "image": "",
            "value-option": "bonelord_helmet"
        },
        "Crown Helmet": {
            "bonus": bonus_group_helmet,
            "image": "",
            "value-option": "crown_helmet"
        },
        "Crusader Helmet": {
            "bonus": bonus_group_helmet,
            "image": "",
            "value-option": "crusader_helmet"
        },
        "Dark Whispers": {
            "bonus": bonus_group_helmet,
            "image": "",
            "value-option": "dark_whispers"
        },
        "Demon Helmet": {
            "bonus": bonus_group_helmet,
            "image": "",
            "value-option": "demon_helmet"
        },
        "Dwarven Helmet": {
            "bonus": bonus_group_helmet,
            "image": "",
            "value-option": "dwarven_helmet"
        },
        "Elite Draken Helmet": {
            "bonus": bonus_group_helmet,
            "image": "",
            "value-option": "elite_draken_helmet"
        },
        "Falcon Circlet": {
            "bonus": bonus_group_helmet,
            "image": "",
            "value-option": "falcon_circlet"
        },
        "Falcon Coif": {
            "bonus": bonus_group_helmet,
            "image": "",
            "value-option": "falcon_coif"
        },
        "Fur Cap": {
            "bonus": bonus_group_helmet,
            "image": "",
            "value-option": "fur_cap"
        },
        "Gnome Helmet": {
            "bonus": bonus_group_helmet,
            "image": "",
            "value-option": "gnome_helmet"
        },
        "Golden Helmet": {
            "bonus": bonus_group_helmet,
            "image": "",
            "value-option": "golden_helmet"
        },
        "Hat of the Mad": {
            "bonus": bonus_group_helmet,
            "image": "",
            "value-option": "hat_of_the_mad"
        },
        "Helmet of Nature": {
            "bonus": bonus_group_helmet,
            "image": "",
            "value-option": "helmet_of_nature"
        },
        "Helmet of The Lost": {
            "bonus": bonus_group_helmet,
            "image": "",
            "value-option": "helmet_of_the_lost"
        },
        "Helmet of Ultimate Terror": {
            "bonus": bonus_group_helmet,
            "image": "",
            "value-option": "helmet_of_ultimate_terror"
        },
        "Jade Hat": {
            "bonus": bonus_group_helmet,
            "image": "",
            "value-option": "jade_hat"
        },
        "Mage Hat": {
            "bonus": bonus_group_helmet,
            "image": "",
            "value-option": "mage_hat"
        },
        "Magician Hat": {
            "bonus": bonus_group_helmet,
            "image": "",
            "value-option": "magician_hat"
        },
        "Odd Hat": {
            "bonus": bonus_group_helmet,
            "image": "",
            "value-option": "odd_hat"
        },
        "Royal Helmet": {
            "bonus": bonus_group_helmet,
            "image": "",
            "value-option": "royal_helmet"
        },
        "Shamanic Mask": {
            "bonus": bonus_group_helmet,
            "image": "",
            "value-option": "shamanic_mask"
        },
        "Skull Helmet": {
            "bonus": bonus_group_helmet,
            "image": "",
            "value-option": "skull_helmet"
        },
        "Visage of the End Days": {
            "bonus": bonus_group_helmet,
            "image": "",
            "value-option": "visage_of_the_end_days"
        },
        "Warrior Helmet": {
            "bonus": bonus_group_helmet,
            "image": "",
            "value-option": "warrior_helmet"
        },
        "Witch Hat": {
            "bonus": bonus_group_helmet,
            "image": "",
            "value-option": "witch_hat"
        },
        "Yalahari Mask": {
            "bonus": bonus_group_helmet,
            "image": "",
            "value-option": "yalahari_mask"
        },
        "Zaoan Helmet": {
            "bonus": bonus_group_helmet,
            "image": "",
            "value-option": "zaoan_helmet"
        },
    },
    "club": {
        "Abyss Hammer": {
            "bonus": bonus_group_weapon,
            "image": "",
            "value-option": "abyss_hammer"
        },
        "Amber Staff": {
            "bonus": bonus_group_weapon,
            "image": "",
            "value-option": "amber_staff"
        },
        "Arcane Staff": {
            "bonus": bonus_group_weapon,
            "image": "",
            "value-option": "arcane_staff"
        },
        "Blessed Sceptre": {
            "bonus": bonus_group_weapon,
            "image": "",
            "value-option": "blessed_sceptre"
        },
        "Clerical Mace": {
            "bonus": bonus_group_weapon,
            "image": "",
            "value-option": "clerical_mace"
        },
        "Deepling Squelcher": {
            "bonus": bonus_group_weapon,
            "image": "",
            "value-option": "deepling_squelcher"
        },
        "Demonbone": {
            "bonus": bonus_group_weapon,
            "image": "",
            "value-option": "demonbone"
        },
        "Dragonbone Staff": {
            "bonus": bonus_group_weapon,
            "image": "",
            "value-option": "dragonbone_staff"
        },
        "Falcon Mace": {
            "bonus": bonus_group_weapon,
            "image": "",
            "value-option": "falcon_mace"
        },
        "Glooth Whip": {
            "bonus": bonus_group_weapon,
            "image": "",
            "value-option": "glooth_whip"
        },
        "Hammer of Wrath": {
            "bonus": bonus_group_weapon,
            "image": "",
            "value-option": "hammer_of_wrath"
        },
        "Heavy Mace": {
            "bonus": bonus_group_weapon,
            "image": "",
            "value-option": "heavy_mace"
        },
        "Life Preserver": {
            "bonus": bonus_group_weapon,
            "image": "",
            "value-option": "life_preserver"
        },
        "Lunar Staff": {
            "bonus": bonus_group_weapon,
            "image": "",
            "value-option": "lunar_staff"
        },
        "Mace of Destruction": {
            "bonus": bonus_group_weapon,
            "image": "",
            "value-option": "mace_of_destruction"
        },
        "Maimer": {
            "bonus": bonus_group_weapon,
            "image": "",
            "value-option": "maimer"
        },
        "Mycological Mace": {
            "bonus": bonus_group_weapon,
            "image": "",
            "value-option": "mycological_mace"
        },
        "Obsidian Truncheon": {
            "bonus": bonus_group_weapon,
            "image": "",
            "value-option": "obsidian_truncheon"
        },
        "Onyx Flail": {
            "bonus": bonus_group_weapon,
            "image": "",
            "value-option": "onyx_flail"
        },
        "Orcish Maul": {
            "bonus": bonus_group_weapon,
            "image": "",
            "value-option": "orcish_maul"
        },
        "Ornate Mace": {
            "bonus": bonus_group_weapon,
            "image": "",
            "value-option": "ornate_mace"
        },
        "Queen's Sceptre": {
            "bonus": bonus_group_weapon,
            "image": "",
            "value-option": "queens_sceptre"
        },
        "Resizer": {
            "bonus": bonus_group_weapon,
            "image": "",
            "value-option": "resizer"
        },
        "Sapphire Hammer": {
            "bonus": bonus_group_weapon,
            "image": "",
            "value-option": "sapphire_hammer"
        },
        "Shadow Sceptre": {
            "bonus": bonus_group_weapon,
            "image": "",
            "value-option": "shadow_sceptre"
        },
        "Silver Mace": {
            "bonus": bonus_group_weapon,
            "image": "",
            "value-option": "silver_mace"
        },
        "Skull Staff": {
            "bonus": bonus_group_weapon,
            "image": "",
            "value-option": "skull_staff"
        },
        "Skullcrusher": {
            "bonus": bonus_group_weapon,
            "image": "",
            "value-option": "skullcrusher"
        },
        "Snake God's Sceptre": {
            "bonus": bonus_group_weapon,
            "image": "",
            "value-option": "snake_gods_sceptre"
        },
        "Spiked Squelcher": {
            "bonus": bonus_group_weapon,
            "image": "",
            "value-option": "spiked_squelcher"
        },
        "The Stomper": {
            "bonus": bonus_group_weapon,
            "image": "",
            "value-option": "the_stomper"
        },
        "Thunder Hammer": {
            "bonus": bonus_group_weapon,
            "image": "",
            "value-option": "thunder_hammer"
        },
        "Umbral Hammer": {
            "bonus": bonus_group_weapon,
            "image": "",
            "value-option": "umbral_hammer"
        },
        "Umbral Mace": {
            "bonus": bonus_group_weapon,
            "image": "",
            "value-option": "umbral_mace"
        },
        "Umbral Master Hammer": {
            "bonus": bonus_group_weapon,
            "image": "",
            "value-option": "umbral_master_hammer"
        },
        "Umbral Master Mace": {
            "bonus": bonus_group_weapon,
            "image": "",
            "value-option": "umbral_master_mace"
        },
        "War Hammer": {
            "bonus": bonus_group_weapon,
            "image": "",
            "value-option": "war_hammer"
        },
    },
    "distance": {
    },
    "shield": {
        "Amazon Shield": {
            "bonus": bonus_group_armor,
            "image": "",
            "value-option": "amazon_shield"
        },
        "Bonelord Shield": {
            "bonus": bonus_group_armor,
            "image": "",
            "value-option": "bonelord_shield"
        },
        "Carapace Shield": {
            "bonus": bonus_group_armor,
            "image": "",
            "value-option": "carapace_shield"
        },
        "Castle Shield": {
            "bonus": bonus_group_armor,
            "image": "",
            "value-option": "castle_shield"
        },
        "Crown Shield": {
            "bonus": bonus_group_armor,
            "image": "",
            "value-option": "crown_shield"
        },
        "Death Gaze": {
            "bonus": bonus_group_armor,
            "image": "",
            "value-option": "death_gaze"
        },
        "Demon Shield": {
            "bonus": bonus_group_armor,
            "image": "",
            "value-option": "demon_shield"
        },
        "Dragon Shield": {
            "bonus": bonus_group_armor,
            "image": "",
            "value-option": "dragon_sheidl"
        },
        "Ectoplasmic Shield": {
            "bonus": bonus_group_armor,
            "image": "",
            "value-option": "ectoplasmic_shield"
        },
        "Falcon Escutcheon": {
            "bonus": bonus_group_armor,
            "image": "",
            "value-option": "falcon_escutcheon"
        },
        "Falcon Shield": {
            "bonus": bonus_group_armor,
            "image": "",
            "value-option": "falcon_shield"
        },
        "Gnome Shield": {
            "bonus": bonus_group_armor,
            "image": "",
            "value-option": "gnome_shield"
        },
        "Great Shield": {
            "bonus": bonus_group_armor,
            "image": "",
            "value-option": "great_shield"
        },
        "Griffin Shield": {
            "bonus": bonus_group_armor,
            "image": "",
            "value-option": "griffin_shield"
        },
        "Haunted Mirror Piece": {
            "bonus": bonus_group_armor,
            "image": "",
            "value-option": "haunted_mirror_piece"
        },
        "Mastermind Shield": {
            "bonus": bonus_group_armor,
            "image": "",
            "value-option": "mastermind_shield"
        },
        "Meat Shield": {
            "bonus": bonus_group_armor,
            "image": "",
            "value-option": "meat_shield"
        },
        "Medusa Shield": {
            "bonus": bonus_group_armor,
            "image": "",
            "value-option": "medusa_shield"
        },
        "Necromancer Shield": {
            "bonus": bonus_group_armor,
            "image": "",
            "value-option": "necromancer_shield"
        },
        "Nightmare Shield": {
            "bonus": bonus_group_armor,
            "image": "",
            "value-option": "nightmare_shield"
        },
        "Norse Shield": {
            "bonus": bonus_group_armor,
            "image": "",
            "value-option": "norse_shield"
        },
        "Ornamented Shield": {
            "bonus": bonus_group_armor,
            "image": "",
            "value-option": "ornamented_shield"
        },
        "Ornate Shield": {
            "bonus": bonus_group_armor,
            "image": "",
            "value-option": "ornate_shield"
        },
        "Phoenix Shield": {
            "bonus": bonus_group_armor,
            "image": "",
            "value-option": "phoenix_shield"
        },
        "Rift Shield": {
            "bonus": bonus_group_armor,
            "image": "",
            "value-option": "rift_shield"
        },
        "Runic Ice Shield": {
            "bonus": bonus_group_armor,
            "image": "",
            "value-option": "runic_ice_shield"
        },
        "Sentinel Shield": {
            "bonus": bonus_group_armor,
            "image": "",
            "value-option": "sentinel_shield"
        },
        "Shield of Care": {
            "bonus": bonus_group_armor,
            "image": "",
            "value-option": "shield_of_care"
        },
        "Shield of Corruption": {
            "bonus": bonus_group_armor,
            "image": "",
            "value-option": "shield_of_corruption"
        },
        "Shield of the White Knight": {
            "bonus": bonus_group_armor,
            "image": "",
            "value-option": "shield_of_the_white_knight"
        },
        "Steel Shield": {
            "bonus": bonus_group_armor,
            "image": "",
            "value-option": "steel_shield"
        },
        "Tempest Shield": {
            "bonus": bonus_group_armor,
            "image": "",
            "value-option": "tempest_shield"
        },
        "Tower Shield": {
            "bonus": bonus_group_armor,
            "image": "",
            "value-option": "tower_shield"
        },
        "Vampire Shield": {
            "bonus": bonus_group_armor,
            "image": "",
            "value-option": "vampire_shield"
        },
        "Viking Shield": {
            "bonus": bonus_group_armor,
            "image": "",
            "value-option": "viking_shield"
        },
        "Warrior's Shield": {
            "bonus": bonus_group_armor,
            "image": "",
            "value-option": "warriors_shield"
        },
    },
    "sword": {
        "Assassin Dagger": {
            "value-option": "assassin_dagger"
        },
        "Berserker": {
            "value-option": "berserker"
        },
        "Blacksteel Sword": {
            "value-option": "Blade of Corruption"
        },
        "Blade of Corruption": {
            "value-option": "blade_of_corruption"
        },
        "Blade of Destruction": {
            "value-option": "blade_of_destruction"
        },
        "Bloody Edge": {
            "value-option": "bloody_edge"
        },
        "Bright Sword": {
            "value-option": "bright_sword"
        },
        "Broadsword": {
            "value-option": "broadsword"
        },
        "Warrior's Shield": {
            "value-option": "warriors_shield"
        },
    },
    "axe": {
    },
    "spellbook": {
        "Book of Lies": {
            "value-option": "book_of_lies"
        },
        "Brain in a Jar": {
            "value-option": "brain_in_a_jar"
        },
        "Depth Scutum": {
            "value-option": "depth_scutum"
        },
        "Shoulder Plate": {
            "value-option": "shoulder_plate"
        },
        "Spellbook": {
            "value-option": "spellbook"
        },
        "Spellbook of Enlightment": {
            "value-option": "spellbook_of_enlightment"
        },
        "Spellbook of Warding": {
            "value-option": "spellbook_of_warding"
        },
        "Spirit Guide": {
            "value-option": "spirit_guide"
        },
        "Umbral Master Spellbook": {
            "value-option": "umbral_master_spellbook"
        },
        "Umbral Spellbook": {
            "value-option": "umbral_spellbook"
        },
        "Wooden Spellbook": {
            "value-option": "wooden_spellbook"
        },
    },
    "wandRod": {
    }
}


var current_item = {
    "categoria": "none",
    "itemProp": "",
    "imbueType": "basic",
    "protectionMoney": 10000,
    "protectClick": false,
    "imbueMoney": 5000,
    "totalMoney": 15000,
    "bonusSelected": "none",
};

/*Função que verifica se está selecionada uma categoria válida, se sim chama a função para exibir os itens
da respectiva categoria.*/
function categoriaChange() {
    const categoria_select = document.getElementById("categoria_select");
    var item_select = document.getElementById("item_select");
    current_item.categoria = categoria_select.value;
    removeBonusSelected();
    removeItemSelected();


    if (current_item.categoria != "none") {
        item_select.disabled = false;
        showOptionItens();
    }
    else {
        item_select.disabled = true;
        removeOptions(item_select);
        removeAllElementsDiv(document.getElementById("divBonus"));
        document.getElementById("msgSelectBonus").style.visibility = "hidden";
    }
}

//Função que adiciona os itens (no select), de acordo com a categoria
function showOptionItens() {
    var item_select = document.getElementById("item_select");

    removeOptions(item_select);

    //popula novamente o select de item
    var itens_categoria = item_imbuing[current_item.categoria];
    for (var key of Object.keys(itens_categoria)) {
        var option = document.createElement("option");
        option.text = key;
        option.value = itens_categoria[key]["value-option"];
        item_select.add(option);
    }
    changeItem();
}


function changeItem() {
    const item_select = document.getElementById("item_select");
    const opt_item_select = item_select.options[item_select.selectedIndex];
    const itemImg = document.getElementById("itemImg");
    current_item.itemProp = item_imbuing[current_item.categoria][opt_item_select.text];
    itemImg.style.backgroundImage = "url(" + current_item.itemProp.image + ")";
    showItemDetails();
    showBonusImbue();
}

function bonusRadioChange(imbueValue) {

    current_item.imbueType = imbueValue;
    switch (current_item.imbueType) {
        case 'basic': {
            current_item.protectionMoney = 10000;
            current_item.imbueMoney = 5000;
            current_item.totalMoney = getTotalMoney();
            break;
        }
        case 'intricate': {
            current_item.protectionMoney = 30000;
            current_item.imbueMoney = 25000;
            current_item.totalMoney = getTotalMoney();
            break;
        }
        case 'powerful': {
            current_item.protectionMoney = 50000;
            current_item.imbueMoney = 100000;
            current_item.totalMoney = getTotalMoney();
            break;
        }

    }
    document.getElementById("protectMoney").textContent = current_item.protectionMoney.toLocaleString();
    document.getElementById("imbueMoney").textContent = current_item.imbueMoney.toLocaleString();
    document.getElementById("totalMoney").textContent = current_item.totalMoney.toLocaleString();

    showBonusImbue();
}

function showBonusImbue() {
    removeBonusSelected();
    var divBonus = document.getElementById("divBonus");
    var bonus = current_item.itemProp.bonus;
    removeAllElementsDiv(divBonus);

    if (bonus) {
        document.getElementById("msgSelectBonus").style.visibility = "visible";

    }
    for (var i in bonus) {
        var div_block = document.createElement("div");
        var div_inner_block = document.createElement("div");
        var p = document.createElement("p");

        //adicionando texto do bonus
        p.textContent = bonus[i].imbue_type[current_item.imbueType]["bonus-value"] + bonus[i]["bonus-msg-small"];
        //adicionando imagem
        div_inner_block.style.backgroundImage = "url(" + urlImgImbue + ")";
        div_inner_block.style.backgroundPosition = bonus[i].imbue_type[current_item.imbueType].imageImbue + "px 0";
        div_inner_block.style.backgroundSize = "auto 100%";


        //add divs e p
        div_block.onclick = function () { bonus_selected(this) }
        div_block.dataset.type = bonus[i].name;
        div_block.appendChild(div_inner_block);
        div_block.appendChild(p);
        div_block.classList.add("block");
        div_block.title = bonus[i]["bonus-title"];
        divBonus.appendChild(div_block);
    }

}

function bonus_selected(element) {
    removeBonusSelected();
    var chieldrens = document.getElementsByClassName("selected");
    Array.prototype.slice.call(chieldrens).forEach(function (element) {
        element.classList.remove("selected");
    });
    element.classList.add("selected");
    current_item.bonusSelected = bonus_type[element.dataset.type];

    showBonusDetails();
    showItensForImbue();
}

function showItensForImbue() {
    //itens necessarios para imbuir
    var itemForImbue1 = document.getElementById("item1");
    var itemForImbue2 = document.getElementById("item2");
    var itemForImbue3 = document.getElementById("item3");
    //quantidade dos items
    var quantItemForImbue1 = document.getElementById("quant_item1");
    var quantItemForImbue2 = document.getElementById("quant_item2");
    var quantItemForImbue3 = document.getElementById("quant_item3");

    var tdItem1 = document.getElementById("tdItem1");
    var tdItem2 = document.getElementById("tdItem2");
    var tdItem3 = document.getElementById("tdItem3");

    switch (current_item.imbueType) {
        case 'basic': {
            putNewFatherTagAnchor(tdItem1, itemForImbue1, "basic");
            itemForImbue1.style.backgroundImage = "url(" + current_item.bonusSelected.imbue_type.basic.image + ")";
            quantItemForImbue1.textContent = current_item.bonusSelected.imbue_type.basic.amount;
            itemForImbue2.style.backgroundImage = "none";
            quantItemForImbue2.textContent = "0";
            itemForImbue3.style.backgroundImage = "none";
            quantItemForImbue3.textContent = "0";
            break;
        }
        case 'intricate': {
            putNewFatherTagAnchor(tdItem1, itemForImbue1, "basic");
            putNewFatherTagAnchor(tdItem2, itemForImbue2, "intricate");
            itemForImbue1.style.backgroundImage = "url(" + current_item.bonusSelected.imbue_type.basic.image + ")";
            quantItemForImbue1.textContent = current_item.bonusSelected.imbue_type.basic.amount;
            itemForImbue2.style.backgroundImage = "url(" + current_item.bonusSelected.imbue_type.intricate.image + ")";
            quantItemForImbue2.textContent = current_item.bonusSelected.imbue_type.intricate.amount;
            itemForImbue3.style.backgroundImage = "none";
            quantItemForImbue3.textContent = "0";
            break;
        }
        case 'powerful': {
            putNewFatherTagAnchor(tdItem1, itemForImbue1, "basic");
            putNewFatherTagAnchor(tdItem2, itemForImbue2, "intricate");
            putNewFatherTagAnchor(tdItem3, itemForImbue3, "powerful");
            itemForImbue1.style.backgroundImage = "url(" + current_item.bonusSelected.imbue_type.basic.image + ")";
            quantItemForImbue1.textContent = current_item.bonusSelected.imbue_type.basic.amount;
            itemForImbue2.style.backgroundImage = "url(" + current_item.bonusSelected.imbue_type.intricate.image + ")";
            quantItemForImbue2.textContent = current_item.bonusSelected.imbue_type.intricate.amount;
            itemForImbue3.style.backgroundImage = "url(" + current_item.bonusSelected.imbue_type.powerful.image + ")";
            quantItemForImbue3.textContent = current_item.bonusSelected.imbue_type.powerful.amount;
            break;
        }
    }
}

//remove as opções (<option></option>) de um select qualquer (<select></select>)
function removeOptions(selectbox) {
    var i;
    for (i = selectbox.options.length - 1; i >= 0; i--) {
        selectbox.remove(i);
    }
}

function removeAllElementsDiv(div) {
    while (div.firstChild) {
        div.removeChild(div.firstChild);
    }
}

function loadBody() {
    bonusRadioChange(current_item.imbueType);
}

function protectionClick() {
    var protect = document.getElementsByClassName("protectionCharm")[0];
    current_item.protectClick = !current_item.protectClick;
    document.getElementById("totalMoney").textContent = getTotalMoney().toLocaleString();
    if (current_item.protectClick) {
        protect.style.backgroundColor = "red";
        protect.style.color = "white";
    } else {
        protect.style.backgroundColor = "white";
        protect.style.color = "black";
    }
}

function getTotalMoney() {
    return current_item.protectClick ? current_item.protectionMoney + current_item.imbueMoney : current_item.imbueMoney; q
}

function putNewFatherTagAnchor(oldfather, oldChild, imbueType) {
    var a = document.createElement("a");
    a.href = current_item.bonusSelected.imbue_type[imbueType]["link-tibiaWiki"];
    a.target = "_blank";
    oldChild.title = current_item.bonusSelected.imbue_type[imbueType].title;
    oldfather.replaceChild(a, oldChild);
    a.appendChild(oldChild);
}


function removeBonusSelected() {
    current_item.bonusSelected = "none";
    removeElementsByClass("list-group-item-dark");
    var item1 = document.getElementById("item1");
    var item2 = document.getElementById("item2")
    var item3 = document.getElementById("item3")
    var quantItem1 = document.getElementById("quant_item1")
    var quantItem2 = document.getElementById("quant_item2")
    var quantItem3 = document.getElementById("quant_item3")
    var tdItem1 = document.getElementById("tdItem1")
    var tdItem2 = document.getElementById("tdItem2")
    var tdItem3 = document.getElementById("tdItem3")

    if (tdItem1.children[0].childElementCount > 0) {
        tdItem1.replaceChild(item1, tdItem1.children[0]);
    }
    if (tdItem2.children[0].childElementCount > 0) {
        tdItem2.replaceChild(item2, tdItem2.children[0]);
    }
    if (tdItem3.children[0].childElementCount > 0) {
        tdItem3.replaceChild(item3, tdItem3.children[0]);
    }
    item1.style.backgroundImage = "none";
    item1.title = "";
    item2.style.backgroundImage = "none";
    item2.title = "";
    item3.style.backgroundImage = "none";
    item3.title = "";
    quantItem1.textContent = "0";
    quantItem2.textContent = "0";
    quantItem3.textContent = "0";

}

function appendListItem(text, isItem) {
    var li = document.createElement("LI");                 // Create a <li> node
    text = stringUppercase(text);
    var textnode = document.createTextNode(text);         // Create a text node
    var list = document.getElementById("detailsList");
    if (isItem) {
        li.classList.add("list-group-item", "list-group-item-primary");
    } else {
        li.classList.add("list-group-item", "list-group-item-dark");
    }
    li.appendChild(textnode); // Append the text to <li>
    list.appendChild(li);
}

function removeElementsByClass(className) {
    var elements = document.getElementsByClassName(className);
    while (elements.length > 0) {
        elements[0].parentNode.removeChild(elements[0]);
    }
}

function showItemDetails() {
    removeElementsByClass("list-group-item-primary");

    var textSlot = "Slots: " + current_item.itemProp.slots.max;

    appendListItem(textSlot, true);

    if (current_item.itemProp.details) {
        current_item.itemProp.details.forEach((value) => {
            Object.entries(value).forEach((value) => {
                var text = value[0] + ": ";
                text += value[1];
                appendListItem(text, true);
            });
        })
    }
}

function showBonusDetails() {
    var text = current_item.bonusSelected["bonus-title"];
    text += " em ";
    text += current_item.bonusSelected.imbue_type[current_item.imbueType]["bonus-value"]
    text += current_item.bonusSelected["bonus-msg-small"].charAt(0);
    appendListItem(text, false);
}

function stringUppercase(text) {
    return text.charAt(0).toUpperCase() + text.slice(1); // put first letter uppercase
}

function removeItemSelected() {
    removeElementsByClass("list-group-item-primary");
    document.getElementById("itemImg").style = "background-image= none";
    current_item.itemProp = "";
}