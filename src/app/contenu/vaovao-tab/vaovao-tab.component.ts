import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { NgIf } from '@angular/common';

@Component({
  selector: 'app-vaovao-tab',
  standalone: true,
  imports: [NgIf],
  templateUrl: './vaovao-tab.component.html',
  styleUrl: './vaovao-tab.component.css'
})
export class VaovaoTabComponent implements OnInit{
  vaovao:any;

  data_vaovao_fankalazana={
    "Titre":"AMIKRI mankalaza ny faha-15 ny taona nijoroany.",
    "Sous_titre":'Faneva : Ampy ho anao ny fahasoavako". II Kor 15 : 9a',
    "contenu":" Sampana iray velona ao anaty ny Fiangonana Loterana Malagasy Soanatao Ihosy, mitory sy mampiely ny Filazantsara"+
    "an-kira ary manana ny sata sy ny fitsipika mifehy sy ireo birao voafidy mitantana azy miaraka amin’ireo komity"+
    "mamolavolan-draharaha. \nMaherin’ny 50 ny mpikambana mandrafitra ny AMIKRI fa 30 hatramin’ny 35 eo ihany no eto"+
    "an-toerana noho ny fanohizana ny fianarana eny amin’ny Oniversite sy fanaovana asa na raharaha hafa ivelan’Ihosy."+
    "Misy vaomiera 5 ihany koa ny AMIKRI."+
    "\n\nTamin’ny taona 2007-2008 no efa nisy ity antoko mpihira ity,"+
    "fa saingy tamin’ny taona 2009 vao tena tafajoro voahasina teo amin’ny Alitara masina tao amin’ny Fiangonana"+
    "Soanatao. Amin’ity taona 2024 ity, mankalaza ny tsingerintaona faha 15 ny Chorale AMIKRI, ny faneva entina"+
    "hankalazana izany dia ny hoe « Ampy ho anao ny fahasoavako » II Kor 12 :9a. \n Ny Alahady 24 Mars 2024 izao ny"+
   " fanokafana ny fankalazana, mandritra izany dia misy fotoam-pivavahana aran-dritoaly tarihin’ny Pastora"+
    "RAZAFINIRINA Mahatradraibe mpitondra fitandremana ao amin’ny Fiangonana Soanatao. \n\nHisy ny lavanty an-kira"+
    "ataon’ny AMIKRI io marainan’ny Alahady fanokafana io sy ireo vokatra maro isan-karazany. Hisy ihany koa ny"+
   " « Porte Ouverte » ho fampahafantarana ny AMIKRI. Ny tolakandro dia hisy ny rindran-kira aram-pilazantsara"+
   " miavaka tontosain’ny AMIKRI, andrenesana mivantana ireo hiran’ny AMIKRI, ny taloha sy ny vaovao, ho haingoina"+
    "amin’ny dihy mirindra.Ireo rehetra ireo dia anasàna ireo Ray aman-dRenim-piangonana rehetra ato amin’ny FLM"+
   " Soanatao, ireo olom-boafidy sy voatendry na aram-piangonana izany na aram-panjakàna.",


    "titre_deuxieme":"Fiomanana",
    "deuxieme_paragraphe":"Efa natao ary mbola hitohy ny fanentanana sy ny fampahafantarana ny kristiana ao am-piangonana"+
    "Mivory ara-potoana sy tsy ara-potoana ny komity handamin-javatra"+
    "Mihetsika ny vaomiera tsirairay mandray izay tandrify azy."+
    'Misy ny fanamasahana ny hira faneva, sy ireo hira hatao lavanty sy rindran-kira “Gala”'+
    "Fanentanana hatrany ny mpikambana amin’ny fandoavana ny vola hanaovana fanamiana mitovy mba ho hahatratra ny daty farany nifanomezana ahafahana manao ny “commande” avy hatrany."+
    "Tsy sahatra mitondra am-bavaka ireo vaomiera voakasika sy ny mpikambana tsirairay hahatanteraka soamantsara ny fankalazàna."+
   " Efa aparitaka ny taratasy fanasàna."+
    "Misy hatrany na ara-potoana na tsia ny “Exercice physique” sy ny” Entrainement Vocal “ho fitaizana sy ho fanomanan-tena sy feo, hiatrehana ny rindran-kira."+
   " Efa misy ny serasera natao amin’ny tambazotran-tserasera ny publication sy ny Radio "+
    "Misy fankan-tsary etsy sy eroa hanaovana petan-drindrina, postera, sy amin’izay tokony hilana izany. "+
    "Mandeha ny fifampiresahana amin’ireo Ray aman-dReny sakaiza na hafa mba hifanome tanana amin’ny fanatontosana izao fankalazana izao.",
    
    "img":"4.JPG",
    "auteur":"Nangonin'Atoa RANDRIANIRINA Etienne Joël - Chef de choeur AMIRKI"
  }
  constructor(private route:ActivatedRoute){}


  ngOnInit(): void {
    this.route.queryParams.subscribe((params)=>{
    if(params['titre_vaovao'] == 'fankalazana'){
      this.vaovao = this.data_vaovao_fankalazana;
    }

    });  
  }

}
