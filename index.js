const item_imbuing = {
    "armor": { "Albino Plate": "albino_plate", "Amazon Armor": "amazon_armor", },
    "backpack": {},
    "helmet": {},
    "club": {},
    "distance": {},
    "shield": {},
    "sword": {},
    "axe": {},
    "spellbook": {},
    "wandRod": {}
}


/*Função que verifica se está selecionada uma categoria válida, se sim chama a função para exibir os itens
da respectiva categoria.*/

function categoriaChange() {
    const categoria_select = document.getElementById("categoria_select");
    var item_select = document.getElementById("item_select");
    if (categoria_select.value != "none") {
        item_select.disabled = false;
        showItens(categoria_select.value);
    }
    else {
        item_select.disabled = true;

    }
}

//Função que adiciona os itens (no select), de acordo com a categoria
function showItens(categoria) {
    var item_select = document.getElementById("item_select");
    
    removeOptions(item_select);

    //popula novamente o select de item
    for (var key of Object.keys(item_imbuing[categoria])) {
        var option = document.createElement("option");
        option.text = key;
        option.value = item_imbuing.armor[key];
        item_select.add(option);
    }
}


//remove as opções (<option></option>) de um select qualquer (<select></select>)
function removeOptions(selectbox) {
    var i;
    for (i = selectbox.options.length - 1; i >= 0; i--) {
        selectbox.remove(i);
    }
}