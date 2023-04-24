import { Component } from '@angular/core';

@Component({
  selector: 'app-popover',
  templateUrl: './popover.component.html',
  styleUrls: ['./popover.component.css']
})
export class PopoverComponent {
  public wafflesImg =
  "https://www.telerik.com/kendo-angular-ui-develop/components/layout/card/assets/waffles.jpg";

public wafflesRecipe = `
      Mix together flour, baking powder, salt, cinnamon, nutmeg, ginger,
      and cloves in a large bowl. In a second bowl, add egg yolks,
      sugar, pumpkin, milk, and oil. Pour the mixture in a waffle pan and bake for 6 minutes.
  `;
}
