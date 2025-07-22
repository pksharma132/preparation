/** Prototype pattern - create new object by copying existing object instead of creating from scratch
 * 
 *  Useful when: 
 *      - want to avoid complex intiatizations 
 *      - object creation is costly or time consuming
 * 
 */

/** eg */

interface Prototype<T> {
    clone(): T;
}

class CostlyCreationCost implements Prototype<CostlyCreationCost> {

    constructor(
        public title: string,
        public content: string,
        public author: string
    ) {}


    clone(): CostlyCreationCost {
        return new CostlyCreationCost(this.title, this.content, this.author);
        
    }
}


/** usage */

const costlyObj1 = new CostlyCreationCost("1", "2", "3");

const costlyObj2 = costlyObj1.clone();

costlyObj2.author = "4"