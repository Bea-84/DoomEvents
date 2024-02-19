export class item {
    constructor(name, price, units) {
        this.name = name;
        this.price = parseInt(price);
        this.units = parseInt(units);
    }
}

// Exercise 1. (2p)
export function queryDOM() {
    const resultArray = [];

    // Índice 0
    resultArray.push(document.getElementById(''));

    // Índice 1
    resultArray.push(document.querySelectorAll(''));

    // Índice 2
    resultArray.push(document.querySelectorAll(''));

    // Índice 3
    resultArray.push(document.querySelectorAll(''));

    // Índice 4
    const peachButton = document.querySelector('');
    resultArray.push(peachButton);

    return resultArray;
}


/* 
{
    name: ...,
    price: parseInt(price),
    units: parseInt(units)
}*/
// Exercise 2. (2p)
export function createCartElement(item) {
    // Crear elementos principal del DOM 
    const divPanel = document.createElement('div');

    // Añade la calse panel al div creado anteriormente
    divPanel.classList.add('panel');

    //Crea la cabecera H3 con el nombre del elemento


    //Crea un elemento span con el texto {units} piece for {price} €


    // Anidar elementos al div principal
  
    //Devolver div
    return divPanel;
}

// Exercise 3 (1p)
export function emptyCart() {
    //Obtener el elemento cartItems(carrito)

    // Obtener todos los elementos con una clase panel dentro del contenedor del carrito

    // Convertir la colección HTML (paneles) en un array para facilitar la iteración

    // Recorrer y eliminar cada elemento panel
  
}

// Exercise 4 (1p)
export function updateCartTotal() {
    var cartContainer = document.getElementById('cartItems');
    var panelItems = cartContainer.getElementsByClassName('panel');

    var totalPrice = 0;

    // Iterar sobre los elementos con clase panel
    for (var i = 0; i < panelItems.length; i++) {

        var labelText = panelItems[i].querySelector('.label').textContent;

        // Extraer la cantidad y el precio del texto utilizando expresiones regulares
        var match = labelText.match(/(\d+) piece.* for (\d+) €/);

        if (match && match.length === 3) {
            totalPrice += parseFloat(match[2]);
        }
    }

    //Se actualiza el total de la carta
    var totalPriceElement = document.getElementById('totalPrice');
    totalPriceElement.textContent = totalPrice.toFixed(0) + ' €';
}

// Exercise 5. (2p)
export function addToCart(itemAdded) {
    // Obtener el contenedor del carrito
    var cartContainer = document.getElementById('cartItems');

    // Obtener todos los elementos con clase panel dentro del contenedor del carrito
    var panelItems = cartContainer.getElementsByClassName('panel');

    // Comprobar si el producto ya existe en el carrito
    var existingPanel = Array.from(panelItems).find(function (panel) {
        var panelName = panel.querySelector('h3').textContent.trim();
        return panelName === itemAdded.name;
    });

    if (existingPanel) {
        // Si el producto ya existe, actualizar el número de elementos en el carrito

        var existingUnits = 0;

        var label = existingPanel.querySelector('.label');
        // Extraer la cantidad y el precio del texto utilizando expresiones regulares

        let text = label.textContent;
        let match = text.match(/(\d+) piece.* for (\d+) €/);

        if (match) {
            existingUnits = parseFloat(match[1]);
        }

        existingUnits += itemAdded.units;

        var wordPiece = ((existingUnits > 1) ? 'pieces' : 'piece');
        existingPanel.querySelector('.label').textContent = existingUnits + ' ' + wordPiece + ' for ' + itemAdded.price * existingUnits + ' €';

    } else {
        // Si el producto no existe, añadirlo al carrito
        var newPanel = createCartElement(itemAdded);
        cartContainer.appendChild(newPanel);
    }

}

// Exercise 6. (2p)
export function addListeners() {
    // Event listener para el botón "Clear Cart" que llame a emptyCart()
    var clearButton = document.getElementById('clear');
    

    // Event listener para el botón "Update Total" que llame a updateCartTotal()
    

    // Event listener para los botones "Add to Cart"
    var addToCartButtons = document.querySelectorAll('.product button');
    addToCartButtons.forEach(function (button) {
        button.addEventListener('click', function () {
            // Obtener el elemento padre .product del botón actual
           

            // Obtener los datos del producto desde el elemento
            var itemName = null;
            var itemPrice = null;
            var itemUnits = null;

            // Crear un objeto de tipo item
            var item = {
                name: itemName,
                price: itemPrice,
                units: itemUnits
            };

            // Llamar a la función addToCart con el objeto item como parámetro
            
        });

    });

}