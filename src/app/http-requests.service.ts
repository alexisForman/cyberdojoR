import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ParticipantInfoComponent } from './participant-info/participant-info.component';

@Injectable({
  providedIn: 'root'
})
export class HttpRequestsService {

  firebaseRootURL:string =  "https://cyberdojo-a64cf-default-rtdb.firebaseio.com/participants.json";

  constructor(private http: HttpClient,
                      public participant: ParticipantInfoComponent) { }


  firstTimeSaveParticipant() {

    const newParticipant = this.participant.participantDetails;

    this.http.put(this.firebaseRootURL, newParticipant).subscribe(responseData =>  {
      console.log("Firebase DB response:", responseData);
    })



  }
}
