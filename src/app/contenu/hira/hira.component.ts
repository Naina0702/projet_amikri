import { Component, OnInit, TemplateRef, VERSION, ViewChild } from '@angular/core';
import { ServiceService } from '../../service/service.service';
import { NgxSpinnerService } from 'ngx-spinner';
import { HttpClientModule } from '@angular/common/http';
import { Subject, takeUntil } from 'rxjs';
import { NgFor,NgIf } from '@angular/common';
import { ActivatedRoute } from '@angular/router';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';
@Component({
  selector: 'app-hira',
  standalone: true,
  imports: [HttpClientModule,NgFor,NgIf],
  templateUrl: './hira.component.html',
  styleUrl: './hira.component.css'
})
export class HiraComponent implements OnInit{
  videos:any 
  data_:any
  album_2:any
  album_1:any
  album_video:any

  album_v_1=[
    {
      "titre":"Aoreno Mafy",
      "rythme":"karitaky",
      "image":"Album_1/aoreno.png",
    },
    {
      "titre":"Ety ny vavahady",
      "rythme":"Sud.Af",
      "image":"Album_1/ety_.png",
    },
    {
      "titre":"Fahasoavanao",
      "rythme":"",
      "image":"Album_1/fahasoavanao.png",
    },
    {
      "titre":"Faneva AMIKRI",
      "rythme":"",
      "image":"Album_1/faneva.png",
    },
    {
      "titre":"Fantantrao",
      "rythme":"slow ballad",
      "image":"Album_1/fantatrao.png",
    },
    {
      "titre":"Jesosy hiady ho anao",
      "rythme":"Classique",
      "image":"Album_1/jesosy_hiady.png",
    },
    {
      "titre":"Lehibe ny fitiavany",
      "rythme":"Country",
      "image":"Album_1/lehibe_ny fitiavany.png",
    },    
    {
      "titre":"Mifona",
      "rythme":"Slow",
      "image":"Album_1/mifona.png",
    },
    {
      "titre":"Ny Aminao",
      "rythme":"Afro.beat",
      "image":"Album_1/ny aminao.png",
    },
    {
      "titre":"Rongatry",
      "rythme":"Batrelaky",
      "image":"Album_1/rongatry.png",
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
  constructor(private spinner_: NgxSpinnerService, 
    private service_: ServiceService,
    private route:ActivatedRoute,
    private modalService:NgbModal,
    private sanitizer: DomSanitizer) { }

    
    transform(url: string): SafeResourceUrl {
      return this.sanitizer.bypassSecurityTrustResourceUrl(url);
  }
  

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

  //Album vol 1
  @ViewChild('content_aoreno') contentAoreno: any;
  @ViewChild('content_faneva') content_faneva: any;
  @ViewChild('content_ety') content_ety: any;
  @ViewChild('content_fahasoavanao') content_fahasoavanao: any;
  @ViewChild('content_jesosy') content_jesosy: any;
  @ViewChild('content_lehibe') content_lehibe: any;
  @ViewChild('content_mifona') content_mifona: any;
  @ViewChild('content_ny_aminao') content_ny_aminao: any;
  @ViewChild('content_rongatry') content_rongatry: any;
  @ViewChild('content_fantatrao') content_fantatrao: any;

  openXl(data:any) {

    switch(data.titre){
      case 'Aoreno Mafy':
        this.modalService.open(this.contentAoreno, { size: 'xl' });
        break;

      case 'Ety ny vavahady':
        this.modalService.open(this.content_ety, { size: 'xl' });
        break;

      case 'Fahasoavanao':
        this.modalService.open(this.content_fahasoavanao, { size: 'xl' });
        break;
        
      case 'Faneva AMIKRI':
        this.modalService.open(this.content_faneva, { size: 'xl' });
        break;
        
      case 'Fantatrao':
        this.modalService.open(this.content_fantatrao, { size: 'xl' });
        break;  

      case "Jesosy hiady ho anao":
        this.modalService.open(this.content_jesosy, { size: 'xl' });
        break;
        
      case 'Lehibe ny fitiavany':
        this.modalService.open(this.content_lehibe, { size: 'xl' });
        break;
        
      case 'Mifona':
        this.modalService.open(this.content_mifona, { size: 'xl' });
        break;          

      case "Ny Aminao":
        this.modalService.open(this.content_ny_aminao, { size: 'xl' });
        break;
        
      case 'Rongatry':
        this.modalService.open(this.content_rongatry, { size: 'xl' });
        break;  
      }


	}

  
}
