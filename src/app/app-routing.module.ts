import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SecComponent } from './sec/sec.component';
import { AboutComponent } from './about/about.component';
import { UsersComponent } from './users/users.component';
import { UsersinformationComponent } from './usersinformation/usersinformation.component';
const routes: Routes = [
  {path:'', component:SecComponent},

  {path: 'about',component:AboutComponent},
  {path: 'users', component:UsersComponent},
  {path: 'usersInformation',component:UsersinformationComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
