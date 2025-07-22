/** 
 * Dependency Inversion Principle states
 *  High level modules should not depend on low level modules
 *  Both should depend on abstractions
 *  Abstractions should not depend on details
 *  Details should depend on abstractions
 * 
 *  Eg: The core business logic should not depend on concrete implementations
 *  but depend on interfaces
 *  This makes the code testable, re-usable and decoupled
 */

/** Violating example */

class MySQLDB {
    save(data: any) {
        // logic
    }
}

class UserService {
    private db = new MySQLDB();
    
    createUser(data) {
        this.db.save(data);
    }
}

/** why this violates 
 * MySQLDB is hardcoded in the UserService
 * the database can't be swapped for another DB such as MongoDB / InMemoryDB etc
 */

/** compliant version */

interface Database {
    save(data): void;
}

class MySQLDB implements Database {
    save(data) {
        // logic
    }
}

class MongoDB implements Database {
    save(data) {
        // logic
    }
}

class UserServiceD {
    constructor(private db: Database) {};

    saveUser(data) {
        this.db.save(data);
    }
}

const userService = new UserServiceD(new MongoDB());
const userService2 = new UserServiceD(new MySQLDB());


/** Another example */

interface Notifier {
    notify();
}

class EmailNotifier implements Notifier {
    notify() {
        console.log("notify using email");
    }
}

class NotificationService {
    constructor(private notifier: Notifier) {
    }

    sendNotification() {
        this.notifier.notify();
    }
}