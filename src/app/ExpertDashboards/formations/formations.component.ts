import { Component, OnInit } from '@angular/core';
import { Formation } from '../../models/formation';
import { FormationService } from '../../services/formation/formation.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-formations',
  templateUrl: './formations.component.html',
  styleUrl: './formations.component.css'
})
export class FormationsComponent implements OnInit {
  
  formations: Formation[] = [];
  newFormationName: string = '';

  constructor(private formationService: FormationService, private router: Router) { }

  ngOnInit(): void {
    this.loadFormations();
  }

  loadFormations(): void {
    this.formationService.getAllFormations().subscribe(formations => this.formations = formations);
  }

  addFormation(): void {
    const newFormation: Formation = { id: 0, formationName: this.newFormationName };
    this.formationService.saveFormation(newFormation).subscribe(() => this.loadFormations());
    this.newFormationName = '';
  }

  viewSteps(formationId: number): void {
    this.router.navigate(['/steps', formationId]);
  }

}