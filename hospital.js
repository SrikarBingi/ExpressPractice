const express = require("express");
const app = express();

// const port = 3002;

const user = [
  {
    name: "john",
    kidneys: [
      {
        healthy: false,
      },
      {
        healthy: true,
      },
    ],
  },
];

app.get("/", (req, res) => {
  const johnKidneys = user[0].kidneys;
  let healthyKidneys = 0;
  let kidneys = 0;
  for (let i = 0; i < johnKidneys.length; i++) {
    kidneys++;
    if (johnKidneys[i].healthy) {
      healthyKidneys++;
    }
  }
  let unHealthyKidneys = kidneys - healthyKidneys;
  res.send(
    "Total Kidneys : " +
      kidneys +
      " Healthy Kidneys : " +
      healthyKidneys +
      " Unhealthy Kidneys : " +
      unHealthyKidneys
  );
});

app.use(express.json());

app.post("/", (req, res) => {
  const isHealthy = req.body.isHealthy;
  user[0].kidneys.push({
    healthy: isHealthy,
  });
  res.send({
    msg: "Done!",
  });
});

app.put("/", (req, res) => {
  for (let i = 0; i < user[0].kidneys.length; i++) {
    user[0].kidneys[i].healthy = true;
  }
  res.send({});
});

app.delete("/", (req, res) => {
  let newKidneys = user[0].kidneys.filter((val) => {
    if (val.healthy) {
      return val;
    }
  });
  user[0].kidneys = newKidneys;
  res.send({
    msg: "Done!",
  });
});

app.listen(3002, () => {
  console.log("hey");
});
