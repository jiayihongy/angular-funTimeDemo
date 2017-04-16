angular.module('controls',[])
.controller('NavCtr',['$scope',function ($scope){
    $scope.lists = [
     {link:'#/today',icon:'icon-home',text:'每日一刻'},
        {link:'#/older',icon:'icon-file-empty',text:'昨日重现'},
        {link:'#/author',icon:'icon-pencil',text:'热门作者'},
        {link:'#/category',icon:'icon-menu',text:'栏目浏览'},
        {link:'#/favourite',icon:'icon-heart',text:'我的喜欢'},
        {link:'#/settings',icon:'icon-cog',text:'设置'}
    ]
}])
.controller('TodayCtrl', ['$scope','$http','$filter','$rootScope', function ($scope,$http,$filter,$rootScope){

        $rootScope.title = '今日一刻';
        $scope.today = $filter('date')(new Date(),'yyyy-MM-dd');
        $http({
            url:'./api/today.php',
            method:'get',
            params:{today:$scope.today}
        })
        .success(function (info){
           $scope.posts = info.posts;
        })

}])
.controller('OlderCtrl', ['$scope','$http','$filter','$rootScope', function ($scope,$http,$filter,$rootScope){

        $rootScope.title = '昨日重现';
        $scope.today = $filter('date')(new Date()-24*60*60*1000,'yyyy-MM-dd');
        $http({
            url:'./api/today.php',
            method:'get',
            params:{today:$scope.today}
        })
        .success(function (info){
           $scope.posts = info.posts;

        })

}])
.controller('AuthorCtrl', ['$scope','$http','$filter','$rootScope', function ($scope,$http,$filter,$rootScope){

        $rootScope.title = '热门作者';
        $http({
            url:'./api/author.php',
            method:'get'
        })
        .success(function (info){
            $scope.authors = info.authors;

        })

}])
.controller('CategoryCtrl', ['$scope', function ($scope){

}])
.controller('FavouriteCtrl', ['$scope', function ($scope){

}])
.controller('SettingsCtrl', ['$scope', function ($scope){

}])