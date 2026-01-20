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


        fs.writeFileSync(
            FILE_PATH,
            JSON.stringify(contacts, null, 2),
            'utf8'
        );

        console.log("✓ Contacts saved to contacts.json");
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

const listContacts = () => {
    if (fileExist()) {
        contact = loadContacts();
        if (contact.length > 0) {
            console.log("=== All Contacts ===");
            for (let index = 0; index < contact.length; index++) {
                console.log(`${index + 1}. -${contacts[index].name} - ${contacts[index].email} -${contacts[index].phone}`);
            }
        }
    }
}

const search = (choice) => {
    const parts = choice.split(" ");

    const command = parts[0]; // "search  
    const name = parts[1];
    let contactExists = [];
    if (fileExist()) {
        contacts = loadContacts();
        if (contacts.length > 0) {
            contactExists = contacts.filter(
                c => c.name.toLowerCase().startsWith(name.toLowerCase())
            );
            console.log(`=== Search Results for "${name}" ===`);
            for (let index = 0; index < contactExists.length; index++) {
                console.log(`${index + 1}. -${contactExists[index].name} - ${contactExists[index].email} -${contactExists[index].phone}`);
            }
        }
    }
}
module.exports = {
    addContact,
    deleteContact,
    listContacts,
    search
};
