#!/usr/bin/env deno run

import Stack from "./Stack.ts";
import Queue from "./Queue.ts";
import LinkedList from "./LinkedList.ts";

const t = new Stack<number>();

t.insert(1);
t.insert(2);
t.insert(3);

console.log(t);

console.log(t.peek());
console.log(t.remove());
console.log(t.peek());

console.log(t);
