import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-vocabulary',
  templateUrl: './vocabulary.component.html',
  styleUrls: ['./vocabulary.component.css']
})
export class VocabularyComponent implements OnInit {

  whiteRankNumbers= ['hanna', 'dul', 'set', 'net', 'doset', 'yoset', 'elgop', 'yadool', 'ah hope', 'yol'];
  whiteRankVocab =  [ 'integrity', 'perseverance', 'self-control', 'courtesy', 'indomitable-spirit'];

  yellowRankNumbers= ['yol-hanna', 'yol-dul', 'yol-set', 'yol-net', 'yol-doset', 'yol-yoset', 'yol-elgop', 'yol-yadool', 'yol-ah hope', 'sa mole'];
  yellowRankOath =   ['I shall observe the tenents of taekwondo.', 'I shall not misuse taekwondo.', 'I shall be a champion of freedom and justice.', 'I shall respect all elders and instructors.', 'I shall strive to make a more peaceful world.'];

  constructor() { }

  ngOnInit(): void {
  }

//   runCarosel()  {
//     const myCarouselElement = document.querySelector('#myCarousel')
//     const carousel = new bootstrap.Carousel(myCarouselElement, {
//   interval: 2000,
//   wrap: false
// })
//   }

  chooseWord()  {
    let wbVocab = this.whiteRankVocab[Math.floor(Math.random()*this.whiteRankVocab.length)];
    console.log(wbVocab);
    }
}
