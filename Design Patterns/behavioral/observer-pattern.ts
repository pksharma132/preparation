/** Observer pattern is a behavioral pattern used to create a one-to-many dependency between object
 * so that changes made in one object is notified to the observers
 * 
 * use cases:
 * 1. Nodejs EventEmitter
 * 2. DOM Events
 * 3. Pubsub systems
 */

/** example */


interface Subscriber {
    notification(title: string): void;
}

class User implements Subscriber {
    constructor(private name: string) { }
    notification(title: string): void {
        console.log("new view alert!", title);
    }
}


class YoutubeChannel {
    private subscribers: Subscriber[] = [];


    addSub(user: Subscriber) {
        this.subscribers.push(user);
    }

    removeSub(user: Subscriber) {
        this.subscribers = this.subscribers.filter((sub) => user !== sub);
    }

    notifySubs(title: string) {
        for (let sub of this.subscribers) {
            sub.notification(title);
        }
    }
}

/** usage */

const channel1 = new YoutubeChannel();

const user1 = new User("user1");
const user2 = new User("user2");

channel1.addSub(user2);
channel1.addSub(user1);

channel1.notifySubs("design patterns!!");