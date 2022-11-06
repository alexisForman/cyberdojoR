import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { WelcomeComponent } from './welcome/welcome.component';
import { NotReadyToFightComponent } from './not-ready-to-fight/not-ready-to-fight.component';
import { SandSculptureComponent } from './sand-sculpture/sand-sculpture.component';
import { ParticipantInfoComponent } from './participant-info/participant-info.component';
import { FormsModule } from '@angular/forms';
import { VocabularyComponent } from './vocabulary/vocabulary.component';
import { WarmUpComponent } from './warm-up/warm-up.component';

@NgModule({
  declarations: [
    AppComponent,
    WelcomeComponent,
    NotReadyToFightComponent,
    SandSculptureComponent,
    ParticipantInfoComponent,
    VocabularyComponent,
    WarmUpComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
