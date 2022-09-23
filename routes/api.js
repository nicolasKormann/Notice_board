import express from "express";
import { posts } from "../model/posts.js"
import cors from 'cors';

export const router = express.Router();

/* const options = {
  origin: "http://localhost:3005"
}
router.use(cors(options));
 */
router.get("/all", (req, res) => {
  res.json(posts.getAll());

});

router.use("/new", express.json())

router.post("/new", (req, res) => {

  let title = req.body.title;
  let description = req.body.description;

  posts.newPost(title, description);


  res.send("Post Adicionado com sucesso!")
})
