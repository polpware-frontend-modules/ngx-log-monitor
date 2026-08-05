import * as i0 from '@angular/core';
import { ChangeDetectionStrategy, Component, ViewChild, Input, NgModule } from '@angular/core';
import { delay } from 'rxjs/operators';
import * as i1 from '@angular/common';
import { CommonModule } from '@angular/common';

const normalizeLogMessage = (msg) => ({
    ...msg,
    type: (msg.type ? msg.type : 'LOG'),
    timestamp: (msg.timestamp ? msg.timestamp : new Date().toLocaleString())
});

const _c0 = ["container"];
const _c1 = a0 => ({ "animated": a0 });
function LogMonitorComponent_Conditional_0_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 1);
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r0 = i0.ɵɵnextContext();
    i0.ɵɵproperty("ngClass", ctx_r0.theme + "-theme");
    i0.ɵɵadvance();
    i0.ɵɵtextInterpolate1("\u232A ", ctx_r0.title);
} }
function LogMonitorComponent_For_4_Conditional_1_Case_1_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵtext(0, " \u2718 ");
} }
function LogMonitorComponent_For_4_Conditional_1_Case_2_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵtext(0, " \u2714 ");
} }
function LogMonitorComponent_For_4_Conditional_1_Case_3_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵtext(0, " \u2771 ");
} }
function LogMonitorComponent_For_4_Conditional_1_Case_4_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵtext(0, " \u203C ");
} }
function LogMonitorComponent_For_4_Conditional_1_Case_5_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵtext(0, " \u2139 ");
} }
function LogMonitorComponent_For_4_Conditional_1_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "span");
    i0.ɵɵconditionalCreate(1, LogMonitorComponent_For_4_Conditional_1_Case_1_Template, 1, 0)(2, LogMonitorComponent_For_4_Conditional_1_Case_2_Template, 1, 0)(3, LogMonitorComponent_For_4_Conditional_1_Case_3_Template, 1, 0)(4, LogMonitorComponent_For_4_Conditional_1_Case_4_Template, 1, 0)(5, LogMonitorComponent_For_4_Conditional_1_Case_5_Template, 1, 0);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    let tmp_12_0;
    const log_r2 = i0.ɵɵnextContext().$implicit;
    i0.ɵɵadvance();
    i0.ɵɵconditional((tmp_12_0 = log_r2.type) === "ERR" ? 1 : tmp_12_0 === "SUCCESS" ? 2 : tmp_12_0 === "LOG" ? 3 : tmp_12_0 === "WARN" ? 4 : tmp_12_0 === "INFO" ? 5 : -1);
} }
function LogMonitorComponent_For_4_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "span", 4);
    i0.ɵɵconditionalCreate(1, LogMonitorComponent_For_4_Conditional_1_Template, 6, 1, "span");
    i0.ɵɵtext(2);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const log_r2 = ctx.$implicit;
    const ctx_r0 = i0.ɵɵnextContext();
    i0.ɵɵclassMap(i0.ɵɵinterpolate1("msg-item ", "msg-" + log_r2.type.toLowerCase()));
    i0.ɵɵproperty("ngClass", i0.ɵɵpureFunction1(7, _c1, ctx_r0.animated));
    i0.ɵɵadvance();
    i0.ɵɵconditional(ctx_r0.icons ? 1 : -1);
    i0.ɵɵadvance();
    i0.ɵɵtextInterpolate2(" [", log_r2.timestamp, "]: ", log_r2.message, " ");
} }
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
    static { this.ɵfac = function LogMonitorComponent_Factory(__ngFactoryType__) { return new (__ngFactoryType__ || LogMonitorComponent)(i0.ɵɵdirectiveInject(i0.NgZone), i0.ɵɵdirectiveInject(i0.ChangeDetectorRef)); }; }
    static { this.ɵcmp = /*@__PURE__*/ i0.ɵɵdefineComponent({ type: LogMonitorComponent, selectors: [["log-monitor"]], viewQuery: function LogMonitorComponent_Query(rf, ctx) { if (rf & 1) {
            i0.ɵɵviewQuery(_c0, 5);
        } if (rf & 2) {
            let _t;
            i0.ɵɵqueryRefresh(_t = i0.ɵɵloadQuery()) && (ctx.container = _t.first);
        } }, inputs: { delay: "delay", title: "title", logStream: "logStream", history: "history", theme: "theme", icons: "icons", customClass: "customClass", animated: "animated" }, standalone: false, features: [i0.ɵɵNgOnChangesFeature], decls: 5, vars: 2, consts: [["container", ""], [1, "title-bar", 3, "ngClass"], [1, "container", 3, "ngClass"], [3, "class", "ngClass"], [3, "ngClass"]], template: function LogMonitorComponent_Template(rf, ctx) { if (rf & 1) {
            i0.ɵɵconditionalCreate(0, LogMonitorComponent_Conditional_0_Template, 2, 2, "div", 1);
            i0.ɵɵelementStart(1, "div", 2, 0);
            i0.ɵɵrepeaterCreate(3, LogMonitorComponent_For_4_Template, 3, 9, "span", 3, i0.ɵɵrepeaterTrackByIdentity);
            i0.ɵɵelementEnd();
        } if (rf & 2) {
            i0.ɵɵconditional(ctx.title ? 0 : -1);
            i0.ɵɵadvance();
            i0.ɵɵproperty("ngClass", ctx.theme + "-theme");
            i0.ɵɵadvance(2);
            i0.ɵɵrepeater(ctx._history);
        } }, dependencies: [i1.NgClass], styles: [".container[_ngcontent-%COMP%]{position:relative;width:100%;height:100%;padding-top:5px;padding-bottom:5px;overflow-y:auto;font-family:Lucida Console,Monaco,monospace,sans-serif}.animated[_ngcontent-%COMP%]{animation:_ngcontent-%COMP%_fadein .26s}@keyframes _ngcontent-%COMP%_fadein{0%{opacity:0;transform:translateY(-10px)}to{opacity:1;transform:translateY(0)}}.title-bar[_ngcontent-%COMP%]{padding:5px;font-weight:600}.dark-theme.title-bar[_ngcontent-%COMP%]{border-bottom:solid 1px #3c3c3c;background:#1f1f1f}.light-theme.title-bar[_ngcontent-%COMP%]{border-bottom:solid 1px #a8acad;background:#dbdfe0}.msg-item[_ngcontent-%COMP%]{display:block;margin-left:6px;font-size:.85em}.msg-list[_ngcontent-%COMP%]{margin:0;height:100%}.light-theme[_ngcontent-%COMP%]{color:#212121;background:#ecf0f1}.light-theme[_ngcontent-%COMP%]   .msg-info[_ngcontent-%COMP%]{color:#2980b9}.light-theme[_ngcontent-%COMP%]   .msg-err[_ngcontent-%COMP%]{color:#c0392b}.light-theme[_ngcontent-%COMP%]   .msg-success[_ngcontent-%COMP%]{color:#27ae60}.light-theme[_ngcontent-%COMP%]   .msg-warn[_ngcontent-%COMP%]{color:#f39c12}.dark-theme[_ngcontent-%COMP%]{color:#ecf0f1;background:#212121}.dark-theme[_ngcontent-%COMP%]   .msg-info[_ngcontent-%COMP%]{color:#3498db}.dark-theme[_ngcontent-%COMP%]   .msg-err[_ngcontent-%COMP%]{color:#e74c3c}.dark-theme[_ngcontent-%COMP%]   .msg-success[_ngcontent-%COMP%]{color:#2ecc71}.dark-theme[_ngcontent-%COMP%]   .msg-warn[_ngcontent-%COMP%]{color:#f1c40f}"], changeDetection: 0 }); }
}
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(LogMonitorComponent, [{
        type: Component,
        args: [{ selector: 'log-monitor', changeDetection: ChangeDetectionStrategy.OnPush, standalone: false, template: "\n@if (title) {\n  <div class=\"title-bar\" [ngClass]=\"theme+'-theme'\">&#9002; {{title}}</div>\n}\n<div\n  #container\n  class=\"container\"\n  [ngClass]=\"theme+'-theme'\"\n  >\n  @for (log of _history; track log) {\n    <span\n      class=\"msg-item {{'msg-'+(log.type.toLowerCase())}}\"\n      [ngClass]=\"{'animated': animated}\"\n      >\n      @if (icons) {\n        <span>\n          @switch (log.type) {\n            @case ('ERR') {\n              &#10008;\n            }\n            @case ('SUCCESS') {\n              &#10004;\n            }\n            @case ('LOG') {\n              &#10097;\n            }\n            @case ('WARN') {\n              &#8252;\n            }\n            @case ('INFO') {\n              &#8505;\n            }\n          }\n        </span>\n      }\n      [{{log.timestamp}}]: {{log.message}}\n    </span>\n  }\n\n</div>\n", styles: [".container{position:relative;width:100%;height:100%;padding-top:5px;padding-bottom:5px;overflow-y:auto;font-family:Lucida Console,Monaco,monospace,sans-serif}.animated{animation:fadein .26s}@keyframes fadein{0%{opacity:0;transform:translateY(-10px)}to{opacity:1;transform:translateY(0)}}.title-bar{padding:5px;font-weight:600}.dark-theme.title-bar{border-bottom:solid 1px #3c3c3c;background:#1f1f1f}.light-theme.title-bar{border-bottom:solid 1px #a8acad;background:#dbdfe0}.msg-item{display:block;margin-left:6px;font-size:.85em}.msg-list{margin:0;height:100%}.light-theme{color:#212121;background:#ecf0f1}.light-theme .msg-info{color:#2980b9}.light-theme .msg-err{color:#c0392b}.light-theme .msg-success{color:#27ae60}.light-theme .msg-warn{color:#f39c12}.dark-theme{color:#ecf0f1;background:#212121}.dark-theme .msg-info{color:#3498db}.dark-theme .msg-err{color:#e74c3c}.dark-theme .msg-success{color:#2ecc71}.dark-theme .msg-warn{color:#f1c40f}\n"] }]
    }], () => [{ type: i0.NgZone }, { type: i0.ChangeDetectorRef }], { delay: [{
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
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassDebugInfo(LogMonitorComponent, { className: "LogMonitorComponent", filePath: "lib/log-monitor.component.ts", lineNumber: 26 }); })();

class LogMonitorModule {
    static { this.ɵfac = function LogMonitorModule_Factory(__ngFactoryType__) { return new (__ngFactoryType__ || LogMonitorModule)(); }; }
    static { this.ɵmod = /*@__PURE__*/ i0.ɵɵdefineNgModule({ type: LogMonitorModule }); }
    static { this.ɵinj = /*@__PURE__*/ i0.ɵɵdefineInjector({ imports: [CommonModule] }); }
}
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(LogMonitorModule, [{
        type: NgModule,
        args: [{
                imports: [CommonModule],
                declarations: [LogMonitorComponent],
                exports: [LogMonitorComponent]
            }]
    }], null, null); })();
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && i0.ɵɵsetNgModuleScope(LogMonitorModule, { declarations: [LogMonitorComponent], imports: [CommonModule], exports: [LogMonitorComponent] }); })();

/*
 * Public API Surface of ngx-log-monitor
 */

/**
 * Generated bundle index. Do not edit.
 */

export { LogMonitorComponent, LogMonitorModule };
//# sourceMappingURL=ngx-log-monitor.mjs.map
