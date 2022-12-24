import { Injectable, TemplateRef } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UtilServiceService {
  constructor() { }

  sleep = (ms: number) => new Promise((r) => setTimeout(r, ms));
  

  
}
