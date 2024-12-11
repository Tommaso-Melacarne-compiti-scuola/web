const contactsTbody = document.getElementById("contacts-tbody");

const phoneRegex = /^[+]?[(]?[0-9]{3}[)]?[-\s.]?[0-9]{3}[-\s.]?[0-9]{4,6}$/;

let nextId = 1;

appendContact("Sapo Lalvetti", "392 123 4567");
appendContact("Crancesco Fapezio", "392 123 4567");
appendContact("Mosa Rari", "234 123 4567");

const addForm = document.forms["add"];

addForm.addEventListener("submit", (e) => {
    e.preventDefault();

    const name = addForm["name-input"].value;
    const number = addForm["tel-input"].value;

    if (!name || !number) {
        alert("Please fill out all fields");
        return;
    }

    if (!phoneRegex.test(number)) {
        alert("Please enter a valid phone number");
        return;
    }
    
    const contactsAdded = retrieveContacts();
    
    for (const contact of contactsAdded) {
        if (contact.name === name) {
            alert("Contact name already exists");
            return;
        }
        
        if (contact.number === number) {
            alert("Contact number already exists");
            return;
        }
    }
    
    addForm.reset();

    appendContact(name, number);
});

function appendContact(name, number) {
    const idTd = document.createElement("td");
    idTd.textContent = String(nextId);
    nextId++;

    const nameTd = document.createElement("td");
    nameTd.textContent = name;

    const numberTd = document.createElement("td");
    numberTd.textContent = number;

    const newRow = document.createElement("tr");
    newRow.appendChild(idTd);
    newRow.appendChild(nameTd);
    newRow.appendChild(numberTd);

    contactsTbody.appendChild(newRow);
}

function retrieveContacts() {
    const contacts = [];

    for (const row of contactsTbody.children) {
        const id = row.children[0].textContent;
        const name = row.children[1].textContent;
        const number = row.children[2].textContent;

        contacts.push({ id, name, number });
    }

    return contacts;
}