Question:
    Design the backend system for a shopping cart used in an e-commerce platform.

Functional Requirements:
1. Users should be able to add / remove products from the cart and checkout
2. Cart can have multiple products and should be able to support discounts application
3. Support multiple product prices(unit wise)
4. Cart should compute the total price after applying the discount

Non-functional requirements:
1. Scalable to millions of users
2. Extensible to support multiple promotions
3. support multiple sellers


Core Entities:

1. User - owner of the cart
2. Product - different products
3. Cart - will have user, discount and multiple CartItem
4. CartItem - will have the product along with the price of the product at the time of adding to the cart
5. Discount - can be of different types flat | amount
6. should be able to support multiple discounts and be able to calculate the final amount after all the discounts





