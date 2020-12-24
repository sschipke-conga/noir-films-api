const express = require("express");
import movieData from '../../../data/movieData';
const router = express.Router();


router.use(function (req, res, next) {
  console.log(req.ip, "<<<--- IP")
  next();
})

router.use(function (req, res, next) {
  console.log("Number of movies: -> ", movieData.length)
  next();
})

router.get("/", (req, res) => {
  return res
  .status(200)
  .json('You have successfully connected');
})

export default router;