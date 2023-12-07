const express = require("express");
const router = express.Router();
const imageRegex = /\/.+\.(svg|png|jpg|png|jpeg)$/; // You can add other image formats
const videoRegex = /\/.+\.(mp4|ogv)$/

router.get(imageRegex, (req, res) => {
  const filePath = req.path;
  const baseUrl = `${req.protocol}://${req.get('host')}`;
  res.redirect(303, `${baseUrl}/src${filePath}`);
});
router.get(videoRegex, (req, res) => {
  const filePath = req.path;
  const baseUrl = `${req.protocol}://${req.get('host')}`;
  res.redirect(303, `${baseUrl}/src${filePath}`);
});
module.exports = router;