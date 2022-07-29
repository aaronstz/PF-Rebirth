const { Router } = require("express");
const router = Router();
const mercadopago = require("mercadopago");
const {
    MP_PUBLIC_KEY, 
    MP_ACCESS_TOKEN
  } = process.env;

router.post("/", async (req, res) =>{
    const {id} =req.body;
   
mercadopago.configure({
  access_token: MP_ACCESS_TOKEN, 
});

// Crea un objeto de preferencia
let preference = {
    items: [
      {
        // id:  id,
        title: "Mi producto",
        unit_price: 100,
        quantity: 1,
      },
    ],
  };

    const response = await mercadopago.preferences.create(preference)
  const preferenceId = response.body.id
   res.send(response)
})

module.exports = router;
