import { Component } from '@angular/core';

@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.scss']
})
export class SkillsComponent {
skillsLis:any[]=[
  {i:'fa-brands fa-html5',h2:'HTML5'},
  {i:'fa-brands fa-css3-alt',h2:'Css3'},
  {i:'fa-brands fa-bootstrap',h2:'Bootstrap'},
  {i:'fa-brands fa-js',h2:'JavaScript'},
  {i:'fa-solid fa-moon',h2:'JQuery'},
  {i:'fa-brands fa-sass',h2:'SASS'},
  {i:'fa-brands fa-github',h2:'GitHub'},
  {i:'fa-solid fa-arrows-rotate',h2:'AJAX'},
  {i:'fa-brands fa-angular',h2:'Angular'},



]
}
