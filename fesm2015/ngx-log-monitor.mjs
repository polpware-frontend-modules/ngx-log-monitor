import * as i0 from '@angular/core';
import { Component, ChangeDetectionStrategy, Input, ViewChild, NgModule } from '@angular/core';
import { delay } from 'rxjs/operators';
import * as i1 from '@angular/common';
import { CommonModule } from '@angular/common';

const normalizeLogMessage = (msg) => (Object.assign(Object.assign({}, msg), { type: (msg.type ? msg.type : 'LOG'), timestamp: (msg.timestamp ? msg.timestamp : new Date().toLocaleString()) }));

const _c0 = ["container"];
function LogMonitorComponent_div_0_Template(rf, ctx) {
    if (rf & 1) {
        i0.ɵɵelementStart(0, "div", 4);
        i0.ɵɵtext(1);
        i0.ɵɵelementEnd();
    }
    if (rf & 2) {
        const ctx_r0 = i0.ɵɵnextContext();
        i0.ɵɵproperty("ngClass", ctx_r0.theme + "-theme");
        i0.ɵɵadvance(1);
        i0.ɵɵtextInterpolate1("\u232A ", ctx_r0.title, "");
    }
}
function LogMonitorComponent_span_3_span_1_ng_container_1_Template(rf, ctx) {
    if (rf & 1) {
        i0.ɵɵelementContainerStart(0);
        i0.ɵɵtext(1, "\u2718");
        i0.ɵɵelementContainerEnd();
    }
}
function LogMonitorComponent_span_3_span_1_ng_container_2_Template(rf, ctx) {
    if (rf & 1) {
        i0.ɵɵelementContainerStart(0);
        i0.ɵɵtext(1, "\u2714");
        i0.ɵɵelementContainerEnd();
    }
}
function LogMonitorComponent_span_3_span_1_ng_container_3_Template(rf, ctx) {
    if (rf & 1) {
        i0.ɵɵelementContainerStart(0);
        i0.ɵɵtext(1, "\u2771");
        i0.ɵɵelementContainerEnd();
    }
}
function LogMonitorComponent_span_3_span_1_ng_container_4_Template(rf, ctx) {
    if (rf & 1) {
        i0.ɵɵelementContainerStart(0);
        i0.ɵɵtext(1, "\u203C");
        i0.ɵɵelementContainerEnd();
    }
}
function LogMonitorComponent_span_3_span_1_ng_container_5_Template(rf, ctx) {
    if (rf & 1) {
        i0.ɵɵelementContainerStart(0);
        i0.ɵɵtext(1, "\u2139");
        i0.ɵɵelementContainerEnd();
    }
}
function LogMonitorComponent_span_3_span_1_Template(rf, ctx) {
    if (rf & 1) {
        i0.ɵɵelementStart(0, "span", 7);
        i0.ɵɵtemplate(1, LogMonitorComponent_span_3_span_1_ng_container_1_Template, 2, 0, "ng-container", 8);
        i0.ɵɵtemplate(2, LogMonitorComponent_span_3_span_1_ng_container_2_Template, 2, 0, "ng-container", 8);
        i0.ɵɵtemplate(3, LogMonitorComponent_span_3_span_1_ng_container_3_Template, 2, 0, "ng-container", 8);
        i0.ɵɵtemplate(4, LogMonitorComponent_span_3_span_1_ng_container_4_Template, 2, 0, "ng-container", 8);
        i0.ɵɵtemplate(5, LogMonitorComponent_span_3_span_1_ng_container_5_Template, 2, 0, "ng-container", 8);
        i0.ɵɵelementEnd();
    }
    if (rf & 2) {
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
    }
}
const _c1 = function (a0) { return { "animated": a0 }; };
function LogMonitorComponent_span_3_Template(rf, ctx) {
    if (rf & 1) {
        i0.ɵɵelementStart(0, "span", 5);
        i0.ɵɵtemplate(1, LogMonitorComponent_span_3_span_1_Template, 6, 6, "span", 6);
        i0.ɵɵtext(2);
        i0.ɵɵelementEnd();
    }
    if (rf & 2) {
        const log_r3 = ctx.$implicit;
        const ctx_r2 = i0.ɵɵnextContext();
        i0.ɵɵclassMapInterpolate1("msg-item ", "msg-" + log_r3.type.toLowerCase(), "");
        i0.ɵɵproperty("ngClass", i0.ɵɵpureFunction1(7, _c1, ctx_r2.animated));
        i0.ɵɵadvance(1);
        i0.ɵɵproperty("ngIf", ctx_r2.icons);
        i0.ɵɵadvance(1);
        i0.ɵɵtextInterpolate2(" [", log_r3.timestamp, "]: ", log_r3.message, " ");
    }
}
class LogMonitorComponent {
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
LogMonitorComponent.ɵcmp = /*@__PURE__*/ i0.ɵɵdefineComponent({ type: LogMonitorComponent, selectors: [["log-monitor"]], viewQuery: function LogMonitorComponent_Query(rf, ctx) {
        if (rf & 1) {
            i0.ɵɵviewQuery(_c0, 5);
        }
        if (rf & 2) {
            let _t;
            i0.ɵɵqueryRefresh(_t = i0.ɵɵloadQuery()) && (ctx.container = _t.first);
        }
    }, inputs: { delay: "delay", title: "title", logStream: "logStream", history: "history", theme: "theme", icons: "icons", customClass: "customClass", animated: "animated" }, features: [i0.ɵɵNgOnChangesFeature], decls: 4, vars: 3, consts: [["class", "title-bar", 3, "ngClass", 4, "ngIf"], [1, "container", 3, "ngClass"], ["container", ""], [3, "class", "ngClass", 4, "ngFor", "ngForOf"], [1, "title-bar", 3, "ngClass"], [3, "ngClass"], [3, "ngSwitch", 4, "ngIf"], [3, "ngSwitch"], [4, "ngSwitchCase"]], template: function LogMonitorComponent_Template(rf, ctx) {
        if (rf & 1) {
            i0.ɵɵtemplate(0, LogMonitorComponent_div_0_Template, 2, 2, "div", 0);
            i0.ɵɵelementStart(1, "div", 1, 2);
            i0.ɵɵtemplate(3, LogMonitorComponent_span_3_Template, 3, 9, "span", 3);
            i0.ɵɵelementEnd();
        }
        if (rf & 2) {
            i0.ɵɵproperty("ngIf", ctx.title);
            i0.ɵɵadvance(1);
            i0.ɵɵproperty("ngClass", ctx.theme + "-theme");
            i0.ɵɵadvance(2);
            i0.ɵɵproperty("ngForOf", ctx._history);
        }
    }, dependencies: [i1.NgClass, i1.NgForOf, i1.NgIf, i1.NgSwitch, i1.NgSwitchCase], styles: [".container[_ngcontent-%COMP%]{position:relative;width:100%;height:100%;padding-top:5px;padding-bottom:5px;overflow-y:auto;font-family:Lucida Console,Monaco,monospace,sans-serif}.animated[_ngcontent-%COMP%]{animation:_ngcontent-%COMP%_fadein .26s}@keyframes _ngcontent-%COMP%_fadein{0%{opacity:0;transform:translateY(-10px)}to{opacity:1;transform:translateY(0)}}.title-bar[_ngcontent-%COMP%]{padding:5px;font-weight:600}.dark-theme.title-bar[_ngcontent-%COMP%]{border-bottom:solid 1px #3c3c3c;background:#1f1f1f}.light-theme.title-bar[_ngcontent-%COMP%]{border-bottom:solid 1px #a8acad;background:#dbdfe0}.msg-item[_ngcontent-%COMP%]{display:block;margin-left:6px;font-size:.85em}.msg-list[_ngcontent-%COMP%]{margin:0;height:100%}.light-theme[_ngcontent-%COMP%]{color:#212121;background:#ECF0F1}.light-theme[_ngcontent-%COMP%]   .msg-info[_ngcontent-%COMP%]{color:#2980b9}.light-theme[_ngcontent-%COMP%]   .msg-err[_ngcontent-%COMP%]{color:#c0392b}.light-theme[_ngcontent-%COMP%]   .msg-success[_ngcontent-%COMP%]{color:#27ae60}.light-theme[_ngcontent-%COMP%]   .msg-warn[_ngcontent-%COMP%]{color:#f39c12}.dark-theme[_ngcontent-%COMP%]{color:#ecf0f1;background:#212121}.dark-theme[_ngcontent-%COMP%]   .msg-info[_ngcontent-%COMP%]{color:#3498db}.dark-theme[_ngcontent-%COMP%]   .msg-err[_ngcontent-%COMP%]{color:#e74c3c}.dark-theme[_ngcontent-%COMP%]   .msg-success[_ngcontent-%COMP%]{color:#2ecc71}.dark-theme[_ngcontent-%COMP%]   .msg-warn[_ngcontent-%COMP%]{color:#f1c40f}"], changeDetection: 0 });
(function () {
    (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(LogMonitorComponent, [{
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
            }] });
})();

class LogMonitorModule {
}
LogMonitorModule.ɵfac = function LogMonitorModule_Factory(t) { return new (t || LogMonitorModule)(); };
LogMonitorModule.ɵmod = /*@__PURE__*/ i0.ɵɵdefineNgModule({ type: LogMonitorModule });
LogMonitorModule.ɵinj = /*@__PURE__*/ i0.ɵɵdefineInjector({ imports: [CommonModule] });
(function () {
    (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(LogMonitorModule, [{
            type: NgModule,
            args: [{
                    imports: [CommonModule],
                    declarations: [LogMonitorComponent],
                    exports: [LogMonitorComponent]
                }]
        }], null, null);
})();
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && i0.ɵɵsetNgModuleScope(LogMonitorModule, { declarations: [LogMonitorComponent], imports: [CommonModule], exports: [LogMonitorComponent] }); })();

/*
 * Public API Surface of ngx-log-monitor
 */

/**
 * Generated bundle index. Do not edit.
 */

export { LogMonitorComponent, LogMonitorModule };
//# sourceMappingURL=ngx-log-monitor.mjs.map
