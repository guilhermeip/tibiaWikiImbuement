const item_imbuing = {
    "armor": {
        "Albino Plate": {
            "value-option": "albino_plate",
            "image": "https://www.tibiawiki.com.br/wiki/Especial:Redirecionar/file/Albino_Plate.gif"
        },
        "Amazon Armor": {
            "value-option": "amazon_armor",
            "image": "https://www.tibiawiki.com.br/wiki/Especial:Redirecionar/file/Amazon_Armor.gif"
        },
        "Blue Robe": {
            "value-option": "blue_robe",
            "image": ""
        },
        "Chain Armor": {
            "value-option": "chain_armor",
            "image": ""
        },
        "Crown Armor": {
            "value-option": "crown_armor"
        },
        "Demon Armor": {
            "value-option": "demon_armor"
        },
        "Depth Lorica": {
            "value-option": "depth_lorica"
        },
        "Dragon Scale Mail": { 
            "value-option": "dragon_scale_mail"
        },
        "Dream Shroud": {
            "value-option":"dream_shroud"
        },
        "Dwarven Armor": {
            "value-option":"dwarven_armor"
        },
        "Elite Draken Mail": {
            "value-option":"elite_draken_mail"
        },
        "Elven Mail": {
            "value-option":"elven_mail"
        },
        "Falcon Plate": {
            "value-option":"falcon_plate"
        },
        "Gnome Armor": {
            "value-option":"gnome_armor"
        },
        "Golden Amor": {
            "value-option":"golden_armor"
        },
        "Heat Core": {
            "value-option": "heat_core"
        },
        "Heavy Metal T-Shirt": { 
            "value-option":"heavy_metal_t-shirt"
        },
        "Knight Armor": { 
            "value-option":"knight_armor"
        },
        "Leopard Armor": {
            "value-option":"leopard_armor"
        },
        "Living Armor": {
            "value-option":"living_armor"
        },
        "Magic Plate Armor": {
            "value-option": "magic_plate_armor"
        },
        "Mammoth Fur Cape": {
            "value-option":"mammoth_fur_cape"
        },
        "Master Archer's Armor": {
            "value-option":"master_archers_armor"
        },
        "Mooh'tah Plate": {
            "value-option":"moohtah_plate"
        },
        "Noble Armor": {
            "value-option":"noble_armor"
        },
        "Ornate Chestplate": {
            "value-option":"ornate_chestplate"
        },
        "Paladin Armor": {
            "value-option":"paladin_armor"
        },
        "Prismatic Armor": {
            "value-option":"prismatic_armor"
        }
    },
    "backpack": {
        "Anniversary Backpack": "anniversary_bp", "Backpack": "bp",
        "Backpack of Holding": "backpack_of_holding", "Beach Backpack": "beach_bp", "Birthday Backpack": "birthday_bp",
        "Buggy Backpack": "buggy_bp", "Book Backpack": "buggy_bp", "Brocade Backpack": "brocade_bp",
        "Camouflage Backpack": "camouflage_bp", "Cake Backpack": "cake_bp", "Crown Backpack": "crown_bp",
        "Crystal Backpack": "crystal_bp", "Demon Backpack": "demon_bp", "Deepling Backpack": "deepling_bp",
        "Dragon Backpack": "dragon_bp", "Energetic Backpack": "energetic_bp", "Expedition Backpack": "expedition_bp",
        "Feedbag": "feedbag", "Festive Backpack": "festive_bp", "Fur Backpack": "fur_bp", "Glooth Backpack": "glooth_bp",
        "Heart Backpack": "heart_bp", "Jewelled Backpack": "jewelled_bp", "Minotaur Backpack": "minotaur_bp",
        "Moon Backpack": "moon_bp", "Mushroom Backpack": "mushroom_bp", "Pannier Backpack": "pannier_bp",
        "Pillow Backpack": "pillow_bp", "Pirate Backpack": "pirate_bp", "Santa Backpack": "santa_bp",
        "Wolf Backpack": "wolf_bp", "Old and Used Backpack": "old_and_used_bp"
    },
    "boots": {},
    "helmet": {},
    "club": {},
    "distance": {},
    "shield": {},
    "sword": {},
    "axe": {},
    "spellbook": {},
    "wandRod": {}
}

const bonus_type = {
    "armor": {
        "Roubo de vida/Life Leech": "life_leech", "Redução dano Death/Death reduction": "death_reduction",
        "Redução dano Terra/Eath reduction": "earth_reduction", "Redução dano Fogo/Fire reduction": "fire_reduction",
        "Redução dano gelo/Ice reduction": "ice_reduction", "Redução dano energia/Energy reduction": "energy_reduction",
        "Redução dano sagrado/Holy reduction": "holy_reduction"
    },
    "backpack": { "Aumento de Capacidade/Capacity Increase": "capacity_increase" },
    "boots": { "Aumento de Velocidade/Speed Increase": "speed_increase" },
    "helmet": {
        "Roubo de mana/Mana Leech": "mana_leech", "Aumento/Upgrade Axe Fighting": "axe_upgrade", "Aumento/Upgrade Sword Fighting ": "sword_upgrade",
        "Aumento/Upgrade Club Fighting": "club_upgrade", "Aumento/Upgrade Distance Fighting": "distance_upgrade", "Aumento/Upgrade Shielding": "shield_upgrade",
        "Aumento/Upgrade Magic Level": "ml_upgrade"
    },
    "club": {},
    "distance": {},
    "shield": {},
    "sword": {},
    "axe": {},
    "spellbook": {},
    "wandRod": {}
}

var current_item = {};


/*Função que verifica se está selecionada uma categoria válida, se sim chama a função para exibir os itens
da respectiva categoria.*/

function categoriaChange() {
    const categoria_select = document.getElementById("categoria_select");
    var item_select = document.getElementById("item_select");
    var bonus_select = document.getElementById("bonus_select");

    if (categoria_select.value != "none") {
        item_select.disabled = false;
        showOptionItens(categoria_select.value);
    }
    else {
        item_select.disabled = true;
        removeOptions(item_select);
        removeOptions(bonus_select);
    }
}

//Função que adiciona os itens (no select), de acordo com a categoria
function showOptionItens(categoria) {
    var item_select = document.getElementById("item_select");
    var bonus_select = document.getElementById("bonus_select");

    removeOptions(item_select);
    removeOptions(bonus_select);

    //popula novamente o select de item
    var categoria_array = item_imbuing[categoria];
    for (var key of Object.keys(categoria_array)) {
        var option = document.createElement("option");
        option.text = key;
        option.value = categoria_array[key]["value-option"];
        item_select.add(option);
    }

    var bonus_type_array = bonus_type[categoria]
    for (var key of Object.keys(bonus_type_array)) {
        var option = document.createElement("option");
        option.text = key;
        option.value = bonus_type_array[key];
        bonus_select.add(option);
    }
}

function changeItem(){
    const categoria_select = document.getElementById("categoria_select");
    const item_select = document.getElementById("item_select");
    const opt_item_select = item_select.options[item_select.selectedIndex];
    const itemImg = document.getElementById("itemImg");
    current_item = item_imbuing[categoria_select.value][opt_item_select.text];

    itemImg.style = "background-image: url(" + current_item.image + ")"
}


//remove as opções (<option></option>) de um select qualquer (<select></select>)
function removeOptions(selectbox) {
    var i;
    for (i = selectbox.options.length - 1; i >= 0; i--) {
        selectbox.remove(i);
    }
}