/** Adaptor pattern is a structural design pattern used to convert interface of a class into another interface which 
 * the class expects
 * 
 * Useful when you have to make incompatible interfaces work together without changing the existing code
 */


/** example */

/** old existing code */
class OldPrinter {
    printOldWay(){
        console.log("print in old way");
    }
}

/** your new app expects this interface */
interface Printer {
    print(): void
}


/** this was we can plug in which printer to use */
class PrinterAdaptor implements Printer {
    constructor(private printer: OldPrinter) {}
    print(): void {
        this.printer.printOldWay();
    }
}


/** usage */

const legacyPrinter = new OldPrinter();

const adaptor = new PrinterAdaptor(legacyPrinter);

/** if we create a new printer we can pass that here without changing the adaptor */

adaptor.print();


