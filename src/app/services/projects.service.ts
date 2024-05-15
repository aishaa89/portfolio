import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ProjectsService {

  constructor() { }
  getproject():any{
    let  projects:any[]
    projects=[
   {proctid:1,img1:["assets/Capture.JPG","assets/freshcart2.JPG","assets/fresh3.JPG","assets/fresh4.JPG","assets/fresh5.JPG","assets/fresh6.JPG","assets/fresh7.JPG"],title:"Fresh Cart",description:"Using HTML5 , CSS3 , Ajax(API) , Bootstrap , JavaScript , Angular,stripe gate way for payment",Category:"Angular",demo:"https://e-commerce-fresh-cart.netlify.app"
    ,git:"https://github.com/aishaa89/E-commerce-FreshCart.git"},
    {proctid:2,img1:["assets/angular1.JPG","assets/angular2.JPG","assets/angular3.JPG","assets/angular4.JPG"],title:"Start FrameWork",description:"Using HTML5 , CSS3 , Bootstrap  , Angular",Category:"Angular",demo:"https://aishaa89.github.io/Angular-Assingment1/"
    ,git:"https://github.com/aishaa89/Angular-Assingment1.git"},
    {proctid:3,img1:["assets/Yommy.JPG","assets/yommy2.JPG","assets/yommy3.JPG","assets/yommy4.JPG","assets/yommy5.JPG"],title:"Yommy App",description:"It is Javascript app to get data from API Using HTML5 , CSS3 , Ajax(API) , Bootstrap , JavaScript,Jquery",demo:"https://aishaa89.github.io/Yommy-App/"
    ,git:"https://github.com/aishaa89/Yommy-App.git",Category:"JQuery"},
    {proctid:4,img1:["assets/jquery-app.JPG","assets/jquery2.JPG","assets/jquery3.JPG","assets/jquery4.JPG"],title:"JQuery App",description:"Using HTML5 , CSS3 , Bootstrap , JavaScript,Jquery",demo:"https://aishaa89.github.io/JQuery/"
    ,git:"https://github.com/aishaa89/JQuery.git",Category:"JQuery"},
    {proctid:5,img1:["assets/game.JPG","assets/game2.JPG","assets/game3.JPG"],title:"Game Reviews",description:"Using HTML5 , CSS3 , Bootstrap,Ajax , JavaScript,API(Ajax)",demo:"https://aishaa89.github.io/OOP-API/"
    ,git:"https://github.com/aishaa89/OOP-API.git",Category:"JS"},
   {proctid:6,img1:["assets/weather.JPG","assets/weather2.JPG","assets/weather3.JPG"],title:"Weather App",description:"Using HTML5 , CSS3 , Bootstrap,Ajax(API) , JavaScript",demo:"https://aishaa89.github.io/WeatherAPI/"
  ,git:"https://github.com/aishaa89/WeatherAPI.git",Category:"JS"},
  {proctid:7,img1:["assets/login.JPG","assets/login2.JPG","assets/login3.JPG"],title:"Login System",description:"Using HTML5 , CSS3 , Bootstrap , JavaScript",demo:"https://aishaa89.github.io/Login_System/"
  ,git:"https://github.com/aishaa89/Login_System.git",Category:"JS"},
  {proctid:8,img1:["assets/bookmark.JPG","assets/bookmark2.JPG","assets/bookmark3.JPG"],title:"Bookmarker",description:"Using HTML5 , CSS3 , Bootstrap , JavaScript,LocalStorge to store data",demo:"https://aishaa89.github.io/BookMarker-JS/"
  ,git:"https://github.com/aishaa89/BookMarker-JS.git",Category:"JS"},
  {proctid:9,img1:["assets/daniels.JPG","assets/daniels2.JPG","assets/daniels3.JPG","assets/daniels4.JPG","assets/daniels5.JPG","assets/daniels6.JPG","assets/daniels7.JPG"],title:"Daniels",description:"Using HTML5 , CSS3 , Bootstrap,Jquery,animation",demo:"https://aishaa89.github.io/Daniels/"
  ,git:"https://github.com/aishaa89/Daniels.git",Category:"Bootstrap"},
  {proctid:10,img1:["assets/Devfolio.JPG","assets/Devfolio2.JPG","assets/Devfolio3.JPG","assets/Devfolio4.JPG","assets/Devfolio5.JPG","assets/Devfolio6.JPG","assets/Devfolio7.JPG"],title:"DevFolio",description:"Using HTML5 , CSS3 , Font Awesome , Bootstrap",demo:"https://aishaa89.github.io/DevFolio/"
  ,git:"https://github.com/aishaa89/DevFolio.git",Category:"Css"},
  {proctid:11,img1:["assets/fokir.JPG","assets/fokir2.JPG","assets/fokir3.JPG","assets/fokir4.JPG","assets/fokir5.JPG"],title:"Fokir",description:"Using Html,css, HTML5 , CSS3,animation",demo:"https://aishaa89.github.io/Fokir-page/"
  ,git:"https://github.com/aishaa89/Fokir-page.git"},

    ]
    return projects;
  }

  public getProject(id:number) {
    let projects: any[] = this.getproject();
    return projects.find((p) => p.proctid == id);
  }
}
