import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute } from '@angular/router';
import { ProjectsService } from 'src/app/services/projects.service';
import { CarouselModule } from 'ngx-owl-carousel-o';
import { OwlOptions } from 'ngx-owl-carousel-o';
@Component({
  selector: 'app-detailes',
  standalone: true,
  imports: [CommonModule,CarouselModule],
  templateUrl: './detailes.component.html',
  styleUrls: ['./detailes.component.scss']
})
export class DetailesComponent implements OnInit{
  id:any;
  projectItem:any;
constructor(private _ActivatedRoute:ActivatedRoute,private _ProjectsService:ProjectsService){}

ngOnInit(): void {
  this._ActivatedRoute.params.subscribe(params=>{
    this.id=params['id'];
    console.log(this.id)
   this.projectItem= this._ProjectsService.getProject(this.id);
   console.log(this.projectItem)
  })
}
customOptions: OwlOptions = {
  loop: true,
  mouseDrag: true,
  touchDrag: false,
  pullDrag: false,
  dots: false,
  navSpeed: 1000,
  autoplay:true,
  autoplayTimeout:2000,
  autoplaySpeed:true,
  navText: ['Pre', 'Next'],
  responsive: {
    0: {
      items:1
    }
 
  },
  nav: true
}

}
