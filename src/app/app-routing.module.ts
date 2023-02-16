import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RegisterComponent } from './components/register/register.component';
import { RegisteredListComponent } from './components/registered-list/registered-list.component';
import { UserDetailComponent } from './components/user-detail/user-detail.component';

const routes: Routes = [
    
  { 
    path: '',
    redirectTo:'register',
    pathMatch: 'full'
  },

  { 
    path: 'list',
    component: RegisteredListComponent
  },
  
  { 
    path: 'register',
    component: RegisterComponent
  },

  {
    path: 'detail/:id',
    component: UserDetailComponent
  },

  {
    path: 'update/:id',
    component: RegisterComponent
  }



];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
