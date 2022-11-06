import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NotReadyToFightComponent } from './not-ready-to-fight/not-ready-to-fight.component';
import { SandSculptureComponent } from './sand-sculpture/sand-sculpture.component';
import { ParticipantInfoComponent } from './participant-info/participant-info.component';
import { WelcomeComponent } from './welcome/welcome.component';
import { WarmUpComponent } from './warm-up/warm-up.component';
import { VocabularyComponent } from './vocabulary/vocabulary.component';

// import { TrackProgressComponent } from './track-progress/track-progress.component';

const routes: Routes = [
  { path: "", redirectTo: "welcome", pathMatch: "full" },
  { path: "welcome", component: WelcomeComponent },
  { path: "notReady", component: NotReadyToFightComponent },
  { path: "sandSculpture", component: SandSculptureComponent },
  { path: "participantInfo", component: ParticipantInfoComponent },
  { path: "warmUp", component: WarmUpComponent},
  { path: "vocabulary", component: VocabularyComponent},
  // { path: "trackProgress", component: TrackProgressComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
