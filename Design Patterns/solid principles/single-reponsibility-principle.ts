// one class should change only when necessary, in other words a class should
// handle one thing and it should handle it well

// Bad Example

class ReportManager {
  generateReport(data) {
    // generate report logic
    console.log("Report generated");
  }

  saveToFile(data, filename) {
    // save report to file
    console.log(`Report saved to ${filename}`);
  }

  sendEmailReport(data, email) {
    // email sending logic
    console.log(`Report sent to ${email}`);
  }
}
// why is it bad?
// a single class does many things such as generating the report, saving to file and 
// also sending the report via email


// With single responsibility

class ReportManager {
    constructor(private fileManager: FileManager, private notifier: EmailManager) {
        // logic
    }

    generateReport() {
        // login
    }

    generateAndSendReport() {
        const data = this.generateReport();
        const file = this.fileManager.saveToFile(data);
        this.notifier.sendMail(file, "a@b.com");
    }


}


class FileManager {
    saveToFile(data, path) {
        // logic
    }
}

class EmailManager {
    sendMail(data, email) {
        // logic
    }
}