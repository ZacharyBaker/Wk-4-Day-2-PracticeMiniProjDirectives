angular.module('timeApp')
	.directive('showTime', function(){
		return {
			restrict: 'E',
			template: '<div> The current time is {{time | date: "mediumTime"}}</div>',
			link: function(scope, element, attr){
				var currentTime = new Date();
				scope.time = currentTime;
			}
		}
	})