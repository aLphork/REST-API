const express = require('express');
const Post = require('../models/post');
const authenticateToken = require('../middleware/auth');
const router = express.Router();

// Create Post
router.post('/create', authenticateToken, async (req, res) => {
    const { title, content } = req.body;
    try {
        const post = await Post.create({ title, content });
        res.status(201).json(post);
    } catch (err) {
        res.status(400).json({ error: err.message });
    }
});
// Read Posts
router.get('/getAll', async (req, res) => {
    const posts = await Post.findAll();
    res.json(posts);
});

// Update Post
router.put('/update/:id', authenticateToken, async (req, res) => {
    const { id } = req.params;
    const { title, content } = req.body;
    try {
        await Post.update({ title, content }, { where: { id } });
        res.json({ message: 'Post güncellendi' });
    } catch (err) {
        res.status(400).json({ error: err.message });
    }
});

// Delete Post
router.delete('/delete/:id', authenticateToken, async (req, res) => {
    const { id } = req.params;
    try {
        await Post.destroy({ where: { id } });
        res.json({ message: 'Post silindi' });
    } catch (err) {
        res.status(400).json({ error: err.message });
    }
});

module.exports = router;