import { User } from "./models/user";

const user = new User({ name: "rafida", age: 25 });

user.on("change", () => {
  console.log("Change 1");
});
user.on("change", () => {
  console.log("Change 1");
});
user.on("save", () => {
  console.log("save triggered");
});
user.trigger('change')
user.trigger('asdfasdfasdf')