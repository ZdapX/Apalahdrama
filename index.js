
const express = require('express');
const axios = require('axios');
const path = require('path');
const app = express();

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

const API_BASE = "https://api.sansekai.my.id/api/dramabox";

// Route Halaman Utama
app.get('/', async (req, res) => {
    try {
        // Contoh fetch data terbaru/search default
        const response = await axios.get(`${API_BASE}/search?query=drama`);
        const dramas = response.data.results || []; 
        res.render('index', { dramas });
    } catch (error) {
        res.render('index', { dramas: [], error: "Gagal memuat drama" });
    }
});

// Route Halaman Nonton
app.get('/watch/:id', async (req, res) => {
    const dramaId = req.params.id;
    try {
        // Ambil detail drama berdasarkan ID
        const response = await axios.get(`${API_BASE}/detail/${dramaId}`);
        const info = response.data;
        res.render('watch', { info });
    } catch (error) {
        res.send("Video tidak ditemukan atau API bermasalah.");
    }
});

module.exports = app; // Penting untuk Vercel
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Server running on http://localhost:${PORT}`));
