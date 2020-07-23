import { Component, OnInit, ViewChild, Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/firestore';
import { AngularFireDatabase, AngularFireList } from '@angular/fire/database';
import { Observable } from 'rxjs';
import { NavController, ToastController } from '@ionic/angular';
import { MinusTransition } from 'src/app/models/minusTransition.model';

@Component({
  selector: 'app-test',
  templateUrl: './test.page.html',
  styleUrls: ['./test.page.scss'],
})

Observable
export class TestPage {

  minusTransitions: any
  
  constructor(
    public navCtrl: NavController,
    private afs: AngularFirestore
  ) 
  {
    console.log()
  }





}

