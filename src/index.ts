import { User } from "./models/User";

const user = new User({ name: "newbee", age: 0 });

user.events.on("change", () => {

  console.log('changfasfsdae')

});

user.events.trigger('change')

user.save();
