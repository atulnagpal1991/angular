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
  public pageSize = 30;


  
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
        'Title': 'Angular',
        'Description': 'We offer Angular development services to build responsive.',
        'ImageUrl': 'portfolio-img.jpg'
    },
    {
        'Title': 'NodeJS',
        'Description': 'Build and scale your web and mobile solutions.',
        'ImageUrl': 'portfolio-img.jpg'
    },
    {
        'Title': 'ReactJS and React Native',
        'Description': 'We infuse speed and agility in your mobile apps.',
        'ImageUrl': 'portfolio-img.jpg'
    },
    {
        'Title': 'Responsive Design',
        'Description': 'We design and build website solutions.',
        'ImageUrl': 'portfolio-img.jpg'
    },
    {
        'Title': 'Dot Net',
        'Description': 'We develop robust and scalable .NET solutions.',
        'ImageUrl': 'portfolio-img.jpg'
    },
    {
        'Title': 'Ruby on Rails',
        'Description': 'We develop web applications using Ruby on Rails.',
        'ImageUrl': 'portfolio-img.jpg'
    },
    {
        'Title': 'User Experience Design',
        'Description': 'Our User Experience Design service helps enhance your product.',
        'ImageUrl': 'portfolio-img.jpg'
    },
    {
        'Title': 'Application Interface',
        'Description': 'Our team of UI designers create visually appealing websites.',
        'ImageUrl': 'portfolio-img.jpg'
    },
    {
        'Title': 'Responsive Website Design',
        'Description': 'We promise your digital domination by making website.',
        'ImageUrl': 'portfolio-img.jpg'
    },
    {
        'Title': 'Branding',
        'Description': 'Our digital experience services help attract and resting your users.',
        'ImageUrl': 'portfolio-img.jpg'
    },
    {
        'Title': 'Functional Testing',
        'Description': 'Our QA testing services remove the operational abnormality.',
        'ImageUrl': 'portfolio-img.jpg'
    },
    {
        'Title': 'Automation Testing',
        'Description': 'We use high-end automation testing tools.',
        'ImageUrl': 'portfolio-img.jpg'
    },
    {
        'Title': 'Mobile App Testing',
        'Description': 'We apply our testing services to wireframes and their published app.',
        'ImageUrl': 'portfolio-img.jpg'
    },
    {
        'Title': 'Performance Testing',
        'Description': 'Our performance testing expertise helps validate a digital products.',
        'ImageUrl': 'portfolio-img.jpg'
    },{
        'Title': 'Angular',
        'Description': 'We offer Angular development services to build responsive.',
        'ImageUrl': 'portfolio-img.jpg'
    },
    {
        'Title': 'NodeJS',
        'Description': 'Build and scale your web and mobile solutions.',
        'ImageUrl': 'portfolio-img.jpg'
    },
    {
        'Title': 'ReactJS and React Native',
        'Description': 'We infuse speed and agility in your mobile apps.',
        'ImageUrl': 'portfolio-img.jpg'
    },
    {
        'Title': 'Responsive Design',
        'Description': 'We design and build website solutions.',
        'ImageUrl': 'portfolio-img.jpg'
    },
    {
        'Title': 'Dot Net',
        'Description': 'We develop robust and scalable .NET solutions.',
        'ImageUrl': 'portfolio-img.jpg'
    },
    {
        'Title': 'Ruby on Rails',
        'Description': 'We develop web applications using Ruby on Rails.',
        'ImageUrl': 'portfolio-img.jpg'
    },
    {
        'Title': 'User Experience Design',
        'Description': 'Our User Experience Design service helps enhance your product.',
        'ImageUrl': 'portfolio-img.jpg'
    },
    {
        'Title': 'Application Interface',
        'Description': 'Our team of UI designers create visually appealing websites.',
        'ImageUrl': 'portfolio-img.jpg'
    },
    {
        'Title': 'Responsive Website Design',
        'Description': 'We promise your digital domination by making website.',
        'ImageUrl': 'portfolio-img.jpg'
    },
    {
        'Title': 'Branding',
        'Description': 'Our digital experience services help attract and resting your users.',
        'ImageUrl': 'portfolio-img.jpg'
    },
    {
        'Title': 'Functional Testing',
        'Description': 'Our QA testing services remove the operational abnormality.',
        'ImageUrl': 'portfolio-img.jpg'
    },
    {
        'Title': 'Automation Testing',
        'Description': 'We use high-end automation testing tools.',
        'ImageUrl': 'portfolio-img.jpg'
    },
    {
        'Title': 'Mobile App Testing',
        'Description': 'We apply our testing services to wireframes and their published app.',
        'ImageUrl': 'portfolio-img.jpg'
    },
    {
        'Title': 'Performance Testing',
        'Description': 'Our performance testing expertise helps validate a digital products.',
        'ImageUrl': 'portfolio-img.jpg'
    }
];
`
}
