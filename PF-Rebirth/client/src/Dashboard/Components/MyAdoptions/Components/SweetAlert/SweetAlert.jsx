// import React from 'react';
import Swal from "sweetalert2/dist/sweetalert2.js";
import "sweetalert2/dist/sweetalert2.css";
import './SweetAlert.css'
import { successAdoption } from "../../../../../Redux/Actions";

 export default function Swalert(dogName, deletePost ,id, petId ){

  const swalWithBootstrapButtons = Swal.mixin({
    customClass: {
      confirmButton: 'rebirth-button pink',
      cancelButton: 'rebirth-button grey'
    },
    buttonsStyling: false
  })
  swalWithBootstrapButtons.fire({
    title: 'Are you sure you want to give '+dogName+'?',
    text: "",
    icon: 'question',
    showCancelButton: true,
    confirmButtonText: 'Yes',
    cancelButtonText: 'No',
    reverseButtons: true
  }).then((result) => {
    if (result.isConfirmed) {
      swalWithBootstrapButtons.fire(
        'Adopted',
        `Yay! ${dogName} has found a forever home`,
        'success'
      ).then(()=>{
        successAdoption(id)
        deletePost(petId)
       })
    } else if (
      /* Read more about handling dismissals below */
      result.dismiss === Swal.DismissReason.cancel
    ) {
      swalWithBootstrapButtons.fire(
        'No this time',
        'Dont worry,'+dogName+' is going to find a good home',
        'error'
      )
    }
  })
  
 }
