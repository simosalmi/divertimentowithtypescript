/// <reference path="app.ts" />

var ConsoleLogger = (function () {
    function ConsoleLogger() {
    }
    ConsoleLogger.prototype.logInfo = function (message) {
        window.console.log(message);
    };
    ConsoleLogger.prototype.logError = function (err) {
        window.console.error(err);
    };
    return ConsoleLogger;
})();

var Translator = (function () {
    function Translator(service, logger) {
        this.service = service;
        this.logger = logger;
    }
    Translator.prototype.translate = function (options) {
        var serviceOptions = options;

        if (options === null || options === undefined) {
            var err = new Error("Options must be provided");
            this.logger.logError(err);
            throw err;
        }

        if (options.sentence === null || options.sentence === undefined) {
            var err = new Error("A sentence must be provided");
            this.logger.logError(err);
            throw err;
        }

        options.fromLanguage = options.fromLanguage || "EN-GB";
        options.toLanguage = options.toLanguage || "IT-IT";

        serviceOptions.async = false;

        var serviceResult = this.service.call(serviceOptions);

        if (serviceResult.err) {
            this.logger.logError(serviceResult.err);
            return "";
        } else {
            return serviceResult.result;
        }
    };
    return Translator;
})();
//# sourceMappingURL=example.js.map
