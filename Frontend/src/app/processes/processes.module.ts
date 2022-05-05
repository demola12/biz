import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProcessesRoutingModule } from './processes-routing.module';
import { ProcessComponent } from './component/process/process.component';
import { SharedModule } from '../shared/shared.module';
import {DragDropModule} from '@angular/cdk/drag-drop';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { ProcessesReducer } from './state/processes.reducer';
import { ProcessesEffects } from './state/processeseffects';
import { ProcessesResolver } from './resolver/processes.resolver';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { BasicAuthInterceptor, ErrorInterceptor } from '../_helpers';
import { ProcessesService } from './services/processes.service';
import { AddStepComponent } from './component-pieces/add-step/add-step.component';
import { AddProcessComponent } from './component/add-process/add-process.component';
import { MatMenuModule } from '@angular/material/menu';
import { AddCategoryComponent } from './component-pieces/add-category/add-category.component';
import { MatDialogModule } from '@angular/material/dialog';
import { StepPopupComponent } from './component-pieces/step-popup/step-popup.component';
import { QuillModule } from 'ngx-quill';
import { quillModule } from './model/quill-toolbar';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ProcessesComponent } from './processes.component';
@NgModule({
  declarations: [
    ProcessComponent,
    AddStepComponent,
    AddProcessComponent,
    AddCategoryComponent,
    StepPopupComponent,
    ProcessesComponent
    
  ],
  imports: [
    CommonModule,
    ProcessesRoutingModule,
    SharedModule,
    DragDropModule,
    StoreModule.forFeature('processes', ProcessesReducer),
		EffectsModule.forFeature([ProcessesEffects]),
    MatMenuModule,
    MatDialogModule,
    FormsModule,
    ReactiveFormsModule,
    QuillModule.forRoot(
     {
        modules: quillModule
       // https://www.npmjs.com/package/ngx-quill
      }
    )
    
  ],
  providers:[
    ProcessesService,
    ProcessesResolver,
    
    
  ]
})
export class ProcessesModule { }
