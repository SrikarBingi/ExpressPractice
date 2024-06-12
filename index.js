const express = require("express");

function calculateSum(n) {
  let ans = 0;
  for (let i = 1; i <= n; i++) {
    ans += i;
  }
  return ans;
}

const app = express();

app.get("/", (req, res) => {
  const n = req.query.n;
  console.log(n);
  const ans = calculateSum(n);

  res.status(200).send(ans.toString());
});

app.listen(3001, () => {
  console.log("hey");
});
