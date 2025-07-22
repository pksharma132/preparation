/**
 * Singleton pattern is a creational design pattern
 * It ensures a class has only one instance and provides a global point of access to it
 */

/** logger example without singleton */


/** this creates multiple instances of the logger which is not good when it is writing to a single file or DB */

class Logger {
    log(data) {
        console.log(data);
    }
}


class LoggerSingleton {
    private static instance: LoggerSingleton;
    private constructor() {
    }

    static getInstance() {
        if(!LoggerSingleton.instance) {
            LoggerSingleton.instance = new LoggerSingleton();
            return LoggerSingleton.instance;
        } 

        return LoggerSingleton.instance;
    }

    log(data: any) {
        console.log(data);
    }
}

/** usage */

const logger1 = LoggerSingleton.getInstance();
const logger2 = LoggerSingleton.getInstance();
console.log(logger1 === logger2) // true -> only one instance is created


class ConfigurationManager {
    private static instance: ConfigurationManager;
    private obj: Record<string, string>;

    private constructor() {
        this.obj = {};
    };

    static getInstance() {
        if (!ConfigurationManager.instance) {
            ConfigurationManager.instance = new ConfigurationManager();
        }

        return ConfigurationManager.instance;
    }

    get(key: string): string {
        return this.obj[key];
    }

    set(key: string, value: string) {
        this.obj[key] = value;
        return this.obj[key];

    }
}

/** usage */

const config = ConfigurationManager.getInstance();
config.set("apiUrl", "https://api.example.com");

const anotherRef = ConfigurationManager.getInstance();
console.log(anotherRef.get("apiUrl")); // "https://api.example.com"
console.log(config === anotherRef);    // true