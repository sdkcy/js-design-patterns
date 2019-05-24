/**
 * JSDesignPatterns
 * chainOfResponsibility.js
 * Created by Sıdıka ÇAY on 2019-05-22
 */

"use strict";

/* creates a chain for a request and each receiver has a reference to other receiver*/
const Logger = function (type) {
    this.nextLogger;
    this.type = type;
};

Logger.prototype.setNextLogger = function (logger) {
    this.nextLogger = logger;
};

Logger.prototype.logMessage = function (msg) {
    console.log(this.type +": "+ msg);

    if (this.nextLogger) {
        this.nextLogger.logMessage(msg);
    }
};

function getChainOfLogger() {
    const consoleLogger = new Logger("CONSOLE");
    const errorLogger = new Logger("ERROR");
    const warningLogger = new Logger("WARNING");
    consoleLogger.setNextLogger(errorLogger);
    errorLogger.setNextLogger(warningLogger);

    return consoleLogger;
}

const loggerChain = getChainOfLogger();
loggerChain.logMessage("test logger chain");