/**
 * Created by shariati on 10/9/2017.
 */
app.controller('MainController', ['$scope', function ($scope) {
    $scope.title = "top sellers in books";
    $scope.hassan= "hassan sharaiti";
    $scope.products=[
        {
            cover: 'img/1.jpg',
            name:'sherlook1',
            likes: 1,
            pubdate: new Date('2015', '07' , '01'),
            price:'195',
            dislike: 0

        },
        {
            cover: 'img/2.jpg',
            name:'sherlook2',
            price:'195 ',
            pubdate: new Date('2015', '07' , '01'),
            likes: 1,
            dislike: 0
        },
        {
            cover: 'img/2.jpg',
            name:'sherlook3',
            price:'195 ',
            pubdate: new Date('2015', '07' , '01'),
            likes: 1,
            dislike: 0
        },
        {
            cover: 'img/2.jpg',
            name:'sherlook4',
            price:'195 ',
            pubdate: new Date('2015', '07' , '01'),
            likes: 1 ,
            dislike: 0
        }
    ];
    $scope.plusOne= function (index) {
        $scope.products[index].likes +=1;
    };
    $scope.miseOne= function (index) {
        $scope.products[index].dislikes +=1;
    };
}]);