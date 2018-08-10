import { NgModule } from "@angular/core";
import { LoginService } from "./services/login.service";
import { AuthGuard } from "./services/auth-guard.service";
import { LoginComponent } from "./login-component/login-component.component";
import { FormsModule } from '@angular/forms';
import { InMemoryLoginDataService } from "./login-data/in-memory-login-data-service";


@NgModule({
    declarations:[LoginComponent],
    imports:[FormsModule],
    providers:[LoginService, AuthGuard, InMemoryLoginDataService]
})

export class SecurityModule {

}