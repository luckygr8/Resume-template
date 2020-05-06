
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

})
