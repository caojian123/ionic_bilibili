angular.module('starter.controllers', [])
.controller('searchContr',function($scope, $ionicHistory){
   $scope.$on('$ionicView.enter', function(e) {
      var search = document.querySelector('#barlight');
      search.style.display = 'none';
      document.querySelector('#btnclose').addEventListener('touchend',function(e){
          $ionicHistory.goBack();
      },false);
   });
   $scope.$on('$ionicView.leave', function(e) {
      var search = document.getElementById('barlight');
      search.style.display = 'block';
   });
})
.controller('DashCtrl', function($scope,$ionicLoading,$timeout,HotItem) {
    $scope.hotlist = HotItem.hots;
    $scope.livelist = HotItem.living;

      $ionicLoading.show({
        content: 'Loading',
        animation: 'fade-in'
      });

    $timeout(function () {
      $ionicLoading.hide();
    }, 1000);
})

.controller('ChatsCtrl', function($scope, Chats) {
  // With the new view caching in Ionic, Controllers are only called
  // when they are recreated or on app start, instead of every page change.
  // To listen for when this page is active (for example, to refresh data),
  // listen for the $ionicView.enter event:
  //
  //$scope.$on('$ionicView.enter', function(e) {
  //});

  $scope.chats = Chats.all();
  $scope.remove = function(chat) {
    Chats.remove(chat);
  };
})

.controller('ChatDetailCtrl', function($scope, $stateParams, $ionicHistory) {
 // $scope.chat = Chats.get($stateParams.chatId);
 $scope.chat = {
  "name" : "detail",
  "face" : "img/ben.png",
  "lastText": "detail Page"
 }
 $scope.goback = function(){
    $ionicHistory.goBack();
 }
 console.log('当前Id为:'+$stateParams.id);
})

.controller('AccountCtrl', function($scope) {
  $scope.settings = {
    enableFriends: true
  };
});
