var aws = require('aws-sdk')
const config = require('config');
var multer = require('multer')
var multerS3 = require('multer-s3')
 
aws.config.update({
    secretAccessKey:config.get('secretAccessKey'),
    accessKeyId:config.get('accessKeyId'),
    sessionToken:config.get('sessionToken'),
    region:'us-east-1',
    
})

var s3 = new aws.S3()

const fileFilter = (req,file,cb) => {
  if(file.mimetype === 'image/jpg' ||file.mimetype === 'image/jpeg' || file.mimetype === 'image/png' ){
    cb(null,true)
  } else{
    cb(new Error('Invalid file type expected png or jpg file'),false)
  }
}


var upload = multer({
  storage: multerS3({
    s3: s3,
    bucket: 'lms-avatar',
    acl:'public-read',
    metadata: function (req, file, cb) {
      cb(null, {fieldName:file.fieldname});
    },
    key: function (req, file, cb) {
      cb(null, Date.now().toString())
    }
  })
})

module.exports = upload;