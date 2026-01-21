express = require("express");
path = require("path")


const router = express.Router();

router.get("/", (req, res) => {
  res.sendFile(
    path.join(process.cwd(), "public", "html", "home.html")
  );
});

module.exports = router;
