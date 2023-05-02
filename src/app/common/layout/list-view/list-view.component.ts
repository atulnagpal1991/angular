import { Component } from '@angular/core';
import { PagerSettings } from '@progress/kendo-angular-listview';
import { destinations } from './destinations';
import { SelectEvent } from "@progress/kendo-angular-layout";

@Component({
  selector: 'app-list-view',
  templateUrl: './list-view.component.html',
  styleUrls: ['./list-view.component.css']
})
export class ListViewComponent {
  public onTabSelect(e: SelectEvent): void {
    console.log(e);
  }
  public destinations: any[] = destinations;

  public pagerSettings: PagerSettings = {
      previousNext: false,
      pageSizeValues: false,
      buttonCount: 9
  };
  public pageSize = 10;


  
  code = `
  import { Component, ViewEncapsulation } from '@angular/core';
import { PagerSettings } from '@progress/kendo-angular-listview';
import { destinations } from './destinations';

@Component({
    encapsulation: ViewEncapsulation.None,
    selector: 'my-app',
    template: "
        <kendo-listview
            [kendoListViewBinding]="destinations"
            [pageable]="pagerSettings"
            [pageSize]="pageSize"
            containerClass="listview-content"
        >
            <ng-template
                kendoListViewItemTemplate
                let-dataItem="dataItem"
                let-isLast="isLast"
            >
                <destination-card [destination]="dataItem"></destination-card>
            </ng-template>
            <ng-template kendoListViewFooterTemplate>
                <div class="footer-note">Source: wwww.european.destinations</div>
            </ng-template>
        </kendo-listview>
    ",
    styles: ["
        .k-listview-header,
        .k-listview-content {
            padding: 20px 0;
            justify-content: center;
        }

        .k-listview-footer {
            border-width: 0;
        }

        .listview-content {
            display: grid;
            grid-template-columns: repeat(auto-fill, 180px);
            gap: 15px 30px;
        }

        .footer-note {
            text-align: right;
            font-style: italic;
            font-size: 11px;
            padding-right: 4px;
        }
    "]
})
export class AppComponent {
    public destinations: any[] = destinations;

    public pagerSettings: PagerSettings = {
        previousNext: false,
        pageSizeValues: false,
        buttonCount: 9
    };
    public pageSize = 6;
}
`


code1 = `
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { LayoutModule } from '@progress/kendo-angular-layout';
import { ListViewModule } from '@progress/kendo-angular-listview';

import { AppComponent } from './app.component';
import { DestinationComponent } from './destination.component';

@NgModule({
    imports: [
        BrowserModule,
        BrowserAnimationsModule,
        LayoutModule,
        ListViewModule
    ],
    declarations: [
        AppComponent,
        DestinationComponent
    ],
    bootstrap: [AppComponent]
})
export class AppModule { }
`

code2 = `
import { Component, Input } from '@angular/core';

@Component({
    selector: 'destination-card',
    template: "
        <kendo-card class="destination-card" width="auto">
            <img kendoCardMedia [src]="destinationURL(destination.ImageUrl)" alt="{{ destination.Title }} image"/>
            <kendo-card-body class="destination-card-body">
                <h4 kendoCardTitle class="title">{{ destination.Title }}</h4>
                <h5 kendoCardSubtitle class="subtitle">{{ destination.Description }}</h5>
            </kendo-card-body>
        </kendo-card>
    ",
    styles: ["
        .destination-card {
            border: 0;
            border-radius: 0;
            box-shadow: none;
            height: 205px;
            overflow: visible;
        }

        .destination-card-body {
            padding: 8px 0;
        }

        .destination-card .title {
            padding: 0;
            font-size: 14px;
            font-weight: bold;
            line-height: normal;
            margin-bottom: 4px;
        }

        .destination-card .subtitle {
            font-size: 11px;
        }
    "]
})
export class DestinationComponent {
    @Input() public destination: {
        Title: string;
        Description: string;
        ImageUrl: string
    };

    public destinationURL(name: string): string {
        return 'https://demos.telerik.com/blazor-ui/images/destinations/' + name;
    }
}
`

code3 = `
export const destinations = [
  {
      'Title': 'BRUSSELS, BELGIUM',
      'Description': 'Chocolate, beer, music and surrealism.',
      'ImageUrl': 'brussels-180x150.png'
  },
  {
      'Title': 'PORTO, PORTUGAL',
      'Description': 'Taste it, drink it, eat it, love it. Bem-vindo ao Porto!',
      'ImageUrl': 'porto-180x150.png'
  },
  {
      'Title': 'MALAGA, SPAIN',
      'Description': 'Enjoy the perfect climat.',
      'ImageUrl': 'malaga-180x150.png'
  },
  {
      'Title': 'BUDAPEST, HUNGARY',
      'Description': 'One of the most exciting cities in the world.',
      'ImageUrl': 'budapest-180x150.png'
  },
  {
      'Title': 'BRATISLAVA, SLOVAKIA',
      'Description': 'A modern city on the Danube.',
      'ImageUrl': 'bratislava-180x150.png'
  },
  {
      'Title': 'FLORENCE, ITALY',
      'Description': 'Love and culture are everywhere!',
      'ImageUrl': 'florence-180x150.png'
  },
  {
      'Title': 'POZNAN, POLAND',
      'Description': 'A unique heritage with rich cultural offer.',
      'ImageUrl': 'poznan-180x150.png'
  },
  {
      'Title': 'ATHENS, GREECE',
      'Description': 'The biggest open-air museum in Europe.',
      'ImageUrl': 'athens-180x150.png'
  },
  {
      'Title': 'SOFIA, BULGARIA',
      'Description': 'One of Europes oldest cities.',
      'ImageUrl': 'sofia-180x150.png'
  },
  {
      'Title': 'BORDEAUX, FRANCE',
      'Description': 'Discover exciting new facets of its character.',
      'ImageUrl': 'bordeaux-180x150.png'
  },
  {
      'Title': 'GENEVA, SWITZERLAND',
      'Description': 'One of the most welcoming cities in Europe.',
      'ImageUrl': 'geneva-180x150.png'
  },
  {
      'Title': 'RIGA, LATVIA',
      'Description': 'At the crossroads of various nations and cultures.',
      'ImageUrl': 'riga-180x150.png'
  },
  {
      'Title': 'SEVILLE, SPAIN',
      'Description': 'Seville. Any time of year…',
      'ImageUrl': 'seville-180x150.png'
  },
  {
      'Title': 'COLMAR, FRANCE',
      'Description': 'A condensed version of the Alsace region.',
      'ImageUrl': 'colmar-180x150.png'
  },
  {
      'Title': 'VIENNA, AUSTRIA',
      'Description': 'The Giant Ferris Wheel is awaiting you.',
      'ImageUrl': 'vienna-180x150.png'
  },
  {
      'Title': 'MONTPELLIER, FRANCE',
      'Description': 'Smart, Mediterranean, attractive, welcoming and festive.',
      'ImageUrl': 'montpellier-180x150.png'
  },
  {
      'Title': 'VALENCIA, SPAIN',
      'Description': 'Sun, culture, history and future. ',
      'ImageUrl': 'valencia-180x150.png'
  },
  {
      'Title': 'BARCELONA, SPAIN',
      'Description': 'Barcelona never sleeps.',
      'ImageUrl': 'barcelona-180x150.png'
  },
  {
      'Title': 'MILAN, ITALY',
      'Description': 'The hub of Italian culture',
      'ImageUrl': 'milan-180x150.png'
  },
  {
      'Title': 'GDANSK, POLAND',
      'Description': 'You will be amazed by the beauty of Gdansk.',
      'ImageUrl': 'gdansk-180x150.png'
  },
  {
      'Title': 'ROME, ITALY',
      'Description': 'Treat yourself to a stay in the Eternal City.',
      'ImageUrl': 'rome-180x150.png'
  },
  {
      'Title': 'EDINBURGH, SCOTLAND',
      'Description': 'Shopping, dining & architectural splendour.',
      'ImageUrl': 'edinburgh-180x150.png'
  },
  {
      'Title': 'LISBON, PORTUGAL',
      'Description': 'The pure pleasure of being in one of the best cities in the world.',
      'ImageUrl': 'lisbon-180x150.png'
  }
];
`
}
