/** provide an interface for creating families of related or dependent objects without 
 *  specifying their concreate implementations
 * 
 *  In other words: factory of factories
 *  Useful when need to create multiple related objects together
 */

interface Button {
    render(): void;
}

interface TextBox {
    render(): void;
}

class LightButton implements Button {
    render(){
        console.log("rendering");
    }
}

class DarkButton implements Button {
    render(){
        console.log("rendering");
    }
}

class LigthTextBox implements TextBox {
    render(): void {
        console.log("rendering");
    }
}

class DarkTextBox implements TextBox {
    render(): void {
        console.log("rendering");
    }
}

/** while using we would have to know the concrete implementations */


/** with abstract factory applied */

interface UIComponentFactory {
    createButton(): Button;
    createTextBox(): TextBox;
}

class LightThemeFactory implements UIComponentFactory{
    createButton(): Button {
        return new LightButton()
    }

    createTextBox(): TextBox {
        return new LigthTextBox();
    }
}

class DarkThemeFactory implements UIComponentFactory{
    createButton(): Button {
        return new DarkButton()
    }

    createTextBox(): TextBox {
        return new DarkTextBox();
    }
}

/** usage */

const lightThemeFactory = new LightThemeFactory();

lightThemeFactory.createButton().render();
lightThemeFactory.createTextBox().render();
