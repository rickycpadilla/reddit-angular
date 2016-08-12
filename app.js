var app = angular.module("redApp", ["angularMoment"]);

// VOTE
// X click up, votes up, green positive
// X click down, votes down, green positive

// COMMENTS
// add comment to array
// at one comment, say "comment"

// SUBMIT POST
// X add to post array

// SORT
// X sort by rating on click
// X sort by date on click
// X sort by title on click

// SEARCH
// show search results

app.controller("redCont", ['$scope', function($scope, $filter){
  $scope.reddit = {};
  $scope.Form = {};
  $scope.submitIt = function(){
    $scope.Form.votes = 0;
    $scope.Form.time = Date.now();
    $scope.Form.comments = [];
    $scope.Form.showComments = false;
    $scope.Form.showAdd = false;
    $scope.reddit.posts.push(this.Form);
    $scope.reddit.toggle();
    $scope.Form = {};
  };
  $scope.reddit.sorter = '-time';
  $scope.reddit.changeSort = function(thing){
    $scope.reddit.sorter = thing;
    console.log($scope.reddit.sorter);
  };
  $scope.reddit.formShow = false;
  $scope.reddit.toggle = function(){
    $scope.reddit.formShow = !$scope.reddit.formShow;
  };
  $scope.reddit.commentToggle = function(post){
    post.showComments = !post.showComments
  };
  $scope.reddit.addToggle = function(post){
    post.showAdd = !post.showAdd
  };
  $scope.reddit.upVote = function(post){
    post.votes += 1
  };
  $scope.reddit.downVote = function(post){
    post.votes -= 1
  };
  $scope.reddit.posts = [
    {
      title: "Why Captain America Sucks",
      author: "Tony Stark",
      votes: 2,
      time: 1470474521032,
      comments: [
        {
          author: "Steve Rogers",
          text: "C'mon, man!"
        },
        {
          author: "Tony Stark",
          text: "Sorry, it's the truth!"
        }
      ],
      showComments: false,
      showAdd: false,
      image: "http://static.srcdn.com/wp-content/uploads/Captain-America-Civil-War-2-Trailer-I-Could-Do-This-All-Day.jpg",
      description: "i don't care if he's american, he's the worst 'superhero' of all time. he's a midget who has a strong moral code, works hard, hustles on every drill, someone you want your daughter to marry (found on every football team) nothing special about him - his claim to fame is being genetically enhanced and modified by the army - literally could have happened to anyone < 5 ft his weapon is a magic shield?! lol"
    },
    {
      title: "War Machine vs Falcon?",
      author: "Lt. James Rhodes",
      votes: 4,
      time: 1470834521032,
      comments: [
        {
          author: "Natasha Romanov",
          text: "Yeah, I have to agree with you here."
        }
      ],
      showComments: false,
      showAdd: false,
      image: "http://static.srcdn.com/slir/w700-h350-q90-c700:350/wp-content/uploads/Marvel-Cinematic-Universe-Falcon-War-Machine.jpg",
      description: "War Machine wins this every time. These pair are leaving the suits and weaponry at the bar, and fighting H2H since Rhodey is iron man's partner and Sam Wilson is Captain America's. So sam and Rhody test who is the toughest sidekick, battle takes on an evacuated brooklyn bridge at night, both have 2 days prep and captain america (steve rogers) and Iron Man (Tony Stark) as there coaches."
    },
    {
      title: "Best Spiderman Ever!",
      author: "Peter Parker",
      votes: -3,
      time: 1470954521032,
      comments: [
        {
          author: "Scott Lang",
          text: "Really, though - Antman is the coolest!"
        },
        {
          author: "Toby McGuire",
          text: "No, I was the best!"
        },
        {
          author: "Dr Osborne",
          text: "All Spidermen are dumb."
        },
      ],
      showComments: false,
      showAdd: false,
      image: "http://www.etonline.com/news/2016/03/24222382/1280_captain_america_civil_war_spiderman_tom_holland.jpg",
      description: "Spider-Man stands out. Holland manages to steal the show in what amounts to an extended cameo by capturing the bright-eyed, youthful wit that has resonated with fans since the character’s creation. But Holland’s success in the role is underscored by how little the movie tries to justify his presence. Spider-Man might be one of the best parts of Civil War, so it’s hilarious that he has next to no business being in it."
    }
  ];
}]);
