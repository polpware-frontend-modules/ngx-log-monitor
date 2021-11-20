import { __decorate, __metadata } from "tslib";
import { AfterViewInit, ChangeDetectionStrategy, Component, ElementRef, Input, NgZone, OnChanges, OnDestroy, OnInit, SimpleChanges, ViewChild } from '@angular/core';
import { normalizeLogMessage } from './helpers/log-message.helper';
import { Observable } from 'rxjs';
import { delay } from 'rxjs/operators';
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
export { LogMonitorComponent };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibG9nLW1vbml0b3IuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vbmd4LWxvZy1tb25pdG9yLyIsInNvdXJjZXMiOlsibGliL2xvZy1tb25pdG9yLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUEsT0FBTyxFQUNILGFBQWEsRUFDYix1QkFBdUIsRUFDdkIsU0FBUyxFQUNULFVBQVUsRUFDVixLQUFLLEVBQUUsTUFBTSxFQUNiLFNBQVMsRUFDVCxTQUFTLEVBQ1QsTUFBTSxFQUNOLGFBQWEsRUFDYixTQUFTLEVBQ1osTUFBTSxlQUFlLENBQUM7QUFFdkIsT0FBTyxFQUFFLG1CQUFtQixFQUFFLE1BQU0sOEJBQThCLENBQUM7QUFDbkUsT0FBTyxFQUFFLFVBQVUsRUFBZ0IsTUFBTSxNQUFNLENBQUM7QUFDaEQsT0FBTyxFQUFFLEtBQUssRUFBRSxNQUFNLGdCQUFnQixDQUFDO0FBUXZDLElBQWEsbUJBQW1CLEdBQWhDLE1BQWEsbUJBQW1CO0lBZ0I1QixZQUFvQixJQUFZO1FBQVosU0FBSSxHQUFKLElBQUksQ0FBUTtRQWR2QixVQUFLLEdBQUcsR0FBRyxDQUFDO1FBR1osWUFBTyxHQUFpQixFQUFFLENBQUM7UUFDM0IsVUFBSyxHQUFxQixNQUFNLENBQUM7UUFDakMsVUFBSyxHQUFHLElBQUksQ0FBQztRQUNiLGdCQUFXLEdBQUcsZUFBZSxDQUFDO1FBQzlCLGFBQVEsR0FBRyxJQUFJLENBQUM7UUFHekIsYUFBUSxHQUFpQixFQUFFLENBQUM7SUFJUSxDQUFDO0lBRXJDLFFBQVE7UUFDSixJQUFJLElBQUksQ0FBQyxTQUFTLEVBQUU7WUFDaEIsSUFBSSxDQUFDLEtBQUssR0FBRyxJQUFJLENBQUMsU0FBUztpQkFDdEIsSUFBSSxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUM7aUJBQ3ZCLFNBQVMsQ0FBQyxDQUFDLENBQUMsRUFBRTtnQkFDWCxJQUFJLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQyxtQkFBbUIsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDO2dCQUMzQyxJQUFJLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxHQUFHLEVBQUU7b0JBQ2YsVUFBVSxDQUFDLEdBQUcsRUFBRSxDQUFDLElBQUksQ0FBQyxjQUFjLEVBQUUsQ0FBQyxDQUFDO2dCQUM1QyxDQUFDLENBQUMsQ0FBQztZQUNQLENBQUMsQ0FBQyxDQUFDO1NBQ1Y7SUFDTCxDQUFDO0lBRUQsV0FBVztRQUNQLElBQUksSUFBSSxDQUFDLEtBQUssRUFBRTtZQUNaLElBQUksQ0FBQyxLQUFLLENBQUMsV0FBVyxFQUFFLENBQUM7U0FDNUI7SUFDTCxDQUFDO0lBRUQsV0FBVyxDQUFDLE9BQXNCO1FBQzlCLElBQUksT0FBTyxDQUFDLFNBQVMsQ0FBQyxFQUFFO1lBQ3BCLElBQUksQ0FBQyxRQUFRLEdBQUcsT0FBTyxDQUFDLFNBQVMsQ0FBQyxDQUFDLFlBQVksQ0FBQyxHQUFHLENBQUMsbUJBQW1CLENBQUMsQ0FBQztTQUM1RTtJQUNMLENBQUM7SUFFRCxlQUFlO1FBQ1gsSUFBSSxDQUFDLGNBQWMsRUFBRSxDQUFDO0lBQzFCLENBQUM7SUFFTyxjQUFjO1FBQ2xCLElBQUksQ0FBQyxTQUFTLENBQUMsYUFBYSxDQUFDLFNBQVMsR0FBRyxJQUFJLENBQUMsU0FBUyxDQUFDLGFBQWEsQ0FBQyxZQUFZLENBQUM7SUFDdkYsQ0FBQztDQUVKLENBQUE7O1lBbkM2QixNQUFNOztBQWR2QjtJQUFSLEtBQUssRUFBRTs7a0RBQWE7QUFDWjtJQUFSLEtBQUssRUFBRTs7a0RBQU87QUFDTjtJQUFSLEtBQUssRUFBRTs4QkFBWSxVQUFVO3NEQUFhO0FBQ2xDO0lBQVIsS0FBSyxFQUFFOztvREFBNEI7QUFDM0I7SUFBUixLQUFLLEVBQUU7O2tEQUFrQztBQUNqQztJQUFSLEtBQUssRUFBRTs7a0RBQWM7QUFDYjtJQUFSLEtBQUssRUFBRTs7d0RBQStCO0FBQzlCO0lBQVIsS0FBSyxFQUFFOztxREFBaUI7QUFDRDtJQUF2QixTQUFTLENBQUMsV0FBVyxDQUFDOzhCQUFZLFVBQVU7c0RBQUM7QUFWckMsbUJBQW1CO0lBTi9CLFNBQVMsQ0FBQztRQUNQLFFBQVEsRUFBRSxhQUFhO1FBQ3ZCLGt6QkFBMkM7UUFFM0MsZUFBZSxFQUFFLHVCQUF1QixDQUFDLE1BQU07O0tBQ2xELENBQUM7cUNBaUI0QixNQUFNO0dBaEJ2QixtQkFBbUIsQ0FtRC9CO1NBbkRZLG1CQUFtQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7XG4gICAgQWZ0ZXJWaWV3SW5pdCxcbiAgICBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneSxcbiAgICBDb21wb25lbnQsXG4gICAgRWxlbWVudFJlZixcbiAgICBJbnB1dCwgTmdab25lLFxuICAgIE9uQ2hhbmdlcyxcbiAgICBPbkRlc3Ryb3ksXG4gICAgT25Jbml0LFxuICAgIFNpbXBsZUNoYW5nZXMsXG4gICAgVmlld0NoaWxkXG59IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgTG9nTWVzc2FnZSB9IGZyb20gJy4vbW9kZWxzL2xvZy1tZXNzYWdlLm1vZGVsJztcbmltcG9ydCB7IG5vcm1hbGl6ZUxvZ01lc3NhZ2UgfSBmcm9tICcuL2hlbHBlcnMvbG9nLW1lc3NhZ2UuaGVscGVyJztcbmltcG9ydCB7IE9ic2VydmFibGUsIFN1YnNjcmlwdGlvbiB9IGZyb20gJ3J4anMnO1xuaW1wb3J0IHsgZGVsYXkgfSBmcm9tICdyeGpzL29wZXJhdG9ycyc7XG5cbkBDb21wb25lbnQoe1xuICAgIHNlbGVjdG9yOiAnbG9nLW1vbml0b3InLFxuICAgIHRlbXBsYXRlVXJsOiAnLi9sb2ctbW9uaXRvci5jb21wb25lbnQuaHRtbCcsXG4gICAgc3R5bGVVcmxzOiBbJy4vbG9nLW1vbml0b3IuY29tcG9uZW50LnNjc3MnXSxcbiAgICBjaGFuZ2VEZXRlY3Rpb246IENoYW5nZURldGVjdGlvblN0cmF0ZWd5Lk9uUHVzaFxufSlcbmV4cG9ydCBjbGFzcyBMb2dNb25pdG9yQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0LCBPbkRlc3Ryb3ksIE9uQ2hhbmdlcywgQWZ0ZXJWaWV3SW5pdCB7XG5cbiAgICBASW5wdXQoKSBkZWxheSA9IDUwMDtcbiAgICBASW5wdXQoKSB0aXRsZTtcbiAgICBASW5wdXQoKSBsb2dTdHJlYW06IE9ic2VydmFibGU8TG9nTWVzc2FnZT47XG4gICAgQElucHV0KCkgaGlzdG9yeTogTG9nTWVzc2FnZVtdID0gW107XG4gICAgQElucHV0KCkgdGhlbWU6ICdkYXJrJyB8ICdsaWdodCcgPSAnZGFyayc7XG4gICAgQElucHV0KCkgaWNvbnMgPSB0cnVlO1xuICAgIEBJbnB1dCgpIGN1c3RvbUNsYXNzID0gJ2xvZy1jb250YWluZXInO1xuICAgIEBJbnB1dCgpIGFuaW1hdGVkID0gdHJ1ZTtcbiAgICBAVmlld0NoaWxkKCdjb250YWluZXInKSBjb250YWluZXI6IEVsZW1lbnRSZWY7XG5cbiAgICBfaGlzdG9yeTogTG9nTWVzc2FnZVtdID0gW107XG5cbiAgICBwcml2YXRlIF9zdWJyOiBTdWJzY3JpcHRpb247XG5cbiAgICBjb25zdHJ1Y3Rvcihwcml2YXRlIHpvbmU6IE5nWm9uZSkgeyB9XG5cbiAgICBuZ09uSW5pdCgpIHtcbiAgICAgICAgaWYgKHRoaXMubG9nU3RyZWFtKSB7XG4gICAgICAgICAgICB0aGlzLl9zdWJyID0gdGhpcy5sb2dTdHJlYW1cbiAgICAgICAgICAgICAgICAucGlwZShkZWxheSh0aGlzLmRlbGF5KSlcbiAgICAgICAgICAgICAgICAuc3Vic2NyaWJlKGEgPT4ge1xuICAgICAgICAgICAgICAgICAgICB0aGlzLl9oaXN0b3J5LnB1c2gobm9ybWFsaXplTG9nTWVzc2FnZShhKSk7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuem9uZS5ydW4oKCkgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgc2V0VGltZW91dCgoKSA9PiB0aGlzLnNjcm9sbFRvQm90dG9tKCkpO1xuICAgICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIG5nT25EZXN0cm95KCkge1xuICAgICAgICBpZiAodGhpcy5fc3Vicikge1xuICAgICAgICAgICAgdGhpcy5fc3Vici51bnN1YnNjcmliZSgpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgbmdPbkNoYW5nZXMoY2hhbmdlczogU2ltcGxlQ2hhbmdlcykge1xuICAgICAgICBpZiAoY2hhbmdlc1snaGlzdG9yeSddKSB7XG4gICAgICAgICAgICB0aGlzLl9oaXN0b3J5ID0gY2hhbmdlc1snaGlzdG9yeSddLmN1cnJlbnRWYWx1ZS5tYXAobm9ybWFsaXplTG9nTWVzc2FnZSk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBuZ0FmdGVyVmlld0luaXQoKSB7XG4gICAgICAgIHRoaXMuc2Nyb2xsVG9Cb3R0b20oKTtcbiAgICB9XG5cbiAgICBwcml2YXRlIHNjcm9sbFRvQm90dG9tKCkge1xuICAgICAgICB0aGlzLmNvbnRhaW5lci5uYXRpdmVFbGVtZW50LnNjcm9sbFRvcCA9IHRoaXMuY29udGFpbmVyLm5hdGl2ZUVsZW1lbnQuc2Nyb2xsSGVpZ2h0O1xuICAgIH1cblxufVxuIl19