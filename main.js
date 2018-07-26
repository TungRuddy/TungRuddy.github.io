(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
/*!**********************************************************!*\
  !*** ./src/$$_lazy_route_resource lazy namespace object ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error('Cannot find module "' + req + '".');
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/Guard/user.guard.ts":
/*!*************************************!*\
  !*** ./src/app/Guard/user.guard.ts ***!
  \*************************************/
/*! exports provided: UserGuard */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserGuard", function() { return UserGuard; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var UserGuard = /** @class */ (function () {
    function UserGuard(router) {
        this.router = router;
    }
    UserGuard.prototype.canActivate = function (next, state) {
        if (localStorage.getItem('CurrentUser')) {
            return true;
        }
        else {
            this.router.navigateByUrl('/signin');
            this.router.navigate(['/signin']);
            return false;
        }
    };
    UserGuard = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])(),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]])
    ], UserGuard);
    return UserGuard;
}());



/***/ }),

/***/ "./src/app/account/login/login.component.html":
/*!****************************************************!*\
  !*** ./src/app/account/login/login.component.html ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"form-box\">\r\n  <mat-progress-bar [mode]=\"loadingService.loading.value\"></mat-progress-bar>\r\n  <div class=\"head\">\r\n    <img src=\"http://i1150.photobucket.com/albums/o614/manhtung159/Alego/logo_zpsqm9ynzni.png\">\r\n  </div>\r\n  <mat-card id=\"login-form\">\r\n    <form (ngSubmit)=\"onSubmit()\" (keyup.enter)=\"onSubmit()\" [formGroup]=\"formLogin\" #f=\"ngForm\" novalidate>\r\n      <mat-form-field>\r\n        <input matInput placeholder=\"Email\" [errorStateMatcher]=\"matcher\" name=\"email\" formControlName=\"email\" required>\r\n        <mat-error *ngIf=\"formLogin.controls.email.hasError('email') && !formLogin.controls.email.hasError('required')\">\r\n          {{'enterEmail' | translate}}\r\n        </mat-error>\r\n        <mat-error *ngIf=\"formLogin.controls.email.hasError('required')\">\r\n          {{'emailNull' | translate}}\r\n          <strong>{{'null' | translate}}</strong>\r\n        </mat-error>\r\n      </mat-form-field>\r\n\r\n      <mat-form-field class=\"pass\">\r\n        <input matInput placeholder=\"{{'password' | translate}}\" autocomplete=\"new-password\" type=\"password\" name=\"CustPassword\" formControlName=\"password\" required>\r\n        <mat-error *ngIf=\"formLogin.controls.password.hasError('required')\">\r\n          {{'passwordNull' | translate}}\r\n          <strong>{{'null' | translate}}</strong>\r\n        </mat-error>\r\n      </mat-form-field>\r\n      <button *ngIf=\"loadingService.loading.value === 'determinate'\" class=\"sign\" type=\"submit\" mat-raised-button>{{'login' | translate}}</button>\r\n      <div class=\"inter\" *ngIf=\"loadingService.loading.value === 'determinate'\">\r\n        <div>\r\n          <p class=\"text-center\">Or</p>\r\n          <button type=\"button\" class=\"loginBtn loginBtn--facebook\">\r\n            {{'facebook' | translate}}\r\n          </button>\r\n\r\n          <button type=\"button\"  class=\"loginBtn loginBtn--google\" (click)=\"signInWithGoogle()\">\r\n            {{'google' | translate}}\r\n          </button>\r\n        </div>\r\n      </div>\r\n      <div fxLayout=\"row\" fxLayoutGap=\"20px\" class=\"wrapFooterLogin\" *ngIf=\"loadingService.loading.value === 'determinate'\">\r\n        <a [routerLink]=\"['/signup']\" fxFlex=\"50\">\r\n          <u>{{'registration' | translate}}</u>\r\n        </a>\r\n        <a [routerLink]=\"['/resetPassword']\" fxFlex=\"50\">\r\n          <u id=\"dkNew\">{{'forgotPassword' | translate}}</u>\r\n        </a>\r\n      </div>\r\n    </form>\r\n  </mat-card>\r\n</div>"

/***/ }),

/***/ "./src/app/account/login/login.component.scss":
/*!****************************************************!*\
  !*** ./src/app/account/login/login.component.scss ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".form-box {\n  background: #fff;\n  margin: 24px auto;\n  max-width: 500px;\n  box-shadow: 0 3px 6px 0px rgba(0, 0, 0, 0.16), 0 3px 6px 0px rgba(0, 0, 0, 0.23); }\n\nform#login-form {\n  overflow: hidden;\n  position: relative;\n  padding: 40px; }\n\n.head {\n  color: #fff;\n  font-size: 34px;\n  font-weight: normal;\n  padding: 24px 0;\n  text-align: center;\n  background: #FFC000; }\n\nmat-form-field {\n  width: 100%; }\n\n.pass {\n  padding-top: 15px; }\n\n.inter button {\n  width: 100%;\n  border-radius: 0;\n  height: 37px; }\n\n/* Shared */\n\n.loginBtn {\n  box-sizing: border-box;\n  position: relative;\n  /* width: 13em;  - apply for fixed size */\n  margin: 0.2em;\n  padding: 0 15px 0 46px;\n  border: none;\n  text-align: left;\n  line-height: 34px;\n  white-space: nowrap;\n  border-radius: 0.2em;\n  font-size: 16px;\n  color: #FFF; }\n\n.loginBtn:before {\n  content: \"\";\n  box-sizing: border-box;\n  position: absolute;\n  top: 0;\n  left: 0;\n  width: 34px;\n  height: 100%; }\n\n.loginBtn:focus {\n  outline: none; }\n\n.loginBtn:active {\n  box-shadow: inset 0 0 0 32px rgba(0, 0, 0, 0.1); }\n\n/* Facebook */\n\n.loginBtn--facebook {\n  background-color: #4C69BA;\n  background-image: linear-gradient(#4C69BA, #3B55A0);\n  font-family: \"Helvetica neue\", Helvetica Neue, Helvetica, Arial, sans-serif;\n  text-shadow: 0 -1px 0 #354C8C; }\n\n.loginBtn--facebook:before {\n  border-right: #364e92 1px solid;\n  background: url(\"https://s3-us-west-2.amazonaws.com/s.cdpn.io/14082/icon_facebook.png\") 6px 6px no-repeat; }\n\n.loginBtn--facebook:hover,\n.loginBtn--facebook:focus {\n  background-color: #5B7BD5;\n  background-image: linear-gradient(#5B7BD5, #4864B1); }\n\n/* Google */\n\n.loginBtn--google {\n  font-family: \"Roboto\", Roboto, arial, sans-serif;\n  background: #DD4B39; }\n\n.loginBtn--google:before {\n  border-right: #BB3F30 1px solid;\n  background: url(\"https://s3-us-west-2.amazonaws.com/s.cdpn.io/14082/icon_google.png\") 6px 6px no-repeat; }\n\n.loginBtn--google:hover,\n.loginBtn--google:focus {\n  background: #E74B37; }\n\n.sign {\n  width: 100%;\n  height: 45px;\n  background-color: #FFC000;\n  margin: 20px 0; }\n\n.wrapFooterLogin {\n  margin-top: 15px; }\n\n#dkNew {\n  float: right; }\n\n@media (max-width: 720px) {\n  .form-box {\n    margin: 0; } }\n"

/***/ }),

/***/ "./src/app/account/login/login.component.ts":
/*!**************************************************!*\
  !*** ./src/app/account/login/login.component.ts ***!
  \**************************************************/
/*! exports provided: MyErrorStateMatcher, LoginComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MyErrorStateMatcher", function() { return MyErrorStateMatcher; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginComponent", function() { return LoginComponent; });
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ngx-toastr */ "./node_modules/ngx-toastr/toastr.es5.js");
/* harmony import */ var _services_customer_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../services/customer.service */ "./src/app/services/customer.service.ts");
/* harmony import */ var _services_loading_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../services/loading.service */ "./src/app/services/loading.service.ts");
/* harmony import */ var angularx_social_login__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! angularx-social-login */ "./node_modules/angularx-social-login/angularx-social-login.es5.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};








var MyErrorStateMatcher = /** @class */ (function () {
    function MyErrorStateMatcher() {
    }
    MyErrorStateMatcher.prototype.isErrorState = function (control, form) {
        var isSubmitted = form && form.submitted;
        return !!(control && control.invalid && (control.dirty || control.touched || isSubmitted));
    };
    return MyErrorStateMatcher;
}());

var LoginComponent = /** @class */ (function () {
    // Hai private authService: AuthService
    function LoginComponent(customerService, authService, router, toastr, loadingService) {
        this.customerService = customerService;
        this.authService = authService;
        this.router = router;
        this.toastr = toastr;
        this.loadingService = loadingService;
        // Hai
        this.matcher = new MyErrorStateMatcher();
        this.loadingService.stop();
    }
    LoginComponent.prototype.ngOnInit = function () {
        if (JSON.parse(localStorage.getItem('CurrentUser'))) {
            this.router.navigateByUrl('/app');
        }
        this.formLogin = new _angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormGroup"]({
            email: new _angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_0__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_0__["Validators"].email]),
            password: new _angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_0__["Validators"].required])
        });
    };
    LoginComponent.prototype.signInWithGoogle = function () {
        var _this = this;
        this.loadingService.start();
        setTimeout(function () {
            _this.authService.authState.subscribe(function (user) {
                if (user) {
                    console.log(user);
                    _this.customerService.customerLoginWithGoogle(user).subscribe(function (result) {
                        if (result.message === true) {
                            localStorage.setItem('CurrentUser', JSON.stringify(result.data[0]));
                            _this.loadingService.stop();
                            _this.router.navigate(['/app']);
                        }
                        else {
                            _this.loadingService.stop();
                            _this.toastr.error('Login False!', 'Tài khoản đăng nhập không chính xác...', {
                                progressBar: true,
                                positionClass: 'toast-bottom-right',
                                timeOut: 2000
                            });
                        }
                    });
                }
                else {
                    _this.authService.signIn(angularx_social_login__WEBPACK_IMPORTED_MODULE_6__["GoogleLoginProvider"].PROVIDER_ID);
                }
            });
        }, 500);
    };
    LoginComponent.prototype.signOut = function () {
        this.authService.signOut();
    };
    LoginComponent.prototype.onSubmit = function () {
        var _this = this;
        this.loadingService.start();
        console.log(this.formLogin);
        setTimeout(function () {
            if (_this.formLogin.valid) {
                _this.customerService.customerLogin(_this.formLogin.value).subscribe(function (result) {
                    if (result.message === true) {
                        localStorage.setItem('CurrentUser', JSON.stringify(result.data[0]));
                        _this.loadingService.stop();
                        _this.router.navigate(['/app']);
                    }
                    else {
                        _this.loadingService.stop();
                        _this.toastr.error('Login False!', 'Tài khoản đăng nhập không chính xác...', {
                            progressBar: true,
                            positionClass: 'toast-bottom-right',
                            timeOut: 2000
                        });
                    }
                });
            }
            else {
                _this.loadingService.stop();
            }
        }, 1000);
    };
    LoginComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-login',
            template: __webpack_require__(/*! ./login.component.html */ "./src/app/account/login/login.component.html"),
            styles: [__webpack_require__(/*! ./login.component.scss */ "./src/app/account/login/login.component.scss")]
        }),
        __metadata("design:paramtypes", [_services_customer_service__WEBPACK_IMPORTED_MODULE_4__["CustomerService"],
            angularx_social_login__WEBPACK_IMPORTED_MODULE_6__["AuthService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"],
            ngx_toastr__WEBPACK_IMPORTED_MODULE_3__["ToastrService"],
            _services_loading_service__WEBPACK_IMPORTED_MODULE_5__["LoadingService"]])
    ], LoginComponent);
    return LoginComponent;
}());



/***/ }),

/***/ "./src/app/account/registration/registration.component.html":
/*!******************************************************************!*\
  !*** ./src/app/account/registration/registration.component.html ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"form-box\">\r\n    <mat-progress-bar [mode]=\"loadingService.loading.value\"></mat-progress-bar>\r\n    <div class=\"head\">\r\n        <img src=\"http://i1150.photobucket.com/albums/o614/manhtung159/Alego/logo_zpsqm9ynzni.png\">\r\n    </div>\r\n    <mat-card id=\"login-form\">\r\n        <form (ngSubmit)=\"onSubmit()\" (keyup.enter)=\"onSubmit()\" [formGroup]=\"form\" #f=\"ngForm\" novalidate>\r\n            <mat-form-field>\r\n                <input matInput placeholder=\"Email\" formControlName=\"email\" [errorStateMatcher]=\"matcher\" name=\"email\">\r\n                <mat-error *ngIf=\"form.controls.email.hasError('email') && !form.controls.email.hasError('required')\">\r\n                    {{'enterEmail' | translate}}\r\n                </mat-error>\r\n                <mat-error *ngIf=\"form.controls.email.hasError('required')\">\r\n                    {{'emailNull' | translate}}\r\n                    <strong>{{'null' | translate}}</strong>\r\n                </mat-error>\r\n            </mat-form-field>\r\n\r\n            <mat-form-field>\r\n                <input matInput placeholder=\"{{'password' | translate}}\" autocomplete=\"new-password\" type=\"password\" name=\"CustPassword\" formControlName=\"password\" required>\r\n                <mat-error *ngIf=\"form.controls.password.hasError('required')\">\r\n                    {{'passwordNull' | translate}}\r\n                    <strong>{{'null' | translate}}</strong>\r\n                </mat-error>\r\n            </mat-form-field>\r\n\r\n            <mat-form-field>\r\n                <input matInput placeholder=\"{{'name' | translate}}\" formControlName=\"name\" name=\"name\" required>\r\n            </mat-form-field>\r\n\r\n            <mat-form-field>\r\n                <textarea matInput placeholder=\"{{'Address' | translate}}\" matTextareaAutosize matAutosizeMinRows=\"2\" matAutosizeMaxRows=\"5\"\r\n                    formControlName=\"address\" name=\"address\" required></textarea>\r\n            </mat-form-field>\r\n\r\n            <mat-form-field>\r\n                <input matInput placeholder=\"{{'phone' | translate}}\" formControlName=\"phone\" name=\"phone\" required>\r\n            </mat-form-field>\r\n            <mat-form-field>\r\n                <mat-select placeholder=\"{{'languages' | translate}}\" formControlName=\"language\" required>\r\n                    <mat-option value=\"vi\">{{'vn' | translate}}</mat-option>\r\n                    <mat-option value=\"en\">{{'eng' | translate}}</mat-option>\r\n                </mat-select>\r\n            </mat-form-field>\r\n            <div>\r\n                <mat-radio-group fxFlex=\"30\" formControlName=\"gender\">\r\n                    <mat-radio-button value=\"1\">{{'male' | translate}}</mat-radio-button>\r\n                    <mat-radio-button value=\"0\" class=\"marginleft\">{{'female' | translate}}</mat-radio-button>\r\n                </mat-radio-group>\r\n                <mat-form-field fxFlex=\"60\" class=\"marginleft\">\r\n                    <input matInput [matDatepicker]=\"picker\" placeholder=\"{{'birdthday' | translate}}\" formControlName=\"birthday\" name=\"birthday\">\r\n                    <mat-datepicker-toggle matSuffix [for]=\"picker\"></mat-datepicker-toggle>\r\n                    <mat-datepicker #picker></mat-datepicker>\r\n                </mat-form-field>\r\n            </div>\r\n            <mat-form-field>\r\n                <mat-select placeholder=\"{{'area' | translate}}\" formControlName=\"area\" required>\r\n                    <mat-option value=\"HCM\">{{'HCM' | translate}}</mat-option>\r\n                    <mat-option value=\"VT\">{{'VT' | translate}}</mat-option>\r\n                </mat-select>\r\n            </mat-form-field>\r\n            <button class=\"sign\" type=\"submit\" mat-raised-button color=\"primary\">{{'signUp' | translate}}</button>\r\n        </form>\r\n        <p class=\"text-center text\">Or</p>\r\n        <button type=\"button\" class=\"loginBtn loginBtn--google\" (click)=\"signInWithGoogle()\">\r\n            {{'google' | translate}}\r\n        </button>\r\n    </mat-card>\r\n</div>"

/***/ }),

/***/ "./src/app/account/registration/registration.component.scss":
/*!******************************************************************!*\
  !*** ./src/app/account/registration/registration.component.scss ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".form-box {\n  background: #fff;\n  margin: 30px auto;\n  max-width: 500px;\n  box-shadow: 0 3px 6px 0px rgba(0, 0, 0, 0.16), 0 3px 6px 0px rgba(0, 0, 0, 0.23); }\n\nform#login-form {\n  overflow: hidden;\n  position: relative;\n  padding: 40px; }\n\n.head {\n  font-weight: normal;\n  padding: 24px 0;\n  text-align: center;\n  background: #FFC000; }\n\nmat-form-field {\n  width: 100%; }\n\n.marginleft {\n  margin-left: 10px; }\n\n.sign {\n  width: 100%;\n  height: 40px;\n  background: #FFC000; }\n\n/* Shared */\n\n.loginBtn {\n  box-sizing: border-box;\n  position: relative;\n  /* width: 13em;  - apply for fixed size */\n  margin: 0.2em;\n  border: none;\n  text-align: center;\n  line-height: 34px;\n  white-space: nowrap;\n  border-radius: 0.2em;\n  font-size: 16px;\n  color: #FFF;\n  width: 100%; }\n\n.text {\n  margin: 10px; }\n\n.loginBtn:before {\n  content: \"\";\n  box-sizing: border-box;\n  position: absolute;\n  top: 0;\n  left: 0;\n  width: 34px;\n  height: 100%; }\n\n.loginBtn:focus {\n  outline: none; }\n\n.loginBtn:active {\n  box-shadow: inset 0 0 0 32px rgba(0, 0, 0, 0.1); }\n\n/* Google */\n\n.loginBtn--google {\n  font-family: \"Roboto\", Roboto, arial, sans-serif;\n  background: #DD4B39; }\n\n.loginBtn--google:before {\n  border-right: #BB3F30 1px solid;\n  background: url(\"https://s3-us-west-2.amazonaws.com/s.cdpn.io/14082/icon_google.png\") 6px 6px no-repeat; }\n\n.loginBtn--google:hover,\n.loginBtn--google:focus {\n  background: #E74B37; }\n\n@media (max-width: 720px) {\n  .form-box {\n    max-width: 100%;\n    margin: 0; } }\n"

/***/ }),

/***/ "./src/app/account/registration/registration.component.ts":
/*!****************************************************************!*\
  !*** ./src/app/account/registration/registration.component.ts ***!
  \****************************************************************/
/*! exports provided: MyErrorStateMatcher, RegistrationComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MyErrorStateMatcher", function() { return MyErrorStateMatcher; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RegistrationComponent", function() { return RegistrationComponent; });
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ngx-toastr */ "./node_modules/ngx-toastr/toastr.es5.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _services_customer_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../services/customer.service */ "./src/app/services/customer.service.ts");
/* harmony import */ var _services_loading_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../services/loading.service */ "./src/app/services/loading.service.ts");
/* harmony import */ var _node_modules_angularx_social_login__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../../node_modules/angularx-social-login */ "./node_modules/angularx-social-login/angularx-social-login.es5.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var MyErrorStateMatcher = /** @class */ (function () {
    function MyErrorStateMatcher() {
    }
    MyErrorStateMatcher.prototype.isErrorState = function (control, form) {
        var isSubmitted = form && form.submitted;
        return !!(control && control.invalid && (control.dirty || control.touched || isSubmitted));
    };
    return MyErrorStateMatcher;
}());

var RegistrationComponent = /** @class */ (function () {
    function RegistrationComponent(customerService, toastr, loadingService, authService, router) {
        this.customerService = customerService;
        this.toastr = toastr;
        this.loadingService = loadingService;
        this.authService = authService;
        this.router = router;
        this.hide = true;
        this.matcher = new MyErrorStateMatcher();
    }
    RegistrationComponent.prototype.ngOnInit = function () {
        this.form = new _angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormGroup"]({
            email: new _angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_0__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_0__["Validators"].email]),
            password: new _angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_0__["Validators"].required]),
            name: new _angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_0__["Validators"].required]),
            birthday: new _angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormControl"](''),
            gender: new _angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormControl"]('1', [_angular_forms__WEBPACK_IMPORTED_MODULE_0__["Validators"].required]),
            area: new _angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormControl"]('HCM', [_angular_forms__WEBPACK_IMPORTED_MODULE_0__["Validators"].required]),
            language: new _angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormControl"]('vi', [_angular_forms__WEBPACK_IMPORTED_MODULE_0__["Validators"].required]),
            avatar: new _angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormControl"]('http://i1150.photobucket.com/albums/o614/manhtung159/th_none-user_zpsz4mxlhzn.jpg'),
            address: new _angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_0__["Validators"].required]),
            phone: new _angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_0__["Validators"].required]),
        });
    };
    RegistrationComponent.prototype.onSubmit = function () {
        var _this = this;
        this.loadingService.start();
        console.log(this.form);
        setTimeout(function () {
            if (_this.form.valid) {
                _this.customerService.checkSignup({ email: _this.form.value.email }).subscribe(function (result) {
                    if (result.message === true) {
                        _this.toastr.error('Please try other email!', 'Email existed', {
                            progressBar: true,
                            positionClass: 'toast-bottom-right',
                            timeOut: 3000
                        });
                    }
                    else if (result.message === false) {
                        _this.customerService.customerRegister(_this.form.value).subscribe(function (data) {
                            if (data.message === 'Error') {
                                _this.toastr.error(data.message, 'Something went wrong please try again!', {
                                    progressBar: true,
                                    positionClass: 'toast-bottom-right',
                                    timeOut: 2000
                                });
                            }
                            else {
                                _this.toastr.success('', data.message, {
                                    progressBar: true,
                                    positionClass: 'toast-bottom-right',
                                    timeOut: 3000
                                });
                            }
                            _this.loadingService.stop();
                        });
                    }
                });
            }
            else {
                _this.loadingService.stop();
            }
        }, 1000);
    };
    RegistrationComponent.prototype.signInWithGoogle = function () {
        var _this = this;
        this.loadingService.start();
        setTimeout(function () {
            _this.authService.authState.subscribe(function (user) {
                if (user) {
                    console.log(user);
                    _this.customerService.customerLoginWithGoogle(user).subscribe(function (result) {
                        if (result.message === true) {
                            localStorage.setItem('CurrentUser', JSON.stringify(result.data[0]));
                            _this.loadingService.stop();
                            _this.router.navigate(['/app']);
                        }
                        else {
                            _this.loadingService.stop();
                            _this.toastr.error('Login False!', 'Tài khoản đăng nhập không chính xác...', {
                                progressBar: true,
                                positionClass: 'toast-bottom-right',
                                timeOut: 2000
                            });
                        }
                    });
                }
                else {
                    _this.authService.signIn(_node_modules_angularx_social_login__WEBPACK_IMPORTED_MODULE_6__["GoogleLoginProvider"].PROVIDER_ID);
                }
            });
        }, 500);
    };
    RegistrationComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-registration',
            template: __webpack_require__(/*! ./registration.component.html */ "./src/app/account/registration/registration.component.html"),
            styles: [__webpack_require__(/*! ./registration.component.scss */ "./src/app/account/registration/registration.component.scss")]
        }),
        __metadata("design:paramtypes", [_services_customer_service__WEBPACK_IMPORTED_MODULE_4__["CustomerService"],
            ngx_toastr__WEBPACK_IMPORTED_MODULE_2__["ToastrService"],
            _services_loading_service__WEBPACK_IMPORTED_MODULE_5__["LoadingService"],
            _node_modules_angularx_social_login__WEBPACK_IMPORTED_MODULE_6__["AuthService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]])
    ], RegistrationComponent);
    return RegistrationComponent;
}());



/***/ }),

/***/ "./src/app/account/resetPassword/resetPassword.component.html":
/*!********************************************************************!*\
  !*** ./src/app/account/resetPassword/resetPassword.component.html ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"form-box\">\r\n    <mat-progress-bar [mode]=\"loadingService.loading.value\"></mat-progress-bar>\r\n    <div class=\"head\">\r\n        <img src=\"http://i1150.photobucket.com/albums/o614/manhtung159/Alego/logo_zpsqm9ynzni.png\">\r\n    </div>\r\n    <mat-card id=\"login-form\">\r\n        <form (ngSubmit)=\"onSubmit()\" (keyup.enter)=\"onSubmit()\" [formGroup]=\"form\" #f=\"ngForm\" novalidate>\r\n            <mat-form-field>\r\n                <input matInput placeholder=\"Email\" formControlName=\"email\" [errorStateMatcher]=\"matcher\" name=\"email\">\r\n                <mat-error *ngIf=\"form.controls.email.hasError('email') && !form.controls.email.hasError('required')\">\r\n                    {{'enterEmail' | translate}}\r\n                </mat-error>\r\n                <mat-error *ngIf=\"form.controls.email.hasError('required')\">\r\n                    {{'emailNull' | translate}}\r\n                    <strong>{{'null' | translate}}</strong>\r\n                </mat-error>\r\n            </mat-form-field>\r\n            <button class=\"sign\" type=\"submit\" mat-raised-button color=\"primary\">{{'Send' | translate}}</button>\r\n        </form>\r\n    </mat-card>\r\n</div>"

/***/ }),

/***/ "./src/app/account/resetPassword/resetPassword.component.scss":
/*!********************************************************************!*\
  !*** ./src/app/account/resetPassword/resetPassword.component.scss ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".form-box {\n  background: #fff;\n  margin: 24px auto;\n  max-width: 500px;\n  box-shadow: 0 3px 6px 0px rgba(0, 0, 0, 0.16), 0 3px 6px 0px rgba(0, 0, 0, 0.23); }\n\nform#login-form {\n  overflow: hidden;\n  position: relative;\n  padding: 40px; }\n\n.head {\n  font-weight: normal;\n  padding: 24px 0;\n  text-align: center;\n  background: #FFC000; }\n\nmat-form-field {\n  width: 100%; }\n\n.sign {\n  width: 100%;\n  height: 40px;\n  background: #FFC000; }\n\n@media (max-width: 720px) {\n  .form-box {\n    max-width: 100%;\n    margin: 0; } }\n"

/***/ }),

/***/ "./src/app/account/resetPassword/resetPassword.component.ts":
/*!******************************************************************!*\
  !*** ./src/app/account/resetPassword/resetPassword.component.ts ***!
  \******************************************************************/
/*! exports provided: ResetPasswordComponent, MyErrorStateMatcher */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ResetPasswordComponent", function() { return ResetPasswordComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MyErrorStateMatcher", function() { return MyErrorStateMatcher; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _node_modules_ngx_toastr__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../node_modules/ngx-toastr */ "./node_modules/ngx-toastr/toastr.es5.js");
/* harmony import */ var _services_loading_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../services/loading.service */ "./src/app/services/loading.service.ts");
/* harmony import */ var _node_modules_angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../node_modules/@angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _services_customer_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../services/customer.service */ "./src/app/services/customer.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var ResetPasswordComponent = /** @class */ (function () {
    function ResetPasswordComponent(toastr, loadingService, customerService) {
        this.toastr = toastr;
        this.loadingService = loadingService;
        this.customerService = customerService;
        this.matcher = new MyErrorStateMatcher();
    }
    ResetPasswordComponent.prototype.ngOnInit = function () {
        this.form = new _node_modules_angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormGroup"]({
            email: new _node_modules_angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"]('', [_node_modules_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required, _node_modules_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].email]),
        });
    };
    ResetPasswordComponent.prototype.onSubmit = function () {
        var _this = this;
        this.loadingService.start();
        console.log(this.form);
        setTimeout(function () {
            if (_this.form.valid) {
                _this.customerService.reqResetPassword({ email: _this.form.value.email }).subscribe(function (result) {
                    if (result.message === false) {
                        _this.toastr.error('Send False!', 'Email này chưa được đăng ký...', {
                            progressBar: true,
                            positionClass: 'toast-bottom-right',
                            timeOut: 2000
                        });
                    }
                    else {
                        _this.toastr.success('Please check your email', result.message, {
                            progressBar: true,
                            positionClass: 'toast-bottom-right',
                            timeOut: 2000
                        });
                    }
                    _this.loadingService.stop();
                });
            }
            else {
                _this.loadingService.stop();
            }
        }, 1000);
    };
    ResetPasswordComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-resetpassword',
            template: __webpack_require__(/*! ./resetPassword.component.html */ "./src/app/account/resetPassword/resetPassword.component.html"),
            styles: [__webpack_require__(/*! ./resetPassword.component.scss */ "./src/app/account/resetPassword/resetPassword.component.scss")]
        }),
        __metadata("design:paramtypes", [_node_modules_ngx_toastr__WEBPACK_IMPORTED_MODULE_1__["ToastrService"],
            _services_loading_service__WEBPACK_IMPORTED_MODULE_2__["LoadingService"],
            _services_customer_service__WEBPACK_IMPORTED_MODULE_4__["CustomerService"]])
    ], ResetPasswordComponent);
    return ResetPasswordComponent;
}());

var MyErrorStateMatcher = /** @class */ (function () {
    function MyErrorStateMatcher() {
    }
    MyErrorStateMatcher.prototype.isErrorState = function (control, form) {
        var isSubmitted = form && form.submitted;
        return !!(control && control.invalid && (control.dirty || control.touched || isSubmitted));
    };
    return MyErrorStateMatcher;
}());



/***/ }),

/***/ "./src/app/apoint/apoint-details.component.ts":
/*!****************************************************!*\
  !*** ./src/app/apoint/apoint-details.component.ts ***!
  \****************************************************/
/*! exports provided: ApointDetailsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ApointDetailsComponent", function() { return ApointDetailsComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var ApointDetailsComponent = /** @class */ (function () {
    function ApointDetailsComponent() {
    }
    ApointDetailsComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-apoint-details',
            template: __webpack_require__(/*! ./apoint.component.html */ "./src/app/apoint/apoint.component.html"),
            styles: [__webpack_require__(/*! ./apoint.component.scss */ "./src/app/apoint/apoint.component.scss")],
        }),
        __metadata("design:paramtypes", [])
    ], ApointDetailsComponent);
    return ApointDetailsComponent;
}());



/***/ }),

/***/ "./src/app/apoint/apoint.component.html":
/*!**********************************************!*\
  !*** ./src/app/apoint/apoint.component.html ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container-fluid\">\r\n    <div class=\"row page-titles\">\r\n        <div class=\"col-md-5 align-self-center\">\r\n            <h4 class=\"text-themecolor\">{{'Apoint' | translate}}</h4>\r\n        </div>\r\n    </div>\r\n    <div class=\"row\">\r\n        <div class=\"col-lg-3\">\r\n            <div class=\"card\">\r\n                <div class=\"card-body\">\r\n                    <h5 class=\"card-title\">{{'Categories' | translate}}</h5>\r\n                    <h6 class=\"card-subtitle\">THỊT NGON QUỐC TẾ - AN TOÀN SỨC KHỎE</h6>\r\n                    <mat-nav-list class=\"steamline m-t-40\">\r\n                        <a mat-list-item>\r\n                            <span mat-line>{{'Beef VN' | translate}}</span>\r\n                        </a>\r\n                        <a mat-list-item>\r\n                            <span mat-line>{{'Beef USA' | translate}}</span>\r\n                        </a>\r\n                        <a mat-list-item>\r\n                            <span mat-line>{{'Beef HF' | translate}} (Holstein Friz)</span>\r\n                        </a>\r\n                        <a mat-list-item>\r\n                            <span mat-line>{{'Beef Japan' | translate}} (Wagyu)</span>\r\n                        </a>\r\n                        <a mat-list-item>\r\n                            <span mat-line>{{'Milk' | translate}}</span>\r\n                        </a>\r\n                        <a mat-list-item>\r\n                            <span mat-line>{{'Transaction Bounes' | translate}}</span>\r\n                        </a>\r\n                    </mat-nav-list>\r\n                </div>\r\n            </div>\r\n        </div>\r\n        <div class=\"col-lg-9\">\r\n            <div class=\"card oh\">\r\n                <div class=\"card-body\">\r\n                    <div class=\"d-flex m-b-30 align-items-center no-block\">\r\n                        <h5 class=\"card-title \">Sales Off</h5>\r\n                        <div class=\"ml-auto\">\r\n                            <ul class=\"list-inline font-20\">\r\n                                <li>\r\n                                    <i class=\"fa fa-caret-up text-success\"></i> 70%</li>\r\n                            </ul>\r\n                        </div>\r\n                    </div>\r\n                    <section class=\"row divWrapItem\">\r\n                        <mat-card class=\"col-lg-3 col-md-3 cardItem\">\r\n                            <mat-card-header class=\"content-center m-b-10 p-r-15\">\r\n                                <img src=\"http://i1150.photobucket.com/albums/o614/manhtung159/Alego/flank_zpsm2wr3yk1.jpg\" class=\"imgItem\">\r\n                            </mat-card-header>\r\n                            <mat-card-content>\r\n                                <h4>Thăn ngoại bò Wagyu Kagoshima BMS6</h4>\r\n                                <mat-card-subtitle>937,000 VNĐ</mat-card-subtitle>\r\n                            </mat-card-content>\r\n                            <mat-card-actions>\r\n                                <button mat-button>\r\n                                    {{'View' | translate}}\r\n                                </button>\r\n                                <button mat-button>\r\n                                    <mat-icon class=\"iconInButton\">shopping_cart</mat-icon>\r\n                                    {{'Buy' | translate}}\r\n                                </button>\r\n                            </mat-card-actions>\r\n                        </mat-card>\r\n                        <mat-card class=\"col-lg-3 col-md-3 cardItem\">\r\n                            <mat-card-header class=\"content-center m-b-10 p-r-15\">\r\n                                <img src=\"http://i1150.photobucket.com/albums/o614/manhtung159/Alego/flank_zpsm2wr3yk1.jpg\" class=\"imgItem\">\r\n                            </mat-card-header>\r\n                            <mat-card-content>\r\n                                <h4>Thăn ngoại bò Wagyu Kagoshima BMS6</h4>\r\n                                <mat-card-subtitle>937,000 VNĐ</mat-card-subtitle>\r\n                            </mat-card-content>\r\n                            <mat-card-actions>\r\n                                <button mat-button>\r\n                                    {{'View' | translate}}\r\n                                </button>\r\n                                <button mat-button>\r\n                                    <mat-icon class=\"iconInButton\">shopping_cart</mat-icon>\r\n                                    {{'Buy' | translate}}\r\n                                </button>\r\n                            </mat-card-actions>\r\n                        </mat-card>\r\n                        <mat-card class=\"col-lg-3 col-md-3 cardItem\">\r\n                            <mat-card-header class=\"content-center m-b-10 p-r-15\">\r\n                                <img src=\"http://i1150.photobucket.com/albums/o614/manhtung159/Alego/flank_zpsm2wr3yk1.jpg\" class=\"imgItem\">\r\n                            </mat-card-header>\r\n                            <mat-card-content>\r\n                                <h4>Thăn ngoại bò Wagyu Kagoshima BMS6</h4>\r\n                                <mat-card-subtitle>937,000 VNĐ</mat-card-subtitle>\r\n                            </mat-card-content>\r\n                            <mat-card-actions>\r\n                                <button mat-button>\r\n                                    {{'View' | translate}}\r\n                                </button>\r\n                                <button mat-button>\r\n                                    <mat-icon class=\"iconInButton\">shopping_cart</mat-icon>\r\n                                    {{'Buy' | translate}}\r\n                                </button>\r\n                            </mat-card-actions>\r\n                        </mat-card>\r\n                        <mat-card class=\"col-lg-3 col-md-3 cardItem\">\r\n                            <mat-card-header class=\"content-center m-b-10 p-r-15\">\r\n                                <img src=\"http://i1150.photobucket.com/albums/o614/manhtung159/Alego/flank_zpsm2wr3yk1.jpg\" class=\"imgItem\">\r\n                            </mat-card-header>\r\n                            <mat-card-content>\r\n                                <h4>Thăn ngoại bò Wagyu Kagoshima BMS6</h4>\r\n                                <mat-card-subtitle>937,000 VNĐ</mat-card-subtitle>\r\n                            </mat-card-content>\r\n                            <mat-card-actions>\r\n                                <button mat-button>\r\n                                    {{'View' | translate}}\r\n                                </button>\r\n                                <button mat-button>\r\n                                    <mat-icon class=\"iconInButton\">shopping_cart</mat-icon>\r\n                                    {{'Buy' | translate}}\r\n                                </button>\r\n                            </mat-card-actions>\r\n                        </mat-card>\r\n                        <mat-card class=\"col-lg-3 col-md-3 cardItem\">\r\n                            <mat-card-header class=\"content-center m-b-10 p-r-15\">\r\n                                <img src=\"http://i1150.photobucket.com/albums/o614/manhtung159/Alego/flank_zpsm2wr3yk1.jpg\" class=\"imgItem\">\r\n                            </mat-card-header>\r\n                            <mat-card-content>\r\n                                <h4>Thăn ngoại bò Wagyu Kagoshima BMS6</h4>\r\n                                <mat-card-subtitle>937,000 VNĐ</mat-card-subtitle>\r\n                            </mat-card-content>\r\n                            <mat-card-actions>\r\n                                <button mat-button>\r\n                                    {{'View' | translate}}\r\n                                </button>\r\n                                <button mat-button>\r\n                                    <mat-icon class=\"iconInButton\">shopping_cart</mat-icon>\r\n                                    {{'Buy' | translate}}\r\n                                </button>\r\n                            </mat-card-actions>\r\n                        </mat-card>\r\n                        <mat-card class=\"col-lg-3 col-md-3 cardItem\">\r\n                            <mat-card-header class=\"content-center m-b-10 p-r-15\">\r\n                                <img src=\"http://i1150.photobucket.com/albums/o614/manhtung159/Alego/flank_zpsm2wr3yk1.jpg\" class=\"imgItem\">\r\n                            </mat-card-header>\r\n                            <mat-card-content>\r\n                                <h4>Thăn ngoại bò Wagyu Kagoshima BMS6</h4>\r\n                                <mat-card-subtitle>937,000 VNĐ</mat-card-subtitle>\r\n                            </mat-card-content>\r\n                            <mat-card-actions>\r\n                                <button mat-button>\r\n                                    {{'View' | translate}}\r\n                                </button>\r\n                                <button mat-button>\r\n                                    <mat-icon class=\"iconInButton\">shopping_cart</mat-icon>\r\n                                    {{'Buy' | translate}}\r\n                                </button>\r\n                            </mat-card-actions>\r\n                        </mat-card>\r\n\r\n                    </section>\r\n                </div>\r\n            </div>\r\n        </div>\r\n\r\n    </div>\r\n    <!-- ============================================================== -->\r\n    <!-- News -->\r\n    <!-- ============================================================== -->\r\n    <div class=\"row\">\r\n        <!-- column -->\r\n        <div class=\"col-12\">\r\n            <div class=\"card\">\r\n                <div class=\"card-body\">\r\n                    <div class=\"d-flex\">\r\n                        <div>\r\n                            <h5 class=\"card-title\">Sales Overview</h5>\r\n                            <h6 class=\"card-subtitle\">Check the monthly sales </h6>\r\n                        </div>\r\n                        <div class=\"ml-auto\">\r\n                            <select class=\"custom-select b-0\">\r\n                                <option>January</option>\r\n                                <option value=\"1\">February</option>\r\n                                <option value=\"2\" selected=\"\">March</option>\r\n                                <option value=\"3\">April</option>\r\n                            </select>\r\n                        </div>\r\n                    </div>\r\n                </div>\r\n                <div class=\"table-responsive\">\r\n                    <table class=\"table table-hover\">\r\n                        <thead>\r\n                            <tr>\r\n                                <th class=\"text-center\">#</th>\r\n                                <th>NAME</th>\r\n                                <th>DATE</th>\r\n                                <th>PRICE</th>\r\n                            </tr>\r\n                        </thead>\r\n                        <tbody>\r\n                            <tr>\r\n                                <td class=\"text-center\">1</td>\r\n                                <td class=\"txt-oflo\">Elite admin</td>\r\n                                <td class=\"txt-oflo\">April 18, 2017</td>\r\n                                <td>\r\n                                    <span class=\"text-success\">$24</span>\r\n                                </td>\r\n                            </tr>\r\n                            <tr>\r\n                                <td class=\"text-center\">2</td>\r\n                                <td class=\"txt-oflo\">Real Homes WP Theme</td>\r\n                                <td class=\"txt-oflo\">April 19, 2017</td>\r\n                                <td>\r\n                                    <span class=\"text-info\">$1250</span>\r\n                                </td>\r\n                            </tr>\r\n                            <tr>\r\n                                <td class=\"text-center\">3</td>\r\n                                <td class=\"txt-oflo\">Ample Admin</td>\r\n                                <td class=\"txt-oflo\">April 19, 2017</td>\r\n                                <td>\r\n                                    <span class=\"text-info\">$1250</span>\r\n                                </td>\r\n                            </tr>\r\n                            <tr>\r\n                                <td class=\"text-center\">4</td>\r\n                                <td class=\"txt-oflo\">Medical Pro WP Theme</td>\r\n                                <td class=\"txt-oflo\">April 20, 2017</td>\r\n                                <td>\r\n                                    <span class=\"text-danger\">-$24</span>\r\n                                </td>\r\n                            </tr>\r\n                            <tr>\r\n                                <td class=\"text-center\">5</td>\r\n                                <td class=\"txt-oflo\">Hosting press html</td>\r\n                                <td class=\"txt-oflo\">April 21, 2017</td>\r\n                                <td>\r\n                                    <span class=\"text-success\">$24</span>\r\n                                </td>\r\n                            </tr>\r\n                            <tr>\r\n                                <td class=\"text-center\">6</td>\r\n                                <td class=\"txt-oflo\">Digital Agency PSD</td>\r\n                                <td class=\"txt-oflo\">April 23, 2017</td>\r\n                                <td>\r\n                                    <span class=\"text-danger\">-$14</span>\r\n                                </td>\r\n                            </tr>\r\n                            <tr>\r\n                                <td class=\"text-center\">7</td>\r\n                                <td class=\"txt-oflo\">Helping Hands WP Theme</td>\r\n                                <td class=\"txt-oflo\">April 22, 2017</td>\r\n                                <td>\r\n                                    <span class=\"text-success\">$64</span>\r\n                                </td>\r\n                            </tr>\r\n                            <tr>\r\n                                <td class=\"text-center\">8</td>\r\n                                <td class=\"txt-oflo\">Helping Hands WP Theme</td>\r\n                                <td class=\"txt-oflo\">April 22, 2017</td>\r\n                                <td>\r\n                                    <span class=\"text-success\">$64</span>\r\n                                </td>\r\n                            </tr>\r\n                            <tr>\r\n                                <td class=\"text-center\">9</td>\r\n                                <td class=\"txt-oflo\">Ample Admin</td>\r\n                                <td class=\"txt-oflo\">April 19, 2017</td>\r\n                                <td>\r\n                                    <span class=\"text-info\">$1250</span>\r\n                                </td>\r\n                            </tr>\r\n                        </tbody>\r\n                    </table>\r\n                </div>\r\n            </div>\r\n        </div>\r\n    </div>\r\n    <!-- ============================================================== -->\r\n    <!-- To do chat and message -->\r\n    <!-- ============================================================== -->\r\n    <div class=\"row\">\r\n        <div class=\"col-md-6\">\r\n            <div class=\"card\">\r\n                <div class=\"card-body\">\r\n                    <h4 class=\"card-title\">Feeds</h4>\r\n                </div>\r\n                <ul class=\"feeds p-b-20\">\r\n                    <li>\r\n                        <div class=\"bg-info\">\r\n                            <i class=\"fa fa-bell-o\"></i>\r\n                        </div> You have 4 pending tasks.\r\n                        <span class=\"text-muted\">Just Now</span>\r\n                    </li>\r\n                    <li>\r\n                        <div class=\"bg-success\">\r\n                            <i class=\"ti-server\"></i>\r\n                        </div> Server #1 overloaded.\r\n                        <span class=\"text-muted\">2 Hours ago</span>\r\n                    </li>\r\n                    <li>\r\n                        <div class=\"bg-warning\">\r\n                            <i class=\"ti-shopping-cart\"></i>\r\n                        </div> New order received.\r\n                        <span class=\"text-muted\">31 May</span>\r\n                    </li>\r\n                    <li>\r\n                        <div class=\"bg-danger\">\r\n                            <i class=\"ti-user\"></i>\r\n                        </div> New user registered.\r\n                        <span class=\"text-muted\">30 May</span>\r\n                    </li>\r\n                    <li>\r\n                        <div class=\"bg-dark\">\r\n                            <i class=\"fa fa-bell-o\"></i>\r\n                        </div> New Version just arrived.\r\n                        <span class=\"text-muted\">27 May</span>\r\n                    </li>\r\n                    <li>\r\n                        <div class=\"bg-info\">\r\n                            <i class=\"fa fa-bell-o\"></i>\r\n                        </div> You have 4 pending tasks.\r\n                        <span class=\"text-muted\">Just Now</span>\r\n                    </li>\r\n                    <li>\r\n                        <div class=\"bg-danger\">\r\n                            <i class=\"ti-user\"></i>\r\n                        </div> New user registered.\r\n                        <span class=\"text-muted\">30 May</span>\r\n                    </li>\r\n                    <li>\r\n                        <div class=\"bg-dark\">\r\n                            <i class=\"fa fa-bell-o\"></i>\r\n                        </div> New Version just arrived.\r\n                        <span class=\"text-muted\">27 May</span>\r\n                    </li>\r\n                </ul>\r\n            </div>\r\n        </div>\r\n        <div class=\"col-md-6\">\r\n            <div class=\"card\">\r\n                <div class=\"card-body\">\r\n                    <h5 class=\"card-title\">Messages (5 New)</h5>\r\n                    <div class=\"message-box\">\r\n                        <div class=\"message-widget message-scroll\">\r\n                            <!-- Message -->\r\n                            <a href=\"javascript:void(0)\">\r\n                                <div class=\"user-img\">\r\n                                    <img src=\"../assets/images/users/1.jpg\" alt=\"user\" class=\"img-circle\">\r\n                                    <span class=\"profile-status online pull-right\"></span>\r\n                                </div>\r\n                                <div class=\"mail-contnet\">\r\n                                    <h5>Pavan kumar</h5>\r\n                                    <span class=\"mail-desc\">Lorem Ipsum is simply dummy text of the printing and type setting industry. Lorem Ipsum\r\n                                        has been.</span>\r\n                                    <span class=\"time\">9:30 AM</span>\r\n                                </div>\r\n                            </a>\r\n                            <!-- Message -->\r\n                            <a href=\"javascript:void(0)\">\r\n                                <div class=\"user-img\">\r\n                                    <img src=\"../assets/images/users/2.jpg\" alt=\"user\" class=\"img-circle\">\r\n                                    <span class=\"profile-status busy pull-right\"></span>\r\n                                </div>\r\n                                <div class=\"mail-contnet\">\r\n                                    <h5>Sonu Nigam</h5>\r\n                                    <span class=\"mail-desc\">I've sung a song! See you at</span>\r\n                                    <span class=\"time\">9:10 AM</span>\r\n                                </div>\r\n                            </a>\r\n                            <!-- Message -->\r\n                            <a href=\"javascript:void(0)\">\r\n                                <div class=\"user-img\">\r\n                                    <span class=\"round\">A</span>\r\n                                    <span class=\"profile-status away pull-right\"></span>\r\n                                </div>\r\n                                <div class=\"mail-contnet\">\r\n                                    <h5>Arijit Sinh</h5>\r\n                                    <span class=\"mail-desc\">Simply dummy text of the printing and typesetting industry.</span>\r\n                                    <span class=\"time\">9:08 AM</span>\r\n                                </div>\r\n                            </a>\r\n                            <!-- Message -->\r\n                            <a href=\"javascript:void(0)\">\r\n                                <div class=\"user-img\">\r\n                                    <img src=\"../assets/images/users/4.jpg\" alt=\"user\" class=\"img-circle\">\r\n                                    <span class=\"profile-status offline pull-right\"></span>\r\n                                </div>\r\n                                <div class=\"mail-contnet\">\r\n                                    <h5>Pavan kumar</h5>\r\n                                    <span class=\"mail-desc\">Just see the my admin!</span>\r\n                                    <span class=\"time\">9:02 AM</span>\r\n                                </div>\r\n                            </a>\r\n                            <!-- Message -->\r\n                            <a href=\"javascript:void(0)\">\r\n                                <div class=\"user-img\">\r\n                                    <img src=\"../assets/images/users/1.jpg\" alt=\"user\" class=\"img-circle\">\r\n                                    <span class=\"profile-status online pull-right\"></span>\r\n                                </div>\r\n                                <div class=\"mail-contnet\">\r\n                                    <h5>Pavan kumar</h5>\r\n                                    <span class=\"mail-desc\">Welcome to the Elite Admin</span>\r\n                                    <span class=\"time\">9:30 AM</span>\r\n                                </div>\r\n                            </a>\r\n                            <!-- Message -->\r\n                            <a href=\"javascript:void(0)\">\r\n                                <div class=\"user-img\">\r\n                                    <img src=\"../assets/images/users/2.jpg\" alt=\"user\" class=\"img-circle\">\r\n                                    <span class=\"profile-status busy pull-right\"></span>\r\n                                </div>\r\n                                <div class=\"mail-contnet\">\r\n                                    <h5>Sonu Nigam</h5>\r\n                                    <span class=\"mail-desc\">I've sung a song! See you at</span>\r\n                                    <span class=\"time\">9:10 AM</span>\r\n                                </div>\r\n                            </a>\r\n                        </div>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n        </div>\r\n    </div>\r\n</div>"

/***/ }),

/***/ "./src/app/apoint/apoint.component.scss":
/*!**********************************************!*\
  !*** ./src/app/apoint/apoint.component.scss ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".imgItem {\n  height: 100px;\n  width: 100px;\n  border: 3px solid #ddd;\n  border-radius: 100%; }\n\n.iconInButton {\n  font-size: 1rem;\n  line-height: 1.3rem; }\n\n.divWrapItem {\n  justify-content: space-evenly; }\n\n.cardItem {\n  margin: 5px; }\n\n.steamline {\n  padding: 0;\n  margin: 0; }\n"

/***/ }),

/***/ "./src/app/apoint/apoint.component.ts":
/*!********************************************!*\
  !*** ./src/app/apoint/apoint.component.ts ***!
  \********************************************/
/*! exports provided: ApointComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ApointComponent", function() { return ApointComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var ApointComponent = /** @class */ (function () {
    function ApointComponent() {
    }
    ApointComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-apoint',
            template: '<router-outlet></router-outlet>',
        }),
        __metadata("design:paramtypes", [])
    ], ApointComponent);
    return ApointComponent;
}());



/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<router-outlet></router-outlet>"

/***/ }),

/***/ "./src/app/app.component.scss":
/*!************************************!*\
  !*** ./src/app/app.component.scss ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ngx-translate/core */ "./node_modules/@ngx-translate/core/fesm5/ngx-translate-core.js");
/* harmony import */ var _services_direction_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./services/direction.service */ "./src/app/services/direction.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var AppComponent = /** @class */ (function () {
    function AppComponent(translate, direction) {
        this.translate = translate;
        this.direction = direction;
        translate.addLangs(['vi', 'en']);
        translate.setDefaultLang('vi');
        // localStorage.removeItem('orderProduct');
        if (localStorage.getItem('orderProduct') === null) {
            this.direction.sendData(JSON.parse('[]'));
            localStorage.setItem('orderProduct', '[]');
        }
        else {
            this.direction.sendData(JSON.parse(localStorage.getItem('orderProduct')));
        }
    }
    AppComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.scss */ "./src/app/app.component.scss")],
        }),
        __metadata("design:paramtypes", [_ngx_translate_core__WEBPACK_IMPORTED_MODULE_1__["TranslateService"], _services_direction_service__WEBPACK_IMPORTED_MODULE_2__["DirectionService"]])
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: HttpLoaderFactory, provideConfig, AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HttpLoaderFactory", function() { return HttpLoaderFactory; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "provideConfig", function() { return provideConfig; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/platform-browser/animations */ "./node_modules/@angular/platform-browser/fesm5/animations.js");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _material_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./material.module */ "./src/app/material.module.ts");
/* harmony import */ var ngx_perfect_scrollbar__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ngx-perfect-scrollbar */ "./node_modules/ngx-perfect-scrollbar/dist/ngx-perfect-scrollbar.es5.js");
/* harmony import */ var _services_authentication_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./services/authentication.service */ "./src/app/services/authentication.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _angular_http__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/http */ "./node_modules/@angular/http/fesm5/http.js");
/* harmony import */ var _app_routing__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./app.routing */ "./src/app/app.routing.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_flex_layout__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/flex-layout */ "./node_modules/@angular/flex-layout/esm5/flex-layout.es5.js");
/* harmony import */ var _ncstate_sat_popover__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @ncstate/sat-popover */ "./node_modules/@ncstate/sat-popover/@ncstate/sat-popover.es5.js");
/* harmony import */ var _services_loading_service__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./services/loading.service */ "./src/app/services/loading.service.ts");
/* harmony import */ var _services_customer_service__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./services/customer.service */ "./src/app/services/customer.service.ts");
/* harmony import */ var _services_api_service__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./services/api.service */ "./src/app/services/api.service.ts");
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ngx-toastr */ "./node_modules/ngx-toastr/toastr.es5.js");
/* harmony import */ var _services_order_service__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./services/order.service */ "./src/app/services/order.service.ts");
/* harmony import */ var _services_user_service__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./services/user.service */ "./src/app/services/user.service.ts");
/* harmony import */ var _services_product_service__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./services/product.service */ "./src/app/services/product.service.ts");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! @ngx-translate/core */ "./node_modules/@ngx-translate/core/fesm5/ngx-translate-core.js");
/* harmony import */ var _ngx_translate_http_loader__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! @ngx-translate/http-loader */ "./node_modules/@ngx-translate/http-loader/esm5/ngx-translate-http-loader.js");
/* harmony import */ var _layout_header_header_component__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ./layout/header/header.component */ "./src/app/layout/header/header.component.ts");
/* harmony import */ var _layout_sidebar_sidebar_component__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! ./layout/sidebar/sidebar.component */ "./src/app/layout/sidebar/sidebar.component.ts");
/* harmony import */ var _shopping_shopping_component__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! ./shopping/shopping.component */ "./src/app/shopping/shopping.component.ts");
/* harmony import */ var _Guard_user_guard__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! ./Guard/user.guard */ "./src/app/Guard/user.guard.ts");
/* harmony import */ var _layout_main_component__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! ./layout/main.component */ "./src/app/layout/main.component.ts");
/* harmony import */ var _orders_orders_component__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! ./orders/orders.component */ "./src/app/orders/orders.component.ts");
/* harmony import */ var _orders_dialog_orders_dialog_order_details_component__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(/*! ./orders/dialog-orders/dialog-order-details.component */ "./src/app/orders/dialog-orders/dialog-order-details.component.ts");
/* harmony import */ var _profiles_profiles_component__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(/*! ./profiles/profiles.component */ "./src/app/profiles/profiles.component.ts");
/* harmony import */ var _profiles_address_address_component__WEBPACK_IMPORTED_MODULE_31__ = __webpack_require__(/*! ./profiles/address/address.component */ "./src/app/profiles/address/address.component.ts");
/* harmony import */ var _profiles_address_dialog_dialog_details_dialog_address_details_component__WEBPACK_IMPORTED_MODULE_32__ = __webpack_require__(/*! ./profiles/address/dialog/dialog-details/dialog-address-details.component */ "./src/app/profiles/address/dialog/dialog-details/dialog-address-details.component.ts");
/* harmony import */ var _store_store_component__WEBPACK_IMPORTED_MODULE_33__ = __webpack_require__(/*! ./store/store.component */ "./src/app/store/store.component.ts");
/* harmony import */ var _chat_chat_component__WEBPACK_IMPORTED_MODULE_34__ = __webpack_require__(/*! ./chat/chat.component */ "./src/app/chat/chat.component.ts");
/* harmony import */ var _agm_core__WEBPACK_IMPORTED_MODULE_35__ = __webpack_require__(/*! @agm/core */ "./node_modules/@agm/core/index.js");
/* harmony import */ var agm_direction__WEBPACK_IMPORTED_MODULE_36__ = __webpack_require__(/*! agm-direction */ "./node_modules/agm-direction/agm-direction.umd.js");
/* harmony import */ var agm_direction__WEBPACK_IMPORTED_MODULE_36___default = /*#__PURE__*/__webpack_require__.n(agm_direction__WEBPACK_IMPORTED_MODULE_36__);
/* harmony import */ var ngx_pagination__WEBPACK_IMPORTED_MODULE_37__ = __webpack_require__(/*! ngx-pagination */ "./node_modules/ngx-pagination/dist/ngx-pagination.js");
/* harmony import */ var _store_dialog_ShowDirections_dialog_show_direction_component__WEBPACK_IMPORTED_MODULE_38__ = __webpack_require__(/*! ./store/dialog-ShowDirections/dialog-show-direction.component */ "./src/app/store/dialog-ShowDirections/dialog-show-direction.component.ts");
/* harmony import */ var _apoint_apoint_component__WEBPACK_IMPORTED_MODULE_39__ = __webpack_require__(/*! ./apoint/apoint.component */ "./src/app/apoint/apoint.component.ts");
/* harmony import */ var _apoint_apoint_details_component__WEBPACK_IMPORTED_MODULE_40__ = __webpack_require__(/*! ./apoint/apoint-details.component */ "./src/app/apoint/apoint-details.component.ts");
/* harmony import */ var _account_login_login_component__WEBPACK_IMPORTED_MODULE_41__ = __webpack_require__(/*! ./account/login/login.component */ "./src/app/account/login/login.component.ts");
/* harmony import */ var _account_registration_registration_component__WEBPACK_IMPORTED_MODULE_42__ = __webpack_require__(/*! ./account/registration/registration.component */ "./src/app/account/registration/registration.component.ts");
/* harmony import */ var _account_resetPassword_resetPassword_component__WEBPACK_IMPORTED_MODULE_43__ = __webpack_require__(/*! ./account/resetPassword/resetPassword.component */ "./src/app/account/resetPassword/resetPassword.component.ts");
/* harmony import */ var _node_modules_angularx_social_login__WEBPACK_IMPORTED_MODULE_44__ = __webpack_require__(/*! ../../node_modules/angularx-social-login */ "./node_modules/angularx-social-login/angularx-social-login.es5.js");
/* harmony import */ var _services_apoint_service__WEBPACK_IMPORTED_MODULE_45__ = __webpack_require__(/*! ./services/apoint.service */ "./src/app/services/apoint.service.ts");
/* harmony import */ var _shopping_beef_shopping_beef_component__WEBPACK_IMPORTED_MODULE_46__ = __webpack_require__(/*! ./shopping/beef/shopping-beef.component */ "./src/app/shopping/beef/shopping-beef.component.ts");
/* harmony import */ var _shopping_milk_shopping_milk_component__WEBPACK_IMPORTED_MODULE_47__ = __webpack_require__(/*! ./shopping/milk/shopping-milk.component */ "./src/app/shopping/milk/shopping-milk.component.ts");
/* harmony import */ var _shopping_bounes_shopping_bounes_component__WEBPACK_IMPORTED_MODULE_48__ = __webpack_require__(/*! ./shopping/bounes/shopping-bounes.component */ "./src/app/shopping/bounes/shopping-bounes.component.ts");
/* harmony import */ var ngx_carousel__WEBPACK_IMPORTED_MODULE_49__ = __webpack_require__(/*! ngx-carousel */ "./node_modules/ngx-carousel/index.js");
/* harmony import */ var _shopping_shopping_cart_shopping_cart_component__WEBPACK_IMPORTED_MODULE_50__ = __webpack_require__(/*! ./shopping/shopping-cart/shopping-cart.component */ "./src/app/shopping/shopping-cart/shopping-cart.component.ts");
/* harmony import */ var _shopping_checkout_checkout_component__WEBPACK_IMPORTED_MODULE_51__ = __webpack_require__(/*! ./shopping/checkout/checkout.component */ "./src/app/shopping/checkout/checkout.component.ts");
/* harmony import */ var _services_direction_service__WEBPACK_IMPORTED_MODULE_52__ = __webpack_require__(/*! ./services/direction.service */ "./src/app/services/direction.service.ts");
/* harmony import */ var _services_chat_service__WEBPACK_IMPORTED_MODULE_53__ = __webpack_require__(/*! ./services/chat.service */ "./src/app/services/chat.service.ts");
/* harmony import */ var _beef_origin_beef_origin_component__WEBPACK_IMPORTED_MODULE_54__ = __webpack_require__(/*! ./beef-origin/beef-origin.component */ "./src/app/beef-origin/beef-origin.component.ts");
/* harmony import */ var angular_vertical_timeline__WEBPACK_IMPORTED_MODULE_55__ = __webpack_require__(/*! angular-vertical-timeline */ "./node_modules/angular-vertical-timeline/dist/index.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

























































// AoT requires an exported function for factories
function HttpLoaderFactory(httpClient) {
    return new _ngx_translate_http_loader__WEBPACK_IMPORTED_MODULE_22__["TranslateHttpLoader"](httpClient);
}
var config = new _node_modules_angularx_social_login__WEBPACK_IMPORTED_MODULE_44__["AuthServiceConfig"]([
    {
        id: _node_modules_angularx_social_login__WEBPACK_IMPORTED_MODULE_44__["GoogleLoginProvider"].PROVIDER_ID,
        provider: new _node_modules_angularx_social_login__WEBPACK_IMPORTED_MODULE_44__["GoogleLoginProvider"]('1055086183299-r9g9qjkgh5nk7ur9tkt8g3olf2hkr7ju.apps.googleusercontent.com')
    },
]);
function provideConfig() {
    return config;
}
var DEFAULT_PERFECT_SCROLLBAR_CONFIG = {
    suppressScrollX: true,
    wheelSpeed: 2,
    wheelPropagation: true,
};
var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"],
                _layout_main_component__WEBPACK_IMPORTED_MODULE_27__["MainComponent"],
                _layout_header_header_component__WEBPACK_IMPORTED_MODULE_23__["HeaderComponent"],
                _account_login_login_component__WEBPACK_IMPORTED_MODULE_41__["LoginComponent"],
                _account_registration_registration_component__WEBPACK_IMPORTED_MODULE_42__["RegistrationComponent"],
                _account_resetPassword_resetPassword_component__WEBPACK_IMPORTED_MODULE_43__["ResetPasswordComponent"],
                _layout_sidebar_sidebar_component__WEBPACK_IMPORTED_MODULE_24__["SidebarComponent"],
                _shopping_shopping_component__WEBPACK_IMPORTED_MODULE_25__["ShoppingComponent"],
                _profiles_profiles_component__WEBPACK_IMPORTED_MODULE_30__["ProfilesComponent"],
                _profiles_address_address_component__WEBPACK_IMPORTED_MODULE_31__["AddressComponent"],
                _store_store_component__WEBPACK_IMPORTED_MODULE_33__["StoreComponent"],
                _chat_chat_component__WEBPACK_IMPORTED_MODULE_34__["ChatComponent"],
                _apoint_apoint_component__WEBPACK_IMPORTED_MODULE_39__["ApointComponent"],
                _apoint_apoint_details_component__WEBPACK_IMPORTED_MODULE_40__["ApointDetailsComponent"],
                _shopping_beef_shopping_beef_component__WEBPACK_IMPORTED_MODULE_46__["ShoppingBeefComponent"],
                _shopping_milk_shopping_milk_component__WEBPACK_IMPORTED_MODULE_47__["ShoppingMilkComponent"],
                _shopping_bounes_shopping_bounes_component__WEBPACK_IMPORTED_MODULE_48__["ShoppingBounesComponent"],
                _shopping_shopping_cart_shopping_cart_component__WEBPACK_IMPORTED_MODULE_50__["ShoppingCartComponent"],
                _shopping_checkout_checkout_component__WEBPACK_IMPORTED_MODULE_51__["CheckoutComponent"],
                _beef_origin_beef_origin_component__WEBPACK_IMPORTED_MODULE_54__["BeefOriginComponent"],
                _profiles_address_dialog_dialog_details_dialog_address_details_component__WEBPACK_IMPORTED_MODULE_32__["DialogAddressDetailsComponent"],
                _store_dialog_ShowDirections_dialog_show_direction_component__WEBPACK_IMPORTED_MODULE_38__["DialogShowDirectionComponent"],
                _orders_orders_component__WEBPACK_IMPORTED_MODULE_28__["OrdersComponent"],
                _orders_dialog_orders_dialog_order_details_component__WEBPACK_IMPORTED_MODULE_29__["DialogOrderDetailsComponent"],
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
                _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_2__["BrowserAnimationsModule"],
                _material_module__WEBPACK_IMPORTED_MODULE_4__["MaterialModule"],
                ngx_perfect_scrollbar__WEBPACK_IMPORTED_MODULE_5__["PerfectScrollbarModule"],
                angular_vertical_timeline__WEBPACK_IMPORTED_MODULE_55__["VerticalTimelineModule"],
                ngx_pagination__WEBPACK_IMPORTED_MODULE_37__["NgxPaginationModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_7__["RouterModule"],
                _angular_common_http__WEBPACK_IMPORTED_MODULE_8__["HttpClientModule"],
                _angular_http__WEBPACK_IMPORTED_MODULE_9__["HttpModule"],
                _app_routing__WEBPACK_IMPORTED_MODULE_10__["AppRoutingModule"],
                ngx_carousel__WEBPACK_IMPORTED_MODULE_49__["NgxCarouselModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_11__["FormsModule"],
                _ncstate_sat_popover__WEBPACK_IMPORTED_MODULE_13__["SatPopoverModule"],
                _angular_flex_layout__WEBPACK_IMPORTED_MODULE_12__["FlexLayoutModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_11__["ReactiveFormsModule"],
                _node_modules_angularx_social_login__WEBPACK_IMPORTED_MODULE_44__["SocialLoginModule"],
                _agm_core__WEBPACK_IMPORTED_MODULE_35__["AgmCoreModule"].forRoot({
                    apiKey: 'AIzaSyDFTKbcSXEN22pUx3zfaabEOGyy7oOZtmI'
                }),
                agm_direction__WEBPACK_IMPORTED_MODULE_36__["AgmDirectionModule"],
                _ngx_translate_core__WEBPACK_IMPORTED_MODULE_21__["TranslateModule"].forRoot({
                    loader: {
                        provide: _ngx_translate_core__WEBPACK_IMPORTED_MODULE_21__["TranslateLoader"],
                        useFactory: HttpLoaderFactory,
                        deps: [_angular_common_http__WEBPACK_IMPORTED_MODULE_8__["HttpClient"]]
                    }
                }),
                ngx_toastr__WEBPACK_IMPORTED_MODULE_17__["ToastrModule"].forRoot({}),
            ],
            providers: [
                {
                    provide: ngx_perfect_scrollbar__WEBPACK_IMPORTED_MODULE_5__["PERFECT_SCROLLBAR_CONFIG"],
                    useValue: DEFAULT_PERFECT_SCROLLBAR_CONFIG
                },
                {
                    provide: _node_modules_angularx_social_login__WEBPACK_IMPORTED_MODULE_44__["AuthServiceConfig"],
                    useFactory: provideConfig
                },
                _Guard_user_guard__WEBPACK_IMPORTED_MODULE_26__["UserGuard"],
                _services_authentication_service__WEBPACK_IMPORTED_MODULE_6__["AuthenticationService"],
                _services_loading_service__WEBPACK_IMPORTED_MODULE_14__["LoadingService"],
                _services_api_service__WEBPACK_IMPORTED_MODULE_16__["ApiService"],
                _services_customer_service__WEBPACK_IMPORTED_MODULE_15__["CustomerService"],
                _services_order_service__WEBPACK_IMPORTED_MODULE_18__["OrderService"],
                _services_product_service__WEBPACK_IMPORTED_MODULE_20__["ProductService"],
                _services_user_service__WEBPACK_IMPORTED_MODULE_19__["UserService"],
                _services_apoint_service__WEBPACK_IMPORTED_MODULE_45__["ApointService"],
                _services_direction_service__WEBPACK_IMPORTED_MODULE_52__["DirectionService"],
                _services_chat_service__WEBPACK_IMPORTED_MODULE_53__["ChatService"]
            ],
            entryComponents: [
                _orders_dialog_orders_dialog_order_details_component__WEBPACK_IMPORTED_MODULE_29__["DialogOrderDetailsComponent"],
                _profiles_address_dialog_dialog_details_dialog_address_details_component__WEBPACK_IMPORTED_MODULE_32__["DialogAddressDetailsComponent"],
                _store_dialog_ShowDirections_dialog_show_direction_component__WEBPACK_IMPORTED_MODULE_38__["DialogShowDirectionComponent"],
                _shopping_shopping_cart_shopping_cart_component__WEBPACK_IMPORTED_MODULE_50__["ShoppingCartComponent"],
            ],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"]],
            schemas: [_angular_core__WEBPACK_IMPORTED_MODULE_1__["CUSTOM_ELEMENTS_SCHEMA"]],
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/app.routing.ts":
/*!********************************!*\
  !*** ./src/app/app.routing.ts ***!
  \********************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _shopping_shopping_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./shopping/shopping.component */ "./src/app/shopping/shopping.component.ts");
/* harmony import */ var _Guard_user_guard__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./Guard/user.guard */ "./src/app/Guard/user.guard.ts");
/* harmony import */ var _layout_main_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./layout/main.component */ "./src/app/layout/main.component.ts");
/* harmony import */ var _orders_orders_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./orders/orders.component */ "./src/app/orders/orders.component.ts");
/* harmony import */ var _profiles_profiles_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./profiles/profiles.component */ "./src/app/profiles/profiles.component.ts");
/* harmony import */ var _profiles_address_address_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./profiles/address/address.component */ "./src/app/profiles/address/address.component.ts");
/* harmony import */ var _chat_chat_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./chat/chat.component */ "./src/app/chat/chat.component.ts");
/* harmony import */ var _store_store_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./store/store.component */ "./src/app/store/store.component.ts");
/* harmony import */ var _apoint_apoint_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./apoint/apoint.component */ "./src/app/apoint/apoint.component.ts");
/* harmony import */ var _apoint_apoint_details_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./apoint/apoint-details.component */ "./src/app/apoint/apoint-details.component.ts");
/* harmony import */ var _account_registration_registration_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./account/registration/registration.component */ "./src/app/account/registration/registration.component.ts");
/* harmony import */ var _account_login_login_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./account/login/login.component */ "./src/app/account/login/login.component.ts");
/* harmony import */ var _account_resetPassword_resetPassword_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./account/resetPassword/resetPassword.component */ "./src/app/account/resetPassword/resetPassword.component.ts");
/* harmony import */ var _shopping_beef_shopping_beef_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./shopping/beef/shopping-beef.component */ "./src/app/shopping/beef/shopping-beef.component.ts");
/* harmony import */ var _shopping_milk_shopping_milk_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./shopping/milk/shopping-milk.component */ "./src/app/shopping/milk/shopping-milk.component.ts");
/* harmony import */ var _shopping_bounes_shopping_bounes_component__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./shopping/bounes/shopping-bounes.component */ "./src/app/shopping/bounes/shopping-bounes.component.ts");
/* harmony import */ var _shopping_checkout_checkout_component__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./shopping/checkout/checkout.component */ "./src/app/shopping/checkout/checkout.component.ts");
/* harmony import */ var _beef_origin_beef_origin_component__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ./beef-origin/beef-origin.component */ "./src/app/beef-origin/beef-origin.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};


// import { LoginComponent } from './layout/account/login/login.component';




















var routes = [
    { path: 'signup', component: _account_registration_registration_component__WEBPACK_IMPORTED_MODULE_14__["RegistrationComponent"] },
    { path: 'signin', component: _account_login_login_component__WEBPACK_IMPORTED_MODULE_15__["LoginComponent"] },
    { path: 'resetPassword', component: _account_resetPassword_resetPassword_component__WEBPACK_IMPORTED_MODULE_16__["ResetPasswordComponent"] },
    {
        path: 'app', component: _layout_main_component__WEBPACK_IMPORTED_MODULE_6__["MainComponent"], canActivate: [_Guard_user_guard__WEBPACK_IMPORTED_MODULE_5__["UserGuard"]], children: [
            { path: '', redirectTo: '/app/shopping', pathMatch: 'full' },
            { path: 'shopping', component: _shopping_shopping_component__WEBPACK_IMPORTED_MODULE_4__["ShoppingComponent"] },
            { path: 'shopping/beef/:id', component: _shopping_beef_shopping_beef_component__WEBPACK_IMPORTED_MODULE_17__["ShoppingBeefComponent"] },
            { path: 'shopping/milk', component: _shopping_milk_shopping_milk_component__WEBPACK_IMPORTED_MODULE_18__["ShoppingMilkComponent"] },
            { path: 'shopping/bounes', component: _shopping_bounes_shopping_bounes_component__WEBPACK_IMPORTED_MODULE_19__["ShoppingBounesComponent"] },
            { path: 'shopping/checkout', component: _shopping_checkout_checkout_component__WEBPACK_IMPORTED_MODULE_20__["CheckoutComponent"] },
            {
                path: 'apoint', component: _apoint_apoint_component__WEBPACK_IMPORTED_MODULE_12__["ApointComponent"], children: [
                    { path: ':id', component: _apoint_apoint_details_component__WEBPACK_IMPORTED_MODULE_13__["ApointDetailsComponent"] }
                ]
            },
            { path: 'orders', component: _orders_orders_component__WEBPACK_IMPORTED_MODULE_7__["OrdersComponent"] },
            { path: 'beeforigin/:id', component: _beef_origin_beef_origin_component__WEBPACK_IMPORTED_MODULE_21__["BeefOriginComponent"] },
            { path: 'chat', component: _chat_chat_component__WEBPACK_IMPORTED_MODULE_10__["ChatComponent"] },
            { path: 'findstore', component: _store_store_component__WEBPACK_IMPORTED_MODULE_11__["StoreComponent"] },
            { path: 'profiles', component: _profiles_profiles_component__WEBPACK_IMPORTED_MODULE_8__["ProfilesComponent"] },
            { path: 'profiles', component: _profiles_profiles_component__WEBPACK_IMPORTED_MODULE_8__["ProfilesComponent"] },
            { path: 'profiles/address', component: _profiles_address_address_component__WEBPACK_IMPORTED_MODULE_9__["AddressComponent"] },
        ]
    },
    { path: '**', redirectTo: '/app/shopping' },
];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__["BrowserModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes)
            ],
            exports: [],
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());



/***/ }),

/***/ "./src/app/beef-origin/beef-origin.component.html":
/*!********************************************************!*\
  !*** ./src/app/beef-origin/beef-origin.component.html ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container-fluid\">\r\n    <div class=\"row page-titles\">\r\n        <div class=\"col-md-5 align-self-center\">\r\n            <h4 class=\"text-themecolor\">{{'Search Beef Origin' | translate}}</h4>\r\n        </div>\r\n    </div>\r\n    <mat-progress-bar [mode]=\"loadingService.loading.value\"></mat-progress-bar>\r\n    <div class=\"row\">\r\n        <div class=\"col-12\">\r\n            <div class=\"card\">\r\n                <div class=\"card-body\">\r\n                    <h5>BCODE {{id_bcode}}</h5>\r\n                    <h5 *ngIf=\"bcode.length === 0\">Không tìm thấy dữ liệu...</h5>\r\n                    <section class=\"wrap\" *ngIf=\"bcode.length > 0\">\r\n                        <img src=\"{{imgBeef[bcode[0]?.type_beef]}}\" class=\"imgItem\" />\r\n                        <section class=\"row col-md-12\">\r\n                            <section class=\"col-md-6 m-b-10\">\r\n                                <h4 class=\"card-title\">\r\n                                    {{pathName[bcode[0]?.type_beef]}} {{bcode[0]?.name }} {{bcode[0]?.weight}}\r\n                                    <h6 class=\"area\">{{bcode[0]?.area === 'HCM'?'TP.HCM':'TP. Vũng Tàu'}}</h6>\r\n                                </h4>\r\n                                <a href=\"javascript:void(0)\" class=\"link\">\r\n                                    <i class=\"fa fa-gift\"></i>\r\n                                    <font class=\"font-medium\"> {{bcode[0]?.point}} point</font>\r\n                                </a>\r\n                                <h4 class=\"card-title text-danger\" *ngIf=\"bcode[0]?.saleoff === 0\">{{bcode[0]?.price | number:'1.0-0' }} VNĐ</h4>\r\n                                <h4 class=\"card-title text-danger\" *ngIf=\"bcode[0]?.saleoff > 0\">\r\n                                    <h6 style=\"color: #212121; margin: 0\">\r\n                                        <span class=\"oldPrice\">{{bcode[0]?.price | number:'1.0-0'}} VNĐ</span> -{{bcode[0]?.saleoff | number:'1.0-0'\r\n                                        }}%\r\n                                    </h6>\r\n                                    {{bcode[0]?.salePrice | number:'1.0-0' }} VNĐ\r\n                                </h4>\r\n                                <a class=\"btn m-t-10 btn-rounded btn-outline-success\" *ngIf=\"bcode[0]?.can_buy > 0\">Mua ngay</a>\r\n                                <a class=\"btn m-t-10 btn-rounded btn-outline-danger\" *ngIf=\"bcode[0]?.can_buy < 1\">Hết hàng</a>\r\n                            </section>\r\n                            <section class=\"col-md-6 m-b-10\">\r\n                                <p>cPass: {{bcode[0]?.cPass }}</p>\r\n                                <p matTooltip=\"{{bcode[0]?.description}}\">Trang trại:\r\n                                    <span class=\"card-title pointer\">{{bcode[0]?.nameFarm }}</span>\r\n                                </p>\r\n                                <p matTooltip=\"{{bcode[0]?.address}}\">Apoint:\r\n                                    <span class=\"card-title pointer\">{{bcode[0]?.nameApoint }}</span>\r\n                                </p>\r\n                            </section>\r\n\r\n\r\n                        </section>\r\n                    </section>\r\n\r\n                </div>\r\n\r\n            </div>\r\n        </div>\r\n        <div class=\"col-12\" *ngIf=\"bcode.length > 0\">\r\n            <h5>BCODE Timeline</h5>\r\n            <div class=\"card divTimeLine\">\r\n                <vertical-timeline>\r\n\r\n                    <vertical-timeline-card  [dateValue]=\"bcode[0]?.AWS\">\r\n                        <h4>At WorkShop - Đang nằm tại Xưởng chế biến</h4>\r\n                    </vertical-timeline-card>\r\n\r\n                    <vertical-timeline-card  [dateValue]=\"bcode[0]?.W2D\">\r\n                        <h4>Workshop To Delivery Center - Đang vận chuyển đến Trung tâm giao nhận</h4>\r\n                    </vertical-timeline-card>\r\n\r\n                    <vertical-timeline-card  [dateValue]=\"bcode[0]?.ADC\">\r\n                        <h4>At Delivery Center - Đang nằm ở Trung tâm giao nhận</h4>\r\n                    </vertical-timeline-card>\r\n\r\n                    <vertical-timeline-card  [dateValue]=\"bcode[0]?.D2A\">\r\n                        <h4>Delivery Center To aPoint - Đang vận chuyển từ Trung tâm giao nhận đến aPoint</h4>\r\n                    </vertical-timeline-card>\r\n\r\n                    <vertical-timeline-card  [dateValue]=\"bcode[0]?.AAP\">\r\n                        <h4>At aPoint - Đang nằm tại aPoint</h4>\r\n                    </vertical-timeline-card>\r\n\r\n                    <vertical-timeline-card  [dateValue]=\"bcode[0]?.AAO\">\r\n                        <h4>At aPoint but Ordered - Đang nằm tại aPoint nhưng k/h đã Order</h4>\r\n                    </vertical-timeline-card>\r\n\r\n                    <vertical-timeline-card  [dateValue]=\"bcode[0]?.A2S\">\r\n                        <h4>aPoint to Shipper - aPoint giao cho shipper chuyển hàng đến khách hàng</h4>\r\n                    </vertical-timeline-card>\r\n\r\n                    <vertical-timeline-card  [dateValue]=\"bcode[0]?.S2C\">\r\n                        <h4>Shipper to Customer - Đã giao hàng bởi shipper và khách hàng đã nhận hàng</h4>\r\n                    </vertical-timeline-card>\r\n\r\n                </vertical-timeline>\r\n            </div>\r\n        </div>\r\n\r\n    </div>\r\n</div>"

/***/ }),

/***/ "./src/app/beef-origin/beef-origin.component.scss":
/*!********************************************************!*\
  !*** ./src/app/beef-origin/beef-origin.component.scss ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".imgItem {\n  height: 100px;\n  min-height: 100px;\n  width: 100px;\n  min-width: 100px;\n  border: 3px solid #ddd;\n  border-radius: 100%;\n  margin: 0 20px; }\n\n.oldPrice {\n  font-size: 0.7rem;\n  text-decoration: line-through;\n  margin: 0;\n  color: rgba(0, 0, 0, 0.54);\n  font-weight: 500; }\n\n.oh {\n  padding: 7px 20px; }\n\n.wrapinput {\n  justify-content: center; }\n\n.wrap {\n  display: flex; }\n\n.card-title {\n  width: 100%;\n  height: -webkit-fit-content;\n  height: -moz-fit-content;\n  height: fit-content;\n  margin: 0; }\n\n.wrapButton {\n  justify-content: space-between;\n  display: flex; }\n\n.btnSearch {\n  width: -webkit-fit-content;\n  width: -moz-fit-content;\n  width: fit-content; }\n\n.routeActive {\n  background: rgba(0, 0, 0, 0.04); }\n\n.cardItem {\n  margin: 5px;\n  min-width: 200px;\n  max-width: 200px;\n  position: relative;\n  display: flex;\n  flex-direction: column; }\n\n.cardbody {\n  flex-grow: 1; }\n\n.steamline {\n  padding: 0;\n  margin: 0; }\n\n.oldPrice {\n  font-size: 0.7rem;\n  text-decoration: line-through;\n  margin: 0; }\n\n.bcode-sm {\n  font-size: 0.777rem;\n  margin: 0; }\n\n.divPoint {\n  position: absolute;\n  left: -6px;\n  background-color: #44b5ff;\n  color: #fff;\n  top: 5px;\n  padding: 0 5px;\n  min-width: 43px;\n  font-size: 0.8rem;\n  font-weight: 500;\n  white-space: nowrap; }\n\n.divPoint::before {\n  content: \"\";\n  display: inline-block;\n  position: absolute;\n  -webkit-transform: rotate(45deg);\n  transform: rotate(45deg);\n  left: .1rem;\n  bottom: -.2rem;\n  border: .21rem solid transparent;\n  border-bottom-color: #0971c2; }\n\n.divSaleoff {\n  position: absolute;\n  right: 0;\n  background-color: rgba(255, 212, 36, 0.9);\n  padding: 5px;\n  top: 0;\n  max-width: 43px;\n  min-width: 43px;\n  font-size: 0.8rem;\n  font-weight: 500;\n  white-space: nowrap; }\n\n.divSaleoff::after {\n  content: \"\";\n  width: 0;\n  height: 0;\n  left: 0;\n  bottom: -4px;\n  border-style: solid;\n  position: absolute;\n  border-width: 0 21.5px 4px;\n  border-color: transparent rgba(255, 212, 36, 0.9); }\n\np {\n  margin: 0; }\n\n.area {\n  color: #9e9e9e;\n  white-space: nowrap;\n  overflow: hidden;\n  margin: 5px 0; }\n\n.divTimeLine {\n  padding-bottom: 60px;\n  background: transparent; }\n\n@media (max-width: 720px) {\n  .cardItem {\n    max-width: 250px; }\n  .wrap {\n    flex-direction: column; }\n  .imgItem {\n    -ms-grid-row-align: center;\n        align-self: center;\n    margin: 20px; }\n  .selectPathBeef {\n    justify-content: unset; } }\n"

/***/ }),

/***/ "./src/app/beef-origin/beef-origin.component.ts":
/*!******************************************************!*\
  !*** ./src/app/beef-origin/beef-origin.component.ts ***!
  \******************************************************/
/*! exports provided: BeefOriginComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BeefOriginComponent", function() { return BeefOriginComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_product_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../services/product.service */ "./src/app/services/product.service.ts");
/* harmony import */ var _services_user_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../services/user.service */ "./src/app/services/user.service.ts");
/* harmony import */ var _services_loading_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../services/loading.service */ "./src/app/services/loading.service.ts");
/* harmony import */ var _node_modules_angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../node_modules/@angular/router */ "./node_modules/@angular/router/fesm5/router.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var BeefOriginComponent = /** @class */ (function () {
    function BeefOriginComponent(productService, userService, loadingService, route) {
        this.productService = productService;
        this.userService = userService;
        this.loadingService = loadingService;
        this.route = route;
        this.bcode = [];
        this.listMenu = [
            { name: 'Beef Brahman', id: '1', route: '/app/shopping/beef/1' },
            { name: 'Beef Red Sindhi', id: '2', route: '/app/shopping/beef/2' },
            { name: 'Beef USA', id: '3', route: '/app/shopping/beef/3' },
            { name: 'Beef Kobe', id: '4', route: '/app/shopping/beef/4' },
            { name: 'Milk', id: '', route: '/app/shopping/milk' },
            { name: 'Bounes', id: '', route: '/app/shopping/bounes' },
        ];
        this.imgBeef = [
            '',
            'http://i1150.photobucket.com/albums/o614/manhtung159/Alego/chuck_zpsv6laku8r.png',
            'http://i1150.photobucket.com/albums/o614/manhtung159/Alego/ribs_zpsmmcrurk8.jpg',
            'http://i1150.photobucket.com/albums/o614/manhtung159/Alego/loin_zps1gii9mkq.jpg',
            'http://i1150.photobucket.com/albums/o614/manhtung159/Alego/round_zpsy0su2h28.jpg',
            'http://i1150.photobucket.com/albums/o614/manhtung159/Alego/brisket_zps4o4sfa0w.jpg',
            'http://i1150.photobucket.com/albums/o614/manhtung159/Alego/plate_zpsky0yrjco.jpg',
            'http://i1150.photobucket.com/albums/o614/manhtung159/Alego/flank_zpsm2wr3yk1.jpg',
        ];
        this.pathName = [
            '',
            'Chuck',
            'Ribs',
            'Loin',
            'Round',
            'Brisket',
            'Plate',
            'Flank',
        ];
        this.loadProfile();
    }
    BeefOriginComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.route.params.subscribe(function (params) {
            if (params['id']) {
                _this.id_bcode = '';
                _this.bcode = [];
                _this.loadingService.start();
                setTimeout(function () {
                    _this.id_bcode = params['id'];
                    _this.getItem(_this.id_bcode);
                    _this.loadingService.stop();
                }, 888);
            }
        });
    };
    BeefOriginComponent.prototype.loadProfile = function () {
        this.currentUser = this.userService.getCurrentUser();
    };
    BeefOriginComponent.prototype.getItem = function (id) {
        var _this = this;
        this.productService.get(id).subscribe(function (res) {
            if (res.message === false) {
                return;
            }
            res.map(function (item) {
                if (item.saleoff > 0) {
                    item.salePrice = item.price - ((item.price * item.saleoff) / 100);
                }
                _this.bcode.push(item);
            });
            console.log(_this.bcode);
        });
    };
    BeefOriginComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-beef-origin',
            template: __webpack_require__(/*! ./beef-origin.component.html */ "./src/app/beef-origin/beef-origin.component.html"),
            styles: [__webpack_require__(/*! ./beef-origin.component.scss */ "./src/app/beef-origin/beef-origin.component.scss")],
        }),
        __metadata("design:paramtypes", [_services_product_service__WEBPACK_IMPORTED_MODULE_1__["ProductService"],
            _services_user_service__WEBPACK_IMPORTED_MODULE_2__["UserService"],
            _services_loading_service__WEBPACK_IMPORTED_MODULE_3__["LoadingService"],
            _node_modules_angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"]])
    ], BeefOriginComponent);
    return BeefOriginComponent;
}());



/***/ }),

/***/ "./src/app/chat/chat.component.html":
/*!******************************************!*\
  !*** ./src/app/chat/chat.component.html ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"message-box\">\r\n    <div class=\"container-mes row {{(i === messages.length - 1)? 'last-mes': ''}}\" [ngClass]=\"message.id_user !== currentUser.id_user?'rightMess':''\"\r\n        *ngFor=\"let message of messages;let i = index\">\r\n        <div class=\"avatar\">\r\n            <img src=\"{{message.avatar?message.avatar:'https://cdn.pose.com.vn/legacy/images/baiviet/201601/Hot-girl-Nene-dinh-dam-cua-Thai-khoe-anh-tung-tang-du-hi-o-Sai-Gon_426_thumb.jpg'}}\"\r\n                alt=\"Avatar\" style=\"width: 40px;height: 40px;\">\r\n        </div>\r\n        <div class=\"info-mes\">\r\n            <h6 class=\"nameUser\">{{message.name}}</h6>\r\n            <p>{{message.text}}</p>\r\n            <span class=\"time-right\">{{computeDate(message.time)}}</span>\r\n        </div>\r\n    </div>\r\n</div>\r\n<div class=\"col-md-12 row form-chat\">\r\n    <mat-form-field class=\"input-mes\" [floatLabel]=\"'never'\">\r\n        <mat-label>Tin nhắn</mat-label>\r\n        <textarea matInput #chatInput (keyup.enter)=\"sendMessage()\" [(ngModel)]=\"message\" cdkTextareaAutosize #autosize=\"cdkTextareaAutosize\"\r\n            cdkAutosizeMinRows=\"3\" cdkAutosizeMaxRows=\"3\"></textarea>\r\n    </mat-form-field>\r\n    <button (click)=\"sendMessage()\" class=\"btnSend\" mat-raised-button color=\"primary\">\r\n        <mat-icon>send</mat-icon>\r\n        Gởi\r\n    </button>\r\n</div>"

/***/ }),

/***/ "./src/app/chat/chat.component.scss":
/*!******************************************!*\
  !*** ./src/app/chat/chat.component.scss ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".imgItem {\n  height: 100px;\n  width: 100px;\n  border: 3px solid #ddd;\n  border-radius: 100%; }\n\n.iconInButton {\n  font-size: 1rem;\n  line-height: 1.3rem; }\n\n.divWrapItem {\n  justify-content: space-evenly; }\n\n.cardItem {\n  margin: 5px; }\n\n.steamline {\n  padding: 0;\n  margin: 0; }\n\n.rightMess {\n  flex-direction: row-reverse; }\n\n.container-mes {\n  border-radius: 5px;\n  padding: 10px;\n  margin: 10px auto; }\n\n.darker {\n  border-color: #ccc;\n  background-color: #ddd; }\n\n.message-box {\n  overflow: auto;\n  height: calc(100vh - 230px); }\n\n.container-mes::after {\n  content: \"\";\n  clear: both;\n  display: table; }\n\n.container-mes img {\n  float: left;\n  max-width: 40px;\n  width: 100%;\n  margin-right: 20px;\n  border-radius: 50%; }\n\n.avatar {\n  max-width: 40px;\n  margin: 0 10px 10px 10px;\n  min-width: 40px; }\n\n.nameUser {\n  font-weight: 500;\n  margin-bottom: 4px; }\n\n.info-mes {\n  max-width: calc(100% - 80px);\n  margin: 0px 10px 0 0; }\n\n.container-mes img.right {\n  float: right;\n  margin-left: 20px;\n  margin-right: 0; }\n\n.time-right {\n  color: #aaa; }\n\n.time-left {\n  float: left;\n  color: #999; }\n\n.input-mes {\n  margin: 0px 10px 0 0;\n  flex: 1; }\n\n.form-chat {\n  border-top: 0.5px solid #dedede;\n  padding-top: 10px;\n  margin-top: 10px;\n  margin-left: 0px !important;\n  display: flex; }\n\n.form-chat button {\n  height: 36px !important;\n  margin: auto !important; }\n\np {\n  word-wrap: break-word;\n  color: #333;\n  font-size: 1rem;\n  margin: 0;\n  background: #fff;\n  border-radius: 4rem;\n  padding: 6px 16px; }\n\n@media (max-width: 720px) {\n  .message-box {\n    overflow: auto;\n    height: calc(100vh - 230px); }\n  .form-chat button {\n    width: auto; } }\n"

/***/ }),

/***/ "./src/app/chat/chat.component.ts":
/*!****************************************!*\
  !*** ./src/app/chat/chat.component.ts ***!
  \****************************************/
/*! exports provided: ChatComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ChatComponent", function() { return ChatComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_chat_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../services/chat.service */ "./src/app/services/chat.service.ts");
/* harmony import */ var _services_user_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../services/user.service */ "./src/app/services/user.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var ChatComponent = /** @class */ (function () {
    function ChatComponent(chatService, userService, renderer) {
        this.chatService = chatService;
        this.userService = userService;
        this.renderer = renderer;
        this.messages = [];
        this.loadProfile();
    }
    ChatComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.connection = this.chatService.getMessages().subscribe(function (message) {
            _this.messages.push(message);
        });
        // this.connection = this.chatService.getUsers().subscribe(users => {
        //   console.log(users);
        //   this.users = users;
        // });
    };
    ChatComponent.prototype.ngOnDestroy = function () {
        // this.connection.unsubscribe();
    };
    ChatComponent.prototype.loadProfile = function () {
        this.currentUser = this.userService.getCurrentUser();
    };
    ChatComponent.prototype.sendMessage = function () {
        this.chatService.sendMessage(Object.assign({}, JSON.parse(localStorage.getItem('CurrentUser')), {
            message: this.message
        }));
        setTimeout(function () {
            var total = 0;
            var parent = document.getElementsByClassName('message-box')[0];
            var element = document.getElementsByClassName('last-mes')[0];
            for (var index = 0; index < parent.children.length; index++) {
                total += parent.children[index].clientHeight;
            }
            parent.scrollTo({ top: total - element.clientHeight, behavior: 'smooth' });
        }, 500);
        this.message = '';
    };
    ChatComponent.prototype.computeDate = function (time) {
        var milisecondsDiff = new Date().getTime() - new Date(time).getTime();
        var oneSecond = 1000;
        var oneMinute = oneSecond * 60;
        var oneHour = oneMinute * 60;
        var oneDay = oneHour * 24;
        var seconds = Math.floor((milisecondsDiff % oneMinute) / oneSecond);
        var minutes = Math.floor((milisecondsDiff % oneHour) / oneMinute);
        var hours = Math.floor((milisecondsDiff % oneDay) / oneHour);
        var days = Math.floor(milisecondsDiff / oneDay);
        var timeString = '';
        if (days !== 0) {
            timeString += (days !== 1) ? (days + ' ngày trước  ') : (days + ' ngày trước ');
            return timeString;
        }
        if (hours !== 0) {
            timeString += (hours !== 1) ? (hours + ' giờ trước ') : (hours + ' giờ trước ');
            return timeString;
        }
        if (minutes !== 0) {
            timeString += (minutes !== 1) ? (minutes + ' phút trước ') : (minutes + ' phút trước ');
            return timeString;
        }
        if (seconds !== 0 || milisecondsDiff < 1000) {
            timeString += (seconds !== 1) ? (seconds + ' giây trước ') : (seconds + ' giây trước ');
            return timeString;
        }
    };
    ChatComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-chat',
            template: __webpack_require__(/*! ./chat.component.html */ "./src/app/chat/chat.component.html"),
            styles: [__webpack_require__(/*! ./chat.component.scss */ "./src/app/chat/chat.component.scss")],
        }),
        __metadata("design:paramtypes", [_services_chat_service__WEBPACK_IMPORTED_MODULE_1__["ChatService"],
            _services_user_service__WEBPACK_IMPORTED_MODULE_2__["UserService"],
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["Renderer"]])
    ], ChatComponent);
    return ChatComponent;
}());



/***/ }),

/***/ "./src/app/layout/header/header.component.html":
/*!*****************************************************!*\
  !*** ./src/app/layout/header/header.component.html ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<header class=\"topbar\">\r\n    <nav class=\"navbar top-navbar navbar-expand-md navbar-dark\">\r\n        <div class=\"navbar-header\">\r\n            <a class=\"navbar-brand\" href=\"#\">\r\n                <!-- Logo icon -->\r\n                <b>\r\n                    <img src=\"../../../assets/image/logo.png\" alt=\"homepage\" class=\"logoHeader dark-logo\" />\r\n                </b>\r\n            </a>\r\n        </div>\r\n\r\n        <div class=\"navbar-collapse\">\r\n\r\n            <ul class=\"navbar-nav mr-auto full-width\">\r\n\r\n                <li class=\"nav-item hidden-sm-up\">\r\n                    <a class=\"nav-link nav-toggler waves-effect waves-light\" href=\"javascript:void(0)\">\r\n                        <i class=\"ti-menu\"></i>\r\n                    </a>\r\n                </li>\r\n\r\n                <li class=\"nav-item search-box full-width\">\r\n                    <a class=\"nav-link waves-effect waves-dark full-width\" href=\"javascript:void(0)\">\r\n                        <i class=\"fa fa-search\"></i>\r\n                    </a>\r\n                    <form class=\"app-search\">\r\n                        <input type=\"text\" class=\"form-control\" (keyup.enter)=\"search($event.target.value)\" placeholder=\"Search &amp; enter\">\r\n                        <a class=\"srh-btn\">\r\n                            <i class=\"fa fa-times\"></i>\r\n                        </a>\r\n                    </form>\r\n                </li>\r\n            </ul>\r\n            <ul class=\"navbar-nav my-lg-0\">\r\n\r\n                <li class=\"nav-item\">\r\n                    <a (click)=\"openCart()\" class=\"nav-link iconShoppingCard text-muted waves-effect waves-dark\" aria-haspopup=\"true\" aria-expanded=\"false\">\r\n                        <mat-icon matBadge=\"{{orderProduct.length}}\" matBadgeColor=\"warn\">shopping_cart</mat-icon>\r\n                    </a>\r\n                </li>\r\n                <li class=\"nav-item\">\r\n                    <a class=\"nav-link text-muted waves-effect waves-dark\" matTooltip=\"{{currentUser?.name}}\" [routerLink]=\"['/app/profiles']\" aria-haspopup=\"true\" aria-expanded=\"false\">\r\n                        <img [src]=\"currentUser?.avatar?currentUser?.avatar:'http://i1150.photobucket.com/albums/o614/manhtung159/none-user_zpsz4mxlhzn.jpg'\" alt=\"user\" class=\"img-circle\" width=\"34\" height=\"34\">\r\n                    </a>\r\n                </li>\r\n\r\n            </ul>\r\n        </div>\r\n    </nav>\r\n</header>"

/***/ }),

/***/ "./src/app/layout/header/header.component.scss":
/*!*****************************************************!*\
  !*** ./src/app/layout/header/header.component.scss ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".topbar {\n  background: #FFC000;\n  max-height: 65px; }\n\n.logoHeader {\n  height: auto;\n  width: 100px; }\n\n.iconShoppingCard {\n  display: flex;\n  padding-top: 25px; }\n\n.nav-link {\n  padding: 0 16px;\n  height: 65px;\n  display: flex;\n  align-items: center; }\n\n@media (max-width: 767px) {\n  .logoHeader {\n    height: 16px;\n    width: auto; } }\n"

/***/ }),

/***/ "./src/app/layout/header/header.component.ts":
/*!***************************************************!*\
  !*** ./src/app/layout/header/header.component.ts ***!
  \***************************************************/
/*! exports provided: HeaderComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HeaderComponent", function() { return HeaderComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_user_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../services/user.service */ "./src/app/services/user.service.ts");
/* harmony import */ var _services_direction_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../services/direction.service */ "./src/app/services/direction.service.ts");
/* harmony import */ var _node_modules_angular_material__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../node_modules/@angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _node_modules_ngx_toastr__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../node_modules/ngx-toastr */ "./node_modules/ngx-toastr/toastr.es5.js");
/* harmony import */ var _shopping_shopping_cart_shopping_cart_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../shopping/shopping-cart/shopping-cart.component */ "./src/app/shopping/shopping-cart/shopping-cart.component.ts");
/* harmony import */ var _node_modules_angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../../node_modules/@angular/router */ "./node_modules/@angular/router/fesm5/router.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var HeaderComponent = /** @class */ (function () {
    function HeaderComponent(userService, cdRef, directionService, dialog, router, toastr) {
        this.userService = userService;
        this.cdRef = cdRef;
        this.directionService = directionService;
        this.dialog = dialog;
        this.router = router;
        this.toastr = toastr;
        this.orderProduct = [];
        this.loadProfile();
    }
    HeaderComponent.prototype.ngOnInit = function () {
    };
    HeaderComponent.prototype.loadProfile = function () {
        this.currentUser = this.userService.getCurrentUser();
    };
    HeaderComponent.prototype.ngAfterViewChecked = function () {
        this.data = this.directionService.getData();
        this.orderProduct = this.directionService.getData()[this.data.length - 1];
        this.cdRef.detectChanges();
    };
    HeaderComponent.prototype.openCart = function () {
        if (this.orderProduct.length > 0) {
            this.dialog.open(_shopping_shopping_cart_shopping_cart_component__WEBPACK_IMPORTED_MODULE_5__["ShoppingCartComponent"], {
                width: 'auto',
                height: 'auto',
                data: JSON.parse(localStorage.getItem('orderProduct'))
            });
        }
        else {
            this.toastr.warning('', 'Giỏ hàng rỗng', {
                progressBar: true,
                positionClass: 'toast-bottom-right',
                timeOut: 2000
            });
        }
    };
    HeaderComponent.prototype.search = function (event) {
        if (Number(event)) {
            this.router.navigateByUrl('/app/beeforigin/' + event);
        }
        else {
            this.toastr.warning('', 'BCode phải là số', {
                progressBar: true,
                positionClass: 'toast-bottom-right',
                timeOut: 2000
            });
        }
    };
    HeaderComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-header',
            template: __webpack_require__(/*! ./header.component.html */ "./src/app/layout/header/header.component.html"),
            styles: [__webpack_require__(/*! ./header.component.scss */ "./src/app/layout/header/header.component.scss")],
        }),
        __metadata("design:paramtypes", [_services_user_service__WEBPACK_IMPORTED_MODULE_1__["UserService"],
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectorRef"],
            _services_direction_service__WEBPACK_IMPORTED_MODULE_2__["DirectionService"],
            _node_modules_angular_material__WEBPACK_IMPORTED_MODULE_3__["MatDialog"],
            _node_modules_angular_router__WEBPACK_IMPORTED_MODULE_6__["Router"],
            _node_modules_ngx_toastr__WEBPACK_IMPORTED_MODULE_4__["ToastrService"]])
    ], HeaderComponent);
    return HeaderComponent;
}());



/***/ }),

/***/ "./src/app/layout/main.component.html":
/*!********************************************!*\
  !*** ./src/app/layout/main.component.html ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-header></app-header>\r\n<app-sidebar></app-sidebar>\r\n<div class=\"page-wrapper\">\r\n    <router-outlet></router-outlet>\r\n</div>\r\n<footer class=\"footer\">\r\n    © 2018 AgriLego by ManhTung\r\n</footer>"

/***/ }),

/***/ "./src/app/layout/main.component.scss":
/*!********************************************!*\
  !*** ./src/app/layout/main.component.scss ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/layout/main.component.ts":
/*!******************************************!*\
  !*** ./src/app/layout/main.component.ts ***!
  \******************************************/
/*! exports provided: MainComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MainComponent", function() { return MainComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var MainComponent = /** @class */ (function () {
    function MainComponent() {
    }
    MainComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-main',
            template: __webpack_require__(/*! ./main.component.html */ "./src/app/layout/main.component.html"),
            styles: [__webpack_require__(/*! ./main.component.scss */ "./src/app/layout/main.component.scss")],
        }),
        __metadata("design:paramtypes", [])
    ], MainComponent);
    return MainComponent;
}());



/***/ }),

/***/ "./src/app/layout/sidebar/sidebar.component.html":
/*!*******************************************************!*\
  !*** ./src/app/layout/sidebar/sidebar.component.html ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<aside class=\"left-sidebar\">\r\n    <div class=\"d-flex no-block nav-text-box align-items-center\">\r\n        <span>\r\n            <img src=\"../../../assets/image/logo.png\" class=\"logoSidebar\">\r\n        </span>\r\n        <a class=\"waves-effect waves-dark ml-auto hidden-sm-down\" href=\"javascript:void(0)\">\r\n            <i class=\"ti-menu\"></i>\r\n        </a>\r\n        <a class=\"nav-toggler waves-effect waves-dark ml-auto hidden-sm-up\" href=\"javascript:void(0)\">\r\n            <i class=\"ti-menu ti-close\"></i>\r\n        </a>\r\n    </div>\r\n    <!-- Sidebar scroll-->\r\n    <div class=\"scroll-sidebar\">\r\n        <!-- Sidebar navigation-->\r\n        <nav class=\"sidebar-nav\">\r\n            <ul id=\"sidebarnav\">\r\n                <li>\r\n                    <a class=\"waves-effect waves-dark\" [routerLink]=\"['/app/shopping']\" aria-expanded=\"false\">\r\n                        <i class=\"fa fa-home\"></i>\r\n                        <span class=\"hide-menu\">{{'Shopping' | translate}}</span>\r\n                    </a>\r\n                </li>\r\n                <li>\r\n                    <a class=\"waves-effect waves-dark\" [routerLink]=\"['/app/orders']\" aria-expanded=\"false\">\r\n                        <i class=\"fa fa-shopping-cart\"></i>\r\n                        <span class=\"hide-menu\"></span>{{'order' | translate}}</a>\r\n                </li>\r\n                <li>\r\n                    <a class=\"waves-effect waves-dark\" [routerLink]=\"['/app/profiles']\" aria-expanded=\"false\">\r\n                        <i class=\"fa fa-user-circle-o\"></i>\r\n                        <span class=\"hide-menu\">{{'Profile' | translate}}</span>\r\n                    </a>\r\n                </li>\r\n                <li>\r\n                    <a class=\"waves-effect waves-dark\" [routerLink]=\"['/app/chat']\" aria-expanded=\"false\">\r\n                        <i class=\"fa fa-comments\"></i>\r\n                        <span class=\"hide-menu\"></span>{{'Group chat' | translate}}</a>\r\n                </li>\r\n                <li>\r\n                    <a class=\"waves-effect waves-dark\" [routerLink]=\"['/app/findstore']\" aria-expanded=\"false\">\r\n                        <i class=\"fa fa-globe\"></i>\r\n                        <span class=\"hide-menu\"></span>{{'Find stores' | translate}}</a>\r\n                </li>\r\n                <li>\r\n                    <a class=\"waves-effect waves-dark\" (click)=\"logout()\" aria-expanded=\"false\">\r\n                        <i class=\"fa fa-sign-out\"></i>\r\n                        <span class=\"hide-menu\"></span>{{'logOut' | translate}}</a>\r\n                </li>\r\n            </ul>\r\n        </nav>\r\n        <!-- End Sidebar navigation -->\r\n    </div>\r\n    <!-- End Sidebar scroll-->\r\n</aside>"

/***/ }),

/***/ "./src/app/layout/sidebar/sidebar.component.scss":
/*!*******************************************************!*\
  !*** ./src/app/layout/sidebar/sidebar.component.scss ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".logoSidebar {\n  height: auto;\n  width: 100px; }\n\n.left-sidebar .nav-text-box {\n  padding: 15px 25px 13px 15px; }\n"

/***/ }),

/***/ "./src/app/layout/sidebar/sidebar.component.ts":
/*!*****************************************************!*\
  !*** ./src/app/layout/sidebar/sidebar.component.ts ***!
  \*****************************************************/
/*! exports provided: SidebarComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SidebarComponent", function() { return SidebarComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_user_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../services/user.service */ "./src/app/services/user.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var SidebarComponent = /** @class */ (function () {
    function SidebarComponent(userService) {
        this.userService = userService;
    }
    SidebarComponent.prototype.logout = function () {
        this.userService.logout();
    };
    SidebarComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-sidebar',
            template: __webpack_require__(/*! ./sidebar.component.html */ "./src/app/layout/sidebar/sidebar.component.html"),
            styles: [__webpack_require__(/*! ./sidebar.component.scss */ "./src/app/layout/sidebar/sidebar.component.scss")],
        }),
        __metadata("design:paramtypes", [_services_user_service__WEBPACK_IMPORTED_MODULE_1__["UserService"]])
    ], SidebarComponent);
    return SidebarComponent;
}());



/***/ }),

/***/ "./src/app/material.module.ts":
/*!************************************!*\
  !*** ./src/app/material.module.ts ***!
  \************************************/
/*! exports provided: MaterialModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MaterialModule", function() { return MaterialModule; });
/* harmony import */ var _angular_cdk_table__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/cdk/table */ "./node_modules/@angular/cdk/esm5/table.es5.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var MaterialModule = /** @class */ (function () {
    function MaterialModule() {
    }
    MaterialModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            exports: [
                _angular_cdk_table__WEBPACK_IMPORTED_MODULE_0__["CdkTableModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatBadgeModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatBottomSheetModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatTreeModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatAutocompleteModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatButtonModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatButtonToggleModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatCardModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatCheckboxModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatChipsModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatStepperModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatDatepickerModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatDialogModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatDividerModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatExpansionModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatGridListModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatIconModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatInputModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatListModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatMenuModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatNativeDateModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatPaginatorModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatProgressBarModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatProgressSpinnerModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatRadioModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatRippleModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatSelectModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatSidenavModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatSliderModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatSlideToggleModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatSnackBarModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatSortModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatTableModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatTabsModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatToolbarModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatTooltipModule"],
            ]
        })
    ], MaterialModule);
    return MaterialModule;
}());



/***/ }),

/***/ "./src/app/orders/dialog-orders/dialog-order-details.component.html":
/*!**************************************************************************!*\
  !*** ./src/app/orders/dialog-orders/dialog-order-details.component.html ***!
  \**************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<mat-toolbar class=\"toolbar\">\r\n    <mat-toolbar-row>\r\n        <span>{{'orderDetail' | translate}} {{'#' + data?.id_order }}</span>\r\n        <span class=\"fill-space\"></span>\r\n        <button mat-icon-button tabindex=\"-1\" (click)=\"closeDialog()\">\r\n            <mat-icon>clear</mat-icon>\r\n        </button>\r\n    </mat-toolbar-row>\r\n</mat-toolbar>\r\n<section class=\"divWrap\">\r\n    <div class=\"br-icon\" [ngClass]=\"data?.status === '1'?'wst1':data?.status === '2'?'wst2':(data?.status === '3'?'wst3':(data?.status === '4'?'wst4':'wst0'))\"></div>\r\n    <section class=\"divStatus\">\r\n        <div class=\"col-sm-3\">\r\n            <section class=\"complete-icon\">\r\n                <svg class=\"icon__\" xmlns=\"http://www.w3.org/2000/svg\" x=\"0px\" y=\"0px\" width=\"40\" height=\"40\" viewBox=\"0 0 252 252\">\r\n                    <g fill=\"none\" fill-rule=\"nonzero\" stroke=\"none\" stroke-width=\"1\" stroke-linecap=\"butt\" stroke-linejoin=\"miter\" stroke-miterlimit=\"10\"\r\n                        stroke-dasharray=\"\" stroke-dashoffset=\"0\" font-family=\"none\" font-weight=\"none\" font-size=\"none\" text-anchor=\"none\"\r\n                        style=\"mix-blend-mode: normal\">\r\n                        <path d=\"M0,252v-252h252v252z\" fill=\"none\"></path>\r\n                        <path [ngClass]=\"data?.status > 0?'statusActive':'statusNone'\" d=\"M0,126c0,-69.58788 56.41212,-126 126,-126c69.58788,0 126,56.41212 126,126c0,69.58788 -56.41212,126 -126,126c-69.58788,0 -126,-56.41212 -126,-126zM126,236.88c61.23733,0 110.88,-49.64267 110.88,-110.88c0,-61.23733 -49.64267,-110.88 -110.88,-110.88c-61.23733,0 -110.88,49.64267 -110.88,110.88c0,61.23733 49.64267,110.88 110.88,110.88z\"></path>\r\n                        <g id=\"original-icon\" [ngClass]=\"data?.status > 0?'statusActive':'statusNone'\">\r\n                            <g id=\"surface1\">\r\n                                <path d=\"M62.496,50.4v151.2h127.008v-151.2zM68.544,56.448h114.912v139.104h-114.912zM89.712,83.664v6.048h72.576v-6.048zM89.712,126v6.048h12.096v-6.048zM110.88,126v6.048h51.408v-6.048zM89.712,144.144v6.048h12.096v-6.048zM110.88,144.144v6.048h51.408v-6.048zM89.712,162.288v6.048h12.096v-6.048zM110.88,162.288v6.048h51.408v-6.048z\"></path>\r\n                            </g>\r\n                        </g>\r\n                        <path d=\"M126,252c-69.58788,0 -126,-56.41212 -126,-126v0c0,-69.58788 56.41212,-126 126,-126v0c69.58788,0 126,56.41212 126,126v0c0,69.58788 -56.41212,126 -126,126z\"\r\n                            fill=\"none\"></path>\r\n                        <path d=\"M126,231.84c-58.45382,0 -105.84,-47.38618 -105.84,-105.84v0c0,-58.45382 47.38618,-105.84 105.84,-105.84v0c58.45382,0 105.84,47.38618 105.84,105.84v0c0,58.45382 -47.38618,105.84 -105.84,105.84z\"\r\n                            fill=\"none\"></path>\r\n                        <path d=\"M126,245.7c-66.10848,0 -119.7,-53.59152 -119.7,-119.7v0c0,-66.10848 53.59152,-119.7 119.7,-119.7h0c66.10848,0 119.7,53.59152 119.7,119.7v0c0,66.10848 -53.59152,119.7 -119.7,119.7z\"\r\n                            fill=\"none\"></path>\r\n                        <path d=\"M126,225.54c-54.97442,0 -99.54,-44.56558 -99.54,-99.54v0c0,-54.97442 44.56558,-99.54 99.54,-99.54h0c54.97442,0 99.54,44.56558 99.54,99.54v0c0,54.97442 -44.56558,99.54 -99.54,99.54z\"\r\n                            fill=\"none\"></path>\r\n                        <path d=\"M126,224.28c-54.27855,0 -98.28,-44.00145 -98.28,-98.28v0c0,-54.27855 44.00145,-98.28 98.28,-98.28v0c54.27855,0 98.28,44.00145 98.28,98.28v0c0,54.27855 -44.00145,98.28 -98.28,98.28z\"\r\n                            fill=\"none\"></path>\r\n                        <path d=\"M126,204.12c-43.14448,0 -78.12,-34.97552 -78.12,-78.12v0c0,-43.14448 34.97552,-78.12 78.12,-78.12v0c43.14448,0 78.12,34.97552 78.12,78.12v0c0,43.14448 -34.97552,78.12 -78.12,78.12z\"\r\n                            fill=\"none\"></path>\r\n                        <path d=\"M126,205.38c-43.84036,0 -79.38,-35.53964 -79.38,-79.38v0c0,-43.84036 35.53964,-79.38 79.38,-79.38v0c43.84036,0 79.38,35.53964 79.38,79.38v0c0,43.84036 -35.53964,79.38 -79.38,79.38z\"\r\n                            fill=\"none\"></path>\r\n                        <path d=\"M126,185.22c-32.7063,0 -59.22,-26.5137 -59.22,-59.22v0c0,-32.7063 26.5137,-59.22 59.22,-59.22v0c32.7063,0 59.22,26.5137 59.22,59.22v0c0,32.7063 -26.5137,59.22 -59.22,59.22z\"\r\n                            fill=\"none\"></path>\r\n                        <path d=\"M126,201.6c-41.75273,0 -75.6,-33.84727 -75.6,-75.6v0c0,-41.75273 33.84727,-75.6 75.6,-75.6v0c41.75273,0 75.6,33.84727 75.6,75.6v0c0,41.75273 -33.84727,75.6 -75.6,75.6z\"\r\n                            fill=\"none\"></path>\r\n                        <path d=\"M126,181.44c-30.61867,0 -55.44,-24.82133 -55.44,-55.44v0c0,-30.61867 24.82133,-55.44 55.44,-55.44v0c30.61867,0 55.44,24.82133 55.44,55.44v0c0,30.61867 -24.82133,55.44 -55.44,55.44z\"\r\n                            fill=\"none\"></path>\r\n                        <path d=\"M126,202.86c-42.44861,0 -76.86,-34.41139 -76.86,-76.86v0c0,-42.44861 34.41139,-76.86 76.86,-76.86h0c42.44861,0 76.86,34.41139 76.86,76.86v0c0,42.44861 -34.41139,76.86 -76.86,76.86z\"\r\n                            fill=\"none\"></path>\r\n                        <path d=\"M126,182.7c-31.31455,0 -56.7,-25.38545 -56.7,-56.7v0c0,-31.31455 25.38545,-56.7 56.7,-56.7h0c31.31455,0 56.7,25.38545 56.7,56.7v0c0,31.31455 -25.38545,56.7 -56.7,56.7z\"\r\n                            fill=\"none\"></path>\r\n                        <path d=\"M126,209.16c-45.928,0 -83.16,-37.232 -83.16,-83.16v0c0,-45.928 37.232,-83.16 83.16,-83.16v0c45.928,0 83.16,37.232 83.16,83.16v0c0,45.928 -37.232,83.16 -83.16,83.16z\"\r\n                            fill=\"none\"></path>\r\n                        <path d=\"M126,189c-34.79394,0 -63,-28.20606 -63,-63v0c0,-34.79394 28.20606,-63 63,-63v0c34.79394,0 63,28.20606 63,63v0c0,34.79394 -28.20606,63 -63,63z\"\r\n                            fill=\"none\"></path>\r\n                        <path d=\"M126,219.24c-51.49503,0 -93.24,-41.74497 -93.24,-93.24v0c0,-51.49503 41.74497,-93.24 93.24,-93.24h0c51.49503,0 93.24,41.74497 93.24,93.24v0c0,51.49503 -41.74497,93.24 -93.24,93.24z\"\r\n                            fill=\"none\"></path>\r\n                        <path d=\"M126,199.08c-40.36097,0 -73.08,-32.71903 -73.08,-73.08v0c0,-40.36097 32.71903,-73.08 73.08,-73.08h0c40.36097,0 73.08,32.71903 73.08,73.08v0c0,40.36097 -32.71903,73.08 -73.08,73.08z\"\r\n                            fill=\"none\"></path>\r\n                        <path d=\"M126,224.28c-54.27855,0 -98.28,-44.00145 -98.28,-98.28v0c0,-54.27855 44.00145,-98.28 98.28,-98.28v0c54.27855,0 98.28,44.00145 98.28,98.28v0c0,54.27855 -44.00145,98.28 -98.28,98.28z\"\r\n                            fill=\"none\"></path>\r\n                        <path d=\"M126,204.12c-43.14448,0 -78.12,-34.97552 -78.12,-78.12v0c0,-43.14448 34.97552,-78.12 78.12,-78.12v0c43.14448,0 78.12,34.97552 78.12,78.12v0c0,43.14448 -34.97552,78.12 -78.12,78.12z\"\r\n                            fill=\"none\"></path>\r\n                        <path d=\"M126,226.8c-55.6703,0 -100.8,-45.1297 -100.8,-100.8v0c0,-55.6703 45.1297,-100.8 100.8,-100.8h0c55.6703,0 100.8,45.1297 100.8,100.8v0c0,55.6703 -45.1297,100.8 -100.8,100.8z\"\r\n                            fill=\"none\"></path>\r\n                        <path d=\"M126,206.64c-44.53624,0 -80.64,-36.10376 -80.64,-80.64v0c0,-44.53624 36.10376,-80.64 80.64,-80.64h0c44.53624,0 80.64,36.10376 80.64,80.64v0c0,44.53624 -36.10376,80.64 -80.64,80.64z\"\r\n                            fill=\"none\"></path>\r\n                        <path d=\"M126,228.06c-56.36618,0 -102.06,-45.69382 -102.06,-102.06v0c0,-56.36618 45.69382,-102.06 102.06,-102.06v0c56.36618,0 102.06,45.69382 102.06,102.06v0c0,56.36618 -45.69382,102.06 -102.06,102.06z\"\r\n                            fill=\"none\"></path>\r\n                        <path d=\"M126,207.9c-45.23212,0 -81.9,-36.66788 -81.9,-81.9v0c0,-45.23212 36.66788,-81.9 81.9,-81.9v0c45.23212,0 81.9,36.66788 81.9,81.9v0c0,45.23212 -36.66788,81.9 -81.9,81.9z\"\r\n                            fill=\"none\"></path>\r\n                        <path d=\"M126,230.58c-57.75794,0 -104.58,-46.82206 -104.58,-104.58v0c0,-57.75794 46.82206,-104.58 104.58,-104.58h0c57.75794,0 104.58,46.82206 104.58,104.58v0c0,57.75794 -46.82206,104.58 -104.58,104.58z\"\r\n                            fill=\"none\"></path>\r\n                        <path d=\"M126,210.42c-46.62388,0 -84.42,-37.79612 -84.42,-84.42v0c0,-46.62388 37.79612,-84.42 84.42,-84.42h0c46.62388,0 84.42,37.79612 84.42,84.42v0c0,46.62388 -37.79612,84.42 -84.42,84.42z\"\r\n                            fill=\"none\"></path>\r\n                        <path d=\"M126,234.36c-59.84558,0 -108.36,-48.51442 -108.36,-108.36v0c0,-59.84558 48.51442,-108.36 108.36,-108.36h0c59.84558,0 108.36,48.51442 108.36,108.36v0c0,59.84558 -48.51442,108.36 -108.36,108.36z\"\r\n                            fill=\"none\"></path>\r\n                        <path d=\"M126,214.2c-48.71151,0 -88.2,-39.48849 -88.2,-88.2v0c0,-48.71151 39.48849,-88.2 88.2,-88.2h0c48.71151,0 88.2,39.48849 88.2,88.2v0c0,48.71151 -39.48849,88.2 -88.2,88.2z\"\r\n                            fill=\"none\"></path>\r\n                        <path d=\"M126,240.66c-63.32497,0 -114.66,-51.33503 -114.66,-114.66v0c0,-63.32497 51.33503,-114.66 114.66,-114.66v0c63.32497,0 114.66,51.33503 114.66,114.66v0c0,63.32497 -51.33503,114.66 -114.66,114.66z\"\r\n                            fill=\"none\"></path>\r\n                        <path d=\"M126,220.5c-52.19091,0 -94.5,-42.30909 -94.5,-94.5v0c0,-52.19091 42.30909,-94.5 94.5,-94.5v0c52.19091,0 94.5,42.30909 94.5,94.5v0c0,52.19091 -42.30909,94.5 -94.5,94.5z\"\r\n                            fill=\"none\"></path>\r\n                        <path d=\"M126,244.44c-65.41261,0 -118.44,-53.02739 -118.44,-118.44v0c0,-65.41261 53.02739,-118.44 118.44,-118.44v0c65.41261,0 118.44,53.02739 118.44,118.44v0c0,65.41261 -53.02739,118.44 -118.44,118.44z\"\r\n                            fill=\"none\"></path>\r\n                        <path d=\"M126,224.28c-54.27855,0 -98.28,-44.00145 -98.28,-98.28v0c0,-54.27855 44.00145,-98.28 98.28,-98.28v0c54.27855,0 98.28,44.00145 98.28,98.28v0c0,54.27855 -44.00145,98.28 -98.28,98.28z\"\r\n                            fill=\"none\"></path>\r\n                        <path d=\"M126,245.7c-66.10848,0 -119.7,-53.59152 -119.7,-119.7v0c0,-66.10848 53.59152,-119.7 119.7,-119.7h0c66.10848,0 119.7,53.59152 119.7,119.7v0c0,66.10848 -53.59152,119.7 -119.7,119.7z\"\r\n                            fill=\"none\"></path>\r\n                        <path d=\"M126,225.54c-54.97442,0 -99.54,-44.56558 -99.54,-99.54v0c0,-54.97442 44.56558,-99.54 99.54,-99.54h0c54.97442,0 99.54,44.56558 99.54,99.54v0c0,54.97442 -44.56558,99.54 -99.54,99.54z\"\r\n                            fill=\"none\"></path>\r\n                        <path d=\"M126,246.96c-66.80436,0 -120.96,-54.15564 -120.96,-120.96v0c0,-66.80436 54.15564,-120.96 120.96,-120.96h0c66.80436,0 120.96,54.15564 120.96,120.96v0c0,66.80436 -54.15564,120.96 -120.96,120.96z\"\r\n                            fill=\"none\"></path>\r\n                        <path d=\"M126,226.8c-55.6703,0 -100.8,-45.1297 -100.8,-100.8v0c0,-55.6703 45.1297,-100.8 100.8,-100.8h0c55.6703,0 100.8,45.1297 100.8,100.8v0c0,55.6703 -45.1297,100.8 -100.8,100.8z\"\r\n                            fill=\"none\"></path>\r\n                        <path d=\"M126,248.22c-67.50024,0 -122.22,-54.71976 -122.22,-122.22v0c0,-67.50024 54.71976,-122.22 122.22,-122.22v0c67.50024,0 122.22,54.71976 122.22,122.22v0c0,67.50024 -54.71976,122.22 -122.22,122.22z\"\r\n                            fill=\"none\"></path>\r\n                        <path d=\"M126,228.06c-56.36618,0 -102.06,-45.69382 -102.06,-102.06v0c0,-56.36618 45.69382,-102.06 102.06,-102.06v0c56.36618,0 102.06,45.69382 102.06,102.06v0c0,56.36618 -45.69382,102.06 -102.06,102.06z\"\r\n                            fill=\"none\"></path>\r\n                        <path d=\"M126,252c-69.58788,0 -126,-56.41212 -126,-126v0c0,-69.58788 56.41212,-126 126,-126v0c69.58788,0 126,56.41212 126,126v0c0,69.58788 -56.41212,126 -126,126z\"\r\n                            fill=\"none\"></path>\r\n                        <path d=\"M126,231.84c-58.45382,0 -105.84,-47.38618 -105.84,-105.84v0c0,-58.45382 47.38618,-105.84 105.84,-105.84v0c58.45382,0 105.84,47.38618 105.84,105.84v0c0,58.45382 -47.38618,105.84 -105.84,105.84z\"\r\n                            fill=\"none\"></path>\r\n                        <path d=\"M126,250.74c-68.892,0 -124.74,-55.848 -124.74,-124.74v0c0,-68.892 55.848,-124.74 124.74,-124.74h0c68.892,0 124.74,55.848 124.74,124.74v0c0,68.892 -55.848,124.74 -124.74,124.74z\"\r\n                            fill=\"none\"></path>\r\n                        <path d=\"M126,230.58c-57.75794,0 -104.58,-46.82206 -104.58,-104.58v0c0,-57.75794 46.82206,-104.58 104.58,-104.58h0c57.75794,0 104.58,46.82206 104.58,104.58v0c0,57.75794 -46.82206,104.58 -104.58,104.58z\"\r\n                            fill=\"none\"></path>\r\n                        <path d=\"M126,246.96c-66.80436,0 -120.96,-54.15564 -120.96,-120.96v0c0,-66.80436 54.15564,-120.96 120.96,-120.96h0c66.80436,0 120.96,54.15564 120.96,120.96v0c0,66.80436 -54.15564,120.96 -120.96,120.96z\"\r\n                            fill=\"none\"></path>\r\n                        <path d=\"M126,226.8c-55.6703,0 -100.8,-45.1297 -100.8,-100.8v0c0,-55.6703 45.1297,-100.8 100.8,-100.8h0c55.6703,0 100.8,45.1297 100.8,100.8v0c0,55.6703 -45.1297,100.8 -100.8,100.8z\"\r\n                            fill=\"none\"></path>\r\n                        <path d=\"M126,243.18c-64.71673,0 -117.18,-52.46327 -117.18,-117.18v0c0,-64.71673 52.46327,-117.18 117.18,-117.18v0c64.71673,0 117.18,52.46327 117.18,117.18v0c0,64.71673 -52.46327,117.18 -117.18,117.18z\"\r\n                            fill=\"none\"></path>\r\n                        <path d=\"M126,223.02c-53.58267,0 -97.02,-43.43733 -97.02,-97.02v0c0,-53.58267 43.43733,-97.02 97.02,-97.02v0c53.58267,0 97.02,43.43733 97.02,97.02v0c0,53.58267 -43.43733,97.02 -97.02,97.02z\"\r\n                            fill=\"none\"></path>\r\n                        <path d=\"M126,239.4c-62.62909,0 -113.4,-50.77091 -113.4,-113.4v0c0,-62.62909 50.77091,-113.4 113.4,-113.4v0c62.62909,0 113.4,50.77091 113.4,113.4v0c0,62.62909 -50.77091,113.4 -113.4,113.4z\"\r\n                            fill=\"none\"></path>\r\n                        <path d=\"M126,219.24c-51.49503,0 -93.24,-41.74497 -93.24,-93.24v0c0,-51.49503 41.74497,-93.24 93.24,-93.24v0c51.49503,0 93.24,41.74497 93.24,93.24v0c0,51.49503 -41.74497,93.24 -93.24,93.24z\"\r\n                            fill=\"none\"></path>\r\n                        <path d=\"M126,238.14c-61.93321,0 -112.14,-50.20679 -112.14,-112.14v0c0,-61.93321 50.20679,-112.14 112.14,-112.14h0c61.93321,0 112.14,50.20679 112.14,112.14v0c0,61.93321 -50.20679,112.14 -112.14,112.14z\"\r\n                            fill=\"none\"></path>\r\n                        <path d=\"M126,217.98c-50.79915,0 -91.98,-41.18085 -91.98,-91.98v0c0,-50.79915 41.18085,-91.98 91.98,-91.98h0c50.79915,0 91.98,41.18085 91.98,91.98v0c0,50.79915 -41.18085,91.98 -91.98,91.98z\"\r\n                            fill=\"none\"></path>\r\n                        <path d=\"M126,236.88c-61.23733,0 -110.88,-49.64267 -110.88,-110.88v0c0,-61.23733 49.64267,-110.88 110.88,-110.88v0c61.23733,0 110.88,49.64267 110.88,110.88v0c0,61.23733 -49.64267,110.88 -110.88,110.88z\"\r\n                            fill=\"none\"></path>\r\n                        <path d=\"M126,216.72c-50.10327,0 -90.72,-40.61673 -90.72,-90.72v0c0,-50.10327 40.61673,-90.72 90.72,-90.72v0c50.10327,0 90.72,40.61673 90.72,90.72v0c0,50.10327 -40.61673,90.72 -90.72,90.72z\"\r\n                            fill=\"none\"></path>\r\n                        <path d=\"M126,235.62c-60.54145,0 -109.62,-49.07855 -109.62,-109.62v0c0,-60.54145 49.07855,-109.62 109.62,-109.62v0c60.54145,0 109.62,49.07855 109.62,109.62v0c0,60.54145 -49.07855,109.62 -109.62,109.62z\"\r\n                            fill=\"none\"></path>\r\n                        <path d=\"M126,215.46c-49.40739,0 -89.46,-40.05261 -89.46,-89.46v0c0,-49.40739 40.05261,-89.46 89.46,-89.46v0c49.40739,0 89.46,40.05261 89.46,89.46v0c0,49.40739 -40.05261,89.46 -89.46,89.46z\"\r\n                            fill=\"none\"></path>\r\n                        <path d=\"M126,233.1c-59.1497,0 -107.1,-47.9503 -107.1,-107.1v0c0,-59.1497 47.9503,-107.1 107.1,-107.1v0c59.1497,0 107.1,47.9503 107.1,107.1v0c0,59.1497 -47.9503,107.1 -107.1,107.1z\"\r\n                            fill=\"none\"></path>\r\n                        <path d=\"M126,212.94c-48.01564,0 -86.94,-38.92436 -86.94,-86.94v0c0,-48.01564 38.92436,-86.94 86.94,-86.94v0c48.01564,0 86.94,38.92436 86.94,86.94v0c0,48.01564 -38.92436,86.94 -86.94,86.94z\"\r\n                            fill=\"none\"></path>\r\n                        <path d=\"M126,231.84c-58.45382,0 -105.84,-47.38618 -105.84,-105.84v0c0,-58.45382 47.38618,-105.84 105.84,-105.84v0c58.45382,0 105.84,47.38618 105.84,105.84v0c0,58.45382 -47.38618,105.84 -105.84,105.84z\"\r\n                            fill=\"none\"></path>\r\n                        <path d=\"M126,211.68c-47.31976,0 -85.68,-38.36024 -85.68,-85.68v0c0,-47.31976 38.36024,-85.68 85.68,-85.68v0c47.31976,0 85.68,38.36024 85.68,85.68v0c0,47.31976 -38.36024,85.68 -85.68,85.68z\"\r\n                            fill=\"none\"></path>\r\n                        <path d=\"M126,229.32c-57.06206,0 -103.32,-46.25794 -103.32,-103.32v0c0,-57.06206 46.25794,-103.32 103.32,-103.32v0c57.06206,0 103.32,46.25794 103.32,103.32v0c0,57.06206 -46.25794,103.32 -103.32,103.32z\"\r\n                            fill=\"none\"></path>\r\n                        <path d=\"M126,209.16c-45.928,0 -83.16,-37.232 -83.16,-83.16v0c0,-45.928 37.232,-83.16 83.16,-83.16v0c45.928,0 83.16,37.232 83.16,83.16v0c0,45.928 -37.232,83.16 -83.16,83.16z\"\r\n                            fill=\"none\"></path>\r\n                        <path d=\"M126,228.06c-56.36618,0 -102.06,-45.69382 -102.06,-102.06v0c0,-56.36618 45.69382,-102.06 102.06,-102.06v0c56.36618,0 102.06,45.69382 102.06,102.06v0c0,56.36618 -45.69382,102.06 -102.06,102.06z\"\r\n                            fill=\"none\"></path>\r\n                        <path d=\"M126,207.9c-45.23212,0 -81.9,-36.66788 -81.9,-81.9v0c0,-45.23212 36.66788,-81.9 81.9,-81.9v0c45.23212,0 81.9,36.66788 81.9,81.9v0c0,45.23212 -36.66788,81.9 -81.9,81.9z\"\r\n                            fill=\"none\"></path>\r\n                        <path d=\"M126,230.58c-57.75794,0 -104.58,-46.82206 -104.58,-104.58v0c0,-57.75794 46.82206,-104.58 104.58,-104.58h0c57.75794,0 104.58,46.82206 104.58,104.58v0c0,57.75794 -46.82206,104.58 -104.58,104.58z\"\r\n                            fill=\"none\"></path>\r\n                        <path d=\"M126,210.42c-46.62388,0 -84.42,-37.79612 -84.42,-84.42v0c0,-46.62388 37.79612,-84.42 84.42,-84.42h0c46.62388,0 84.42,37.79612 84.42,84.42v0c0,46.62388 -37.79612,84.42 -84.42,84.42z\"\r\n                            fill=\"none\"></path>\r\n                        <path d=\"M126,233.1c-59.1497,0 -107.1,-47.9503 -107.1,-107.1v0c0,-59.1497 47.9503,-107.1 107.1,-107.1v0c59.1497,0 107.1,47.9503 107.1,107.1v0c0,59.1497 -47.9503,107.1 -107.1,107.1z\"\r\n                            fill=\"none\"></path>\r\n                        <path d=\"M126,212.94c-48.01564,0 -86.94,-38.92436 -86.94,-86.94v0c0,-48.01564 38.92436,-86.94 86.94,-86.94v0c48.01564,0 86.94,38.92436 86.94,86.94v0c0,48.01564 -38.92436,86.94 -86.94,86.94z\"\r\n                            fill=\"none\"></path>\r\n                        <path d=\"M126,234.36c-59.84558,0 -108.36,-48.51442 -108.36,-108.36v0c0,-59.84558 48.51442,-108.36 108.36,-108.36h0c59.84558,0 108.36,48.51442 108.36,108.36v0c0,59.84558 -48.51442,108.36 -108.36,108.36z\"\r\n                            fill=\"none\"></path>\r\n                        <path d=\"M126,214.2c-48.71151,0 -88.2,-39.48849 -88.2,-88.2v0c0,-48.71151 39.48849,-88.2 88.2,-88.2h0c48.71151,0 88.2,39.48849 88.2,88.2v0c0,48.71151 -39.48849,88.2 -88.2,88.2z\"\r\n                            fill=\"none\"></path>\r\n                        <path d=\"M126,236.88c-61.23733,0 -110.88,-49.64267 -110.88,-110.88v0c0,-61.23733 49.64267,-110.88 110.88,-110.88v0c61.23733,0 110.88,49.64267 110.88,110.88v0c0,61.23733 -49.64267,110.88 -110.88,110.88z\"\r\n                            fill=\"none\"></path>\r\n                        <path d=\"M126,216.72c-50.10327,0 -90.72,-40.61673 -90.72,-90.72v0c0,-50.10327 40.61673,-90.72 90.72,-90.72v0c50.10327,0 90.72,40.61673 90.72,90.72v0c0,50.10327 -40.61673,90.72 -90.72,90.72z\"\r\n                            fill=\"none\"></path>\r\n                        <path d=\"M126,238.14c-61.93321,0 -112.14,-50.20679 -112.14,-112.14v0c0,-61.93321 50.20679,-112.14 112.14,-112.14h0c61.93321,0 112.14,50.20679 112.14,112.14v0c0,61.93321 -50.20679,112.14 -112.14,112.14z\"\r\n                            fill=\"none\"></path>\r\n                        <path d=\"M126,217.98c-50.79915,0 -91.98,-41.18085 -91.98,-91.98v0c0,-50.79915 41.18085,-91.98 91.98,-91.98h0c50.79915,0 91.98,41.18085 91.98,91.98v0c0,50.79915 -41.18085,91.98 -91.98,91.98z\"\r\n                            fill=\"none\"></path>\r\n                        <path d=\"M126,239.4c-62.62909,0 -113.4,-50.77091 -113.4,-113.4v0c0,-62.62909 50.77091,-113.4 113.4,-113.4v0c62.62909,0 113.4,50.77091 113.4,113.4v0c0,62.62909 -50.77091,113.4 -113.4,113.4z\"\r\n                            fill=\"none\"></path>\r\n                        <path d=\"M126,219.24c-51.49503,0 -93.24,-41.74497 -93.24,-93.24v0c0,-51.49503 41.74497,-93.24 93.24,-93.24v0c51.49503,0 93.24,41.74497 93.24,93.24v0c0,51.49503 -41.74497,93.24 -93.24,93.24z\"\r\n                            fill=\"none\"></path>\r\n                        <path d=\"M126,241.92c-64.02085,0 -115.92,-51.89915 -115.92,-115.92v0c0,-64.02085 51.89915,-115.92 115.92,-115.92h0c64.02085,0 115.92,51.89915 115.92,115.92v0c0,64.02085 -51.89915,115.92 -115.92,115.92z\"\r\n                            fill=\"none\"></path>\r\n                        <path d=\"M126,221.76c-52.88679,0 -95.76,-42.87321 -95.76,-95.76v0c0,-52.88679 42.87321,-95.76 95.76,-95.76h0c52.88679,0 95.76,42.87321 95.76,95.76v0c0,52.88679 -42.87321,95.76 -95.76,95.76z\"\r\n                            fill=\"none\"></path>\r\n                        <path d=\"M126,244.44c-65.41261,0 -118.44,-53.02739 -118.44,-118.44v0c0,-65.41261 53.02739,-118.44 118.44,-118.44v0c65.41261,0 118.44,53.02739 118.44,118.44v0c0,65.41261 -53.02739,118.44 -118.44,118.44z\"\r\n                            fill=\"none\"></path>\r\n                        <path d=\"M126,224.28c-54.27855,0 -98.28,-44.00145 -98.28,-98.28v0c0,-54.27855 44.00145,-98.28 98.28,-98.28v0c54.27855,0 98.28,44.00145 98.28,98.28v0c0,54.27855 -44.00145,98.28 -98.28,98.28z\"\r\n                            fill=\"none\"></path>\r\n                        <path d=\"M126,246.96c-66.80436,0 -120.96,-54.15564 -120.96,-120.96v0c0,-66.80436 54.15564,-120.96 120.96,-120.96h0c66.80436,0 120.96,54.15564 120.96,120.96v0c0,66.80436 -54.15564,120.96 -120.96,120.96z\"\r\n                            fill=\"none\"></path>\r\n                        <path d=\"M126,226.8c-55.6703,0 -100.8,-45.1297 -100.8,-100.8v0c0,-55.6703 45.1297,-100.8 100.8,-100.8h0c55.6703,0 100.8,45.1297 100.8,100.8v0c0,55.6703 -45.1297,100.8 -100.8,100.8z\"\r\n                            fill=\"none\"></path>\r\n                        <path d=\"M126,250.74c-68.892,0 -124.74,-55.848 -124.74,-124.74v0c0,-68.892 55.848,-124.74 124.74,-124.74h0c68.892,0 124.74,55.848 124.74,124.74v0c0,68.892 -55.848,124.74 -124.74,124.74z\"\r\n                            fill=\"none\"></path>\r\n                        <path d=\"M126,230.58c-57.75794,0 -104.58,-46.82206 -104.58,-104.58v0c0,-57.75794 46.82206,-104.58 104.58,-104.58h0c57.75794,0 104.58,46.82206 104.58,104.58v0c0,57.75794 -46.82206,104.58 -104.58,104.58z\"\r\n                            fill=\"none\"></path>\r\n                        <path d=\"M126,252c-69.58788,0 -126,-56.41212 -126,-126v0c0,-69.58788 56.41212,-126 126,-126v0c69.58788,0 126,56.41212 126,126v0c0,69.58788 -56.41212,126 -126,126z\"\r\n                            fill=\"none\"></path>\r\n                        <path d=\"M126,231.84c-58.45382,0 -105.84,-47.38618 -105.84,-105.84v0c0,-58.45382 47.38618,-105.84 105.84,-105.84v0c58.45382,0 105.84,47.38618 105.84,105.84v0c0,58.45382 -47.38618,105.84 -105.84,105.84z\"\r\n                            fill=\"none\"></path>\r\n                        <path d=\"M126,252c-69.58788,0 -126,-56.41212 -126,-126v0c0,-69.58788 56.41212,-126 126,-126v0c69.58788,0 126,56.41212 126,126v0c0,69.58788 -56.41212,126 -126,126z\"\r\n                            fill=\"none\"></path>\r\n                        <path d=\"M126,231.84c-58.45382,0 -105.84,-47.38618 -105.84,-105.84v0c0,-58.45382 47.38618,-105.84 105.84,-105.84v0c58.45382,0 105.84,47.38618 105.84,105.84v0c0,58.45382 -47.38618,105.84 -105.84,105.84z\"\r\n                            fill=\"none\"></path>\r\n                        <path d=\"M126,252c-69.58788,0 -126,-56.41212 -126,-126v0c0,-69.58788 56.41212,-126 126,-126v0c69.58788,0 126,56.41212 126,126v0c0,69.58788 -56.41212,126 -126,126z\"\r\n                            fill=\"none\"></path>\r\n                        <path d=\"M126,231.84c-58.45382,0 -105.84,-47.38618 -105.84,-105.84v0c0,-58.45382 47.38618,-105.84 105.84,-105.84v0c58.45382,0 105.84,47.38618 105.84,105.84v0c0,58.45382 -47.38618,105.84 -105.84,105.84z\"\r\n                            fill=\"none\"></path>\r\n                        <path d=\"M126,252c-69.58788,0 -126,-56.41212 -126,-126v0c0,-69.58788 56.41212,-126 126,-126v0c69.58788,0 126,56.41212 126,126v0c0,69.58788 -56.41212,126 -126,126z\"\r\n                            fill=\"none\"></path>\r\n                        <path d=\"M126,231.84c-58.45382,0 -105.84,-47.38618 -105.84,-105.84v0c0,-58.45382 47.38618,-105.84 105.84,-105.84v0c58.45382,0 105.84,47.38618 105.84,105.84v0c0,58.45382 -47.38618,105.84 -105.84,105.84z\"\r\n                            fill=\"none\"></path>\r\n                        <path d=\"M126,252c-69.58788,0 -126,-56.41212 -126,-126v0c0,-69.58788 56.41212,-126 126,-126v0c69.58788,0 126,56.41212 126,126v0c0,69.58788 -56.41212,126 -126,126z\"\r\n                            fill=\"none\"></path>\r\n                        <path d=\"M126,231.84c-58.45382,0 -105.84,-47.38618 -105.84,-105.84v0c0,-58.45382 47.38618,-105.84 105.84,-105.84v0c58.45382,0 105.84,47.38618 105.84,105.84v0c0,58.45382 -47.38618,105.84 -105.84,105.84z\"\r\n                            fill=\"none\"></path>\r\n                        <path d=\"M126,252c-69.58788,0 -126,-56.41212 -126,-126v0c0,-69.58788 56.41212,-126 126,-126v0c69.58788,0 126,56.41212 126,126v0c0,69.58788 -56.41212,126 -126,126z\"\r\n                            fill=\"none\"></path>\r\n                        <path d=\"M126,231.84c-58.45382,0 -105.84,-47.38618 -105.84,-105.84v0c0,-58.45382 47.38618,-105.84 105.84,-105.84v0c58.45382,0 105.84,47.38618 105.84,105.84v0c0,58.45382 -47.38618,105.84 -105.84,105.84z\"\r\n                            fill=\"none\"></path>\r\n                        <path d=\"M126,252c-69.58788,0 -126,-56.41212 -126,-126v0c0,-69.58788 56.41212,-126 126,-126v0c69.58788,0 126,56.41212 126,126v0c0,69.58788 -56.41212,126 -126,126z\"\r\n                            fill=\"none\"></path>\r\n                        <path d=\"M126,231.84c-58.45382,0 -105.84,-47.38618 -105.84,-105.84v0c0,-58.45382 47.38618,-105.84 105.84,-105.84v0c58.45382,0 105.84,47.38618 105.84,105.84v0c0,58.45382 -47.38618,105.84 -105.84,105.84z\"\r\n                            fill=\"none\"></path>\r\n                        <path d=\"M126,252c-69.58788,0 -126,-56.41212 -126,-126v0c0,-69.58788 56.41212,-126 126,-126v0c69.58788,0 126,56.41212 126,126v0c0,69.58788 -56.41212,126 -126,126z\"\r\n                            fill=\"none\"></path>\r\n                        <path d=\"M126,231.84c-58.45382,0 -105.84,-47.38618 -105.84,-105.84v0c0,-58.45382 47.38618,-105.84 105.84,-105.84v0c58.45382,0 105.84,47.38618 105.84,105.84v0c0,58.45382 -47.38618,105.84 -105.84,105.84z\"\r\n                            fill=\"none\"></path>\r\n                        <path d=\"M126,252c-69.58788,0 -126,-56.41212 -126,-126v0c0,-69.58788 56.41212,-126 126,-126v0c69.58788,0 126,56.41212 126,126v0c0,69.58788 -56.41212,126 -126,126z\"\r\n                            fill=\"none\"></path>\r\n                        <path d=\"M126,231.84c-58.45382,0 -105.84,-47.38618 -105.84,-105.84v0c0,-58.45382 47.38618,-105.84 105.84,-105.84v0c58.45382,0 105.84,47.38618 105.84,105.84v0c0,58.45382 -47.38618,105.84 -105.84,105.84z\"\r\n                            fill=\"none\"></path>\r\n                        <path d=\"M126,252c-69.58788,0 -126,-56.41212 -126,-126v0c0,-69.58788 56.41212,-126 126,-126v0c69.58788,0 126,56.41212 126,126v0c0,69.58788 -56.41212,126 -126,126z\"\r\n                            fill=\"none\"></path>\r\n                        <path d=\"M126,231.84c-58.45382,0 -105.84,-47.38618 -105.84,-105.84v0c0,-58.45382 47.38618,-105.84 105.84,-105.84v0c58.45382,0 105.84,47.38618 105.84,105.84v0c0,58.45382 -47.38618,105.84 -105.84,105.84z\"\r\n                            fill=\"none\"></path>\r\n                        <path d=\"M126,252c-69.58788,0 -126,-56.41212 -126,-126v0c0,-69.58788 56.41212,-126 126,-126v0c69.58788,0 126,56.41212 126,126v0c0,69.58788 -56.41212,126 -126,126z\"\r\n                            fill=\"none\"></path>\r\n                        <path d=\"M126,231.84c-58.45382,0 -105.84,-47.38618 -105.84,-105.84v0c0,-58.45382 47.38618,-105.84 105.84,-105.84v0c58.45382,0 105.84,47.38618 105.84,105.84v0c0,58.45382 -47.38618,105.84 -105.84,105.84z\"\r\n                            fill=\"none\"></path>\r\n                        <path d=\"M126,252c-69.58788,0 -126,-56.41212 -126,-126v0c0,-69.58788 56.41212,-126 126,-126v0c69.58788,0 126,56.41212 126,126v0c0,69.58788 -56.41212,126 -126,126z\"\r\n                            fill=\"none\"></path>\r\n                        <path d=\"M126,231.84c-58.45382,0 -105.84,-47.38618 -105.84,-105.84v0c0,-58.45382 47.38618,-105.84 105.84,-105.84v0c58.45382,0 105.84,47.38618 105.84,105.84v0c0,58.45382 -47.38618,105.84 -105.84,105.84z\"\r\n                            fill=\"none\"></path>\r\n                        <path d=\"M126,252c-69.58788,0 -126,-56.41212 -126,-126v0c0,-69.58788 56.41212,-126 126,-126v0c69.58788,0 126,56.41212 126,126v0c0,69.58788 -56.41212,126 -126,126z\"\r\n                            fill=\"none\"></path>\r\n                        <path d=\"M126,231.84c-58.45382,0 -105.84,-47.38618 -105.84,-105.84v0c0,-58.45382 47.38618,-105.84 105.84,-105.84v0c58.45382,0 105.84,47.38618 105.84,105.84v0c0,58.45382 -47.38618,105.84 -105.84,105.84z\"\r\n                            fill=\"none\"></path>\r\n                        <path d=\"M126,252c-69.58788,0 -126,-56.41212 -126,-126v0c0,-69.58788 56.41212,-126 126,-126v0c69.58788,0 126,56.41212 126,126v0c0,69.58788 -56.41212,126 -126,126z\"\r\n                            fill=\"none\"></path>\r\n                        <path d=\"M126,231.84c-58.45382,0 -105.84,-47.38618 -105.84,-105.84v0c0,-58.45382 47.38618,-105.84 105.84,-105.84v0c58.45382,0 105.84,47.38618 105.84,105.84v0c0,58.45382 -47.38618,105.84 -105.84,105.84z\"\r\n                            fill=\"none\"></path>\r\n                        <path d=\"M126,252c-69.58788,0 -126,-56.41212 -126,-126v0c0,-69.58788 56.41212,-126 126,-126v0c69.58788,0 126,56.41212 126,126v0c0,69.58788 -56.41212,126 -126,126z\"\r\n                            fill=\"none\"></path>\r\n                        <path d=\"M126,231.84c-58.45382,0 -105.84,-47.38618 -105.84,-105.84v0c0,-58.45382 47.38618,-105.84 105.84,-105.84v0c58.45382,0 105.84,47.38618 105.84,105.84v0c0,58.45382 -47.38618,105.84 -105.84,105.84z\"\r\n                            fill=\"none\"></path>\r\n                        <path d=\"M126,252c-69.58788,0 -126,-56.41212 -126,-126v0c0,-69.58788 56.41212,-126 126,-126v0c69.58788,0 126,56.41212 126,126v0c0,69.58788 -56.41212,126 -126,126z\"\r\n                            fill=\"none\"></path>\r\n                        <path d=\"M126,231.84c-58.45382,0 -105.84,-47.38618 -105.84,-105.84v0c0,-58.45382 47.38618,-105.84 105.84,-105.84v0c58.45382,0 105.84,47.38618 105.84,105.84v0c0,58.45382 -47.38618,105.84 -105.84,105.84z\"\r\n                            fill=\"none\"></path>\r\n                        <path d=\"M126,252c-69.58788,0 -126,-56.41212 -126,-126v0c0,-69.58788 56.41212,-126 126,-126v0c69.58788,0 126,56.41212 126,126v0c0,69.58788 -56.41212,126 -126,126z\"\r\n                            fill=\"none\"></path>\r\n                        <path d=\"M126,231.84c-58.45382,0 -105.84,-47.38618 -105.84,-105.84v0c0,-58.45382 47.38618,-105.84 105.84,-105.84v0c58.45382,0 105.84,47.38618 105.84,105.84v0c0,58.45382 -47.38618,105.84 -105.84,105.84z\"\r\n                            fill=\"none\"></path>\r\n                        <path d=\"M126,252c-69.58788,0 -126,-56.41212 -126,-126v0c0,-69.58788 56.41212,-126 126,-126v0c69.58788,0 126,56.41212 126,126v0c0,69.58788 -56.41212,126 -126,126z\"\r\n                            fill=\"none\"></path>\r\n                        <path d=\"M126,236.88c-61.23733,0 -110.88,-49.64267 -110.88,-110.88v0c0,-61.23733 49.64267,-110.88 110.88,-110.88v0c61.23733,0 110.88,49.64267 110.88,110.88v0c0,61.23733 -49.64267,110.88 -110.88,110.88z\"\r\n                            fill=\"none\"></path>\r\n                        <path d=\"M126,252c-69.58788,0 -126,-56.41212 -126,-126v0c0,-69.58788 56.41212,-126 126,-126v0c69.58788,0 126,56.41212 126,126v0c0,69.58788 -56.41212,126 -126,126z\"\r\n                            fill=\"none\"></path>\r\n                        <path d=\"M126,241.92c-64.02085,0 -115.92,-51.89915 -115.92,-115.92v0c0,-64.02085 51.89915,-115.92 115.92,-115.92h0c64.02085,0 115.92,51.89915 115.92,115.92v0c0,64.02085 -51.89915,115.92 -115.92,115.92z\"\r\n                            fill=\"none\"></path>\r\n                        <path d=\"M126,252c-69.58788,0 -126,-56.41212 -126,-126v0c0,-69.58788 56.41212,-126 126,-126v0c69.58788,0 126,56.41212 126,126v0c0,69.58788 -56.41212,126 -126,126z\"\r\n                            fill=\"none\"></path>\r\n                        <path d=\"M126,236.88c-61.23733,0 -110.88,-49.64267 -110.88,-110.88v0c0,-61.23733 49.64267,-110.88 110.88,-110.88v0c61.23733,0 110.88,49.64267 110.88,110.88v0c0,61.23733 -49.64267,110.88 -110.88,110.88z\"\r\n                            fill=\"none\"></path>\r\n                        <path d=\"M126,252c-69.58788,0 -126,-56.41212 -126,-126v0c0,-69.58788 56.41212,-126 126,-126v0c69.58788,0 126,56.41212 126,126v0c0,69.58788 -56.41212,126 -126,126z\"\r\n                            fill=\"none\"></path>\r\n                        <path d=\"M126,236.88c-61.23733,0 -110.88,-49.64267 -110.88,-110.88v0c0,-61.23733 49.64267,-110.88 110.88,-110.88v0c61.23733,0 110.88,49.64267 110.88,110.88v0c0,61.23733 -49.64267,110.88 -110.88,110.88z\"\r\n                            fill=\"none\"></path>\r\n                    </g>\r\n                </svg>\r\n            </section>\r\n            <section>\r\n                <span>Chờ xác nhận</span>\r\n                <br>\r\n                <span>{{data.create | date:'dd/MM/yyyy lúc HH:mm'}}</span>\r\n            </section>\r\n        </div>\r\n        <div class=\"col-sm-3\">\r\n            <section class=\"complete-icon\">\r\n                <svg class=\"icon__\" xmlns=\"http://www.w3.org/2000/svg\" x=\"0px\" y=\"0px\" width=\"40\" height=\"40\" viewBox=\"0 0 252 252\">\r\n                    <g fill=\"none\" fill-rule=\"nonzero\" stroke=\"none\" stroke-width=\"1\" stroke-linecap=\"butt\" stroke-linejoin=\"miter\" stroke-miterlimit=\"10\"\r\n                        stroke-dasharray=\"\" stroke-dashoffset=\"0\" font-family=\"none\" font-weight=\"none\" font-size=\"none\" text-anchor=\"none\"\r\n                        style=\"mix-blend-mode: normal\">\r\n                        <path d=\"M0,252v-252h252v252z\" fill=\"none\"></path>\r\n                        <path d=\"M0,126c0,-69.58788 56.41212,-126 126,-126c69.58788,0 126,56.41212 126,126c0,69.58788 -56.41212,126 -126,126c-69.58788,0 -126,-56.41212 -126,-126zM126,236.88c61.23733,0 110.88,-49.64267 110.88,-110.88c0,-61.23733 -49.64267,-110.88 -110.88,-110.88c-61.23733,0 -110.88,49.64267 -110.88,110.88c0,61.23733 49.64267,110.88 110.88,110.88z\"\r\n                            [ngClass]=\"data?.status > 1?'statusActive':'statusNone'\"></path>\r\n                        <g id=\"original-icon\" [ngClass]=\"data?.status > 1?'statusActive':'statusNone'\">\r\n                            <g id=\"surface1\">\r\n                                <path d=\"M130.33125,55.51875c-21.28096,0 -40.21787,10.07754 -52.31645,25.70142c-15.59619,12.10781 -25.64605,31.01704 -25.64605,52.26108c0,36.50801 29.64199,66.15 66.15,66.15c21.24404,0 40.15327,-10.04985 52.26108,-25.64605c15.62388,-12.09858 25.70142,-31.0355 25.70142,-52.31645c0,-36.50801 -29.64199,-66.15 -66.15,-66.15zM130.33125,60.24375c33.95171,0 61.425,27.47329 61.425,61.425c0,13.4644 -4.3374,25.88599 -11.67407,35.99121c2.95312,-7.49355 4.58657,-15.64233 4.58657,-24.17871c0,-36.50801 -29.64199,-66.15 -66.15,-66.15c-8.53638,0 -16.68516,1.63345 -24.17871,4.58657c10.10523,-7.33667 22.52681,-11.67407 35.99121,-11.67407zM118.51875,72.05625c33.95171,0 61.425,27.47329 61.425,61.425c0,33.95171 -27.47329,61.425 -61.425,61.425c-33.95171,0 -61.425,-27.47329 -61.425,-61.425c0,-33.95171 27.47329,-61.425 61.425,-61.425zM118.51875,79.14375c-1.30122,0 -2.3625,1.06128 -2.3625,2.3625c0,1.30122 1.06128,2.3625 2.3625,2.3625c1.30122,0 2.3625,-1.06128 2.3625,-2.3625c0,-1.30122 -1.06128,-2.3625 -2.3625,-2.3625zM105.08203,80.91563c-0.05537,0 -0.11074,0 -0.15688,0c-0.16611,0.01846 -0.31377,0.03691 -0.47065,0.08306c-1.26431,0.34146 -2.01182,1.63345 -1.67036,2.89776c0.34145,1.25508 1.63345,2.00259 2.88852,1.67036c1.26431,-0.34145 2.01182,-1.63345 1.67036,-2.89775c-0.26763,-1.02437 -1.19048,-1.74419 -2.26099,-1.75342zM131.95547,80.91563c-1.06128,0.00923 -1.99336,0.72905 -2.26099,1.75342c-0.34145,1.26431 0.40605,2.5563 1.67036,2.89775c1.25508,0.33223 2.54707,-0.41528 2.88852,-1.67036c0.34146,-1.26431 -0.40605,-2.5563 -1.67036,-2.89776c-0.20303,-0.05537 -0.41528,-0.08306 -0.62754,-0.08306zM92.47588,86.11128c-0.39683,0 -0.78443,0.11074 -1.12588,0.30454c-1.12588,0.65523 -1.5227,2.1041 -0.86748,3.22998c0.31377,0.54448 0.83057,0.94131 1.43965,1.10742c0.59985,0.15688 1.24585,0.07383 1.79033,-0.23994c0.54448,-0.31377 0.94131,-0.83057 1.09819,-1.43965c0.16611,-0.59985 0.08306,-1.24585 -0.23994,-1.79033c-0.42451,-0.74751 -1.23662,-1.19971 -2.09487,-1.17202zM144.39551,86.11128c-0.80288,0.03691 -1.53193,0.47988 -1.93799,1.18125c-0.31377,0.53525 -0.39683,1.18125 -0.23994,1.79033c0.16611,0.60908 0.56294,1.12588 1.10742,1.43042c0.53526,0.323 1.18125,0.40605 1.79033,0.23994c0.60908,-0.16611 1.12588,-0.56294 1.43042,-1.09819c0.65523,-1.13511 0.26763,-2.57476 -0.85825,-3.22998c-0.39683,-0.23071 -0.84902,-0.33223 -1.29199,-0.31377zM81.79849,94.36157c-0.63677,-0.00923 -1.25508,0.23994 -1.70727,0.69214c-0.91362,0.92285 -0.91362,2.4271 0,3.34995c0.92285,0.91362 2.4271,0.91362 3.34995,0c0.91362,-0.92285 0.91362,-2.4271 0,-3.34995c-0.44297,-0.43374 -1.02437,-0.67368 -1.64268,-0.69214zM155.30361,94.36157c-0.63677,0 -1.25508,0.24917 -1.70728,0.69214c-0.91362,0.92285 -0.91362,2.4271 0,3.34995c0.92285,0.91362 2.4271,0.91362 3.34995,0c0.91362,-0.92285 0.91362,-2.4271 0,-3.34995c-0.44297,-0.43374 -1.02437,-0.68291 -1.64267,-0.69214zM116.35005,104.12534v4.54043c-8.87783,0.82134 -14.25806,5.85088 -14.25806,13.44595c0,6.40459 4.00518,10.80659 11.33262,12.68921l2.92544,0.74751v14.98711c-4.90034,-0.55371 -8.05649,-3.28535 -8.38872,-7.19824h-6.9583c0.03691,7.63198 5.94316,12.79072 15.34702,13.40903v4.2728h4.50352v-4.30049c9.62534,-0.82134 15.19014,-5.85088 15.19014,-13.90737c0,-6.80142 -3.8852,-10.9727 -12.1355,-12.98452l-3.05464,-0.69214v-14.15654c4.3374,0.52602 7.29976,3.34995 7.42896,6.9583h6.86602c-0.20303,-7.32744 -5.78628,-12.5231 -14.29497,-13.2706v-4.54043zM163.47085,105.13125c-0.39683,0.00923 -0.78442,0.11997 -1.12588,0.31377c-1.12588,0.65522 -1.51348,2.09487 -0.85825,3.22998c0.646,1.12588 2.09487,1.51348 3.22075,0.85825c0.54448,-0.30454 0.94131,-0.82134 1.10742,-1.43042c0.15689,-0.60908 0.07383,-1.25508 -0.23994,-1.79033c-0.43374,-0.74751 -1.23662,-1.19971 -2.1041,-1.18125zM73.40054,105.13125c-0.81211,0.03691 -1.54116,0.47988 -1.94722,1.18125c-0.64599,1.12588 -0.2584,2.57476 0.87671,3.22075c1.12588,0.65523 2.56553,0.26763 3.22075,-0.85825c0.65523,-1.12588 0.26763,-2.57476 -0.85825,-3.22075c-0.39683,-0.23071 -0.84902,-0.34145 -1.29199,-0.323zM116.35005,114.94116v13.25215c-4.73423,-0.95977 -7.23516,-3.29458 -7.23516,-6.67222c0,-3.58989 3.02695,-6.34922 7.23516,-6.57993zM68.28794,117.6728c-1.06128,0.00923 -1.98413,0.71982 -2.26099,1.74419c-0.33223,1.26431 0.41528,2.5563 1.67036,2.89776c1.26431,0.34145 2.5563,-0.40605 2.89776,-1.67036c0.16611,-0.60908 0.08306,-1.25508 -0.23071,-1.79956c-0.31377,-0.53526 -0.83057,-0.93208 -1.43965,-1.09819c-0.20303,-0.05537 -0.41528,-0.08306 -0.63677,-0.07383zM168.74033,117.6728c-0.05537,-0.00923 -0.11074,0 -0.16611,0c-0.15688,0.00923 -0.31377,0.03691 -0.47065,0.08306c-1.25508,0.33223 -2.00259,1.62422 -1.67036,2.88852c0.34145,1.26431 1.63345,2.01182 2.89776,1.67036c1.26431,-0.34146 2.01182,-1.63345 1.67036,-2.89776c-0.27686,-1.02437 -1.19971,-1.73496 -2.26099,-1.74419zM66.54375,131.11875c-1.30122,0 -2.3625,1.06128 -2.3625,2.3625c0,1.30122 1.06128,2.3625 2.3625,2.3625c1.30122,0 2.3625,-1.06128 2.3625,-2.3625c0,-1.30122 -1.06128,-2.3625 -2.3625,-2.3625zM170.49375,131.11875c-1.30122,0 -2.3625,1.06128 -2.3625,2.3625c0,1.30122 1.06128,2.3625 2.3625,2.3625c1.30122,0 2.3625,-1.06128 2.3625,-2.3625c0,-1.30122 -1.06128,-2.3625 -2.3625,-2.3625zM120.85356,136.40669c5.58325,1.11665 8.18569,3.38687 8.18569,7.16133c0,4.18052 -2.99004,6.73682 -8.18569,7.04136zM68.39868,144.57393c-0.23071,-0.00923 -0.47065,0.01846 -0.70137,0.08306c-1.25508,0.33223 -2.00259,1.62422 -1.67036,2.88852c0.34145,1.26431 1.63345,2.01182 2.89776,1.67036c1.26431,-0.34145 2.01182,-1.63345 1.67036,-2.88852c-0.26763,-1.00591 -1.15356,-1.7165 -2.19639,-1.75342zM168.69419,144.57393c-1.06128,0.00923 -1.98413,0.72905 -2.26099,1.75342c-0.33223,1.26431 0.41528,2.5563 1.67036,2.88852c1.26431,0.34146 2.5563,-0.40605 2.89776,-1.67036c0.34145,-1.25508 -0.40605,-2.54707 -1.67036,-2.88852c-0.20303,-0.05537 -0.41528,-0.08306 -0.63677,-0.08306zM73.44668,157.10625c-0.3876,0.00923 -0.7752,0.11997 -1.11665,0.31377c-1.13511,0.65522 -1.5227,2.09487 -0.87671,3.22998c0.31377,0.53526 0.83057,0.93208 1.43965,1.09819c0.60908,0.16611 1.25508,0.08306 1.79956,-0.23994c0.53525,-0.30454 0.93208,-0.82134 1.09819,-1.43042c0.15688,-0.60908 0.07383,-1.25508 -0.23994,-1.79033c-0.43374,-0.74751 -1.23662,-1.19971 -2.1041,-1.18125zM163.41548,157.10625c-0.80288,0.04614 -1.53193,0.48911 -1.92876,1.18125c-0.65523,1.13511 -0.26763,2.57476 0.85825,3.22998c0.54448,0.31377 1.19048,0.39682 1.79033,0.23994c0.60908,-0.16611 1.12588,-0.56294 1.43965,-1.10742c0.31377,-0.53525 0.39683,-1.18125 0.23994,-1.79033c-0.16611,-0.60908 -0.56294,-1.12588 -1.10742,-1.43042c-0.3876,-0.23071 -0.83979,-0.34145 -1.29199,-0.323zM81.79849,167.87593c-0.63677,-0.01846 -1.25508,0.23071 -1.70727,0.68291c-0.44297,0.44297 -0.69214,1.04282 -0.69214,1.67036c0,0.62754 0.24917,1.22739 0.69214,1.67959c0.93208,0.91362 2.4271,0.91362 3.34995,-0.00923c0.91362,-0.92285 0.91362,-2.41787 0,-3.34072c-0.44297,-0.43374 -1.02437,-0.68291 -1.64268,-0.68291zM155.30361,167.87593c-0.63677,-0.01846 -1.25508,0.23071 -1.70728,0.68291c-0.92285,0.92285 -0.92285,2.4271 0,3.34995c0.92285,0.91362 2.41787,0.91362 3.34072,0c0.92285,-0.92285 0.92285,-2.4271 0,-3.34995c-0.43374,-0.43374 -1.01514,-0.67368 -1.63345,-0.68291zM144.44165,176.12622c-0.3876,0.01846 -0.7752,0.11997 -1.11665,0.323c-1.12588,0.646 -1.5227,2.09487 -0.86748,3.22075c0.31377,0.54448 0.83057,0.94131 1.43965,1.10742c0.59985,0.15689 1.24585,0.07383 1.79033,-0.23994c0.54448,-0.31377 0.94131,-0.83057 1.09819,-1.43965c0.16611,-0.59985 0.08306,-1.24585 -0.23994,-1.79033c-0.42451,-0.74751 -1.23662,-1.19971 -2.1041,-1.18125zM92.42051,176.13545c-0.80288,0.03691 -1.53193,0.47988 -1.93799,1.17202c-0.31377,0.54448 -0.39683,1.19048 -0.23994,1.79956c0.16611,0.60908 0.56294,1.12588 1.10742,1.43965c1.12588,0.646 2.57476,0.2584 3.22075,-0.87671c0.65523,-1.12588 0.26763,-2.56553 -0.85825,-3.22075c-0.39683,-0.23071 -0.8398,-0.33223 -1.29199,-0.31377zM105.04512,181.32187c-1.06128,0.00923 -1.99336,0.72905 -2.26099,1.75342c-0.34145,1.26431 0.40605,2.5563 1.67036,2.89775c1.25508,0.33223 2.54707,-0.41528 2.88852,-1.67036c0.34146,-1.26431 -0.40605,-2.5563 -1.67036,-2.89776c-0.20303,-0.05537 -0.41528,-0.08306 -0.62754,-0.08306zM132.05698,181.32187c-0.23994,0 -0.47065,0.01846 -0.70137,0.08306c-1.26431,0.34146 -2.01182,1.63345 -1.67036,2.89776c0.34145,1.25508 1.63345,2.00259 2.89775,1.67036c1.25508,-0.34145 2.00259,-1.63345 1.66113,-2.89775c-0.26763,-0.99668 -1.15356,-1.70728 -2.18716,-1.75342zM118.51875,183.09375c-1.30122,0 -2.3625,1.06128 -2.3625,2.3625c0,1.30122 1.06128,2.3625 2.3625,2.3625c1.30122,0 2.3625,-1.06128 2.3625,-2.3625c0,-1.30122 -1.06128,-2.3625 -2.3625,-2.3625z\"></path>\r\n                            </g>\r\n                        </g>\r\n                        <path d=\"M126,252c-69.58788,0 -126,-56.41212 -126,-126v0c0,-69.58788 56.41212,-126 126,-126v0c69.58788,0 126,56.41212 126,126v0c0,69.58788 -56.41212,126 -126,126z\"\r\n                            fill=\"none\"></path>\r\n                        <path d=\"M126,236.88c-61.23733,0 -110.88,-49.64267 -110.88,-110.88v0c0,-61.23733 49.64267,-110.88 110.88,-110.88v0c61.23733,0 110.88,49.64267 110.88,110.88v0c0,61.23733 -49.64267,110.88 -110.88,110.88z\"\r\n                            fill=\"none\"></path>\r\n                        <path d=\"M126,252c-69.58788,0 -126,-56.41212 -126,-126v0c0,-69.58788 56.41212,-126 126,-126v0c69.58788,0 126,56.41212 126,126v0c0,69.58788 -56.41212,126 -126,126z\"\r\n                            fill=\"none\"></path>\r\n                        <path d=\"M126,236.88c-61.23733,0 -110.88,-49.64267 -110.88,-110.88v0c0,-61.23733 49.64267,-110.88 110.88,-110.88v0c61.23733,0 110.88,49.64267 110.88,110.88v0c0,61.23733 -49.64267,110.88 -110.88,110.88z\"\r\n                            fill=\"none\"></path>\r\n                        <path d=\"M126,250.74c-68.892,0 -124.74,-55.848 -124.74,-124.74v0c0,-68.892 55.848,-124.74 124.74,-124.74h0c68.892,0 124.74,55.848 124.74,124.74v0c0,68.892 -55.848,124.74 -124.74,124.74z\"\r\n                            fill=\"none\"></path>\r\n                        <path d=\"M126,235.62c-60.54145,0 -109.62,-49.07855 -109.62,-109.62v0c0,-60.54145 49.07855,-109.62 109.62,-109.62h0c60.54145,0 109.62,49.07855 109.62,109.62v0c0,60.54145 -49.07855,109.62 -109.62,109.62z\"\r\n                            fill=\"none\"></path>\r\n                        <path d=\"M126,243.18c-64.71673,0 -117.18,-52.46327 -117.18,-117.18v0c0,-64.71673 52.46327,-117.18 117.18,-117.18v0c64.71673,0 117.18,52.46327 117.18,117.18v0c0,64.71673 -52.46327,117.18 -117.18,117.18z\"\r\n                            fill=\"none\"></path>\r\n                        <path d=\"M126,228.06c-56.36618,0 -102.06,-45.69382 -102.06,-102.06v0c0,-56.36618 45.69382,-102.06 102.06,-102.06v0c56.36618,0 102.06,45.69382 102.06,102.06v0c0,56.36618 -45.69382,102.06 -102.06,102.06z\"\r\n                            fill=\"none\"></path>\r\n                        <path d=\"M126,239.4c-62.62909,0 -113.4,-50.77091 -113.4,-113.4v0c0,-62.62909 50.77091,-113.4 113.4,-113.4v0c62.62909,0 113.4,50.77091 113.4,113.4v0c0,62.62909 -50.77091,113.4 -113.4,113.4z\"\r\n                            fill=\"none\"></path>\r\n                        <path d=\"M126,224.28c-54.27855,0 -98.28,-44.00145 -98.28,-98.28v0c0,-54.27855 44.00145,-98.28 98.28,-98.28v0c54.27855,0 98.28,44.00145 98.28,98.28v0c0,54.27855 -44.00145,98.28 -98.28,98.28z\"\r\n                            fill=\"none\"></path>\r\n                        <path d=\"M126,236.88c-61.23733,0 -110.88,-49.64267 -110.88,-110.88v0c0,-61.23733 49.64267,-110.88 110.88,-110.88v0c61.23733,0 110.88,49.64267 110.88,110.88v0c0,61.23733 -49.64267,110.88 -110.88,110.88z\"\r\n                            fill=\"none\"></path>\r\n                        <path d=\"M126,221.76c-52.88679,0 -95.76,-42.87321 -95.76,-95.76v0c0,-52.88679 42.87321,-95.76 95.76,-95.76v0c52.88679,0 95.76,42.87321 95.76,95.76v0c0,52.88679 -42.87321,95.76 -95.76,95.76z\"\r\n                            fill=\"none\"></path>\r\n                        <path d=\"M126,235.62c-60.54145,0 -109.62,-49.07855 -109.62,-109.62v0c0,-60.54145 49.07855,-109.62 109.62,-109.62v0c60.54145,0 109.62,49.07855 109.62,109.62v0c0,60.54145 -49.07855,109.62 -109.62,109.62z\"\r\n                            fill=\"none\"></path>\r\n                        <path d=\"M126,220.5c-52.19091,0 -94.5,-42.30909 -94.5,-94.5v0c0,-52.19091 42.30909,-94.5 94.5,-94.5v0c52.19091,0 94.5,42.30909 94.5,94.5v0c0,52.19091 -42.30909,94.5 -94.5,94.5z\"\r\n                            fill=\"none\"></path>\r\n                        <path d=\"M126,236.88c-61.23733,0 -110.88,-49.64267 -110.88,-110.88v0c0,-61.23733 49.64267,-110.88 110.88,-110.88v0c61.23733,0 110.88,49.64267 110.88,110.88v0c0,61.23733 -49.64267,110.88 -110.88,110.88z\"\r\n                            fill=\"none\"></path>\r\n                        <path d=\"M126,221.76c-52.88679,0 -95.76,-42.87321 -95.76,-95.76v0c0,-52.88679 42.87321,-95.76 95.76,-95.76v0c52.88679,0 95.76,42.87321 95.76,95.76v0c0,52.88679 -42.87321,95.76 -95.76,95.76z\"\r\n                            fill=\"none\"></path>\r\n                        <path d=\"M126,243.18c-64.71673,0 -117.18,-52.46327 -117.18,-117.18v0c0,-64.71673 52.46327,-117.18 117.18,-117.18v0c64.71673,0 117.18,52.46327 117.18,117.18v0c0,64.71673 -52.46327,117.18 -117.18,117.18z\"\r\n                            fill=\"none\"></path>\r\n                        <path d=\"M126,228.06c-56.36618,0 -102.06,-45.69382 -102.06,-102.06v0c0,-56.36618 45.69382,-102.06 102.06,-102.06v0c56.36618,0 102.06,45.69382 102.06,102.06v0c0,56.36618 -45.69382,102.06 -102.06,102.06z\"\r\n                            fill=\"none\"></path>\r\n                        <path d=\"M126,252c-69.58788,0 -126,-56.41212 -126,-126v0c0,-69.58788 56.41212,-126 126,-126v0c69.58788,0 126,56.41212 126,126v0c0,69.58788 -56.41212,126 -126,126z\"\r\n                            fill=\"none\"></path>\r\n                        <path d=\"M126,236.88c-61.23733,0 -110.88,-49.64267 -110.88,-110.88v0c0,-61.23733 49.64267,-110.88 110.88,-110.88v0c61.23733,0 110.88,49.64267 110.88,110.88v0c0,61.23733 -49.64267,110.88 -110.88,110.88z\"\r\n                            fill=\"none\"></path>\r\n                        <path d=\"M126,252c-69.58788,0 -126,-56.41212 -126,-126v0c0,-69.58788 56.41212,-126 126,-126v0c69.58788,0 126,56.41212 126,126v0c0,69.58788 -56.41212,126 -126,126z\"\r\n                            fill=\"none\"></path>\r\n                        <path d=\"M126,236.88c-61.23733,0 -110.88,-49.64267 -110.88,-110.88v0c0,-61.23733 49.64267,-110.88 110.88,-110.88v0c61.23733,0 110.88,49.64267 110.88,110.88v0c0,61.23733 -49.64267,110.88 -110.88,110.88z\"\r\n                            fill=\"none\"></path>\r\n                        <path d=\"M126,252c-69.58788,0 -126,-56.41212 -126,-126v0c0,-69.58788 56.41212,-126 126,-126v0c69.58788,0 126,56.41212 126,126v0c0,69.58788 -56.41212,126 -126,126z\"\r\n                            fill=\"none\"></path>\r\n                        <path d=\"M126,236.88c-61.23733,0 -110.88,-49.64267 -110.88,-110.88v0c0,-61.23733 49.64267,-110.88 110.88,-110.88v0c61.23733,0 110.88,49.64267 110.88,110.88v0c0,61.23733 -49.64267,110.88 -110.88,110.88z\"\r\n                            fill=\"none\"></path>\r\n                        <path d=\"M126,252c-69.58788,0 -126,-56.41212 -126,-126v0c0,-69.58788 56.41212,-126 126,-126v0c69.58788,0 126,56.41212 126,126v0c0,69.58788 -56.41212,126 -126,126z\"\r\n                            fill=\"none\"></path>\r\n                        <path d=\"M126,236.88c-61.23733,0 -110.88,-49.64267 -110.88,-110.88v0c0,-61.23733 49.64267,-110.88 110.88,-110.88v0c61.23733,0 110.88,49.64267 110.88,110.88v0c0,61.23733 -49.64267,110.88 -110.88,110.88z\"\r\n                            fill=\"none\"></path>\r\n                        <path d=\"M126,252c-69.58788,0 -126,-56.41212 -126,-126v0c0,-69.58788 56.41212,-126 126,-126v0c69.58788,0 126,56.41212 126,126v0c0,69.58788 -56.41212,126 -126,126z\"\r\n                            fill=\"none\"></path>\r\n                        <path d=\"M126,236.88c-61.23733,0 -110.88,-49.64267 -110.88,-110.88v0c0,-61.23733 49.64267,-110.88 110.88,-110.88v0c61.23733,0 110.88,49.64267 110.88,110.88v0c0,61.23733 -49.64267,110.88 -110.88,110.88z\"\r\n                            fill=\"none\"></path>\r\n                        <path d=\"M126,252c-69.58788,0 -126,-56.41212 -126,-126v0c0,-69.58788 56.41212,-126 126,-126v0c69.58788,0 126,56.41212 126,126v0c0,69.58788 -56.41212,126 -126,126z\"\r\n                            fill=\"none\"></path>\r\n                        <path d=\"M126,236.88c-61.23733,0 -110.88,-49.64267 -110.88,-110.88v0c0,-61.23733 49.64267,-110.88 110.88,-110.88v0c61.23733,0 110.88,49.64267 110.88,110.88v0c0,61.23733 -49.64267,110.88 -110.88,110.88z\"\r\n                            fill=\"none\"></path>\r\n                        <path d=\"M126,252c-69.58788,0 -126,-56.41212 -126,-126v0c0,-69.58788 56.41212,-126 126,-126v0c69.58788,0 126,56.41212 126,126v0c0,69.58788 -56.41212,126 -126,126z\"\r\n                            fill=\"none\"></path>\r\n                        <path d=\"M126,236.88c-61.23733,0 -110.88,-49.64267 -110.88,-110.88v0c0,-61.23733 49.64267,-110.88 110.88,-110.88v0c61.23733,0 110.88,49.64267 110.88,110.88v0c0,61.23733 -49.64267,110.88 -110.88,110.88z\"\r\n                            fill=\"none\"></path>\r\n                        <path d=\"M126,252c-69.58788,0 -126,-56.41212 -126,-126v0c0,-69.58788 56.41212,-126 126,-126v0c69.58788,0 126,56.41212 126,126v0c0,69.58788 -56.41212,126 -126,126z\"\r\n                            fill=\"none\"></path>\r\n                        <path d=\"M126,236.88c-61.23733,0 -110.88,-49.64267 -110.88,-110.88v0c0,-61.23733 49.64267,-110.88 110.88,-110.88v0c61.23733,0 110.88,49.64267 110.88,110.88v0c0,61.23733 -49.64267,110.88 -110.88,110.88z\"\r\n                            fill=\"none\"></path>\r\n                        <path d=\"M126,252c-69.58788,0 -126,-56.41212 -126,-126v0c0,-69.58788 56.41212,-126 126,-126v0c69.58788,0 126,56.41212 126,126v0c0,69.58788 -56.41212,126 -126,126z\"\r\n                            fill=\"none\"></path>\r\n                        <path d=\"M126,236.88c-61.23733,0 -110.88,-49.64267 -110.88,-110.88v0c0,-61.23733 49.64267,-110.88 110.88,-110.88v0c61.23733,0 110.88,49.64267 110.88,110.88v0c0,61.23733 -49.64267,110.88 -110.88,110.88z\"\r\n                            fill=\"none\"></path>\r\n                        <path d=\"M126,252c-69.58788,0 -126,-56.41212 -126,-126v0c0,-69.58788 56.41212,-126 126,-126v0c69.58788,0 126,56.41212 126,126v0c0,69.58788 -56.41212,126 -126,126z\"\r\n                            fill=\"none\"></path>\r\n                        <path d=\"M126,236.88c-61.23733,0 -110.88,-49.64267 -110.88,-110.88v0c0,-61.23733 49.64267,-110.88 110.88,-110.88v0c61.23733,0 110.88,49.64267 110.88,110.88v0c0,61.23733 -49.64267,110.88 -110.88,110.88z\"\r\n                            fill=\"none\"></path>\r\n                        <path d=\"M126,252c-69.58788,0 -126,-56.41212 -126,-126v0c0,-69.58788 56.41212,-126 126,-126v0c69.58788,0 126,56.41212 126,126v0c0,69.58788 -56.41212,126 -126,126z\"\r\n                            fill=\"none\"></path>\r\n                        <path d=\"M126,236.88c-61.23733,0 -110.88,-49.64267 -110.88,-110.88v0c0,-61.23733 49.64267,-110.88 110.88,-110.88v0c61.23733,0 110.88,49.64267 110.88,110.88v0c0,61.23733 -49.64267,110.88 -110.88,110.88z\"\r\n                            fill=\"none\"></path>\r\n                    </g>\r\n                </svg>\r\n            </section>\r\n            <section>\r\n                <span>Đã xác nhận</span>\r\n                <br>\r\n                <span>{{data.create | date:'dd/MM/yyyy lúc HH:mm'}}</span>\r\n            </section>\r\n        </div>\r\n        <div class=\"col-sm-3\">\r\n            <section class=\"complete-icon\">\r\n                <svg class=\"icon__\" xmlns=\"http://www.w3.org/2000/svg\" x=\"0px\" y=\"0px\" width=\"40\" height=\"40\" viewBox=\"0 0 252 252\">\r\n                    <g transform=\"\">\r\n                        <g fill=\"none\" fill-rule=\"nonzero\" stroke=\"none\" stroke-width=\"1\" stroke-linecap=\"butt\" stroke-linejoin=\"miter\" stroke-miterlimit=\"10\"\r\n                            stroke-dasharray=\"\" stroke-dashoffset=\"0\" font-family=\"none\" font-weight=\"none\" font-size=\"none\"\r\n                            text-anchor=\"none\" style=\"mix-blend-mode: normal\">\r\n                            <path d=\"M0,252v-252h252v252z\" fill=\"none\"></path>\r\n                            <path d=\"M0,126c0,-69.58788 56.41212,-126 126,-126c69.58788,0 126,56.41212 126,126c0,69.58788 -56.41212,126 -126,126c-69.58788,0 -126,-56.41212 -126,-126zM126,236.88c61.23733,0 110.88,-49.64267 110.88,-110.88c0,-61.23733 -49.64267,-110.88 -110.88,-110.88c-61.23733,0 -110.88,49.64267 -110.88,110.88c0,61.23733 49.64267,110.88 110.88,110.88z\"\r\n                                [ngClass]=\"data?.status > 2?'statusActive':'statusNone'\"></path>\r\n                            <g id=\"original-icon\" [ngClass]=\"data?.status > 2?'statusActive':'statusNone'\">\r\n                                <g id=\"surface1\">\r\n                                    <path d=\"M96.22266,86.625c-7.81833,0 -14.83524,4.3544 -18.3437,11.32679l-7.99643,16.02847h-5.43187c-6.29563,0 -11.39803,5.1024 -11.39803,11.39803v27.35526c0,3.75779 3.08103,6.83882 6.83882,6.83882h7.01691c1.09528,7.72929 7.756,13.67763 15.77914,13.67763c8.02314,0 14.68386,-5.94834 15.77914,-13.67763h55.06671c1.09528,7.72929 7.756,13.67763 15.77914,13.67763c8.02314,0 14.68386,-5.94834 15.77914,-13.67763h7.01691c3.75779,0 6.83882,-3.08103 6.83882,-6.83882v-23.86462c0,-5.75244 -4.28316,-10.60551 -9.98218,-11.30898l-18.87798,-2.36865c-5.4942,-0.68566 -10.55208,-3.60641 -13.88244,-8.04986l-9.23418,-12.31521c-3.85574,-5.12911 -9.98218,-8.20124 -16.41138,-8.20124zM96.22266,91.18421h16.09971v22.79605h-37.34634l6.98129,-13.97149c2.73374,-5.44968 8.21014,-8.82457 14.26534,-8.82457zM116.88158,91.18421h13.67763c4.99554,0 9.77737,2.39537 12.76045,6.38468l9.24309,12.30631c4.05164,5.42297 10.23151,9.00266 16.95456,9.84861l18.87798,2.35084c2.15494,0.27605 3.98041,1.54052 5.03116,3.30365h-2.4577c-3.14336,0 -5.69901,2.55565 -5.69901,5.69901c0,3.14336 2.55565,5.69901 5.69901,5.69901h3.41941v9.11842h-13.92696c-2.87622,-2.82279 -6.82101,-4.55921 -11.14869,-4.55921c-4.32769,0 -8.27247,1.73642 -11.14869,4.55921h-64.32761c-2.87622,-2.82279 -6.82101,-4.55921 -11.14869,-4.55921c-4.32769,0 -8.27247,1.73642 -11.14869,4.55921h-13.92696v-20.51645c0,-3.75779 3.08103,-6.83882 6.83882,-6.83882h68.38816c1.25556,0 2.27961,-1.01514 2.27961,-2.27961c0,-1.26447 -1.02404,-2.27961 -2.27961,-2.27961h-15.95724zM141.95724,113.98026c-1.25556,0 -2.27961,1.01514 -2.27961,2.27961c0,1.26447 1.02404,2.27961 2.27961,2.27961h9.11842c1.25556,0 2.27961,-1.01514 2.27961,-2.27961c0,-1.26447 -1.02404,-2.27961 -2.27961,-2.27961zM64.45066,125.37829c-1.25556,0 -2.27961,1.01514 -2.27961,2.27961v4.55921c0,1.26447 1.02404,2.27961 2.27961,2.27961c1.25556,0 2.27961,-1.01514 2.27961,-2.27961v-4.55921c0,-1.26447 -1.02404,-2.27961 -2.27961,-2.27961zM75.84868,125.37829c-1.25556,0 -2.27961,1.01514 -2.27961,2.27961v4.55921c0,1.26447 1.02404,2.27961 2.27961,2.27961c1.25556,0 2.27961,-1.01514 2.27961,-2.27961v-4.55921c0,-1.26447 -1.02404,-2.27961 -2.27961,-2.27961zM87.24671,125.37829c-1.25556,0 -2.27961,1.01514 -2.27961,2.27961v4.55921c0,1.26447 1.02404,2.27961 2.27961,2.27961c1.25556,0 2.27961,-1.01514 2.27961,-2.27961v-4.55921c0,-1.26447 -1.02404,-2.27961 -2.27961,-2.27961zM98.64474,125.37829c-1.25556,0 -2.27961,1.01514 -2.27961,2.27961v4.55921c0,1.26447 1.02404,2.27961 2.27961,2.27961c1.25556,0 2.27961,-1.01514 2.27961,-2.27961v-4.55921c0,-1.26447 -1.02404,-2.27961 -2.27961,-2.27961zM110.04276,125.37829c-1.25556,0 -2.27961,1.01514 -2.27961,2.27961v4.55921c0,1.26447 1.02404,2.27961 2.27961,2.27961c1.25556,0 2.27961,-1.01514 2.27961,-2.27961v-4.55921c0,-1.26447 -1.02404,-2.27961 -2.27961,-2.27961zM121.44079,125.37829c-1.25556,0 -2.27961,1.01514 -2.27961,2.27961v4.55921c0,1.26447 1.02404,2.27961 2.27961,2.27961c1.25556,0 2.27961,-1.01514 2.27961,-2.27961v-4.55921c0,-1.26447 -1.02404,-2.27961 -2.27961,-2.27961zM132.83882,125.37829c-1.25556,0 -2.27961,1.01514 -2.27961,2.27961v4.55921c0,1.26447 1.02404,2.27961 2.27961,2.27961c1.25556,0 2.27961,-1.01514 2.27961,-2.27961v-4.55921c0,-1.26447 -1.02404,-2.27961 -2.27961,-2.27961zM144.23684,125.37829c-1.25556,0 -2.27961,1.01514 -2.27961,2.27961v4.55921c0,1.26447 1.02404,2.27961 2.27961,2.27961c1.25556,0 2.27961,-1.01514 2.27961,-2.27961v-4.55921c0,-1.26447 -1.02404,-2.27961 -2.27961,-2.27961zM155.63487,125.37829c-1.25556,0 -2.27961,1.01514 -2.27961,2.27961v4.55921c0,1.26447 1.02404,2.27961 2.27961,2.27961c1.25556,0 2.27961,-1.01514 2.27961,-2.27961v-4.55921c0,-1.26447 -1.02404,-2.27961 -2.27961,-2.27961zM167.03289,125.37829c-1.25556,0 -2.27961,1.01514 -2.27961,2.27961v4.55921c0,1.26447 1.02404,2.27961 2.27961,2.27961c1.25556,0 2.27961,-1.01514 2.27961,-2.27961v-4.55921c0,-1.26447 -1.02404,-2.27961 -2.27961,-2.27961zM178.43092,125.37829c-1.25556,0 -2.27961,1.01514 -2.27961,2.27961v4.55921c0,1.26447 1.02404,2.27961 2.27961,2.27961c1.25556,0 2.27961,-1.01514 2.27961,-2.27961v-4.55921c0,-1.26447 -1.02404,-2.27961 -2.27961,-2.27961zM190.96875,129.9375h3.41941v2.27961h-3.41941c-0.63223,0 -1.1398,-0.51647 -1.1398,-1.1398c0,-0.62333 0.50757,-1.1398 1.1398,-1.1398zM82.6875,145.89474c3.71326,0 7.04362,1.79875 9.11842,4.55921c1.00623,1.3179 1.7097,2.87622 2.05699,4.55921c0.15138,0.73019 0.22262,1.5049 0.22262,2.27961c0,0.77471 -0.07124,1.54942 -0.22262,2.27961c-1.05076,5.20035 -5.65449,9.11842 -11.17541,9.11842c-5.52092,0 -10.12465,-3.91807 -11.1665,-9.11842c-0.16029,-0.73018 -0.23152,-1.5049 -0.23152,-2.27961c0,-0.77471 0.07124,-1.54942 0.23152,-2.27961c0.33838,-1.68299 1.04185,-3.24131 2.04808,-4.55921c2.0748,-2.76046 5.40516,-4.55921 9.11842,-4.55921zM169.3125,145.89474c3.71326,0 7.04362,1.79875 9.11842,4.55921c1.00623,1.3179 1.7097,2.87622 2.05699,4.55921c0.15138,0.73019 0.22262,1.5049 0.22262,2.27961c0,0.77471 -0.07124,1.54942 -0.22262,2.27961c-1.05076,5.20035 -5.65449,9.11842 -11.17541,9.11842c-5.52092,0 -10.12465,-3.91807 -11.17541,-9.11842c-0.15138,-0.73018 -0.22262,-1.5049 -0.22262,-2.27961c0,-0.77471 0.07124,-1.54942 0.22262,-2.27961c0.34728,-1.68299 1.05076,-3.24131 2.05699,-4.55921c2.0748,-2.76046 5.40516,-4.55921 9.11842,-4.55921zM57.61184,150.45395h10.66784c-0.68566,1.41585 -1.15761,2.93855 -1.37133,4.55921h-7.01691c-1.25556,0 -2.27961,-1.02404 -2.27961,-2.27961zM97.09532,150.45395h57.80936c-0.68566,1.41585 -1.15761,2.93855 -1.37133,4.55921h-55.06671c-0.21371,-1.62066 -0.68566,-3.14336 -1.37132,-4.55921zM183.72032,150.45395h10.66784v2.27961c0,1.25556 -1.02404,2.27961 -2.27961,2.27961h-7.01691c-0.21371,-1.62066 -0.68566,-3.14336 -1.37132,-4.55921zM82.6875,152.73355c-2.52003,0 -4.55921,2.03918 -4.55921,4.55921c0,2.52003 2.03918,4.55921 4.55921,4.55921c2.52003,0 4.55921,-2.03918 4.55921,-4.55921c0,-2.52003 -2.03918,-4.55921 -4.55921,-4.55921zM169.3125,152.73355c-2.52003,0 -4.55921,2.03918 -4.55921,4.55921c0,2.52003 2.03918,4.55921 4.55921,4.55921c2.52003,0 4.55921,-2.03918 4.55921,-4.55921c0,-2.52003 -2.03918,-4.55921 -4.55921,-4.55921z\"></path>\r\n                                </g>\r\n                            </g>\r\n                            <path d=\"M126,252c-69.58788,0 -126,-56.41212 -126,-126v0c0,-69.58788 56.41212,-126 126,-126v0c69.58788,0 126,56.41212 126,126v0c0,69.58788 -56.41212,126 -126,126z\"\r\n                                fill=\"none\"></path>\r\n                            <path d=\"M126,236.88c-61.23733,0 -110.88,-49.64267 -110.88,-110.88v0c0,-61.23733 49.64267,-110.88 110.88,-110.88v0c61.23733,0 110.88,49.64267 110.88,110.88v0c0,61.23733 -49.64267,110.88 -110.88,110.88z\"\r\n                                fill=\"none\"></path>\r\n                            <path d=\"\" fill=\"none\"></path>\r\n                            <path d=\"\" fill=\"none\"></path>\r\n                            <path d=\"M126,252c-69.58788,0 -126,-56.41212 -126,-126v0c0,-69.58788 56.41212,-126 126,-126v0c69.58788,0 126,56.41212 126,126v0c0,69.58788 -56.41212,126 -126,126z\"\r\n                                fill=\"none\"></path>\r\n                            <path d=\"M126,236.88c-61.23733,0 -110.88,-49.64267 -110.88,-110.88v0c0,-61.23733 49.64267,-110.88 110.88,-110.88v0c61.23733,0 110.88,49.64267 110.88,110.88v0c0,61.23733 -49.64267,110.88 -110.88,110.88z\"\r\n                                fill=\"none\"></path>\r\n                            <path d=\"\" fill=\"none\"></path>\r\n                            <path d=\"\" fill=\"none\"></path>\r\n                            <path d=\"M126,252c-69.58788,0 -126,-56.41212 -126,-126v0c0,-69.58788 56.41212,-126 126,-126v0c69.58788,0 126,56.41212 126,126v0c0,69.58788 -56.41212,126 -126,126z\"\r\n                                fill=\"none\"></path>\r\n                            <path d=\"M126,236.88c-61.23733,0 -110.88,-49.64267 -110.88,-110.88v0c0,-61.23733 49.64267,-110.88 110.88,-110.88v0c61.23733,0 110.88,49.64267 110.88,110.88v0c0,61.23733 -49.64267,110.88 -110.88,110.88z\"\r\n                                fill=\"none\"></path>\r\n                            <path d=\"M126,252c-69.58788,0 -126,-56.41212 -126,-126v0c0,-69.58788 56.41212,-126 126,-126h0c69.58788,0 126,56.41212 126,126v0c0,69.58788 -56.41212,126 -126,126z\"\r\n                                fill=\"none\"></path>\r\n                            <path d=\"M126,236.88c-61.23733,0 -110.88,-49.64267 -110.88,-110.88v0c0,-61.23733 49.64267,-110.88 110.88,-110.88h0c61.23733,0 110.88,49.64267 110.88,110.88v0c0,61.23733 -49.64267,110.88 -110.88,110.88z\"\r\n                                fill=\"none\"></path>\r\n                        </g>\r\n                    </g>\r\n                </svg>\r\n            </section>\r\n            <section>\r\n                <span>Đang vận chuyển</span>\r\n                <br>\r\n                <span>{{data.create | date:'dd/MM/yyyy lúc HH:mm'}}</span>\r\n            </section>\r\n        </div>\r\n        <div class=\"col-sm-3\">\r\n            <section class=\"complete-icon\">\r\n                <svg class=\"icon__\" xmlns=\"http://www.w3.org/2000/svg\" x=\"0px\" y=\"0px\" width=\"40\" height=\"40\" viewBox=\"0 0 252 252\">\r\n                    <g fill=\"none\" fill-rule=\"nonzero\" stroke=\"none\" stroke-width=\"1\" stroke-linecap=\"butt\" stroke-linejoin=\"miter\" stroke-miterlimit=\"10\"\r\n                        stroke-dasharray=\"\" stroke-dashoffset=\"0\" font-family=\"none\" font-weight=\"none\" font-size=\"none\" text-anchor=\"none\"\r\n                        style=\"mix-blend-mode: normal\">\r\n                        <path d=\"M0,252v-252h252v252z\" fill=\"none\"></path>\r\n                        <path d=\"M0,126c0,-69.58788 56.41212,-126 126,-126c69.58788,0 126,56.41212 126,126c0,69.58788 -56.41212,126 -126,126c-69.58788,0 -126,-56.41212 -126,-126zM126,236.88c61.23733,0 110.88,-49.64267 110.88,-110.88c0,-61.23733 -49.64267,-110.88 -110.88,-110.88c-61.23733,0 -110.88,49.64267 -110.88,110.88c0,61.23733 49.64267,110.88 110.88,110.88z\"\r\n                            [ngClass]=\"data?.status > 3?'statusActive':'statusNone'\"></path>\r\n                        <g [ngClass]=\"data?.status > 3?'statusActive':'statusNone'\">\r\n                            <path d=\"M126,55.44075c-1.20562,0.00104 -2.28687,0.74228 -2.72257,1.86642l-18.01921,46.45499l-49.54285,2.52851c-1.2072,0.06111 -2.25223,0.85906 -2.62916,2.00753c-0.37692,1.14848 -0.00796,2.41049 0.92826,3.17506l38.57836,31.54076l-12.6711,47.85908c-0.30963,1.16616 0.12919,2.40273 1.10466,3.11285c0.97547,0.71012 2.28705,0.74781 3.30168,0.09488l41.67193,-26.74629l41.67193,26.74629c1.01464,0.65293 2.32622,0.61524 3.30168,-0.09488c0.97547,-0.71012 1.41429,-1.94669 1.10466,-3.11285l-12.6711,-47.85908l38.57836,-31.54076c0.93622,-0.76457 1.30519,-2.02658 0.92826,-3.17506c-0.37692,-1.14848 -1.42195,-1.94643 -2.62916,-2.00753l-49.54285,-2.52851l-18.01921,-46.45499c-0.4357,-1.12414 -1.51696,-1.86537 -2.72257,-1.86642zM126,66.43949l15.97586,41.19819c0.41758,1.07488 1.42815,1.80374 2.57988,1.86071l43.86369,2.24313l-34.1663,27.9392c-0.88653,0.72486 -1.26806,1.90068 -0.97602,3.00796l11.22705,42.41393l-36.92312,-23.70409c-0.96302,-0.61942 -2.19905,-0.61942 -3.16207,0l-36.92312,23.70409l11.22705,-42.41393c0.29204,-1.10728 -0.08949,-2.2831 -0.97602,-3.00796l-34.1663,-27.9392l43.86369,-2.24313c1.15173,-0.05697 2.1623,-0.78583 2.57988,-1.86071z\"></path>\r\n                        </g>\r\n                        <path d=\"M126,252c-69.58788,0 -126,-56.41212 -126,-126v0c0,-69.58788 56.41212,-126 126,-126v0c69.58788,0 126,56.41212 126,126v0c0,69.58788 -56.41212,126 -126,126z\"\r\n                            fill=\"none\"></path>\r\n                        <path d=\"M126,236.88c-61.23733,0 -110.88,-49.64267 -110.88,-110.88v0c0,-61.23733 49.64267,-110.88 110.88,-110.88v0c61.23733,0 110.88,49.64267 110.88,110.88v0c0,61.23733 -49.64267,110.88 -110.88,110.88z\"\r\n                            fill=\"none\"></path>\r\n                        <path d=\"M126,252c-69.58788,0 -126,-56.41212 -126,-126v0c0,-69.58788 56.41212,-126 126,-126v0c69.58788,0 126,56.41212 126,126v0c0,69.58788 -56.41212,126 -126,126z\"\r\n                            fill=\"none\"></path>\r\n                        <path d=\"M126,236.88c-61.23733,0 -110.88,-49.64267 -110.88,-110.88v0c0,-61.23733 49.64267,-110.88 110.88,-110.88v0c61.23733,0 110.88,49.64267 110.88,110.88v0c0,61.23733 -49.64267,110.88 -110.88,110.88z\"\r\n                            fill=\"none\"></path>\r\n                        <path d=\"M126,246.96c-66.80436,0 -120.96,-54.15564 -120.96,-120.96v0c0,-66.80436 54.15564,-120.96 120.96,-120.96h0c66.80436,0 120.96,54.15564 120.96,120.96v0c0,66.80436 -54.15564,120.96 -120.96,120.96z\"\r\n                            fill=\"none\"></path>\r\n                        <path d=\"M126,231.84c-58.45382,0 -105.84,-47.38618 -105.84,-105.84v0c0,-58.45382 47.38618,-105.84 105.84,-105.84h0c58.45382,0 105.84,47.38618 105.84,105.84v0c0,58.45382 -47.38618,105.84 -105.84,105.84z\"\r\n                            fill=\"none\"></path>\r\n                        <path d=\"M126,239.4c-62.62909,0 -113.4,-50.77091 -113.4,-113.4v0c0,-62.62909 50.77091,-113.4 113.4,-113.4v0c62.62909,0 113.4,50.77091 113.4,113.4v0c0,62.62909 -50.77091,113.4 -113.4,113.4z\"\r\n                            fill=\"none\"></path>\r\n                        <path d=\"M126,224.28c-54.27855,0 -98.28,-44.00145 -98.28,-98.28v0c0,-54.27855 44.00145,-98.28 98.28,-98.28v0c54.27855,0 98.28,44.00145 98.28,98.28v0c0,54.27855 -44.00145,98.28 -98.28,98.28z\"\r\n                            fill=\"none\"></path>\r\n                        <path d=\"M126,224.28c-54.27855,0 -98.28,-44.00145 -98.28,-98.28v0c0,-54.27855 44.00145,-98.28 98.28,-98.28v0c54.27855,0 98.28,44.00145 98.28,98.28v0c0,54.27855 -44.00145,98.28 -98.28,98.28z\"\r\n                            fill=\"none\"></path>\r\n                        <path d=\"M126,209.16c-45.928,0 -83.16,-37.232 -83.16,-83.16v0c0,-45.928 37.232,-83.16 83.16,-83.16v0c45.928,0 83.16,37.232 83.16,83.16v0c0,45.928 -37.232,83.16 -83.16,83.16z\"\r\n                            fill=\"none\"></path>\r\n                        <path d=\"M126,217.98c-50.79915,0 -91.98,-41.18085 -91.98,-91.98v0c0,-50.79915 41.18085,-91.98 91.98,-91.98h0c50.79915,0 91.98,41.18085 91.98,91.98v0c0,50.79915 -41.18085,91.98 -91.98,91.98z\"\r\n                            fill=\"none\"></path>\r\n                        <path d=\"M126,202.86c-42.44861,0 -76.86,-34.41139 -76.86,-76.86v0c0,-42.44861 34.41139,-76.86 76.86,-76.86h0c42.44861,0 76.86,34.41139 76.86,76.86v0c0,42.44861 -34.41139,76.86 -76.86,76.86z\"\r\n                            fill=\"none\"></path>\r\n                        <path d=\"M126,219.24c-51.49503,0 -93.24,-41.74497 -93.24,-93.24v0c0,-51.49503 41.74497,-93.24 93.24,-93.24h0c51.49503,0 93.24,41.74497 93.24,93.24v0c0,51.49503 -41.74497,93.24 -93.24,93.24z\"\r\n                            fill=\"none\"></path>\r\n                        <path d=\"M126,204.12c-43.14448,0 -78.12,-34.97552 -78.12,-78.12v0c0,-43.14448 34.97552,-78.12 78.12,-78.12h0c43.14448,0 78.12,34.97552 78.12,78.12v0c0,43.14448 -34.97552,78.12 -78.12,78.12z\"\r\n                            fill=\"none\"></path>\r\n                        <path d=\"M126,225.54c-54.97442,0 -99.54,-44.56558 -99.54,-99.54v0c0,-54.97442 44.56558,-99.54 99.54,-99.54h0c54.97442,0 99.54,44.56558 99.54,99.54v0c0,54.97442 -44.56558,99.54 -99.54,99.54z\"\r\n                            fill=\"none\"></path>\r\n                        <path d=\"M126,210.42c-46.62388,0 -84.42,-37.79612 -84.42,-84.42v0c0,-46.62388 37.79612,-84.42 84.42,-84.42h0c46.62388,0 84.42,37.79612 84.42,84.42v0c0,46.62388 -37.79612,84.42 -84.42,84.42z\"\r\n                            fill=\"none\"></path>\r\n                        <path d=\"M126,235.62c-60.54145,0 -109.62,-49.07855 -109.62,-109.62v0c0,-60.54145 49.07855,-109.62 109.62,-109.62v0c60.54145,0 109.62,49.07855 109.62,109.62v0c0,60.54145 -49.07855,109.62 -109.62,109.62z\"\r\n                            fill=\"none\"></path>\r\n                        <path d=\"M126,220.5c-52.19091,0 -94.5,-42.30909 -94.5,-94.5v0c0,-52.19091 42.30909,-94.5 94.5,-94.5v0c52.19091,0 94.5,42.30909 94.5,94.5v0c0,52.19091 -42.30909,94.5 -94.5,94.5z\"\r\n                            fill=\"none\"></path>\r\n                        <path d=\"M126,244.44c-65.41261,0 -118.44,-53.02739 -118.44,-118.44v0c0,-65.41261 53.02739,-118.44 118.44,-118.44v0c65.41261,0 118.44,53.02739 118.44,118.44v0c0,65.41261 -53.02739,118.44 -118.44,118.44z\"\r\n                            fill=\"none\"></path>\r\n                        <path d=\"M126,229.32c-57.06206,0 -103.32,-46.25794 -103.32,-103.32v0c0,-57.06206 46.25794,-103.32 103.32,-103.32v0c57.06206,0 103.32,46.25794 103.32,103.32v0c0,57.06206 -46.25794,103.32 -103.32,103.32z\"\r\n                            fill=\"none\"></path>\r\n                        <path d=\"M126,252c-69.58788,0 -126,-56.41212 -126,-126v0c0,-69.58788 56.41212,-126 126,-126v0c69.58788,0 126,56.41212 126,126v0c0,69.58788 -56.41212,126 -126,126z\"\r\n                            fill=\"none\"></path>\r\n                        <path d=\"M126,236.88c-61.23733,0 -110.88,-49.64267 -110.88,-110.88v0c0,-61.23733 49.64267,-110.88 110.88,-110.88v0c61.23733,0 110.88,49.64267 110.88,110.88v0c0,61.23733 -49.64267,110.88 -110.88,110.88z\"\r\n                            fill=\"none\"></path>\r\n                        <path d=\"M126,252c-69.58788,0 -126,-56.41212 -126,-126v0c0,-69.58788 56.41212,-126 126,-126v0c69.58788,0 126,56.41212 126,126v0c0,69.58788 -56.41212,126 -126,126z\"\r\n                            fill=\"none\"></path>\r\n                        <path d=\"M126,236.88c-61.23733,0 -110.88,-49.64267 -110.88,-110.88v0c0,-61.23733 49.64267,-110.88 110.88,-110.88v0c61.23733,0 110.88,49.64267 110.88,110.88v0c0,61.23733 -49.64267,110.88 -110.88,110.88z\"\r\n                            fill=\"none\"></path>\r\n                        <path d=\"M126,252c-69.58788,0 -126,-56.41212 -126,-126v0c0,-69.58788 56.41212,-126 126,-126v0c69.58788,0 126,56.41212 126,126v0c0,69.58788 -56.41212,126 -126,126z\"\r\n                            fill=\"none\"></path>\r\n                        <path d=\"M126,236.88c-61.23733,0 -110.88,-49.64267 -110.88,-110.88v0c0,-61.23733 49.64267,-110.88 110.88,-110.88v0c61.23733,0 110.88,49.64267 110.88,110.88v0c0,61.23733 -49.64267,110.88 -110.88,110.88z\"\r\n                            fill=\"none\"></path>\r\n                        <path d=\"M126,252c-69.58788,0 -126,-56.41212 -126,-126v0c0,-69.58788 56.41212,-126 126,-126v0c69.58788,0 126,56.41212 126,126v0c0,69.58788 -56.41212,126 -126,126z\"\r\n                            fill=\"none\"></path>\r\n                        <path d=\"M126,236.88c-61.23733,0 -110.88,-49.64267 -110.88,-110.88v0c0,-61.23733 49.64267,-110.88 110.88,-110.88v0c61.23733,0 110.88,49.64267 110.88,110.88v0c0,61.23733 -49.64267,110.88 -110.88,110.88z\"\r\n                            fill=\"none\"></path>\r\n                        <path d=\"M126,252c-69.58788,0 -126,-56.41212 -126,-126v0c0,-69.58788 56.41212,-126 126,-126v0c69.58788,0 126,56.41212 126,126v0c0,69.58788 -56.41212,126 -126,126z\"\r\n                            fill=\"none\"></path>\r\n                        <path d=\"M126,236.88c-61.23733,0 -110.88,-49.64267 -110.88,-110.88v0c0,-61.23733 49.64267,-110.88 110.88,-110.88v0c61.23733,0 110.88,49.64267 110.88,110.88v0c0,61.23733 -49.64267,110.88 -110.88,110.88z\"\r\n                            fill=\"none\"></path>\r\n                        <path d=\"M126,252c-69.58788,0 -126,-56.41212 -126,-126v0c0,-69.58788 56.41212,-126 126,-126v0c69.58788,0 126,56.41212 126,126v0c0,69.58788 -56.41212,126 -126,126z\"\r\n                            fill=\"none\"></path>\r\n                        <path d=\"M126,236.88c-61.23733,0 -110.88,-49.64267 -110.88,-110.88v0c0,-61.23733 49.64267,-110.88 110.88,-110.88v0c61.23733,0 110.88,49.64267 110.88,110.88v0c0,61.23733 -49.64267,110.88 -110.88,110.88z\"\r\n                            fill=\"none\"></path>\r\n                        <path d=\"M126,252c-69.58788,0 -126,-56.41212 -126,-126v0c0,-69.58788 56.41212,-126 126,-126v0c69.58788,0 126,56.41212 126,126v0c0,69.58788 -56.41212,126 -126,126z\"\r\n                            fill=\"none\"></path>\r\n                        <path d=\"M126,236.88c-61.23733,0 -110.88,-49.64267 -110.88,-110.88v0c0,-61.23733 49.64267,-110.88 110.88,-110.88v0c61.23733,0 110.88,49.64267 110.88,110.88v0c0,61.23733 -49.64267,110.88 -110.88,110.88z\"\r\n                            fill=\"none\"></path>\r\n                        <path d=\"M126,252c-69.58788,0 -126,-56.41212 -126,-126v0c0,-69.58788 56.41212,-126 126,-126v0c69.58788,0 126,56.41212 126,126v0c0,69.58788 -56.41212,126 -126,126z\"\r\n                            fill=\"none\"></path>\r\n                        <path d=\"M126,236.88c-61.23733,0 -110.88,-49.64267 -110.88,-110.88v0c0,-61.23733 49.64267,-110.88 110.88,-110.88v0c61.23733,0 110.88,49.64267 110.88,110.88v0c0,61.23733 -49.64267,110.88 -110.88,110.88z\"\r\n                            fill=\"none\"></path>\r\n                        <path d=\"M126,252c-69.58788,0 -126,-56.41212 -126,-126v0c0,-69.58788 56.41212,-126 126,-126v0c69.58788,0 126,56.41212 126,126v0c0,69.58788 -56.41212,126 -126,126z\"\r\n                            fill=\"none\"></path>\r\n                        <path d=\"M126,236.88c-61.23733,0 -110.88,-49.64267 -110.88,-110.88v0c0,-61.23733 49.64267,-110.88 110.88,-110.88v0c61.23733,0 110.88,49.64267 110.88,110.88v0c0,61.23733 -49.64267,110.88 -110.88,110.88z\"\r\n                            fill=\"none\"></path>\r\n                        <path d=\"M126,252c-69.58788,0 -126,-56.41212 -126,-126v0c0,-69.58788 56.41212,-126 126,-126v0c69.58788,0 126,56.41212 126,126v0c0,69.58788 -56.41212,126 -126,126z\"\r\n                            fill=\"none\"></path>\r\n                        <path d=\"M126,236.88c-61.23733,0 -110.88,-49.64267 -110.88,-110.88v0c0,-61.23733 49.64267,-110.88 110.88,-110.88v0c61.23733,0 110.88,49.64267 110.88,110.88v0c0,61.23733 -49.64267,110.88 -110.88,110.88z\"\r\n                            fill=\"none\"></path>\r\n                        <path d=\"M126,252c-69.58788,0 -126,-56.41212 -126,-126v0c0,-69.58788 56.41212,-126 126,-126v0c69.58788,0 126,56.41212 126,126v0c0,69.58788 -56.41212,126 -126,126z\"\r\n                            fill=\"none\"></path>\r\n                        <path d=\"M126,236.88c-61.23733,0 -110.88,-49.64267 -110.88,-110.88v0c0,-61.23733 49.64267,-110.88 110.88,-110.88v0c61.23733,0 110.88,49.64267 110.88,110.88v0c0,61.23733 -49.64267,110.88 -110.88,110.88z\"\r\n                            fill=\"none\"></path>\r\n                        <path d=\"M126,252c-69.58788,0 -126,-56.41212 -126,-126v0c0,-69.58788 56.41212,-126 126,-126v0c69.58788,0 126,56.41212 126,126v0c0,69.58788 -56.41212,126 -126,126z\"\r\n                            fill=\"none\"></path>\r\n                        <path d=\"M126,236.88c-61.23733,0 -110.88,-49.64267 -110.88,-110.88v0c0,-61.23733 49.64267,-110.88 110.88,-110.88v0c61.23733,0 110.88,49.64267 110.88,110.88v0c0,61.23733 -49.64267,110.88 -110.88,110.88z\"\r\n                            fill=\"none\"></path>\r\n                        <path d=\"M126,252c-69.58788,0 -126,-56.41212 -126,-126v0c0,-69.58788 56.41212,-126 126,-126v0c69.58788,0 126,56.41212 126,126v0c0,69.58788 -56.41212,126 -126,126z\"\r\n                            fill=\"none\"></path>\r\n                        <path d=\"M126,236.88c-61.23733,0 -110.88,-49.64267 -110.88,-110.88v0c0,-61.23733 49.64267,-110.88 110.88,-110.88v0c61.23733,0 110.88,49.64267 110.88,110.88v0c0,61.23733 -49.64267,110.88 -110.88,110.88z\"\r\n                            fill=\"none\"></path>\r\n                        <path d=\"M126,252c-69.58788,0 -126,-56.41212 -126,-126v0c0,-69.58788 56.41212,-126 126,-126v0c69.58788,0 126,56.41212 126,126v0c0,69.58788 -56.41212,126 -126,126z\"\r\n                            fill=\"none\"></path>\r\n                        <path d=\"M126,236.88c-61.23733,0 -110.88,-49.64267 -110.88,-110.88v0c0,-61.23733 49.64267,-110.88 110.88,-110.88v0c61.23733,0 110.88,49.64267 110.88,110.88v0c0,61.23733 -49.64267,110.88 -110.88,110.88z\"\r\n                            fill=\"none\"></path>\r\n                        <path d=\"M126,252c-69.58788,0 -126,-56.41212 -126,-126v0c0,-69.58788 56.41212,-126 126,-126v0c69.58788,0 126,56.41212 126,126v0c0,69.58788 -56.41212,126 -126,126z\"\r\n                            fill=\"none\"></path>\r\n                        <path d=\"M126,236.88c-61.23733,0 -110.88,-49.64267 -110.88,-110.88v0c0,-61.23733 49.64267,-110.88 110.88,-110.88v0c61.23733,0 110.88,49.64267 110.88,110.88v0c0,61.23733 -49.64267,110.88 -110.88,110.88z\"\r\n                            fill=\"none\"></path>\r\n                        <path d=\"M126,252c-69.58788,0 -126,-56.41212 -126,-126v0c0,-69.58788 56.41212,-126 126,-126v0c69.58788,0 126,56.41212 126,126v0c0,69.58788 -56.41212,126 -126,126z\"\r\n                            fill=\"none\"></path>\r\n                        <path d=\"M126,236.88c-61.23733,0 -110.88,-49.64267 -110.88,-110.88v0c0,-61.23733 49.64267,-110.88 110.88,-110.88v0c61.23733,0 110.88,49.64267 110.88,110.88v0c0,61.23733 -49.64267,110.88 -110.88,110.88z\"\r\n                            fill=\"none\"></path>\r\n                        <path d=\"M126,252c-69.58788,0 -126,-56.41212 -126,-126v0c0,-69.58788 56.41212,-126 126,-126v0c69.58788,0 126,56.41212 126,126v0c0,69.58788 -56.41212,126 -126,126z\"\r\n                            fill=\"none\"></path>\r\n                        <path d=\"M126,236.88c-61.23733,0 -110.88,-49.64267 -110.88,-110.88v0c0,-61.23733 49.64267,-110.88 110.88,-110.88v0c61.23733,0 110.88,49.64267 110.88,110.88v0c0,61.23733 -49.64267,110.88 -110.88,110.88z\"\r\n                            fill=\"none\"></path>\r\n                        <path d=\"M126,252c-69.58788,0 -126,-56.41212 -126,-126v0c0,-69.58788 56.41212,-126 126,-126v0c69.58788,0 126,56.41212 126,126v0c0,69.58788 -56.41212,126 -126,126z\"\r\n                            fill=\"none\"></path>\r\n                        <path d=\"M126,236.88c-61.23733,0 -110.88,-49.64267 -110.88,-110.88v0c0,-61.23733 49.64267,-110.88 110.88,-110.88v0c61.23733,0 110.88,49.64267 110.88,110.88v0c0,61.23733 -49.64267,110.88 -110.88,110.88z\"\r\n                            fill=\"none\"></path>\r\n                        <path d=\"M126,252c-69.58788,0 -126,-56.41212 -126,-126v0c0,-69.58788 56.41212,-126 126,-126v0c69.58788,0 126,56.41212 126,126v0c0,69.58788 -56.41212,126 -126,126z\"\r\n                            fill=\"none\"></path>\r\n                        <path d=\"M126,236.88c-61.23733,0 -110.88,-49.64267 -110.88,-110.88v0c0,-61.23733 49.64267,-110.88 110.88,-110.88v0c61.23733,0 110.88,49.64267 110.88,110.88v0c0,61.23733 -49.64267,110.88 -110.88,110.88z\"\r\n                            fill=\"none\"></path>\r\n                        <path d=\"M126,252c-69.58788,0 -126,-56.41212 -126,-126v0c0,-69.58788 56.41212,-126 126,-126v0c69.58788,0 126,56.41212 126,126v0c0,69.58788 -56.41212,126 -126,126z\"\r\n                            fill=\"none\"></path>\r\n                        <path d=\"M126,236.88c-61.23733,0 -110.88,-49.64267 -110.88,-110.88v0c0,-61.23733 49.64267,-110.88 110.88,-110.88v0c61.23733,0 110.88,49.64267 110.88,110.88v0c0,61.23733 -49.64267,110.88 -110.88,110.88z\"\r\n                            fill=\"none\"></path>\r\n                        <path d=\"M126,252c-69.58788,0 -126,-56.41212 -126,-126v0c0,-69.58788 56.41212,-126 126,-126v0c69.58788,0 126,56.41212 126,126v0c0,69.58788 -56.41212,126 -126,126z\"\r\n                            fill=\"none\"></path>\r\n                        <path d=\"M126,236.88c-61.23733,0 -110.88,-49.64267 -110.88,-110.88v0c0,-61.23733 49.64267,-110.88 110.88,-110.88v0c61.23733,0 110.88,49.64267 110.88,110.88v0c0,61.23733 -49.64267,110.88 -110.88,110.88z\"\r\n                            fill=\"none\"></path>\r\n                    </g>\r\n                </svg>\r\n            </section>\r\n            <section>\r\n                <span>Đã giao hàng</span>\r\n                <br>\r\n                <span>{{data.create | date:'dd/MM/yyyy lúc HH:mm'}}</span>\r\n            </section>\r\n        </div>\r\n    </section>\r\n    <section class=\"orderInfo\">\r\n        <h6>\r\n            <span class=\"orderTitle\">{{'receiver' | translate}} : </span>{{data?.receiver}}</h6>\r\n        <h6>\r\n            <span class=\"orderTitle\">{{'Date' | translate}} : </span>{{data?.date | date:'dd/MM/yyyy lúc HH:mm'}}</h6>\r\n        <h6>\r\n            <span class=\"orderTitle\">{{'address' | translate}} : </span>{{data?.address}}</h6>\r\n        <h6>\r\n            <span class=\"orderTitle\">{{'Phương thức mua hàng' | translate}} : </span>{{data?.type_buy === 1?'Online':'Tại Apoint'}}</h6>\r\n        <h6>\r\n            <span class=\"orderTitle\">{{'Thanh toán' | translate}} : </span>{{data?.type_pay === 0?'COD':'Bank'}}</h6>\r\n    </section>\r\n\r\n    <div class=\"card\">\r\n        <div class=\"table-responsive\">\r\n            <table class=\"table table-hover\">\r\n                <thead>\r\n                    <tr>\r\n                        <th class=\"text-center\">Bcode</th>\r\n                        <th>{{'product' | translate}}</th>\r\n                        <th class=\"text-right\">{{'Quantity' | translate}}</th>\r\n                        <th class=\"text-right\">{{'Đơn giá' | translate}}</th>\r\n                        <th class=\"text-right\">{{'discount' | translate}} ( % )</th>\r\n                        <th class=\"text-right\">{{'Thành tiền' | translate}}</th>\r\n                    </tr>\r\n                </thead>\r\n                <tbody>\r\n                    <tr *ngFor=\"let item of filterProduct(items);let i = index\">\r\n                        <td class=\"text-center\">{{item.bcode}}</td>\r\n                        <td class=\"txt-oflo\" *ngIf=\"item.type_beef > 0\">{{ pathName[item.type_beef] + ' ' + item.nameSpecies+ ' ' + item.weight}}</td>\r\n                        <td class=\"txt-oflo\" *ngIf=\"item.type_milk > 0\">{{item.nameCpass + ' ' + item.name + ' ' + (weightName[item.type_milk] | number:'1.0-0') + 'ml'}}</td>\r\n                        <td class=\"txt-oflo text-right\">{{item.type_beef > 0?1:(item.quantity | number:'1.0-0')}}</td>\r\n                        <td class=\"txt-oflo text-right\">{{item.price | number:'1.0-0'}}</td>\r\n                        <td class=\"txt-oflo text-right\">{{item.saleoff}}</td>\r\n                        <td class=\"text-right\">\r\n                            <span class=\"text-success\">{{item.end_price | number:'1.0-0'}}</span>\r\n                        </td>\r\n                    </tr>\r\n\r\n                    <tr *ngFor=\"let item of bounes\">\r\n                        <td class=\"txt-oflo text-center\"></td>\r\n                        <td class=\"txt-oflo\">{{item?.bounes}}</td>\r\n                        <td class=\"txt-oflo text-right\">1</td>\r\n                        <td class=\"text-right\">\r\n                            {{item.end_price | number:'1.0-0'}} P\r\n                        </td>\r\n                        <td class=\"txt-oflo\"></td>\r\n                        <td class=\"text-right\">\r\n                            <span class=\"text-success\">{{item.end_price | number:'1.0-0'}} P</span>\r\n                        </td>\r\n                    </tr>\r\n\r\n                    <tr *ngIf=\"data?.type_buy === 1 &&data?.type_pay === 0\">\r\n                        <td class=\"text-center\"></td>\r\n                        <td class=\"txt-oflo\">Ship COD</td>\r\n                        <td class=\"txt-oflo\"></td>\r\n                        <td class=\"txt-oflo\"></td>\r\n                        <td class=\"txt-oflo\"></td>\r\n                        <td class=\"text-right\">\r\n                            <span class=\"text-success\">{{'30000' | number:'1.0-0'}}</span>\r\n                        </td>\r\n                    </tr>\r\n                </tbody>\r\n                <thead>\r\n                    <tr>\r\n                        <th class=\"text-center\">Tổng cộng</th>\r\n                        <th class=\"txt-oflo\"></th>\r\n                        <th class=\"txt-oflo\"></th>\r\n                        <th class=\"txt-oflo\"></th>\r\n                        <th class=\"txt-oflo\"></th>\r\n                        <th class=\"text-right\">\r\n                            <span class=\"text-danger\">{{data?.total_price | number:'1.0-0'}} vnđ</span>\r\n                        </th>\r\n                    </tr>\r\n                </thead>\r\n            </table>\r\n        </div>\r\n    </div>\r\n</section>\r\n<div class=\"footerDialog\">\r\n    <button mat-raised-button tabindex=\"-1\" (click)=\"closeDialog()\">{{'cancel' | translate}}</button>\r\n</div>"

/***/ }),

/***/ "./src/app/orders/dialog-orders/dialog-order-details.component.scss":
/*!**************************************************************************!*\
  !*** ./src/app/orders/dialog-orders/dialog-order-details.component.scss ***!
  \**************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".toolbar {\n  min-height: 48px;\n  max-height: 48px;\n  background: #009688;\n  color: #fff; }\n  .toolbar .mat-toolbar-row {\n    padding-right: 0; }\n  .divStatus {\n  display: flex;\n  text-align: center;\n  position: relative;\n  bottom: 35px; }\n  .mat-sort-header-container {\n  align-items: center; }\n  .tab {\n  background-repeat: no-repeat;\n  background-size: contain;\n  background-position-x: 50%; }\n  .mat-tab-nav-bar {\n  display: flex;\n  justify-content: center; }\n  .td-name-product {\n  width: 240px; }\n  .complete-icon {\n  width: 100%;\n  height: 60px;\n  display: flex;\n  align-items: center;\n  justify-content: center; }\n  .br-icon {\n  height: 10px;\n  background: #009688;\n  margin-top: 25px; }\n  .icon__ {\n  border-radius: 100%;\n  background-color: white; }\n  .statusActive {\n  fill: #ffc000; }\n  .statusNone {\n  fill: #ddd; }\n  .wst0 {\n  width: 0%; }\n  .wst1 {\n  width: 12.5%; }\n  .wst2 {\n  width: 37.5%; }\n  .wst3 {\n  width: 62.5%; }\n  .wst4 {\n  width: 100%; }\n  .divWrap {\n  overflow-y: auto;\n  overflow-x: hidden;\n  height: 80vh; }\n  .orderInfo {\n  background: #fafafa;\n  padding: 16px; }\n  .orderTitle {\n  color: #888;\n  font-size: 0.8rem; }\n  .price {\n  color: #F44336; }\n  .footerDialog {\n  padding: 8px 16px;\n  text-align: right;\n  background: #F9f9f9; }\n"

/***/ }),

/***/ "./src/app/orders/dialog-orders/dialog-order-details.component.ts":
/*!************************************************************************!*\
  !*** ./src/app/orders/dialog-orders/dialog-order-details.component.ts ***!
  \************************************************************************/
/*! exports provided: DialogOrderDetailsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DialogOrderDetailsComponent", function() { return DialogOrderDetailsComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _services_order_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../services/order.service */ "./src/app/services/order.service.ts");
/* harmony import */ var _services_user_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../services/user.service */ "./src/app/services/user.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (undefined && undefined.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};




var DialogOrderDetailsComponent = /** @class */ (function () {
    function DialogOrderDetailsComponent(dialogRef, orderService, userService, data) {
        this.dialogRef = dialogRef;
        this.orderService = orderService;
        this.userService = userService;
        this.data = data;
        this.items = [];
        this.bounes = [];
        this.pathName = [
            '',
            'Chuck',
            'Ribs',
            'Loin',
            'Round',
            'Brisket',
            'Plate',
            'Flank',
        ];
        this.weightName = [
            '',
            '250',
            '500',
            '1000',
        ];
        this.loadProfile();
    }
    DialogOrderDetailsComponent.prototype.closeDialog = function () {
        this.dialogRef.close();
    };
    DialogOrderDetailsComponent.prototype.ngOnInit = function () {
    };
    DialogOrderDetailsComponent.prototype.ngAfterViewInit = function () {
        var _this = this;
        setTimeout(function () {
            _this.getListItem();
        }, 500);
    };
    DialogOrderDetailsComponent.prototype.loadProfile = function () {
        this.currentUser = this.userService.getCurrentUser();
    };
    DialogOrderDetailsComponent.prototype.getListItem = function () {
        var _this = this;
        this.orderService.getOrderDetails(this.data.id_order).subscribe(function (data) {
            if (data.message === false) {
                return;
            }
            _this.items = data;
            _this.bounes = data.filter(function (m) { return m.type_product === 3; });
            console.log(_this.items);
            console.log(_this.bounes);
        });
    };
    DialogOrderDetailsComponent.prototype.filterProduct = function (data) {
        return data.filter(function (m) { return m.type_product !== 3; });
    };
    DialogOrderDetailsComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-dialog-order-details',
            template: __webpack_require__(/*! ./dialog-order-details.component.html */ "./src/app/orders/dialog-orders/dialog-order-details.component.html"),
            styles: [__webpack_require__(/*! ./dialog-order-details.component.scss */ "./src/app/orders/dialog-orders/dialog-order-details.component.scss")],
        }),
        __param(3, Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"])(_angular_material__WEBPACK_IMPORTED_MODULE_1__["MAT_DIALOG_DATA"])),
        __metadata("design:paramtypes", [_angular_material__WEBPACK_IMPORTED_MODULE_1__["MatDialogRef"],
            _services_order_service__WEBPACK_IMPORTED_MODULE_2__["OrderService"],
            _services_user_service__WEBPACK_IMPORTED_MODULE_3__["UserService"], Object])
    ], DialogOrderDetailsComponent);
    return DialogOrderDetailsComponent;
}());



/***/ }),

/***/ "./src/app/orders/orders.component.html":
/*!**********************************************!*\
  !*** ./src/app/orders/orders.component.html ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"row\">\r\n    <!-- column -->\r\n    <div class=\"col-12\">\r\n        <div class=\"card\">\r\n            <div class=\"card-body\">\r\n                <div class=\"d-flex\">\r\n                    <div>\r\n                        <h5 class=\"card-title\">Lịch sử giao dịch</h5>\r\n                        <h6 class=\"card-subtitle\">Danh sách đơn hàng</h6>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n            <div class=\"table-responsive\">\r\n                <table class=\"table table-hover\">\r\n                    <thead>  \r\n                        <tr>\r\n                            <th class=\"text-center\">id</th>\r\n                            <th>{{'receiver' | translate}}</th>\r\n                            <th>{{'Date' | translate}}</th>\r\n                            <th>{{'address' | translate}}</th>\r\n                            <th>{{'totalPrice' | translate}}</th>\r\n                            <th>{{'Status' |translate}}</th>\r\n                        </tr>\r\n                    </thead>\r\n                    <tbody>\r\n                        <tr *ngFor=\"let order of orders\" (click)=\"showDetails(order)\">\r\n                            <td class=\"text-center\">{{order?.id_order}}</td>\r\n                            <td class=\"txt-oflo\">{{order?.receiver}}</td>\r\n                            <td class=\"txt-oflo\">{{order?.date | date:'dd/MM/yyyy lúc HH:mm'}}</td>\r\n                            <td class=\"txt-oflo\">{{order?.address}}</td>\r\n                            <td>\r\n                                <span class=\"text-danger\">{{order?.total_price | number:'1.0-0'}} vnđ</span>\r\n                            </td>\r\n                            <td class=\"txt-oflo\" *ngIf=\"order?.status === '1'\">Chờ xác nhận</td>\r\n                            <td class=\"txt-oflo\" *ngIf=\"order?.status === '2'\">Đã xác nhận</td>\r\n                            <td class=\"txt-oflo\" *ngIf=\"order?.status === '3'\">Đang vận chuyển</td>\r\n                            <td class=\"txt-oflo\" *ngIf=\"order?.status === '4'\">Đã giao hàng</td>\r\n                        </tr>\r\n                    </tbody>\r\n                </table>\r\n            </div>\r\n        </div>\r\n    </div>\r\n</div>"

/***/ }),

/***/ "./src/app/orders/orders.component.scss":
/*!**********************************************!*\
  !*** ./src/app/orders/orders.component.scss ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".wrap {\n  margin: 0 auto; }\n\n.listItem {\n  height: unset !important;\n  opacity: 0.8;\n  transition: all .3s;\n  cursor: pointer; }\n\n.listItem:hover {\n    opacity: 1;\n    text-decoration: none;\n    border-color: #2b85e7;\n    border-radius: 4px;\n    box-shadow: 0 8px 8px rgba(1, 67, 163, 0.24), 0 0 8px rgba(1, 67, 163, 0.12), 0 6px 18px rgba(43, 133, 231, 0.12);\n    -webkit-transform: translateY(-2px);\n    transform: translateY(-2px); }\n\n.listItem .mat-list-item-content {\n    display: flex; }\n\n.info {\n  flex: 1; }\n\n.text {\n  margin: 10px 0; }\n\n.title {\n  font-size: 0.8rem;\n  font-weight: 100; }\n"

/***/ }),

/***/ "./src/app/orders/orders.component.ts":
/*!********************************************!*\
  !*** ./src/app/orders/orders.component.ts ***!
  \********************************************/
/*! exports provided: OrdersComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OrdersComponent", function() { return OrdersComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _dialog_orders_dialog_order_details_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./dialog-orders/dialog-order-details.component */ "./src/app/orders/dialog-orders/dialog-order-details.component.ts");
/* harmony import */ var _services_order_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../services/order.service */ "./src/app/services/order.service.ts");
/* harmony import */ var _services_user_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../services/user.service */ "./src/app/services/user.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var OrdersComponent = /** @class */ (function () {
    function OrdersComponent(dialog, orderService, userService) {
        this.dialog = dialog;
        this.orderService = orderService;
        this.userService = userService;
        this.orders = [];
        this.loadProfile();
    }
    OrdersComponent.prototype.ngOnInit = function () {
        this.getListOrder();
    };
    OrdersComponent.prototype.loadProfile = function () {
        this.currentUser = this.userService.getCurrentUser();
    };
    OrdersComponent.prototype.getListOrder = function () {
        var _this = this;
        this.orderService.getUserOrder(this.currentUser.id_user).subscribe(function (data) {
            if (data) {
                _this.orders = data;
                console.log(_this.orders);
            }
        });
    };
    OrdersComponent.prototype.showDetails = function (order) {
        var dialogRef = this.dialog.open(_dialog_orders_dialog_order_details_component__WEBPACK_IMPORTED_MODULE_2__["DialogOrderDetailsComponent"], {
            data: order,
            maxHeight: '98vh',
            panelClass: 'dialog-order'
        });
        dialogRef.afterClosed().subscribe(function () {
        });
    };
    OrdersComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-orders',
            template: __webpack_require__(/*! ./orders.component.html */ "./src/app/orders/orders.component.html"),
            styles: [__webpack_require__(/*! ./orders.component.scss */ "./src/app/orders/orders.component.scss")]
        }),
        __metadata("design:paramtypes", [_angular_material__WEBPACK_IMPORTED_MODULE_1__["MatDialog"],
            _services_order_service__WEBPACK_IMPORTED_MODULE_3__["OrderService"],
            _services_user_service__WEBPACK_IMPORTED_MODULE_4__["UserService"]])
    ], OrdersComponent);
    return OrdersComponent;
}());



/***/ }),

/***/ "./src/app/profiles/address/address.component.html":
/*!*********************************************************!*\
  !*** ./src/app/profiles/address/address.component.html ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container-fluid\">\r\n    <div class=\"row page-titles\">\r\n        <div class=\"col-md-5 align-self-center\">\r\n            <h4 class=\"text-themecolor\">{{'Management Address' |translate}}</h4>\r\n        </div>\r\n    </div>\r\n    <div class=\"row\">\r\n        <!-- column -->\r\n        <div class=\"col-12\">\r\n            <div class=\"card\">\r\n                <div class=\"card-body\">\r\n                    <div class=\"d-flex\">\r\n                        <div>\r\n                            <h5 class=\"card-title\">{{'List Address' | translate}}</h5>\r\n                            <h6 class=\"card-subtitle\">{{'Check your default address' | translate}} </h6>\r\n                        </div>\r\n                        <div class=\"ml-auto\">\r\n                            <button mat-raised-button color=\"primary\" (click)=\"addNew()\">{{'Add New' |translate}}</button>\r\n                        </div>\r\n                    </div>\r\n                </div>\r\n                <div class=\"table-responsive\">\r\n                    <table class=\"table table-hover\">\r\n                        <thead>\r\n                            <tr>\r\n                                <th>id</th>\r\n                                <th>{{'Name' | translate}}</th>\r\n                                <th>{{'Address' | translate}}</th>\r\n                                <th>{{'Phone' | translate}}</th>\r\n                                <th>{{'Default' | translate}}</th>\r\n                                <th></th>\r\n                            </tr>\r\n                        </thead>\r\n                        <tbody>\r\n                            <tr *ngFor=\"let address of listUserAddress; let i = index\" class=\"pointer\" (click)=\"showDetails(address)\">\r\n                                <td class=\"txt-oflo\">{{address.id_address}}</td>\r\n                                <td class=\"txt-oflo\">{{address.tagName}}</td>\r\n                                <td class=\"txt-oflo\">{{address.address}}</td>\r\n                                <td class=\"txt-oflo\">{{address.phone}}</td>\r\n                                <td (click)=\"$event.stopPropagation()\">\r\n                                    <mat-checkbox (change)=\"changeDefault(address, $event)\" [checked]=\"address.id_address === currentUser.main_address?true:false\"></mat-checkbox>\r\n                                </td>\r\n                                <td (click)=\"$event.stopPropagation()\">\r\n                                    <a (click)=\"deleteAddress(address,i)\" *ngIf=\"currentUser.main_address !== address.id_address\" class=\"btn btn-rounded btn-outline-danger tdDelete\"><i class=\"material-icons\">delete</i>Delete</a>\r\n                                </td>\r\n                            </tr>\r\n\r\n                        </tbody>\r\n                    </table>\r\n                </div>\r\n            </div>\r\n        </div>\r\n    </div>\r\n</div>"

/***/ }),

/***/ "./src/app/profiles/address/address.component.scss":
/*!*********************************************************!*\
  !*** ./src/app/profiles/address/address.component.scss ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".tdDelete {\n  align-items: center;\n  display: flex;\n  width: -webkit-fit-content;\n  width: -moz-fit-content;\n  width: fit-content; }\n"

/***/ }),

/***/ "./src/app/profiles/address/address.component.ts":
/*!*******************************************************!*\
  !*** ./src/app/profiles/address/address.component.ts ***!
  \*******************************************************/
/*! exports provided: AddressComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddressComponent", function() { return AddressComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_user_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../services/user.service */ "./src/app/services/user.service.ts");
/* harmony import */ var _node_modules_angular_material__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../node_modules/@angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _dialog_dialog_details_dialog_address_details_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./dialog/dialog-details/dialog-address-details.component */ "./src/app/profiles/address/dialog/dialog-details/dialog-address-details.component.ts");
/* harmony import */ var _services_customer_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../services/customer.service */ "./src/app/services/customer.service.ts");
/* harmony import */ var _node_modules_ngx_toastr__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../../node_modules/ngx-toastr */ "./node_modules/ngx-toastr/toastr.es5.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var AddressComponent = /** @class */ (function () {
    function AddressComponent(userService, customerService, toastr, dialog) {
        this.userService = userService;
        this.customerService = customerService;
        this.toastr = toastr;
        this.dialog = dialog;
        this.listUserAddress = [];
        this.loadProfile();
    }
    AddressComponent.prototype.ngOnInit = function () {
        console.log(this.currentUser);
        this.getListUserAddress();
    };
    AddressComponent.prototype.loadProfile = function () {
        this.currentUser = this.userService.getCurrentUser();
    };
    AddressComponent.prototype.getListUserAddress = function () {
        var _this = this;
        this.customerService.getListDeliveryAddress(this.currentUser.id_user).subscribe(function (data) {
            if (data) {
                _this.listUserAddress = data;
            }
        });
    };
    AddressComponent.prototype.changeDefault = function (address, event) {
        var _this = this;
        console.log(event);
        if (address.id_address !== this.currentUser.main_address) {
            this.currentUser.main_address = address.id_address;
            // call api
            this.customerService.updateProfile(this.currentUser.id_user, this.currentUser).subscribe(function (data) {
                if (data.error === false) {
                    // tslint:disable-next-line:max-line-length
                    _this.customerService.customerLogin({ email: _this.currentUser.email, password: _this.currentUser.password }).subscribe(function (result) {
                        if (result.message === true) {
                            localStorage.setItem('CurrentUser', JSON.stringify(_this.currentUser));
                            _this.loadProfile();
                            _this.toastr.success('', 'Thay đổi thành công!', {
                                progressBar: true,
                                positionClass: 'toast-bottom-right',
                                timeOut: 3000
                            });
                        }
                    });
                }
            });
        }
        else {
            event.checked = true;
            event.source.checked = true;
        }
    };
    AddressComponent.prototype.addNew = function () {
        var _this = this;
        var dialogRef = this.dialog.open(_dialog_dialog_details_dialog_address_details_component__WEBPACK_IMPORTED_MODULE_3__["DialogAddressDetailsComponent"], {
            data: { id_address: '' },
            panelClass: '',
        });
        dialogRef.afterClosed().subscribe(function (result) {
            if (result) {
                _this.customerService.addDeliveryAddress(_this.currentUser.id_user, result).subscribe(function (data) {
                    if (data.message === true) {
                        result.id_address = data.insertId;
                        _this.listUserAddress.splice(0, 0, result);
                        _this.toastr.success('', 'Thêm thành công!', {
                            progressBar: true,
                            positionClass: 'toast-bottom-right',
                            timeOut: 3000
                        });
                    }
                });
            }
        });
    };
    AddressComponent.prototype.deleteAddress = function (address, i) {
        var _this = this;
        this.customerService.deleteDeliveryAddress(address.id_address).subscribe(function (data) {
            if (data.message === true) {
                _this.listUserAddress.splice(i, 1);
                _this.toastr.success('', 'Xóa thành công!', {
                    progressBar: true,
                    positionClass: 'toast-bottom-right',
                    timeOut: 3000
                });
            }
        });
    };
    AddressComponent.prototype.showDetails = function (address) {
        var dialogRef = this.dialog.open(_dialog_dialog_details_dialog_address_details_component__WEBPACK_IMPORTED_MODULE_3__["DialogAddressDetailsComponent"], {
            data: address,
        });
    };
    AddressComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-address',
            template: __webpack_require__(/*! ./address.component.html */ "./src/app/profiles/address/address.component.html"),
            styles: [__webpack_require__(/*! ./address.component.scss */ "./src/app/profiles/address/address.component.scss")]
        }),
        __metadata("design:paramtypes", [_services_user_service__WEBPACK_IMPORTED_MODULE_1__["UserService"],
            _services_customer_service__WEBPACK_IMPORTED_MODULE_4__["CustomerService"],
            _node_modules_ngx_toastr__WEBPACK_IMPORTED_MODULE_5__["ToastrService"],
            _node_modules_angular_material__WEBPACK_IMPORTED_MODULE_2__["MatDialog"]])
    ], AddressComponent);
    return AddressComponent;
}());



/***/ }),

/***/ "./src/app/profiles/address/dialog/dialog-details/dialog-address-details.component.html":
/*!**********************************************************************************************!*\
  !*** ./src/app/profiles/address/dialog/dialog-details/dialog-address-details.component.html ***!
  \**********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<mat-toolbar class=\"toolbar\">\r\n    <mat-toolbar-row>\r\n        <span>{{data.id_address?('Edit Address' | translate):('New Address' | translate)}}</span>\r\n        <span class=\"fill-space\"></span>\r\n        <button mat-icon-button (click)=\"closeDialog()\">\r\n            <mat-icon>clear</mat-icon>\r\n        </button>\r\n    </mat-toolbar-row>\r\n</mat-toolbar>\r\n<form [formGroup]=\"myForm\" class=\"form\">\r\n    <div class=\"body\">\r\n        <mat-form-field class=\"formField\">\r\n            <input matInput placeholder=\"{{'Name' | translate}}\" #name name=\"name\" [formControl]=\"nameFormControl\" [errorStateMatcher]=\"matcher\"\r\n                required>\r\n            <mat-error *ngIf=\"nameFormControl.hasError('required')\">\r\n                <strong>{{'errorNameRequired' | translate}}</strong>\r\n            </mat-error>\r\n        </mat-form-field>\r\n        <mat-form-field class=\"formField\">\r\n            <textarea matTextareaAutosize matAutosizeMinRows=\"2\" matAutosizeMaxRows=\"10\" matInput name=\"address\" formControlName=\"address\"\r\n                placeholder=\"{{'Address' | translate}}\"></textarea>\r\n        </mat-form-field>\r\n        <mat-form-field class=\"formField\">\r\n            <input matInput placeholder=\"{{'Phone' | translate}}\" name=\"phone\" formControlName=\"phone\">\r\n        </mat-form-field>\r\n\r\n    </div>\r\n    <div class=\"footerDialog\">\r\n        <button mat-raised-button (click)=\"closeDialog()\">{{'cancel' | translate}}</button>\r\n        <button mat-raised-button class=\"btnAdd\" #btnAdd (click)=\"onSubmit(myForm,btnAdd)\" [disabled]=\"!myForm.valid || !myForm.dirty\">{{'save' | translate}}</button>\r\n    </div>\r\n</form>"

/***/ }),

/***/ "./src/app/profiles/address/dialog/dialog-details/dialog-address-details.component.scss":
/*!**********************************************************************************************!*\
  !*** ./src/app/profiles/address/dialog/dialog-details/dialog-address-details.component.scss ***!
  \**********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".toolbar {\n  min-height: 48px;\n  max-height: 48px;\n  background: #009688;\n  color: #fff; }\n\n.formField {\n  width: 100%; }\n\n.btnAdd {\n  background: #009688;\n  color: #fff;\n  margin-left: 10px; }\n\n.body {\n  padding: 16px 16px 0 16px; }\n\n.footerDialog {\n  padding: 8px 16px;\n  background: #fafafa;\n  text-align: right; }\n\nbutton:hover {\n  background-color: #00BFA5;\n  box-shadow: 0 3px 5px -1px rgba(0, 0, 0, 0.2), 0 6px 10px 0 rgba(0, 0, 0, 0.14), 0 1px 18px 0 rgba(0, 0, 0, 0.12); }\n"

/***/ }),

/***/ "./src/app/profiles/address/dialog/dialog-details/dialog-address-details.component.ts":
/*!********************************************************************************************!*\
  !*** ./src/app/profiles/address/dialog/dialog-details/dialog-address-details.component.ts ***!
  \********************************************************************************************/
/*! exports provided: DialogAddressDetailsComponent, MyErrorStateMatcher */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DialogAddressDetailsComponent", function() { return DialogAddressDetailsComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MyErrorStateMatcher", function() { return MyErrorStateMatcher; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _services_customer_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../services/customer.service */ "./src/app/services/customer.service.ts");
/* harmony import */ var _node_modules_ngx_toastr__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../../../node_modules/ngx-toastr */ "./node_modules/ngx-toastr/toastr.es5.js");
/* harmony import */ var _services_user_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../../services/user.service */ "./src/app/services/user.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (undefined && undefined.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};






var DialogAddressDetailsComponent = /** @class */ (function () {
    function DialogAddressDetailsComponent(dialogRef, customerService, toastr, userService, data) {
        this.dialogRef = dialogRef;
        this.customerService = customerService;
        this.toastr = toastr;
        this.userService = userService;
        this.data = data;
        this.nameFormControl = new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('', [
            _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required,
        ]);
        this.matcher = new MyErrorStateMatcher();
        this.loadProfile();
    }
    DialogAddressDetailsComponent.prototype.closeDialog = function () {
        this.dialogRef.close();
    };
    DialogAddressDetailsComponent.prototype.loadProfile = function () {
        this.currentUser = this.userService.getCurrentUser();
    };
    DialogAddressDetailsComponent.prototype.ngOnInit = function () {
        this.loadFormControl();
    };
    DialogAddressDetailsComponent.prototype.loadFormControl = function () {
        this.myForm = new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormGroup"]({
            'phone': new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](),
            'tagName': this.nameFormControl,
            'address': new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](),
        });
    };
    DialogAddressDetailsComponent.prototype.ngAfterViewInit = function () {
        console.log(this.myForm);
        if (this.data.id_address) {
            this.setDataToInput();
        }
    };
    DialogAddressDetailsComponent.prototype.setDataToInput = function () {
        var _this = this;
        setTimeout(function () {
            _this.myForm.controls.phone.setValue(_this.data.phone);
            _this.myForm.controls.tagName.setValue(_this.data.tagName);
            _this.myForm.controls.address.setValue(_this.data.address);
        }, 1);
    };
    DialogAddressDetailsComponent.prototype.onSubmit = function (myform, btnAdd) {
        var _this = this;
        btnAdd.disabled = true;
        if (myform.valid && myform.dirty) {
            if (this.data.id_address) {
                this.data.phone = myform.value.phone;
                this.data.tagName = myform.value.tagName;
                this.data.address = myform.value.address;
                this.customerService.editDeliveryAddress(this.data.id_address, this.data).subscribe(function (result) {
                    _this.loadFormControl();
                    _this.setDataToInput();
                    _this.toastr.success('', 'Thay đổi thành công!', {
                        progressBar: true,
                        positionClass: 'toast-bottom-right',
                        timeOut: 3000
                    });
                });
            }
            else {
                this.dialogRef.close(myform.value);
            }
        }
    };
    DialogAddressDetailsComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-dialog-address-details',
            template: __webpack_require__(/*! ./dialog-address-details.component.html */ "./src/app/profiles/address/dialog/dialog-details/dialog-address-details.component.html"),
            styles: [__webpack_require__(/*! ./dialog-address-details.component.scss */ "./src/app/profiles/address/dialog/dialog-details/dialog-address-details.component.scss")],
        }),
        __param(4, Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"])(_angular_material__WEBPACK_IMPORTED_MODULE_1__["MAT_DIALOG_DATA"])),
        __metadata("design:paramtypes", [_angular_material__WEBPACK_IMPORTED_MODULE_1__["MatDialogRef"],
            _services_customer_service__WEBPACK_IMPORTED_MODULE_3__["CustomerService"],
            _node_modules_ngx_toastr__WEBPACK_IMPORTED_MODULE_4__["ToastrService"],
            _services_user_service__WEBPACK_IMPORTED_MODULE_5__["UserService"], Object])
    ], DialogAddressDetailsComponent);
    return DialogAddressDetailsComponent;
}());

var MyErrorStateMatcher = /** @class */ (function () {
    function MyErrorStateMatcher() {
    }
    MyErrorStateMatcher.prototype.isErrorState = function (control, form) {
        var isSubmitted = form && form.submitted;
        return !!(control && control.invalid && (control.dirty || control.touched || isSubmitted));
    };
    return MyErrorStateMatcher;
}());



/***/ }),

/***/ "./src/app/profiles/profiles.component.html":
/*!**************************************************!*\
  !*** ./src/app/profiles/profiles.component.html ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container-fluid\">\r\n    <div class=\"row page-titles\">\r\n        <div class=\"col-md-5 align-self-center\">\r\n            <h4 class=\"text-themecolor\">{{'Profile' | translate}}</h4>\r\n        </div>\r\n        <div class=\"col-md-7 align-self-center text-right\">\r\n            <div class=\"d-flex justify-content-end align-items-center\">\r\n                <button mat-raised-button [routerLink]=\"['/app/profiles/address']\">{{'Management Address'}}</button>\r\n            </div>\r\n        </div>\r\n    </div>\r\n\r\n    <div class=\"row\">\r\n        <!-- Column -->\r\n        <div class=\"col-lg-4 col-xlg-3 col-md-5\">\r\n            <div class=\"card\">\r\n                <div class=\"card-body\">\r\n                    <input type=\"file\">\r\n                    <div class=\"text-center m-t-30\">\r\n                        <div mat-card-avatar class=\"avatarUser\" [style.backgroundImage]=\"'url('+ (currentUser.avatar?currentUser.avatar:'http://i1150.photobucket.com/albums/o614/manhtung159/none-user_zpsz4mxlhzn.jpg') +')'\">\r\n                            <svg version=\"1.1\" id=\"camera\" x=\"0px\" y=\"0px\" viewBox=\"0 0 25 15\" enable-background=\"new 0 0 25 15\" xml:space=\"preserve\">\r\n                                <path id=\"cameraFrame\" fill=\"none\" stroke=\"white\" stroke-miterlimit=\"10\" d=\"M23.1,14.1H1.9c-0.6,0-1-0.4-1-1V1.9c0-0.6,0.4-1,1-1h21.2\r\n                                        c0.6,0,1,0.4,1,1v11.3C24.1,13.7,23.7,14.1,23.1,14.1z\" />\r\n                                <path id=\"circle\" fill=\"none\" stroke=\"#ffffff\" stroke-width=\"1.4\" stroke-miterlimit=\"12\" d=\"M17.7,7.5c0-2.8-2.3-5.2-5.2-5.2S7.3,4.7,7.3,7.5s2.3,5.2,5.2,5.2\r\n                                        S17.7,10.3,17.7,7.5z\" />\r\n                                <g id=\"plus\">\r\n                                    <path fill=\"none\" id=\"plusLine\" class=\"line\" stroke=\"#ffffff\" stroke-linecap=\"round\" stroke-miterlimit=\"10\" d=\"M20.9,2.3v4.4\"\r\n                                    />\r\n                                    <path fill=\"none\" class=\"line\" stroke=\"#ffffff\" stroke-linecap=\"round\" stroke-miterlimit=\"10\" d=\"M18.7,4.6h4.4\" />\r\n                                </g>\r\n                            </svg>\r\n                        </div>\r\n                        <h4 class=\"card-title m-t-10\">{{currentUser?.name}}</h4>\r\n                        <h6 class=\"card-subtitle\">{{currentUser?.email}}</h6>\r\n                        <div class=\"row text-center justify-content-md-center\">\r\n                            <div class=\"col-4\">\r\n                                <a href=\"javascript:void(0)\" class=\"link\">\r\n                                    <i class=\"icon-people\"></i>\r\n                                    <font class=\"font-medium\">{{currentUser?.point}} {{currentUser?.point\r\n                                        < 2? 'point': 'points'}}</font>\r\n                                </a>\r\n                            </div>\r\n                        </div>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n        </div>\r\n        <!-- Column -->\r\n        <!-- Column -->\r\n        <div class=\"col-lg-8 col-xlg-9 col-md-7\">\r\n            <div class=\"card\">\r\n                <!-- Tab panes -->\r\n                <div class=\"card-body\">\r\n                    <form class=\"form-horizontal form-material\" (ngSubmit)=\"onSubmit()\" (keyup.enter)=\"onSubmit()\" [formGroup]=\"form\" #f=\"ngForm\"\r\n                        novalidate autocomplete=\"off\">\r\n                        <div class=\"form-group\">\r\n                            <label class=\"col-md-12\">{{'Full Name' | translate}}</label>\r\n                            <div class=\"col-md-12\">\r\n                                <input type=\"text\" formControlName=\"name\" class=\"form-control form-control-line\" required>\r\n                            </div>\r\n                        </div>\r\n                        <div class=\"form-group\">\r\n                            <label for=\"example-email\" class=\"col-md-12\">Email</label>\r\n                            <div class=\"col-md-12\">\r\n                                <input type=\"email\" [value]=\"currentUser?.email\" readonly=\"true\" class=\"form-control form-control-line\" name=\"example-email\"\r\n                                    id=\"example-email\" required>\r\n                            </div>\r\n                        </div>\r\n                        <div class=\"form-group\">\r\n                            <label class=\"col-md-12\">{{'Password' | translate}}</label>\r\n                            <div class=\"col-md-12\">\r\n                                <input type=\"password\" formControlName=\"password\" autocomplete=\"new-password\" class=\"form-control form-control-line\" required>\r\n                            </div>\r\n                        </div>\r\n\r\n                        <div class=\"form-group gender\">\r\n                            <label class=\"col-md-12\">{{'Gender' | translate}}</label>\r\n                            <mat-radio-group formControlName=\"gender\">\r\n                                <mat-radio-button class=\"m-r-10 m-l-10\" [value]='1'>Nam</mat-radio-button>\r\n                                <mat-radio-button [value]='0'>Nu</mat-radio-button>\r\n                            </mat-radio-group>\r\n                        </div>\r\n                        <div class=\"form-group\">\r\n                            <label class=\"col-md-12\">{{'Birthday' | translate}}</label>\r\n                            <mat-form-field class=\"m-l-10\">\r\n                                <input matInput [matDatepicker]=\"picker\" formControlName=\"birthday\">\r\n                                <mat-datepicker-toggle matSuffix [for]=\"picker\"></mat-datepicker-toggle>\r\n                                <mat-datepicker #picker></mat-datepicker>\r\n                            </mat-form-field>\r\n                        </div>\r\n\r\n                        <div class=\"form-group\">\r\n                            <label class=\"col-sm-12\">{{'Select Default Address' | translate}}</label>\r\n                            <div class=\"col-sm-12\">\r\n                                <select class=\"form-control form-control-line\" formControlName=\"main_address\">\r\n                                    <option *ngFor=\"let address of listUserAddress\" [value]=\"address.id_address\">\r\n                                        {{address.address}}\r\n                                    </option>\r\n                                </select>\r\n                            </div>\r\n                        </div>\r\n                        <div class=\"form-group\">\r\n                            <label class=\"col-sm-12\">{{'Select City' | translate}}</label>\r\n                            <div class=\"col-sm-12\">\r\n                                <select class=\"form-control form-control-line\" formControlName=\"area\">\r\n                                    <option value=\"HCM\">{{'HCM' | translate}}</option>\r\n                                    <option value=\"VT\">{{'VT' | translate}}</option>\r\n                                </select>\r\n                            </div>\r\n                        </div>\r\n                        <div class=\"form-group\">\r\n                            <label class=\"col-sm-12\">{{'Select Language' | translate}}</label>\r\n                            <div class=\"col-sm-12\">\r\n                                <select class=\"form-control form-control-line\" formControlName=\"language\">\r\n                                    <option value=\"vi\">{{'vi' | translate}}</option>\r\n                                    <option value=\"en\">{{'en' | translate}}</option>\r\n                                </select>\r\n                            </div>\r\n                        </div>\r\n                        <div class=\"form-group\">\r\n                            <div class=\"col-sm-12\">\r\n                                <button class=\"btn btn-success\" [ngClass]=\"form.dirty === true?'':'preventClick'\" type=\"submit\">{{'Update Profile' | translate}}</button>\r\n                            </div>\r\n                        </div>\r\n                    </form>\r\n                </div>\r\n            </div>\r\n        </div>\r\n    </div>\r\n</div>"

/***/ }),

/***/ "./src/app/profiles/profiles.component.scss":
/*!**************************************************!*\
  !*** ./src/app/profiles/profiles.component.scss ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".matCard {\n  position: relative;\n  margin: 18px auto;\n  padding: 0;\n  word-wrap: break-word;\n  border-radius: 4px; }\n\n.card-img {\n  background-image: url(\"http://nguoinoitieng.tv/images/nnt/96/1/bbpw.jpg\");\n  background-size: cover;\n  background-repeat: no-repeat;\n  height: 300px;\n  width: 100%;\n  max-width: 100%;\n  border-top-left-radius: calc(.25rem - 1px);\n  border-top-right-radius: calc(.25rem - 1px); }\n\n.profile-header {\n  margin-top: -50px;\n  display: flex; }\n\n.divAvatar {\n  position: relative;\n  width: 100%;\n  min-height: 1px; }\n\n.profile-image {\n  cursor: pointer;\n  background-color: transparent; }\n\n.profile-section {\n  flex-wrap: wrap; }\n\n.text-Name {\n  font-size: 1.2rem;\n  text-transform: uppercase;\n  color: #009da0; }\n\n.container {\n  display: unset !important; }\n\n.tabMenu {\n  top: -66px;\n  position: relative;\n  flex: 1; }\n\n/deep/.mat-tab-labels {\n  justify-content: space-around; }\n\n.divForm {\n  margin: 16px 0.1em; }\n\n.gender {\n  overflow: unset; }\n\n.avatarUser {\n  width: 150px;\n  height: 150px;\n  display: inline-block;\n  position: relative;\n  overflow: hidden;\n  border-radius: 100%;\n  background: #C68587;\n  background-image: url(http://i1150.photobucket.com/albums/o614/manhtung159/none-user_zpsz4mxlhzn.jpg);\n  transition: border 0.5s linear;\n  background-repeat: no-repeat;\n  background-size: cover; }\n\n.avatarUser:after {\n    content: \"\";\n    position: absolute;\n    top: 0;\n    left: 0;\n    background-image: linear-gradient(45deg, #22c1c3, #fdbb2d);\n    width: 151px;\n    height: 151px;\n    border-radius: 100%;\n    opacity: 0;\n    transition: opacity 0.3s linear;\n    cursor: pointer;\n    -webkit-transform-style: preserve-3d; }\n\n.avatarUser:hover:after {\n    opacity: 0.7; }\n\n.avatarUser.open:hover:after {\n    opacity: 0; }\n\n#camera {\n  -webkit-transform: scale(0.4);\n  position: relative;\n  z-index: 9999;\n  cursor: pointer;\n  top: 18%;\n  overflow: hidden; }\n\n#circle {\n  -webkit-transform: scale(0.75);\n  -webkit-transform-origin: 50% 50%;\n  -webkit-transition: all 0.3s linear;\n  stroke-dashoffset: 33px;\n  stroke-dasharray: 33px; }\n\n#cameraFrame {\n  -webkit-transition: all 0.5s linear;\n  stroke-dashoffset: 72px;\n  stroke-dasharray: 72px; }\n\n#plus {\n  -webkit-transition: all 0.3s linear;\n  stroke-dashoffset: 5px;\n  stroke-dasharray: 5px; }\n\n.avatarUser:hover > #camera > #cameraFrame {\n  stroke-dashoffset: 0; }\n\n.avatarUser:hover > #camera > #circle {\n  stroke-dashoffset: 0px; }\n\n.avatarUser:hover > #camera > #plus {\n  stroke-dashoffset: 0px; }\n\n.avatarUser:active > #camera > #cameraFrame {\n  -webkit-transition: none;\n  stroke: rgba(255, 255, 255, 0.7); }\n\n.avatarUser:active > #camera > #circle {\n  -webkit-transition: none;\n  stroke: rgba(255, 255, 255, 0.7); }\n\n.avatarUser:active > #camera > #plus {\n  -webkit-transition: none;\n  stroke: rgba(255, 255, 255, 0); }\n\n#camera {\n  transition: 250ms cubic-bezier(0.7, 0, 0.36, 1); }\n\n.avatarUser.open > #camera {\n  -webkit-transform: scale(0);\n  fill: white; }\n\n.avatarUser.open > #camera {\n  visibility: hidden; }\n\n.fullwidth {\n  width: 100%; }\n\n.wrapInput {\n  margin: 0 10px; }\n"

/***/ }),

/***/ "./src/app/profiles/profiles.component.ts":
/*!************************************************!*\
  !*** ./src/app/profiles/profiles.component.ts ***!
  \************************************************/
/*! exports provided: ProfilesComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProfilesComponent", function() { return ProfilesComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_user_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../services/user.service */ "./src/app/services/user.service.ts");
/* harmony import */ var _node_modules_angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../node_modules/@angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _services_customer_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../services/customer.service */ "./src/app/services/customer.service.ts");
/* harmony import */ var _node_modules_ngx_toastr__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../node_modules/ngx-toastr */ "./node_modules/ngx-toastr/toastr.es5.js");
/* harmony import */ var _node_modules_ngx_translate_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../node_modules/@ngx-translate/core */ "./node_modules/@ngx-translate/core/fesm5/ngx-translate-core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var ProfilesComponent = /** @class */ (function () {
    function ProfilesComponent(userService, customerService, translateService, toastr) {
        this.userService = userService;
        this.customerService = customerService;
        this.translateService = translateService;
        this.toastr = toastr;
        this.listUserAddress = [];
        this.loadProfile();
    }
    ProfilesComponent.prototype.ngOnInit = function () {
        this.initForm();
        this.getListUserAddress();
    };
    ProfilesComponent.prototype.ngAfterViewInit = function () {
        var _this = this;
        setTimeout(function () {
            _this.setValue();
        }, 100);
    };
    ProfilesComponent.prototype.getListUserAddress = function () {
        var _this = this;
        this.customerService.getListDeliveryAddress(this.currentUser.id_user).subscribe(function (data) {
            if (data) {
                _this.listUserAddress = data;
            }
        });
    };
    ProfilesComponent.prototype.initForm = function () {
        this.form = new _node_modules_angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormGroup"]({
            password: new _node_modules_angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('', [_node_modules_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]),
            name: new _node_modules_angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('', [_node_modules_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]),
            birthday: new _node_modules_angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](''),
            gender: new _node_modules_angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('', [_node_modules_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]),
            area: new _node_modules_angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('', [_node_modules_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]),
            language: new _node_modules_angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('', [_node_modules_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]),
            main_address: new _node_modules_angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('', [_node_modules_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]),
        });
    };
    ProfilesComponent.prototype.setValue = function () {
        this.form.controls.name.setValue(this.currentUser.name);
        this.form.controls.password.setValue(this.currentUser.password);
        this.form.controls.birthday.setValue(this.currentUser.birthday);
        this.form.controls.gender.setValue(this.currentUser.gender);
        this.form.controls.area.setValue(this.currentUser.area);
        this.form.controls.language.setValue(this.currentUser.language);
        this.form.controls.main_address.setValue(this.currentUser.main_address);
    };
    ProfilesComponent.prototype.loadProfile = function () {
        this.currentUser = this.userService.getCurrentUser();
        this.translateService.setDefaultLang(this.currentUser.language);
    };
    ProfilesComponent.prototype.onSubmit = function () {
        var _this = this;
        console.log(this.form);
        if (this.form.valid) {
            this.customerService.updateProfile(this.currentUser.id_user, this.form.value).subscribe(function (data) {
                if (data.error === true) {
                    _this.toastr.error(data.message, 'Something went wrong please try again!', {
                        progressBar: true,
                        positionClass: 'toast-bottom-right',
                        timeOut: 2000
                    });
                }
                else {
                    // tslint:disable-next-line:max-line-length
                    _this.customerService.customerLogin({ email: _this.currentUser.email, password: _this.form.value.password }).subscribe(function (result) {
                        if (result.message === true) {
                            _this.toastr.success('', 'Cập nhật thông tin thành công!', {
                                progressBar: true,
                                positionClass: 'toast-bottom-right',
                                timeOut: 3000
                            });
                            localStorage.setItem('CurrentUser', JSON.stringify(result.data[0]));
                            _this.loadProfile();
                            _this.initForm();
                            setTimeout(function () {
                                _this.setValue();
                            }, 100);
                        }
                    });
                }
            });
        }
    };
    ProfilesComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-profiles',
            template: __webpack_require__(/*! ./profiles.component.html */ "./src/app/profiles/profiles.component.html"),
            styles: [__webpack_require__(/*! ./profiles.component.scss */ "./src/app/profiles/profiles.component.scss")]
        }),
        __metadata("design:paramtypes", [_services_user_service__WEBPACK_IMPORTED_MODULE_1__["UserService"],
            _services_customer_service__WEBPACK_IMPORTED_MODULE_3__["CustomerService"],
            _node_modules_ngx_translate_core__WEBPACK_IMPORTED_MODULE_5__["TranslateService"],
            _node_modules_ngx_toastr__WEBPACK_IMPORTED_MODULE_4__["ToastrService"]])
    ], ProfilesComponent);
    return ProfilesComponent;
}());



/***/ }),

/***/ "./src/app/services/api.service.ts":
/*!*****************************************!*\
  !*** ./src/app/services/api.service.ts ***!
  \*****************************************/
/*! exports provided: ApiService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ApiService", function() { return ApiService; });
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var _angular_http__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/http */ "./node_modules/@angular/http/fesm5/http.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var ApiService = /** @class */ (function () {
    function ApiService(http) {
        this.http = http;
    }
    ApiService.prototype.setHeaders = function () {
        var headersConfig = {
            'Content-Type': 'application/json',
            'Accept': 'application/json',
        };
        return new _angular_http__WEBPACK_IMPORTED_MODULE_4__["Headers"](headersConfig);
    };
    // tslint:disable-next-line:no-shadowed-variable
    ApiService.prototype.formatErrors = function (error) {
        return Object(rxjs__WEBPACK_IMPORTED_MODULE_0__["throwError"])(error.json());
    };
    ApiService.prototype.get = function (path) {
        // tslint:disable-next-line:no-shadowed-variable
        return this.http.get("" + _environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].api_url + path).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["catchError"])(this.formatErrors), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["map"])(function (res) { return res.json(); }));
    };
    ApiService.prototype.getQuery = function (path, params) {
        if (params === void 0) { params = new _angular_http__WEBPACK_IMPORTED_MODULE_4__["URLSearchParams"](); }
        return this.http.get("" + _environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].api_url + path, { headers: this.setHeaders(), search: params }).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["catchError"])(this.formatErrors), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["map"])(function (res) { return res.json(); }));
    };
    ApiService.prototype.put = function (path, body) {
        if (body === void 0) { body = {}; }
        return this.http.put("" + _environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].api_url + path, JSON.stringify(body), 
        // tslint:disable-next-line:no-shadowed-variable
        { headers: this.setHeaders() }).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["catchError"])(this.formatErrors), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["map"])(function (res) { return res.json(); }));
    };
    ApiService.prototype.post = function (path, body) {
        if (body === void 0) { body = {}; }
        return this.http.post("" + _environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].api_url + path, JSON.stringify(body), { headers: this.setHeaders() }).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["catchError"])(this.formatErrors), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["map"])(function (res) { return res.json(); }));
    };
    ApiService.prototype.delete = function (path) {
        return this.http.delete("" + _environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].api_url + path, { headers: this.setHeaders() }).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["catchError"])(this.formatErrors), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["map"])(function (res) { return res.json(); }));
    };
    ApiService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Injectable"])(),
        __metadata("design:paramtypes", [_angular_http__WEBPACK_IMPORTED_MODULE_4__["Http"]])
    ], ApiService);
    return ApiService;
}());



/***/ }),

/***/ "./src/app/services/apoint.service.ts":
/*!********************************************!*\
  !*** ./src/app/services/apoint.service.ts ***!
  \********************************************/
/*! exports provided: ApointService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ApointService", function() { return ApointService; });
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _api_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./api.service */ "./src/app/services/api.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var ApointService = /** @class */ (function () {
    function ApointService(apiService) {
        this.apiService = apiService;
    }
    ApointService.prototype.get = function (area) {
        return this.apiService.get('/apoint/' + area).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_0__["map"])(function (result) { return result; }));
    };
    ApointService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])(),
        __metadata("design:paramtypes", [_api_service__WEBPACK_IMPORTED_MODULE_2__["ApiService"]])
    ], ApointService);
    return ApointService;
}());



/***/ }),

/***/ "./src/app/services/authentication.service.ts":
/*!****************************************************!*\
  !*** ./src/app/services/authentication.service.ts ***!
  \****************************************************/
/*! exports provided: AuthenticationService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthenticationService", function() { return AuthenticationService; });
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/http */ "./node_modules/@angular/http/fesm5/http.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var AuthenticationService = /** @class */ (function () {
    function AuthenticationService(http, router) {
        this.http = http;
        this.router = router;
    }
    AuthenticationService.prototype.login = function (email, password) {
        return this.http.post('', { email: email, password: password }).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_0__["map"])(function (response) {
            var user = response.json();
            if (user && user.token) {
                localStorage.setItem('user', JSON.stringify(user));
            }
            return user;
        }));
    };
    AuthenticationService.prototype.logout = function () {
        localStorage.removeItem('user');
        this.router.navigate(['/signin']);
    };
    AuthenticationService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])(),
        __metadata("design:paramtypes", [_angular_http__WEBPACK_IMPORTED_MODULE_2__["Http"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]])
    ], AuthenticationService);
    return AuthenticationService;
}());



/***/ }),

/***/ "./src/app/services/chat.service.ts":
/*!******************************************!*\
  !*** ./src/app/services/chat.service.ts ***!
  \******************************************/
/*! exports provided: ChatService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ChatService", function() { return ChatService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var rxjs_Observable__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs/Observable */ "./node_modules/rxjs-compat/_esm5/Observable.js");
/* harmony import */ var socket_io_client__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! socket.io-client */ "./node_modules/socket.io-client/lib/index.js");
/* harmony import */ var socket_io_client__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(socket_io_client__WEBPACK_IMPORTED_MODULE_2__);
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var ChatService = /** @class */ (function () {
    function ChatService() {
        this.url = 'http://localhost:5000';
        this.socket = socket_io_client__WEBPACK_IMPORTED_MODULE_2__(this.url);
    }
    ChatService.prototype.sendMessage = function (obj) {
        this.socket.emit('add-message', obj);
    };
    ChatService.prototype.getMessages = function () {
        var _this = this;
        var observable = new rxjs_Observable__WEBPACK_IMPORTED_MODULE_1__["Observable"](function (observer) {
            _this.socket.on('message', function (message) {
                observer.next(message);
            });
            return function () {
                _this.socket.disconnect();
            };
        });
        return observable;
    };
    ChatService.prototype.getUsers = function () {
        var _this = this;
        var observable = new rxjs_Observable__WEBPACK_IMPORTED_MODULE_1__["Observable"](function (observer) {
            _this.socket.on('users', function (message) {
                observer.next(message);
            });
            return function () {
                _this.socket.disconnect();
            };
        });
        return observable;
    };
    ChatService.prototype.init = function () {
        this.socket.emit('init-user');
    };
    ChatService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])()
    ], ChatService);
    return ChatService;
}());



/***/ }),

/***/ "./src/app/services/customer.service.ts":
/*!**********************************************!*\
  !*** ./src/app/services/customer.service.ts ***!
  \**********************************************/
/*! exports provided: CustomerService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CustomerService", function() { return CustomerService; });
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _api_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./api.service */ "./src/app/services/api.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var CustomerService = /** @class */ (function () {
    function CustomerService(apiService) {
        this.apiService = apiService;
    }
    CustomerService.prototype.customerRegister = function (data) {
        return this.apiService.post('/users', data).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_0__["map"])(function (result) { return result; }));
    };
    CustomerService.prototype.getUser = function (idUser) {
        return this.apiService.get('/users/' + idUser).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_0__["map"])(function (result) { return result; }));
    };
    CustomerService.prototype.checkSignup = function (data) {
        return this.apiService.post('/checksignup', data).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_0__["map"])(function (result) { return result; }));
    };
    CustomerService.prototype.customerLogin = function (data) {
        return this.apiService.post('/login', data).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_0__["map"])(function (result) { return result; }));
    };
    CustomerService.prototype.customerLoginWithGoogle = function (data) {
        return this.apiService.post('/login/google', data).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_0__["map"])(function (result) { return result; }));
    };
    CustomerService.prototype.reqResetPassword = function (data) {
        return this.apiService.post('/makerequestresetpassword', data).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_0__["map"])(function (result) { return result; }));
    };
    CustomerService.prototype.changePassword = function (data) {
        return this.apiService.post('/changepassword', data).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_0__["map"])(function (result) { return result; }));
    };
    CustomerService.prototype.updateProfile = function (idUser, data) {
        return this.apiService.put('/users/' + idUser, data).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_0__["map"])(function (result) { return result; }));
    };
    CustomerService.prototype.addDeliveryAddress = function (idUser, data) {
        return this.apiService.post('/useraddress/' + idUser, data).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_0__["map"])(function (result) { return result; }));
    };
    CustomerService.prototype.editDeliveryAddress = function (idUserAddress, data) {
        return this.apiService.put('/useraddress/' + idUserAddress, data).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_0__["map"])(function (result) { return result; }));
    };
    CustomerService.prototype.deleteDeliveryAddress = function (idAddress) {
        return this.apiService.delete('/useraddress/' + idAddress).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_0__["map"])(function (result) { return result; }));
    };
    CustomerService.prototype.getListDeliveryAddress = function (idUserAddress) {
        return this.apiService.get('/useraddress/' + idUserAddress).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_0__["map"])(function (result) { return result; }));
    };
    CustomerService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])(),
        __metadata("design:paramtypes", [_api_service__WEBPACK_IMPORTED_MODULE_2__["ApiService"]])
    ], CustomerService);
    return CustomerService;
}());



/***/ }),

/***/ "./src/app/services/direction.service.ts":
/*!***********************************************!*\
  !*** ./src/app/services/direction.service.ts ***!
  \***********************************************/
/*! exports provided: DirectionService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DirectionService", function() { return DirectionService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var DirectionService = /** @class */ (function () {
    function DirectionService() {
        this.data = [];
        this.subject = new rxjs__WEBPACK_IMPORTED_MODULE_1__["BehaviorSubject"](null);
    }
    // pass data parent route <--> child route
    DirectionService.prototype.sendData = function (arr) {
        this.data.push(arr);
        this.subject.next(this.data);
    };
    DirectionService.prototype.clearData = function () {
        this.data = [];
        this.subject.next(this.data);
    };
    DirectionService.prototype.getData = function () {
        return this.subject.value;
    };
    DirectionService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])(),
        __metadata("design:paramtypes", [])
    ], DirectionService);
    return DirectionService;
}());



/***/ }),

/***/ "./src/app/services/loading.service.ts":
/*!*********************************************!*\
  !*** ./src/app/services/loading.service.ts ***!
  \*********************************************/
/*! exports provided: LoadingService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoadingService", function() { return LoadingService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var LoadingService = /** @class */ (function () {
    function LoadingService() {
        this.loading = new rxjs__WEBPACK_IMPORTED_MODULE_1__["BehaviorSubject"]('determinate');
    }
    LoadingService.prototype.start = function () {
        this.loading.next('indeterminate');
    };
    LoadingService.prototype.stop = function () {
        this.loading.next('determinate');
    };
    LoadingService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])(),
        __metadata("design:paramtypes", [])
    ], LoadingService);
    return LoadingService;
}());



/***/ }),

/***/ "./src/app/services/order.service.ts":
/*!*******************************************!*\
  !*** ./src/app/services/order.service.ts ***!
  \*******************************************/
/*! exports provided: OrderService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OrderService", function() { return OrderService; });
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _api_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./api.service */ "./src/app/services/api.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var OrderService = /** @class */ (function () {
    function OrderService(apiService) {
        this.apiService = apiService;
    }
    OrderService.prototype.getUserOrder = function (idUser) {
        return this.apiService.get('/orders/userorder/' + idUser).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_0__["map"])(function (result) { return result; }));
    };
    OrderService.prototype.postUserOrder = function (data) {
        return this.apiService.post('/orders/userorder', data).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_0__["map"])(function (result) { return result; }));
    };
    OrderService.prototype.getOrderDetails = function (idOrder) {
        return this.apiService.get('/orders/' + idOrder).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_0__["map"])(function (result) { return result; }));
    };
    OrderService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])(),
        __metadata("design:paramtypes", [_api_service__WEBPACK_IMPORTED_MODULE_2__["ApiService"]])
    ], OrderService);
    return OrderService;
}());



/***/ }),

/***/ "./src/app/services/product.service.ts":
/*!*********************************************!*\
  !*** ./src/app/services/product.service.ts ***!
  \*********************************************/
/*! exports provided: ProductService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProductService", function() { return ProductService; });
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _api_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./api.service */ "./src/app/services/api.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var ProductService = /** @class */ (function () {
    function ProductService(apiService) {
        this.apiService = apiService;
    }
    // chưa làm
    // query(queryList: QueryBcodeList): Observable<any> {
    //     const params: URLSearchParams = new URLSearchParams();
    //     Object.keys(queryList.filters)
    //         .forEach((key) => {
    //             params.set(key, queryList.filters[key]);
    //         });
    //     return this.apiService.getQuery('/bcode', params).pipe(map(data => data));
    // }
    ProductService.prototype.get = function (id) {
        return this.apiService.get('/bcode/' + id).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_0__["map"])(function (result) { return result; }));
    };
    ProductService.prototype.post = function (id, canbuy) {
        return this.apiService.post('/bcode/' + id + '/' + canbuy).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_0__["map"])(function (result) { return result; }));
    };
    ProductService.prototype.getAllBeefByArea = function (area, type) {
        return this.apiService.get('/bcode/' + area + '/' + type).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_0__["map"])(function (result) { return result; }));
    };
    ProductService.prototype.getAllBeefByAreaByPath = function (idArea, type, type_beef) {
        return this.apiService.get('/bcode/' + idArea + '/' + type + '/' + type_beef).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_0__["map"])(function (result) { return result; }));
    };
    ProductService.prototype.getAllBeefByApoint = function (idArea, type, idApoint) {
        return this.apiService.get('/bcode/' + idArea + '/' + type + '/0/' + idApoint).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_0__["map"])(function (result) { return result; }));
    };
    ProductService.prototype.getAllBeefByPathBySpecies = function (area, type, type_path, species) {
        return this.apiService.get('/bcode/' + area + '/' + type + '/' + type_path + '/' + species).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_0__["map"])(function (result) { return result; }));
    };
    ProductService.prototype.getBcodeSaleOff = function (data) {
        return this.apiService.post('/bcode/saleoff', data).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_0__["map"])(function (result) { return result; }));
    };
    ProductService.prototype.search = function (data) {
        return this.apiService.post('/bcode/search', data).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_0__["map"])(function (result) { return result; }));
    };
    ProductService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])(),
        __metadata("design:paramtypes", [_api_service__WEBPACK_IMPORTED_MODULE_2__["ApiService"]])
    ], ProductService);
    return ProductService;
}());



/***/ }),

/***/ "./src/app/services/user.service.ts":
/*!******************************************!*\
  !*** ./src/app/services/user.service.ts ***!
  \******************************************/
/*! exports provided: UserService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserService", function() { return UserService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


// import { AuthService } from 'angularx-social-login';
var UserService = /** @class */ (function () {
    function UserService(router) {
        this.router = router;
    }
    UserService.prototype.getCurrentUser = function () {
        return JSON.parse(localStorage.getItem('CurrentUser'));
    };
    UserService.prototype.logout = function () {
        localStorage.removeItem('CurrentUser');
        localStorage.clear();
        this.router.navigate(['/signin']);
    };
    UserService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])(),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]])
    ], UserService);
    return UserService;
}());



/***/ }),

/***/ "./src/app/shopping/beef/shopping-beef.component.html":
/*!************************************************************!*\
  !*** ./src/app/shopping/beef/shopping-beef.component.html ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<mat-progress-bar [mode]=\"loadingService.loading.value\"></mat-progress-bar>\r\n<div class=\"container-fluid\">\r\n    <div class=\"row page-titles\">\r\n        <div class=\"col-md-5 align-self-center\">\r\n            <h4 class=\"text-themecolor\">{{'Beef' | translate}}</h4>\r\n        </div>\r\n    </div>\r\n    <div class=\"row\">\r\n        <div class=\"col-lg-4\">\r\n            <div class=\"card\">\r\n                <div class=\"card-body\">\r\n                    <h5 class=\"card-title\">{{'Categories' | translate}}</h5>\r\n                    <h6 class=\"card-subtitle\">THỊT NGON QUỐC TẾ - AN TOÀN SỨC KHỎE</h6>\r\n                    <mat-nav-list class=\"steamline m-t-40\">\r\n                        <a mat-list-item *ngFor=\"let menu of listMenu\" [ngClass]=\"id_species === menu.id?'routeActive':''\" [routerLink]=\"menu.route\">\r\n                            <span mat-line> {{menu.name}} </span>\r\n                        </a>\r\n                    </mat-nav-list>\r\n                </div>\r\n            </div>\r\n        </div>\r\n        <div class=\"col-lg-8\">\r\n            <div class=\"card oh\">\r\n                <div id=\"divWrapBeef\" class=\"card-body\">\r\n                    <div class=\"d-flex m-b-30 align-items-center no-block\">\r\n                        <h5 class=\"card-title \" id=\"textWrapBeef\">Filter Beef</h5>\r\n                    </div>\r\n                    <section class=\"selectPathBeef\">\r\n                        <img border=\"0\" src=\"http://i1150.photobucket.com/albums/o614/manhtung159/Alego/cow_zpsdnyzpx3h.png\" usemap=\"#ChoiceCow\">\r\n                        <map name=\"ChoiceCow\">\r\n                            <area id=\"CHUCK\" shape=\"poly\" coords=\"56,110,39,56,74,9,102,27,112,17,148,28,154,121\" (click)=\"selectTypeBeef($event)\" title=\"CHUCK\"\r\n                                href=\"javascript:void(0);\">\r\n                            <area id=\"RIB\" shape=\"poly\" coords=\"163,121,158,30,247,47,251,117\" (click)=\"selectTypeBeef($event)\" title=\"RIB\" href=\"javascript:void(0);\">\r\n                            <area id=\"LOIN\" shape=\"poly\" coords=\"260,119,256,50,322,63,380,54,388,66,371,154\" (click)=\"selectTypeBeef($event)\" title=\"LOIN\"\r\n                                href=\"javascript:void(0);\">\r\n                            <area id=\"ROUND\" shape=\"poly\" coords=\"381,159,397,67,409,63,413,81,428,85,469,145,506,168,522,190,511,203\" (click)=\"selectTypeBeef($event)\"\r\n                                title=\"ROUND\" href=\"javascript:void(0);\">\r\n                            <area id=\"PLATE\" shape=\"poly\" coords=\"164,164,161,134,249,131,251,163\" (click)=\"selectTypeBeef($event)\" title=\"PLATE\" href=\"javascript:void(0);\">\r\n                            <area id=\"FLANK\" shape=\"poly\" coords=\"258,163,257,131,369,163\" (click)=\"selectTypeBeef($event)\" title=\"FLANK\" href=\"javascript:void(0);\">\r\n                            <area id=\"BRISKET\" shape=\"poly\" coords=\"55,124,15,171,28,180,42,181,65,159,93,155,117,162,153,162,153,133\" (click)=\"selectTypeBeef($event)\"\r\n                                title=\"BRISKET\" href=\"javascript:void(0);\">\r\n                        </map>\r\n                    </section>\r\n                </div>\r\n            </div>\r\n        </div>\r\n    </div>\r\n\r\n    <div class=\"row\">\r\n        <!-- column -->\r\n        <div class=\"col-12\">\r\n            <div class=\"card\">\r\n                <div class=\"card-body\">\r\n                    <h5 class=\"card-title\">{{view}} PATH</h5>\r\n                </div>\r\n                <section class=\"row card-body divWrapItem\">\r\n                    <mat-card class=\"cardItem\" *ngFor=\"let itemOff of listItem | paginate: { id: 'pop', itemsPerPage: 16, currentPage: pop }\">\r\n                        <div class=\"divPoint\" *ngIf=\"itemOff.point > 0\">\r\n                            +{{itemOff.point + ' P'}}\r\n                        </div>\r\n                        <div class=\"divSaleoff text-danger\" *ngIf=\"itemOff.saleoff > 0\">\r\n                            - {{itemOff.saleoff + '%'}}\r\n                        </div>\r\n                        <mat-card-header class=\"content-center m-b-10 p-r-15\">\r\n                            <img [src]=\"imgBeef[itemOff.type_beef]\" class=\"imgItem\">\r\n                        </mat-card-header>\r\n                        <mat-card-content class=\"cardbody\">\r\n                            <h4>{{(pathName[itemOff.type_beef] | translate) + ' ' + itemOff.nameSpecies + ' ' + '('+itemOff.weight+')'}}</h4>\r\n                            <mat-card-subtitle class=\"bcode-sm\">bcode: {{itemOff.bCode}}</mat-card-subtitle>\r\n                            <mat-card-subtitle *ngIf=\"itemOff.saleoff === 0\" class=\"text-danger\">{{itemOff.price | number:'1.0-0'}} VNĐ</mat-card-subtitle>\r\n                            <mat-card-subtitle *ngIf=\"itemOff.saleoff > 0\" class=\"oldPrice\">{{itemOff.price | number:'1.0-0'}} VNĐ</mat-card-subtitle>\r\n                            <mat-card-subtitle *ngIf=\"itemOff.saleoff > 0\" class=\"newPrice text-danger\">{{itemOff.salePrice | number:'1.0-0'}} VNĐ</mat-card-subtitle>\r\n                        </mat-card-content>\r\n                        <mat-card-actions class=\"wrapButton\">\r\n                            <button mat-button (click)=\"viewDetails(itemOff)\">\r\n                                <mat-icon class=\"iconInButton\" >visibility</mat-icon>\r\n                                {{'View' | translate}}\r\n                            </button>\r\n                            <button mat-button (click)=\"addToCart(itemOff)\">\r\n                                <mat-icon class=\"iconInButton\">{{ itemOff.can_buy === 1?'shopping_cart':'check'}}</mat-icon>\r\n                                {{ itemOff.can_buy === 1?('Buy' | translate):('Sold' | translate)}}\r\n                            </button>\r\n                        </mat-card-actions>\r\n                    </mat-card>\r\n                </section>\r\n                <pagination-controls class=\"text-center\" id=\"pop\" (pageChange)=\"pop = $event\"></pagination-controls>\r\n            </div>\r\n        </div>\r\n    </div>\r\n</div>"

/***/ }),

/***/ "./src/app/shopping/beef/shopping-beef.component.scss":
/*!************************************************************!*\
  !*** ./src/app/shopping/beef/shopping-beef.component.scss ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".imgItem {\n  height: 100px;\n  width: 100px;\n  border: 3px solid #ddd;\n  border-radius: 100%; }\n\n.iconInButton {\n  font-size: 1rem;\n  line-height: 1.3rem; }\n\n.ngx-pagination {\n  margin-top: 1rem; }\n\n.oh {\n  min-height: 384px; }\n\n.wrapButton {\n  justify-content: space-between;\n  display: flex; }\n\n.selectPathBeef {\n  justify-content: center;\n  overflow: auto;\n  display: flex; }\n\n.routeActive {\n  background: rgba(0, 0, 0, 0.04); }\n\n.divWrapItem {\n  justify-content: space-evenly; }\n\n.cardItem {\n  margin: 5px;\n  min-width: 200px;\n  max-width: 200px;\n  position: relative;\n  display: flex;\n  flex-direction: column; }\n\n.cardbody {\n  flex-grow: 1; }\n\n.steamline {\n  padding: 0;\n  margin: 0; }\n\n.oldPrice {\n  font-size: 0.7rem;\n  text-decoration: line-through;\n  margin: 0; }\n\n.bcode-sm {\n  font-size: 0.777rem;\n  margin: 0; }\n\n.divPoint {\n  position: absolute;\n  left: -6px;\n  background-color: #44b5ff;\n  color: #fff;\n  top: 5px;\n  padding: 0 5px;\n  min-width: 43px;\n  font-size: 0.8rem;\n  font-weight: 500;\n  white-space: nowrap; }\n\n.divPoint::before {\n  content: \"\";\n  display: inline-block;\n  position: absolute;\n  -webkit-transform: rotate(45deg);\n  transform: rotate(45deg);\n  left: .1rem;\n  bottom: -.2rem;\n  border: .21rem solid transparent;\n  border-bottom-color: #0971c2; }\n\n.divSaleoff {\n  position: absolute;\n  right: 0;\n  background-color: rgba(255, 212, 36, 0.9);\n  padding: 5px;\n  top: 0;\n  max-width: 43px;\n  min-width: 43px;\n  font-size: 0.8rem;\n  font-weight: 500;\n  white-space: nowrap; }\n\n.divSaleoff::after {\n  content: \"\";\n  width: 0;\n  height: 0;\n  left: 0;\n  bottom: -4px;\n  border-style: solid;\n  position: absolute;\n  border-width: 0 21.5px 4px;\n  border-color: transparent rgba(255, 212, 36, 0.9); }\n\n@media (max-width: 720px) {\n  .cardItem {\n    max-width: 250px; }\n  .selectPathBeef {\n    justify-content: unset; } }\n"

/***/ }),

/***/ "./src/app/shopping/beef/shopping-beef.component.ts":
/*!**********************************************************!*\
  !*** ./src/app/shopping/beef/shopping-beef.component.ts ***!
  \**********************************************************/
/*! exports provided: ShoppingBeefComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ShoppingBeefComponent", function() { return ShoppingBeefComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_product_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../services/product.service */ "./src/app/services/product.service.ts");
/* harmony import */ var _services_user_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../services/user.service */ "./src/app/services/user.service.ts");
/* harmony import */ var _services_loading_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../services/loading.service */ "./src/app/services/loading.service.ts");
/* harmony import */ var _node_modules_angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../node_modules/@angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _node_modules_ngx_toastr__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../../node_modules/ngx-toastr */ "./node_modules/ngx-toastr/toastr.es5.js");
/* harmony import */ var _services_direction_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../services/direction.service */ "./src/app/services/direction.service.ts");
/* harmony import */ var _node_modules_angular_material__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../../node_modules/@angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _shopping_cart_shopping_cart_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../shopping-cart/shopping-cart.component */ "./src/app/shopping/shopping-cart/shopping-cart.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};









var ShoppingBeefComponent = /** @class */ (function () {
    function ShoppingBeefComponent(productService, userService, loadingService, route, router, toastr, directionService, dialog) {
        this.productService = productService;
        this.userService = userService;
        this.loadingService = loadingService;
        this.route = route;
        this.router = router;
        this.toastr = toastr;
        this.directionService = directionService;
        this.dialog = dialog;
        this.listItem = [];
        this.listMenu = [
            { name: 'Beef Brahman', id: '1', route: '/app/shopping/beef/1' },
            { name: 'Beef Red Sindhi', id: '2', route: '/app/shopping/beef/2' },
            { name: 'Beef USA', id: '3', route: '/app/shopping/beef/3' },
            { name: 'Beef Kobe', id: '4', route: '/app/shopping/beef/4' },
            { name: 'Milk', id: '', route: '/app/shopping/milk' },
            { name: 'Bounes', id: '', route: '/app/shopping/bounes' },
        ];
        this.imgBeef = [
            '',
            'http://i1150.photobucket.com/albums/o614/manhtung159/Alego/chuck_zpsv6laku8r.png',
            'http://i1150.photobucket.com/albums/o614/manhtung159/Alego/ribs_zpsmmcrurk8.jpg',
            'http://i1150.photobucket.com/albums/o614/manhtung159/Alego/loin_zps1gii9mkq.jpg',
            'http://i1150.photobucket.com/albums/o614/manhtung159/Alego/round_zpsy0su2h28.jpg',
            'http://i1150.photobucket.com/albums/o614/manhtung159/Alego/brisket_zps4o4sfa0w.jpg',
            'http://i1150.photobucket.com/albums/o614/manhtung159/Alego/plate_zpsky0yrjco.jpg',
            'http://i1150.photobucket.com/albums/o614/manhtung159/Alego/flank_zpsm2wr3yk1.jpg',
        ];
        this.pathName = [
            '',
            'Chuck',
            'Ribs',
            'Loin',
            'Round',
            'Brisket',
            'Plate',
            'Flank',
        ];
        this.view = 'ALL';
        this.selectIdPath = '0';
        this.timeout = 888;
        this.loadProfile();
    }
    ShoppingBeefComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.route.params.subscribe(function (params) {
            if (params['id']) {
                if (_this.id) {
                    clearInterval(_this.id);
                }
                _this.selectIdPath = '0';
                _this.loadingService.start();
                setTimeout(function () {
                    _this.id_species = params['id'];
                    _this.listItem = [];
                    _this.getListItem(_this.selectIdPath);
                    if (document.getElementById('textWrapBeef') && document.getElementById('divWrapBeef')) {
                        document.getElementById('textWrapBeef').innerText = 'Filter Beef';
                        document.getElementById('textWrapBeef').style.color = 'unset';
                        document.getElementById('divWrapBeef').style.background = 'unset';
                    }
                    _this.loadingService.stop();
                    _this.id = setInterval(function () {
                        _this.getListItem(_this.selectIdPath);
                    }, 10000);
                }, _this.timeout);
            }
        });
    };
    ShoppingBeefComponent.prototype.ngOnDestroy = function () {
        if (this.id) {
            clearInterval(this.id);
        }
    };
    ShoppingBeefComponent.prototype.loadProfile = function () {
        this.currentUser = this.userService.getCurrentUser();
    };
    ShoppingBeefComponent.prototype.getListItem = function (typepath) {
        var _this = this;
        this.productService.getAllBeefByPathBySpecies(this.currentUser.area, '1', typepath, this.id_species).subscribe(function (res) {
            if (res.message === false) {
                return;
            }
            _this.listItem = [];
            res.map(function (item) {
                if (item.saleoff > 0) {
                    item.salePrice = item.price - ((item.price * item.saleoff) / 100);
                }
                item.buy = 1;
                _this.listItem.push(item);
            });
            console.log(_this.listItem);
        });
    };
    ShoppingBeefComponent.prototype.selectTypeBeef = function (event) {
        var _this = this;
        if (event.target.id !== undefined) {
            this.loadingService.start();
            setTimeout(function () {
                _this.view = event.target.id;
                document.getElementById('textWrapBeef').innerText = event.target.id;
                document.getElementById('textWrapBeef').style.color = '#fff';
                switch (event.target.id) {
                    case 'CHUCK':
                        document.getElementById('divWrapBeef').style.background = '#A1725C';
                        _this.selectIdPath = '1';
                        _this.getListItem('1');
                        break;
                    case 'RIB':
                        document.getElementById('divWrapBeef').style.background = '#FFAD71';
                        _this.selectIdPath = '2';
                        _this.getListItem('2');
                        break;
                    case 'LOIN':
                        document.getElementById('divWrapBeef').style.background = '#651B04';
                        _this.selectIdPath = '3';
                        _this.getListItem('3');
                        break;
                    case 'ROUND':
                        document.getElementById('divWrapBeef').style.background = '#A96A39';
                        _this.selectIdPath = '4';
                        _this.getListItem('4');
                        break;
                    case 'BRISKET':
                        document.getElementById('divWrapBeef').style.background = '#B99387';
                        _this.selectIdPath = '5';
                        _this.getListItem('5');
                        break;
                    case 'PLATE':
                        document.getElementById('divWrapBeef').style.background = '#E1C26F';
                        _this.selectIdPath = '6';
                        _this.getListItem('6');
                        break;
                    case 'FLANK':
                        document.getElementById('divWrapBeef').style.background = '#FF933B';
                        _this.selectIdPath = '7';
                        _this.getListItem('7');
                        break;
                }
                _this.loadingService.stop();
            }, this.timeout);
        }
    };
    ShoppingBeefComponent.prototype.addToCart = function (item) {
        var _this = this;
        this.productService.get(item.bCode).subscribe(function (data) {
            if (data[0]) {
                if (data[0].can_buy === 1) {
                    _this.saveItem(item, function (res) {
                        if (res === true) {
                            item.can_buy = 0;
                            _this.productService.post(item.bCode, '0').subscribe();
                            var dialogRef = _this.dialog.open(_shopping_cart_shopping_cart_component__WEBPACK_IMPORTED_MODULE_8__["ShoppingCartComponent"], {
                                width: 'auto',
                                height: 'auto',
                                data: JSON.parse(localStorage.getItem('orderProduct'))
                            });
                            dialogRef.afterClosed().subscribe(function (result) {
                                _this.productService.get(item.bCode).subscribe(function (bcode) {
                                    if (bcode[0]) {
                                        item.can_buy = bcode[0].can_buy;
                                    }
                                });
                            });
                        }
                    });
                }
                else {
                    item.can_buy = data[0].can_buy;
                    _this.toastr.error('', 'Sản phẩm đã bán', {
                        progressBar: true,
                        positionClass: 'toast-bottom-right',
                        timeOut: 2000
                    });
                }
            }
        });
    };
    ShoppingBeefComponent.prototype.saveItem = function (item, callback) {
        var orderProduct = JSON.parse(localStorage.getItem('orderProduct'));
        var index = orderProduct.findIndex(function (o) { return o.bCode === item.bCode; });
        if (index > -1) {
            this.toastr.error('Thông báo!', 'Sản phẩm đã có trong giỏ hàng', {
                progressBar: true,
                positionClass: 'toast-bottom-right',
                timeOut: 2000
            });
            callback(false);
        }
        else {
            orderProduct.push(item);
            localStorage.setItem('orderProduct', JSON.stringify(orderProduct));
            this.directionService.sendData(JSON.parse(localStorage.getItem('orderProduct')));
            callback(true);
        }
    };
    ShoppingBeefComponent.prototype.viewDetails = function (item) {
        this.router.navigateByUrl('/app/beeforigin/' + item.bCode);
    };
    ShoppingBeefComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-shopping-beef',
            template: __webpack_require__(/*! ./shopping-beef.component.html */ "./src/app/shopping/beef/shopping-beef.component.html"),
            styles: [__webpack_require__(/*! ./shopping-beef.component.scss */ "./src/app/shopping/beef/shopping-beef.component.scss")],
        }),
        __metadata("design:paramtypes", [_services_product_service__WEBPACK_IMPORTED_MODULE_1__["ProductService"],
            _services_user_service__WEBPACK_IMPORTED_MODULE_2__["UserService"],
            _services_loading_service__WEBPACK_IMPORTED_MODULE_3__["LoadingService"],
            _node_modules_angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"],
            _node_modules_angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"],
            _node_modules_ngx_toastr__WEBPACK_IMPORTED_MODULE_5__["ToastrService"],
            _services_direction_service__WEBPACK_IMPORTED_MODULE_6__["DirectionService"],
            _node_modules_angular_material__WEBPACK_IMPORTED_MODULE_7__["MatDialog"]])
    ], ShoppingBeefComponent);
    return ShoppingBeefComponent;
}());



/***/ }),

/***/ "./src/app/shopping/bounes/shopping-bounes.component.html":
/*!****************************************************************!*\
  !*** ./src/app/shopping/bounes/shopping-bounes.component.html ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container-fluid\">\r\n    <div class=\"row page-titles\">\r\n        <div class=\"col-md-5 align-self-center\">\r\n            <h4 class=\"text-themecolor\">{{'Shopping' | translate}}</h4>\r\n        </div>\r\n    </div>\r\n    <div class=\"row\">\r\n        <div class=\"col-lg-3\">\r\n            <div class=\"card\">\r\n                <div class=\"card-body\">\r\n                    <h5 class=\"card-title\">{{'Categories' | translate}}</h5>\r\n                    <h6 class=\"card-subtitle\">THỊT NGON QUỐC TẾ - AN TOÀN SỨC KHỎE</h6>\r\n                    <mat-nav-list class=\"steamline m-t-40\">\r\n                        <a mat-list-item *ngFor=\"let menu of listMenu\" [ngClass]=\"menu.id === 'bounes'?'routeActive':''\" [routerLink]=\"menu.route\">\r\n                            <span mat-line> {{menu.name}} </span>\r\n                        </a>\r\n                    </mat-nav-list>\r\n                </div>\r\n            </div>\r\n        </div>\r\n        <div class=\"col-lg-9\">\r\n            <div class=\"card oh\">\r\n                <div class=\"card-body\">\r\n                    <div class=\"d-flex m-b-30 align-items-center no-block\">\r\n                        <h5 class=\"card-title \">{{'Bounes Transection' | translate}}</h5>\r\n                    </div>\r\n                    <section class=\"row divWrapItem\">\r\n                        <mat-card class=\"col-lg-3 col-md-3 cardItem\" *ngFor=\"let itemOff of listItem\">\r\n                            <mat-card-header class=\"content-center m-b-10 p-r-15\">\r\n                                <img [src]=\"itemOff.img\" class=\"imgItem\">\r\n                            </mat-card-header>\r\n                            <mat-card-content class=\"cardbody\">\r\n                                <h4>{{itemOff.name_bounes}}</h4>\r\n                                <mat-card-subtitle class=\"text-danger\">{{itemOff.point | number:'1.0-0'}} {{itemOff.point > 1?'points':'point'}}</mat-card-subtitle>\r\n                            </mat-card-content>\r\n                            <mat-card-actions class=\"wrapButton\">\r\n                                <button mat-button>\r\n                                    <mat-icon class=\"iconInButton\">visibility</mat-icon>\r\n                                    {{'View' | translate}}\r\n                                </button>\r\n                                <button mat-button (click)=\"addToCart(itemOff)\">\r\n                                    <mat-icon class=\"iconInButton\">shopping_cart</mat-icon>\r\n                                    {{'Buy' | translate}}\r\n                                </button>\r\n                            </mat-card-actions>\r\n                        </mat-card>\r\n                    </section>\r\n                </div>\r\n            </div>\r\n        </div>\r\n    </div>\r\n</div>"

/***/ }),

/***/ "./src/app/shopping/bounes/shopping-bounes.component.scss":
/*!****************************************************************!*\
  !*** ./src/app/shopping/bounes/shopping-bounes.component.scss ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".imgItem {\n  height: 110px;\n  width: auto; }\n\n.iconInButton {\n  font-size: 1rem;\n  line-height: 1.3rem; }\n\n.ngx-pagination {\n  margin-top: 1rem; }\n\n.wrapButton {\n  justify-content: space-between;\n  display: flex; }\n\n.cardItem {\n  margin: 5px;\n  min-width: 200px;\n  max-width: 200px;\n  position: relative;\n  display: flex;\n  flex-direction: column; }\n\n.cardbody {\n  flex-grow: 1; }\n\n.steamline {\n  padding: 0;\n  margin: 0; }\n\n.oldPrice {\n  font-size: 0.7rem;\n  text-decoration: line-through;\n  margin: 0; }\n\n.bcode-sm {\n  font-size: 0.777rem;\n  margin: 0; }\n\n.divPoint {\n  position: absolute;\n  left: -6px;\n  background-color: #44b5ff;\n  color: #fff;\n  top: 5px;\n  padding: 0 5px;\n  min-width: 43px;\n  font-size: 0.8rem;\n  font-weight: 500;\n  white-space: nowrap; }\n\n.divPoint::before {\n  content: \"\";\n  display: inline-block;\n  position: absolute;\n  -webkit-transform: rotate(45deg);\n  transform: rotate(45deg);\n  left: .1rem;\n  bottom: -.2rem;\n  border: .21rem solid transparent;\n  border-bottom-color: #0971c2; }\n\n.divSaleoff {\n  position: absolute;\n  right: 0;\n  background-color: rgba(255, 212, 36, 0.9);\n  padding: 5px;\n  top: 0;\n  max-width: 43px;\n  min-width: 43px;\n  font-size: 0.8rem;\n  font-weight: 500;\n  white-space: nowrap; }\n\n.divSaleoff::after {\n  content: \"\";\n  width: 0;\n  height: 0;\n  left: 0;\n  bottom: -4px;\n  border-style: solid;\n  position: absolute;\n  border-width: 0 21.5px 4px;\n  border-color: transparent rgba(255, 212, 36, 0.9); }\n\n@media (max-width: 720px) {\n  .cardItem {\n    max-width: 250px; } }\n"

/***/ }),

/***/ "./src/app/shopping/bounes/shopping-bounes.component.ts":
/*!**************************************************************!*\
  !*** ./src/app/shopping/bounes/shopping-bounes.component.ts ***!
  \**************************************************************/
/*! exports provided: ShoppingBounesComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ShoppingBounesComponent", function() { return ShoppingBounesComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_product_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../services/product.service */ "./src/app/services/product.service.ts");
/* harmony import */ var _services_user_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../services/user.service */ "./src/app/services/user.service.ts");
/* harmony import */ var _shopping_cart_shopping_cart_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../shopping-cart/shopping-cart.component */ "./src/app/shopping/shopping-cart/shopping-cart.component.ts");
/* harmony import */ var _node_modules_ngx_toastr__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../node_modules/ngx-toastr */ "./node_modules/ngx-toastr/toastr.es5.js");
/* harmony import */ var _services_direction_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../services/direction.service */ "./src/app/services/direction.service.ts");
/* harmony import */ var _node_modules_angular_material__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../../node_modules/@angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var ShoppingBounesComponent = /** @class */ (function () {
    function ShoppingBounesComponent(productService, userService, toastr, directionService, dialog) {
        this.productService = productService;
        this.userService = userService;
        this.toastr = toastr;
        this.directionService = directionService;
        this.dialog = dialog;
        this.listItem = [];
        this.listMenu = [
            { name: 'Beef Brahman', id: '1', route: '/app/shopping/beef/1' },
            { name: 'Beef Red Sindhi', id: '2', route: '/app/shopping/beef/2' },
            { name: 'Beef USA', id: '3', route: '/app/shopping/beef/3' },
            { name: 'Beef Kobe', id: '4', route: '/app/shopping/beef/4' },
            { name: 'Milk', id: 'milk', route: '/app/shopping/milk' },
            { name: 'Bounes', id: 'bounes', route: '/app/shopping/bounes' },
        ];
        this.loadProfile();
    }
    ShoppingBounesComponent.prototype.ngOnInit = function () {
        this.getListItem();
    };
    ShoppingBounesComponent.prototype.loadProfile = function () {
        this.currentUser = this.userService.getCurrentUser();
    };
    ShoppingBounesComponent.prototype.getListItem = function () {
        var _this = this;
        this.productService.getAllBeefByPathBySpecies(this.currentUser.area, '3', 'any', 'any').subscribe(function (res) {
            if (res.message === false) {
                return;
            }
            res.map(function (item) {
                item.type = 3;
                _this.listItem.push(item);
            });
            console.log(_this.listItem);
        });
    };
    ShoppingBounesComponent.prototype.addToCart = function (item) {
        var _this = this;
        this.saveItem(item, function (res) {
            if (res === true) {
                _this.dialog.open(_shopping_cart_shopping_cart_component__WEBPACK_IMPORTED_MODULE_3__["ShoppingCartComponent"], {
                    width: 'auto',
                    height: 'auto',
                    data: JSON.parse(localStorage.getItem('orderProduct'))
                });
            }
        });
    };
    ShoppingBounesComponent.prototype.saveItem = function (item, callback) {
        var orderProduct = JSON.parse(localStorage.getItem('orderProduct'));
        var index = orderProduct.findIndex(function (o) { return o.id_bounes === item.id_bounes; });
        if (index > -1) {
            this.toastr.error('Thông báo!', 'Sản phẩm đã có trong giỏ hàng', {
                progressBar: true,
                positionClass: 'toast-bottom-right',
                timeOut: 2000
            });
            callback(false);
        }
        else {
            orderProduct.push(item);
            localStorage.setItem('orderProduct', JSON.stringify(orderProduct));
            this.directionService.sendData(JSON.parse(localStorage.getItem('orderProduct')));
            callback(true);
        }
    };
    ShoppingBounesComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-shopping-bounes',
            template: __webpack_require__(/*! ./shopping-bounes.component.html */ "./src/app/shopping/bounes/shopping-bounes.component.html"),
            styles: [__webpack_require__(/*! ./shopping-bounes.component.scss */ "./src/app/shopping/bounes/shopping-bounes.component.scss")],
        }),
        __metadata("design:paramtypes", [_services_product_service__WEBPACK_IMPORTED_MODULE_1__["ProductService"],
            _services_user_service__WEBPACK_IMPORTED_MODULE_2__["UserService"],
            _node_modules_ngx_toastr__WEBPACK_IMPORTED_MODULE_4__["ToastrService"],
            _services_direction_service__WEBPACK_IMPORTED_MODULE_5__["DirectionService"],
            _node_modules_angular_material__WEBPACK_IMPORTED_MODULE_6__["MatDialog"]])
    ], ShoppingBounesComponent);
    return ShoppingBounesComponent;
}());



/***/ }),

/***/ "./src/app/shopping/checkout/checkout.component.html":
/*!***********************************************************!*\
  !*** ./src/app/shopping/checkout/checkout.component.html ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div id=\"divFull\" class=\"container-fluid\">\n  <mat-progress-spinner class=\"spinner\" [mode]=\"loadingService.loading.value\"></mat-progress-spinner>\n  <div class=\"row\">\n    <mat-horizontal-stepper [linear]=\"true\" #stepper class=\"stepper\" (selectionChange)=\"changeStep($event)\">\n      <mat-step>\n        <ng-template matStepLabel>{{'Thông tin đơn hàng' | translate}}</ng-template>\n        <div class=\"content-cart\">\n          <div class=\"container-table\">\n            <!-- fomr thong tin -->\n            <div class=\"container\">\n              <mat-form-field class=\"col-md-12\">\n                <mat-select placeholder=\"{{'Select your address'}}\" [value]=\"currentUser.main_address\" (selectionChange)=\"selectAddress($event)\">\n                  <mat-option *ngFor=\"let address of listUserAddress\" [value]=\"address.id_address\">{{address.address}}</mat-option>\n                </mat-select>\n              </mat-form-field>\n              <br>\n\n              <mat-form-field class=\"col-md-6\">\n                <input matInput placeholder=\"{{'Receiver' | translate}}\" [(ngModel)]=\"Order.receiver\">\n              </mat-form-field>\n\n              <mat-form-field class=\"col-md-6\">\n                <input matInput placeholder=\"{{'Phone' | translate}}\" [(ngModel)]=\"Order.phone\" onkeypress=\"return event.charCode >= 48 && event.charCode <= 57\">\n              </mat-form-field>\n\n              <mat-form-field class=\"col-md-12\">\n                <textarea matInput placeholder=\"{{'Address' | translate}}\" [(ngModel)]=\"Order.address\" matTextareaAutosize matAutosizeMinRows=\"2\"\n                  matAutosizeMaxRows=\"5\"></textarea>\n              </mat-form-field>\n\n\n\n            </div>\n\n            <div class=\"table-responsive\">\n              <table class=\"table table-hover\">\n                <thead>\n                  <tr>\n                    <th class=\"text-center\">Bcode</th>\n                    <th>{{'product' | translate}}</th>\n                    <th class=\"text-right\">{{'Quantity' | translate}}</th>\n                    <th class=\"text-right\">{{'Đơn giá' | translate}}</th>\n                    <th class=\"text-right\">{{'discount' | translate}} ( % )</th>\n                    <th class=\"text-right\">{{'Thành tiền' | translate}}</th>\n                    <th></th>\n                  </tr>\n                </thead>\n                <tbody>\n                  <tr *ngFor=\"let item of filterProduct(data);let i = index\">\n                    <td class=\"text-center\">{{item.bCode}}</td>\n                    <td class=\"txt-oflo\" *ngIf=\"item.type_beef > 0\">{{ pathName[item.type_beef] + ' ' + item.name+ ' ' + item.weight}}</td>\n                    <td class=\"txt-oflo\" *ngIf=\"item.type_milk > 0\">{{item.nameCpass + ' ' + item.nameFarm + ' ' + (weightName[item.type_milk] | number:'1.0-0') + 'ml'}}</td>\n\n                    <td class=\"txt-oflo text-right\" *ngIf=\"item.type_beef > 0\">1</td>\n                    <td class=\"txt-oflo text-right\" *ngIf=\"item.type_milk > 0\">{{item.buy | number:'1.0-0'}}</td>\n\n                    <td class=\"txt-oflo text-right\">{{item.price | number:'1.0-0'}} vnđ</td>\n                    <td class=\"txt-oflo text-right\">{{item.saleoff}}</td>\n                    <td class=\"text-right\">\n                      <span class=\"text-danger\">{{computeTotal(item) | number:'1.0-0'}} vnđ</span>\n                    </td>\n                    <td class=\"tdBtnRemove\">\n                      <button mat-icon-button (click)=\"delete(item)\">\n                        <mat-icon>clear</mat-icon>\n                      </button>\n                    </td>\n                  </tr>\n\n                  <tr *ngFor=\"let item of bounes\">\n                    <td class=\"txt-oflo text-center\">\n                      <img [src]=\"item.img\" width=\"auto\" height=\"30\" />\n                    </td>\n                    <td class=\"txt-oflo\">{{item?.name_bounes}}</td>\n                    <td class=\"txt-oflo text-right\">1</td>\n                    <td class=\"text-right\">\n                      {{item.point | number:'1.0-0'}} P\n                    </td>\n                    <td class=\"txt-oflo\"></td>\n                    <td class=\"txt-oflo\"></td>\n                    <td class=\"tdBtnRemove\">\n                      <button mat-icon-button (click)=\"delete(item)\">\n                        <mat-icon>clear</mat-icon>\n                      </button>\n                    </td>\n                  </tr>\n\n                  <tr *ngIf=\"data?.type_buy === 1 &&data?.type_pay === 0\">\n                    <td class=\"text-center\"></td>\n                    <td class=\"txt-oflo\">Ship COD</td>\n                    <td class=\"txt-oflo\"></td>\n                    <td class=\"txt-oflo\"></td>\n                    <td class=\"txt-oflo\"></td>\n                    <td class=\"text-right\">\n                      <span class=\"text-danger\">{{'30000' | number:'1.0-0'}} vnđ</span>\n                    </td>\n                  </tr>\n                </tbody>\n                <thead>\n                  <tr>\n                    <th class=\"text-center\">Tổng cộng</th>\n                    <th class=\"txt-oflo\"></th>\n                    <th class=\"txt-oflo\"></th>\n                    <th class=\"txt-oflo\"></th>\n                    <th class=\"txt-oflo\"></th>\n                    <th class=\"text-right\">\n                      <span class=\"text-danger\">{{totalprice | number:'1.0-0'}} vnđ </span>\n                      {{totalpoint| number:'1.0-0'}} P\n                    </th>\n                    <th></th>\n                  </tr>\n                </thead>\n              </table>\n            </div>\n\n            <div class=\"text-right wrapBtn\">\n              <button class=\"f-right\" mat-raised-button color=\"primary\" matStepperNext>Tiếp theo</button>\n            </div>\n          </div>\n        </div>\n      </mat-step>\n      <mat-step>\n        <ng-template matStepLabel>Hình thức thanh toán</ng-template>\n        <section class=\"container\">\n          <label class=\"col-md-12\">\n            <h3>Chọn phương thức mua hàng</h3>\n          </label>\n          <mat-radio-group class=\"col-md-12\" [(ngModel)]=\"Order.type_buy\">\n            <mat-radio-button class=\"radio\" [ngClass]=\"Order.type_buy === '1'?'radioActive':''\" value=\"1\">\n              <h5>Online</h5>\n            </mat-radio-button>\n            <mat-radio-button class=\"radio\" [ngClass]=\"Order.type_buy === '2'?'radioActive':''\" value=\"2\">\n              <h5>Tại Apoint</h5>\n            </mat-radio-button>\n          </mat-radio-group>\n        </section>\n        <section class=\"container\">\n          <label class=\"col-md-12\">\n            <h3>Chọn phương thanh toán</h3>\n          </label>\n          <mat-radio-group class=\"col-md-12\" [(ngModel)]=\"Order.type_pay\">\n            <mat-radio-button class=\"radio\" [ngClass]=\"Order.type_pay === '0'?'radioActive':''\" value=\"0\">\n              <h5>{{Order.type_buy === '1'?'Thanh toán tại nhà':'Thanh toán tại Apoint'}}</h5>\n            </mat-radio-button>\n            <mat-radio-button class=\"radio\" [ngClass]=\"Order.type_pay === '1'?'radioActive':''\" value=\"1\">\n              <h5>Thanh toán qua Ngân hàng</h5>\n            </mat-radio-button>\n          </mat-radio-group>\n        </section>\n        <div class=\"table-responsive\" *ngIf=\"Order.type_pay === '0'\">\n          <table class=\"table table-hover\">\n            <tr>\n              <td class=\"txt-oflo\">Tổng tiền sản phẩm</td>\n              <td class=\"text-right\">\n                <span class=\"text-danger\">{{totalprice | number:'1.0-0'}}</span>\n              </td>\n            </tr>\n            <tr>\n              <td class=\"txt-oflo\">Phí ship COD</td>\n              <td class=\"text-right\">\n                <span class=\"text-danger\">{{'30000' | number:'1.0-0'}}</span>\n              </td>\n            </tr>\n            <tr>\n              <th>Tổng cộng</th>\n              <th class=\"text-right\">\n                <span class=\"text-danger\">{{ (totalprice + 30000) | number:'1.0-0'}} vnđ</span>\n                {{totalpoint| number:'1.0-0'}} P\n              </th>\n            </tr>\n          </table>\n        </div>\n\n        <div class=\"container\" *ngIf=\"Order.type_pay === '1'\">\n          <input id=\"clicked\" value=\"false\" style=\"display: none;\">\n          <input id=\"id_bank_selected\" value=\"0\" style=\"display: none;\">\n          <div>\n            <ul class=\"ulBank\">\n              <li value=\"85\">\n                <a class=\"bank btn\">\n                  <img src=\"https://www.baokim.vn/thanh-toan/images/logo_bank/vietcombank.jpg\" alt=\"Vietcombank\">\n                </a>\n              </li>\n              <li value=\"86\">\n                <a class=\"bank btn\">\n                  <img src=\"https://www.baokim.vn/thanh-toan/images/logo_bank/dongabank.gif\" alt=\"DongA\" bank=\"\">\n                </a>\n              </li>\n              <li value=\"87\">\n                <a class=\"bank btn\">\n                  <img src=\"https://www.baokim.vn/thanh-toan/images/logo_bank/techcombank.gif\" alt=\"Techcombank\">\n                </a>\n              </li>\n              <li value=\"88\">\n                <a class=\"bank btn\">\n                  <img src=\"https://www.baokim.vn/thanh-toan/images/logo_bank/vietinbank.gif\" alt=\"Vietinbank\">\n                </a>\n              </li>\n              <li value=\"89\">\n                <a class=\"bank btn\">\n                  <img src=\"https://www.baokim.vn/thanh-toan/images/logo_bank/mbbank.gif\" alt=\"Military\" bank=\"\">\n                </a>\n              </li>\n              <li value=\"90\">\n                <a class=\"bank btn\">\n                  <img src=\"https://www.baokim.vn/thanh-toan/images/logo_bank/shbbank.gif\" alt=\"SHB\">\n                </a>\n              </li>\n              <li value=\"91\">\n                <a class=\"bank btn\">\n                  <img src=\"https://www.baokim.vn/thanh-toan/images/logo_bank/vibbank.gif\" alt=\"VIB\">\n                </a>\n              </li>\n              <li value=\"92\">\n                <a class=\"bank btn\">\n                  <img src=\"https://www.baokim.vn/thanh-toan/images/logo_bank/seabank.gif\" alt=\"SeABank\">\n                </a>\n              </li>\n              <li value=\"93\">\n                <a class=\"bank btn\">\n                  <img src=\"https://www.baokim.vn/thanh-toan/images/logo_bank/bidvbank.gif\" alt=\"BIDV\">\n                </a>\n              </li>\n              <li value=\"94\">\n                <a class=\"bank btn\">\n                  <img src=\"https://www.baokim.vn/thanh-toan/images/logo_bank/acbbank.gif\" alt=\"ACB\">\n                </a>\n              </li>\n              <li value=\"95\">\n                <a class=\"bank btn\">\n                  <img src=\"https://www.baokim.vn/thanh-toan/images/logo_bank/tienphongbank.png\" alt=\"TPBank\">\n                </a>\n              </li>\n              <li value=\"96\">\n                <a class=\"bank btn\">\n                  <img src=\"https://www.baokim.vn/thanh-toan/images/logo_bank/maritimebank.gif\" alt=\"Maritime\" bank=\"\">\n                </a>\n              </li>\n              <li value=\"97\">\n                <a class=\"bank btn\">\n                  <img src=\"https://www.baokim.vn/thanh-toan/images/logo_bank/vpbank.gif\" alt=\"VPBank\">\n                </a>\n              </li>\n              <li value=\"98\">\n                <a class=\"bank btn\">\n                  <img src=\"https://www.baokim.vn/thanh-toan/images/logo_bank/eximbank.gif\" alt=\"Eximbank\">\n                </a>\n              </li>\n              <li value=\"100\">\n                <a class=\"bank btn\">\n                  <img src=\"https://www.baokim.vn/thanh-toan/images/logo_bank/sacombank.gif\" alt=\"Sacombank\">\n                </a>\n              </li>\n              <li value=\"101\">\n                <a class=\"bank btn\">\n                  <img src=\"https://www.baokim.vn/thanh-toan/images/logo_bank/baovietbank.gif\" alt=\"BAOVIET\" bank=\"\">\n                </a>\n              </li>\n              <li value=\"102\">\n                <a class=\"bank btn\">\n                  <img src=\"https://www.baokim.vn/thanh-toan/images/logo_bank/scbbank.gif\" alt=\"SCB\">\n                </a>\n              </li>\n              <li value=\"104\">\n                <a class=\"bank btn\">\n                  <img src=\"https://www.baokim.vn/thanh-toan/images/logo_bank/agribank.gif\" alt=\"Agribank\">\n                </a>\n              </li>\n              <li value=\"106\">\n                <a class=\"bank btn\">\n                  <img src=\"https://www.baokim.vn/thanh-toan/images/logo_bank/hdbank.gif\" alt=\"HDBank\">\n                </a>\n              </li>\n              <li value=\"107\">\n                <a class=\"bank btn\">\n                  <img src=\"https://www.baokim.vn/thanh-toan/images/logo_bank/namabank.gif\" alt=\"NamA\" bank=\"\">\n                </a>\n              </li>\n              <li value=\"110\">\n                <a class=\"bank btn\">\n                  <img src=\"https://www.baokim.vn/thanh-toan/images/logo_bank/vietabank.gif\" alt=\"VietABank\">\n                </a>\n              </li>\n              <li value=\"111\">\n                <a class=\"bank btn\">\n                  <img src=\"https://www.baokim.vn/thanh-toan/images/logo_bank/gpbank.gif\" alt=\"GP.Bank\">\n                </a>\n              </li>\n              <li value=\"129\">\n                <a class=\"bank btn\">\n                  <img src=\"https://www.baokim.vn/thanh-toan/images/logo_bank/Oceanbank.gif\" alt=\"OceanBank\">\n                </a>\n              </li>\n              <li value=\"135\">\n                <a class=\"bank btn\">\n                  <img src=\"https://www.baokim.vn/thanh-toan/images/logo_bank/lienvietpostbank.jpg\" alt=\"LienVietBank\">\n                </a>\n              </li>\n              <li value=\"136\">\n                <a class=\"bank btn\">\n                  <img src=\"https://www.baokim.vn/thanh-toan/images/logo_bank/phuongdongbank.jpg\" alt=\"PhuongDongBank\">\n                </a>\n              </li>\n              <li value=\"137\">\n                <a class=\"bank btn\">\n                  <img src=\"https://www.baokim.vn/thanh-toan/images/logo_bank/ncb.jpg\" alt=\"Ngân\" hàng=\"\" quốc=\"\" dân=\"\">\n                </a>\n              </li>\n              <li value=\"138\">\n                <a class=\"bank btn\">\n                  <img src=\"https://www.baokim.vn/thanh-toan/images/logo_bank/kienlong.jpg\" alt=\"Ngân\" hàng=\"\" kiên=\"\" long=\"\">\n                </a>\n              </li>\n              <li value=\"134\">\n                <a class=\"bank btn\">\n                  <img src=\"https://www.baokim.vn/thanh-toan/images/logo_bank/baca.jpg\" alt=\"Ngân\" hàng=\"\" bắc=\"\" Á=\"\">\n                </a>\n              </li>\n            </ul>\n          </div>\n        </div>\n\n        <div class=\"text-right container wrapBtnCenter\">\n          <button mat-raised-button (click)=\"stepper.previous();\">Trở về</button>\n          <button class=\"f-right\" mat-raised-button color=\"primary\" #btn (click)=\"purchase(btn)\">Đặt hàng</button>\n        </div>\n      </mat-step>\n    </mat-horizontal-stepper>\n\n  </div>\n</div>"

/***/ }),

/***/ "./src/app/shopping/checkout/checkout.component.scss":
/*!***********************************************************!*\
  !*** ./src/app/shopping/checkout/checkout.component.scss ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".stepper {\n  width: 100%;\n  margin: 0 auto; }\n  .stepper /deep/.mat-horizontal-content-container {\n    padding: 0; }\n  .divInfo {\n  margin: 16px; }\n  /deep/.mat-horizontal-stepper-header {\n  pointer-events: none !important; }\n  .radio {\n  margin: 16px;\n  padding: 0 16px; }\n  .radio h4, .radio h5 {\n    margin: 0;\n    min-width: 155px;\n    height: 55px;\n    line-height: 55px; }\n  .radio /deep/.mat-radio-label {\n    margin: 0; }\n  .radioActive {\n  background: #ffcc11;\n  border-radius: 4rem;\n  color: #333;\n  font-weight: 500 !important;\n  box-shadow: 0 3px 1px -2px rgba(0, 0, 0, 0.2), 0 2px 2px 0 rgba(0, 0, 0, 0.14), 0 1px 5px 0 rgba(0, 0, 0, 0.12); }\n  .spinner {\n  position: fixed;\n  top: calc(50% - 50px);\n  left: calc(50% - 50px);\n  pointer-events: none;\n  z-index: 999; }\n  .wrapBtn {\n  padding: 16px; }\n  .wrapBtnCenter {\n  padding: 16px;\n  display: flex;\n  justify-content: space-between; }\n  ul.ulBank li {\n  float: left; }\n  ul.ulBank li:hover a {\n  box-shadow: 1px 1px 1px 1px #999; }\n  .f-right {\n  background: #009688 !important;\n  color: white; }\n  .tdBtnRemove {\n  vertical-align: middle;\n  padding: 0 5px; }\n"

/***/ }),

/***/ "./src/app/shopping/checkout/checkout.component.ts":
/*!*********************************************************!*\
  !*** ./src/app/shopping/checkout/checkout.component.ts ***!
  \*********************************************************/
/*! exports provided: CheckoutComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CheckoutComponent", function() { return CheckoutComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _node_modules_angular_material__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../node_modules/@angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _services_direction_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../services/direction.service */ "./src/app/services/direction.service.ts");
/* harmony import */ var _node_modules_angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../node_modules/@angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _node_modules_ngx_translate_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../node_modules/@ngx-translate/core */ "./node_modules/@ngx-translate/core/fesm5/ngx-translate-core.js");
/* harmony import */ var _services_user_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../services/user.service */ "./src/app/services/user.service.ts");
/* harmony import */ var _services_customer_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../services/customer.service */ "./src/app/services/customer.service.ts");
/* harmony import */ var _node_modules_ngx_toastr__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../../node_modules/ngx-toastr */ "./node_modules/ngx-toastr/toastr.es5.js");
/* harmony import */ var _services_loading_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../services/loading.service */ "./src/app/services/loading.service.ts");
/* harmony import */ var _services_order_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../services/order.service */ "./src/app/services/order.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};










var CheckoutComponent = /** @class */ (function () {
    function CheckoutComponent(directionService, translateService, userService, customerService, loadingService, orderService, toastr, router) {
        this.directionService = directionService;
        this.translateService = translateService;
        this.userService = userService;
        this.customerService = customerService;
        this.loadingService = loadingService;
        this.orderService = orderService;
        this.toastr = toastr;
        this.router = router;
        this.totalprice = 0;
        this.totalpoint = 0;
        this.listUserAddress = [];
        this.pathName = [
            '',
            'Chuck',
            'Ribs',
            'Loin',
            'Round',
            'Brisket',
            'Plate',
            'Flank',
        ];
        this.weightName = [
            '',
            '250',
            '500',
            '1000',
        ];
        this.bounes = [];
        this.Order = {
            id_user: '',
            receiver: '',
            address: '',
            phone: '',
            total_price: 0,
            type_buy: '1',
            type_pay: '0',
            details: []
        };
        this.error = false;
        this.loadProfile();
        this.data = JSON.parse(localStorage.getItem('orderProduct'));
        if (this.data.length < 1) {
            this.router.navigate(['/app']);
        }
        else {
            console.log(this.data);
            this.Order.details = this.data;
        }
    }
    CheckoutComponent.prototype.ngOnInit = function () {
        this.getListUserAddress();
    };
    CheckoutComponent.prototype.ngAfterViewInit = function () {
        var _this = this;
        setTimeout(function () {
            _this.computeTotalPrice();
        }, 888);
    };
    CheckoutComponent.prototype.loadProfile = function () {
        this.currentUser = this.userService.getCurrentUser();
        console.log(this.currentUser);
    };
    CheckoutComponent.prototype.getListUserAddress = function () {
        var _this = this;
        this.customerService.getListDeliveryAddress(this.currentUser.id_user).subscribe(function (data) {
            if (data) {
                _this.listUserAddress = data;
                _this.initForm(_this.currentUser.main_address);
            }
        });
    };
    CheckoutComponent.prototype.initForm = function (id_address) {
        var index = this.listUserAddress.map(function (m) { return m.id_address; }).indexOf(id_address);
        this.Order.id_user = this.currentUser.id_user;
        this.Order.receiver = this.listUserAddress[index].tagName;
        this.Order.address = this.listUserAddress[index].address;
        this.Order.phone = this.listUserAddress[index].phone;
    };
    CheckoutComponent.prototype.selectAddress = function (event) {
        console.log(event);
        this.initForm(event.value);
    };
    CheckoutComponent.prototype.computeTotalPrice = function () {
        var _this = this;
        this.totalprice = 0;
        this.bounes = [];
        this.data.forEach(function (element) {
            if (element.type < 3) {
                _this.totalprice += element.priceItemBuy;
            }
            else {
                _this.bounes.push(element);
            }
        });
        this.Order.total_price = this.totalprice;
        this.Order.details = this.data;
        this.computeBounesPoint();
    };
    CheckoutComponent.prototype.computeBounesPoint = function () {
        var _this = this;
        this.totalpoint = 0;
        this.bounes.forEach(function (element) {
            _this.totalpoint += element.point;
        });
    };
    CheckoutComponent.prototype.delete = function (item) {
        if (item.type < 3) {
            var index = this.data.map(function (m) { return m.bCode; }).indexOf(item.bCode);
            console.log(index);
            this.data.splice(index, 1);
            if (this.data.length <= 0) {
                this.router.navigate(['/app']);
            }
            localStorage.setItem('orderProduct', JSON.stringify(this.data));
            this.directionService.sendData(this.data);
            this.computeTotalPrice();
        }
        else {
            var index = this.data.map(function (m) { return m.id_bounes; }).indexOf(item.id_bounes);
            console.log(index);
            this.data.splice(index, 1);
            if (this.data.length <= 0) {
                this.router.navigate(['/app']);
            }
            localStorage.setItem('orderProduct', JSON.stringify(this.data));
            this.directionService.sendData(this.data);
            this.computeTotalPrice();
        }
    };
    CheckoutComponent.prototype.filterProduct = function (data) {
        return data.filter(function (m) { return m.type !== 3; });
    };
    CheckoutComponent.prototype.computeTotal = function (item) {
        item.priceItemBuy = (item.buy * item.price) - (((item.buy * item.price) * item.saleoff) / 100);
        return item.priceItemBuy;
    };
    CheckoutComponent.prototype.changeStep = function (event) {
        console.log(event);
    };
    CheckoutComponent.prototype.purchase = function (btn) {
        var _this = this;
        btn.disabled = true;
        this.error = false;
        if (localStorage.getItem('orderProduct')) {
            var finalOrder_1 = JSON.parse(JSON.stringify(this.Order));
            if (finalOrder_1.type_pay === '0') {
                finalOrder_1.total_price += 30000;
            }
            this.checkBounes(function (data) {
                if (data === true) {
                    _this.loadingService.start();
                    document.getElementById('divFull').style.pointerEvents = 'none';
                    document.getElementById('divFull').style.opacity = '.8';
                    console.log(finalOrder_1);
                    _this.orderService.postUserOrder(finalOrder_1).subscribe(function (result) {
                        if (result.message === true) {
                            _this.loadingService.stop();
                            document.getElementById('divFull').style.pointerEvents = 'unset';
                            document.getElementById('divFull').style.opacity = '1';
                            _this.data = [];
                            _this.Order = {
                                id_user: '',
                                receiver: '',
                                address: '',
                                phone: '',
                                total_price: 0,
                                type_buy: '1',
                                type_pay: '0',
                                details: []
                            };
                            localStorage.setItem('orderProduct', JSON.stringify(_this.data));
                            _this.directionService.sendData(_this.data);
                            _this.computeTotalPrice();
                            _this.getNewUserPoint();
                            _this.toastr.success('Nhân viên Agrilego sẽ gọi cho bạn sau vài phút, cảm ơn!', 'Đặt hàng thành công!', {
                                progressBar: true,
                                positionClass: 'toast-bottom-right',
                                timeOut: 4000
                            });
                            setTimeout(function () {
                                _this.router.navigateByUrl('/app/orders');
                            }, 3000);
                        }
                    });
                }
                else {
                    btn.disabled = false;
                    _this.toastr.error('', 'Không thể thực hiện!!', {
                        progressBar: true,
                        positionClass: 'toast-bottom-right',
                        timeOut: 3000
                    });
                }
            });
        }
    };
    CheckoutComponent.prototype.checkBounes = function (callback) {
        var _this = this;
        var checkBounes = 0;
        if (this.bounes.length > 0) {
            this.bounes.forEach(function (element, index) {
                checkBounes += element.point;
                if (checkBounes > _this.currentUser.point) {
                    _this.toastr.error('Điểm hiện tại của bạn: ' + _this.currentUser.point, 'Điểm đổi thưởng của bạn không đủ để thực hiện!!', {
                        progressBar: true,
                        positionClass: 'toast-bottom-right',
                        timeOut: 3000
                    });
                    _this.error = true;
                    callback(false);
                }
                if (index === (_this.bounes.length - 1) && _this.error === false) {
                    callback(true);
                }
            });
        }
        else {
            callback(true);
        }
    };
    CheckoutComponent.prototype.getNewUserPoint = function () {
        var _this = this;
        this.customerService.customerLogin({ email: this.currentUser.email, password: this.currentUser.password }).subscribe(function (result) {
            if (result.message === true) {
                localStorage.setItem('CurrentUser', JSON.stringify(result.data[0]));
                _this.loadProfile();
            }
        });
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])('stepper'),
        __metadata("design:type", _node_modules_angular_material__WEBPACK_IMPORTED_MODULE_1__["MatHorizontalStepper"])
    ], CheckoutComponent.prototype, "stepper", void 0);
    CheckoutComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-checkout',
            template: __webpack_require__(/*! ./checkout.component.html */ "./src/app/shopping/checkout/checkout.component.html"),
            styles: [__webpack_require__(/*! ./checkout.component.scss */ "./src/app/shopping/checkout/checkout.component.scss")]
        }),
        __metadata("design:paramtypes", [_services_direction_service__WEBPACK_IMPORTED_MODULE_2__["DirectionService"],
            _node_modules_ngx_translate_core__WEBPACK_IMPORTED_MODULE_4__["TranslateService"],
            _services_user_service__WEBPACK_IMPORTED_MODULE_5__["UserService"],
            _services_customer_service__WEBPACK_IMPORTED_MODULE_6__["CustomerService"],
            _services_loading_service__WEBPACK_IMPORTED_MODULE_8__["LoadingService"],
            _services_order_service__WEBPACK_IMPORTED_MODULE_9__["OrderService"],
            _node_modules_ngx_toastr__WEBPACK_IMPORTED_MODULE_7__["ToastrService"],
            _node_modules_angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]])
    ], CheckoutComponent);
    return CheckoutComponent;
}());



/***/ }),

/***/ "./src/app/shopping/milk/shopping-milk.component.html":
/*!************************************************************!*\
  !*** ./src/app/shopping/milk/shopping-milk.component.html ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container-fluid\">\r\n    <div class=\"row page-titles\">\r\n        <div class=\"col-md-5 align-self-center\">\r\n            <h4 class=\"text-themecolor\">{{'Shopping' | translate}}</h4>\r\n        </div>\r\n    </div>\r\n    <div class=\"row\">\r\n        <div class=\"col-lg-4\">\r\n            <div class=\"card\">\r\n                <div class=\"card-body\">\r\n                    <h5 class=\"card-title\">{{'Categories' | translate}}</h5>\r\n                    <h6 class=\"card-subtitle\">THỊT NGON QUỐC TẾ - AN TOÀN SỨC KHỎE</h6>\r\n                    <mat-nav-list class=\"steamline m-t-40\">\r\n                        <a mat-list-item *ngFor=\"let menu of listMenu\" [ngClass]=\"menu.id === 'milk'?'routeActive':''\" [routerLink]=\"menu.route\">\r\n                            <span mat-line> {{menu.name}} </span>\r\n                        </a>\r\n                    </mat-nav-list>\r\n                </div>\r\n            </div>\r\n        </div>\r\n        <div class=\"col-lg-8\">\r\n            <div class=\"card oh\">\r\n                <div class=\"card-body\">\r\n                    <ngx-carousel class=\"banner\" [inputs]=\"carouselBanner\">\r\n                        <ngx-item NgxCarouselItem *ngFor=\"let tile of carouselBannerItems\">\r\n                            <div class=\"bannerStyle oh\" [style.background]=\"'url(' + tile + ')'\">\r\n                            </div>\r\n                        </ngx-item>\r\n                        <button NgxCarouselPrev class=\"leftRs\">&lt;</button>\r\n                        <button NgxCarouselNext class=\"rightRs\">&gt;</button>\r\n                    </ngx-carousel>\r\n                </div>\r\n            </div>\r\n        </div>\r\n    </div>\r\n    <div class=\"row\">\r\n        <!-- column -->\r\n        <div class=\"col-12\">\r\n            <div class=\"card\">\r\n                <div class=\"card-body\">\r\n                    <h5 class=\"card-title\">Popular products</h5>\r\n                </div>\r\n                <section class=\"row card-body divWrapItem\">\r\n                    <mat-card class=\"cardItem\" *ngFor=\"let itemOff of listItem | paginate: { id: 'pop', itemsPerPage: 16, currentPage: pop }\">\r\n                        <div class=\"divPoint\" *ngIf=\"itemOff.point > 0\">\r\n                            +{{itemOff.point + ' P'}}\r\n                        </div>\r\n                        <div class=\"divSaleoff text-danger\" *ngIf=\"itemOff.saleoff > 0\">\r\n                            - {{itemOff.saleoff + '%'}}\r\n                        </div>\r\n                        <mat-card-header class=\"content-center m-b-10 p-r-15\">\r\n                            <img [src]=\"imgMilk[itemOff.type_milk]\" class=\"imgItem\">\r\n                            <section>\r\n                                <button mat-icon-button (click)=\"upNumber(itemOff)\">\r\n                                    <mat-icon class=\"mat-18\">add</mat-icon>\r\n                                </button>\r\n                                <input class=\"inputNumber\" matInput [(ngModel)]=\"itemOff.buy\" maxlength=\"2\" (keyup)=\"checkNumber($event,itemOff)\" onkeypress=\"return event.charCode >= 48 && event.charCode <= 57\"\r\n                                />\r\n                                <button mat-icon-button (click)=\"downNumber(itemOff)\">\r\n                                    <mat-icon class=\"mat-18\">remove</mat-icon>\r\n                                </button>\r\n                            </section>\r\n                        </mat-card-header>\r\n                        <mat-card-content>\r\n                            <h4>{{itemOff.nameCpass + ' ' + itemOff.nameFarm + ' ' + (weightName[itemOff.type_milk] | number:'1.0-0')\r\n                                + 'ml'}}</h4>\r\n                            <mat-card-subtitle class=\"bcode-sm\">\r\n                                <i class=\"material-icons icontime\">access_time</i>{{itemOff.end | date: 'dd/MM/yyy'}}</mat-card-subtitle>\r\n                            <mat-card-subtitle class=\"bcode-sm\">bcode: {{itemOff.bCode}}</mat-card-subtitle>\r\n\r\n                            <mat-card-subtitle *ngIf=\"itemOff.saleoff === 0\" class=\"text-danger\">{{itemOff.price | number:'1.0-0'}} VNĐ</mat-card-subtitle>\r\n                            <mat-card-subtitle *ngIf=\"itemOff.saleoff > 0\" class=\"oldPrice\">{{itemOff.price | number:'1.0-0'}} VNĐ</mat-card-subtitle>\r\n                            <mat-card-subtitle *ngIf=\"itemOff.saleoff > 0\" class=\"newPrice text-danger\">{{itemOff.salePrice | number:'1.0-0'}} VNĐ</mat-card-subtitle>\r\n                            <section class=\"wrapProgress\">\r\n                                <mat-progress-bar mode=\"determinate\" class=\"progressQuantity\" [value]='computeProgress(itemOff)'></mat-progress-bar>\r\n                                <span>Còn {{itemOff.inventory | number:'1.0-0'}} chai</span>\r\n                            </section>\r\n\r\n                        </mat-card-content>\r\n                        <mat-card-actions class=\"wrapButton\">\r\n                            <button mat-button>\r\n                                <mat-icon class=\"iconInButton\">visibility</mat-icon>\r\n                                {{'View' | translate}}\r\n                            </button>\r\n                            <button mat-button (click)=\"addToCart(itemOff)\">\r\n                                <mat-icon class=\"iconInButton\">shopping_cart</mat-icon>\r\n                                {{'Buy' | translate}}\r\n                            </button>\r\n                        </mat-card-actions>\r\n                    </mat-card>\r\n                </section>\r\n                <pagination-controls class=\"text-center\" id=\"pop\" (pageChange)=\"pop = $event\"></pagination-controls>\r\n            </div>\r\n        </div>\r\n    </div>\r\n</div>"

/***/ }),

/***/ "./src/app/shopping/milk/shopping-milk.component.scss":
/*!************************************************************!*\
  !*** ./src/app/shopping/milk/shopping-milk.component.scss ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "input::-webkit-outer-spin-button,\ninput::-webkit-inner-spin-button {\n  -webkit-appearance: none;\n  margin: 0; }\n\nbutton {\n  outline: none; }\n\n.imgItem {\n  height: 100px;\n  width: auto; }\n\n.iconInButton {\n  font-size: 1rem;\n  line-height: 1.3rem; }\n\n.ngx-pagination {\n  margin-top: 1rem; }\n\n.inputNumber {\n  width: 100%;\n  text-align: center;\n  border: 1px solid #ddd; }\n\n.oh {\n  min-height: 360px;\n  max-height: 385px; }\n\n.routeActive {\n  background: rgba(0, 0, 0, 0.04); }\n\n.wrapButton {\n  justify-content: space-between;\n  display: flex; }\n\n.divWrapItem {\n  justify-content: space-evenly; }\n\n.wrapProgress {\n  position: relative;\n  display: flex;\n  justify-content: center; }\n\n.wrapProgress span {\n    position: absolute;\n    font-size: 12px;\n    line-height: 14px;\n    font-weight: 500; }\n\n.progressQuantity {\n  height: 14px;\n  border-radius: 20px;\n  overflow: hidden; }\n\n.progressQuantity /deep/.mat-progress-bar-buffer {\n    background-color: #fed8b9 !important; }\n\n.progressQuantity /deep/.mat-progress-bar-fill::after {\n    background-color: #ff7500 !important; }\n\n.cardItem {\n  margin: 5px;\n  min-width: 200px;\n  max-width: 200px;\n  position: relative;\n  display: flex;\n  flex-direction: column; }\n\n.cardbody {\n  flex-grow: 1; }\n\n.steamline {\n  padding: 0;\n  margin: 0; }\n\n.oldPrice {\n  font-size: 0.7rem;\n  text-decoration: line-through;\n  margin: 0; }\n\n.bcode-sm {\n  font-size: 0.777rem;\n  margin: 0;\n  display: flex; }\n\n.icontime {\n  font-size: 1rem;\n  margin-right: 5px; }\n\n.divPoint {\n  position: absolute;\n  left: -6px;\n  background-color: #44b5ff;\n  color: #fff;\n  top: 5px;\n  padding: 0 5px;\n  min-width: 43px;\n  font-size: 0.8rem;\n  font-weight: 500;\n  white-space: nowrap; }\n\n.divPoint::before {\n  content: \"\";\n  display: inline-block;\n  position: absolute;\n  -webkit-transform: rotate(45deg);\n  transform: rotate(45deg);\n  left: .1rem;\n  bottom: -.2rem;\n  border: .21rem solid transparent;\n  border-bottom-color: #0971c2; }\n\n.divSaleoff {\n  position: absolute;\n  right: 0;\n  background-color: rgba(255, 212, 36, 0.9);\n  padding: 5px;\n  top: 0;\n  max-width: 43px;\n  min-width: 43px;\n  font-size: 0.8rem;\n  font-weight: 500;\n  white-space: nowrap; }\n\n.divSaleoff::after {\n  content: \"\";\n  width: 0;\n  height: 0;\n  left: 0;\n  bottom: -4px;\n  border-style: solid;\n  position: absolute;\n  border-width: 0 21.5px 4px;\n  border-color: transparent rgba(255, 212, 36, 0.9); }\n\n.bannerStyle {\n  background-color: #ccc;\n  background-size: cover !important;\n  height: 100%; }\n\n.bannerStyle img {\n  width: 100%;\n  height: 100%; }\n\n.bannerStyle h1 {\n  text-align: center;\n  line-height: 400px;\n  background: rgba(0, 0, 0, 0.32);\n  color: white;\n  margin: 0; }\n\n.leftRs {\n  position: absolute;\n  margin: auto;\n  top: 0;\n  bottom: 0;\n  width: 50px;\n  height: 50px;\n  box-shadow: 1px 2px 10px -1px rgba(0, 0, 0, 0.3);\n  border-radius: 999px;\n  left: 0; }\n\n.rightRs {\n  position: absolute;\n  margin: auto;\n  top: 0;\n  bottom: 0;\n  width: 50px;\n  height: 50px;\n  box-shadow: 1px 2px 10px -1px rgba(0, 0, 0, 0.3);\n  border-radius: 999px;\n  right: 0; }\n\n@media (max-width: 720px) {\n  .cardItem {\n    max-width: 250px; } }\n"

/***/ }),

/***/ "./src/app/shopping/milk/shopping-milk.component.ts":
/*!**********************************************************!*\
  !*** ./src/app/shopping/milk/shopping-milk.component.ts ***!
  \**********************************************************/
/*! exports provided: ShoppingMilkComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ShoppingMilkComponent", function() { return ShoppingMilkComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_product_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../services/product.service */ "./src/app/services/product.service.ts");
/* harmony import */ var _services_user_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../services/user.service */ "./src/app/services/user.service.ts");
/* harmony import */ var _node_modules_ngx_toastr__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../node_modules/ngx-toastr */ "./node_modules/ngx-toastr/toastr.es5.js");
/* harmony import */ var _services_direction_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../services/direction.service */ "./src/app/services/direction.service.ts");
/* harmony import */ var _node_modules_angular_material__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../../node_modules/@angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _shopping_cart_shopping_cart_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../shopping-cart/shopping-cart.component */ "./src/app/shopping/shopping-cart/shopping-cart.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var ShoppingMilkComponent = /** @class */ (function () {
    function ShoppingMilkComponent(productService, userService, toastr, directionService, dialog) {
        this.productService = productService;
        this.userService = userService;
        this.toastr = toastr;
        this.directionService = directionService;
        this.dialog = dialog;
        this.listItem = [];
        this.listMenu = [
            { name: 'Beef Brahman', id: '1', route: '/app/shopping/beef/1' },
            { name: 'Beef Red Sindhi', id: '2', route: '/app/shopping/beef/2' },
            { name: 'Beef USA', id: '3', route: '/app/shopping/beef/3' },
            { name: 'Beef Kobe', id: '4', route: '/app/shopping/beef/4' },
            { name: 'Milk', id: 'milk', route: '/app/shopping/milk' },
            { name: 'Bounes', id: '', route: '/app/shopping/bounes' },
        ];
        this.imgMilk = [
            '',
            'http://i1150.photobucket.com/albums/o614/manhtung159/Alego/milk-bottle_zpswwdft8yl.png',
            'http://i1150.photobucket.com/albums/o614/manhtung159/Alego/tab-milk_zpszcg0q0b4.png',
            'http://i1150.photobucket.com/albums/o614/manhtung159/Alego/milk_zpslz1bqaa8.png'
        ];
        this.weightName = [
            '',
            '250',
            '500',
            '1000',
        ];
        this.imgags = [
            'http://i1150.photobucket.com/albums/o614/manhtung159/Alego/natures-banner_zpsuklq2ieq.jpg',
            'http://i1150.photobucket.com/albums/o614/manhtung159/Alego/WEB_Banner_Milk_zpspsxcchxg.png',
            'http://i1150.photobucket.com/albums/o614/manhtung159/Alego/banner_zpsf0gre8tm.jpg',
            'http://i1150.photobucket.com/albums/o614/manhtung159/Alego/banner2_zpst6dqnuts.jpg',
        ];
        this.carouselBannerItems = [];
        this.loadProfile();
    }
    ShoppingMilkComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.getListItem();
        this.initCarousel();
        this.id = setInterval(function () {
            _this.getListItem();
        }, 10000);
    };
    ShoppingMilkComponent.prototype.ngOnDestroy = function () {
        if (this.id) {
            clearInterval(this.id);
        }
    };
    ShoppingMilkComponent.prototype.initCarousel = function () {
        this.carouselBanner = {
            grid: { xs: 1, sm: 1, md: 1, lg: 1, all: 0 },
            slide: 4,
            speed: 500,
            interval: 5000,
            point: {
                visible: true,
                pointStyles: "\n          .ngxcarouselPoint {\n            list-style-type: none;\n            text-align: center;\n            padding: 12px;\n            margin: 0;\n            white-space: nowrap;\n            overflow: auto;\n            position: absolute;\n            width: 100%;\n            bottom: 20px;\n            left: 0;\n            box-sizing: border-box;\n          }\n          .ngxcarouselPoint li {\n            display: inline-block;\n            border-radius: 999px;\n            background: rgba(255, 255, 255, 0.55);\n            padding: 5px;\n            margin: 0 3px;\n            transition: .4s ease all;\n          }\n          .ngxcarouselPoint li.active {\n              background: white;\n              width: 10px;\n          }\n        "
            },
            load: 2,
            touch: true,
            loop: true,
            easing: 'cubic-bezier(0, 0, 0.2, 1)'
        };
        this.carouselBannerLoad();
    };
    ShoppingMilkComponent.prototype.carouselBannerLoad = function () {
        for (var i = 0; i < this.imgags.length; i++) {
            this.carouselBannerItems.push(this.imgags[i]);
        }
    };
    ShoppingMilkComponent.prototype.loadProfile = function () {
        this.currentUser = this.userService.getCurrentUser();
    };
    ShoppingMilkComponent.prototype.getListItem = function () {
        var _this = this;
        this.productService.getAllBeefByPathBySpecies(this.currentUser.area, '2', 'any', 'any').subscribe(function (res) {
            if (res.message === false) {
                return;
            }
            _this.listItem = [];
            res.map(function (item) {
                if (item.saleoff > 0) {
                    item.salePrice = item.price - ((item.price * item.saleoff) / 100);
                }
                if (item.duedate) {
                    item.end = new Date(item.duedate);
                }
                item.buy = 1;
                if (item.inventory === 0) {
                    item.buy = 0;
                }
                _this.listItem.push(item);
            });
            console.log(_this.listItem);
        });
    };
    ShoppingMilkComponent.prototype.addToCart = function (item) {
        var _this = this;
        if (item.inventory === 0) {
            this.toastr.error('', 'Sản phẩm đã bán hết', {
                progressBar: true,
                positionClass: 'toast-bottom-right',
                timeOut: 2000
            });
            return;
        }
        this.productService.get(item.bCode).subscribe(function (data) {
            if (data[0]) {
                if (data[0].inventory > 0) {
                    _this.saveItem(item, function (res) {
                        if (res === true) {
                            var dialogRef = _this.dialog.open(_shopping_cart_shopping_cart_component__WEBPACK_IMPORTED_MODULE_6__["ShoppingCartComponent"], {
                                width: 'auto',
                                height: 'auto',
                                data: JSON.parse(localStorage.getItem('orderProduct'))
                            });
                        }
                    });
                }
                else {
                    _this.toastr.error('', 'Sản phẩm đã bán hết', {
                        progressBar: true,
                        positionClass: 'toast-bottom-right',
                        timeOut: 2000
                    });
                }
            }
        });
    };
    ShoppingMilkComponent.prototype.saveItem = function (item, callback) {
        var orderProduct = JSON.parse(localStorage.getItem('orderProduct'));
        var index = orderProduct.findIndex(function (o) { return o.bCode === item.bCode; });
        if (index > -1) {
            this.toastr.error('Thông báo!', 'Sản phẩm đã có trong giỏ hàng', {
                progressBar: true,
                positionClass: 'toast-bottom-right',
                timeOut: 2000
            });
            callback(false);
        }
        else {
            orderProduct.push(item);
            localStorage.setItem('orderProduct', JSON.stringify(orderProduct));
            this.directionService.sendData(JSON.parse(localStorage.getItem('orderProduct')));
            callback(true);
        }
    };
    ShoppingMilkComponent.prototype.computeProgress = function (itemOff) {
        return (itemOff.inventory * 100) / itemOff.quantity;
    };
    ShoppingMilkComponent.prototype.checkNumber = function (event, item) {
        console.log(event);
        if (Number(event.target.value) > Number(item.inventory)) {
            item.buy = item.inventory;
        }
    };
    ShoppingMilkComponent.prototype.upNumber = function (item) {
        item.buy = Number(item.buy);
        if (item.buy === item.inventory || item.buy > item.inventory) {
            item.buy = item.inventory;
            return;
        }
        item.buy += 1;
    };
    ShoppingMilkComponent.prototype.downNumber = function (item) {
        item.buy = Number(item.buy);
        if (item.buy === 1 || item.buy === 0) {
            return;
        }
        if (item.buy > item.inventory) {
            item.buy = item.inventory;
            return;
        }
        item.buy -= 1;
    };
    ShoppingMilkComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-shopping-milk',
            template: __webpack_require__(/*! ./shopping-milk.component.html */ "./src/app/shopping/milk/shopping-milk.component.html"),
            styles: [__webpack_require__(/*! ./shopping-milk.component.scss */ "./src/app/shopping/milk/shopping-milk.component.scss")],
        }),
        __metadata("design:paramtypes", [_services_product_service__WEBPACK_IMPORTED_MODULE_1__["ProductService"],
            _services_user_service__WEBPACK_IMPORTED_MODULE_2__["UserService"],
            _node_modules_ngx_toastr__WEBPACK_IMPORTED_MODULE_3__["ToastrService"],
            _services_direction_service__WEBPACK_IMPORTED_MODULE_4__["DirectionService"],
            _node_modules_angular_material__WEBPACK_IMPORTED_MODULE_5__["MatDialog"]])
    ], ShoppingMilkComponent);
    return ShoppingMilkComponent;
}());



/***/ }),

/***/ "./src/app/shopping/shopping-cart/shopping-cart.component.html":
/*!*********************************************************************!*\
  !*** ./src/app/shopping/shopping-cart/shopping-cart.component.html ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n  <mat-toolbar class=\"toolbar\">\n    <mat-toolbar-row>\n      <span>{{'orderDetail' | translate}}</span>\n      <span class=\"fill-space\"></span>\n      <button mat-icon-button tabindex=\"-1\" (click)=\"closeDialog()\">\n        <mat-icon>clear</mat-icon>\n      </button>\n    </mat-toolbar-row>\n  </mat-toolbar>\n  <div class=\"table-responsive\">\n    <table class=\"table table-hover\">\n      <thead>\n        <tr>\n          <th class=\"text-center\">Bcode</th>\n          <th>{{'product' | translate}}</th>\n          <th>{{'Quantity' | translate}}</th>\n          <th class=\"text-right\">{{'Đơn giá' | translate}}</th>\n          <th>{{'discount' | translate}} ( % )</th>\n          <th class=\"text-right\">{{'Thành tiền' | translate}}</th>\n          <th></th>\n        </tr>\n      </thead>\n      <tbody>\n        <tr *ngFor=\"let item of filterProduct(data);let i = index\">\n          <td class=\"text-center\">{{item.bCode}}</td>\n          <td class=\"txt-oflo\" *ngIf=\"item.type_beef > 0\">{{ pathName[item.type_beef] + ' ' + item.name+ ' ' + item.weight}}</td>\n          <td class=\"txt-oflo\" *ngIf=\"item.type_milk > 0\">{{item.nameCpass + ' ' + item.nameFarm + ' ' + (weightName[item.type_milk] | number:'1.0-0') + 'ml'}}</td>\n\n          <td class=\"txt-oflo\" *ngIf=\"item.type_beef > 0\">1</td>\n          <td class=\"txt-oflo\" *ngIf=\"item.type_milk > 0\">{{item.buy | number:'1.0-0'}}</td>\n\n          <td class=\"txt-oflo text-right\">{{item.price | number:'1.0-0'}}</td>\n          <td class=\"txt-oflo\">{{item.saleoff}}</td>\n          <td class=\"text-right\">\n            <span class=\"text-danger\">{{computeTotal(item) | number:'1.0-0'}}</span>\n          </td>\n          <td class=\"tdBtnRemove\">\n            <button mat-icon-button (click)=\"delete(item)\">\n              <mat-icon>clear</mat-icon>\n            </button>\n          </td>\n        </tr>\n\n        <tr *ngFor=\"let item of bounes\">\n          <td class=\"txt-oflo text-center\">\n            <img [src]=\"item.img\" width=\"auto\" height=\"30\" />\n          </td>\n          <td class=\"txt-oflo\">{{item?.name_bounes}}</td>\n          <td class=\"txt-oflo\">1</td>\n          <td class=\"text-right\">\n            {{item.point | number:'1.0-0'}} P\n          </td>\n          <td class=\"txt-oflo\"></td>\n          <td class=\"txt-oflo\"></td>\n          <td class=\"tdBtnRemove\">\n            <button mat-icon-button (click)=\"delete(item)\">\n              <mat-icon>clear</mat-icon>\n            </button>\n          </td>\n        </tr>\n\n        <tr *ngIf=\"data?.type_buy === 1 &&data?.type_pay === 0\">\n          <td class=\"text-center\"></td>\n          <td class=\"txt-oflo\">Ship COD</td>\n          <td class=\"txt-oflo\"></td>\n          <td class=\"txt-oflo\"></td>\n          <td class=\"txt-oflo\"></td>\n          <td class=\"text-right\">\n            <span class=\"text-danger\">{{'30000' | number:'1.0-0'}}</span>\n          </td>\n        </tr>\n      </tbody>\n      <thead>\n        <tr>\n          <th class=\"text-center\">Tổng cộng</th>\n          <th class=\"txt-oflo\"></th>\n          <th class=\"txt-oflo\"></th>\n          <th class=\"txt-oflo\"></th>\n          <th class=\"txt-oflo\"></th>\n          <th class=\"text-right\">\n            <span class=\"text-danger\">{{totalprice | number:'1.0-0'}} vnđ</span>\n          </th>\n          <th></th>\n        </tr>\n      </thead>\n    </table>\n  </div>\n  <!--  dong div wrap table -->\n  <div class=\"action-cart\">\n    <button mat-raised-button (click)=\"closeDialog()\">Tiếp tục mua</button>\n    <button mat-raised-button [routerLink]=\"['/app/shopping/checkout']\" (click)=\"closeDialog()\" class=\"f-right\">Thanh toán</button>\n  </div>\n</div>"

/***/ }),

/***/ "./src/app/shopping/shopping-cart/shopping-cart.component.scss":
/*!*********************************************************************!*\
  !*** ./src/app/shopping/shopping-cart/shopping-cart.component.scss ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".toolbar {\n  min-height: 48px;\n  max-height: 48px;\n  background: #009688;\n  color: #fff; }\n  .toolbar .mat-toolbar-row {\n    padding-right: 0; }\n  .mat-sort-header-container {\n  align-items: center; }\n  .tab {\n  background-repeat: no-repeat;\n  background-size: contain;\n  background-position-x: 50%; }\n  .mat-tab-nav-bar {\n  display: flex;\n  justify-content: center; }\n  .td-name-product {\n  width: 240px; }\n  .container {\n  padding: 0px; }\n  .mat-table {\n  width: 100% !important; }\n  .table-responsive {\n  max-height: 80vh;\n  overflow: auto; }\n  .container-table {\n  height: calc(100% - 84px); }\n  .content-cart h4 {\n  text-align: right;\n  padding-right: 20px; }\n  .action-cart {\n  padding: 0px 20px 10px; }\n  .f-right {\n  float: right;\n  background: #009688 !important;\n  color: white; }\n  .tdBtnRemove {\n  vertical-align: middle;\n  padding: 0 5px; }\n  @media (max-width: 720px) {\n  .content-cart {\n    width: 100%; }\n  .container-table {\n    height: calc(100% - 133px); } }\n"

/***/ }),

/***/ "./src/app/shopping/shopping-cart/shopping-cart.component.ts":
/*!*******************************************************************!*\
  !*** ./src/app/shopping/shopping-cart/shopping-cart.component.ts ***!
  \*******************************************************************/
/*! exports provided: ShoppingCartComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ShoppingCartComponent", function() { return ShoppingCartComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _node_modules_angular_material__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../node_modules/@angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _services_product_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../services/product.service */ "./src/app/services/product.service.ts");
/* harmony import */ var _services_direction_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../services/direction.service */ "./src/app/services/direction.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (undefined && undefined.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};





var ShoppingCartComponent = /** @class */ (function () {
    function ShoppingCartComponent(dialogRef, data, productService, router, directionService) {
        this.dialogRef = dialogRef;
        this.data = data;
        this.productService = productService;
        this.router = router;
        this.directionService = directionService;
        this.totalprice = 0;
        this.pathName = [
            '',
            'Chuck',
            'Ribs',
            'Loin',
            'Round',
            'Brisket',
            'Plate',
            'Flank',
        ];
        this.weightName = [
            '',
            '250',
            '500',
            '1000',
        ];
        this.bounes = [];
    }
    ShoppingCartComponent.prototype.ngOnInit = function () {
    };
    ShoppingCartComponent.prototype.ngAfterViewInit = function () {
        var _this = this;
        setTimeout(function () {
            _this.computeTotalPrice();
        }, 888);
    };
    ShoppingCartComponent.prototype.computeTotalPrice = function () {
        var _this = this;
        this.totalprice = 0;
        this.bounes = [];
        this.data.forEach(function (element) {
            console.log(element);
            if (element.type < 3) {
                _this.totalprice += element.priceItemBuy;
            }
            else {
                _this.bounes.push(element);
            }
        });
    };
    ShoppingCartComponent.prototype.delete = function (item) {
        var _this = this;
        if (item.type < 3) {
            var index = this.data.map(function (m) { return m.bCode; }).indexOf(item.bCode);
            this.data.splice(index, 1);
            this.productService.post(item.bCode, '1').subscribe(function (m) {
                if (_this.data.length <= 0) {
                    _this.closeDialog();
                }
                if (_this.router.url.includes('checkout')) {
                    _this.router.navigateByUrl('/app/shopping');
                }
                localStorage.setItem('orderProduct', JSON.stringify(_this.data));
                _this.directionService.sendData(_this.data);
                _this.computeTotalPrice();
            });
        }
        else {
            var index = this.data.map(function (m) { return m.id_bounes; }).indexOf(item.id_bounes);
            this.data.splice(index, 1);
            if (this.data.length <= 0) {
                this.closeDialog();
            }
            localStorage.setItem('orderProduct', JSON.stringify(this.data));
            this.directionService.sendData(this.data);
            this.computeTotalPrice();
        }
    };
    ShoppingCartComponent.prototype.filterProduct = function (data) {
        return data.filter(function (m) { return m.type !== 3; });
    };
    ShoppingCartComponent.prototype.closeDialog = function () {
        this.dialogRef.close();
    };
    ShoppingCartComponent.prototype.computeTotal = function (item) {
        item.priceItemBuy = (item.buy * item.price) - (((item.buy * item.price) * item.saleoff) / 100);
        return item.priceItemBuy;
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])(_node_modules_angular_material__WEBPACK_IMPORTED_MODULE_1__["MatPaginator"]),
        __metadata("design:type", _node_modules_angular_material__WEBPACK_IMPORTED_MODULE_1__["MatPaginator"])
    ], ShoppingCartComponent.prototype, "paginator", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])(_node_modules_angular_material__WEBPACK_IMPORTED_MODULE_1__["MatSort"]),
        __metadata("design:type", _node_modules_angular_material__WEBPACK_IMPORTED_MODULE_1__["MatSort"])
    ], ShoppingCartComponent.prototype, "sort", void 0);
    ShoppingCartComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-shopping-cart',
            template: __webpack_require__(/*! ./shopping-cart.component.html */ "./src/app/shopping/shopping-cart/shopping-cart.component.html"),
            styles: [__webpack_require__(/*! ./shopping-cart.component.scss */ "./src/app/shopping/shopping-cart/shopping-cart.component.scss")]
        }),
        __param(1, Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"])(_node_modules_angular_material__WEBPACK_IMPORTED_MODULE_1__["MAT_DIALOG_DATA"])),
        __metadata("design:paramtypes", [_node_modules_angular_material__WEBPACK_IMPORTED_MODULE_1__["MatDialogRef"], Object, _services_product_service__WEBPACK_IMPORTED_MODULE_2__["ProductService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"],
            _services_direction_service__WEBPACK_IMPORTED_MODULE_3__["DirectionService"]])
    ], ShoppingCartComponent);
    return ShoppingCartComponent;
}());



/***/ }),

/***/ "./src/app/shopping/shopping.component.html":
/*!**************************************************!*\
  !*** ./src/app/shopping/shopping.component.html ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container-fluid\">\r\n    <div class=\"row page-titles\">\r\n        <div class=\"col-md-5 align-self-center\">\r\n            <h4 class=\"text-themecolor\">{{'Shopping' | translate}}</h4>\r\n        </div>\r\n    </div>\r\n    <div class=\"row\">\r\n        <div class=\"col-lg-4\">\r\n            <div class=\"card\">\r\n                <div class=\"card-body\">\r\n                    <h5 class=\"card-title\">{{'Categories' | translate}}</h5>\r\n                    <h6 class=\"card-subtitle\">THỊT NGON QUỐC TẾ - AN TOÀN SỨC KHỎE</h6>\r\n                    <mat-nav-list class=\"steamline m-t-40\">\r\n                        <a mat-list-item *ngFor=\"let menu of listMenu\" [routerLink]=\"menu.route\">\r\n                            <span mat-line> {{menu.name}} </span>\r\n                        </a>\r\n                    </mat-nav-list>\r\n                </div>\r\n            </div>\r\n        </div>\r\n        <div class=\"col-lg-8\">\r\n            <div class=\"card oh\">\r\n                <div class=\"card-body divWrapSale\">\r\n                    <div class=\"d-flex m-b-30 align-items-center no-block\">\r\n                        <h5 class=\"card-title \">Sales Off</h5>\r\n                        <div class=\"ml-auto\">\r\n                            <ul class=\"list-inline font-20\">\r\n                                <li>\r\n                                    <i class=\"fa fa-caret-up text-success\"></i> 70%</li>\r\n                            </ul>\r\n                        </div>\r\n                    </div>\r\n                    <section class=\"row divWrapItem\">\r\n                        <mat-card class=\"col-lg-3 col-md-3 cardItem\" *ngFor=\"let itemOff of listItemSaleOff | paginate: {id: 'sale', itemsPerPage: 6, currentPage: sale }\">\r\n                            <div class=\"divPoint\" *ngIf=\"itemOff.point > 0\">\r\n                                +{{itemOff.point + ' P'}}\r\n                            </div>\r\n                            <div class=\"divSaleoff text-danger\" *ngIf=\"itemOff.saleoff > 0\">\r\n                                - {{itemOff.saleoff + '%'}}\r\n                            </div>\r\n                            <mat-card-header class=\"content-center m-b-10 p-r-15\">\r\n                                <img [src]=\"imgBeef[itemOff.type_beef]\" class=\"imgItem\">\r\n                            </mat-card-header>\r\n                            <mat-card-content>\r\n                                <h4>{{(pathName[itemOff.type_beef] | translate) + ' ' + itemOff.species + ' ' + '('+itemOff.weight+')'}}</h4>\r\n                                <mat-card-subtitle class=\"bcode-sm\">bcode: {{itemOff.bCode}}</mat-card-subtitle>\r\n                                <mat-card-subtitle *ngIf=\"itemOff.saleoff === 0\" class=\"text-danger\">{{itemOff.price | number:'1.0-0'}} VNĐ</mat-card-subtitle>\r\n                                <mat-card-subtitle *ngIf=\"itemOff.saleoff > 0\" class=\"oldPrice\">{{itemOff.price | number:'1.0-0'}} VNĐ</mat-card-subtitle>\r\n                                <mat-card-subtitle *ngIf=\"itemOff.saleoff > 0\" class=\"newPrice text-danger\">{{itemOff.salePrice | number:'1.0-0'}} VNĐ</mat-card-subtitle>\r\n                            </mat-card-content>\r\n                            <mat-card-actions class=\"wrapButton\">\r\n                                <button mat-button (click)=\"view(itemOff)\">\r\n                                    <mat-icon class=\"iconInButton\">visibility</mat-icon>\r\n                                    {{'View' | translate}}\r\n                                </button>\r\n                                <button mat-button (click)=\"addToCart(itemOff)\">\r\n                                    <mat-icon class=\"iconInButton\">{{ itemOff.can_buy === 1?'shopping_cart':'check'}}</mat-icon>\r\n                                    {{ itemOff.can_buy === 1?('Buy' | translate):('Sold' | translate)}}\r\n                                </button>\r\n                            </mat-card-actions>\r\n                        </mat-card>\r\n                    </section>\r\n                    <pagination-controls *ngIf=\"listItemSaleOff.length > 0\" class=\"text-center\" id=\"sale\" (pageChange)=\"sale = $event\"></pagination-controls>\r\n                </div>\r\n            </div>\r\n        </div>\r\n    </div>\r\n    <!-- ============================================================== -->\r\n    <!-- News -->\r\n    <!-- ============================================================== -->\r\n    <div class=\"row\">\r\n        <!-- column -->\r\n        <div class=\"col-12\">\r\n            <div class=\"card\">\r\n                <div class=\"card-body\">\r\n                    <h5 class=\"card-title\">Popular products</h5>\r\n                </div>\r\n                <section class=\"row card-body divWrapItem\">\r\n                    <mat-card class=\"cardItem\" *ngFor=\"let itemOff of listItem | paginate: { id: 'pop', itemsPerPage: 16, currentPage: pop }\">\r\n                        <div class=\"divPoint\" *ngIf=\"itemOff.point > 0\">\r\n                            +{{itemOff.point + ' P'}}\r\n                        </div>\r\n                        <div class=\"divSaleoff text-danger\" *ngIf=\"itemOff.saleoff > 0\">\r\n                            - {{itemOff.saleoff + '%'}}\r\n                        </div>\r\n                        <mat-card-header class=\"content-center m-b-10 p-r-15\">\r\n                            <img [src]=\"imgBeef[itemOff.type_beef]\" class=\"imgItem\">\r\n                        </mat-card-header>\r\n                        <mat-card-content>\r\n                            <h4>{{(pathName[itemOff.type_beef] | translate) + ' ' + itemOff.nameSpecies + ' ' + '('+itemOff.weight+')'}}</h4>\r\n                            <mat-card-subtitle class=\"bcode-sm\">bcode: {{itemOff.bCode}}</mat-card-subtitle>\r\n                            <mat-card-subtitle *ngIf=\"itemOff.saleoff === 0\" class=\"text-danger\">{{itemOff.price | number:'1.0-0'}} VNĐ</mat-card-subtitle>\r\n                            <mat-card-subtitle *ngIf=\"itemOff.saleoff > 0\" class=\"oldPrice\">{{itemOff.price | number:'1.0-0'}} VNĐ</mat-card-subtitle>\r\n                            <mat-card-subtitle *ngIf=\"itemOff.saleoff > 0\" class=\"newPrice text-danger\">{{itemOff.salePrice | number:'1.0-0'}} VNĐ</mat-card-subtitle>\r\n                        </mat-card-content>\r\n                        <mat-card-actions class=\"wrapButton\">\r\n                            <button mat-button (click)=\"view(itemOff)\">\r\n                                <mat-icon class=\"iconInButton\">visibility</mat-icon>\r\n                                {{'View' | translate}}\r\n                            </button>\r\n                            <button mat-button (click)=\"addToCart(itemOff)\">\r\n                                <mat-icon class=\"iconInButton\">{{ itemOff.can_buy === 1?'shopping_cart':'check'}}</mat-icon>\r\n                                {{ itemOff.can_buy === 1?('Buy' | translate):('Sold' | translate)}}\r\n                            </button>\r\n                        </mat-card-actions>\r\n                    </mat-card>\r\n                </section>\r\n                <pagination-controls class=\"text-center\" id=\"pop\" (pageChange)=\"pop = $event\"></pagination-controls>\r\n            </div>\r\n        </div>\r\n    </div>\r\n</div>"

/***/ }),

/***/ "./src/app/shopping/shopping.component.scss":
/*!**************************************************!*\
  !*** ./src/app/shopping/shopping.component.scss ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".imgItem {\n  height: 100px;\n  width: 100px;\n  border: 3px solid #ddd;\n  border-radius: 100%; }\n\n.iconInButton {\n  font-size: 1rem;\n  line-height: 1.3rem; }\n\n.ngx-pagination {\n  margin-top: 1rem; }\n\n.wrapButton {\n  justify-content: space-between;\n  display: flex; }\n\n.divWrapItem {\n  justify-content: space-evenly; }\n\n.divWrapSale {\n  min-height: 384px; }\n\n.cardItem {\n  margin: 5px;\n  min-width: 200px;\n  max-width: 200px;\n  position: relative;\n  display: flex;\n  flex-direction: column; }\n\n.cardItem /deep/.mat-card-content {\n    flex: 1; }\n\n.steamline {\n  padding: 0;\n  margin: 0; }\n\n.oldPrice {\n  font-size: 0.7rem;\n  text-decoration: line-through;\n  margin: 0; }\n\n.bcode-sm {\n  font-size: 0.777rem;\n  margin: 0; }\n\n.divPoint {\n  position: absolute;\n  left: -6px;\n  background-color: #44b5ff;\n  color: #fff;\n  top: 5px;\n  padding: 0 5px;\n  min-width: 43px;\n  font-size: 0.8rem;\n  font-weight: 500;\n  white-space: nowrap; }\n\n.divPoint::before {\n  content: \"\";\n  display: inline-block;\n  position: absolute;\n  -webkit-transform: rotate(45deg);\n  transform: rotate(45deg);\n  left: .1rem;\n  bottom: -.2rem;\n  border: .21rem solid transparent;\n  border-bottom-color: #0971c2; }\n\n.divSaleoff {\n  position: absolute;\n  right: 0;\n  background-color: rgba(255, 212, 36, 0.9);\n  padding: 5px;\n  top: 0;\n  max-width: 43px;\n  min-width: 43px;\n  font-size: 0.8rem;\n  font-weight: 500;\n  white-space: nowrap; }\n\n.divSaleoff::after {\n  content: \"\";\n  width: 0;\n  height: 0;\n  left: 0;\n  bottom: -4px;\n  border-style: solid;\n  position: absolute;\n  border-width: 0 21.5px 4px;\n  border-color: transparent rgba(255, 212, 36, 0.9); }\n\n@media (max-width: 720px) {\n  .cardItem {\n    max-width: 250px; } }\n"

/***/ }),

/***/ "./src/app/shopping/shopping.component.ts":
/*!************************************************!*\
  !*** ./src/app/shopping/shopping.component.ts ***!
  \************************************************/
/*! exports provided: ShoppingComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ShoppingComponent", function() { return ShoppingComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_product_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../services/product.service */ "./src/app/services/product.service.ts");
/* harmony import */ var _services_user_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../services/user.service */ "./src/app/services/user.service.ts");
/* harmony import */ var _node_modules_ngx_toastr__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../node_modules/ngx-toastr */ "./node_modules/ngx-toastr/toastr.es5.js");
/* harmony import */ var _services_direction_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../services/direction.service */ "./src/app/services/direction.service.ts");
/* harmony import */ var _node_modules_angular_material__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../node_modules/@angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _shopping_cart_shopping_cart_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./shopping-cart/shopping-cart.component */ "./src/app/shopping/shopping-cart/shopping-cart.component.ts");
/* harmony import */ var _node_modules_ngx_translate_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../node_modules/@ngx-translate/core */ "./node_modules/@ngx-translate/core/fesm5/ngx-translate-core.js");
/* harmony import */ var _node_modules_angular_router__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../node_modules/@angular/router */ "./node_modules/@angular/router/fesm5/router.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};









var ShoppingComponent = /** @class */ (function () {
    function ShoppingComponent(productService, userService, toastr, translateService, directionService, router, dialog) {
        this.productService = productService;
        this.userService = userService;
        this.toastr = toastr;
        this.translateService = translateService;
        this.directionService = directionService;
        this.router = router;
        this.dialog = dialog;
        this.listItemSaleOff = [];
        this.listItem = [];
        this.imgBeef = [
            '',
            'http://i1150.photobucket.com/albums/o614/manhtung159/Alego/chuck_zpsv6laku8r.png',
            'http://i1150.photobucket.com/albums/o614/manhtung159/Alego/ribs_zpsmmcrurk8.jpg',
            'http://i1150.photobucket.com/albums/o614/manhtung159/Alego/loin_zps1gii9mkq.jpg',
            'http://i1150.photobucket.com/albums/o614/manhtung159/Alego/round_zpsy0su2h28.jpg',
            'http://i1150.photobucket.com/albums/o614/manhtung159/Alego/brisket_zps4o4sfa0w.jpg',
            'http://i1150.photobucket.com/albums/o614/manhtung159/Alego/plate_zpsky0yrjco.jpg',
            'http://i1150.photobucket.com/albums/o614/manhtung159/Alego/flank_zpsm2wr3yk1.jpg',
        ];
        this.pathName = [
            '',
            'Chuck',
            'Ribs',
            'Loin',
            'Round',
            'Brisket',
            'Plate',
            'Flank',
        ];
        this.listMenu = [
            { name: 'Beef Brahman', id: '1', route: '/app/shopping/beef/1' },
            { name: 'Beef Red Sindhi', id: '2', route: '/app/shopping/beef/2' },
            { name: 'Beef USA', id: '3', route: '/app/shopping/beef/3' },
            { name: 'Beef Kobe', id: '4', route: '/app/shopping/beef/4' },
            { name: 'Milk', id: '', route: '/app/shopping/milk' },
            { name: 'Bounes', id: '', route: '/app/shopping/bounes' },
        ];
        this.loadProfile();
    }
    ShoppingComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.getListItemSaleOff();
        this.getListItem();
        this.id = setInterval(function () {
            _this.getListItemSaleOff();
            _this.getListItem();
        }, 10000);
    };
    ShoppingComponent.prototype.ngOnDestroy = function () {
        if (this.id) {
            clearInterval(this.id);
        }
    };
    ShoppingComponent.prototype.loadProfile = function () {
        this.currentUser = this.userService.getCurrentUser();
        if (this.currentUser) {
            if (this.currentUser.language) {
                this.translateService.setDefaultLang(this.currentUser.language);
            }
        }
        else {
            this.translateService.setDefaultLang('en');
        }
    };
    ShoppingComponent.prototype.getListItemSaleOff = function () {
        var _this = this;
        var data = {
            area: this.currentUser.area,
            type: 1
        };
        this.productService.getBcodeSaleOff(data).subscribe(function (res) {
            if (res.message === false) {
                return;
            }
            _this.listItemSaleOff = [];
            res.map(function (item) {
                if (item.saleoff > 0) {
                    var newITem = Object.assign({}, item, {
                        salePrice: item.price - ((item.price * item.saleoff) / 100)
                    });
                    newITem.buy = 1;
                    _this.listItemSaleOff.push(newITem);
                }
            });
        });
    };
    ShoppingComponent.prototype.getListItem = function () {
        var _this = this;
        this.productService.getAllBeefByArea(this.currentUser.area, '1').subscribe(function (res) {
            if (res.message === false) {
                return;
            }
            _this.listItem = [];
            res.map(function (item) {
                if (item.saleoff > 0) {
                    item.salePrice = item.price - ((item.price * item.saleoff) / 100);
                }
                item.buy = 1;
                _this.listItem.push(item);
            });
        });
    };
    ShoppingComponent.prototype.addToCart = function (item) {
        var _this = this;
        this.productService.get(item.bCode).subscribe(function (data) {
            if (data[0]) {
                if (data[0].can_buy === 1) {
                    _this.saveItem(item, function (res) {
                        if (res === true) {
                            item.can_buy = 0;
                            _this.productService.post(item.bCode, '0').subscribe();
                            var dialogRef = _this.dialog.open(_shopping_cart_shopping_cart_component__WEBPACK_IMPORTED_MODULE_6__["ShoppingCartComponent"], {
                                width: 'auto',
                                height: 'auto',
                                data: JSON.parse(localStorage.getItem('orderProduct'))
                            });
                            dialogRef.afterClosed().subscribe(function (result) {
                                _this.productService.get(item.bCode).subscribe(function (bcode) {
                                    if (bcode[0]) {
                                        item.can_buy = bcode[0].can_buy;
                                    }
                                });
                            });
                        }
                    });
                }
                else {
                    item.can_buy = data[0].can_buy;
                    _this.toastr.error('', 'Sản phẩm đã bán', {
                        progressBar: true,
                        positionClass: 'toast-bottom-right',
                        timeOut: 2000
                    });
                }
            }
        });
    };
    ShoppingComponent.prototype.saveItem = function (item, callback) {
        var orderProduct = JSON.parse(localStorage.getItem('orderProduct'));
        var index = orderProduct.findIndex(function (o) { return o.bCode === item.bCode; });
        if (index > -1) {
            this.toastr.error('Thông báo!', 'Sản phẩm đã có trong giỏ hàng', {
                progressBar: true,
                positionClass: 'toast-bottom-right',
                timeOut: 2000
            });
            callback(false);
        }
        else {
            orderProduct.push(item);
            localStorage.setItem('orderProduct', JSON.stringify(orderProduct));
            this.directionService.sendData(JSON.parse(localStorage.getItem('orderProduct')));
            callback(true);
        }
    };
    ShoppingComponent.prototype.view = function (item) {
        this.router.navigateByUrl('/app/beeforigin/' + item.bCode);
    };
    ShoppingComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-shopping',
            template: __webpack_require__(/*! ./shopping.component.html */ "./src/app/shopping/shopping.component.html"),
            styles: [__webpack_require__(/*! ./shopping.component.scss */ "./src/app/shopping/shopping.component.scss")],
        }),
        __metadata("design:paramtypes", [_services_product_service__WEBPACK_IMPORTED_MODULE_1__["ProductService"],
            _services_user_service__WEBPACK_IMPORTED_MODULE_2__["UserService"],
            _node_modules_ngx_toastr__WEBPACK_IMPORTED_MODULE_3__["ToastrService"],
            _node_modules_ngx_translate_core__WEBPACK_IMPORTED_MODULE_7__["TranslateService"],
            _services_direction_service__WEBPACK_IMPORTED_MODULE_4__["DirectionService"],
            _node_modules_angular_router__WEBPACK_IMPORTED_MODULE_8__["Router"],
            _node_modules_angular_material__WEBPACK_IMPORTED_MODULE_5__["MatDialog"]])
    ], ShoppingComponent);
    return ShoppingComponent;
}());



/***/ }),

/***/ "./src/app/store/dialog-ShowDirections/dialog-show-direction.component.html":
/*!**********************************************************************************!*\
  !*** ./src/app/store/dialog-ShowDirections/dialog-show-direction.component.html ***!
  \**********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<mat-toolbar class=\"toolbar\">\r\n    <mat-toolbar-row>\r\n        <span>{{'Show Directions' | translate}}</span>\r\n        <span class=\"fill-space\"></span>\r\n        <button mat-icon-button (click)=\"closeDialog()\">\r\n            <mat-icon>clear</mat-icon>\r\n        </button>\r\n    </mat-toolbar-row>\r\n</mat-toolbar>\r\n<div class=\"body\">\r\n    <div class=\"row\">\r\n        <div class=\"form-group col-sm-12 col-md-8\">\r\n            <label class=\"col-sm-12\">{{'Select Your Address' | translate}}</label>\r\n            <div class=\"col-sm-12\">\r\n\r\n                <select class=\"form-control form-control-line\" (change)=\"changeSelectAddress($event)\" [formControl]=\"main_address\">\r\n                    <option *ngFor=\"let address of listUserAddress\" [value]=\"convertString(address.id_address)\">\r\n                        {{address.address}}\r\n                    </option>\r\n                </select>\r\n            </div>\r\n        </div>\r\n        <div class=\"col-sm-12 col-md-4 divDistance\">\r\n            <h6>{{'Distance' | translate}}: {{distance}}</h6>\r\n            <h6>{{'Duration' | translate}}: {{duration}}</h6>\r\n        </div>\r\n    </div>\r\n\r\n\r\n    <agm-map *ngIf=\"lat && lng\" [latitude]=\"lat\" [longitude]=\"lng\" [zoom]=\"zoom\">\r\n        <agm-direction [origin]=\"userDir\" [destination]=\"apointDir\" (onChange)=\"changeHandler($event)\"></agm-direction>\r\n    </agm-map>\r\n\r\n\r\n</div>\r\n<div class=\"footer\">\r\n    <button mat-raised-button (click)=\"closeDialog()\">{{'close' | translate}}</button>\r\n</div>"

/***/ }),

/***/ "./src/app/store/dialog-ShowDirections/dialog-show-direction.component.scss":
/*!**********************************************************************************!*\
  !*** ./src/app/store/dialog-ShowDirections/dialog-show-direction.component.scss ***!
  \**********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".toolbar {\n  min-height: 48px;\n  max-height: 48px;\n  background: #009688;\n  color: #fff; }\n\n.formField {\n  width: 100%; }\n\n.btnAdd {\n  background: #009688;\n  color: #fff;\n  margin-left: 10px; }\n\n.body {\n  padding: 16px 16px 0 16px; }\n\n.footer {\n  padding: 8px 16px;\n  background: #fafafa;\n  text-align: right; }\n\nbutton:hover {\n  background-color: #00BFA5;\n  box-shadow: 0 3px 5px -1px rgba(0, 0, 0, 0.2), 0 6px 10px 0 rgba(0, 0, 0, 0.14), 0 1px 18px 0 rgba(0, 0, 0, 0.12); }\n\n.divDistance {\n  display: flex;\n  flex-direction: column;\n  justify-content: center; }\n\nagm-map {\n  height: 50vh; }\n"

/***/ }),

/***/ "./src/app/store/dialog-ShowDirections/dialog-show-direction.component.ts":
/*!********************************************************************************!*\
  !*** ./src/app/store/dialog-ShowDirections/dialog-show-direction.component.ts ***!
  \********************************************************************************/
/*! exports provided: DialogShowDirectionComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DialogShowDirectionComponent", function() { return DialogShowDirectionComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _services_user_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../services/user.service */ "./src/app/services/user.service.ts");
/* harmony import */ var _services_customer_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../services/customer.service */ "./src/app/services/customer.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (undefined && undefined.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};





var DialogShowDirectionComponent = /** @class */ (function () {
    function DialogShowDirectionComponent(dialogRef, userService, customerService, data) {
        this.dialogRef = dialogRef;
        this.userService = userService;
        this.customerService = customerService;
        this.data = data;
        this.zoom = 12;
        this.userDir = '';
        this.apointDir = { lat: 0, lng: 0 };
        this.listUserAddress = [];
        this.main_address = new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]();
        this.loadProfile();
        this.lat = null;
        this.lng = null;
    }
    DialogShowDirectionComponent.prototype.closeDialog = function () {
        this.dialogRef.close();
    };
    DialogShowDirectionComponent.prototype.ngOnInit = function () {
        this.getListUserAddress();
    };
    DialogShowDirectionComponent.prototype.getListUserAddress = function () {
        var _this = this;
        this.customerService.getListDeliveryAddress(this.currentUser.id_user).subscribe(function (data) {
            if (data) {
                _this.listUserAddress = data;
                console.log(_this.listUserAddress);
            }
        });
    };
    DialogShowDirectionComponent.prototype.ngAfterViewInit = function () {
        var _this = this;
        if (this.data) {
            setTimeout(function () {
                _this.lat = Number(_this.data.latitude);
                _this.lng = Number(_this.data.longitude);
                _this.apointDir.lat = Number(_this.data.latitude);
                _this.apointDir.lng = Number(_this.data.longitude);
            }, 100);
        }
    };
    DialogShowDirectionComponent.prototype.loadProfile = function () {
        this.currentUser = this.userService.getCurrentUser();
        this.userDir = this.currentUser.address;
        this.main_address.setValue(this.currentUser.main_address);
    };
    DialogShowDirectionComponent.prototype.changeSelectAddress = function (event) {
        this.userDir = event.target.selectedOptions[0].innerText;
    };
    DialogShowDirectionComponent.prototype.convertString = function (value) {
        if (value) {
            return String(value);
        }
    };
    DialogShowDirectionComponent.prototype.changeHandler = function (event) {
        console.log(event);
        if (event.routes[0].legs[0].distance) {
            this.distance = event.routes[0].legs[0].distance.text;
        }
        if (event.routes[0].legs[0].duration) {
            this.duration = event.routes[0].legs[0].duration.text;
        }
    };
    DialogShowDirectionComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-dialog-show-direction',
            template: __webpack_require__(/*! ./dialog-show-direction.component.html */ "./src/app/store/dialog-ShowDirections/dialog-show-direction.component.html"),
            styles: [__webpack_require__(/*! ./dialog-show-direction.component.scss */ "./src/app/store/dialog-ShowDirections/dialog-show-direction.component.scss")],
        }),
        __param(3, Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"])(_angular_material__WEBPACK_IMPORTED_MODULE_1__["MAT_DIALOG_DATA"])),
        __metadata("design:paramtypes", [_angular_material__WEBPACK_IMPORTED_MODULE_1__["MatDialogRef"],
            _services_user_service__WEBPACK_IMPORTED_MODULE_3__["UserService"],
            _services_customer_service__WEBPACK_IMPORTED_MODULE_4__["CustomerService"], Object])
    ], DialogShowDirectionComponent);
    return DialogShowDirectionComponent;
}());



/***/ }),

/***/ "./src/app/store/store.component.html":
/*!********************************************!*\
  !*** ./src/app/store/store.component.html ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container-fluid\">\r\n    <div class=\"row page-titles\">\r\n        <div class=\"col-md-5 align-self-center\">\r\n            <h4 class=\"text-themecolor\">{{'Find Store' | translate}}</h4>\r\n        </div>\r\n    </div>\r\n    <div class=\"row\">\r\n        <div class=\"col-lg-8\">\r\n            <div class=\"card oh\">\r\n                <div class=\"card-body\">\r\n                    <div class=\"d-flex align-items-center no-block\">\r\n                        <div class=\"form-group\">\r\n                            <label class=\"col-sm-12\">{{'Select City' | translate}}</label>\r\n                            <div class=\"col-sm-12\">\r\n                                <select class=\"form-control form-control-line\" (change)=\"changeArea($event)\" [value]=\"currentUser.area\">\r\n                                    <option value=\"HCM\">{{'HCM' | translate}}</option>\r\n                                    <option value=\"VT\">{{'VT' | translate}}</option>\r\n                                </select>\r\n                            </div>\r\n                        </div>\r\n                    </div>\r\n                    <agm-map [latitude]=\"lat\" [longitude]=\"lng\" [zoom]=\"zoom\">\r\n                        <agm-marker *ngFor=\"let m of markers\" [latitude]=\"converNumber(m.latitude)\" [longitude]=\"converNumber(m.longitude)\" [markerDraggable]=\"false\">\r\n                            <agm-info-window>\r\n                                <h5 class=\"card-title\">{{m.name}}</h5>\r\n                                <h6 class=\"card-subtitle\">{{'Address' |translate}}: {{m.address}}</h6>\r\n                                <h6 class=\"card-subtitle\">{{'Phone' | translate}}: {{m.phone}}</h6>\r\n                                <h6 class=\"card-subtitle\">\r\n                                    <a class=\"btn m-r-5 btn-rounded btn-outline-success\" *ngIf=\"isOpen()?true:false\">Opening</a>\r\n                                    <a class=\"btn m-r-5 btn-rounded btn-outline-danger\" *ngIf=\"isOpen()?false:true\">Closed</a>\r\n                                    8:00 – 20:00 (Thứ 2 đến Chủ Nhật)\r\n                                </h6>\r\n                                <section class=\"flex wrapFooter\">\r\n                                    <button mat-raised-button>{{'View apoint' | translate}}</button>\r\n                                    <button mat-raised-button color=\"primary\" (click)=\"showDirection(m)\">{{'Show directions' | translate}}</button>\r\n                                </section>\r\n                            </agm-info-window>\r\n                        </agm-marker>\r\n                    </agm-map>\r\n                </div>\r\n            </div>\r\n        </div>\r\n        <div class=\"col-lg-4\">\r\n            <div class=\"card\">\r\n                <div class=\"card-body\">\r\n                    <h5 class=\"card-title\">{{('Found' | translate) +' ' + markers.length + ' ' + \r\n                        ( markers.length > 1? ('Stores' | translate):('Store'| translate))}}</h5>\r\n                    <mat-card class=\"storeInfo m-t-5\" *ngFor=\"let m of markers\">\r\n                        <h5 class=\"card-title\">{{m.name}}</h5>\r\n                        <h6 class=\"card-subtitle\">{{'Address' |translate}}: {{m.address}}</h6>\r\n                        <h6 class=\"card-subtitle\">{{'Phone' | translate}}: {{m.phone}}</h6>\r\n                        <h6 class=\"card-subtitle\">\r\n                            Open: 8:00 – 20:00 (Thứ 2 đến Chủ Nhật)\r\n                        </h6>\r\n                        <h6 class=\"card-subtitle\">\r\n                            <a class=\"btn m-r-5 btn-rounded btn-outline-success\" *ngIf=\"isOpen()?true:false\">Opening</a>\r\n                            <a class=\"btn m-r-5 btn-rounded btn-outline-danger\" *ngIf=\"isOpen()?false:true\">Closed</a>\r\n                        </h6>\r\n\r\n                        <section class=\"flex wrapFooter\">\r\n                            <button mat-raised-button>{{'View apoint' | translate}}</button>\r\n                            <button mat-raised-button color=\"primary\">{{'Show directions' | translate}}</button>\r\n                        </section>\r\n                    </mat-card>\r\n                </div>\r\n            </div>\r\n        </div>\r\n    </div>\r\n</div>"

/***/ }),

/***/ "./src/app/store/store.component.scss":
/*!********************************************!*\
  !*** ./src/app/store/store.component.scss ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".imgItem {\n  height: 100px;\n  width: 100px;\n  border: 3px solid #ddd;\n  border-radius: 100%; }\n\n.iconInButton {\n  font-size: 1rem;\n  line-height: 1.3rem; }\n\n.cardItem {\n  margin: 5px; }\n\n.steamline {\n  padding: 0;\n  margin: 0; }\n\n.wrapFooter {\n  justify-content: space-between;\n  padding: 3px 2px; }\n\n.storeInfo {\n  padding: 10px; }\n\nagm-map {\n  height: 400px; }\n"

/***/ }),

/***/ "./src/app/store/store.component.ts":
/*!******************************************!*\
  !*** ./src/app/store/store.component.ts ***!
  \******************************************/
/*! exports provided: StoreComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StoreComponent", function() { return StoreComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_user_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../services/user.service */ "./src/app/services/user.service.ts");
/* harmony import */ var _node_modules_angular_material__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../node_modules/@angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _dialog_ShowDirections_dialog_show_direction_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./dialog-ShowDirections/dialog-show-direction.component */ "./src/app/store/dialog-ShowDirections/dialog-show-direction.component.ts");
/* harmony import */ var _services_apoint_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../services/apoint.service */ "./src/app/services/apoint.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var StoreComponent = /** @class */ (function () {
    function StoreComponent(userService, dialog, apointService) {
        this.userService = userService;
        this.dialog = dialog;
        this.apointService = apointService;
        this.markers = [];
        this.zoom = 12;
        this.loadProfile();
    }
    StoreComponent.prototype.ngOnInit = function () {
        console.log(this.currentUser);
        this.getListApoint();
    };
    StoreComponent.prototype.loadProfile = function () {
        this.currentUser = this.userService.getCurrentUser();
        if (this.currentUser.area === 'HCM') {
            this.lat = 10.8509842;
            this.lng = 106.6269628;
        }
        else if (this.currentUser.area === 'VT') {
            this.lat = 10.4040208;
            this.lng = 107.125572;
        }
    };
    StoreComponent.prototype.changeArea = function (event) {
        if (event.target.value === 'HCM') {
            this.lat = 10.8509842;
            this.lng = 106.6269628;
        }
        else if (event.target.value === 'VT') {
            this.lat = 10.4040208;
            this.lng = 107.125572;
        }
    };
    StoreComponent.prototype.showDirection = function (apoint) {
        var dialogRef = this.dialog.open(_dialog_ShowDirections_dialog_show_direction_component__WEBPACK_IMPORTED_MODULE_3__["DialogShowDirectionComponent"], {
            data: apoint,
        });
    };
    StoreComponent.prototype.getListApoint = function () {
        var _this = this;
        this.apointService.get(this.currentUser.area).subscribe(function (data) {
            if (data) {
                _this.markers = data;
            }
        });
    };
    StoreComponent.prototype.converNumber = function (value) {
        if (value) {
            return Number(value);
        }
    };
    StoreComponent.prototype.isOpen = function () {
        var end = new Date();
        end.setHours(20);
        var start = new Date();
        start.setHours(8);
        if (new Date().getTime() > end.getTime()) {
            return false;
        }
        else {
            if (new Date().getTime() < start.getTime()) {
                return false;
            }
            else {
                return true;
            }
        }
    };
    StoreComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-store',
            template: __webpack_require__(/*! ./store.component.html */ "./src/app/store/store.component.html"),
            styles: [__webpack_require__(/*! ./store.component.scss */ "./src/app/store/store.component.scss")],
        }),
        __metadata("design:paramtypes", [_services_user_service__WEBPACK_IMPORTED_MODULE_1__["UserService"],
            _node_modules_angular_material__WEBPACK_IMPORTED_MODULE_2__["MatDialog"],
            _services_apoint_service__WEBPACK_IMPORTED_MODULE_4__["ApointService"]])
    ], StoreComponent);
    return StoreComponent;
}());



/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
var environment = {
    api_url: 'http://171.250.23.228',
    production: false
};


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm5/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var hammerjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! hammerjs */ "./node_modules/hammerjs/hammer.js");
/* harmony import */ var hammerjs__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(hammerjs__WEBPACK_IMPORTED_MODULE_4__);





if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(function (err) { return console.log(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! E:\alego\src\main.ts */"./src/main.ts");


/***/ }),

/***/ 1:
/*!********************!*\
  !*** ws (ignored) ***!
  \********************/
/*! no static exports found */
/***/ (function(module, exports) {

/* (ignored) */

/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map
