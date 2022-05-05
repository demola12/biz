import { SharedModule } from './shared/shared.module';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SidenavComponent } from './sidenav/sidenav.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatMenuModule } from '@angular/material/menu';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import { Error404Component } from './authentication/error404/error404.component';
import { ProcessesModule } from './processes/processes.module';
import { NavbarComponent } from './sidenav/navbar/navbar.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { RegisterComponent } from './authentication/components/register/register.component';
import { LoginComponent } from './authentication/components/login/login.component';
import { MatCardModule } from '@angular/material/card';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { RegistrationComponent } from './authentication/component-pieces/registration/registration.component';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { BasicAuthInterceptor, ErrorInterceptor } from './_helpers';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { ProcessesResolver } from './processes/resolver/processes.resolver';

@NgModule({
  declarations: [
    AppComponent,
    SidenavComponent,
    Error404Component,
    NavbarComponent,
    RegisterComponent,
    LoginComponent,
    RegistrationComponent

    
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatSidenavModule,
    MatToolbarModule,
    MatIconModule,
    MatListModule,
    ProcessesModule,
    MatMenuModule,
    NgbModule,
    MatCardModule,
    MatInputModule,
    MatSelectModule,
    SharedModule,
    HttpClientModule,
    StoreModule.forRoot({}),
    EffectsModule.forRoot([])
  ],
  providers: [{ provide: HTTP_INTERCEPTORS, useClass: BasicAuthInterceptor, multi: true },
    { provide: HTTP_INTERCEPTORS, useClass: ErrorInterceptor, multi: true }],
  bootstrap: [AppComponent]
})
export class AppModule { }
