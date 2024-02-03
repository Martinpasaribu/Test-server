import  express  from 'express';
import multer from 'multer';
const router = express.Router();
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

// import  {v2 as cloudinary} from 'cloudinary';
          
// cloudinary.config({ 
//   cloud_name: 'dxkker0mf', 
//   api_key: '319942613824945', 
//   api_secret: 'kiNHdZNe8x8vxuwhaitjq-cEXkM' 
// });
// //
// const storage = multer.memoryStorage();
// const upload = multer({ storage: storage });

// router.post('/add-user', upload.single('image'),addUser)

// const storage = new Multer.memoryStorage();
// const upload = Multer({storage,});


import {getUser, getUsers , editUser, deleteUser,SaveBill,GetRiwayat }from '../controllers/user.js'




router.get('/get-user/:id', getUser)
router.get('/get-users', getUsers)
// router.post('/add-user', upload.single('image'),addUser)
// router.put('/edit-user/:id', upload.single('image'), editUser)
router.delete('/delete-user/:id', deleteUser)
router.post('/save-bill', SaveBill);
router.get('/riwayat', GetRiwayat);


export default router