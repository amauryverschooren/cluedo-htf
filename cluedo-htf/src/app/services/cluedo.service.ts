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
  game: IGame = {
    "state": "Ready",
    "round": 0,
    "data": {
        "clues": [
            {
                "id": "a1a80de2-ecb7-4b4e-a29c-53f8e5638e6d",
                "name": "Toilet",
                "type": "location"
            },
            {
                "id": "85008873-48a9-4eac-846a-95a7dc32f8a6",
                "name": "Keuken",
                "type": "location"
            },
            {
                "id": "67bcc772-67a2-4ce0-a0ed-2ac2813c8658",
                "name": "Garage",
                "type": "location"
            },
            {
                "id": "43ac0886-74b2-439e-b2a8-76a1df354083",
                "name": "Poolhouse",
                "type": "location"
            },
            {
                "id": "23875574-b561-41b6-a217-76c330114639",
                "name": "Apple Pencil",
                "type": "weapon"
            },
            {
                "id": "485d79b9-ad44-436b-bcfb-24a64c8645be",
                "name": "Champagnefles",
                "type": "weapon"
            },
            {
                "id": "c5a83413-77b5-4072-8c4c-369748a9357d",
                "name": "Wandelstok",
                "type": "weapon"
            },
            {
                "id": "58fbe3d1-acaf-462b-9570-f440c66b8fc8",
                "name": "Cybertruck",
                "type": "weapon"
            },
            {
                "id": "3ede653c-7b68-4247-bd8a-0b1011163ee1",
                "name": "Hillary Plankton",
                "type": "murderer"
            },
            {
                "id": "f3500192-7104-4d93-9e2e-1809439d2cac",
                "name": "Warren A La Carte",
                "type": "murderer"
            },
            {
                "id": "12ce84f8-096c-4904-80e1-11f54a7413b0",
                "name": "Donald Trunk",
                "type": "murderer"
            },
            {
                "id": "de35f2e3-a2eb-4d3a-b7b2-d9799230e543",
                "name": "Donna X",
                "type": "murderer"
            }
        ],
        "grids": [
            {
                "id": "2bcd8e8a-98d7-4dcf-a9c1-695149a4c2d5",
                "clues": [
                    {
                        "id": "f7199ab8-a094-43e0-97d5-cf07fd55d2a8",
                        "text": "Dom Perignon"
                    },
                    {
                        "id": "15dba272-dda1-4ef0-af5e-087938b0573b",
                        "text": "Afwassen"
                    },
                    {
                        "id": "95a92bbc-572a-4780-a7ce-862d88b5b578",
                        "text": "Veuve Clicquot"
                    },
                    {
                        "id": "14b6ef6f-921a-4951-919c-db4a07fd1250",
                        "text": "Menu"
                    },
                    {
                        "id": "3fc5a6f9-ab09-4d0d-8a43-792e806302f8",
                        "text": "Bril"
                    },
                    {
                        "id": "0e89f642-d6b3-4676-8d1a-3618fabb307c",
                        "text": "Investeerder"
                    },
                    {
                        "id": "25cfd0c9-b061-4fcb-bdbc-3f3c7fa3f482",
                        "text": "Kookplaat"
                    },
                    {
                        "id": "ed5a1dd4-ed46-4972-8c1c-41567764fdbb",
                        "text": "Bestek"
                    },
                    {
                        "id": "b2d0ceec-8280-4c7f-8957-403d38d5039f",
                        "text": "Moët & Chandon"
                    }
                ],
                "solution": {
                    "location": {
                        "id": "85008873-48a9-4eac-846a-95a7dc32f8a6",
                        "name": "Keuken",
                        "type": "location"
                    },
                    "weapon": {
                        "id": "485d79b9-ad44-436b-bcfb-24a64c8645be",
                        "name": "Champagnefles",
                        "type": "weapon"
                    },
                    "murderer": {
                        "id": "f3500192-7104-4d93-9e2e-1809439d2cac",
                        "name": "Warren A La Carte",
                        "type": "murderer"
                    }
                }
            },
            {
                "id": "00da066c-469c-4574-a313-0459f15580ee",
                "clues": [
                    {
                        "id": "4b81035a-700c-4f74-8ce3-db06de52bd6a",
                        "text": "Poort"
                    },
                    {
                        "id": "919293cb-e605-46e9-b2fe-c7a7dcb24142",
                        "text": "Mooi handvat"
                    },
                    {
                        "id": "32e261fc-8b6f-45e1-9edc-9a3d9fd3ef9a",
                        "text": "Auto"
                    },
                    {
                        "id": "f80d1e0b-b00f-491a-9b3a-e2de0b62495b",
                        "text": "Comb-over coupe"
                    },
                    {
                        "id": "4615f68a-960a-4fa5-bb13-b86f3268bf0a",
                        "text": "Gemaakt van hout"
                    },
                    {
                        "id": "07d181a7-9532-46e5-968b-0dd4f2495b27",
                        "text": "Fiets"
                    },
                    {
                        "id": "9c3db6ee-1e55-470c-8fcf-a7388a2f5bb7",
                        "text": "Om niet om te vallen"
                    },
                    {
                        "id": "dfb3087e-8c2b-4e28-aad0-fcbd8ae9c610",
                        "text": "Barron & Ivanka"
                    },
                    {
                        "id": "bc36ec5f-0471-4934-9c0b-3247f34cfbf3",
                        "text": "Bleach drinken"
                    }
                ],
                "solution": {
                    "location": {
                        "id": "67bcc772-67a2-4ce0-a0ed-2ac2813c8658",
                        "name": "Garage",
                        "type": "location"
                    },
                    "weapon": {
                        "id": "c5a83413-77b5-4072-8c4c-369748a9357d",
                        "name": "Wandelstok",
                        "type": "weapon"
                    },
                    "murderer": {
                        "id": "12ce84f8-096c-4904-80e1-11f54a7413b0",
                        "name": "Donald Trunk",
                        "type": "murderer"
                    }
                }
            },
            {
                "id": "89701fef-5f17-42ea-9aa5-80ec6b4234c6",
                "clues": [
                    {
                        "id": "9e4141cf-4ed6-407d-bf13-e858847b87dc",
                        "text": "Water met chloor"
                    },
                    {
                        "id": "4b21114e-0e1b-4821-966b-a48c5ce1c48e",
                        "text": "Elektrisch"
                    },
                    {
                        "id": "698df119-f146-4ce8-adae-b605753f74d4",
                        "text": "Like A Virgin"
                    },
                    {
                        "id": "f5152b8e-9862-4d55-8ab7-8d7162e083e2",
                        "text": "Aandacht zoeken bij Jimmy Fallon"
                    },
                    {
                        "id": "d391fc8f-388a-4d35-b8b0-36938e383f94",
                        "text": "Opblaaskrokodil"
                    },
                    {
                        "id": "9edd5819-7cf1-4ad8-b21e-b9676082ed3f",
                        "text": "Grijs hoekig ding"
                    },
                    {
                        "id": "f81c1da3-4ce5-451f-a7a0-28b12a8d47f8",
                        "text": "Feestjes"
                    },
                    {
                        "id": "9cb79d6d-640b-4fa3-8568-562fd6eb776d",
                        "text": "Venster kan niet kapot"
                    },
                    {
                        "id": "38a82602-c45e-44b4-8eca-96fb7f896e0c",
                        "text": "Queen of pop"
                    }
                ],
                "solution": {
                    "location": {
                        "id": "43ac0886-74b2-439e-b2a8-76a1df354083",
                        "name": "Poolhouse",
                        "type": "location"
                    },
                    "weapon": {
                        "id": "58fbe3d1-acaf-462b-9570-f440c66b8fc8",
                        "name": "Cybertruck",
                        "type": "weapon"
                    },
                    "murderer": {
                        "id": "de35f2e3-a2eb-4d3a-b7b2-d9799230e543",
                        "name": "Donna X",
                        "type": "murderer"
                    }
                }
            }
        ]
    }
  };
  constructor(private http: HttpClient) { }
  createGame(){
    return this.http.post<ILobby>(`${this.baseUrl}/lobby`, '');
  };

  startGame(){
    return this.http.post<IGame>(`${this.baseUrl}/game/${this.lobby.lobbyCode}/start`, '')
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