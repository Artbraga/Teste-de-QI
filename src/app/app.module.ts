import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { GameAreaComponent } from './components/game-area/game-area.component';
import { CustomCanvasComponent } from './components/custom-canvas/custom-canvas.component';

@NgModule({
  declarations: [
    AppComponent,
    GameAreaComponent,
    CustomCanvasComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
