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
        if (input === "add") {
            //if()
            validCoice = true;
            return "add";
        }
        else if (input === "list") {
            validCoice = true;
            return "list";
        }
        else if (input === "search") {
            validCoice = true;
            return "search";
        }
        else if (input === "delete") {
            validCoice = true;
            return "delete";
        }

        else if (input === "help") {
            validCoice = true;
            return "help";
        }
        else if (input === "exit") {
            validCoice = true;
            return "exit";
        }
        //   switch (input) {
        //     case value:

        //         break;
        //          case value:

        //         break;
        //          case value:

        //         break;
        //          case help:
        //         help();
        //         break;

        //     default:
        //         break;
    }
}


function showContact() {

}

module.exports = {
    help,
    getMenuChice
}