import fs from "fs";
const FILE_PATH = "./contacts.json";

const loadContacts = () => {
  console.log("Loading contacts from contacts.json...");
  try {
    const file = fs.access(FILE_PATH, fs.constants.F_OK);
    console.log("file is exeists");
  } catch {
    console.log("file is not exeists");
  }
};
