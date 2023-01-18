import { Directive, Input, TemplateRef, ViewContainerRef } from '@angular/core';

@Directive({
  selector: '[appTimes]'
})
export class TimesDirective {

  constructor(
    private templateRef: TemplateRef<any>,
    private viewContainerRef: ViewContainerRef
    ) { }

    @Input('appTimes') set render(times: number) {
      //clear anything that might be inside our view container, in the example <ul>
      this.viewContainerRef.clear();

      for (let i = 0; i < times; i++) {
        this.viewContainerRef.createEmbeddedView(this.templateRef, {
          index: i
        });
      }
      //context object(second parameter of createEmbeddedView())
      //makes its properties accessible for aliasing, just like the ngFor index
    }

}
