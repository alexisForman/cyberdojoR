import { HttpClient } from '@angular/common/http';
import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';



// import { SkillsService } from '../skills.service';

@Component({
  selector: 'app-participant-info',
  templateUrl: './participant-info.component.html',
  styleUrls: ['./participant-info.component.css']
})
export class ParticipantInfoComponent implements OnInit {
  @ViewChild('participant') participantForm: NgForm
  formHasBeenSubmitted = false;
  participantDetails = {
    name: "",
    age: "",
    rank: ""
  };

  firebaseRootURL:string =  "https://cyberdojo-a64cf-default-rtdb.firebaseio.com/participants.json";
  beltRanks = ['white','yellow', 'orange', 'green', 'blue', 'purple', 'brown', 'red', 'black']
  whiteBeltVocabulary = ['hanna','dul', 'set', 'net', 'doset', 'yoset', 'elgop', 'yadool', 'ah hope', 'yol', 'courtesy', 'integrity', 'perseverence', 'self-control', 'indomitable-spirit'];

  constructor(private http: HttpClient) { }


  ngOnInit(): void {
  }

  newParticipantRegistration(participantForm: NgForm)  {

    this.formHasBeenSubmitted = true;

    this.participantDetails.name = participantForm.value.name;
    this.participantDetails.age = participantForm.value.age;
    this.participantDetails.rank = participantForm.value.beltColor;

    participantForm.reset();
  }

  newParticipantToFirebase()  {
    this.http.post(this.firebaseRootURL, this.participantDetails).subscribe(responseData =>  {
      console.log("Firebase DB response:", responseData);
    })
  }






}

