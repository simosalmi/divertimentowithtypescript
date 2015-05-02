/// <reference path="app.ts" />

var Translator = (function () {
    function Translator(service) {
        this.service = service;
    }
    Translator.prototype.translate = function (options) {
        var serviceOptions = options;

        // Guard clauses
        if (options === null || options === undefined) {
            throw new Error("Options must be provided");
        }

        if (options.sentence === null || options.sentence === undefined) {
            throw new Error("A sentence must be provided");
        }

        // Default options
        options.fromLanguage = options.fromLanguage || "EN-GB";
        options.toLanguage = options.toLanguage || "IT-IT";

        serviceOptions.async = false;

        // Call the service
        var serviceResult = this.service.call(serviceOptions);

        if (serviceResult.err) {
            // log the error ...
            return new Maybe();
        } else {
            return new Maybe(serviceResult.result);
        }
    };
    return Translator;
})();

var simpleService = {
    call: function (options) {
        if (options.sentence === "Hello, World!") {
            return {
                result: "Ciao, mondo!"
            };
        }

        if (options.sentence === "") {
            return {
                result: options.sentence
            };
        }

        return {
            err: new Error("Unsupported sentence"),
            result: null
        };
    }
};
var simpleTranslator = new Translator(simpleService);

var testOK = simpleTranslator.translate({
    sentence: "Hello, World!"
}), testErr = simpleTranslator.translate({
    sentence: "Lorem ipsum..."
}), testEmpty = simpleTranslator.translate({
    sentence: ""
});

console.log(testOK.firstOrDefaultIfEmpty("<Error during translation>"));

console.log(testErr.firstOrDefaultIfEmpty("<Error during translation>"));

console.log(testEmpty.firstOrDefaultIfEmpty("<Error during translation>"));
//# sourceMappingURL=web-example.js.map
