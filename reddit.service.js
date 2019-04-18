function RedditService($http)  {
    const service = this;

    /**
    *Call https://www.reddit.com/aww/.json
    *and set $ctrl.feed to be the results
    */
    service.fetchAwwSubreddit = () => {
        // http stuff goes here
        return $http.get(`https://www.reddit.com/r/aww/.json`);
        // return http({
        //     method: "GET",
        //     url: "https://www.reddit.com/r/aww/json"
        // })
        //api call, return call to fetchAwwSubreddit controller
}
    
  }
    
    angular
      .module("RedditApp")
      .service("RedditService", ['$http', RedditService]);