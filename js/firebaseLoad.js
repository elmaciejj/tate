      var myApp = angular.module("myApp", ["firebase"]);
      myApp.controller("MyController", ["$scope", "$firebaseArray",
        function($scope, $firebaseArray) {
          var ref = new Firebase("https://tate.firebaseio.com/tatee");
          $scope.messages = $firebaseArray(ref);
          $scope.addMessage = function(e) {
            if (e.keyCode === 13 && $scope.msg) {
              var name = $scope.name || "anonymous";
              $scope.messages.$add({
                from: name,
                body: $scope.msg
              });
            }
          }
        }
      ]);