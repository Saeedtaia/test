import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NotFoundComponent } from './not-found/not-found.component';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { PortofolioComponent } from './portofolio/portofolio.component';
import { ContactComponent } from './contact/contact.component';

const routes: Routes = [
  { path: '', redirectTo: '', pathMatch: 'full' },
  { path: '', component: HomeComponent, title: 'START FRAMEWORK' },
  { path: 'about', component: AboutComponent, title: 'about' },
  { path: 'portfolio', component: PortofolioComponent, title: 'portfolio' },
  { path: 'contact', component: ContactComponent, title: 'contact' },
  { path: '**', component: NotFoundComponent, title: 'not-found' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
