import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { ConfpassComponent } from './pages/confpass/confpass.component';
import { CategoryComponent } from './pages/dashboard/category/category.component';
import { AddcategoryComponent } from './pages/dashboard/addcategory/addcategory.component';
import { EditcategoryComponent } from './pages/dashboard/editcategory/editcategory.component';
import { AuthGuard } from './services/auth.guard';
import { ErrorComponent } from './error/error.component';


const routes: Routes = [
  {path:'',component:LoginComponent},
  {path:'dashboard',canActivate:[AuthGuard],component:DashboardComponent,children:[
    {path:'category',component:CategoryComponent},
    {path:'addcategory',component:AddcategoryComponent},
    {path:'editcategory/:cid',component:EditcategoryComponent},
    {path:'changepass',component:ConfpassComponent}
  ]},
   {path:'**',component:ErrorComponent}  
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
