var app=angular.module('sa_app',[]);
app.controller('controller',function ($scope,$http) {
    //method to show data
    $scope.show_data=function(){
        var display=$http({
            method:'GET',
            url:'php/display.php'
        }).then(function successCallback(response){
            //console.log(response);
            $scope.names=response.data;
        },function errorCallback(response){
            console.log(response);
        });
        return display;
    }
    //method to delete data
    $scope.delete_data= function(id) {
        if (confirm("Are you sure you want to delete?")) {
            var delete_row=$http({
                method:'POST',
                url:'php/delete.php',
                data:{'id':id}
            }).then(function successCallback(response){
                console.log(response);
                $scope.show_data();
            },function errorCallback(response){
                console.log(response);
            });

        } else {
            return false;
        }
    }
    //method to insert data
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
                url:'php/insert.php',
                data:myData
            }).then(function successCallback(response){
                console.log(response);
                $scope.show_data();
            },function errorCallback(response){
                console.log(response);
            });
            console.log(myData);
            return insert_in;
        }
    }
    //method to update data
    $scope.update_data = function(id, name, email, age) {
        //console.log(id);
        $scope.id = id;
        $scope.name = name;
        $scope.email = email;
        $scope.age = age;
        $scope.btnName = "Update";
    }
});
