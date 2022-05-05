import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatCardModule } from '@angular/material/card';
import { CategoryComponent } from './category/category.component';
import { AdmincardComponent } from './admincard/admincard.component';
import { CheckcardComponent } from './checkcard/checkcard.component';
import { DropdownComponent } from './dropdown/dropdown.component';
import { SettingsComponent } from './settings/settings.component';
import { TeamComponent } from './team/team.component';
import { ButtonComponent } from './button/button.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatTextBoxComponent } from './mat-text-box/mat-text-box.component';
import { MatTextareaComponent } from './mat-textarea/mat-textarea.component';
import { MatComboWithButtonComponent } from './mat-combo-with-button/mat-combo-with-button.component';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import {  MatFormFieldModule } from '@angular/material/form-field';
import { ToastNotificationComponent } from './toast-notification/toast-notification.component';
import {MatSnackBarModule} from '@angular/material/snack-bar';
import {MatTabsModule} from '@angular/material/tabs';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [
    CategoryComponent,
    AdmincardComponent,
    CheckcardComponent,
    DropdownComponent,
    SettingsComponent,
    TeamComponent,
    ButtonComponent,
    MatTextBoxComponent,
    MatTextareaComponent,
    MatComboWithButtonComponent,
    ToastNotificationComponent,
    NavBarComponent

  ],
  imports: [
    RouterModule,
    CommonModule,
    MatCardModule,
    FormsModule,
    MatInputModule,
    MatSelectModule,
    MatFormFieldModule,
    FormsModule,
    ReactiveFormsModule,
    MatSnackBarModule,
    MatTabsModule
    
  ],
  exports:[CategoryComponent,
    AdmincardComponent,
    CheckcardComponent,
    DropdownComponent,
    SettingsComponent,
    TeamComponent,
    ButtonComponent,
    MatTextBoxComponent,
    MatTextareaComponent,
    MatComboWithButtonComponent,
    ToastNotificationComponent,
    NavBarComponent

  ]
})
export class SharedModule { }
