import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent} from './home/home.component';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';
import { InsuranceComponent } from './insurance/insurance.component';
import { InsuranceDetailsComponent } from './insurance-details/insurance-details.component';
import { NewsComponent } from './news/news.component';
import { NewsViewsComponent } from './news-views/news-views.component';
import { UserformComponent } from './userform/userform.component';
import { CancellationComponent } from './cancellation/cancellation.component';
import { SuccessComponent } from './success/success.component';
const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent , title: "HomePage" },
  { path: 'about', component: AboutComponent, title: "AboutPage" },
  { path: 'contact', component: ContactComponent, title: "ContactPage" },
  { path: 'insurance', component: InsuranceComponent, title: "InsurancePage" },
  { path: 'insurancedetails', component: InsuranceDetailsComponent, title: "InsuranceDetails" },
  { path: 'news', component: NewsComponent, title: "NewsPage" },
  { path: 'newsview', component: NewsViewsComponent, title: "NewsView" },
  { path: 'userform', component: UserformComponent, title: "UserformPage" },
  { path: 'cancelled', component: CancellationComponent, title: "CancellationPage" },
  { path: 'PurchasedInsurance', component: SuccessComponent, title: "PurchasedInsurance" }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
