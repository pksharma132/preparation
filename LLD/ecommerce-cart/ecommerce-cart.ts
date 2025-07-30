class User {
    constructor(readonly id: number, name: string, address: string[], currency: string) { }
}


class Product {
    constructor(readonly id: number, readonly name: string, public unitPrice: number, readonly seller: string) { }
}

class CartItem {
    constructor(public product: Product, public quantity: number) {
    }

    getCartItemPrice() {
        return this.product.unitPrice * this.quantity
    }
}

interface DiscountStrategy {
    discountType: "flat" | "amount";
    discountValue: number;
    getDiscountedPrice(price: number): number;
}

class Flat implements DiscountStrategy {
    discountType: "flat" = "flat";

    constructor(readonly discountValue: number) {
        this.discountValue = discountValue;
    }
    getDiscountedPrice(price: number): number {
        return price - (price * (this.discountValue / 100))
    }
}

class Amount implements DiscountStrategy {
    discountType: "amount" = "amount";

    constructor(readonly discountValue: number) {
        this.discountValue = discountValue;
    }
    getDiscountedPrice(price: number): number {
        return price - this.discountValue;
    }
}


class Cart {
    private discounts: DiscountStrategy[] = [];
    constructor(private cartItems: CartItem[]) { }
    addCartItem(product: Product, quantity: number) {
        this.cartItems.push(new CartItem(product, quantity));
        return this.cartItems;
    }

    removeCartItem(product: Product) {
        this.cartItems = this.cartItems.filter((item) => item.product.id !== product.id);
        return this.cartItems;
    }


    getTotalPrice() {
        const total = this.cartItems.reduce((prev, curr) => prev + curr.getCartItemPrice(), 0)
        return total;
    }

    addDiscount(discount: DiscountStrategy) {
        this.discounts.push(discount);
    }

    getDiscountedPrice() {
        const totalPrice = this.getTotalPrice();
        let discountedPrice = totalPrice;

        for (let discount of this.discounts) {
            discountedPrice = discount.getDiscountedPrice(discountedPrice);
        }

        return discountedPrice;
    }
}