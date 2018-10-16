// window.onload = function() {
    window.fbAsyncInit = function() {
        console.log('fb init');
        FB.init({
          appId            : '319825301906052',
          autoLogAppEvents : true,
          xfbml            : true,
          version          : 'v3.1'
        });
        // FB.ui({
        //     method: 'share',
        //     href: 'https://developers.facebook.com/docs/'
        //   }, function(response){});

        var uri = encodeURI('http://example.com');
        FB.getLoginStatus(function(response) {
            if (response.status === 'connected') {
                window.location.href=uri;
            } else {
                window.location = encodeURI("https://www.facebook.com/dialog/oauth?client_id=YOUR_APP_ID&redirect_uri="+uri+"&response_type=token");
            }
        });
      };
    
      (function(d, s, id){
         var js, fjs = d.getElementsByTagName(s)[0];
         if (d.getElementById(id)) {return;}
         js = d.createElement(s); js.id = id;
         js.src = "https://connect.facebook.net/en_US/sdk.js";
         fjs.parentNode.insertBefore(js, fjs);
       }(document, 'script', 'facebook-jssdk'));
// }