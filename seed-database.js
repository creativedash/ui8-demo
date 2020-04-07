const initDatabase = require("./server/database");
initDatabase();

const User = require("./server/models/user");

async function seedUsers() {
  await User.deleteMany({});
  return User.create([
    { name: "TestOne User", email: "testone@example.com" },
    { name: "TestTwo User", email: "testtwo@example.com" },
  ]);
}

async function seedAll() {
  await seedUsers();
}

seedAll()
  .then(() => {
    console.info("Database seeding complete!");
    process.exit(0);
  })
  .catch((error) => {
    console.error(error);
    process.exit(0);
  });
