import { Component, OnInit } from '@angular/core';
import { DataService } from 'src/app/services/data.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  public Recetas = [];
    constructor(private DataService: DataService, private router: Router) { }

  ngOnInit() {
  }

  getssssss(): void{

  }

}



