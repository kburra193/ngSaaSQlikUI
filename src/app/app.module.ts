import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './Shared/header/header.component';
import { FooterComponent } from './Shared/footer/footer.component';
import { HomeComponent } from './Pages/home/home.component';
import { QlikAppComponent } from './Components/qlik-app/qlik-app.component';
import { BannerComponent } from './Components/banner/banner.component';
import { ShowItemComponent } from './Components/show-item/show-item.component';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [AppComponent, HeaderComponent, FooterComponent, HomeComponent, QlikAppComponent, BannerComponent, ShowItemComponent],
  imports: [BrowserModule, AppRoutingModule,HttpClientModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
