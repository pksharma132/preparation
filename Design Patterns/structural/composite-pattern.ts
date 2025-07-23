/** Composite pattern is a structural pattern. It helps to compose objects in to a tree
 *  structure to represent part-whole hierarchies. It let clients treat individual objects and group uniformly
 *  Real word Usecase: file tree, DOM trees, org charts
 */


/** example */

interface FileSystemEntity {
    show(): void;
}

class IndividualFile implements FileSystemEntity {
    constructor(private name: string){}

    show(): void {
        console.log("File", this.name);
    }
}

class Directory implements FileSystemEntity {
    private children: FileSystemEntity[] = [];

    constructor(private name: string) {
    }

    add(fileOrDirectory: FileSystemEntity) {
        this.children.push(fileOrDirectory);
    }

    show(): void {
        console.log("directory", this.name);
        for(let i of this.children) {
            i.show()
        }
    }
}

const d1 = new Directory("d1");
const f1 = new IndividualFile("f1");
const d2 = new Directory("d2");
const d3 = new Directory("d3");


d1.add(f1);
d1.add(d2);
d2.add(d3);

d1.show()