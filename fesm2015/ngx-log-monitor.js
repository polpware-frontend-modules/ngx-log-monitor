import { __decorate, __metadata } from 'tslib';
import { NgZone, Input, ViewChild, ElementRef, Component, ChangeDetectionStrategy, NgModule } from '@angular/core';
import { Observable } from 'rxjs';
import { delay } from 'rxjs/operators';
import { CommonModule } from '@angular/common';

const normalizeLogMessage = (msg) => (Object.assign(Object.assign({}, msg), { type: (msg.type ? msg.type : 'LOG'), timestamp: (msg.timestamp ? msg.timestamp : new Date().toLocaleString()) }));

let LogMonitorComponent = class LogMonitorComponent {
    constructor(zone) {
        this.zone = zone;
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
                this._history.push(normalizeLogMessage(a));
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
};
LogMonitorComponent.ctorParameters = () => [
    { type: NgZone }
];
__decorate([
    Input(),
    __metadata("design:type", Object)
], LogMonitorComponent.prototype, "delay", void 0);
__decorate([
    Input(),
    __metadata("design:type", Object)
], LogMonitorComponent.prototype, "title", void 0);
__decorate([
    Input(),
    __metadata("design:type", Observable)
], LogMonitorComponent.prototype, "logStream", void 0);
__decorate([
    Input(),
    __metadata("design:type", Array)
], LogMonitorComponent.prototype, "history", void 0);
__decorate([
    Input(),
    __metadata("design:type", String)
], LogMonitorComponent.prototype, "theme", void 0);
__decorate([
    Input(),
    __metadata("design:type", Object)
], LogMonitorComponent.prototype, "icons", void 0);
__decorate([
    Input(),
    __metadata("design:type", Object)
], LogMonitorComponent.prototype, "customClass", void 0);
__decorate([
    Input(),
    __metadata("design:type", Object)
], LogMonitorComponent.prototype, "animated", void 0);
__decorate([
    ViewChild('container'),
    __metadata("design:type", ElementRef)
], LogMonitorComponent.prototype, "container", void 0);
LogMonitorComponent = __decorate([
    Component({
        selector: 'log-monitor',
        template: "\n<div *ngIf=\"title\" class=\"title-bar\" [ngClass]=\"theme+'-theme'\">&#9002; {{title}}</div>\n<div\n  #container\n  class=\"container\"\n  [ngClass]=\"theme+'-theme'\"\n>\n  <span\n    class=\"msg-item {{'msg-'+(log.type.toLowerCase())}}\"\n    *ngFor=\"let log of _history\"\n    [ngClass]=\"{'animated': animated}\"\n  >\n    <span *ngIf=\"icons\" [ngSwitch]=\"log.type\">\n      <ng-container *ngSwitchCase=\"'ERR'\">&#10008;</ng-container>\n      <ng-container *ngSwitchCase=\"'SUCCESS'\">&#10004;</ng-container>\n      <ng-container *ngSwitchCase=\"'LOG'\">&#10097;</ng-container>\n      <ng-container *ngSwitchCase=\"'WARN'\">&#8252;</ng-container>\n      <ng-container *ngSwitchCase=\"'INFO'\">&#8505;</ng-container>\n    </span>\n\n    [{{log.timestamp}}]: {{log.message}}\n  </span>\n\n</div>\n",
        changeDetection: ChangeDetectionStrategy.OnPush,
        styles: [".container{position:relative;width:100%;height:100%;padding-top:5px;padding-bottom:5px;overflow-y:auto;font-family:\"Lucida Console\",Monaco,monospace,sans-serif}.animated{-webkit-animation:260ms fadein;animation:260ms fadein}@-webkit-keyframes fadein{from{opacity:0;transform:translateY(-10px)}to{opacity:1;transform:translateY(0)}}@keyframes fadein{from{opacity:0;transform:translateY(-10px)}to{opacity:1;transform:translateY(0)}}.title-bar{padding:5px;font-weight:600}.dark-theme.title-bar{border-bottom:1px solid #3c3c3c;background:#1f1f1f}.light-theme.title-bar{border-bottom:1px solid #a8acad;background:#dbdfe0}.msg-item{display:block;margin-left:6px;font-size:.85em}.msg-list{margin:0;height:100%}.light-theme{color:#212121;background:#ecf0f1}.light-theme .msg-info{color:#2980b9}.light-theme .msg-err{color:#c0392b}.light-theme .msg-success{color:#27ae60}.light-theme .msg-warn{color:#f39c12}.dark-theme{color:#ecf0f1;background:#212121}.dark-theme .msg-info{color:#3498db}.dark-theme .msg-err{color:#e74c3c}.dark-theme .msg-success{color:#2ecc71}.dark-theme .msg-warn{color:#f1c40f}"]
    }),
    __metadata("design:paramtypes", [NgZone])
], LogMonitorComponent);

let LogMonitorModule = class LogMonitorModule {
};
LogMonitorModule = __decorate([
    NgModule({
        imports: [CommonModule],
        declarations: [LogMonitorComponent],
        exports: [LogMonitorComponent]
    })
], LogMonitorModule);

/*
 * Public API Surface of ngx-log-monitor
 */

/**
 * Generated bundle index. Do not edit.
 */

export { LogMonitorComponent, LogMonitorModule };
//# sourceMappingURL=ngx-log-monitor.js.map
