import { Injectable } from '@angular/core';


@Injectable({
  providedIn: 'root'
})
export class CluedoService {

  constructor() { }
}


export interface ILobby {
  games: any[];
  players: any[];
  lobbyCode: string;
  _id: string;
  __v: number;
}