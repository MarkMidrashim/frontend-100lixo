# FSG LOADING

## How to use it

Import **FsgLoading** and **BrowserAnimationsModule** in the root module of your app.

```ts
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FsgLoadingModule } from '@fluig-tools-lib/ngx-styleguide';

@NgModule({
  // ...
  imports: [BrowserAnimationsModule, FsgLoadingModule],
  // ...
})
export class MyAppModule {}
```

Inject **FsgLoadingService** in the constructor of the component it will be used

```ts
import { FsgLoadingService } from '@fluig-tools-lib/ngx-styleguide';

@Component({
  // ...
})
export class AppComponent {
  constructor(private loadingService: FsgLoadingService) {}
}
```

Use the **FsgLoadingService** to show loadings

```ts
import { FsgLoadingService } from '@fluig-tools-lib/ngx-styleguide';

@Component({
  // ...
})
export class AppComponent {
  @ViewChild('loadingContainerExample') loadingContainerExample: ElementRef;
  loadingWindow: ComponentRef<any>;
  loadingContainer: ComponentRef<any>;

  constructor(private loadingService: FsgLoadingService) {}

  createLoadingWindow() {
    this.loadingWindow = this.loadingService.create({
      message: 'A example of a loading in the window',
    });
  }

  destroyLoadingWindow() {
    this.loadingService.destroy(this.loadingWindow);
  }

  createLoadingContainer() {
    this.loadingContainer = this.loadingService.create({
      target: this.loadingContainerExample.nativeElement,
      message: 'A example of a loading in the container',
    });
  }

  destroyLoadingContainer() {
    this.loadingService.destroy(this.loadingContainer);
  }
}
```
