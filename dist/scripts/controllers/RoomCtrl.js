(function() {
	function RoommCtrl() {
		this.rooms = Room;
	}

	angular
		.module('blocChat')
		.controller('RoommCtrl', RoommCtrl);
})();
