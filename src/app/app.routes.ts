import { Routes } from '@angular/router';
import { HeroSection } from './hero-section/hero-section';
import { SymptomChecker } from './symptom-checker/symptom-checker';
import { ServiceSchedule } from './service-schedule/service-schedule';
import { Tutorials } from './tutorials/tutorials';
import { ChatComponent } from './chat/chat';

export const routes: Routes = [
  { path: '', title: 'CarVitals', component: HeroSection },
  { path: 'symptom-checker', title: 'Symptom checker', component: SymptomChecker },
  { path: 'service-schedule', title: 'Service schedule', component: ServiceSchedule },
  { path: 'tutorials', title: 'Tutorials', component: Tutorials },
  { path: 'chat', title: 'AI Mechanic', component: ChatComponent },
];
