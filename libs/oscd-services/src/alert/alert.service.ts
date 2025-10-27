import {
  type InfoEntry, type InfoEntryKind,
  type LogDetail,
  type LogEntryType,
  type LogEvent,
  newLogEvent
} from '@oscd-transnet-plugins/oscd-event-api';

export class OscdAlertService {

  constructor(private host: HTMLElement) {
  }

  public info(title: string, message?: string): void {
    this.dispatchLogEvent('info', title, message);
  }

  public warning(title: string, message?: string): void {
    this.dispatchLogEvent('warning', title, message);
  }

  public error(title: string, message?: string): void {
    this.dispatchLogEvent('error', title, message);
  }

  private dispatchLogEvent(level: InfoEntryKind, title: string, message?: string): void {
    const logDetail: LogDetail = {
      kind: level,
      title,
      message,
    }

    const logEvent: LogEvent = newLogEvent(logDetail);
    this.host.dispatchEvent(logEvent);
  }
}
