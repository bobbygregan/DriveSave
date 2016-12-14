var app = angular.module("myApp", ["ngRoute", 'firebase']);

app.config(function($routeProvider) {
    $routeProvider
    .when("/", {
        templateUrl : "templates/main.html"
    })  
     .when("/login", {
         templateUrl : "templates/login.html",
         controller : "LoginController",
         resolve: {
            AuthWaitForLogged: function(Auth) {
                return Auth.getAuth().$waitForSignIn();
            }
        }
   })
    .when("/experience", {
        templateUrl : "templates/experience.html",
        controller : 'ExperienceController',
        resolve: {
            AuthWaitForLogged: function(Auth) {
                return Auth.getAuth().$waitForSignIn();
            }
        }
    })
    .when("/Contact", {
        templateUrl : "templates/dealerships.html",
        controller : "DealershipController",
    })

    .when("/Used Section", {
        templateUrl : "templates/use.html",
        controller : "UsesController",
    })

    .when("/Used", {
        templateUrl : "templates/Used.html",
        controller : "UsedController",
        resolve: {
            AuthWaitForLogged: function(Auth) {
                return Auth.getAuth().$waitForSignIn();
            }
        }
    })
     .when("/dealership/:did", {
        templateUrl : "templates/dealership.html",
        controller : "ViewDealershipController",
        resolve: {
            AuthWaitForLogged: function(Auth) {
                return Auth.getAuth().$waitForSignIn();
            }
        }
    })
     .when("/uses", {
        templateUrl : "templates/use.html",
        controller : "ViewUsesController",
        resolve: {
            AuthWaitForLogged: function(Auth) {
                return Auth.getAuth().$waitForSignIn();
            }
        }
    })
     .when("/uses/:uid", {
        templateUrl : "templates/uses.html",
        controller : "ViewUsesController",
        resolve: {
            AuthWaitForLogged: function(Auth) {
                return Auth.getAuth().$waitForSignIn();
            }
        }
    })
    // .when("/DriveSave", {
    //     templateUrl : "templates/main.html"
    //     // controller : "DriveSave"
    // })  

$('.edit_btn').on('click', function(e){
    console.log('click');
    e.preventDefault();
});



});   
