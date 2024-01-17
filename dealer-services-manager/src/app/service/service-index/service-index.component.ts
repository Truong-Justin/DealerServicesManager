import { Component } from '@angular/core';
import { DealerServicesService } from '../DealerServices.service';
import { DealerServices } from '../DealerServices';

@Component({
  selector: 'service-index',
  templateUrl: './service-index.component.html',
  styleUrls: ['./service-index.component.css']
})
export class ServiceIndexComponent {
  constructor (private dealerService : DealerServicesService) { }
  dealerServices! : DealerServices[];
    
  ngOnInit() : void {
    this.dealerService.getServices().subscribe((data : any) => {
      this.dealerServices = data;
    })
  };

}
