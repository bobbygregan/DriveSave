angular.module('myApp').controller('ExperienceController', function($scope,Auth, AuthWaitForLogged,Dealership) {
	$scope.submitstory = function(){
		console.log($scope.yourstory);
		$("#addExperiencemodal").modal('show');
	}
	$scope.dealerships = Dealership.getDealerships();

	$scope.addExperience = function(newexperience){
		Dealership.addExperience(newexperience);
	}
}); 


angular.module('myApp').controller('ViewDealershipController', function($scope,Auth, AuthWaitForLogged, Dealership,$routeParams) {
	console.log($routeParams.did);

	$scope.dealership = Dealership.getDealership($routeParams.did);
	$scope.experiences = Dealership.getExperiences($routeParams.did);
}); 

angular.module('myApp').controller('DealershipController', function($scope,Dealership) {
	$scope.dealershipList = Dealership.getDealerships();
	$scope.showAddDealership = function(){
		$("#addDealershipmodal").modal('show');
	} 
	$scope.showEditDealership = function(dealership_id){
		$scope.editDealership = Dealership.getDealership(dealership_id);
		console.log($scope.editDealership);
		$("#editDealershipmodal").modal('show');
	} 

	$scope.addDealership = function(newDealership) {
		Dealership.addDealership(newDealership).then(function() {
			$("#addDealershipmodal").modal('hide');
		});
		console.log('fuckshitfuck');
	}; 
	$scope.getDealerships = function() {
		return Dealership.dealerships;
	}

	$scope.updateDealership = function() {
		Dealership.saveDealership($scope.editDealership).then(function() {
			$("#editDealershipmodal").modal('hide');
		});
	};

}); 
angular.module('myApp').controller('UsedController', function($scope,Auth, AuthWaitForLogged,Uses) {
	$scope.submitused = function(){
		console.log($scope.submitused);
		$("#addUsedemodal").modal('show');
	}
$scope.use = Uses.getUsed();

	$scope.addUsed = function(newused){
		Uses.addUsed(newused).then(function(newUsed) {
			$("#addUsedemodal").modal('hide');
		});

	}
}); 

angular.module('myApp').controller('ViewUsesController', function($scope,Auth, AuthWaitForLogged, Uses,$routeParams) {
	console.log($routeParams.did);

	// $scope.uses = Uses.getUses();
	$scope.useList = Uses.getUsed();

	if ($routeParams.uid!=undefined){
		$scope.vehicle= Uses.getUse($routeParams.uid);
	}


}); 

angular.module('myApp').controller('usesController', function($scope,Uses) {
	$scope.useList = use.getuse();
	$scope.showAdduses = function(){
		$("#adduses").modal('show');
	} 
	$scope.showEdituses = function(uses_id){
		$scope.edituse = Use.getUse(use_id);
		console.log($scope.editUse);
		$("#editusemodal").modal('show');
	} 

	$scope.addused = function(newuses) {
		Dealership.addUses(newUse).then(function() {
			$("#addusemodal").modal('hide');
		});
		console.log('fuckshitfuck');
	}; 
	$scope.getuses = function() {
		return Uses.uses;
	}

	$scope.updateuses = function() {
		Uses.saveuses($scope.edituse).then(function() {
			$("#editmodal").modal('hide');
		});
	};

}); 


angular.module('myApp').controller('LoginController', function($scope, Auth, AuthWaitForLogged) {

	if (AuthWaitForLogged == null) {

		// nobody is logged in
		$scope.isLoggedIn = false;
	}
	else {

		// somebody is logged in
		$scope.isLoggedIn = true;
		$scope.currentUser = Auth.checkUser(AuthWaitForLogged);
	}

	$scope.loginWithFacebook = function() {
		// login with Facebook
		Auth.loginWithFacebook().then(function(firebaseUser) {
			$scope.currentUser = Auth.checkUser(firebaseUser.user);
			$scope.isLoggedIn = true;
			// console.log("Signed in as:", firebaseUser.user.displayName);
			// console.log(firebaseUser);
		}).catch(function(error) {
			console.log("Authentication failed:", error);
		});
	};

	$scope.loginWithGmail = function() {
		// login with Facebook
		Auth.loginWithGmail().then(function(firebaseUser) {
			$scope.currentUser = Auth.checkUser(firebaseUser.user);
			$scope.isLoggedIn = true;
			// console.log("Signed in as:", firebaseUser.user.displayName);
			// console.log(firebaseUser);
		}).catch(function(error) {
			console.log("Authentication failed:", error);
		});
	};

	$scope.logout = function() {

		Auth.logout().then(function() {
			$scope.isLoggedIn = false;
		});
	};
});

// angular.module('myApp').controller('DriveSaveController', function($scope,DriveSave){
// 	$scope.DriveSave= function()
// 	// $("main.html")('show');
// });
