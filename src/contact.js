
function loadContactPage() {
    const contentContainer = document.getElementById("content");
    contentContainer.innerHTML = '';

    const contactHeader = document.createElement('h1');
    contactHeader.textContent = "Contact Us";

    const addressParagraph = document.createElement('p');
    addressParagraph.textContent = "Address: 123 Restaurant Street, Cityville";

    const phoneParagraph = document.createElement('p');
    phoneParagraph.textContent = "Phone: (555) 123-4567";

    const emailParagraph = document.createElement('p');
    emailParagraph.textContent = "Email: info@ourrestaurant.com";

    contentContainer.append(contactHeader, addressParagraph, phoneParagraph, emailParagraph);
}

export { loadContactPage };
