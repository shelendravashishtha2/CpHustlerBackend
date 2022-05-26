let dotenv = require("dotenv");

//config dotenv
dotenv.config({ path: "config/config.env" });

let app = require("./app");

//server at port
const server = app.listen(process.env.PORT, () => {
  console.log(`server is running at port:${process.env.PORT}`);
});

//Handling uncaught Exception
process.on("uncaughtException", (err) => {
  console.log(`Error:${err.message}`);
  console.log("shutting down server due to uncaught ecxeption");
  server.close(() => {
    process.exit(1);
  });
});