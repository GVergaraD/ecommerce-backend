import express from "express";
import morgan from "morgan";
//Routes
import languageRoutes from "./routes/language.routes";

const app = express();

// settings
app.set("port", 4000);

//Middelware
app.use(morgan("dev"));

//Routes
app.use("/api/languages", languageRoutes);

export default app;