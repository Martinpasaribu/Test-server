import  express  from 'express';
import multer from 'multer';
// import cloudinary from 'cloudinary';
          
// cloudinary.config({ 
//   cloud_name: 'dxkker0mf', 
//   api_key: '319942613824945', 
//   api_secret: 'kiNHdZNe8x8vxuwhaitjq-cEXkM' 
// });

// const storage = multer.memoryStorage();
// const upload = multer({ storage });


const upload = multer({ dest: 'uploads/' })


// import  {v2 as cloudinary} from 'cloudinary';
          
// cloudinary.config({ 
//   cloud_name: 'dxkker0mf', 
//   api_key: '319942613824945', 
//   api_secret: 'kiNHdZNe8x8vxuwhaitjq-cEXkM' 
// });
// //
// const storage = multer.memoryStorage();
// const upload = multer({ storage: storage });


import {getUser, getUsers , addUser, editUser, deleteUser,SaveBill,GetRiwayat }from '../controllers/user.js'

const router = express.Router();


router.get('/get-user/:id', getUser)
router.get('/get-users', getUsers)
router.post('/add-user', upload.single('image'),addUser)
router.put('/edit-user/:id', upload.single('image'), editUser)
router.delete('/delete-user/:id', deleteUser)
router.post('/save-bill', SaveBill);
router.get('/riwayat', GetRiwayat);


export default router