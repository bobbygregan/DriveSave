var app = angular.module("myApp", ["ngRoute"]);

app.config(function($routeProvider) {
    $routeProvider
    .when("/", {
        templateUrl : "templates/main.html"
    })
     .when("/login", {
         templateUrl : "templates/login.html"
    })
    .when("/experience", {
        templateUrl : "templates/experience.html"
    })
    .when("/Contact", {
        templateUrl : "templates/Contact.html"
    })
    .when("/Used", {
        templateUrl : "templates/Used.html"
    });
});