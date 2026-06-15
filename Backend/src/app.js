const express = require('express');
const app = express();
const multer = require('multer');
const Storage = multer.memoryStorage();
const upload = multer({ Storage });
const uploadFiles = require('./services/storage.service');
const cors = require('cors');


app.use(cors());
const postModel = require('./models/post.model');
app.use(express.json());



app.post("/create-post",upload.single("image") ,async(req, res) => {
    const result = await uploadFiles(req.file.buffer);
    const post = await postModel.create({
        file: result.url,
        caption: req.body.caption
    })
    res.json(post);
})

app.get("/posts", async (req, res) =>{
    const posts = await postModel.find()

    return res.status(200).json({
        message: "Posts fetched Successfully",
        posts
    })
})



app.listen(3000, () => {
    console.log("Server on 3000");
})