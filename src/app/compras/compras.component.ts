import { Component } from '@angular/core';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-compras',
  templateUrl: './compras.component.html',
  styleUrls: ['./compras.component.scss']
})
export class ComprasComponent {
  Comprar(){
    Swal.fire({
      title: "Você vai comprar este produto?",
      showDenyButton: true,
      icon: 'success',
      confirmButtonText: "Sim",
      denyButtonText: `Não`
    }).then((result) => {
      /* Read more about isConfirmed, isDenied below */
      if (result.isConfirmed) {
        Swal.fire("Produto adicionado no carrinho", "", "success");
      } else if (result.isDenied) {
        Swal.fire("Erro ao adicionar o produto no carrinho", "", "error");
      }
    });
  }
}
