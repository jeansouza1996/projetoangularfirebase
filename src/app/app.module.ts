import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AngularFireModule } from 'angularfire2';
import { AngularFireDatabaseModule } from 'angularfire2/database';
import { environment } from '../environments/environment';
import { AngularFireAuthModule } from '@angular/fire/auth';
import { AppComponent } from './app.component';
import { FuncionariosComponent } from './funcionarios/funcionarios.component';
import { FuncionarioComponent } from './funcionarios/funcionario/funcionario.component';
import { FuncionarioListComponent } from './funcionarios/funcionario-list/funcionario-list.component';
import { FormsModule} from '@angular/forms';
import { ToastrModule } from 'ngx-toastr';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { AuthGuardService } from './guards/auth-guard.service';

const appRoutes: Routes = [
  { path: 'login', component: LoginComponent },  
  { path: 'funcionarios', component: FuncionariosComponent, canActivate: [AuthGuardService] },  
  { path: 'home', component: HomeComponent },
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: '**', component: PageNotFoundComponent }
];


@NgModule({
  declarations: [
    AppComponent,
    FuncionariosComponent,
    FuncionarioComponent,
    FuncionarioListComponent,
    PageNotFoundComponent,
    HomeComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    AngularFireModule.initializeApp(environment.firebaseConfig),
    AngularFireDatabaseModule,
    ToastrModule.forRoot(),
    FormsModule,
    AngularFireAuthModule,
    RouterModule.forRoot(
        appRoutes,
        { enableTracing: true}
    )


  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
