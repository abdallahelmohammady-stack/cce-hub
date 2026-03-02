// server.js
require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const path = require('path'); // <--- 1. استدعاء المكتبة

const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

// <--- 2. هذا السطر الجديد: يقول للسيرفر أن أي ملف داخل مجلد public يُعرض مباشرة
app.use(express.static(path.join(__dirname, 'public')));

// ... باقي كود الاتصال بقاعدة البيانات والـ API كما هو ...
const mongoURI = process.env.MONGO_URI;
mongoose.connect(mongoURI)
  .then(() => console.log('✅ Connected to MongoDB'))
  .catch(err => console.error('❌ MongoDB connection error:', err));

const courseSchema = new mongoose.Schema({
    // ... الـ Schema كما هو ...
});
const Course = mongoose.model('Course', courseSchema);

// ... الـ Routes (GET, POST, PUT, DELETE) كما هي ...

app.listen(PORT, () => console.log(`🚀 Server running on port ${PORT}`));