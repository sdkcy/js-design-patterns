/**
 * JSDesignPatterns
 * command.js
 * Created by Sıdıka ÇAY on 2019-07-06
 */

/* Encapsulate a request as an object which processes some requests */
/* These requests are invoked through handlers */

/* Receiver */
const receiver = (function () {
    const userList = {
        girls: ["Sıdıka", "Yagmur", "Gunes"],
        boys: ["Saim", "Yigit", "Toprak"]
    };

    function getUserList(gender) {
        return userList[gender];
    }

    function addUser(gender, user) {
        userList[gender] = userList[gender].concat([user]);
    }

    return {
        getUserList,
        addUser
    };
})();

/* Command */
const sampleCommand1 = {
    action: "getUserList",
    params: ["girls"]
};

const sampleCommand2 = {
    action: "addUser",
    params: ["girls", "Damla"]
};

/* Executor */
const execute = function (receiver, command) {
    return receiver[command.action] && receiver[command.action](...command.params);
};

const result1 = execute(receiver, sampleCommand1);
execute(receiver, sampleCommand2);
const result2 = execute(receiver, sampleCommand1);

console.log("User List:\n", result1);
console.log("User List after new one pushed\n", result2);
