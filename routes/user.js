import  express  from 'express';
import multer from 'multer';

import  {v2 as cloudinary} from 'cloudinary';
          
cloudinary.config({ 
  cloud_name: 'dxkker0mf', 
  api_key: '319942613824945', 
  api_secret: 'kiNHdZNe8x8vxuwhaitjq-cEXkM' 
});


async function handleUpload(file) {
  const res = await cloudinary.uploader.upload(file, {
    resource_type: "auto",
  });
  return res;
}

const storage = new multer.memoryStorage();
const upload = multer({storage,});


import {getUser, getUsers , editUser, deleteUser,SaveBill,GetRiwayat }from '../controllers/user.js'

const router = express.Router();



router.get('/get-user/:id', getUser)
router.get('/get-users', getUsers)
// router.post('/add-user', upload.single('image'),addUser)
router.put('/edit-user/:id', upload.single('image'), editUser)
router.delete('/delete-user/:id', deleteUser)
router.post('/save-bill', SaveBill);
router.get('/riwayat', GetRiwayat);

router.post('/add-user', upload.single('image'), async (req, res) => {
  try {
    const name = req.body.name;
    const harga = req.body.harga;

    // Periksa apakah file gambar ada dan unggah ke Cloudinary
    let imageUrl = '';
    if (req.file) {
      const result = await handleUpload(req.file.buffer);
      imageUrl = result.secure_url;
    }

    if (!name || !harga) {
      return res.status(400).json({ code: 400, message: 'Bad Request' });
    }

    // Simpan data produk ke database
    const newUser = new Produk({ name, image: imageUrl, harga });
    const response = await newUser.save();

    if (response) {
      return res.status(200).json({ code: 200, message: 'User Added Success' });
    }
  } catch (err) {
    console.error('Error adding user:', err);
    return res.status(500).json({ code: 500, message: 'Server Error' });
  }
});

export default router
// import cloudinary from 'cloudinary';
          
// cloudinary.config({ 
//   cloud_name: 'dxkker0mf', 
//   api_key: '319942613824945', 
//   api_secret: 'kiNHdZNe8x8vxuwhaitjq-cEXkM' 
// });

// const storage = multer.memoryStorage();
// const upload = multer({ storage });


// const upload = multer({ dest: 'uploads/' })


// import { CloudinaryStorage } from 'multer-storage-cloudinary';

//
// const storage = multer.memoryStorage();
// const upload = multer({ storage: storage });
