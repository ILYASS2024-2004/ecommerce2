import { Component, HostListener , OnInit } from '@angular/core';
import { ProductService } from '../product.service';


@Component({
  selector: 'app-formulaire',
  templateUrl: './formulaire.component.html',
  styleUrl: './formulaire.component.css'
})
export class FormulaireComponent implements OnInit {
  cart : any[] =[];
  canvas!: HTMLCanvasElement;
  ctx!: CanvasRenderingContext2D;
  fireworks: any[] = [];
  colors = ['#ff0000', '#ffff00', '#00ff00', '#00ffff', '#ff00ff'];
  shapes = ['circle', 'star', 'square'];

    constructor(private productService: ProductService){}
    ngOnInit() {
      this.cart = this.productService.getCart();
      this.canvas = document.getElementById('fireworks-canvas') as HTMLCanvasElement;
      this.ctx = this.canvas.getContext('2d')!;
      this.canvas.width = window.innerWidth;
      this.canvas.height = window.innerHeight;
      this.loop();


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


    username: string = ''; 

    getTotal() {
      return this.cart.reduce(
        (sum, item) => sum + item.price * item.quantity,
        0
      );
    }
    nom1:string='';
    pnom1:string='';


    disp:boolean=false;


      

 




    }

    

