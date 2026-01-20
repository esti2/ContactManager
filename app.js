const ui = require('./commands/commandHandler')

function handlerChiche(choice) {
    switch (choice) {
        case add:
            add();
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