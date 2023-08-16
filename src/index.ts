import { User } from "./models/user";

const user = new User({ name: "rafida", age: 25 });

user.on("change", () => {});
user.on("change", () => {});
user.on("asdfasfd", () => {});

console.log(user);
