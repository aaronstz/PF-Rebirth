// import React from "react";
import Swal from "sweetalert2/dist/sweetalert2.js";
import "sweetalert2/dist/sweetalert2.css";
import "./SweetAlert.css";

export default function SwalertCancel(dogName, deleteAdoption, id) {
  const swalWithBootstrapButtons = Swal.mixin({
    customClass: {
      confirmButton: "rebirth-button pink",
      cancelButton: "rebirth-button grey",
    },
    buttonsStyling: false,
  });
  swalWithBootstrapButtons
    .fire({
      title: "Are you sure you want cancel the adoption process?",
      text: "",
      icon: "question",
      showCancelButton: true,
      confirmButtonText: "Yes",
      cancelButtonText: "No",
      reverseButtons: true,
    })
    .then((result) => {
      if (result.isConfirmed) {
        swalWithBootstrapButtons.fire(
          "Cancelled adoption",
          "Dont worry," + dogName + " gonna find a good home",
          "error"
        ).then(()=>{deleteAdoption(id);})
               
      } else if (
        /* Read more about handling dismissals below */
        result.dismiss === Swal.DismissReason.cancel
      ) {
        swalWithBootstrapButtons.fire("Take your time", "", "info");
      }
    });
}
