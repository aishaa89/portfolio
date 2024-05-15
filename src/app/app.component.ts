import { Component, ElementRef, OnInit } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';
import * as $ from 'jquery';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent  {
  title = 'Protofolio';


Scrollup():void{
   $('html,body').animate({scrollTop:0} , 2000);
  scrollTo(0,0);

  
}
 
}
