import { __decorate, __metadata } from "tslib";
import { AfterViewInit, ChangeDetectionStrategy, Component, ElementRef, Input, NgZone, OnChanges, OnDestroy, OnInit, SimpleChanges, ViewChild } from '@angular/core';
import { normalizeLogMessage } from './helpers/log-message.helper';
import { Observable } from 'rxjs';
import { delay } from 'rxjs/operators';
var LogMonitorComponent = /** @class */ (function () {
    function LogMonitorComponent(zone) {
        this.zone = zone;
        this.delay = 500;
        this.history = [];
        this.theme = 'dark';
        this.icons = true;
        this.customClass = 'log-container';
        this.animated = true;
        this._history = [];
    }
    LogMonitorComponent.prototype.ngOnInit = function () {
        var _this = this;
        if (this.logStream) {
            this._subr = this.logStream
                .pipe(delay(this.delay))
                .subscribe(function (a) {
                _this._history.push(normalizeLogMessage(a));
                _this.zone.run(function () {
                    setTimeout(function () { return _this.scrollToBottom(); });
                });
            });
        }
    };
    LogMonitorComponent.prototype.ngOnDestroy = function () {
        if (this._subr) {
            this._subr.unsubscribe();
        }
    };
    LogMonitorComponent.prototype.ngOnChanges = function (changes) {
        if (changes['history']) {
            this._history = changes['history'].currentValue.map(normalizeLogMessage);
        }
    };
    LogMonitorComponent.prototype.ngAfterViewInit = function () {
        this.scrollToBottom();
    };
    LogMonitorComponent.prototype.scrollToBottom = function () {
        this.container.nativeElement.scrollTop = this.container.nativeElement.scrollHeight;
    };
    LogMonitorComponent.ctorParameters = function () { return [
        { type: NgZone }
    ]; };
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
    return LogMonitorComponent;
}());
export { LogMonitorComponent };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibG9nLW1vbml0b3IuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vbmd4LWxvZy1tb25pdG9yLyIsInNvdXJjZXMiOlsibGliL2xvZy1tb25pdG9yLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUEsT0FBTyxFQUNILGFBQWEsRUFDYix1QkFBdUIsRUFDdkIsU0FBUyxFQUNULFVBQVUsRUFDVixLQUFLLEVBQUUsTUFBTSxFQUNiLFNBQVMsRUFDVCxTQUFTLEVBQ1QsTUFBTSxFQUNOLGFBQWEsRUFDYixTQUFTLEVBQ1osTUFBTSxlQUFlLENBQUM7QUFFdkIsT0FBTyxFQUFFLG1CQUFtQixFQUFFLE1BQU0sOEJBQThCLENBQUM7QUFDbkUsT0FBTyxFQUFFLFVBQVUsRUFBZ0IsTUFBTSxNQUFNLENBQUM7QUFDaEQsT0FBTyxFQUFFLEtBQUssRUFBRSxNQUFNLGdCQUFnQixDQUFDO0FBUXZDO0lBZ0JJLDZCQUFvQixJQUFZO1FBQVosU0FBSSxHQUFKLElBQUksQ0FBUTtRQWR2QixVQUFLLEdBQUcsR0FBRyxDQUFDO1FBR1osWUFBTyxHQUFpQixFQUFFLENBQUM7UUFDM0IsVUFBSyxHQUFxQixNQUFNLENBQUM7UUFDakMsVUFBSyxHQUFHLElBQUksQ0FBQztRQUNiLGdCQUFXLEdBQUcsZUFBZSxDQUFDO1FBQzlCLGFBQVEsR0FBRyxJQUFJLENBQUM7UUFHekIsYUFBUSxHQUFpQixFQUFFLENBQUM7SUFJUSxDQUFDO0lBRXJDLHNDQUFRLEdBQVI7UUFBQSxpQkFXQztRQVZHLElBQUksSUFBSSxDQUFDLFNBQVMsRUFBRTtZQUNoQixJQUFJLENBQUMsS0FBSyxHQUFHLElBQUksQ0FBQyxTQUFTO2lCQUN0QixJQUFJLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQztpQkFDdkIsU0FBUyxDQUFDLFVBQUEsQ0FBQztnQkFDUixLQUFJLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQyxtQkFBbUIsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDO2dCQUMzQyxLQUFJLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQztvQkFDVixVQUFVLENBQUMsY0FBTSxPQUFBLEtBQUksQ0FBQyxjQUFjLEVBQUUsRUFBckIsQ0FBcUIsQ0FBQyxDQUFDO2dCQUM1QyxDQUFDLENBQUMsQ0FBQztZQUNQLENBQUMsQ0FBQyxDQUFDO1NBQ1Y7SUFDTCxDQUFDO0lBRUQseUNBQVcsR0FBWDtRQUNJLElBQUksSUFBSSxDQUFDLEtBQUssRUFBRTtZQUNaLElBQUksQ0FBQyxLQUFLLENBQUMsV0FBVyxFQUFFLENBQUM7U0FDNUI7SUFDTCxDQUFDO0lBRUQseUNBQVcsR0FBWCxVQUFZLE9BQXNCO1FBQzlCLElBQUksT0FBTyxDQUFDLFNBQVMsQ0FBQyxFQUFFO1lBQ3BCLElBQUksQ0FBQyxRQUFRLEdBQUcsT0FBTyxDQUFDLFNBQVMsQ0FBQyxDQUFDLFlBQVksQ0FBQyxHQUFHLENBQUMsbUJBQW1CLENBQUMsQ0FBQztTQUM1RTtJQUNMLENBQUM7SUFFRCw2Q0FBZSxHQUFmO1FBQ0ksSUFBSSxDQUFDLGNBQWMsRUFBRSxDQUFDO0lBQzFCLENBQUM7SUFFTyw0Q0FBYyxHQUF0QjtRQUNJLElBQUksQ0FBQyxTQUFTLENBQUMsYUFBYSxDQUFDLFNBQVMsR0FBRyxJQUFJLENBQUMsU0FBUyxDQUFDLGFBQWEsQ0FBQyxZQUFZLENBQUM7SUFDdkYsQ0FBQzs7Z0JBakN5QixNQUFNOztJQWR2QjtRQUFSLEtBQUssRUFBRTs7c0RBQWE7SUFDWjtRQUFSLEtBQUssRUFBRTs7c0RBQU87SUFDTjtRQUFSLEtBQUssRUFBRTtrQ0FBWSxVQUFVOzBEQUFhO0lBQ2xDO1FBQVIsS0FBSyxFQUFFOzt3REFBNEI7SUFDM0I7UUFBUixLQUFLLEVBQUU7O3NEQUFrQztJQUNqQztRQUFSLEtBQUssRUFBRTs7c0RBQWM7SUFDYjtRQUFSLEtBQUssRUFBRTs7NERBQStCO0lBQzlCO1FBQVIsS0FBSyxFQUFFOzt5REFBaUI7SUFDRDtRQUF2QixTQUFTLENBQUMsV0FBVyxDQUFDO2tDQUFZLFVBQVU7MERBQUM7SUFWckMsbUJBQW1CO1FBTi9CLFNBQVMsQ0FBQztZQUNQLFFBQVEsRUFBRSxhQUFhO1lBQ3ZCLGt6QkFBMkM7WUFFM0MsZUFBZSxFQUFFLHVCQUF1QixDQUFDLE1BQU07O1NBQ2xELENBQUM7eUNBaUI0QixNQUFNO09BaEJ2QixtQkFBbUIsQ0FtRC9CO0lBQUQsMEJBQUM7Q0FBQSxBQW5ERCxJQW1EQztTQW5EWSxtQkFBbUIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge1xuICAgIEFmdGVyVmlld0luaXQsXG4gICAgQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3ksXG4gICAgQ29tcG9uZW50LFxuICAgIEVsZW1lbnRSZWYsXG4gICAgSW5wdXQsIE5nWm9uZSxcbiAgICBPbkNoYW5nZXMsXG4gICAgT25EZXN0cm95LFxuICAgIE9uSW5pdCxcbiAgICBTaW1wbGVDaGFuZ2VzLFxuICAgIFZpZXdDaGlsZFxufSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IExvZ01lc3NhZ2UgfSBmcm9tICcuL21vZGVscy9sb2ctbWVzc2FnZS5tb2RlbCc7XG5pbXBvcnQgeyBub3JtYWxpemVMb2dNZXNzYWdlIH0gZnJvbSAnLi9oZWxwZXJzL2xvZy1tZXNzYWdlLmhlbHBlcic7XG5pbXBvcnQgeyBPYnNlcnZhYmxlLCBTdWJzY3JpcHRpb24gfSBmcm9tICdyeGpzJztcbmltcG9ydCB7IGRlbGF5IH0gZnJvbSAncnhqcy9vcGVyYXRvcnMnO1xuXG5AQ29tcG9uZW50KHtcbiAgICBzZWxlY3RvcjogJ2xvZy1tb25pdG9yJyxcbiAgICB0ZW1wbGF0ZVVybDogJy4vbG9nLW1vbml0b3IuY29tcG9uZW50Lmh0bWwnLFxuICAgIHN0eWxlVXJsczogWycuL2xvZy1tb25pdG9yLmNvbXBvbmVudC5zY3NzJ10sXG4gICAgY2hhbmdlRGV0ZWN0aW9uOiBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneS5PblB1c2hcbn0pXG5leHBvcnQgY2xhc3MgTG9nTW9uaXRvckNvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCwgT25EZXN0cm95LCBPbkNoYW5nZXMsIEFmdGVyVmlld0luaXQge1xuXG4gICAgQElucHV0KCkgZGVsYXkgPSA1MDA7XG4gICAgQElucHV0KCkgdGl0bGU7XG4gICAgQElucHV0KCkgbG9nU3RyZWFtOiBPYnNlcnZhYmxlPExvZ01lc3NhZ2U+O1xuICAgIEBJbnB1dCgpIGhpc3Rvcnk6IExvZ01lc3NhZ2VbXSA9IFtdO1xuICAgIEBJbnB1dCgpIHRoZW1lOiAnZGFyaycgfCAnbGlnaHQnID0gJ2RhcmsnO1xuICAgIEBJbnB1dCgpIGljb25zID0gdHJ1ZTtcbiAgICBASW5wdXQoKSBjdXN0b21DbGFzcyA9ICdsb2ctY29udGFpbmVyJztcbiAgICBASW5wdXQoKSBhbmltYXRlZCA9IHRydWU7XG4gICAgQFZpZXdDaGlsZCgnY29udGFpbmVyJykgY29udGFpbmVyOiBFbGVtZW50UmVmO1xuXG4gICAgX2hpc3Rvcnk6IExvZ01lc3NhZ2VbXSA9IFtdO1xuXG4gICAgcHJpdmF0ZSBfc3VicjogU3Vic2NyaXB0aW9uO1xuXG4gICAgY29uc3RydWN0b3IocHJpdmF0ZSB6b25lOiBOZ1pvbmUpIHsgfVxuXG4gICAgbmdPbkluaXQoKSB7XG4gICAgICAgIGlmICh0aGlzLmxvZ1N0cmVhbSkge1xuICAgICAgICAgICAgdGhpcy5fc3ViciA9IHRoaXMubG9nU3RyZWFtXG4gICAgICAgICAgICAgICAgLnBpcGUoZGVsYXkodGhpcy5kZWxheSkpXG4gICAgICAgICAgICAgICAgLnN1YnNjcmliZShhID0+IHtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5faGlzdG9yeS5wdXNoKG5vcm1hbGl6ZUxvZ01lc3NhZ2UoYSkpO1xuICAgICAgICAgICAgICAgICAgICB0aGlzLnpvbmUucnVuKCgpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHNldFRpbWVvdXQoKCkgPT4gdGhpcy5zY3JvbGxUb0JvdHRvbSgpKTtcbiAgICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBuZ09uRGVzdHJveSgpIHtcbiAgICAgICAgaWYgKHRoaXMuX3N1YnIpIHtcbiAgICAgICAgICAgIHRoaXMuX3N1YnIudW5zdWJzY3JpYmUoKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIG5nT25DaGFuZ2VzKGNoYW5nZXM6IFNpbXBsZUNoYW5nZXMpIHtcbiAgICAgICAgaWYgKGNoYW5nZXNbJ2hpc3RvcnknXSkge1xuICAgICAgICAgICAgdGhpcy5faGlzdG9yeSA9IGNoYW5nZXNbJ2hpc3RvcnknXS5jdXJyZW50VmFsdWUubWFwKG5vcm1hbGl6ZUxvZ01lc3NhZ2UpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgbmdBZnRlclZpZXdJbml0KCkge1xuICAgICAgICB0aGlzLnNjcm9sbFRvQm90dG9tKCk7XG4gICAgfVxuXG4gICAgcHJpdmF0ZSBzY3JvbGxUb0JvdHRvbSgpIHtcbiAgICAgICAgdGhpcy5jb250YWluZXIubmF0aXZlRWxlbWVudC5zY3JvbGxUb3AgPSB0aGlzLmNvbnRhaW5lci5uYXRpdmVFbGVtZW50LnNjcm9sbEhlaWdodDtcbiAgICB9XG5cbn1cbiJdfQ==