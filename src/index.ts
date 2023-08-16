import { User } from "./models/user";

const user = new User({ name: "rafida", age: 25 });

console.log("name", user.get("name"));
console.log("age", user.get("age"));
