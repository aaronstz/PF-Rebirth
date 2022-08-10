const { Router } = require("express");
const router = Router();
const mercadopago = require("mercadopago");
const {
    MP_PUBLIC_KEY, 
    MP_ACCESS_TOKEN,
    REDIRECT_BACK,
    REDIRECT_FRONT
  } = process.env;

  mercadopago.configure({
    access_token: MP_ACCESS_TOKEN, 
  });

router.post("/", async (req, res) =>{

    var {donacion} =req.body;
    
    let preference = {  
        items: [
          {
          title : `donacion de : $${donacion}`,
          unit_price : donacion, 
          quantity : 1 
        } 
      ],
         
        back_urls: {
          "success": `${REDIRECT_BACK}/donations/pagos`,
          "failure": `${REDIRECT_FRONT}/home`,
          "pending": `${REDIRECT_FRONT}/home`
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
    res.send(error)
});
  
});

router.get('/pagos', function(req, res) {
    return res.redirect(`${REDIRECT_FRONT}/home`)
})

module.exports = router;
