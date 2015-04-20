(function() {
    
    var AlbumCtrl = function ($scope) {
        $scope.currentImage = {};
        $scope.images =
        [
            {image: 'images/allevents/2014/Helios2014/1.jpg'},
            {image: 'images/allevents/2014/Helios2014/2.jpg'},
            {image: 'images/allevents/2014/Helios2014/3.jpg'},
            {image: 'images/allevents/2014/Helios2014/4.jpg'}
        ];
        $scope.currentImage = ($scope.images[0]);
        $scope.setCurrentImage = function(image){
            $scope.currentImage = image;
        };
        $scope.events2015 = [
        {
            events:[
                {name:"WIE",
                images:{}
                },
                {name:"IEEE Vanier",
                images:{
                                {image: 'images/allevents/2015/WIE/1.jpg'},
                                {image: 'images/allevents/2015/WIE/2.jpg'},
                                {image: 'images/allevents/2015/WIE/3.jpg'},
                                {image: 'images/allevents/2015/WIE/4.jpg'}
                }
                },
            ]
        }];
        $scope.events2014 = [
        {
            year: '2014',
            events:[
                {name:"Helios Tour and Tutorial",
                images:{}
                },
                {name:"IEEEXTREME 8.0",
                images:{}
                },
                {name:"WIE",
                images:{}
                },
                {name:"MCN Info Session",
                images:{}
                },
                {name:"MCN Opening",
                images:{}
                },
            ]
        }];
        $scope.events2013 = [{
            year: '2013',
            events:[
                {name:"Helios Tour and Tutorial",
                images:{}
                },
                {name:"IEEEXTREME 8.0",
                images:{}
                },
                {name:"WIE",
                images:{}
                },
                {name:"MCN Info Session",
                images:{}
                },
                {name:"MCN Opening",
                images:{}
                },
            ]
        }];
        $scope.events2012 =[{
            year: '2012',
            events:[
                {name:"Helios Tour and Tutorial",
                images:{}
                },
                {name:"IEEEXTREME 8.0",
                images:{}
                },
                {name:"WIE",
                images:{}
                },
                {name:"MCN Info Session",
                images:{}
                },
                {name:"MCN Opening",
                images:{}
                },
            ]
        }];                            
        };

    
    AlbumCtrl.$inject = ['$scope'];

    angular.module('aliApp')
      .controller('AlbumCtrl', AlbumCtrl);
    
}());




