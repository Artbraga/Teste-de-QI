import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { GameAreaComponent } from './components/game-area/game-area.component';
import { CustomCanvasComponent } from './components/custom-canvas/custom-canvas.component';
import { HomeComponent } from './components/home/home.component';
import { HttpClientModule } from '@angular/common/http';
import { NivelComponent } from './components/nivel/nivel.component';

@NgModule({
  declarations: [
    AppComponent,
    GameAreaComponent,
    CustomCanvasComponent,
    HomeComponent,
    NivelComponent, 
  ],
  imports: [
    BrowserModule,
    HttpClientModule
  ],
  providers: [
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
