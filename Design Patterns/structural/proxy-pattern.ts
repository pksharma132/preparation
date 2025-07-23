/** proxy pattern is a substitute or place holder for another object to control access to the actual object
 *  Proxy acts as a gate keeper that adds extra behavior before or after accessing the actual object
 * 
 *  Use cases
 *  1. Access control
 *  2. Lazy loading
 *  3. caching, logging
 */

/** example */

interface Document1 { // name changed as it is clashing with the global Document
    display(): void;
}

class RealDocument implements Document1 {
    display(): void {
        console.log("printed top secret stuff");
    }
}

class DocProxy {
    private realDoc: Document1 | null = null;

    constructor(private name: string, private role: string) {

    }

    readDoc() {
        if (this.name !== "agent1" && this.role !== "owner") {
            console.log("access denied");
            return;
        }
        this.realDoc = new RealDocument();
        this.realDoc.display();
    }
}

/** usage */

const proxy = new DocProxy("agent2", "owner");
proxy.readDoc() // access denied

const proxy2 = new DocProxy("agent1", "owner");
proxy2.readDoc() // read successfully