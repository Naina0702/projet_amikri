import { Component, OnInit } from '@angular/core';
import { NgFor } from '@angular/common';

@Component({
  selector: 'app-programa',
  standalone: true,
  imports: [NgFor],
  templateUrl: './programa.component.html',
  styleUrl: './programa.component.css'
})


export class ProgramaComponent implements OnInit{
  _new:any
  _old:any

  vaovao_titre=[{
    'flag':'new',
    'titre':'AMIKRI mankalaza ny faha-15 taona nijoroany.',
    'description':'Hotanterahina ny Alahady 24 Martsa 2024 ny fanokafana ny fakalazana.',
    'image':'Farafangana.jpg',
    'titre_vaovao':'fankalazana'
  },
]


  ngOnInit(): void {


  }
  


}
