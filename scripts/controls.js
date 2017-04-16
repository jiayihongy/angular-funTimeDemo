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
.controller('TodayCtrl', ['$scope', function($scope){
        $scope.dd = '今天多少卡号'
}])
.controller('OlderCtrl', ['$scope', function($scope){
        $scope.dd = '今天多少卡号'
}])
.controller('AuthorCtrl', ['$scope', function($scope){
        $scope.dd = '今天多少卡号'
}])
.controller('CategoryCtrl', ['$scope', function($scope){
        $scope.dd = '今天多少卡号'
}])
.controller('FavouriteCtrl', ['$scope', function($scope){
        $scope.dd = '今天多少卡号'
}])
.controller('SettingsCtrl', ['$scope', function($scope){
        $scope.dd = '今天多少卡号'
}])