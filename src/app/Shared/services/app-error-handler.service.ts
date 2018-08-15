import { Injectable, ErrorHandler } from '@angular/core';
import { LoggingService } from './logging.service';
import { HttpErrorResponse } from '@angular/common/http';

@Injectable()
export class AppErrorHandlerService implements ErrorHandler {
    
    constructor(private loggingService: LoggingService){}
    
    handleError(error: Error | HttpErrorResponse){

        let errorMessage='';
        if (error instanceof HttpErrorResponse) {
            // Server or connection error happened
            if (!navigator.onLine) {
              // Handle offline error
            } else {
              // Handle Http Error (error.status === 403, 404...)
            }
         } else {

           // Handle Client Error (Angular Error, ReferenceError...) 
           errorMessage = error.message;    
         }

        console.log(`Error occured in application: ${errorMessage}`);
        this.loggingService.add(`Error occured in application: ${errorMessage}`);
    }
}