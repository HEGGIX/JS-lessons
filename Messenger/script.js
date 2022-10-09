const data = {
    contacts: [
        {
            name: "Alex",
            messeges: [

            ]
        },
        {
            name: "Steave",
            messeges: []
        },
        {
            name: "Pavel",
            messeges: []
        }
    ]
}

let activeContact = null;

const leftPanelContacts = document.querySelector(".contact-container")

function addContacts() {
    data.contacts.forEach(contact => {
        const divContact = document.createElement("div");
        divContact.classList.add("left-panel__contacts__item")

        const contactName = document.createElement("div");
        contactName.classList.add("contacts-name");
        contactName.innerHTML = contact.name;
        divContact.appendChild(contactName);

        leftPanelContacts.appendChild(divContact);
        addContactsNameListener(divContact);
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
    if (activeContact === null || messegeInput.value === '') return;

    const sender = getSender(messegeInput.value);
    const text = getCleanText(messegeInput.value);

    const userData = getUserData(text);

    const messegeObject = {
        text,
        sender
    }

    userData.messeges.push(messegeObject);

    viewMesseges();

    clearInput();
}

function createDivMessege(text, sender) {
    const wrap = document.createElement('div');
    const wrapClass = sender === 0 ? 'wrap-own' : 'wrap-companion';
    wrap.classList.add(wrapClass);
    const messege = document.createElement('div');
    messege.classList.add('messege');
    messege.style.backgroundColor = sender === 0 ? 'white' : '#e6e6e6';
    messege.innerHTML = text;
    wrap.appendChild(messege);
    return wrap;
}

function clearInput() {
    messegeInput.value = '';
}

const nameHader = document.querySelector(".name-header__text");

function addContactsNameListener(element) {
    element.addEventListener("click", () => changeActiveContact(element))
}

function changeActiveContact(element) {
    const name = element.textContent || element.innerText;
    nameHader.innerHTML = name;
    activeContact = name;

    viewMesseges();
}

function viewMesseges() {
    const userData = getUserData();

    clearMessegeBox();

    userData.messeges.forEach(messege => {
        const divMessege = createDivMessege(messege.text, messege.sender);
        messegeContainer.appendChild(divMessege);

        messegeContainer.scrollTop = messegeContainer.scrollHeight;
    })
}

function clearMessegeBox() {
    messegeContainer.innerHTML = '';
}

function clearContactsBox() {
    leftPanelContacts.innerHTML = '';
}

function getUserData() {
    return data.contacts.find(contact => contact.name === activeContact);
}

function getSender(text) {
    const isOwnMessege = !text.includes(activeContact + ':');
    if (isOwnMessege) return 0;
    else return 1;
}

function getCleanText(text) {
    const newText = text.replace(activeContact + ':', '');
    return newText;
}

const addContactButton = document.querySelector('.addContact-button');

addContactButton.addEventListener("click",() => addContact());

function addContact() {
    //работа с базой данных
    const name = prompt('Введите имя нового контакта: ');
    const newUser = {
        name: name,
        messeges: []
    };
    data.contacts.push(newUser);
    //работа с въюхой
    clearContactsBox();

    addContacts();
}
