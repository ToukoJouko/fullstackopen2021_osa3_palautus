const mongoose = require("mongoose");

const password = process.argv[2];

const url = `mongodb+srv://Touko:${password}@cluster0.fqgjv.mongodb.net/puhelinluettelo?retryWrites=true&w=majority`;

const personSchema = new mongoose.Schema({
  name: String,
  number: String,
});

const Person = mongoose.model("Person", personSchema);

if (process.argv.length === 5) {
  mongoose.connect(url);

  const person = new Person({
    name: process.argv[3],
    number: process.argv[4],
  });

  person.save().then((response) => {
    console.log(
      `added ${process.argv[3]} number ${process.argv[4]} to phonebook`
    );
    mongoose.connection.close();
  });
} else if (process.argv.length === 3) {
  mongoose.connect(url);

  Person.find({}).then((result) => {
    console.log("phonebook:");
    result.forEach((person) => {
      console.log(`${person.name} ${person.number}`);
    });
    mongoose.connection.close();
  });
} else {
  console.log(
    "give only the password or password, name and number as arguments"
  );
  process.exit(1);
}
