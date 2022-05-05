import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddProcessComponent } from './component/add-process/add-process.component';
import { ProcessComponent } from './component/process/process.component';
import { ProcessesComponent } from './processes.component';
import { ProcessesResolver } from './resolver/processes.resolver';

const routes: Routes = [{
  path:"",
  component:ProcessesComponent,
  children:[
    {path:'', component:ProcessComponent,resolve:{department:ProcessesResolver}},
  {
    path:'add-process',component:AddProcessComponent,resolve:{department:ProcessesResolver}
  }
  ]
   
  
   }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProcessesRoutingModule { }
