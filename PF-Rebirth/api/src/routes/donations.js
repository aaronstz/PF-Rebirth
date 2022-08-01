const { Router } = require("express");
const router = Router();
const mercadopago = require("mercadopago");
const {
    MP_PUBLIC_KEY, 
    MP_ACCESS_TOKEN
  } = process.env;

  mercadopago.configure({
    access_token: MP_ACCESS_TOKEN, 
  });

router.post("/", async (req, res) =>{
  console.log('req.body', req.body)
    var {donacion} =req.body;
    console.log('donacion', donacion)
 
    let preference = {  
        items: [
          {
          title : `donacion de : $${donacion}`,
          unit_price : donacion, 
          quantity : 1 
        } 
      ],
         
        back_urls: {
          "success": "http://localhost:3001/donations/pagos",
          "failure": "http://localhost:3000/home",
          "pending": "http://localhost:3000/home"
      },
      auto_return: "approved",

      
  };

  mercadopago.preferences.create(preference)

  .then(function(response){
    global.init_point = response.body.init_point
    global.id = response.body.id;
    res.send({ id: global.id, init_point: global.init_point })//lo que devolvemos al front
})
.catch(function(error){
    console.log(error)
});
  
});

router.get('/pagos', function(req, res) {
    return res.redirect("http://localhost:3000/")
})

module.exports = router;
