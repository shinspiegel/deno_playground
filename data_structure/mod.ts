#!/usr/bin/env deno run

/**
 * Stack is a LIFO
 * Last in
 * First out
 */

import Stack from "./Stack.ts";

const stack = new Stack<string>();

stack.push("Another value");
