const data = {
    contacts:[
        {
            name: "Alex"
        },
        {
            name: "Steave"
        },
        {
            name: "Pavel"
        },
    ]
}

const leftPanelContacts = document.querySelector(".left-panel__contacts")

function addContacts(data) {
    data.forEach(contact => {
        const divContact = document.createElement("div");
    divContact.classList.add("left-panel__contacts__item")

    const contactName = document.createElement("div");
    contactName.classList.add("contacts-name");
    contactName.innerHTML = contact.name;
    divContact.appendChild(contactName);

    leftPanelContacts.appendChild(divContact); 
    });
   
}

addContacts(data.contacts)