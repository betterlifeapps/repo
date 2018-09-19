angular.module('app.controllers', [])
  
.controller('mARVELCtrl', ['$scope', '$stateParams', 'Marvels', // The following is the constructor function for this page's controller. See https://docs.angularjs.org/guide/controller
// You can include any angular dependencies as parameters for this function
// TIP: Access Route Parameters for your page via $stateParams.parameterName
function ($scope, $stateParams, Marvels) {


// SEARCH FUNCTION  
  $scope.narrowed_marvels = Marvels.list;
  $scope.data = {
      search: ''
  };
  
  $scope.search = function(){
      
      var s = $scope.data.search.toLowerCase();
      
      if (s === ''){
          $scope.narrowed_marvels = Marvels.list;
          return;
      }
      
      $scope.narrowed_marvels = Marvels.list.filter(function(marvel){
        if (marvel.name.toLowerCase().indexOf(s) > -1 || marvel.key.toLowerCase().indexOf(s) > -1){
            return true;
        } 
        return false;
      });
  };

// MARVEL COUNTDOWN CODE
        var myVar;
        var countDownDate = [
            new Date("May 8, 2008 19:00:00").getTime(),   //Movie name:Iron Man                            Movie ID:mv1
            new Date("June 13, 2008 19:00:00").getTime(), //Movie name:The Incredible Hulk                 Movie ID:mv2
            new Date("May 7, 2010 19:00:00").getTime(),   //Movie name:Iron Man 2                          Movie ID:mv3
            new Date("May 6, 2011 19:00:00").getTime(),   //Movie name:Thor                                Movie ID:mv4
            new Date("July 22, 2011 19:00:00").getTime(), //Movie name:Captain America: The First Avenger  Movie ID:mv5
            new Date("May 4, 2012 19:00:00").getTime(),   //Movie name:The Avengers                        Movie ID:mv6
            new Date("May 3, 2013 19:00:00").getTime(),   //Movie name:Iron Man 3                          Movie ID:mv7
            new Date("Nov 8, 2013 19:00:00").getTime(),   //Movie name:Thor: The Dark World                Movie ID:mv8
            new Date("Apr 4, 2014 19:00:00").getTime(),   //Movie name:Captain America: The Winter Soldier Movie ID:mv9
            new Date("Aug 1, 2014 19:00:00").getTime(),   //Movie name:Guardians of the Galaxy             Movie ID:mv10
            new Date("May 1, 2015 19:00:00").getTime(),   //Movie name:Avengers: Age of Ultron             Movie ID:mv11
            new Date("July 17, 2015 19:00:00").getTime(), //Movie name:Ant-Man                             Movie ID:mv12
            new Date("May 6, 2016 19:00:00").getTime(),   //Movie name:Captain America: Civil War          Movie ID:mv13
            new Date("Nov 4, 2016 19:00:00").getTime(),   //Movie name:Doctor Strange                      Movie ID:mv14
            new Date("May 5, 2017 19:00:00").getTime(),   //Movie name:Guardians of the Galaxy Vol. 2      Movie ID:mv15
            new Date("July 7, 2017 19:00:00").getTime(),  //Movie name:Spider-Man: Homecoming              Movie ID:mv16
            new Date("Nov 3, 2017 19:00:00").getTime(),   //Movie name:Thor: Ragnarok                      Movie ID:mv17
            new Date("Feb 16, 2018 19:00:00").getTime(),  //Movie name:Black Panther                       Movie ID:mv18
            new Date("Apr 27, 2018 19:00:00").getTime(),  //Movie name:Avengers: Infinity Wars             Movie ID:mv19
            new Date("May 18,2018 19:00:00").getTime(),   //Movie name:Deadpool 2                          Movie ID:mv20
            new Date("July 6, 2018 19:00:00").getTime(),  //Movie name:Ant-Man & the Wasp                  Movie ID:mv21
            new Date("Oct 5, 2018 19:00:00").getTime(),   //Movie name:Venom                               Movie ID:mv22
            new Date("Dec 21, 2018 19:00:00").getTime(),  //Movie name:Spider-Man: Into the Spider-Verse   Movie ID:mv23
            new Date("Feb 14, 2019 19:00:00").getTime(),  //Movie name:X-Men: Dark Phoenix                 Movie ID:mv24
            new Date("Mar 8, 2019 19:00:00").getTime(),   //Movie name:Captain Marvel                      Movie ID:mv25
            new Date("Apr 27,2019 19:00:00").getTime(),   //Movie name:Avengers 4                          Movie ID:mv26
            new Date("June 7, 2019 19:00:00").getTime(),  //Movie name:Gambit                              Movie ID:mv27
            new Date("July 5, 2019 19:00:00").getTime(),  //Movie name:Spiderman - Far from home           Movie ID:mv28
            new Date("May 1,2020 19:00:00").getTime(),    //Movie name:The New Mutants                     Movie ID:mv29
            new Date("May 1,2020 19:00:00").getTime(),    //Movie name:Guardians of the galaxy Vol.3       Movie ID:mv30
            new Date("July 31, 2020 19:00:00").getTime(), //Movie name:Black Panther 2                     Movie ID:mv31
            new Date("Nov 6,2020 19:00:00").getTime(),    //Movie name:Eternals                            Movie ID:mv32
            new Date("May 7, 2021 19:00:00").getTime(),   //Movie name:Captain MarvelL 2                   Movie ID:mv33
            new Date("July 31, 2021 19:00:00").getTime(), //Movie name:Black Widow                         Movie ID:mv34
            new Date("Feb 18, 2022 19:00:00").getTime(),  //Movie name:Ms. Marvel                          Movie ID:mv35
            
            ];

        myVar = setInterval(alertFunc, 1000);

        function alertFunc() {
            var now = new Date().getTime();

            for (var i = 0; i < countDownDate.length; i++) {
                console.log(i);
                var distance = countDownDate[i] - now;
                var days = Math.floor(distance / (1000 * 60 * 60 * 24));
                var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000*  60*  60));
                var minutes = Math.floor((distance % (1000 *  60 * 60)) / (1000 * 60));
                var seconds = Math.floor((distance % (1000 * 60)) / 1000);
                var id = "mv" + (i + 1);
                document.getElementById(id).innerHTML = days + "d " + hours + "h " + minutes + "m " + seconds + "s ";
                if (distance < 0) {
                    document.getElementById(id).innerHTML = "RELEASED";
                } else if (distance > 1000000000000) {
                    document.getElementById(id).innerHTML = "TO BE ANNOUNCED";
                } else{
                    document.getElementById(id).innerHTML = days + "d " + hours + "h " + minutes + "m " + seconds + "s ";
                }
            }
        }
//END
}])
   
.controller('mARVELMOVIECtrl', ['$scope', '$stateParams', 'Marvels', // The following is the constructor function for this page's controller. See https://docs.angularjs.org/guide/controller
// You can include any angular dependencies as parameters for this function
// TIP: Access Route Parameters for your page via $stateParams.parameterName
function ($scope, $stateParams, Marvels) {

    $scope.marvel = Marvels.keys[$stateParams.marvelkey];
    
} ])
   
.controller('dCMOVIECtrl', ['$scope', '$stateParams', 'Dcs', // The following is the constructor function for this page's controller. See https://docs.angularjs.org/guide/controller
// You can include any angular dependencies as parameters for this function
// TIP: Access Route Parameters for your page via $stateParams.parameterName
function ($scope, $stateParams, Dcs) {

    $scope.dc = Dcs.keys[$stateParams.dckey];
    
} ])
   
.controller('dCCtrl', ['$scope', '$stateParams', 'Dcs', // The following is the constructor function for this page's controller. See https://docs.angularjs.org/guide/controller
// You can include any angular dependencies as parameters for this function
// TIP: Access Route Parameters for your page via $stateParams.parameterName
function ($scope, $stateParams, Dcs) {
  
  $scope.narrowed_dcs = Dcs.list;
  $scope.data = {
      search: ''
  };
  
  $scope.search = function(){
      
      var s = $scope.data.search.toLowerCase();
      
      if (s === ''){
          $scope.narrowed_dcs = Dcs.list;
          return;
      }
      
      $scope.narrowed_dcs = Dcs.list.filter(function(dc){
        if (dc.name.toLowerCase().indexOf(s) > -1 || dc.key.toLowerCase().indexOf(s) > -1){
            return true;
        } 
        return false;
      });
  };

// DC COUNTDOWN CODE
        var myVar;
        var countDownDate = [
            new Date("June 15, 2005 19:00:00").getTime(),  //Movie name: Batman Begins                       Movie ID:dc1
            new Date("June 28, 2006 19:00:00").getTime(),  //Movie name: Superman Returns                    Movie ID:dc2
            new Date("July 18, 2008 19:00:00").getTime(),  //Movie name: The Dark Knight                     Movie ID:dc3
            new Date("June 17, 2011 19:00:00").getTime(),  //Movie name: Green Lantern                       Movie ID:dc4
            new Date("July 20, 2012 19:00:00").getTime(),  //Movie name: The Dark Knight Rises               Movie ID:dc5
            new Date("June 14, 2013 19:00:00").getTime(),  //Movie name: Man of Steel                        Movie ID:dc6
            new Date("Mar 25, 2016 19:00:00").getTime(),   //Movie name: Batman v Superman: Dawn of Justice  Movie ID:dc7
            new Date("Aug 5, 2016 19:00:00").getTime(),    //Movie name: Suicide Squad                       Movie ID:dc8
            new Date("June 2, 2017 19:00:00").getTime(),   //Movie name: Wonder Woman                        Movie ID:dc9
            new Date("Nov 17, 2017 19:00:00").getTime(),   //Movie name: Justice League                      Movie ID:dc10
            new Date("Dec 21, 2018 19:00:00").getTime(),   //Movie name: Aquaman                             Movie ID:dc11
            new Date("Apr 5, 2019 19:00:00").getTime(),    //Movie name: Shazam!                             Movie ID:dc12
            new Date("Nov 1, 2019 19:00:00").getTime(),    //Movie name: Wonder Woman 1984                   Movie ID:dc13
            new Date("Apr 3, 2020 19:00:00").getTime(),    //Movie name: Cyborg                              Movie ID:dc14
            new Date("Nov 30, 2090 19:00:00").getTime(),   //Movie name: Green Lantern Corps                 Movie ID:dc15
            new Date("Nov 30, 2090 19:00:00").getTime(),   //Movie name: The Flash                           Movie ID:dc16
            new Date("Nov 30, 2090 19:00:00").getTime(),   //Movie name: Birds of Prey                       Movie ID:dc17
            new Date("Nov 30, 2090 19:00:00").getTime(),   //Movie name: The Batman                          Movie ID:dc18
            new Date("Nov 30, 2090 19:00:00").getTime(),   //Movie name: Black Adam                          Movie ID:dc19
            new Date("Nov 30, 2090 19:00:00").getTime(),   //Movie name: Joker Origin Story                  Movie ID:dc20
            new Date("Nov 30, 2090 19:00:00").getTime(),   //Movie name: Suicide Squad 2                     Movie ID:dc21
            new Date("Nov 30, 2090 19:00:00").getTime(),   //Movie name: Batgirl                             Movie ID:dc22
            new Date("Nov 30, 2090 19:00:00").getTime(),   //Movie name: New Gods                            Movie ID:dc23
            new Date("Nov 30, 2090 19:00:00").getTime(),   //Movie name:  Blackhawk                          Movie ID:dc24
            new Date("Nov 30, 2090 19:00:00").getTime(),   //Movie name: Untitled Joker/Harley Quinn Movie   Movie ID:dc25
            new Date("Nov 30, 2090 19:00:00").getTime(),   //Movie name: Supergirl                           Movie ID:dc26
            new Date("Nov 30, 2090 19:00:00").getTime(),   //Movie name: Nightwing                           Movie ID:dc27
            new Date("Nov 30, 2090 19:00:00").getTime(),   //Movie name: Justice League Dark                 Movie ID:dc28
            new Date("Nov 30, 2090 19:00:00").getTime(),   //Movie name: Gotham City Sirens                  Movie ID:dc29
            new Date("Nov 30, 2090 19:00:00").getTime(),   //Movie name: Untitled Man of Steel Sequel        Movie ID:dc30
            new Date("Nov 30, 2090 19:00:00").getTime(),   //Movie name: Untitled Deathstroke Movie          Movie ID:dc31

            ];

        myVar = setInterval(alertFunc, 1000);

        function alertFunc() {
            var now = new Date().getTime();

            for (var i = 0; i < countDownDate.length; i++) {
                console.log(i);
                var distance = countDownDate[i] - now;
                var days = Math.floor(distance / (1000 * 60 * 60 * 24));
                var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000*  60*  60));
                var minutes = Math.floor((distance % (1000 *  60 * 60)) / (1000 * 60));
                var seconds = Math.floor((distance % (1000 * 60)) / 1000);
                var id = "dc" + (i + 1);
                document.getElementById(id).innerHTML = days + "d " + hours + "h " + minutes + "m " + seconds + "s ";
                if (distance < 0) {
                    document.getElementById(id).innerHTML = "RELEASED";
                } else if (distance > 1000000000000) {
                    document.getElementById(id).innerHTML = "TO BE ANNOUNCED";
                } else{
                    document.getElementById(id).innerHTML = days + "d " + hours + "h " + minutes + "m " + seconds + "s ";
                }
            }

        }
//END
}])
   
.controller('cHATROOMCtrl', ['$scope', '$stateParams', // The following is the constructor function for this page's controller. See https://docs.angularjs.org/guide/controller
// You can include any angular dependencies as parameters for this function
// TIP: Access Route Parameters for your page via $stateParams.parameterName
function ($scope, $stateParams) {


}])
    