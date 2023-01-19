import express from "express";
import morgan from "morgan";
//Routes
import languageRoutes from "./routes/language.routes";
import pastelesRoutes from "./routes/pasteles.routes";

const app = express();

// settings
app.set("port", 4000);

//Middelware
app.use(morgan("dev"));
app.use(express.json())

//Routes
app.use("/api/languages", languageRoutes);
app.use("/api/pasteles", pastelesRoutes);

export default app;