import { Component, OnInit } from '@angular/core';
import { HelloService } from '../entities/services/hello.service';

@Component({
  selector: 'app-hello',
  templateUrl: './hello.component.html',
  styleUrls: ['./hello.component.scss']
})
export class HelloComponent implements OnInit {

  helloMessage: string;

  constructor(private helloService: HelloService) { }

  ngOnInit() {
  }

  getServerMessage(): void {
    this.helloService.getHelloMessage().subscribe((response: any) => this.helloMessage = response.message);
  }

}
