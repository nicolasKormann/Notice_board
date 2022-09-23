import express from "express";
import path from "path";
import { router } from "./routes/api.js"
import dotenv from "dotenv"

dotenv.config()

const app = express();
const PORT = process.env.PORT || 3005;


app.use('/api', router);
app.use(express.static(path.join("./", "public")));


app.listen(PORT, () => console.log(`Servidor rodando na porta ${PORT}.`))

