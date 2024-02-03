import {mongoose} from 'mongoose';

mongoose.connect('mongodb+srv://martin12082000:Martin1208__+@alan-kasir.iqxfq30.mongodb.net/?retryWrites=true&w=majority', {
  // useNewUrlParser: true,
  // useUnifiedTopology: true,
  user: 'martin12082000', // Ganti dengan nama pengguna MongoDB jika diperlukan
  pass: 'Martin1208__+', // Ganti dengan kata sandi MongoDB jika diperlukan
});

export const Koneksi = mongoose.connection;

Koneksi.on('error', (err) => {
  console.error('Koneksi ke database gagal: ', err);
});

Koneksi.once('open', () => {
  console.log('Koneksi ke database berhasil');
  // Lakukan operasi yang diperlukan setelah berhasil terhubung ke database di sini
});
