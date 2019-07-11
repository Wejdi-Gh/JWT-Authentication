import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { RoleGuardService } from './services/role-guard.service';
import { LoginComponent } from './components/login/login.component';
import { AdminpageComponent } from './components/adminpage/adminpage.component';
import { ManagerpageComponent } from './components/managerpage/managerpage.component';
import { UserpageComponent } from './components/userpage/userpage.component';




const routes: Routes = [
  { path: '', redirectTo: '/login', pathMatch: 'full' },
  { path: 'login', component: LoginComponent },
  { path: 'admin', component: AdminpageComponent,
  canActivate: [RoleGuardService] , data: { 
    expectedRole: 'admin'
  }  },
  { path: 'manager', component: ManagerpageComponent,
  canActivate: [RoleGuardService] , data: { 
    expectedRole: 'manager'
  } },
  { path: 'user', component: UserpageComponent ,
  canActivate: [RoleGuardService] , data: { 
    expectedRole: 'user'
  } },
  { path: '**', redirectTo: '' }
];


@NgModule({
  imports: [RouterModule.forRoot(routes) ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
