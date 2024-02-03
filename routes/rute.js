import express from 'express';
import multer from 'multer';
import { v2 as cloudinary } from 'cloudinary';
// import { Produk } from '../models/user.js';

import { CloudinaryStorage } from 'multer-storage-cloudinary';
import { addUser } from '../controllers/user.js';

const rute = express.Router();

cloudinary.config({
  cloud_name: 'dxkker0mf',
  api_key: '319942613824945',
  api_secret: 'kiNHdZNe8x8vxuwhaitjq-cEXkM'
});


const storage = new CloudinaryStorage({
    cloudinary: cloudinary,
    params: {
        folder: 'uploads',
        format: async (req, file) => 'png',
        transformation: [{ width: 500, height: 500, crop: 'limit' }]
    }
});

const upload = multer({ storage: storage });

// const upload = multer({ storage });

// const storage = multer.diskStorage({
//     destination: function (req, file, cb) {
//       cb(null, './uploads'); // Pilih direktori tempat Anda ingin menyimpan file sementara
//     },
//     filename: function (req, file, cb) {
//       cb(null, file.originalname);
//     }
//   });

//   const storage = multer.memoryStorage();
//   const upload = multer({ storage: storage });


rute.post('/add-user', upload.single('image'),addUser)

// rute.post('/add-user', upload.single('image'), async (req, res) => {
//   try {
//     const name = req.body.name;
//     const harga = req.body.harga;
//     const image = req.file.path; // Ambil buffer file langsung

//     await cloudinary.uploader.upload(image, {
//       resource_type: 'image'
//     });

//     if (!name || !harga) {
//       return res.status(400).json({ code: 400, message: 'Bad Request' });
//     }

//     // Simpan data produk ke database
//     const newUser = new Produk({ name, image, harga });
//     const response = await newUser.save();

//     if (response) {
//       return res.status(200).json({ code: 200, message: 'User Added Success' });
//     }
//   } catch (err) {
//     console.error('Error adding user:', err);
//     return res
//       .status(500)
//       .json({ code: 500, message: 'Server Error ksesalahan add user' });
//   }
// });

export default rute;
