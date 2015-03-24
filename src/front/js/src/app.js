angular.module('website', ['ui.router', 'ngAnimate', 'ngMaterial', 'chart.js'])
    .controller('appController', ['$rootScope', appController])
    .controller('stackOverflowItemsController', ['items', '$sce','$mdSidenav','$mdMedia', stackOverflowItemsController])
    .controller('stackOverflowQuestionsController', ['questions', 'profile', '$sce', stackOverflowQuestionsController])
    .controller('stackOverflowProfileController', ['profile','activity','items','$state','questions', stackOverflowProfileController])
    .controller('stackOverflowViewAnswerController', ['answer', '$sce', stackOverflowViewAnswerController])
    .controller('stackOverflowViewQuestionController', ['question', '$sce','$rootScope', stackOverflowViewQuestionController])
    .controller('githubController', ['repos', githubController])
    .controller('linkedinController', ['profile', linkedinController])
    .factory('stackOverflowDataService', ['$http','$q', stackOverflowDataService])
    .factory('githubDataService', ['$http',githubDataService])
    .factory('linkedInDataService', ['$http',linkedInDataService])
	.config(['$stateProvider', '$urlRouterProvider', '$locationProvider', router])


/*function mainCtrl($scope, ngProgress, $rootScope) {

    $rootScope.$on('$stateChangeStart', function() {
        ngProgress.start();
    })
    $rootScope.$on('$stateChangeSuccess', function() {
        ngProgress.complete();
    })
}*/