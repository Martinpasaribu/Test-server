// const user = require('../models/user')
// const userModel = require('../models/user')

// import user from '../models/user.js';
import {Produk} from '../models/user.js';

export const addUser = async (req, res) => {
    try {
        const name = req.body.name
        const image = req.file.path
        const harga = req.body.harga

        if (!name || !image || !harga) {
            return res.send({ code: 400, message: 'Bad Request' })
        }
        const newUser = new Produk({ name, image, harga })
        const response = await newUser.save()
        if (response) {
            return res.send({ code: 200, message: 'User Added Success' })
        }
    } catch (err) {
        return res.send({ code: 500, message: 'Server Error' })
    }
}


// router.post('/add-user', upload.single('image'), async (req, res) => {
//     try {
//       const name = req.body.name;
//       const harga = req.body.harga;
  
//       // Periksa apakah file gambar ada dan unggah ke Cloudinary
//       let imageUrl = '';
//       if (req.file) {
//         const result = await handleUpload(req.file.buffer);
//         imageUrl = result.secure_url;
//       }
  
//       if (!name || !harga) {
//         return res.status(400).json({ code: 400, message: 'Bad Request' });
//       }
  
//       // Simpan data produk ke database
//       const newUser = new Produk({ name, image: imageUrl, harga });
//       const response = await newUser.save();
  
//       if (response) {
//         return res.status(200).json({ code: 200, message: 'User Added Success' });
//       }
//     } catch (err) {
//       console.error('Error adding user:', err);
//       return res.status(500).json({ code: 500, message: 'Server Error' });
//     }
//   });
export const getUser = async (req, res) => {
    try {
        const _userId = req.params.id
        const _data = await Produk.findOne({ _id: _userId })
        res.send({ code: 200, message: 'Find Success', data: _data })
    } catch (err) {
        res.send({ code: 500, message: 'Server Error' })
    }
}


export const getUsers = async (req, res) => {
    try {
        const products = await Produk.find({})
        res.status(200).json(products);
    } catch (err) {
        res.send({ code: 500, message: 'Server Error data tidak ada' })
    }
}

export const editUser = async (req, res) => {
    try {
        const id = req.params.id
        console.log(req.body, req.file, id, "45")
        let _data = {}
        if (req.body.name) {
            _data["name"] = req.body.name
        }
        if (req.body.harga) {
            _data["harga"] = req.body.harga
        }
        if (req.file && req.file.path) {
            _data["image"] = req.file.path
        }
        console.log(_data, "57")
        const response = await Produk.findByIdAndUpdate(id, _data, { new: true })
        if (response) {
            res.send({ code: 200, message: 'Edit user success', data: response })
        }
    } catch (err) {
        console.log(err)
        res.send({ code: 500, message: 'Server Error data tidak terambil' })
    }
}
export const deleteUser = async (req, res) => {
    try {
        const id = req.params.id
        const response = await userModel.deleteOne({ _id: id })
        if (response) {
            res.send({ code: 200, message: 'Delete User Success' })
        }
    } catch (err) {
        res.send({ code: 500, message: 'Server Error' })
    }
}

// SAVE BILL
let riwayatPembayaran = [];

export const SaveBill = (req, res) => {
  const { pesanan, totalHarga, uangPembeli, kembalian } = req.body;

  try {
    const newPembayaran = {
      pesanan,
      totalHarga,
      uangPembeli,
      kembalian,
      waktu: new Date().toLocaleString(),
    };

    riwayatPembayaran.push(newPembayaran);

    res.status(201).json({ msg: 'Riwayat Pembayaran Created Successfully', data: newPembayaran });
  } catch (error) {
    console.log(error.message);
    res.status(500).json({ msg: 'Internal Server Error' });
  }
};

export const GetRiwayat = (req, res) => {
  try {
    console.log('Riwayat Pembayaran in Server:', riwayatPembayaran);
    res.status(200).json({ data: riwayatPembayaran });
  } catch (error) {
    console.log(error.message);
    res.status(500).json({ msg: 'Internal Server Error' });
  }
};

  


  //