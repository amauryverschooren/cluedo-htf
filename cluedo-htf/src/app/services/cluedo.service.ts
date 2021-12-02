import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class CluedoService {

  lobby: ILobby = {
    games: [],
    players: [],
    lobbyCode: '',
    _id: '',
    __v: 0
  }; 
  code: number = 0;
  baseUrl = 'https://htf-api.hyperdrive.studio';
  game?: IGame;
  constructor(private http: HttpClient) { }
  createGame(){
    return this.http.post<ILobby>(`${this.baseUrl}/lobby`, '');
  };

  startGame(){
    return this.http.post<IGame>(`${this.baseUrl}/game/${this.code}/start`, '')
  }
  

}


export interface ILobby {
  games: any[];
  players: any[];
  lobbyCode: string;
  _id: string;
  __v: number;
}


export interface Clue {
  id: string;
  name: string;
  type: string;
}

export interface Clue2 {
  id: string;
  text: string;
}

export interface Location {
  id: string;
  name: string;
  type: string;
}

export interface Weapon {
  id: string;
  name: string;
  type: string;
}

export interface Murderer {
  id: string;
  name: string;
  type: string;
}

export interface Solution {
  location: Location;
  weapon: Weapon;
  murderer: Murderer;
}

export interface Grid {
  id: string;
  clues: Clue2[];
  solution: Solution;
}

export interface Data {
  clues: Clue[];
  grids: Grid[];
}

export interface IGame {
  state: string;
  round: number;
  data: Data;
}