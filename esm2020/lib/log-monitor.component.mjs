import { ChangeDetectionStrategy, Component, Input, ViewChild } from '@angular/core';
import { normalizeLogMessage } from './helpers/log-message.helper';
import { delay } from 'rxjs/operators';
import * as i0 from "@angular/core";
import * as i1 from "@angular/common";
const _c0 = ["container"];
function LogMonitorComponent_div_0_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 4);
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r0 = i0.ɵɵnextContext();
    i0.ɵɵproperty("ngClass", ctx_r0.theme + "-theme");
    i0.ɵɵadvance(1);
    i0.ɵɵtextInterpolate1("\u232A ", ctx_r0.title, "");
} }
function LogMonitorComponent_span_3_span_1_ng_container_1_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainerStart(0);
    i0.ɵɵtext(1, "\u2718");
    i0.ɵɵelementContainerEnd();
} }
function LogMonitorComponent_span_3_span_1_ng_container_2_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainerStart(0);
    i0.ɵɵtext(1, "\u2714");
    i0.ɵɵelementContainerEnd();
} }
function LogMonitorComponent_span_3_span_1_ng_container_3_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainerStart(0);
    i0.ɵɵtext(1, "\u2771");
    i0.ɵɵelementContainerEnd();
} }
function LogMonitorComponent_span_3_span_1_ng_container_4_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainerStart(0);
    i0.ɵɵtext(1, "\u203C");
    i0.ɵɵelementContainerEnd();
} }
function LogMonitorComponent_span_3_span_1_ng_container_5_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainerStart(0);
    i0.ɵɵtext(1, "\u2139");
    i0.ɵɵelementContainerEnd();
} }
function LogMonitorComponent_span_3_span_1_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "span", 7);
    i0.ɵɵtemplate(1, LogMonitorComponent_span_3_span_1_ng_container_1_Template, 2, 0, "ng-container", 8);
    i0.ɵɵtemplate(2, LogMonitorComponent_span_3_span_1_ng_container_2_Template, 2, 0, "ng-container", 8);
    i0.ɵɵtemplate(3, LogMonitorComponent_span_3_span_1_ng_container_3_Template, 2, 0, "ng-container", 8);
    i0.ɵɵtemplate(4, LogMonitorComponent_span_3_span_1_ng_container_4_Template, 2, 0, "ng-container", 8);
    i0.ɵɵtemplate(5, LogMonitorComponent_span_3_span_1_ng_container_5_Template, 2, 0, "ng-container", 8);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const log_r3 = i0.ɵɵnextContext().$implicit;
    i0.ɵɵproperty("ngSwitch", log_r3.type);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngSwitchCase", "ERR");
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngSwitchCase", "SUCCESS");
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngSwitchCase", "LOG");
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngSwitchCase", "WARN");
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngSwitchCase", "INFO");
} }
const _c1 = function (a0) { return { "animated": a0 }; };
function LogMonitorComponent_span_3_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "span", 5);
    i0.ɵɵtemplate(1, LogMonitorComponent_span_3_span_1_Template, 6, 6, "span", 6);
    i0.ɵɵtext(2);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const log_r3 = ctx.$implicit;
    const ctx_r2 = i0.ɵɵnextContext();
    i0.ɵɵclassMapInterpolate1("msg-item ", "msg-" + log_r3.type.toLowerCase(), "");
    i0.ɵɵproperty("ngClass", i0.ɵɵpureFunction1(7, _c1, ctx_r2.animated));
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", ctx_r2.icons);
    i0.ɵɵadvance(1);
    i0.ɵɵtextInterpolate2(" [", log_r3.timestamp, "]: ", log_r3.message, " ");
} }
export class LogMonitorComponent {
    constructor(zone, cd) {
        this.zone = zone;
        this.cd = cd;
        this.delay = 500;
        this.history = [];
        this.theme = 'dark';
        this.icons = true;
        this.customClass = 'log-container';
        this.animated = true;
        this._history = [];
    }
    ngOnInit() {
        if (this.logStream) {
            this._subr = this.logStream
                .pipe(delay(this.delay))
                .subscribe(a => {
                this._history = [...this._history, normalizeLogMessage(a)];
                this.cd.detectChanges();
                this.zone.run(() => {
                    setTimeout(() => this.scrollToBottom());
                });
            });
        }
    }
    ngOnDestroy() {
        if (this._subr) {
            this._subr.unsubscribe();
        }
    }
    ngOnChanges(changes) {
        if (changes['history']) {
            this._history = changes['history'].currentValue.map(normalizeLogMessage);
        }
    }
    ngAfterViewInit() {
        this.scrollToBottom();
    }
    scrollToBottom() {
        this.container.nativeElement.scrollTop = this.container.nativeElement.scrollHeight;
    }
}
LogMonitorComponent.ɵfac = function LogMonitorComponent_Factory(t) { return new (t || LogMonitorComponent)(i0.ɵɵdirectiveInject(i0.NgZone), i0.ɵɵdirectiveInject(i0.ChangeDetectorRef)); };
LogMonitorComponent.ɵcmp = /*@__PURE__*/ i0.ɵɵdefineComponent({ type: LogMonitorComponent, selectors: [["log-monitor"]], viewQuery: function LogMonitorComponent_Query(rf, ctx) { if (rf & 1) {
        i0.ɵɵviewQuery(_c0, 5);
    } if (rf & 2) {
        let _t;
        i0.ɵɵqueryRefresh(_t = i0.ɵɵloadQuery()) && (ctx.container = _t.first);
    } }, inputs: { delay: "delay", title: "title", logStream: "logStream", history: "history", theme: "theme", icons: "icons", customClass: "customClass", animated: "animated" }, features: [i0.ɵɵNgOnChangesFeature], decls: 4, vars: 3, consts: [["class", "title-bar", 3, "ngClass", 4, "ngIf"], [1, "container", 3, "ngClass"], ["container", ""], [3, "class", "ngClass", 4, "ngFor", "ngForOf"], [1, "title-bar", 3, "ngClass"], [3, "ngClass"], [3, "ngSwitch", 4, "ngIf"], [3, "ngSwitch"], [4, "ngSwitchCase"]], template: function LogMonitorComponent_Template(rf, ctx) { if (rf & 1) {
        i0.ɵɵtemplate(0, LogMonitorComponent_div_0_Template, 2, 2, "div", 0);
        i0.ɵɵelementStart(1, "div", 1, 2);
        i0.ɵɵtemplate(3, LogMonitorComponent_span_3_Template, 3, 9, "span", 3);
        i0.ɵɵelementEnd();
    } if (rf & 2) {
        i0.ɵɵproperty("ngIf", ctx.title);
        i0.ɵɵadvance(1);
        i0.ɵɵproperty("ngClass", ctx.theme + "-theme");
        i0.ɵɵadvance(2);
        i0.ɵɵproperty("ngForOf", ctx._history);
    } }, dependencies: [i1.NgClass, i1.NgForOf, i1.NgIf, i1.NgSwitch, i1.NgSwitchCase], styles: [".container[_ngcontent-%COMP%]{position:relative;width:100%;height:100%;padding-top:5px;padding-bottom:5px;overflow-y:auto;font-family:Lucida Console,Monaco,monospace,sans-serif}.animated[_ngcontent-%COMP%]{animation:_ngcontent-%COMP%_fadein .26s}@keyframes _ngcontent-%COMP%_fadein{0%{opacity:0;transform:translateY(-10px)}to{opacity:1;transform:translateY(0)}}.title-bar[_ngcontent-%COMP%]{padding:5px;font-weight:600}.dark-theme.title-bar[_ngcontent-%COMP%]{border-bottom:solid 1px #3c3c3c;background:#1f1f1f}.light-theme.title-bar[_ngcontent-%COMP%]{border-bottom:solid 1px #a8acad;background:#dbdfe0}.msg-item[_ngcontent-%COMP%]{display:block;margin-left:6px;font-size:.85em}.msg-list[_ngcontent-%COMP%]{margin:0;height:100%}.light-theme[_ngcontent-%COMP%]{color:#212121;background:#ECF0F1}.light-theme[_ngcontent-%COMP%]   .msg-info[_ngcontent-%COMP%]{color:#2980b9}.light-theme[_ngcontent-%COMP%]   .msg-err[_ngcontent-%COMP%]{color:#c0392b}.light-theme[_ngcontent-%COMP%]   .msg-success[_ngcontent-%COMP%]{color:#27ae60}.light-theme[_ngcontent-%COMP%]   .msg-warn[_ngcontent-%COMP%]{color:#f39c12}.dark-theme[_ngcontent-%COMP%]{color:#ecf0f1;background:#212121}.dark-theme[_ngcontent-%COMP%]   .msg-info[_ngcontent-%COMP%]{color:#3498db}.dark-theme[_ngcontent-%COMP%]   .msg-err[_ngcontent-%COMP%]{color:#e74c3c}.dark-theme[_ngcontent-%COMP%]   .msg-success[_ngcontent-%COMP%]{color:#2ecc71}.dark-theme[_ngcontent-%COMP%]   .msg-warn[_ngcontent-%COMP%]{color:#f1c40f}"], changeDetection: 0 });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(LogMonitorComponent, [{
        type: Component,
        args: [{ selector: 'log-monitor', changeDetection: ChangeDetectionStrategy.OnPush, template: "\n<div *ngIf=\"title\" class=\"title-bar\" [ngClass]=\"theme+'-theme'\">&#9002; {{title}}</div>\n<div\n  #container\n  class=\"container\"\n  [ngClass]=\"theme+'-theme'\"\n>\n  <span\n    class=\"msg-item {{'msg-'+(log.type.toLowerCase())}}\"\n    *ngFor=\"let log of _history\"\n    [ngClass]=\"{'animated': animated}\"\n  >\n    <span *ngIf=\"icons\" [ngSwitch]=\"log.type\">\n      <ng-container *ngSwitchCase=\"'ERR'\">&#10008;</ng-container>\n      <ng-container *ngSwitchCase=\"'SUCCESS'\">&#10004;</ng-container>\n      <ng-container *ngSwitchCase=\"'LOG'\">&#10097;</ng-container>\n      <ng-container *ngSwitchCase=\"'WARN'\">&#8252;</ng-container>\n      <ng-container *ngSwitchCase=\"'INFO'\">&#8505;</ng-container>\n    </span>\n\n    [{{log.timestamp}}]: {{log.message}}\n  </span>\n\n</div>\n", styles: [".container{position:relative;width:100%;height:100%;padding-top:5px;padding-bottom:5px;overflow-y:auto;font-family:Lucida Console,Monaco,monospace,sans-serif}.animated{animation:fadein .26s}@keyframes fadein{0%{opacity:0;transform:translateY(-10px)}to{opacity:1;transform:translateY(0)}}.title-bar{padding:5px;font-weight:600}.dark-theme.title-bar{border-bottom:solid 1px #3c3c3c;background:#1f1f1f}.light-theme.title-bar{border-bottom:solid 1px #a8acad;background:#dbdfe0}.msg-item{display:block;margin-left:6px;font-size:.85em}.msg-list{margin:0;height:100%}.light-theme{color:#212121;background:#ECF0F1}.light-theme .msg-info{color:#2980b9}.light-theme .msg-err{color:#c0392b}.light-theme .msg-success{color:#27ae60}.light-theme .msg-warn{color:#f39c12}.dark-theme{color:#ecf0f1;background:#212121}.dark-theme .msg-info{color:#3498db}.dark-theme .msg-err{color:#e74c3c}.dark-theme .msg-success{color:#2ecc71}.dark-theme .msg-warn{color:#f1c40f}\n"] }]
    }], function () { return [{ type: i0.NgZone }, { type: i0.ChangeDetectorRef }]; }, { delay: [{
            type: Input
        }], title: [{
            type: Input
        }], logStream: [{
            type: Input
        }], history: [{
            type: Input
        }], theme: [{
            type: Input
        }], icons: [{
            type: Input
        }], customClass: [{
            type: Input
        }], animated: [{
            type: Input
        }], container: [{
            type: ViewChild,
            args: ['container']
        }] }); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibG9nLW1vbml0b3IuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vcHJvamVjdHMvbG9nLW1vbml0b3Ivc3JjL2xpYi9sb2ctbW9uaXRvci5jb21wb25lbnQudHMiLCIuLi8uLi8uLi8uLi9wcm9qZWN0cy9sb2ctbW9uaXRvci9zcmMvbGliL2xvZy1tb25pdG9yLmNvbXBvbmVudC5odG1sIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFFSCx1QkFBdUIsRUFFdkIsU0FBUyxFQUVULEtBQUssRUFLTCxTQUFTLEVBQ1osTUFBTSxlQUFlLENBQUM7QUFFdkIsT0FBTyxFQUFFLG1CQUFtQixFQUFFLE1BQU0sOEJBQThCLENBQUM7QUFFbkUsT0FBTyxFQUFFLEtBQUssRUFBRSxNQUFNLGdCQUFnQixDQUFDOzs7OztJQ2Z2Qyw4QkFBZ0U7SUFBQSxZQUFpQjtJQUFBLGlCQUFNOzs7SUFBbEQsaURBQTBCO0lBQUMsZUFBaUI7SUFBakIsa0RBQWlCOzs7SUFZM0UsNkJBQW9DO0lBQUEsc0JBQVE7SUFBQSwwQkFBZTs7O0lBQzNELDZCQUF3QztJQUFBLHNCQUFRO0lBQUEsMEJBQWU7OztJQUMvRCw2QkFBb0M7SUFBQSxzQkFBUTtJQUFBLDBCQUFlOzs7SUFDM0QsNkJBQXFDO0lBQUEsc0JBQU87SUFBQSwwQkFBZTs7O0lBQzNELDZCQUFxQztJQUFBLHNCQUFPO0lBQUEsMEJBQWU7OztJQUw3RCwrQkFBMEM7SUFDeEMsb0dBQTJEO0lBQzNELG9HQUErRDtJQUMvRCxvR0FBMkQ7SUFDM0Qsb0dBQTJEO0lBQzNELG9HQUEyRDtJQUM3RCxpQkFBTzs7O0lBTmEsc0NBQXFCO0lBQ3hCLGVBQW1CO0lBQW5CLG9DQUFtQjtJQUNuQixlQUF1QjtJQUF2Qix3Q0FBdUI7SUFDdkIsZUFBbUI7SUFBbkIsb0NBQW1CO0lBQ25CLGVBQW9CO0lBQXBCLHFDQUFvQjtJQUNwQixlQUFvQjtJQUFwQixxQ0FBb0I7Ozs7SUFWdkMsK0JBSUM7SUFDQyw2RUFNTztJQUVQLFlBQ0Y7SUFBQSxpQkFBTzs7OztJQWJMLDhFQUFvRDtJQUVwRCxxRUFBa0M7SUFFM0IsZUFBVztJQUFYLG1DQUFXO0lBUWxCLGVBQ0Y7SUFERSx5RUFDRjs7QURHRixNQUFNLE9BQU8sbUJBQW1CO0lBZ0I1QixZQUFvQixJQUFZLEVBQVUsRUFBcUI7UUFBM0MsU0FBSSxHQUFKLElBQUksQ0FBUTtRQUFVLE9BQUUsR0FBRixFQUFFLENBQW1CO1FBZHRELFVBQUssR0FBRyxHQUFHLENBQUM7UUFHWixZQUFPLEdBQWlCLEVBQUUsQ0FBQztRQUMzQixVQUFLLEdBQXFCLE1BQU0sQ0FBQztRQUNqQyxVQUFLLEdBQUcsSUFBSSxDQUFDO1FBQ2IsZ0JBQVcsR0FBRyxlQUFlLENBQUM7UUFDOUIsYUFBUSxHQUFHLElBQUksQ0FBQztRQUd6QixhQUFRLEdBQWlCLEVBQUUsQ0FBQztJQUl1QyxDQUFDO0lBRXBFLFFBQVE7UUFDSixJQUFJLElBQUksQ0FBQyxTQUFTLEVBQUU7WUFDaEIsSUFBSSxDQUFDLEtBQUssR0FBRyxJQUFJLENBQUMsU0FBUztpQkFDdEIsSUFBSSxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUM7aUJBQ3ZCLFNBQVMsQ0FBQyxDQUFDLENBQUMsRUFBRTtnQkFDWCxJQUFJLENBQUMsUUFBUSxHQUFHLENBQUMsR0FBRyxJQUFJLENBQUMsUUFBUSxFQUFFLG1CQUFtQixDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUM7Z0JBQzNELElBQUksQ0FBQyxFQUFFLENBQUMsYUFBYSxFQUFFLENBQUM7Z0JBQ3hCLElBQUksQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLEdBQUcsRUFBRTtvQkFDZixVQUFVLENBQUMsR0FBRyxFQUFFLENBQUMsSUFBSSxDQUFDLGNBQWMsRUFBRSxDQUFDLENBQUM7Z0JBQzVDLENBQUMsQ0FBQyxDQUFDO1lBQ1AsQ0FBQyxDQUFDLENBQUM7U0FDVjtJQUNMLENBQUM7SUFFRCxXQUFXO1FBQ1AsSUFBSSxJQUFJLENBQUMsS0FBSyxFQUFFO1lBQ1osSUFBSSxDQUFDLEtBQUssQ0FBQyxXQUFXLEVBQUUsQ0FBQztTQUM1QjtJQUNMLENBQUM7SUFFRCxXQUFXLENBQUMsT0FBc0I7UUFDOUIsSUFBSSxPQUFPLENBQUMsU0FBUyxDQUFDLEVBQUU7WUFDcEIsSUFBSSxDQUFDLFFBQVEsR0FBRyxPQUFPLENBQUMsU0FBUyxDQUFDLENBQUMsWUFBWSxDQUFDLEdBQUcsQ0FBQyxtQkFBbUIsQ0FBQyxDQUFDO1NBQzVFO0lBQ0wsQ0FBQztJQUVELGVBQWU7UUFDWCxJQUFJLENBQUMsY0FBYyxFQUFFLENBQUM7SUFDMUIsQ0FBQztJQUVPLGNBQWM7UUFDbEIsSUFBSSxDQUFDLFNBQVMsQ0FBQyxhQUFhLENBQUMsU0FBUyxHQUFHLElBQUksQ0FBQyxTQUFTLENBQUMsYUFBYSxDQUFDLFlBQVksQ0FBQztJQUN2RixDQUFDOztzRkFsRFEsbUJBQW1CO3NFQUFuQixtQkFBbUI7Ozs7OztRQ3ZCaEMsb0VBQXVGO1FBQ3ZGLGlDQUlDO1FBQ0Msc0VBY087UUFFVCxpQkFBTTs7UUF0QkEsZ0NBQVc7UUFJZixlQUEwQjtRQUExQiw4Q0FBMEI7UUFJUixlQUFXO1FBQVgsc0NBQVc7O3VGRGVsQixtQkFBbUI7Y0FOL0IsU0FBUzsyQkFDSSxhQUFhLG1CQUdOLHVCQUF1QixDQUFDLE1BQU07eUZBSXRDLEtBQUs7a0JBQWIsS0FBSztZQUNHLEtBQUs7a0JBQWIsS0FBSztZQUNHLFNBQVM7a0JBQWpCLEtBQUs7WUFDRyxPQUFPO2tCQUFmLEtBQUs7WUFDRyxLQUFLO2tCQUFiLEtBQUs7WUFDRyxLQUFLO2tCQUFiLEtBQUs7WUFDRyxXQUFXO2tCQUFuQixLQUFLO1lBQ0csUUFBUTtrQkFBaEIsS0FBSztZQUNrQixTQUFTO2tCQUFoQyxTQUFTO21CQUFDLFdBQVciLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge1xuICAgIEFmdGVyVmlld0luaXQsXG4gICAgQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3ksXG4gICAgQ2hhbmdlRGV0ZWN0b3JSZWYsXG4gICAgQ29tcG9uZW50LFxuICAgIEVsZW1lbnRSZWYsXG4gICAgSW5wdXQsIE5nWm9uZSxcbiAgICBPbkNoYW5nZXMsXG4gICAgT25EZXN0cm95LFxuICAgIE9uSW5pdCxcbiAgICBTaW1wbGVDaGFuZ2VzLFxuICAgIFZpZXdDaGlsZFxufSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IExvZ01lc3NhZ2UgfSBmcm9tICcuL21vZGVscy9sb2ctbWVzc2FnZS5tb2RlbCc7XG5pbXBvcnQgeyBub3JtYWxpemVMb2dNZXNzYWdlIH0gZnJvbSAnLi9oZWxwZXJzL2xvZy1tZXNzYWdlLmhlbHBlcic7XG5pbXBvcnQgeyBPYnNlcnZhYmxlLCBTdWJzY3JpcHRpb24gfSBmcm9tICdyeGpzJztcbmltcG9ydCB7IGRlbGF5IH0gZnJvbSAncnhqcy9vcGVyYXRvcnMnO1xuXG5AQ29tcG9uZW50KHtcbiAgICBzZWxlY3RvcjogJ2xvZy1tb25pdG9yJyxcbiAgICB0ZW1wbGF0ZVVybDogJy4vbG9nLW1vbml0b3IuY29tcG9uZW50Lmh0bWwnLFxuICAgIHN0eWxlVXJsczogWycuL2xvZy1tb25pdG9yLmNvbXBvbmVudC5zY3NzJ10sXG4gICAgY2hhbmdlRGV0ZWN0aW9uOiBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneS5PblB1c2hcbn0pXG5leHBvcnQgY2xhc3MgTG9nTW9uaXRvckNvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCwgT25EZXN0cm95LCBPbkNoYW5nZXMsIEFmdGVyVmlld0luaXQge1xuXG4gICAgQElucHV0KCkgZGVsYXkgPSA1MDA7XG4gICAgQElucHV0KCkgdGl0bGU7XG4gICAgQElucHV0KCkgbG9nU3RyZWFtOiBPYnNlcnZhYmxlPExvZ01lc3NhZ2U+O1xuICAgIEBJbnB1dCgpIGhpc3Rvcnk6IExvZ01lc3NhZ2VbXSA9IFtdO1xuICAgIEBJbnB1dCgpIHRoZW1lOiAnZGFyaycgfCAnbGlnaHQnID0gJ2RhcmsnO1xuICAgIEBJbnB1dCgpIGljb25zID0gdHJ1ZTtcbiAgICBASW5wdXQoKSBjdXN0b21DbGFzcyA9ICdsb2ctY29udGFpbmVyJztcbiAgICBASW5wdXQoKSBhbmltYXRlZCA9IHRydWU7XG4gICAgQFZpZXdDaGlsZCgnY29udGFpbmVyJykgY29udGFpbmVyOiBFbGVtZW50UmVmO1xuXG4gICAgX2hpc3Rvcnk6IExvZ01lc3NhZ2VbXSA9IFtdO1xuXG4gICAgcHJpdmF0ZSBfc3VicjogU3Vic2NyaXB0aW9uO1xuXG4gICAgY29uc3RydWN0b3IocHJpdmF0ZSB6b25lOiBOZ1pvbmUsIHByaXZhdGUgY2Q6IENoYW5nZURldGVjdG9yUmVmKSB7IH1cblxuICAgIG5nT25Jbml0KCkge1xuICAgICAgICBpZiAodGhpcy5sb2dTdHJlYW0pIHtcbiAgICAgICAgICAgIHRoaXMuX3N1YnIgPSB0aGlzLmxvZ1N0cmVhbVxuICAgICAgICAgICAgICAgIC5waXBlKGRlbGF5KHRoaXMuZGVsYXkpKVxuICAgICAgICAgICAgICAgIC5zdWJzY3JpYmUoYSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuX2hpc3RvcnkgPSBbLi4udGhpcy5faGlzdG9yeSwgbm9ybWFsaXplTG9nTWVzc2FnZShhKV07XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuY2QuZGV0ZWN0Q2hhbmdlcygpO1xuICAgICAgICAgICAgICAgICAgICB0aGlzLnpvbmUucnVuKCgpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHNldFRpbWVvdXQoKCkgPT4gdGhpcy5zY3JvbGxUb0JvdHRvbSgpKTtcbiAgICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBuZ09uRGVzdHJveSgpIHtcbiAgICAgICAgaWYgKHRoaXMuX3N1YnIpIHtcbiAgICAgICAgICAgIHRoaXMuX3N1YnIudW5zdWJzY3JpYmUoKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIG5nT25DaGFuZ2VzKGNoYW5nZXM6IFNpbXBsZUNoYW5nZXMpIHtcbiAgICAgICAgaWYgKGNoYW5nZXNbJ2hpc3RvcnknXSkge1xuICAgICAgICAgICAgdGhpcy5faGlzdG9yeSA9IGNoYW5nZXNbJ2hpc3RvcnknXS5jdXJyZW50VmFsdWUubWFwKG5vcm1hbGl6ZUxvZ01lc3NhZ2UpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgbmdBZnRlclZpZXdJbml0KCkge1xuICAgICAgICB0aGlzLnNjcm9sbFRvQm90dG9tKCk7XG4gICAgfVxuXG4gICAgcHJpdmF0ZSBzY3JvbGxUb0JvdHRvbSgpIHtcbiAgICAgICAgdGhpcy5jb250YWluZXIubmF0aXZlRWxlbWVudC5zY3JvbGxUb3AgPSB0aGlzLmNvbnRhaW5lci5uYXRpdmVFbGVtZW50LnNjcm9sbEhlaWdodDtcbiAgICB9XG5cbn1cbiIsIlxuPGRpdiAqbmdJZj1cInRpdGxlXCIgY2xhc3M9XCJ0aXRsZS1iYXJcIiBbbmdDbGFzc109XCJ0aGVtZSsnLXRoZW1lJ1wiPiYjOTAwMjsge3t0aXRsZX19PC9kaXY+XG48ZGl2XG4gICNjb250YWluZXJcbiAgY2xhc3M9XCJjb250YWluZXJcIlxuICBbbmdDbGFzc109XCJ0aGVtZSsnLXRoZW1lJ1wiXG4+XG4gIDxzcGFuXG4gICAgY2xhc3M9XCJtc2ctaXRlbSB7eydtc2ctJysobG9nLnR5cGUudG9Mb3dlckNhc2UoKSl9fVwiXG4gICAgKm5nRm9yPVwibGV0IGxvZyBvZiBfaGlzdG9yeVwiXG4gICAgW25nQ2xhc3NdPVwieydhbmltYXRlZCc6IGFuaW1hdGVkfVwiXG4gID5cbiAgICA8c3BhbiAqbmdJZj1cImljb25zXCIgW25nU3dpdGNoXT1cImxvZy50eXBlXCI+XG4gICAgICA8bmctY29udGFpbmVyICpuZ1N3aXRjaENhc2U9XCInRVJSJ1wiPiYjMTAwMDg7PC9uZy1jb250YWluZXI+XG4gICAgICA8bmctY29udGFpbmVyICpuZ1N3aXRjaENhc2U9XCInU1VDQ0VTUydcIj4mIzEwMDA0OzwvbmctY29udGFpbmVyPlxuICAgICAgPG5nLWNvbnRhaW5lciAqbmdTd2l0Y2hDYXNlPVwiJ0xPRydcIj4mIzEwMDk3OzwvbmctY29udGFpbmVyPlxuICAgICAgPG5nLWNvbnRhaW5lciAqbmdTd2l0Y2hDYXNlPVwiJ1dBUk4nXCI+JiM4MjUyOzwvbmctY29udGFpbmVyPlxuICAgICAgPG5nLWNvbnRhaW5lciAqbmdTd2l0Y2hDYXNlPVwiJ0lORk8nXCI+JiM4NTA1OzwvbmctY29udGFpbmVyPlxuICAgIDwvc3Bhbj5cblxuICAgIFt7e2xvZy50aW1lc3RhbXB9fV06IHt7bG9nLm1lc3NhZ2V9fVxuICA8L3NwYW4+XG5cbjwvZGl2PlxuIl19