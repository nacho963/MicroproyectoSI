import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DataService } from '../../services/data.service';



@Component({
  selector: 'app-detalles-platos',
  templateUrl: './detalles-platos.component.html',
  styleUrls: ['./detalles-platos.component.css'],
  providers: [DataService],

})
export class DetallesPlatosComponent implements OnInit {

    public Recetas = [];
    constructor(private DataService: DataService, private router: Router) { }

  ngOnInit() {
    this.get_recipes();
    this.router
  }

  get_recipes(): void {
    this.Recetas = this.DataService.get_recipes();
  }

  getid(){
    return this.DataService.get_recipes.name;
  }
}






