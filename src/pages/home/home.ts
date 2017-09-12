import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { SpeechRecognition } from '@ionic-native/speech-recognition';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

bgcolor; string = 'white';

  constructor(public navCtrl: NavController, private SpeechRecognition:SpeechRecognition) {

  }
  ngOnInit(){
    this.SpeechRecognition.hasPermission()
        .then((hasPermission: boolean) => {

      if(!hasPermission){
        this.SpeechRecognition.requestPermission()
          .then(
            () => console.log('Granted'),
            () => console.log('Denied') 
        )
      }
        
    });
      
  }
start(){
  this.SpeechRecognition.startListening()
  .subscribe(
    (matches: Array<string>) =>{
      console.log(matches);
       this.bgcolor = matches[0];
    }
  )

  
}
}
