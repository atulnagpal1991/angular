import { Component } from '@angular/core';
import { SelectEvent } from "@progress/kendo-angular-layout";

@Component({
  selector: 'app-pdf-export',
  templateUrl: './pdf-export.component.html',
  styleUrls: ['./pdf-export.component.css']
})
export class PdfExportComponent {
  public onTabSelect(e: SelectEvent): void {
    console.log(e);
  }

  code = `
  <div class="example-wrapper">
    <div class="example-col row">
      <div class="example-config">
        <button class="my-3 k-button-solid-primary" kendoButton
          (click)="pdf.saveAs('contact_River_City_Corporation.pdf')">
          Export As PDF...
        </button>
      </div>

      <kendo-pdf-export #pdf margin="2cm">
        <div class="my-5">
          <div>
            <img class="logo-blue" src="assets/images/logo-blue.png">
          </div>
          <div class="row">
            <div class="col-md-8 mt-3">
              <h4 class="mb-0 fw-normal">If you like our angular portfolio</h4>
              <h3 class="mt-2">Contact Us</h3>
              <img class="call-img" src="assets/images/call.jpg">
            </div>
            <div class="col-md-4">
              <h6 class="text-primary">Email</h6>
              <a class="text-dark" href="mailto:hello@rivercitycorp.in">hello@rivercitycorp.in</a>
              <h6 class="text-primary mt-4">Website</h6>
              <a class="text-dark" href="https://www.rivercitycorp.in/">www.rivercitycorp.in</a>
              <h6 class="text-primary mt-4">Phone</h6>
              <a class="text-dark" href="tel:+919876692272">+91 987 669 2272</a>
              <br>
              <a class="text-dark" href="tel:+918283879264">+91 828 387 9264</a>
              <br>
              <br>
              <img class="barcode" src="assets/images/barcode.jpg">
            </div>
          </div>
        </div>
      </kendo-pdf-export>

      <div class="example-config">
        <button class="my-3 k-button-solid-primary" kendoButton
          (click)="pdf.saveAs('contact_River_City_Corporation.pdf')">
          Export As PDF...
        </button>
      </div>
    </div>
  </div>
`


code1 = `
import { Component } from '@angular/core';
import { SelectEvent } from "@progress/kendo-angular-layout";

@Component({
  selector: 'app-pdf-export',
  templateUrl: './pdf-export.component.html',
  styleUrls: ['./pdf-export.component.css']
})
export class PdfExportComponent {
  public onTabSelect(e: SelectEvent): void {
    console.log(e);
  }
}

`
}
