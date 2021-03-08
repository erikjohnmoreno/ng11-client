import { Injectable } from '@angular/core';
import Swal from 'sweetalert2';

@Injectable({
  providedIn: 'root'
})
export class SwalService {

  constructor() { }

  public toastr(message: string, type: any = 'success'): void {
    const Toast = Swal.mixin({
      toast: true, 
      position: 'top-end',
      showConfirmButton: false,
      timer: 3000,
      onOpen: (toast) => {
        toast.addEventListener('mouseenter', Swal.stopTimer);
        toast.addEventListener('mouseleave', Swal.resumeTimer);
      }
    })

    Toast.fire({
      icon: type,
      title: message
    })
  }

  public alert(
    title: string, 
    message: string, 
    type: any = 'warning', 
    confirmButtonText: string) {
      Swal.fire({
        title: title,
        text: message,
        icon: type,
        confirmButtonText: confirmButtonText
      })
    }

  public confirmation(
    title: string,
    message: string,
    type: any = 'warning',
    confirmButtonText: string
  ) {
    Swal.fire({
      title: title,
      text: message,
      icon: type,
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: confirmButtonText
    })
      
    /**
     * sample chaining
     */
    // .then((result) => {
    //   if (result.value) {
    //     Swal.fire(
    //       'Deleted!',
    //       'Your file has been deleted.',
    //       'success'
    //     )
    //   }
    // })
  }

    
}
