angular.module('starter.services', [])

.factory('Chats', function() {
  // Might use a resource here that returns a JSON array

  // Some fake testing data
  var chats = [{
    id: 0,
    name: 'Ben Sparrow',
    lastText: 'You on your way?',
    face: 'img/ben.png'
  }, {
    id: 1,
    name: 'Max Lynx',
    lastText: 'Hey, it\'s me',
    face: 'img/max.png'
  }, {
    id: 2,
    name: 'Adam Bradleyson',
    lastText: 'I should buy a boat',
    face: 'img/adam.jpg'
  }, {
    id: 3,
    name: 'Perry Governor',
    lastText: 'Look at my mukluks!',
    face: 'img/perry.png'
  }, {
    id: 4,
    name: 'Mike Harrington',
    lastText: 'This is wicked good ice cream.',
    face: 'img/mike.png'
  }];

  return {
    all: function() {
      return chats;
    },
    remove: function(chat) {
      chats.splice(chats.indexOf(chat), 1);
    },
    get: function(chatId) {
      for (var i = 0; i < chats.length; i++) {
        if (chats[i].id === parseInt(chatId)) {
          return chats[i];
        }
      }
      return null;
    }
  };
}).factory('HotItem',function(){
   var hots = [{
      "id" : "100002",
      "image" :"img/5c51b46de384e4fc02117e885ff25021316845b7.jpg_320x200.jpg",
      'desc':"【APH/MMD】【耀诞】你从未停过的脚步"
     },
     {
      "id" : "100003",
      "image" :"img/4258dea4cc5c94527ca88efb4b2d4955c508037b.jpg_320x200.jpg",
      'desc':"【宁采臣】请不要挑逗我「原创pv付」  不用戴耳机，有史以来最正直的歌（看我的正直脸，信我）"
   },{
    "id" : "100004",
      "image" :"img/5c51b46de384e4fc02117e885ff25021316845b7.jpg_320x200.jpg",
      'desc':"【APH/MMD】【耀诞】你从未停过的脚步"
     },
     {
      "id" : "100005",
      "image" :"img/4258dea4cc5c94527ca88efb4b2d4955c508037b.jpg_320x200.jpg",
      'desc':"【宁采臣】请不要挑逗我「原创pv付」  不用戴耳机，有史以来最正直的歌（看我的正直脸，信我）"
   }];

   var living = [{
      "id" : "100006",
      "image" :"img/5c51b46de384e4fc02117e885ff25021316845b7.jpg_320x200.jpg",
      'desc':"【APH/MMD】【耀诞】你从未停过的脚步"
     },
     {
      "id" : "100007",
      "image" :"img/4258dea4cc5c94527ca88efb4b2d4955c508037b.jpg_320x200.jpg",
      'desc':"【宁采臣】请不要挑逗我「原创pv付」  不用戴耳机，有史以来最正直的歌（看我的正直脸，信我）"
   },{
    "id" : "1000012",
      "image" :"img/5c51b46de384e4fc02117e885ff25021316845b7.jpg_320x200.jpg",
      'desc':"【APH/MMD】【耀诞】你从未停过的脚步"
     },
     {
      "id" : "1000011",
      "image" :"img/4258dea4cc5c94527ca88efb4b2d4955c508037b.jpg_320x200.jpg",
      'desc':"【宁采臣】请不要挑逗我「原创pv付」  不用戴耳机，有史以来最正直的歌（看我的正直脸，信我）"
   }];

   return {
     "hots" : hots,
     "living" : living
   }
});
