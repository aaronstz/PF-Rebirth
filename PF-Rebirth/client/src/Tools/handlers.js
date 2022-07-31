import swal from "sweetalert";
import { postMercadoPago } from "../Redux/Actions/index.js";

export const handleMercadoPago = (e, donacion, dispatch) => {

    e.preventDefault()
    swal({
        title: `You are about to donate $${donacion["donacion"]}`,
        text: "Are you sure?",
        icon: "info",
        buttons: {
        sure: {
            text: 'Yes',
            value: 'sure'
        },
        cancel: 'Cancel'
        }
    }).then((value) => {

        switch (value) {
        case "sure":
        dispatch(postMercadoPago(donacion))
        .then((infoMP) => {
            const {data} = infoMP.data
            window.open(data.init_point, "_self")

        })
            break;

        default:
            break;
        }
    });
};