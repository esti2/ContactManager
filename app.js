const ui = require('./commands/commandHandler')

const model = require("./services/contactService");

function handleChoice(choice) {
    const command = choice.split(" ")[0];

    switch (command) {
        case "add":
            return model.addContact(choice);
        case "delete":
            return model.deleteContact(choice);
        case "list":
            return model.listContacts();
        case "help":
            return ui.help();
        case "search":
            return model.search(choice);
        default:
            return "Unknown command";
    }
}





function run() {
    ui.help();
    // while (true) {
    const choice = ui.getMenuChice();
    handleChoice(choice);
    // }

}

run();