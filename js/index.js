
$(document).ready(()=>{

    // code for side navigation

    let allSideNavItems = $('#side-nav').children()
    let allTopNavItems = $('#top-nav .row .col-8').children()

    let index = 1
    for(navItem of allTopNavItems)
    {
        let id = getScrollToIdByIndex(index++)
        $(navItem).click(function() {
            $('html, body').animate({
                scrollTop: $(`#${id}`).offset().top
            }, 700,'easeInOutCirc',()=>{
                if(id=='SKILLS' && !once)
                {
                    animateSoftSkillBars()
                    animateTechnicalSkillBars()
                    animateOtherSkillBars()
                    once = true
                }
            })
        })
    }
    
    toggleSideNavItem($(allSideNavItems[0]))
    for(navItem of allSideNavItems){
        setSideNavListeners(navItem)
        $(navItem).click(function(){
            toggleSideNavItem(this)
        })
    }

    function setTopNavListeners(navItem , index){
        
    }
    
    function toggleSideNavItem(navItem){
        setSideNavListeners(navItem)
        for(each of allSideNavItems)
        {
            $($(each).children()[0]).css('opacity','0')
            $($(each).children()[1]).removeClass('subtitle1').addClass('subtitle2')
        }
        $($(navItem).children()[0]).css('opacity','1')
        $($(navItem).children()[1]).addClass('subtitle1').removeClass('subtitle2')
    }

    function setSideNavListeners(navItem){
        
        let id = getScrollToId($($(navItem).children()[1]).html())
        $(navItem).click(function() {
            $('html, body').animate({
                scrollTop: $(`#${id}`).offset().top
            }, 700,'easeInOutCirc',()=>{
                if(id=='SKILLS' && !once)
                {
                    animateSoftSkillBars()
                    animateTechnicalSkillBars()
                    animateOtherSkillBars()
                    once = true
                }
            })
        })
    }

    function getScrollToId(title){
        switch(title){
            case 'Home':return 'INTRODUCTION'
            case 'Skills': return 'SKILLS'
            case 'Education': return 'EDUCATION'
            case 'Experience': return 'EXPERIENCE'
            case 'Contact': return 'CONTACT'
        }
    }

    function getScrollToIdByIndex(index){
        switch(index){
            case 1:return 'INTRODUCTION'
            case 2: return 'SKILLS'
            case 3: return 'EDUCATION'
            case 4: return 'EXPERIENCE'
            case 5:return 'CONTACT'
        }
    }

    var once = false
    setInterval(() => {
        once = false
    }, 10000);
    new Waypoint({
        element: document.getElementById('SKILLS'),
        handler: function() {
            if(!once)
                once = true
            else return
            animateSoftSkillBars()
            animateTechnicalSkillBars()
            animateOtherSkillBars()
        }
      })
    /*new Waypoint({
      element: document.getElementById('INTRODUCTION'),
      handler: function() {
        toggleSideNavItem(allSideNavItems[0])
      }
    })
    new Waypoint({
        element: document.getElementById('SKILLS'),
        handler: function() {
            toggleSideNavItem(allSideNavItems[1])
        }
    })
    new Waypoint({
      element: document.getElementById('EXPERIENCE'),
      handler: function() {
          toggleSideNavItem(allSideNavItems[2])
      }
    })
    new Waypoint({
      element: document.getElementById('EDUCATION'),
      handler: function() {
          toggleSideNavItem(allSideNavItems[3])
      }
    })*/


    // code for side navigation

    // technical skills
    function animateTechnicalSkillBars(){
        let skills = [75,50,75]
        let skillsbars = $($('#SKILLS-BARS').children()).filter(':odd')
        let i=0
        for(each of skillsbars){
            $(each).find('.bar-fill-blue')
            .animate({width:'0px'},0)
            .animate({
                width:`${skills[i++]}%`,
            },2500,'easeOutBounce')
        }
    }

    // soft skills
    function animateSoftSkillBars(){
        let skills = [100,50,75]
        let skillsbars = $($('#SOFT-SKILLS-BARS').children()).filter(':odd')
        let i=0
        for(each of skillsbars){
            $(each).find('.bar-fill-green')
            .animate({width:'0px'},0)
            .animate({
                width:`${skills[i++]}%`,
            },2500,'easeOutBounce')
        }
    }

    // other skills
    function animateOtherSkillBars(){
        let skills = [100,75,50,50,50]
        let skillsbars = $($('#OTHER-SKILLS-BARS').children()).filter(':odd')
        let i=0
        for(each of skillsbars){
            $(each).find('.bar-fill-pink')
            .animate({width:'0px'},0)
            .animate({
                width:`${skills[i++]}%`,
            },2500,'easeOutBounce')
        }
    }
})
