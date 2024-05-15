import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavigationEnd, Router, RouterLink } from '@angular/router';

import { Subscription } from 'rxjs';
@Component({
  selector: 'app-allprojects',
  standalone: true,
  imports: [CommonModule,RouterLink],
  templateUrl: './allprojects.component.html',
  styleUrls: ['./allprojects.component.scss']
})
export class AllprojectsComponent implements OnInit {
ngOnInit(): void {
  
}
  












  projectsList:any[]=[
    {id:1,img:"assets/Capture.JPG",h2:"Fresh Cart",p:"Using HTML5 , CSS3 , Ajax(API) , Bootstrap , JavaScript , Angular",demo:"https://e-commerce-fresh-cart.netlify.app"
    ,git:"https://github.com/aishaa89/E-commerce-FreshCart.git",icon:"fa-solid fa-cart-shopping"},
    {id:2,img:"assets/angular1.JPG",h2:"Start FrameWork",p:"Using HTML5 , CSS3 , Bootstrap , Angular",demo:"https://aishaa89.github.io/Angular-Assingment1/"
    ,git:"https://github.com/aishaa89/Angular-Assingment1.git",icon:""},
    {id:3,img:"assets/Yommy.JPG",h2:"Yommy App",p:"Using HTML5 , CSS3 , Ajax(API) , Bootstrap , JavaScript,Jquery",demo:"https://aishaa89.github.io/Yommy-App/"
    ,git:"https://github.com/aishaa89/Yommy-App.git",icon:"fa-solid fa-utensils"},
    {id:4,img:"assets/jquery-app.JPG",h2:"JQuery App",p:"Using HTML5 , CSS3 , Bootstrap , JavaScript,Jquery",demo:"https://aishaa89.github.io/JQuery/"
    ,git:"https://github.com/aishaa89/JQuery.git",icon:"fa-solid fa-moon"},
    {id:5,img:"assets/game.JPG",h2:"Game Reviews",p:"Using HTML5 , CSS3 , Bootstrap,Ajax , JavaScript",demo:"https://aishaa89.github.io/OOP-API/"
    ,git:"https://github.com/aishaa89/OOP-API.git",icon:""},
   {id:6,img:"assets/weather.JPG",h2:"Weather App",p:"Using HTML5 , CSS3 , Bootstrap,Ajax(API) , JavaScript",demo:"https://aishaa89.github.io/WeatherAPI/"
  ,git:"https://github.com/aishaa89/WeatherAPI.git",icon:""},
  {id:7,img:"assets/login.JPG",h2:"Login System",p:"Using HTML5 , CSS3 , Bootstrap , JavaScript",demo:"https://aishaa89.github.io/Login_System/"
  ,git:"https://github.com/aishaa89/Login_System.git",icon:"fa-solid fa-right-to-bracket"},
  {id:8,img:"assets/bookmark.JPG",h2:"Bookmarker",p:"Using HTML5 , CSS3 , Bootstrap , JavaScript",demo:"https://aishaa89.github.io/BookMarker-JS/"
  ,git:"https://github.com/aishaa89/BookMarker-JS.git",icon:"fa-solid fa-book-bookmark"},
  {id:9,img:"assets/daniels.JPG",h2:"Daniels",p:"Using HTML5 , CSS3 , Bootstrap,Jquery",demo:"https://aishaa89.github.io/Daniels/"
  ,git:"https://github.com/aishaa89/Daniels.git",icon:"fa-solid fa-user-tie"},
  {id:10,img:"assets/Devfolio.JPG",h2:"DevFolio",p:"Using HTML5 , CSS3 , Bootstrap",demo:"https://aishaa89.github.io/DevFolio/"
  ,git:"https://github.com/aishaa89/DevFolio.git",icon:"fa-solid fa-user-tie"},
  {id:11,img:"assets/fokir.JPG",h2:"Fokir",p:"Using  HTML5 , CSS3,animation",demo:"https://aishaa89.github.io/Fokir-page/"
  ,git:"https://github.com/aishaa89/Fokir-page.git",icon:"fa-solid fa-user-tie"},
]


}
