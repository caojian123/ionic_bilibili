angular.module('starter.directive', [])
//返回上一级
.directive('goBack',function(){
   return {
    restrict    : 'A', 
    link: function (scope, element, attrs,controller) {
     	element.bind('touchend',function(e){	
           window.history.go(-1);
     	});
     } 
  }
});