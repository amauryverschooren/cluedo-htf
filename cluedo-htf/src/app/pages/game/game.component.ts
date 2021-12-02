import { Component, OnInit } from '@angular/core';
import { CluedoService } from 'src/app/services/cluedo.service';

@Component({
  selector: 'app-game',
  templateUrl: './game.component.html',
  styleUrls: ['./game.component.scss']
})
export class GameComponent implements OnInit {
  
  constructor(private cluedoService: CluedoService) { }
  
  ngOnInit(): void {
  }

  
  createLobby(){
    this.cluedoService.createGame().subscribe((resp)=>{
      this.cluedoService.lobby = resp;
      console.log(this.cluedoService.lobby);
    })
  }
  createGame(){
    this.cluedoService.startGame().subscribe((resp) => {
      this.cluedoService.game = resp;
    })
  }

}
