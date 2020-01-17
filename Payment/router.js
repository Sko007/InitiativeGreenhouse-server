const { Router } = require("express");
const stripe = require("stripe")("sk_test_l41saeLbsuIjbHaW2frgUCIZ000L2E9ymA");

const router = new Router();

router.post("/payment", (req, res, next) => {
  const body = {
    source: req.body.token.id,
    amount: req.body.amount,
    currency: "EUR"
  };

  stripe.charges.create(body, (stripeErr, stripeRes) => {
    if (stripeErr) {
      res.status(500).send({ error: stripeErr });
    } else {
      res.status(200).send({ success: stripeRes });
    }
  });
});

module.exports = router
