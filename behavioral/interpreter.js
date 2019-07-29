/**
 * js-design-patterns
 * interpreter.js
 * Created by Sıdıka ÇAY on 2019-07-19
 */

/* it allows to create a language (for example:SQL) */

const database = {
    languages: {
        Javascript: true,
        ObjectiveC: true,
        C: true,
        Java: true
    },
    editors: {
        WebStorm: true,
        VSCode: true,
        Sublime: true,
        Eclipse: true
    }
};

const commands = {
    SELECT_FROM: "SELECT",
    INSERT_INTO: "INSERT"
};

function parser(command, entity) {
    let result;
    switch (command) {
        case commands.SELECT_FROM:
            result = database[entity];
            break;
        case commands.INSERT_INTO:
            const table = entity.split(" ")[0];
            const value = entity.split(" ")[1];
            if (!database[table][value]) {
                database[table][value] = true;
                result = true;
            } else {
                return false;
            }

            break;
        default:
            result = "is undefined command...";
            break;
    }

    return result;
}

const Parser = function (text) {
    if (text.indexOf("-") < 0) {
        console.log("Undefined command");
        return;
    }
    const command = text.split("-")[0].trim();
    const entity = text.split("-")[1].trim();

    const result = parser(command, entity);
    console.log("Result:\n", command + " ", result);
};

const insertInto = new Parser("INSERT - languages React");
const select = new Parser("SELECT - languages");
const wrongSelect = new Parser("SELECTFROM  * languages");

