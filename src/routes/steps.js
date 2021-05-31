const express = require("express");
const { allSteps, addSteps } = require("../controllers/steps");

const router = express.Router();

router.get("/", async (req, res) => {
  try {
    const data = await allSteps();
    res.status(200).send(data);
  } catch (error) {
    console.error(error);
    res.sendStatus(500);
  }
});

router.post("/add", async (req, res) => {
  try {
    const steps = await addSteps(req.body.steps);
    res.status(200).send(steps);
  } catch (error) {
    console.error(error);
    res.sendStatus(500);
  }
});

module.exports = router;
