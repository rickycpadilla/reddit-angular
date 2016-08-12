var app = angular.module("redApp", ["angularMoment"]);

app.controller("redCont", ['$scope', function($scope){
  $scope.reddit = {};
  $scope.reddit.formShow = false;
  $scope.reddit.toggle = function(){
    $scope.reddit.formShow = !$scope.reddit.formShow
  };
  $scope.reddit.commentToggle = function(post){
    post.showComments = !post.showComments
  };
  $scope.reddit.addToggle = function(post){
    post.showAdd = !post.showAdd
  };
  $scope.reddit.posts = [
    {
      title: "Why Captain America Sucks",
      author: "Tony Stark",
      votes: 0,
      time: "Thu Aug 11 2016 16:58:41 GMT-0600 (MDT)",
      comments: [
        {
          author: "Scott",
          text: "Will this work?"
        },
        {
          author: "Ricky",
          text: "Let's see..."
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
      votes: 0,
      time: "Wed Aug 10 2016 10:58:41 GMT-0600 (MDT)",
      comments: [
        {
          author: "Bud",
          text: "YAY!!!!!"
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
      votes: 0,
      time: "Wed Aug 11 2016 15:28:41 GMT-0600 (MDT)",
      comments: [
      ],
      showComments: false,
      showAdd: false,
      image: "http://www.etonline.com/news/2016/03/24222382/1280_captain_america_civil_war_spiderman_tom_holland.jpg",
      description: "Spider-Man stands out. Holland manages to steal the show in what amounts to an extended cameo by capturing the bright-eyed, youthful wit that has resonated with fans since the character’s creation. But Holland’s success in the role is underscored by how little the movie tries to justify his presence. Spider-Man might be one of the best parts of Civil War, so it’s hilarious that he has next to no business being in it."
    }
  ];
}]);
