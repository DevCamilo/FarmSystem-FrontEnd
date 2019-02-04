// Importaciones
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http'; 
import { SweetAlert2Module } from '@toverux/ngx-sweetalert2';
import { NgxPaginationModule } from 'ngx-pagination';

// Componentes
import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { LoginComponent } from './components/login/login.component';
import { NavLoginComponent } from './components/nav-login/nav-login.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { NavDashboardComponent } from './components/nav-dashboard/nav-dashboard.component';
import { CreateCropComponent } from './components/crops/create-crop/create-crop.component';
import { ListCropComponent } from './components/crops/list-crop/list-crop.component';

// Providers
import { LoginService } from './providers/login.service';
import { TaskService } from './providers/task.service';
import { CropService } from './providers/crop.service';
import { UserService } from './providers/user.service';

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
    CreateCropComponent,
    ListCropComponent
  ],
  imports: [
    BrowserModule,
    app_routing,
    FormsModule,
    HttpClientModule,
    NgxPaginationModule,
    SweetAlert2Module.forRoot({
      buttonsStyling: false,
      customClass: 'modal-content',
      confirmButtonClass: 'btn btn-primary',
      cancelButtonClass: 'btn'
  })
  ],
  providers: [
    LoginService,
    TaskService,
    CropService,
    UserService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
