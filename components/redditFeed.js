function RedditFeed(RedditService) {
    const $ctrl = this;
    //list of reddit posts to display
    $ctrl.feed = [];

   /**
    *Call https://www.reddit.com/aww/.json
    *and set $ctrl.feed to be the results
    */
    $ctrl.fetchAwwSubreddit = () => {
       
        //call service, then set our data
        RedditService.fetchAwwSubreddit()
        .then((data) => {
            //do stuff with data
            console.log(data);
        }).catch((e) => {
            console.log(`error: ${e}`)
        })


        
    }

    $ctrl.fetchAwwSubreddit();
  }
  
  angular.module('RedditApp').component('redditFeed', {
    template: `
    <div ng-repeat="post in $ctrl.feed">
        <h2>{{post.title}}</h2>
    </div>
    `,
    controller: RedditFeed

});