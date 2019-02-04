import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { LoginComponent } from './components/login/login.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { CreateCropComponent } from './components/crops/create-crop/create-crop.component';
import { ListCropComponent } from './components/crops/list-crop/list-crop.component';

const app_routes: Routes = [
    { path: '', component: HomeComponent },
    { path: 'login', component: LoginComponent  },
    { path: 'dashboard', component: DashboardComponent },
    { path: 'dashboard/create-crop', component: CreateCropComponent },
    { path: 'dashboard/list-crop', component: ListCropComponent }
];

export const app_routing = RouterModule.forRoot(app_routes);