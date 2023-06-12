import { Component } from '@angular/core';
import { SelectEvent } from "@progress/kendo-angular-layout";

@Component({
  selector: 'app-editor',
  templateUrl: './editor.component.html',
  styleUrls: ['./editor.component.css']
})
export class EditorComponent {
  public onTabSelect(e: SelectEvent): void {
    console.log(e);
  }
  public value = `
  <p>
  River City Corporation is a digital design agency that helps advance every facet of its client’s business with digital. We help design, build, and grow experience-driven digital products and platforms at speed and scale.
  </p>
  <div style="display: inline-block; width: 39%;">
      <p>Services include:</p>
      <ul>
          <li>User Experience</li>
          <li>Front-end Engineering</li>
          <li>Quality Assurance</li>
      </ul>
  </div>
  <div style="display: inline-block; width: 60%; vertical-align: top;">
      <img src="https://www.rivercitycorp.in/images/7.png" width="100%" style="min-width: 10px; min-height: 10px;" alt="Tenerife" />
  </div>
`;




code = `
<div class="example-wrapper">
    <div class="example-col">
        <kendo-editor [value]="value" style="height: 500px;"></kendo-editor>
    </div>
</div>
`


code1 = `
import { Component } from '@angular/core';
import { SelectEvent } from "@progress/kendo-angular-layout";

@Component({
  selector: 'app-editor',
  templateUrl: './editor.component.html',
  styleUrls: ['./editor.component.css']
})
export class EditorComponent {
  public onTabSelect(e: SelectEvent): void {
    console.log(e);
  }
  public value = "
  <p>
  River City Corporation is a digital design agency that helps advance every facet of its clients business with digital. We help design, build, and grow experience-driven digital products and platforms at speed and scale.
  </p>
  <div style="display: inline-block; width: 39%;">
      <p>Services include:</p>
      <ul>
          <li>User Experience</li>
          <li>Front-end Engineering</li>
          <li>Quality Assurance</li>
      </ul>
  </div>
  <div style="display: inline-block; width: 60%; vertical-align: top;">
      <img src="https://www.rivercitycorp.in/images/7.png" width="100%" style="min-width: 10px; min-height: 10px;" alt="Tenerife" />
  </div>
";
}
`
}
