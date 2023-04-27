const express = require("express");

const dotenv = require("dotenv");

dotenv.config();

const catalogRouter = require("./routers/catalog-router");
const mainRouter = require("./routers/main-router");

const app = express();
const port = process.env.PORT || 3003;


app.use(express.json());
app.use(express.urlencoded({ extended: true }));


app.use("/catalog", catalogRouter);
app.use("/", mainRouter)

app.listen(port, () => {
    console.log(`Listening on port:${port}`);
});
