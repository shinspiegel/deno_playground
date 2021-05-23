export default class Node<T> {
    constructor(
        public value: T,
        public next: Node<T> | null = null,
        public prev: Node<T> | null = null
    ) {}
}