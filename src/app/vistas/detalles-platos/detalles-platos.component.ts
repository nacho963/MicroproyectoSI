import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { DataService } from '../../services/data.service';



@Component({
  selector: 'app-detalles-platos',
  templateUrl: './detalles-platos.component.html',
  styleUrls: ['./detalles-platos.component.css'],
  providers: [DataService],

})
export class DetallesPlatosComponent implements OnInit {

  public Id = '';
  recipes={};
  data = [];

  constructor(private rs: DataService, activateRoute: ActivatedRoute) { 
    this.Id = activateRoute.snapshot.params['id'];
}

  ngOnInit() {;
    console.log(this.Id);
    console.log(this.getData());
    }

  getData(){
    return this.recipes = this.rs.getData(this.Id);
  }

  }