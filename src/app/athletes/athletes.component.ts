import { Component, OnInit } from '@angular/core';
import { AthleteService } from '../services/athlete.service';
import { Atleta } from '../models/atleta';
import { Router, ActivatedRoute, Params } from '@angular/router';

@Component({
  selector: 'app-athletes',
  standalone: false,
  templateUrl: './athletes.component.html',
  styleUrl: './athletes.component.css',
  providers: [AthleteService]
})
export class AthletesComponent implements OnInit{

  public atletasListado: Array<Atleta> = [];
  public cargando: boolean = true;

  constructor(private _atletasService: AthleteService, private _router: Router) {

  }

  ngOnInit(): void {
    this.getAtletas();
  }

  getAtletas(){
    this._atletasService.getAll().subscribe({
      next : data => {
        this.atletasListado = data.map(a => new Atleta(a));
        this.cargando= false;
        
      },
      error : error => {
        console.log("Error: ", error);
        this.cargando= false;
      }
    });
  }

  deleteAtleta(id: string): void {

      const confirmacion = confirm('¿Seguro que quieres eliminar este atleta?');
      if (confirmacion) {
        this._atletasService.deteleAthlete(id).subscribe({
          next: () => {
            alert('Atleta eliminado correctamente.');
            this._router.navigate(['/atletas']);
          },
          error: (err) => {
            console.error('Error al eliminar el atleta', err);
        }
      });
    }
  }
  
}
