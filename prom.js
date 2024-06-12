const cart = ["shoes", "belt", "perfume"];

createOrder(cart)
  .then((orderId) => {
    console.log(orderId);
    return orderId;
  })
  .then((orderId) => {
    return proceedToPayment(orderId);
  })
  .then(function ({ message, amt }) {
    console.log(message, "of amount:", amt);
    return showOrderSummary(message, amt);
  })
  .then(function ({ message, amt }) {
    console.log("Your wallet has been debited by:", amt);
  })
  .catch((err) => {
    console.log(err.message);
  });

function createOrder(cart) {
  const pr = new Promise((resolve, reject) => {
    if (!validateCart(cart)) {
      const err = new Error("Invalid cart");
      reject(err);
    }
    orderId = "12345";
    resolve(orderId);
  });
  return pr;
}

function proceedToPayment(orderId) {
  return new Promise((resolve, reject) => {
    resolve({
      message: `Payment Successful for order id: ${orderId}`,
      amt: 2500,
    });
  });
}

function showOrderSummary(paymentInfo, amt) {
  return new Promise(function (resolve, reject) {
    // console.log(amt);
    if (amt >= 2000) {
      resolve({ message: "You have ordered items that cost ${amt} RS", amt });
    } else {
      reject(new Error("Please buy more for discount"));
    }
  });
}

function validateCart(cart) {
  return true;
}
