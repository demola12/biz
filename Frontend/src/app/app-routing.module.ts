import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './authentication/components/login/login.component';
import { RegisterComponent } from './authentication/components/register/register.component';
import { ToastNotificationComponent } from './shared/toast-notification/toast-notification.component';
import { Error404Component } from './authentication/error404/error404.component';
import { SidenavComponent } from './sidenav/sidenav.component';
import { AuthGuard } from './_helpers';

const routes: Routes = [ 
  {
    path:'',
    component:SidenavComponent,
    children:
    [
      { path:'',redirectTo:'process', pathMatch:'full'},{
        path:'process',
        loadChildren: ()=> import('./processes/processes.module').then(m=>m.ProcessesModule)
        
      },
    ],
    canActivate: [AuthGuard]
  },
  {
    path:'registration',
    component:RegisterComponent
  },
  {
    path:'login',
    component:LoginComponent
  }, {
    path:'component-test',
    component:ToastNotificationComponent
  },
  {
    path:'**',
    component:Error404Component
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes,{useHash:false})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
