import Node from "./Node.ts";

export default class Stack<T> {
    constructor(
        private list: Node<T>[] = [],
        private count: number = -1,
        private maxSize: number = 5
    ) {}

    public listAll() {
        this.list.forEach((i) => console.log(i));
    }

    public isEmpty() {
        return this.count <= -1;
    }

    public isFull() {
        return this.count >= this.maxSize;
    }

    public push(value: T) {
        if (this.isFull()) {
            throw new Error("Failed, stack is full");
        }

        const currentNode = new Node<T>(value);

        if (!this.isEmpty()) {
            const prevNode = this.list[this.count];
            currentNode.prev = prevNode;
            prevNode.next = currentNode;
        }

        this.count += 1;
        this.list = [...this.list, currentNode];
        return;
    }

    public pop() {
        if (this.isEmpty()) {
            throw new Error("Failed, stack is empty");
        }

        this.count -= 1;
        this.list.pop();
        this.list[this.count].next = null;
    }

    public get peek(): Node<T> {
        if (this.count <= -1) {
            throw new Error("Failed, stack is empty");
        }

        return this.list[this.count];
    }
}
