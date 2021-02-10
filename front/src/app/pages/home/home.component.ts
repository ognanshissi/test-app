import { Component, OnInit } from '@angular/core';
import { NavigateService } from 'src/app/services/navigate.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(private navigateServ: NavigateService) { }

  ngOnInit(): void {
  }

  toStep1(page:string){
    this.navigateServ.goToPage(page);
  }

}
