import { Component,Input } from '@angular/core';

@Component({
  selector: 'app-destination-card',
  templateUrl: './destination-card.component.html',
  styleUrls: ['./destination-card.component.css']
})
export class DestinationCardComponent {
  @Input()
  public destination!: {
    Title: string;
    Description: string;
    ImageUrl: string;
  };

  public destinationURL(name: string): string {
      return 'https://demos.telerik.com/blazor-ui/images/destinations/' + name;
  }
}
