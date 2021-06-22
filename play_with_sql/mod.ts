import { DB, QueryParam } from "./deps.ts";

// // Open a database
// const db = new DB("test.db");
// db.query(
//   "CREATE TABLE IF NOT EXISTS people (id INTEGER PRIMARY KEY AUTOINCREMENT, name TEXT)"
// );

// const names = ["Peter Parker", "Clark Kent", "Bruce Wayne"];

// // Run a simple query
// for (const name of names) {
//   db.query("INSERT INTO people (name) VALUES (?)", [name]);
// }

// // Print out data in table
// for (const [name] of db.query("SELECT name FROM people")) {
//   console.log(name);
// }

// // Close connection
// db.close();

type Deck = { name: String };

class DeckRepository {
  private db = new DB("test.db");
  private tableName = "deck";

  constructor() {
    this.createTable();
  }

  public insertItem(item: Deck) {
    this.db.query(
      `
      INSERT INTO ${this.tableName} 
        (${Object.keys(item).join(", ")})
      VALUES
        (${Object.keys(item)
          .map((i) => "?")
          .join(", ")})
    `,
      Object.values(item) as QueryParam[]
    );

    
  }

  public getAll() {
    return this.db.query(`SELECT * FROM ${this.tableName}`).asObjects();
  }

  private createTable() {
    this.db.query(`
      CREATE TABLE IF NOT EXISTS ${this.tableName} (
        id INTEGER PRIMARY KEY AUTOINCREMENT, 
        name TEXT
      )`);
  }
}

const deckRepository = new DeckRepository();
deckRepository.insertItem({ name: "Extra" });
console.log(deckRepository.getAll());
