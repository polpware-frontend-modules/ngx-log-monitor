import { AfterViewInit, ChangeDetectorRef, ElementRef, NgZone, OnChanges, OnDestroy, OnInit, SimpleChanges } from '@angular/core';
import { LogMessage } from './models/log-message.model';
import { Observable } from 'rxjs';
import * as i0 from "@angular/core";
export declare class LogMonitorComponent implements OnInit, OnDestroy, OnChanges, AfterViewInit {
    private zone;
    private cd;
    delay: number;
    title: any;
    logStream: Observable<LogMessage>;
    history: LogMessage[];
    theme: 'dark' | 'light';
    icons: boolean;
    customClass: string;
    animated: boolean;
    container: ElementRef;
    _history: LogMessage[];
    private _subr;
    constructor(zone: NgZone, cd: ChangeDetectorRef);
    ngOnInit(): void;
    ngOnDestroy(): void;
    ngOnChanges(changes: SimpleChanges): void;
    ngAfterViewInit(): void;
    private scrollToBottom;
    static ɵfac: i0.ɵɵFactoryDeclaration<LogMonitorComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<LogMonitorComponent, "log-monitor", never, { "delay": { "alias": "delay"; "required": false; }; "title": { "alias": "title"; "required": false; }; "logStream": { "alias": "logStream"; "required": false; }; "history": { "alias": "history"; "required": false; }; "theme": { "alias": "theme"; "required": false; }; "icons": { "alias": "icons"; "required": false; }; "customClass": { "alias": "customClass"; "required": false; }; "animated": { "alias": "animated"; "required": false; }; }, {}, never, never, false, never>;
}
//# sourceMappingURL=log-monitor.component.d.ts.map