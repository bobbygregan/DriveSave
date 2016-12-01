angular.module('myApp').factory('Dealership', function($firebaseArray, $firebaseObject) {
	
	// @NOTE: this is the ref that you need to set to point at the list
	//		  of todos. Please see the instructions on the page for the location.
	var DealershipRef = firebase.database().ref().child("dealership");
	var ExperienceRef = firebase.database().ref().child("experience");

	var Dealership = {
		dealerships: [],

		addDealership: function(newDealership) {
			return Dealership.dealerships.$add(newDealership);
		},

		getDealerships: function() {
			return Dealership.dealerships;
		},

		getDealership: function(Dealership_id) {
			var individualDealershipRef = DealershipRef.child(Dealership_id);
			return $firebaseObject(individualDealershipRef);
		},
		getExperiences: function(Dealership_id) {
			var individualDealershipRef = ExperienceRef.child(Dealership_id);
			return $firebaseArray(individualDealershipRef);
		},
		addExperience: function(experience) {
			var individualExperienceRef = ExperienceRef.child(experience.dealership);
			var experiences = $firebaseArray(individualExperienceRef);
			return experiences.$add(experience);

		},
		saveDealership: function(theDealership) {
			return theDealership.$save();
		},

		removeDealership: function(Dealership_id) {
			var individualDealershipRef = DealershipRef.child(Dealership_id);
			var theDealership = $firebaseObject(individualDealershipRef);
			return theDealership.$remove();
		},
	};

	Dealership.dealerships = $firebaseArray(DealershipRef);
	console.log(DealershipRef);
	return Dealership;
});