import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PRELOADERComponent } from './components/preloader/preloader.component';
import { NAVBARComponent } from './components/navbar/navbar.component';
import { SLIDERComponent } from './components/slider/slider.component';
import { FEATRESComponent } from './components/featres/featres.component';
import { PORTFOLIOComponent } from './components/portfolio/portfolio.component';
import { PRINICNGComponent } from './components/prinicng/prinicng.component';
import { ABOUTComponent } from './components/about/about.component';
import { TESTIMONIALComponent } from './components/testimonial/testimonial.component';
import { TEAMComponent } from './components/team/team.component';
import { CONTACTComponent } from './components/contact/contact.component';
import { FOOTERComponent } from './components/footer/footer.component';
import { BACKComponent } from './components/back/back.component';

@NgModule({
  declarations: [
    AppComponent,
    PRELOADERComponent,
    NAVBARComponent,
    SLIDERComponent,
    FEATRESComponent,
    PORTFOLIOComponent,
    PRINICNGComponent,
    ABOUTComponent,
    TESTIMONIALComponent,
    TEAMComponent,
    CONTACTComponent,
    FOOTERComponent,
    BACKComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
