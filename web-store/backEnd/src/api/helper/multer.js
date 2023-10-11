const multer = require('multer');
const path = require('path');

const storage = multer.diskStorage({
  destination: (_request, _file, callback) => {
    callback(null, '../../../public/images/');
  },
  filename: (_request, file, callback) => {
    callback(null, path.extname(file.originalname));
  },
});

const upload = multer({ storage });

module.exports = { upload };