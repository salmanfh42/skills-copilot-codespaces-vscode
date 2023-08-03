function skillsMember(){
    return {
        restrict : 'E',
        templateUr : 'modulesskills/views/member.html',
        controller: 'SkillsMemberController',
        controllerAs: 'vm',
        bindToController: true,
        scope: {
            member: 'm'
        }
    };
}