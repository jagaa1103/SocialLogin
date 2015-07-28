app.controller('DashCtrl', function($scope) {})

app.controller('ChatsCtrl', function($scope, Chats) {
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

app.controller('ChatDetailCtrl', function($scope, $stateParams, Chats) {
  $scope.chat = Chats.get($stateParams.chatId);
})

app.controller('AccountCtrl', function($scope) {
  $scope.settings = {
    enableFriends: true
  };
  $scope.facebookLogin = function(){
    console.log('facebookLogin start...');
     FB.login(function (response) {
                if (response.authResponse) {
                    console.log('Welcome!  Fetching your information.... ');
                    FB.api('/me', function (response) {
                        /*setting the user object*/
                        // $cookieStore.put('userObj', response);

                        /*get the access token*/
                        var FBAccessToken = FB.getAuthResponse().accessToken;
                        console.log('access token', FBAccessToken);
                        // authFact.setAccessToken(FBAccessToken);
                        // $location.path('/dashboard');
                        $scope.$apply();
                    });
                } else {
                    console.log('User cancelled login or did not fully authorize.');
                }
            });
  }
});
