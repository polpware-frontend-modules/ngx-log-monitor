import { AfterViewInit, ElementRef, NgZone, OnChanges, OnDestroy, OnInit, SimpleChanges } from '@angular/core';
import { LogMessage } from './models/log-message.model';
import { Observable } from 'rxjs';
export declare class LogMonitorComponent implements OnInit, OnDestroy, OnChanges, AfterViewInit {
    private zone;
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
    constructor(zone: NgZone);
    ngOnInit(): void;
    ngOnDestroy(): void;
    ngOnChanges(changes: SimpleChanges): void;
    ngAfterViewInit(): void;
    private scrollToBottom;
}
