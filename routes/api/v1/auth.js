import { database } from "../../../app";
import { aplhabetizeUneenMovies, sortPreviouslyWatched } from '../../../util/helpers';
import { validateMovieData } from '../../../util/validation';
import { timeString } from "../../../logging";

const express = require("express");
const router = express.Router();
var attempts = 0;
const MAX_ATTEMPTS = 5;

router.post("/passwordcheck", (request, res) => {
  const { password } = request.body;
  console.log({password})
  if (password !== 'Abolition2020!') {
    attempts++;
    let attemptsLeft = MAX_ATTEMPTS - attempts;
    if (attemptsLeft < 0) {
      attemptsLeft = 0;
    }
    console.error("Incorrect password!!", password, " for ", request.ip, " at ", timeString, attemptsLeft, "attempts left.");

    return res.status(401).json({
      error: "Not authorized.",
      attempts: `You have ${attemptsLeft} attempts remaining.`,
      remaining: attemptsLeft
    });
  } else {
    attempts = 0;
    return res.status(200).json("Success");
  }
})

router.get("/monitor", (req, res) => {
  return res.status(200).json("UP!")
})


export default router;
