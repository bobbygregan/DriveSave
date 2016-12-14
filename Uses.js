angular.module('myApp').factory('Uses', function($firebaseArray, $firebaseObject) {
	
	// @NOTE: this is the ref that you need to set to point at the list
	//		  of todos. Please see the instructions on the page for the location.
	var UsesRef = firebase.database().ref().child("uses");
	var UsedRef = firebase.database().ref().child("used");

	var Uses = {
		use: [],

		addUses: function(newUses) {
			return Uses.use.$add(newUses);
		},

		getUse: function(useid) {
			var individualUsesRef = UsedRef.child(useid);
			return $firebaseObject(individualUsesRef);
		},

		getUses: function() {
			
			return Uses.use;
		},
		getUsed: function() {
			// var individualUsesRef = UsedRef.child(Uses_id);
			return $firebaseArray(UsedRef);
		},
		addUsed: function(newUsed) {
			// var individualUsedRef = UsedRef.child(used.uses);
			var used = $firebaseArray(UsedRef);
			return used.$add(newUsed);

		},
		saveUses: function(theUses) {
			return theUses.$save();
		},

		removeUses: function(Uses_id) {
			var individualUsesRef = UsesRef.child(Uses_id);
			var theUses = $firebaseObject(individualUsesRef);
			return theUses.$remove();
		},
	};

	Uses.use = $firebaseArray(UsedRef);
	console.log(UsesRef);
	return Uses;
});