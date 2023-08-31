import { User } from "./models/User";

const user = new User({ name: "newbee", age: 0 });

user.events.on("change", () => {
  console.log("changfasfsdae");
});
//reminder

class Person {
  constructor(public firstName: string, public lastName: string) {}

  get fullName(): string {
    return `${this.firstName} ${this.lastName}`;
  }
}

const person = new Person("firstname", "lastname");

console.log('person', person.fullName)
