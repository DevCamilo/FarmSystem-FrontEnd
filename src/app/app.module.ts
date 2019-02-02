// Importaciones
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http'; 

// Componentes
import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { LoginComponent } from './components/login/login.component';
import { NavLoginComponent } from './components/nav-login/nav-login.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { NavDashboardComponent } from './components/nav-dashboard/nav-dashboard.component';
import { CreateCropComponent } from './components/crops/create-crop/create-crop.component';

// Providers
import { LoginService } from './providers/login.service';
import { TaskService } from './providers/task.service';
import { CropService } from './providers/crop.service';

// Rutas
import { app_routing } from './app.routes';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    LoginComponent,
    NavLoginComponent,
    DashboardComponent,
    NavDashboardComponent,
    CreateCropComponent
  ],
  imports: [
    BrowserModule,
    app_routing,
    FormsModule,
    HttpClientModule
  ],
  providers: [
    LoginService,
    TaskService,
    CropService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
