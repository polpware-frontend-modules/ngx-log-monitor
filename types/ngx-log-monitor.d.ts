import * as i0 from '@angular/core';
import { OnInit, OnDestroy, OnChanges, AfterViewInit, ElementRef, NgZone, ChangeDetectorRef, SimpleChanges } from '@angular/core';
import { Observable } from 'rxjs';
import * as i2 from '@angular/common';

interface LogMessage {
    type?: 'LOG' | 'INFO' | 'WARN' | 'ERR' | 'SUCCESS';
    timestamp?: string;
    message: string;
}

declare class LogMonitorComponent implements OnInit, OnDestroy, OnChanges, AfterViewInit {
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

declare class LogMonitorModule {
    static ɵfac: i0.ɵɵFactoryDeclaration<LogMonitorModule, never>;
    static ɵmod: i0.ɵɵNgModuleDeclaration<LogMonitorModule, [typeof LogMonitorComponent], [typeof i2.CommonModule], [typeof LogMonitorComponent]>;
    static ɵinj: i0.ɵɵInjectorDeclaration<LogMonitorModule>;
}

export { LogMonitorComponent, LogMonitorModule };
export type { LogMessage };
//# sourceMappingURL=ngx-log-monitor.d.ts.map
