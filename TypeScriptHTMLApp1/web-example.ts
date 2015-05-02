/// <reference path="app.ts" />
interface ServiceOptions extends TranslatorOptions {
    async?: boolean;
}

interface Service {
    call: (options: ServiceOptions) => ServiceResult;
}

interface ServiceResult {
    err?: Error;
    result: string;
}

interface TranslatorOptions {
    fromLanguage?: string;
    toLanguage?: string;
    sentence: string;
}

class Translator {
    service: Service;
    constructor(service: Service) {
        this.service = service;
    }
    translate(options: TranslatorOptions): string {
        var serviceOptions: ServiceOptions = options;

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
        }
        else {
            return serviceResult.result;
        }
    }
}