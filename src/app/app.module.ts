import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';
import { HomeComponent } from './home/home.component';
import { InsuranceDetailsComponent } from './insurance-details/insurance-details.component';
import { InsuranceComponent } from './insurance/insurance.component';
import { NewsViewsComponent } from './news-views/news-views.component';
import { NewsComponent } from './news/news.component';
import { IonicModule } from '@ionic/angular';
import { FormsModule } from '@angular/forms';
import { UserformComponent } from './userform/userform.component';
import { CancellationComponent } from './cancellation/cancellation.component';
import { SuccessComponent } from './success/success.component';
@NgModule({
  declarations: [
    AppComponent,
    AboutComponent,
    ContactComponent,
    HomeComponent,
    InsuranceDetailsComponent,
    InsuranceComponent,
    NewsViewsComponent,
    NewsComponent,
    UserformComponent,
    CancellationComponent,
    SuccessComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    IonicModule.forRoot()
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
