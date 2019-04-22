function RedditFeed(RedditService, $q) {
    const $ctrl = this;
    //list of reddit posts to display
    $ctrl.feed = [];

   /**
    *Call https://www.reddit.com/aww/.json
    *and set $ctrl.feed to be the results
    */
    $ctrl.fetchAwwSubreddit = () => {
        return $q(function(resolve, reject) {
        //call service, then set our data                                                           
        RedditService.fetchAwwSubreddit()
        .then((response) => {
            //do stuff with data
            console.log(response);
            // feed = [data.data.data.children];
            let children = response.data.data.children;
            console.log(children[0].data.title);

            children.forEach(function(child, index) {

            let childObj = {
                title: child.data.title,
                img: child.data.thumbnail,
                permalink: child.data.permalink
            }
            if (index < 10) {
                    $ctrl.feed.push(childObj);
            }



        });
            

        }).then(() => {
            console.log(`Success: ${resolve}`);
        })

    })
 
    }
    $ctrl.fetchAwwSubreddit();

  }
  
  angular.module('RedditApp').component('redditFeed', {
    template: `
    
    <div id="container" ng-repeat="post in $ctrl.feed">
        <h2 id="title">{{post.title}}</h2>
            <img id="image" src="{{post.img}}"/>
            <a id="reddit-link" href="https://reddit.com{{post.permalink}}" target="_blank"> See more here!</a>
    </div>
    `,
    controller: RedditFeed

});