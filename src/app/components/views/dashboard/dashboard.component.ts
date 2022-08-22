import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})

export class DashboardComponent implements OnInit {
  teste: String[] = [];
  // @ViewChild('grafico' {static: true}) elemento: ElementRef
  constructor() { }

  
  ngAfterViewChecked(): void {
    //Called after every check of the component's view. Applies to components only.
    //Add 'implements AfterViewChecked' to the class.
    // new Chart(this.elemento, this.teste);
  }
  ngOnInit(): void {
    
  }


  

}

