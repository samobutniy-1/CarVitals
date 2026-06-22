import { Routes } from '@angular/router';
import { HeroSection } from './hero-section/hero-section';
import { SymptomChecker } from './symptom-checker/symptom-checker';

export const routes: Routes = [
  { path: '', title: 'CarVitals', component: HeroSection },
  { path: 'symptom-checker', title: 'Symptom-checker', component: SymptomChecker },
];
