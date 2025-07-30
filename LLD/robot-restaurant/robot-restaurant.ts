class User {
    constructor(id: string, name: string,) { }
}

class MenuItem {
    constructor(id: string, name: string, price: string, available: boolean) { }
}

class Menu {
    menuItems: MenuItem[] = [];

    addItem(item: MenuItem) {
        this.menuItems.push(item);
    }

    updateItem(item: MenuItem) {
        const existingItem = this.menuItems.findIndex((menuItem) => item.id === menuItem.id);
        if (existingItem === -1) throw new Error("menuItem not existing");
        this.menuItems[existingItem] = item;
    }

    removeItem(itemId: string) {
        this.menuItems = this.menuItems.filter((item) => item.id !== itemId);
    }
}

class OrderItem {
    menuItem: MenuItem;
    quantity: number;
}

class Order {
    constructor(user: User, orderItem: OrderItem[], status: "Ordered" | "Preparing" | "Ready" | "Served") { }
}

class Task {
    constructor(order: Order) { }
};

interface Robot {
    id: string;
    type: "COOK" | "SERVER";
    available: boolean;
    doWork(): void;
    task?: Task;
    assignTask?(task: Task);
    toggleAvailable(): void;
}

class CookRobot implements Robot {
    type: "COOK" = "COOK";
    task?: Task;
    constructor(readonly id: string, public available: boolean = true) { }
    doWork(): void {
        console.log("cooking");
    }

    assignTask(task: Task): void {
        this.task = task;
        console.log("assigned task", this.id, task);
    }

    toggleAvailable(): void {
        this.available = !this.available;
    }
}

class ServerRobot implements Robot {
    type: "SERVER" = "SERVER";
    task?: Task;
    constructor(readonly id: string, public available: boolean = true) { }
    doWork(): void {
        console.log("serving");
    }
    assignTask(task: Task): void {
        this.task = task;
        console.log("assigned task", this.id, task);
    }
    toggleAvailable(): void {
        this.available = !this.available;
    }
}


class RobotManager {

    cookBots: CookRobot[] = [];
    serverBots: ServerRobot[] = [];


    createRobot(type: Robot["type"], id: string, available): Robot {
        if (type === "COOK") {
            const bot = new CookRobot(id, available);
            this.cookBots.push(bot);
            return bot;
        }
        if (type === "SERVER") {
            const bot = new CookRobot(id, available);
            this.cookBots.push(bot);
            return bot;
        }
    }



    assignWorkToBot(order: Order): Bot {
        if (order.status === "ORDERED") {
            for (let bot of this.cookBots) {
                if (bot.available) {
                    bot.assignTask(new Task(order));
                    bot.toggleAvailable();
                    return;
                }
            }

        }
    }

    taskCompleteListener(bot: Robot, order: Order) {
        if (order.status === "PREPARED") {
            bot.toggleAvailable();

            for (let bot of this.serverBots) {
                if (bot.available) {
                    bot.assignTask(new Task(order));
                    bot.toggleAvailable();
                    return;
                }
            }
        }

        if (order.status === "SERVED") {
            bot.toggleAvailable();
        }
    }
}

class OrderManager {
    constructor(private robotManager: RobotManager) {
    }

    createOrder(user: User, items: OrderItem[]) {
        const order = new Order(user, items, "Ordered");
        this.robotManager.assignWorkToBot(new Task(order));
        
    }



    assignBot(order: Order): Bot {
        this.robotManager.assignWorkToBot(order);
    }


}
