import * as express from "express";

const router = express.Router();

/* GET home page. */
router.get("/", function (req, res, next) {
  res.send("Tic Tac Toe!!");
});

module.exports = router;
