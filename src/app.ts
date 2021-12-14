import express from "express";
// import * as database from "./models/database.ts";

const app = express();

const port = 3000;

app.get("/", (req, res) => res.send("Hello World!"));
app.listen(port, () => console.log(`Example app listening on port ${port}!`));

// connect();
// function connect() {
//   if (app.get("env") === "test") return;
//   database
//     .connect()
//     .then(() => {
//       listen();
//       console.log("Connected to MongoDB");
//     })
//     .catch((e) => console.log(`MongoDB Connection Error: ${e}`));
// }

// function listen() {
//   if (app.get("env") === "test") return;
//   app.listen(process.env.PORT || 3000, () =>
//     console.log(`App listening to port ${process.env.PORT || 3000}`)
//   );
// }
