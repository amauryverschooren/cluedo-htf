import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-kladblok',
  templateUrl: './kladblok.component.html',
  styleUrls: ['./kladblok.component.scss']
})
export class KladblokComponent implements OnInit {

  constructor() { }
  clues = [
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
]
  ngOnInit(): void {
  }

  test ( ){
    
  }
}
