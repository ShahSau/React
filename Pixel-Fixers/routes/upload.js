// const multer = require('multer');
const router = require("express").Router();
// const cloudinary = require('cloudinary')
const auth = require("../middleware/auth");
const authAdmin = require("../middleware/authAdmin");
const upload = require("./multer");
const cloudinary = require("./cloudinary");
const fs = require("fs");

// // images are uploaded on cloudinary
// cloudinary.config({
//     cloud_name: process.env.CLOUD_NAME,
//     api_key: process.env.CLOUD_API_KEY,
//     api_secret: process.env.CLOUD_API_SECRET
// })

router.post(
  "/upload",
  auth,
  authAdmin,
  upload.array("image", 5),
  async (req, res) => {
    try {
      // const file = req.files.file;
      // cloudinary.v2.uploader.upload(file.tempFilePath, {folder: "test"}, async(err, result)=>{
      //     if(err) throw err;

      //     removeTmp(file.tempFilePath)

      //     res.json({public_id: result.public_id, url: result.secure_url})
      // })
      const uploader = async (path) => await cloudinary.uploads(path, "Images");
      const urls = [];
      const files = req.files;
      for (const file of files) {
        const { path } = file;
        const newPath = await uploader(path);
        urls.push(newPath);
        fs.unlinkSync(path);

        res.status(200).json({
          message: "images uploaded successfully",
          data: urls,
        });
      }
    } catch (err) {
      return res.status(500).json({ msg: err.message });
    }
  }
);
module.exports = router;
