const fs = require("fs");
const FILE_PATH = "./contacts.json";
// let contacts;

const loadContacts = () => {
  console.log("Loading contacts from contacts.json...");

  if (!fs.existsSync(FILE_PATH)) {
    console.log("✗ File not found - creating new contact list");
    return []; // מחזירים מערך ריק כדי שהתוכנה תוכל להמשיך לעבוד
  }

  try {
    const data = fs.readFileSync(FILE_PATH, "utf8");
    const contacts = JSON.parse(data);
    console.log("✓ File exists and loaded successfully");
    return contacts;
  } catch {
    // console.log("file is not exeists");
    // const data = fs.writeFileSync(FILE_PATH, "utf8");
    // console.log("------- : ", data);
    // contacts = JSON.parse(data);

    // return data;

    console.log("✗ Error: Handled corrupted file");
    return [];
  }
};

const addContact = (name, email, phone) => {
  const contact = loadContacts();
  if (contact.find((c) => c.email === email)) {
    throw new Error("Contact with this email already exists");
  } else {
    const newContact = {
      name,
      email,
      phone,
    };
    contact.push(newContact);
    fs.writeFile(
      "contacts_new.json",
      JSON.stringify(contact, null, 2),
      (err) => {
        if (err) {
          console.log(" error");
          return;
        }
        console.log("add contact ");
      },
    );
  }

  return contact;
};

module.exports = {
  addContact,
};
