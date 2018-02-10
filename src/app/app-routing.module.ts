import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SettingsComponent } from './settings';
import { WelcomeComponent } from './welcome/welcome.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'welcome',
    pathMatch: 'full'
  },
  {
    path: 'welcome',
    component: WelcomeComponent,
    data: {
      title: 'Welcome'
    }
  },
  {
    path: 'dashboard',
    redirectTo: 'dashboard'
    // loadChildren: 'app/dashboard/dashboard.module#DashboardModule'
  },
  {
    path: 'myquotes',
    // loadChildren: 'app/quoteactions/quoteactions.module#QuoteactionsModule'
    redirectTo: 'myquotes'
  },
  {
    path: 'searchquotes',
    // loadChildren: 'app/quoteactions/quoteactions.module#QuoteactionsModule'
    redirectTo: 'searchquotes'
  },
  {
    path: 'settings',
    component: SettingsComponent,
    data: {
      title: 'Settings'
    }
  },
  // {
  //   path: 'examples',
  //   loadChildren: 'app/examples/examples.module#ExamplesModule'
  // },
  {
    path: '**',
    redirectTo: 'welcome'
  }
];

@NgModule({
  // useHash supports github.io demo page, remove in your app
  imports: [RouterModule.forRoot(routes, { useHash: true })],
  exports: [RouterModule]
})
export class AppRoutingModule {}