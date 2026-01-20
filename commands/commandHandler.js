const prompt = require('prompt-sync')();

function help() {
    console.log("Commands:");
    console.log('add "name" "email" "phone"  - Add a new contact');
    console.log("list                        - List all contacts");
    console.log('search "query"              - Search contacts by name or email');
    console.log('delete "email"              - Delete contact by email');
    console.log("help                        - Show this help message");
    console.log("exit                        - Exit");
}

function getMenuChice() {
    const input = prompt("Choose option:")
    validCoice = false;
    while (!validCoice) {
        if (input.startsWith("add")) {
            validCoice = true;
            return input;
        }
        else if (input.startsWith("list")) {
            validCoice = true;
            return "list";
        }
        else if (input.startsWith("search")) {
            validCoice = true;
            return input;
        }
        else if (input.startsWith("delete")) {
            validCoice = true;
            return input;
        }

        else if (input.startsWith("help")) {
            validCoice = true;
            return "help";
        }
        else if (input.startsWith("exit")) {
            validCoice = true;
            return "exit";
        }
    }
}


function showContact() {

}

module.exports = {
    help,
    getMenuChice
}