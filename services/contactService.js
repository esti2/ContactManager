const fs = require("fs");
const FILE_PATH = "./contacts.json";
let contacts;

const loadContacts = () => {
  console.log("Loading contacts from contacts.json...");
  try {
    const data = fs.readFileSync(FILE_PATH, "utf8");
    contacts = JSON.parse(data);
    console.log("file is exeists");
    return contacts;
  } catch {
    console.log("file is not exeists");
    const data = fs.writeFileSync(FILE_PATH, "utf8");
    console.log("------- : ", data);
    contacts = JSON.parse(data);

    return contacts;
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
          console.log("שגיאה בכתיבת הקובץ");
          return;
        }
        console.log("איש הקשר נוסף ונוצר קובץ חדש");
      },
    );
  }

  return contact;
};

module.exports = {
  addContact,
};
