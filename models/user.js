// const mongoose = require('mongoose')
// const Schema = mongoose.Schema;

import mongoose from 'mongoose';
import { Schema } from 'mongoose';

const user = new Schema({
    name: String,
    image: String,
    mobile: Number,
});
export const userModel = mongoose.model('users', user);

const userSchema = new Schema({
    name: String,
    image: String,
    harga: Number,
    waktu: { type: Date, default: Date.now }
});
export const Produk = mongoose.model('barang', userSchema);
