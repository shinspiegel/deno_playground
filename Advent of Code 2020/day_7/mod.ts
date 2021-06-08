const input: string = await Deno.readTextFile("sample");
const data: string[] = input.split("\n");

console.log(data);

