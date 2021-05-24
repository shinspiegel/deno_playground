#!/usr/bin/env deno run

import Stack from "./Stack.ts";
import LinkedList from "./LinkedList.ts";

const list = new LinkedList<number>();
list.insertFirst(0);
list.insertFirst(1);
list.insertFirst(2);
list.insertFirst(3);
list.insertFirst(4);

list.insertAt(2, 999)

list.showList()