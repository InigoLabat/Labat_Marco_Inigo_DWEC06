import { Component, OnInit } from '@angular/core';
import { AthleteService } from '../services/athlete.service';
import { Atleta } from '../models/atleta';
import { Router, ActivatedRoute, Params } from '@angular/router';

@Component({
  selector: 'app-athlete-form',
  standalone: false,
  templateUrl: './athlete-form.component.html',
  styleUrl: './athlete-form.component.css',
  providers: [AthleteService]
})
export class AthleteFormComponent implements OnInit{

  public atleta: Atleta = new Atleta();
  public modoEdit = false;

  constructor(private _atletasService: AthleteService, private _route: ActivatedRoute, private _router: Router) {  }

  ngOnInit(): void {
    
    this._route.params.subscribe((params: Params) => {
      const paramId = params["id"];
    
      if (paramId) {
        this.modoEdit = true;
        this._atletasService.getById(paramId).subscribe({
          next : (data) => {
            this.atleta = new Atleta(data);
            console.log(this.atleta);
          },
          error : error => {
            console.log("Error: ", error);
          }
        });
      }
    })
  }

  guardar(): void {
    if (this.modoEdit && this.atleta.id){
      this._atletasService.updateAthlete(this.atleta.id, this.atleta).subscribe({
        next: () => {
          alert('Atleta actualizado correctamente');
        }, 
        error: error => console.log('Error actualizando atleta', error)
      });
    } else {
      this._atletasService.createAthlete(this.atleta).subscribe({
        next: () => {
          alert('Atleta creado correctamente');
          
        }, 
        error: error => console.log('Error creando atleta', error)
      });
    }
    this._router.navigate(['/atletas'])
  }



}
