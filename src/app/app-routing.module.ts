import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { NotFoundComponent } from './components/not-found/not-found.component';
import { ProjectsComponent } from './components/projects/projects.component';
import { SkillsComponent } from './components/skills/skills.component';

const routes: Routes = 
[
  {path:'',redirectTo:'/home',pathMatch:'full'},
  {path:'home',component:HomeComponent,title:"home"},
  {path:'deatail/:id',loadComponent:()=>import('./components/detailes/detailes.component').then(mod=>mod.DetailesComponent)},
  {path:'projects',component:ProjectsComponent,
  children: [
  {path:'',loadComponent:()=>import('./components/allprojects/allprojects.component').then(mod=>mod.AllprojectsComponent)},
  {path:'allProjects',loadComponent:()=>import('./components/allprojects/allprojects.component').then(mod=>mod.AllprojectsComponent)},
]
},
{path:'skills',component:SkillsComponent,title:"Skills"},
{path:'**' , component:NotFoundComponent,title:"notFoundPage"},

];

 

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
  
 }
