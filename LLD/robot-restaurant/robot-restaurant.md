Design the backend system for a robot-operated restaurant. 
The restaurant has robots that take customer orders, cook food, and serve dishes. 
The system should manage the order workflow, robot task assignments, menu, and customer interactions.


flow:
1. customer browses the menu on an app / screen and selects the menu items and creates an order
2. order is sent to the kitchen and robot starts preparing the menu items
3. after the order is prepared order is sent to the customer's table via a robot or a machine

core entities:
1. User
2. Menu
3. Order
4. Robot -> {CookRobot, ServerRobot}
