import multer from "multer";

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, "./public/temp")
  },
  filename: function (req, file, cb) {
    cb(null, file.originalname)
    //console.log(file) 
      /*
        output is like this ->
        {
        fieldname: 'coverImage',
        originalname: 'efbbe81f92ce2f29635baf56bb6a8334.jpg',
        encoding: '7bit',
        mimetype: 'image/jpeg',
        path: 'public\\temp\\efbbe81f92ce2f29635baf56bb6a8334.jpg'
      }
    */
  }
})

export const upload = multer({ storage: storage })