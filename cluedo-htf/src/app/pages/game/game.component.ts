import { Component, OnInit } from '@angular/core';
import { CluedoService } from 'src/app/services/cluedo.service';

@Component({
  selector: 'app-game',
  templateUrl: './game.component.html',
  styleUrls: ['./game.component.scss']
})
export class GameComponent implements OnInit {
  round: number = 0;
  gridOptions: string[] = [];
  constructor(private cluedoService: CluedoService) { }
  flag: boolean = false;
  ngOnInit(): void {
    this.createLobby();
  }
  getGridOptions(){
    for (let i = 0; i < 9; i++) {
      this.gridOptions.push(this.cluedoService.game.data.grids[0].clues[i].text);
      
    }
  }
  
  createLobby(){
    this.cluedoService.createGame().subscribe((resp)=>{
      this.cluedoService.lobby = resp;
      console.log(this.cluedoService.lobby);
      this.createGame();
    })
  }
  createGame(){
    this.cluedoService.startGame().subscribe((resp) => {
      this.cluedoService.game = resp;
      console.log(this.cluedoService.game);
      this.flag = true;
      this.getGridOptions();
    })
  }

}
