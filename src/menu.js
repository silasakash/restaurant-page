import sushiImage from './img/sushi.jpg';

function loadMenuPage() {
    const contentContainer = document.getElementById("content");
    contentContainer.innerHTML = '';

    const menuHeader = document.createElement('h1');
    menuHeader.textContent = "Our Menu";
    const menuItemContainer = document.createElement('div');


    function createMenuItem(imageSrc, itemName, itemDescription) {
        const menuItemDiv = document.createElement('div');

        const itemImage = document.createElement('img');
        itemImage.src = sushiImage;
        itemImage.alt = itemName + ' Image';
        itemImage.style.width = "70%";
        itemImage.classList.add('menu-item-image');

        const menuItem = document.createElement('p');
        menuItem.textContent = itemName;

        menuItemDiv.append(itemImage, menuItem);

        return menuItemDiv;
    }

    const menuItems = [
        { name: 'Sushi Combo'},
        { name: 'Teriyaki Bowl'},
        { name: 'Tempura Platter'},
        { name: 'Sashimi Selection'},
        { name: 'Ramen Delight'},
        { name: 'Bento Box Special'},
        { name: 'Yakitori Skewers'},
        { name: 'Chirashi Bowl'},
        { name: 'Okonomiyaki Pancake'},
        { name: 'Gyoza Dumplings'},  
    ];

    menuItemContainer.append(...menuItems.map(item => createMenuItem(item.imageSrc, item.name, item.description)));

    contentContainer.append(menuHeader, menuItemContainer);
}

export { loadMenuPage };
