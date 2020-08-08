import { Component, OnInit } from '@angular/core';
import { LoadingController, ToastController } from '@ionic/angular';
import { AngularFirestore } from '@angular/fire/firestore';

@Component({
  selector: 'app-feed',
  templateUrl: './feed.page.html',
  styleUrls: ['./feed.page.scss'],
})
export class FeedPage implements OnInit {

  
  plusTransitions: any
  minusTransitions: any

  totalP: number
  totalM: number
  total: number

  constructor(
    private toastCtrl: ToastController, 
    private loadingCtrl: LoadingController,
    private firestore: AngularFirestore
  ) 
  {
    
  }

  ngOnInit() {
  }

  ionViewWillEnter() {
    this.getPlusTransitions()
    this.getMinusTransitions()
    
  }


  async getPlusTransitions() {
    // show loader
    let loader = await this.loadingCtrl.create({
      message: "Espere por favor..."
    })
    loader.present() 

    try {
      this.firestore.collection("plusTransitions").snapshotChanges().subscribe(data => {
        this.plusTransitions = data.map(e => {
          return {
            id: e.payload.doc.id,
            type: e.payload.doc.data()['type'],
            desc: e.payload.doc.data()['desc'],
            date: e.payload.doc.data()['date'],
            amount: e.payload.doc.data()['amount']
          }
        })
        this.totalP = 0
        for(
          var iP=0;
          iP < this.plusTransitions.length;
          iP++
          ) {
            this.totalP = this.totalP + this.plusTransitions[iP]['amount']
          }
        
      })
      // dismiss loader
      loader.dismiss()
    } 
    catch(e) {
      this.showToast(e)
    }
  }
  

  

  async getMinusTransitions() {
    // show loader
    let loader = await this.loadingCtrl.create({
      message: "Espere por favor..."
    })
    loader.present() 

    try {
      this.firestore.collection("minusTransitions").snapshotChanges().subscribe(data => {
        this.minusTransitions = data.map(e => {
          return {
            id: e.payload.doc.id,
            type: e.payload.doc.data()['type'],
            desc: e.payload.doc.data()['desc'],
            date: e.payload.doc.data()['date'],
            amount: e.payload.doc.data()['amount']
          }
        })
        this.totalM = 0
        for(
          var iM=0;
          iM < this.minusTransitions.length;
          iM++
          ) {
            this.totalM = this.totalM + this.minusTransitions[iM]['amount']
          } 
      })
      // dismiss loader
      loader.dismiss()
    }
    catch(e) {
      this.showToast(e)
    }
  }

  showToast(message: string) {
    this.toastCtrl.create({
      message: message,
      duration: 3000
    }).then(toastData => toastData.present())
  }



}
