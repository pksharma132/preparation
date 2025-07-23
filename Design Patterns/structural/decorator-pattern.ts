/** Decorator pattern is a structural design pattern
 * It is used to add new responsibility to the object without modifying the existing code
 */

/** example */


interface Notifier {
    notify(): void;
}

class BasicNotifier implements Notifier {
  notify(): void {
    console.log("Default notification:");
  }
}
class EmailDecorator implements Notifier {
  constructor(private notifier: Notifier) {}

  notify(): void {
    this.notifier.notify();
    console.log("Email sent:",);
  }
}

class SMSDecorator implements Notifier {
  constructor(private notifier: Notifier) {}

  notify(): void {
    this.notifier.notify();
    console.log("SMS sent:");
  }
}

const notifier = new BasicNotifier();
const emailDeco = new EmailDecorator(notifier);

const smsDeco = new SMSDecorator(emailDeco);
smsDeco.notify()