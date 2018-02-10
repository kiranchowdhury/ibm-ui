import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';

import { SharedModule } from '@app/shared';
import { CoreModule } from '@app/core';

import { SettingsModule } from './settings';
import { StaticModule } from './static';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { WelcomeComponent } from './welcome/welcome.component';
import { CommonModule } from '@angular/common';
import { MessageResoureService } from './common/message-resoure.service';
import { DashboardModule } from './dashboard/dashboard.module';
import { QuoteactionsModule } from './quoteactions/quoteactions.module';
import { FormsModule } from '@angular/forms';

@NgModule({
  imports: [
    // angular
    CommonModule,
    BrowserAnimationsModule,
    BrowserModule,
    FormsModule,
    // core & shared
    CoreModule,
    SharedModule,

    // features
    // StaticModule,
    SettingsModule,

    // app
    AppRoutingModule,

    DashboardModule,

    QuoteactionsModule
  ],
  declarations: [AppComponent, WelcomeComponent],
  providers: [MessageResoureService],
  bootstrap: [AppComponent]
})
export class AppModule {}