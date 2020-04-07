const mongoose = require("mongoose");

const databaseUri = "mongodb://localhost/ui8_demo";
const gracefulShutdown = (msg, callback) => {
  mongoose.connection.close(() => {
    console.info(`Mongoose disconnected through ${msg}`);
    callback();
  });
};

module.exports = () => {
  mongoose.connect(databaseUri);

  mongoose.connection.on("connected", () => {
    console.info(`Mongoose connected to ${databaseUri}`);
  });

  mongoose.connection.on("error", (err) => {
    console.error(`Mongoose error: ${err}`);
  });

  mongoose.connection.on("disconnected", () => {
    console.info("Mongoose disconnected");
  });

  process.once("SIGUSR2", () => {
    gracefulShutdown("nodemon restart", () => {
      process.kill(process.pid, "SIGUSR2");
    });
  });

  process.on("SIGINT", () => {
    gracefulShutdown("app termination", () => {
      process.exit(0);
    });
  });

  process.on("SIGTERM", () => {
    gracefulShutdown("Heroku app shutdown", () => {
      process.exit(0);
    });
  });
};
