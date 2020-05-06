
$(document).ready(()=>{

    // code for side navigation

    let allSideNavItems = $('#side-nav').children()
    toggleSideNavItem($(allSideNavItems[0]))
    for(each of allSideNavItems){
        $(each).click(function(){
            toggleSideNavItem(this)
        })
    }
    
    function toggleSideNavItem(navItem){
        for(each of allSideNavItems)
        {
            $($(each).children()[0]).css('opacity','0')
            $($(each).children()[1]).removeClass('subtitle1').addClass('subtitle2')
        }
        $($(navItem).children()[0]).css('opacity','1')
        $($(navItem).children()[1]).addClass('subtitle1').removeClass('subtitle2')
    }

    // code for side navigation

    // technical skills
    function animateTechnicalSkillBars(){
        let skills = [75,50,75]
        let skillsbars = $($('#SKILLS-BARS').children()).filter(':odd')
        let i=0
        for(each of skillsbars){
            $(each).find('.bar-fill-blue').animate({
                width:`${skills[i++]}%`,
            },1500)
        }
    }

    // soft skills
    function animateSoftSkillBars(){
        let skills = [100,50,75]
        let skillsbars = $($('#SOFT-SKILLS-BARS').children()).filter(':odd')
        let i=0
        for(each of skillsbars){
            $(each).find('.bar-fill-green').animate({
                width:`${skills[i++]}%`,
            },1500)
        }
    }

    // other skills
    function animateOtherSkillBars(){
        let skills = [100,75,50,50,50]
        let skillsbars = $($('#OTHER-SKILLS-BARS').children()).filter(':odd')
        let i=0
        for(each of skillsbars){
            $(each).find('.bar-fill-pink').animate({
                width:`${skills[i++]}%`,
            },1500)
        }
    }

    animateSoftSkillBars()
    animateTechnicalSkillBars()
    animateOtherSkillBars()
})
