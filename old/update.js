var app=angular.module('sa_app',[]);
app.controller('updateController',function($scope,$http){
	var insert=$http({
		method:'POST',
		url:'update.php'
	}).then(function successCallback(response){

	},function errorCallback(response){
		
	});
});