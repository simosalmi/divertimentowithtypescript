/// <reference path="app.ts" />
interface Logger {
    logInfo: (message: string) => void;
    logError: (err: Error) => void;
}

class ConsoleLogger implements Logger {
    logInfo(message: string): void {
        window.console.log(message);
    }
    logError(err: Error) {
        window.console.error(err);
    }
}

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
    logger: Logger;
    constructor(service: Service, logger: Logger) {
        this.service = service;
        this.logger = logger;
    }
    translate(options: TranslatorOptions): string {
        var serviceOptions: ServiceOptions = options;

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
        }
        else {
            return serviceResult.result;
        }

    }
}