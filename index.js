import express from "express";
import path from "path";
import { router } from "./routes/api.js"


const app = express();
const PORT = 3005;


app.use('/api', router);
app.use(express.static(path.join("./", "public")));


app.listen(PORT, () => console.log(`Servidor rodando na porta ${PORT}.`))

