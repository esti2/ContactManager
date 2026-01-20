const ui = require("./commands/commandHandler");
const model = require("./services/contactService");

function handlerChiche(choice) {
  switch (choice) {
    case "add":
      model.addContact();
      break;

    default:
      break;
  }
}

function run() {
  ui.help();
  // while (true) {
  const choice = ui.getMenuChice();
  handlerChiche(choice);
  // }
}

run();
