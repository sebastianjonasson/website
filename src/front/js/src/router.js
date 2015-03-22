function router($stateProvider, $urlRouterProvider, $locationProvider) {
    var resolveStackoverflowItems = function(stackOverflowDataService) {
            return stackOverflowDataService.getData();
        },
        resolveStackoverflowProfile = function(stackOverflowDataService) {
            return stackOverflowDataService.getProfile();
        },
        resolveGithubRepos = function(githubDataService) {
            return githubDataService.getRepos();
        },
        resolveGithubProfile = function(githubDataService) {
            return githubDataService.getProfile();
        },
        resolveLinkedinProfile = function(linkedInDataService) {
            return linkedInDataService.getProfile();
        },
        resolveStackoverflowAnswer = function(stackOverflowDataService, $stateParams) {
            var answerId = $stateParams.answerId;
            return stackOverflowDataService.getAnswer(answerId);
        };

    //$locationProvider.html5Mode(true);
    $urlRouterProvider.otherwise('/home');
    $stateProvider
        .state('start', {
            templateUrl: 'links.html',
            url: '/'
        })
        .state('app', {
            abstract: true,
            templateUrl: 'partials/layout.html',
            controller: 'appController as appCtrl',
            resolve: {
                profile: ['linkedInDataService',resolveLinkedinProfile]
            }
        })
        .state('app.home', {
            templateUrl: 'partials/home.html',
            url: '/home'
        })
        .state('app.stackoverflow', {
            url: '/stackoverflow',
            template:'<div ui-view></div>'
            /*resolve: {
                items: ['stackOverflowDataService',resolveStackoverflowItems],
                profile: ['stackOverflowDataService', resolveStackoverflowProfile]
            }*/
        })
        .state('app.stackoverflow.answers', {
            templateUrl: 'partials/stackoverflow-items.html',
            url: '/answers',
            controller: 'stackOverflowItemsController as soCtrl',
            resolve: {
                items: ['stackOverflowDataService', resolveStackoverflowItems],
                //profile: ['stackOverflowDataService', resolveStackoverflowProfile]
            }
        })
        .state('app.stackoverflow.questions', {
            templateUrl: 'partials/stackoverflow.html',
            url: '/questions',
            controller: 'stackOverflowItemsController as soCtrl',
            resolve: {
                items: ['stackOverflowDataService',resolveStackoverflowItems],
                profile: ['stackOverflowDataService', resolveStackoverflowProfile]
            }
        })
        .state('app.stackoverflow.viewanswer', {
            templateUrl: 'partials/stackoverflow-view-answer.html',
            url: '/item/:answerId',
            controller: 'stackOverflowViewAnswerController as so',
            resolve: {
                answer: ['stackOverflowDataService', '$stateParams', resolveStackoverflowAnswer],
            }
        })
        .state('app.stackoverflow.profile', {
            templateUrl: 'partials/stackoverflow-profile.html',
            url: '/profile',
            controller: 'stackOverflowProfileController as so',
            resolve: {
                profile: ['stackOverflowDataService', resolveStackoverflowProfile]
            }
        })
        .state('app.github', {
            templateUrl: 'partials/github.html',
            url: '/github',
            controller: 'githubController as git',
            resolve: {
                repos: ['githubDataService', resolveGithubRepos],
                profile: ['githubDataService',resolveGithubProfile],
            }
        })
        .state('app.linkedin', {
            templateUrl: 'partials/linkedin.html',
            url: '/linkedin/profile',
            controller:'linkedinController as li'
        })
}