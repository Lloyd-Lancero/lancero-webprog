const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
  res.json({ message: 'Articles fetched successfully', articles: [] });
});

router.get('/:id', (req, res) => {
  res.json({ message: `Article ${req.params.id}` });
});

module.exports = router;