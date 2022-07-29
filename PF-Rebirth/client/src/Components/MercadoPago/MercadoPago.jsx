import React from "react";
import mercadopago from "mercadopago";


export default function MercadoPago({preference }) {
    
    // function createCheckoutButton(preferenceId) {
    //     // Initialize the checkout
    //     mercadopago.checkout({
    //       preference: {
    //         id: preferenceId
    //       },
    //       render: {
    //         container: '#button-checkout', // Class name where the payment button will be displayed
    //         label: 'Pay', // Change the payment button text (optional)
    //       }
    //     });
    //   }


    //   const script = document.createElement("script");
    //   console.log(script);
    //   script.type = "text/javascript";
    //   script.src =
    //     "https://sdk.mercadopago.com/js/v2";
    //   script.setAttribute("data-preference-id", res.global);
    //   const form = document.getElementById(FORM_ID);
    //   form.appendChild(script);
// // https://sdk.mercadopago.com/js/v2
// // https://www.mercadopago.com.ar/integrations/v1/web-payment-checkout.js

  const mp = new MercadoPago("TEST-f386b749-2a4c-4632-bb24-f6d0f169aba4", {
      locale: "es-AR",
    });

    <script src="https://sdk.mercadopago.com/js/v2"></script>

const checkout2 = mp.checkout({
    preference: {
      id: preference.id,
    },
    render: {
      container: ".cho-container",
      label: "Pagar",
    },
  });
  
  // Invocando la función posteriormente
  checkout2.render({
    container: ".cho-container",
    label: "PagarRRRRRRRRRRRRRRRR",
  });
  
  
  return(
      <div className=".cho-container">
          {/* <input type="radio" id="checkout-open-radio" onclick="checkout.open()" /> */}
            <div className=".cho-container" >
                <p>$100</p>
               
            </div>

            <div className=".cho-container" >
                <p>$200</p>
                
            </div>

            <div className=".cho-container" >
                <p>$300</p>
              

            </div>
        </div>
    )


}