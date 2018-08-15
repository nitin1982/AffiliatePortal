import { Injectable } from '@angular/core';
import { HttpErrorResponse } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { LoggingService } from './logging.service';

export type HandleError = <T>(operation?: string, result?: T) => (error: HttpErrorResponse) => Observable<T>;

@Injectable()
export class HttpErrorHandler {

  constructor(private loggingService: LoggingService) { }

  createHandleError = (serviceName = '') => <T>(operation = 'operation', result = {} as T) => this.handleError(serviceName, operation, result);

  handleError<T>(serviceName = '', operation = 'operation', result = {} as T) {

    return (error: HttpErrorResponse): Observable<T> => {
      console.error(error);
      let message = '';
      if (error.error instanceof ErrorEvent) {
        message = error.error.message;
      } else {
        if (error.status == 0) {
          message = `No valid response from Server. Please check network.`;
        }
        else {
          message = `server returned code ${error.status} with body "${error.error}"`;
        }
      }

      this.loggingService.add(`${serviceName}: ${operation} failed: ${message}`);
      return of(result);
    };
  }
}