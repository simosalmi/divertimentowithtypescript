/// <reference path="app.ts" />

var Translator = (function () {
    function Translator(service) {
        this.service = service;
    }
    Translator.prototype.translate = function (options) {
        var serviceOptions = options;

        if (options === null || options === undefined) {
            throw new Error("Options must be provided");
        }

        if (options.sentence === null || options.sentence === undefined) {
            throw new Error("A sentence must be provided");
        }

        options.fromLanguage = options.fromLanguage || "EN-GB";
        options.toLanguage = options.toLanguage || "IT-IT";

        serviceOptions.async = false;

        var serviceResult = this.service.call(serviceOptions);

        if (serviceResult.err) {
            // log the error ...
            return "";
        } else {
            return serviceResult.result;
        }
    };
    return Translator;
})();
//# sourceMappingURL=web-example.js.map
