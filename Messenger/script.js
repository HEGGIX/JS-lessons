const data = {
    contacts: [
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

addContacts(data.contacts);


const sendButton = document.getElementById('sendButton');
const messegeInput = document.querySelector('.input-messege');
const messegeContainer = document.querySelector('.right-panel__messege');

sendButton.addEventListener('click', () => sendMessege());
document.addEventListener('keydown', event => {
    if (event.key === 'Enter') sendMessege();
})

function sendMessege() {
    const messege = createDivMessege(messegeInput.value);
    messegeContainer.appendChild(messege);
    messegeContainer.scrollTop = messegeContainer.scrollHeight

    clearInput();
}

function createDivMessege(text) {
    const wrap = document.createElement('div');
    wrap.classList.add('wrap');
    const messege = document.createElement('div');
    messege.classList.add('messege');
    messege.innerHTML = text;
    wrap.appendChild(messege);
    return wrap;    
}

function clearInput() {
    messegeInput.value = '';
}

const nameHader = document.querySelector (".name-header__text");

function addContactsNameListener (element) {
    element.addEventListener("click",() => changeActiveContact(element))
}

function changeActiveContact (element) {
    nameHader.innerHTML = element.textContent || element.innerText
}