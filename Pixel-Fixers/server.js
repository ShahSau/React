//importing necessary libraries
require('dotenv').config()
const express = require('express')
const mongoose = require('mongoose')
const cors = require('cors')
const multer = require('multer');
// multiple file upload link:
// https://codeforgeek.com/multiple-file-upload-node-js/
// https://medium.com/the-andela-way/how-to-upload-multiple-images-using-cloudinary-and-node-js-2f053b167b80
// https://dev.to/boyepanthera/how-to-upload-multiple-files-to-cloudinary-in-nodejs-using-promise-all-2mk7
const fileUpload = require('express-fileupload');
const cookieParser = require('cookie-parser')

//creating app
const app = express()
app.use(express.json())
app.use(cookieParser())
app.use(cors())
app.use(fileUpload({
    useTempFiles: true
}))


//Routes
app.use('/user', require('./routes/userRouter'))
app.use('/api', require('./routes/categoryRouter'))

//connectiong to mongoose
// email: integrfy email
const URI = process.env.MONGODB_URI

mongoose.connect(URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useFindAndModify: false,
    useCreateIndex: true,
  }, err=>{
      if(err) throw err
      console.log('connected to mongodb')
  });

// app.get('/', (req, res)=>{
//     res.json('Everything is working properly')
// })

const PORT = process.env.PORT || 3000
app.listen(PORT, ()=>{
    console.log(`Server is running on Port ${PORT}`)
})