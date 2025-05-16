import { Component, OnInit } from '@angular/core';
import { AthleteService } from '../services/athlete.service';
import { Atleta } from '../models/atleta';
import { Router, ActivatedRoute, Params } from '@angular/router';

@Component({
  selector: 'app-athlete-detail',
  standalone: false,
  templateUrl: './athlete-detail.component.html',
  styleUrl: './athlete-detail.component.css',
  providers: [AthleteService]
})
export class AthleteDetailComponent implements OnInit{

  public atleta?: Atleta;

  constructor(private _atletasService: AthleteService, private _route: ActivatedRoute, private _router: Router) {  }

  ngOnInit(): void {
    this._route.params.subscribe((params: Params) => {
      const paramId = params["id"];
    
      if (paramId) {
        this.getAtleta(paramId);
      }
    })
  }

  getAtleta(id: string) {
    this._atletasService.getById(id).subscribe({
      next : (data) => {
        this.atleta = new Atleta(data);
        console.log(this.atleta);
      },
      error : error => {
        console.log("Error: ", error);
      }
    });
  }

  updateAtleta(id: string, data:any){

  }

  deleteAtleta(): void {
    if (this.atleta?.id) {

      const confirmacion = confirm('¿Seguro que quieres eliminar este atleta?');
      if (confirmacion) {
        this._atletasService.deteleAthlete(this.atleta.id).subscribe({
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
}
