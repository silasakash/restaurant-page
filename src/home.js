import sushiImage from './img/sushi.jpg';

function loadHomePage() {
    const contentContainer = document.getElementById("content");
    contentContainer.innerHTML = '';
    const img = document.createElement('img');
    img.src = sushiImage;
    img.alt = "Sushi On Brown Wooden Board";
    img.width = 500;
    img.style.margin = "auto";
    const header = document.createElement('h1');
    header.textContent = "Welcome to Our Restaurant";
    const description = document.createElement('p');
    description.textContent = "Experience the finest dining in town. Our restaurant offers a delightful menu and a cozy atmosphere for you to enjoy.";
    contentContainer.append(img, header, description);
}

export {loadHomePage};