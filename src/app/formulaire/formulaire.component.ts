import {  Component, HostListener , OnInit } from '@angular/core';
import { ProductService } from '../product.service';
// import Swiper bundle with all modules installed
import Swiper from 'swiper/bundle';

// import styles bundle
import 'swiper/css/bundle';



@Component({
  selector: 'app-formulaire',
  templateUrl: './formulaire.component.html',
  styleUrl: './formulaire.component.css'
})
export class FormulaireComponent implements OnInit {
  pnom1:string='';
  username: string = ''; 
  react={
    name: '',
    comment:'',
    image:''

  }
 

  reactions = [
    {  name: 'rachid mvp' , comment : 'Cest Genial!', image: 'https://mir-s3-cdn-cf.behance.net/project_modules/1400_opt_1/d07bca98931623.5ee79b6a8fa55.jpg'},
    {  name: 'Salwa madani' , comment: 'Produit de très bonne qualité, exactement comme décrit. La livraison a été rapide et soignée.', image: 'https://img.freepik.com/photos-premium/avatar-fille-dessin-anime-conception-personnage-3d-jolie-fille_432516-5514.jpg'},
    {  name: 'Saad ogri ' ,comment:'Merci,Bon service😎👌',  image : 'https://th.bing.com/th/id/OIP.IhTc65L9U1RLoDiG4JNx6gHaHa?w=626&h=626&rs=1&pid=ImgDetMain'},
    {  name: 'Houda flr' , comment : 'Les photos correspondent parfaitement au produit reçu. Je recommande vivement' , image: 'https://th.bing.com/th/id/OIP.6HGISThuCRrLtD8vQjijIAAAAA?rs=1&pid=ImgDetMain'},
    {  name: 'Yassin vip' , comment : 'Le produit est bon, mais la livraison a pris plus de temps que prévu.' , image: 'https://img.freepik.com/premium-photo/3d-cartoon-character-bearded-man-with-glasses-pixar-style_899449-119236.jpg'},
 {  name: 'Sara ElAnabi' , comment : 'Jaurais aimé plus de détails dans la description du produit pour mieux comprendre ses caractéristiques', image: 'https://img.freepik.com/premium-photo/waiterwaitress-digital-avatar-generative-ai_934475-9067.jpg'},

];
ajout(){
this.reactions.push(this.react);
this.react={
  name: '',
  comment:'',
  image:''

}
}








  cart : any[] =[];
  canvas!: HTMLCanvasElement;
  ctx!: CanvasRenderingContext2D;
  fireworks: any[] = [];
  colors = ['#ff0000', '#ffff00', '#00ff00', '#00ffff', '#ff00ff'];
  shapes = ['circle', 'star', 'square'];
  display:boolean=false;

    constructor(private productService: ProductService){}



    ngOnInit() {
      // const swiper = new Swiper('.swiper', {
      //   // Optional parameters
      //   direction: 'vertical',
      //   loop: true,
      
      //   // If we need pagination
      //   pagination: {
      //     el: '.swiper-pagination',
      //   },
      
      //   // Navigation arrows
      //   navigation: {
      //     nextEl: '.swiper-button-next',
      //     prevEl: '.swiper-button-prev',
      //   },
      
      //   // And if we need scrollbar
      //   scrollbar: {
      //     el: '.swiper-scrollbar',
      //   },
      // });
      const swiper = new Swiper('.slider-warpper', {
        // // Optional parameters
      
        loop: true,
        grabCursor: true,
        spaceBetween: 30,
    
      
        // If we need pagination
        pagination: {
          el: '.swiper-pagination',
          clickable: true,
          dynamicBullets: true
        },
      
        // Navigation arrows
        navigation: {
          nextEl: '.swiper-button-next',
          prevEl: '.swiper-button-prev',
        },
      
       
    
        //reponsive breakpoints
        breakpoints: {
            0: {
                slidesPerView: 1
            },
            620: {
                slidesPerView: 2
            },
            1024: {
                slidesPerView: 3
            }
        }
    
    
    
    
      });
      this.cart = this.productService.getCart();
      this.canvas = document.getElementById('fireworks-canvas') as HTMLCanvasElement;
      this.ctx = this.canvas.getContext('2d')!;
      this.canvas.width = window.innerWidth;
      this.canvas.height = window.innerHeight;
      this.loop();
      scroll(
        {
             top:0,
             left:0,
            
        })
        
  // Synchronise la variable locale avec la valeur du service
      this.productService.display$.subscribe((value) => {
        this.display = value;})



   

    }

    

  @HostListener('window:resize')
  onResize() {
    this.canvas.width = window.innerWidth;
    this.canvas.height = window.innerHeight;
  }

  createFirework(x: number, y: number, shape: string) {
    const particles = [];
    for (let i = 0; i < 50; i++) {
      particles.push({
        x: x,
        y: y,
        size: Math.random() * 5 +10,
        color: this.colors[Math.floor(Math.random() * this.colors.length)],
        angle: Math.random() * 2 * Math.PI,
        speed: Math.random() * 4 + 2,
        shape: shape,
        decay: 0.98
      });
    }
    this.fireworks.push(particles);
  }

  drawParticles(particles: any[]) {
    particles.forEach(p => {
      this.ctx.save();
      this.ctx.translate(p.x, p.y);
      this.ctx.rotate(p.angle);
      this.ctx.fillStyle = p.color;

      if (p.shape === 'circle') {
        this.ctx.beginPath();
        this.ctx.arc(0, 0, p.size, 0, 2 * Math.PI);
        this.ctx.fill();
      } else if (p.shape === 'square') {
        this.ctx.fillRect(-p.size / 2, -p.size / 2, p.size, p.size);
      } else if (p.shape === 'star') {
        this.drawStar(0, 0, 5, p.size, p.size / 2);
      }

      this.ctx.restore();
    });
  }

  drawStar(cx: number, cy: number, spikes: number, outerRadius: number, innerRadius: number) {
    let rot = Math.PI / 2 * 3;
    let x = cx;
    let y = cy;
    const step = Math.PI / spikes;

    this.ctx.beginPath();
    this.ctx.moveTo(cx, cy - outerRadius);
    for (let i = 0; i < spikes; i++) {
      x = cx + Math.cos(rot) * outerRadius;
      y = cy + Math.sin(rot) * outerRadius;
      this.ctx.lineTo(x, y);
      rot += step;

      x = cx + Math.cos(rot) * innerRadius;
      y = cy + Math.sin(rot) * innerRadius;
      this.ctx.lineTo(x, y);
      rot += step;
    }
    this.ctx.lineTo(cx, cy - outerRadius);
    this.ctx.closePath();
    this.ctx.fill();
  }

  updateParticles() {
    this.fireworks.forEach((particles, index) => {
      particles.forEach((p: any) => {
        p.x += Math.cos(p.angle) * p.speed;
        p.y += Math.sin(p.angle) * p.speed;
        p.speed *= p.decay;
        p.size *= p.decay;
      });

      // Remove fireworks when particles are too small
      if (particles.every((p: any) => p.size < 0.1)) {
        this.fireworks.splice(index, 1);
      }
    });
  }

  drawFireworks() {
    this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
    this.fireworks.forEach(particles => this.drawParticles(particles));
  }

  loop() {
    this.updateParticles();
    this.drawFireworks();
    requestAnimationFrame(() => this.loop());
  }
 

  launchFireworks() {
    var audioh:any=document.getElementById("ohh");
    audioh.currentTime=0;
    audioh.play();
    let delay = 0;
    this.disp=true;

    for (let i = 0; i < 50; i++) {
      setTimeout(() => {
        const x = Math.random() * this.canvas.width;
        const y = Math.random() * this.canvas.height;
        const shape = this.shapes[Math.floor(Math.random() * this.shapes.length)];
        this.createFirework(x, y, shape);
      }, delay);
      delay += 100; // 500ms delay between each explosion
    }
  }



    getTotal() {
      return this.cart.reduce(
        (sum, item) => sum + item.price * item.quantity,
        0
      );
    }




    disp:boolean=false;


      

 




    }

    

