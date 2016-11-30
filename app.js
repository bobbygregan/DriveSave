var app = angular.module("myApp", ["ngRoute", 'firebase']);

app.config(function($routeProvider) {
    $routeProvider
    .when("/", {
        templateUrl : "templates/main.html"
    })  
     .when("/login", {
         templateUrl : "templates/login.html",
         controller : "LoginController"
    })
    .when("/experience", {
        templateUrl : "templates/experience.html",
        controller : 'ExperienceController'
    })
    .when("/Contact", {
        templateUrl : "templates/Contact.html"
    })
    .when("/Used", {
        templateUrl : "templates/Used.html",
        controller : "UsedController"
    })
    .when("/Brands", {
        templateUrl : "templates/main.html"
    });   
});   
// .state("/login", {
//          templateUrl : "templates/login.html",
//          controller : "LoginController"
// })
// .state(("/login", {
//          templateUrl : "templates/login.html",
//          controller : "LoginController"
// })