var app=angular.module('sa_app',[]);
app.controller('insertController',function($scope,$http){
	$scope.btnName = "Insert";
	$scope.insert=function(){
		if ($scope.name == null) {
            alert("Enter Your Name");
        } else if ($scope.email == null) {
            alert("Enter Your Email ID");
        } else if ($scope.age == null) {
            alert("Enter Your Age");
        } else {

        	var myData={
				'name': $scope.name,
		        'email': $scope.email,
		        'age': $scope.age,
		        'btnName': $scope.btnName,
		        'id': $scope.id
			};

            var insert_in=$http({
				method:'POST',
				url:'insert.php',
				data:myData
			}).then(function successCallback(response){
				console.log(response);
			},function errorCallback(response){
				console.log(response);
			});
			console.log(myData);
			return insert_in;
        }
	}
	
});