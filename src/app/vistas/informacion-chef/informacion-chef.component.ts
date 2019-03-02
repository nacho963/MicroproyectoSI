import { Component, OnInit } from '@angular/core';
import { DataService } from 'src/app/services/data.service';

@Component({
  selector: 'app-chef',
  templateUrl: './informacion-chef.component.html',
  styleUrls: ['./informacion-chef.component.css']
})
export class InformacionChefComponent implements OnInit {

  public chef = [];

  constructor(private rs: DataService) { }

  ngOnInit() {
    this.getChef();
  }

  getChef(): void{
    this.chef = this.rs.chef();
    console.log(this.chef);
  }

}
