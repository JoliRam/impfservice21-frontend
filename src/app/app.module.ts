import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { ReactiveFormsModule } from "@angular/forms";
import { RouterModule } from "@angular/router";
import { AppRoutingModule } from "./app-routing.module";
import { BrowserModule } from "@angular/platform-browser";
import { HttpClientModule } from "@angular/common/http";
import { AppComponent } from "./app.component";
import { HomeComponent } from "./home/home.component";
import { ImpfserviceService } from "./shared/impfservice.service";
import { VaccinationListComponent } from "./vaccination-list/vaccination-list.component";
import { VaccinationListItemComponent } from "./vaccination-list-item/vaccination-list-item.component";
import { VaccinationDetailsComponent } from "./vaccination-details/vaccination-details.component";
import { LoginComponent } from "./login/login.component";
import { AuthenticationService } from "./shared/authentication.service";
import { JwtInterceptorService } from "./shared/jwt-interceptor.service";
import { HTTP_INTERCEPTORS } from "@angular/common/http";
import { VaccinationFormComponent } from "./vaccination-form/vaccination-form.component";
import { UserDetailsComponent } from './user-details/user-details.component';
import { TokenInterceptorService } from "./shared/token-interceptor.service";

@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule,
    HttpClientModule,
    AppRoutingModule
  ],
  declarations: [
    AppComponent,
    HomeComponent,
    VaccinationListComponent,
    LoginComponent,
    VaccinationListItemComponent,
    VaccinationDetailsComponent,
    VaccinationFormComponent,
    UserDetailsComponent
  ],
  bootstrap: [AppComponent],
  providers: [
    ImpfserviceService,
    AuthenticationService,
    {
      provide: HTTP_INTERCEPTORS,
      useClass: JwtInterceptorService,
      multi: true
    },
    {
      provide: HTTP_INTERCEPTORS,
      useClass: TokenInterceptorService,
      multi: true
    }
  ]
})
export class AppModule {}
