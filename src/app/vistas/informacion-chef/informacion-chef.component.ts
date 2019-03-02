import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DataService } from '../../services/data.service';

@Component({
  selector: 'app-informacion-chef',
  templateUrl: './informacion-chef.component.html',
  styleUrls: ['./informacion-chef.component.css'],
  providers: [DataService],
})

export class InformacionChefComponent implements OnInit {

  public InfoChef = [];
  constructor(private DataService: DataService, private router: Router) { }

  ngOnInit() {
    this.get_Info_Chef();
    this.router
  }

  get_Info_Chef(): void {
    this.InfoChef = this.DataService.get_Info_Chef();
  }

  getname(){
    return this.DataService.get_Info_Chef.name;
  }
}
