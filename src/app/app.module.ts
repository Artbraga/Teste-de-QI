import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { GameAreaComponent } from './components/game-area/game-area.component';
import { CustomCanvasComponent } from './components/custom-canvas/custom-canvas.component';
import { HomeComponent } from './components/home/home.component';
import { HttpClientModule } from '@angular/common/http';
import { NivelComponent } from './components/nivel/nivel.component';
import { CronometroComponent } from './components/cronometro/cronometro.component';
import { RankingComponent } from './components/ranking/ranking.component';
import { CurvasComponent } from './components/curvas/curvas.component';
import { RotacaoComponent } from './components/rotacao/rotacao.component';

@NgModule({
  declarations: [
    AppComponent,
    GameAreaComponent,
    CustomCanvasComponent,
    HomeComponent,
    NivelComponent,
    CronometroComponent,
    RankingComponent,
    CurvasComponent,
    RotacaoComponent, 
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
