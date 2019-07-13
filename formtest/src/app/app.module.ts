import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { from } from 'rxjs';
  
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { HttpClientModule } from '@angular/common/http';
import { LoginService } from './services/login.service';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { ConfpassComponent } from './pages/confpass/confpass.component';
import { CategoryComponent } from './pages/dashboard/category/category.component';
import { AddcategoryComponent } from './pages/dashboard/addcategory/addcategory.component';
import { CategoryService } from './services/category.service';
import { EditcategoryComponent } from './pages/dashboard/editcategory/editcategory.component';
import { AuthserviceService } from './services/authservice.service';
import { AuthGuard } from './services/auth.guard';
import { ErrorComponent } from './error/error.component';

 
@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    DashboardComponent,
    ConfpassComponent,
    CategoryComponent,
    AddcategoryComponent,
    EditcategoryComponent,
    ErrorComponent,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [LoginService,CategoryService,AuthGuard,AuthserviceService],
  bootstrap: [AppComponent]
})
export class AppModule { }
