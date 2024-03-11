import { Component, OnInit, VERSION } from '@angular/core';
import { ServiceService } from '../../service/service.service';
import { NgxSpinnerService } from 'ngx-spinner';
import { HttpClientModule } from '@angular/common/http';
import { Subject, takeUntil } from 'rxjs';
import { NgFor,NgIf } from '@angular/common';
import { ActivatedRoute } from '@angular/router';
@Component({
  selector: 'app-hira',
  standalone: true,
  imports: [HttpClientModule,NgFor,NgIf],
  templateUrl: './hira.component.html',
  styleUrl: './hira.component.css'
})
export class HiraComponent implements OnInit{
  videos:any 
  album_2:any
  album_1:any
  album_video:any
  album_v_1=[
    {
      "titre":"Aoreno Mafy",
      "rythme":"karitaky",
      "image":"Album_1/aoreno.png"
    },
    {
      "titre":"Ety ny vavahady",
      "rythme":"Sud.Af",
      "image":"Album_1/ety_.png"
    },
    {
      "titre":"Fahasoavanao",
      "rythme":"",
      "image":"Album_1/fahasoavanao.png"
    },
    {
      "titre":"Faneva AMIKRI",
      "rythme":"",
      "image":"Album_1/faneva.png"
    },
    {
      "titre":"Fantantrao",
      "rythme":"slow ballad",
      "image":"Album_1/fantatrao.png"
    },
    {
      "titre":"Jesosy hiady ho anao",
      "rythme":"Classique",
      "image":"Album_1/jesosy_hiady.png"
    },
    {
      "titre":"Lehibe ny fitiavany",
      "rythme":"Country",
      "image":"Album_1/lehibe_ny fitiavany.png"
    },    
    {
      "titre":"Mifona",
      "rythme":"Slow",
      "image":"Album_1/mifona.png"
    },
    {
      "titre":"Ny Aminao",
      "rythme":"Afro.beat",
      "image":"Album_1/ny aminao.png"
    },
    {
      "titre":"Rongatry",
      "rythme":"Batrelaky",
      "image":"Album_1/rongatry.png"
    },
  ]

  album_v_2=[
    {
      "titre":"Hakanto",
      "rythme":"Slow",
      "image":"Album_2/Hakanto.png"
    },
    {
      "titre":"Hanaraka anao",
      "rythme":"Ba gasy",
      "image":"Album_2/Hanaraka anao.png"
    },
    {
      "titre":"Jesosy safidinay",
      "rythme":"Gospel",
      "image":"Album_2/Jesosy safidinay.png"
    },
    {
      "titre":"K'aboda etsana Jesosy",
      "rythme":"Batrelaky",
      "image":"Album_2/Kaboda.png"
    },
    {
      "titre":"Mamafaza voa tsara",
      "rythme":"slow",
      "image":"Album_2/Mamafaza voa.png"
    },
    {
      "titre":"Ny tena fifaliako",
      "rythme":"Country",
      "image":"Album_2/Nytena fifaliako.png"
    },
    {
      "titre":"Olom-baovao",
      "rythme":"",
      "image":"Album_2/Olom-baovao.png"
    },    
    {
      "titre":"O ry velona ô",
      "rythme":"Ba gasy",
      "image":"Album_2/O ry velona o.png"
    },
    {
      "titre":"Ray mpahary",
      "rythme":"Classique",
      "image":"Album_2/Ray mpahary.png"
    },
    {
      "titre":"Zao riano",
      "rythme":"Karitaky",
      "image":"Album_2/zao riano.png"
    },
  ]
  private unsubscribe$ = new Subject<void>();
  constructor(private spinner_: NgxSpinnerService, 
    private service_: ServiceService,
    private route:ActivatedRoute) { }



  ngOnInit() {
    this.route.queryParams.subscribe((params)=>{

      if(params['album'] == '1'){
        this.album_1 = params['album'],
        this.album_2 = ''
        this.album_video =this.album_v_1

      }
      else if(params['album']=='2'){
        this.album_1 = '',
        this.album_2 = params['album'],         
        this.album_video =this.album_v_2
      
      }

    })
    this.service_.getVideosForChanel("UCUq5Qvr0VKIr0lDZO-nHgNw", '50')
      .subscribe((data: any) => {
        this.videos = data.items;
        console.log(data)
      });
  }



  


}
