const db = require('../db');

// GET ALL MENU
exports.getAllMenu = (req, res) => {
    db.query('SELECT * FROM menu', (err, results) => {
        if (err) return res.status(500).json({ error: err.message });
        res.json(results);
    });
};


// GET MENU BY ID
exports.getMenuById = (req, res) => {
    const { id } = req.params;

    db.query('SELECT * FROM menu WHERE id = ?', [id], (err, results) => {
        if (err) return res.status(500).json({ error: err.message });

        if (results.length === 0) {
            return res.status(404).json({ message: 'Menu tidak ditemukan' });
        }

        res.json(results[0]);
    });
};


// CREATE MENU
exports.createMenu = (req, res) => {
    const { nama, kategori, harga } = req.body;
    const gambar = req.file ? req.file.filename : null;

    const sql = `
        INSERT INTO menu (nama, kategori, harga, gambar)
        VALUES (?, ?, ?, ?)
    `;

    db.query(sql, [nama, kategori, harga, gambar], (err, result) => {
        if (err) return res.status(500).json({ error: err.message });

        res.status(201).json({
            message: 'Menu berhasil ditambahkan',
            id: result.insertId
        });
    });
};


// UPDATE MENU
exports.updateMenu = (req, res) => {
    const { id } = req.params;
    const { nama, kategori, harga } = req.body;

    const gambar = req.file
        ? req.file.filename
        : req.body.gambar;

    const sql = `
        UPDATE menu
        SET nama = ?, kategori = ?, harga = ?, gambar = ?
        WHERE id = ?
    `;

    db.query(sql, [nama, kategori, harga, gambar, id], (err, result) => {
        if (err) return res.status(500).json({ error: err.message });

        if (result.affectedRows === 0) {
            return res.status(404).json({ message: 'Menu tidak ditemukan' });
        }

        res.json({ message: 'Menu berhasil diperbarui' });
    });
};


// DELETE MENU
exports.deleteMenu = (req, res) => {
    const { id } = req.params;

    db.query('DELETE FROM menu WHERE id = ?', [id], (err, result) => {
        if (err) return res.status(500).json({ error: err.message });

        if (result.affectedRows === 0) {
            return res.status(404).json({ message: 'Menu tidak ditemukan' });
        }

        res.json({ message: 'Menu berhasil dihapus' });
    });
};



