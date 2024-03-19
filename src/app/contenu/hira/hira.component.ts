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
      "image":"Album_1/aoreno.png",
      "Lien_youtube":"https://www.youtube.com/watch?v=vxOnS2MFbpQ"
    },
    {
      "titre":"Ety ny vavahady",
      "rythme":"Sud.Af",
      "image":"Album_1/ety_.png",
      "Lien_youtube":""
    },
    {
      "titre":"Fahasoavanao",
      "rythme":"",
      "image":"Album_1/fahasoavanao.png",
      "Lien_youtube":"https://www.youtube.com/watch?v=GkD_k3e4Rug"
    },
    {
      "titre":"Faneva AMIKRI",
      "rythme":"",
      "image":"Album_1/faneva.png",
      "Lien_youtube":""
    },
    {
      "titre":"Fantantrao",
      "rythme":"slow ballad",
      "image":"Album_1/fantatrao.png",
      "Lien_youtube":"https://www.youtube.com/watch?v=UnusWetNNVg"
    },
    {
      "titre":"Jesosy hiady ho anao",
      "rythme":"Classique",
      "image":"Album_1/jesosy_hiady.png",
      "Lien_youtube":"https://www.youtube.com/watch?v=j5zLyRHsK0k"
    },
    {
      "titre":"Lehibe ny fitiavany",
      "rythme":"Country",
      "image":"Album_1/lehibe_ny fitiavany.png",
      "Lien_youtube":""
    },    
    {
      "titre":"Mifona",
      "rythme":"Slow",
      "image":"Album_1/mifona.png",
      "Lien_youtube":""
    },
    {
      "titre":"Ny Aminao",
      "rythme":"Afro.beat",
      "image":"Album_1/ny aminao.png",
      "Lien_youtube":""
    },
    {
      "titre":"Rongatry",
      "rythme":"Batrelaky",
      "image":"Album_1/rongatry.png",
      "Lien_youtube":""
    },
  ]

  album_v_2=[
    {
      "titre":"Hakanto",
      "rythme":"Slow",
      "image":"Album_2/Hakanto.png",
      "Lien_youtube":""
    },
    {
      "titre":"Hanaraka anao",
      "rythme":"Ba gasy",
      "image":"Album_2/Hanaraka anao.png",
      "Lien_youtube":""
    },
    {
      "titre":"Jesosy safidinay",
      "rythme":"Gospel",
      "image":"Album_2/Jesosy safidinay.png",
      "Lien_youtube":""
    },
    {
      "titre":"K'aboda etsana Jesosy",
      "rythme":"Batrelaky",
      "image":"Album_2/Kaboda.png",
      "Lien_youtube":""
    },
    {
      "titre":"Mamafaza voa tsara",
      "rythme":"slow",
      "image":"Album_2/Mamafaza voa.png",
      "Lien_youtube":""
    },
    {
      "titre":"Ny tena fifaliako",
      "rythme":"Country",
      "image":"Album_2/Nytena fifaliako.png",
      "Lien_youtube":""
    },
    {
      "titre":"Olom-baovao",
      "rythme":"",
      "image":"Album_2/Olom-baovao.png",
      "Lien_youtube":""
    },    
    {
      "titre":"O ry velona ô",
      "rythme":"Ba gasy",
      "image":"Album_2/O ry velona o.png",
      "Lien_youtube":""
    },
    {
      "titre":"Ray mpahary",
      "rythme":"Classique",
      "image":"Album_2/Ray mpahary.png",
      "Lien_youtube":""
    },
    {
      "titre":"Zao riano",
      "rythme":"Karitaky",
      "image":"Album_2/zao riano.png",
      "Lien_youtube":""
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
