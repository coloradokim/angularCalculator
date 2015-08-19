app.controller("AddController", function($scope, $routeParams) {
  $scope.xVar=$routeParams.x;
  $scope.yVar=$routeParams.y;
  $scope.sum=Number($routeParams.x) + Number($routeParams.y)
	});

  app.controller("SubtractController", function($scope, $routeParams) {
    $scope.xVar=$routeParams.x;
    $scope.yVar=$routeParams.y;
    $scope.difference=Number($routeParams.x) - Number($routeParams.y)
  	});
