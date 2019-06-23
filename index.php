<!doctype html>
<html>
<head>
<meta charset="UTF-8"> 
<title>SoftAOX | Insert, Update, Delete Data in MySQL using AngularJS with PHP</title>  
<link href="css/bootstrap.min.css" rel="stylesheet">
<script src="js/angular.min.js"></script>  
<script src="js/app.js" type="text/javascript"></script>
</head>  
<body>  
<div class="col-md-12 col-lg-12">

	<h3 align="center">Insert, Update, Delete Data in MySQL using AngularJS with PHP</h3>
	<div ng-app="sa_app" ng-controller="controller" ng-init="show_data()">
		<div class="col-md-6 col-lg-6">
		   	<label>Name</label>
            <input type="text" name="name" ng-model="name" class="form-control">
            <br/>
            <label>Email</label>
            <input type="text" name="email" ng-model="email" class="form-control">
            <br/>
            <label>Age</label>
            <input type="text" name="age" ng-model="age" class="form-control">
            <br/>
            <input type="hidden" ng-model="id">
            <input type="submit" name="insert" class="btn btn-primary" ng-click="insert()" value="{{btnName}}">
		</div>
        <div class="col-md-6 col-lg-6">
            <table class="table table-bordered">
                <tr>
                    <th>S.No</th>
                    <th>Name</th>
                    <th>Email</th>
                    <th>Age</th>
                    <th>Edit</th>
                    <th>Delete</th>
                </tr>
                <tr ng-repeat="x in names">
                    <td>{{x.id}}</td>
                    <td>{{x.name}}</td>
                    <td>{{x.email}}</td>
                    <td>{{x.age}}</td>
                    <td>
                        <button class="btn btn-success btn-xs" ng-click="update_data(x.id, x.name, x.email, x.age)">
                            <span class="glyphicon glyphicon-edit"></span> Edit
                        </button>
                    </td>
                    <td>
                        <button class="btn btn-danger btn-xs" ng-click="delete_data(x.id )">
                            <span class="glyphicon glyphicon-trash"></span> Delete
                        </button>
                    </td>
                </tr>
            </table>
        </div>
    </div>
</div>
  
</body>  
</html>  
 