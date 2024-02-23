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
    resultArray.push(document.getElementById('totalPrice'));

    // Índice 1
    resultArray.push(document.querySelectorAll('h2'));

    // Índice 2
    resultArray.push(document.querySelectorAll('.product'));

    // Índice 3
    resultArray.push(document.querySelectorAll('p.price'));

    // Índice 4
    const peachButton = document.querySelector('.products [data-name="Peach"] button');
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
    const h3 = document.createElement('h3');
    //Añade el texto del elemento a la cabecera H3
    h3.textContent = item.name;
    
    //Crea un elemento span con el texto {units} piece for {price} €
    const span = document.createElement('span');
    span.textContent = `${item.units} piece for ${item.price*item.units} €`;
    // Añade la clase label al elemento span
    span.classList.add('label');

    // Anidar elementos al div principal
    divPanel.appendChild(h3);
    divPanel.appendChild(span);
    
  
    //Devolver div
    return divPanel;
}

// Exercise 3 (1p)
export function emptyCart() {
    //Obtener el elemento cartItems(carrito)
    var cartContainer = document.getElementById('cartItems');

    // Obtener todos los elementos con una clase panel dentro del contenedor del carrito
    var panelItems = cartContainer.getElementsByClassName('panel');

    // Convertir la colección HTML (paneles) en un array para facilitar la iteración
    var panelArray = Array.from(panelItems);

    // Recorrer y eliminar cada elemento panel
    for (var i = 0; i < panelArray.length; i++) {
        var panel = panelArray[i];
        panel.remove();
        console.log('Eliminar');
    };
    
    
  
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

    clearButton.addEventListener('click', function () {
        console.log('clear');
        emptyCart();
    });
    
    // Event listener para el botón "Update Total" que llame a updateCartTotal()
    var updateButton = document.getElementById('update');

    updateButton.addEventListener('click', function () {
        console.log('update');
        updateCartTotal();
    });
    

    // Event listener para los botones "Add to Cart"

    // Recorre todos los botones con clase "button" y agrega un listener para cada botón.
    var addToCartButtons = document.querySelectorAll('.product button');

    //Función que se ejecuta cuando se hace click en un botón "Add to Cart"
    addToCartButtons.forEach(function (button) {

        button.addEventListener('click', function () {
            // Obtener el elemento padre .product del botón actual
            var product = button.parentElement;
           
           // Obtener los datos del producto desde el elemento
           var itemName = product.querySelector('h3').textContent; 
           var itemPrice = product.querySelector('.price').textContent;
           // Extraer solo el número del texto del precio
           var itemPrice = parseInt(itemPrice.match(/\d+/)[0]);
           var itemUnits = parseInt(product.querySelector('.count').value);


            // Crear un objeto de tipo item
            var item = {
                name: itemName,
                price: itemPrice,
                units: itemUnits
            };

            // Llamar a la función addToCart con el objeto item como parámetro
            console.log(item);
            addToCart(item);
            
        });

    });

}