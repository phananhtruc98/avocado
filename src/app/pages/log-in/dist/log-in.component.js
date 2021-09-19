"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.LogInComponent = void 0;
var core_1 = require("@angular/core");
var forms_1 = require("@angular/forms");
var login_view_model_model_1 = require("src/app/models/user/login-view-model.model");
var LogInComponent = /** @class */ (function () {
    function LogInComponent() {
    }
    LogInComponent.prototype.ngOnInit = function () {
        this.loginViewModel = new login_view_model_model_1.LoginViewModel('', '');
        this.loginForm = new forms_1.FormGroup({
            username: new forms_1.FormControl(null, [
                forms_1.Validators.required,
                forms_1.Validators.minLength(10),
                forms_1.Validators.email
            ]),
            password: new forms_1.FormControl(null, [
                forms_1.Validators.required,
                forms_1.Validators.pattern(/^(?=.{8,}$)(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*\W).*$/),
            ])
        });
    };
    LogInComponent.prototype.onSubmit = function () {
        if (this.loginForm.valid) {
            this.loginViewModel = new login_view_model_model_1.LoginViewModel(this.loginForm.get('username').value, this.loginForm.get('password').value);
            alert('Login successfully!');
        }
    };
    LogInComponent = __decorate([
        core_1.Component({
            selector: 'app-log-in',
            templateUrl: './log-in.component.html',
            styleUrls: ['./log-in.component.scss']
        })
    ], LogInComponent);
    return LogInComponent;
}());
exports.LogInComponent = LogInComponent;
