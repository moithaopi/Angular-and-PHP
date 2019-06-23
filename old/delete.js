var app=angular.module('sa_app',[]);
app.controller('deleteController',function($scope,$http){
	$scope.delete_data = function(id) {
        if (confirm("Are you sure you want to delete?"+id)) {
            var delete_row=$http({
				method:'POST',
				url:'delete.php',
				//data:{'id':id}
			}).then(function successCallback(response){

			},function errorCallback(response){
				
			});

        } else {
            return false;
        }
    }
});
