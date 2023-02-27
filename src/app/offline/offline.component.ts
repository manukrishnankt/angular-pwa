import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-offline',
  templateUrl: './offline.component.html',
  styleUrls: ['./offline.component.scss'],
})
export class OfflineComponent implements OnInit {
  constructor(private router: Router) {}
  private indx = 0;

  ngOnInit(): void {
    if (typeof Worker !== 'undefined') {
      // Create a new
      const worker = new Worker(new URL('../app.worker', import.meta.url));
      worker.onmessage = ({ data }) => {
        this.indx = this.indx + 1;
        console.log(`page got message: ${data}`);
        console.log(this.indx);
      };
      worker.postMessage('123456765432345654321');
      setTimeout(() => {
        this.router.navigate(['lazyer/homer']);
      }, 10000);
    } else {
      // Web Workers are not supported in this environment.
      // You should add a fallback so that your program still executes correctly.
    }
  }
}
