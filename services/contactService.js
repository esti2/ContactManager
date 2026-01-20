//const { trace } = require("console");
const validation = require('../testing/validation')
const fs = require("fs");
const FILE_PATH = "./contacts.json";
let contacts = [];

function fileExist() {
    if (!fs.existsSync(FILE_PATH)) {
        console.log("✗ File not found - creating new contact list");
        return false;
    }
    else
        return true;
}

function createJson() {
    try {
        fs.writeFileSync(FILE_PATH, JSON.stringify([], null, 2), 'utf8');
        console.log("✓ New contacts file created");
        return true;
    } catch (error) {
        console.log("✗ Cannot create json file");
        return false;
    }
}



const loadContacts = () => {
    console.log("Loading contacts from contacts.json...");
    try {
        const data = fs.readFileSync(FILE_PATH, 'utf8');
        contacts = JSON.parse(data);
        const countContacts = contacts.length;
        console.log(`✓ Loaded ${countContacts} contacts`);
        return contacts;
    } catch {
        console.log("✗ Error: Handled corrupted file");
        return [];
    }
};

const addContact = (choice) => {
    const parts = choice.split(" ");

    const command = parts[0]; // "add"
    const name = parts[1];
    const email = parts[2];
    const phone = parts[3];
    let contact;

    if (fileExist()) {
        contact = loadContacts();
    }
    else {
        createJson();
        contact = [];
    }

    if (contacts.find(c => c.email === email)) {
        console.log("Contact with this email already exists");
        return;
    }
    if (validation.validateContactAdd(name, email, phone)) {

        const newContact = { name, email, phone };

        contacts.push(newContact);
        //contacts.push(choice);

        fs.writeFileSync(
            FILE_PATH,
            JSON.stringify(contacts, null, 2),
            'utf8'
        );

        console.log("✓ Contact added");
        return contacts;
    }

};

const deleteContact = (choice) => {
    const parts = choice.split(" ");

    const command = parts[0]; // "delete  
    const email = parts[1];

    if (fileExist()) {
        let contacts = loadContacts();
    }

    const contactExists = contacts.find(c => c.email === email);
    if (!contactExists) {
        console.log(`✗ Error: No contact found with email: ${email}`);
        return;
    }

    contacts = contacts.filter(c => c.email !== email);

    fs.writeFileSync(
        FILE_PATH,
        JSON.stringify(contacts, null, 2),
        'utf8'
    );

    console.log("✓ Contact deleted successfully");
};

module.exports = {
    addContact,
    deleteContact
};
