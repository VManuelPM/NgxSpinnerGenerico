import { Component, OnInit } from '@angular/core';
import { ObtenerPaisesService } from 'src/app/services/obtener-paises.service';
import { SpinnerService } from 'src/app/services/spinner.service';

@Component({
  selector: 'app-listar-paises',
  templateUrl: './listar-paises.component.html',
  styleUrls: ['./listar-paises.component.scss']
})
export class ListarPaisesComponent implements OnInit {

  listaPaises: any = [];

  constructor(private obtenerPaisesService: ObtenerPaisesService, private spinnerService: SpinnerService) { }

  ngOnInit(): void {
    this.obtenerPaisesService.getPaises().subscribe(
      res => {
        this.listaPaises = res;
      },
      err => {
        console.log(err);
      }
    )
  }

}
