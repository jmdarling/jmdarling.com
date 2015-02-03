(function () {
    "use strict";

    var nav;
    var $navMenu;

    $(document).ready(function() {
        $navMenu = $('#nav');
        setupResponsiveNav();
        setupMenuItemClickHandlers();
    });

    /**
     * Setup the responsive-nav plugin.
     */
    function setupResponsiveNav() {
        nav = responsiveNav("#nav", {
            animate: true, // Boolean: Use CSS3 transitions, true or false
            transition: 180, // Integer: Speed of the transition, in milliseconds
            label: "SWAG", // String: Label for the navigation toggle
            insert: "before", // String: Insert the toggle before or after the navigation
            customToggle: "", // Selector: Specify the ID of a custom toggle
            closeOnNavClick: true, // Boolean: Close the navigation when one of the links are clicked
            openPos: "relative", // String: Position of the opened nav, relative or static
            navClass: "nav-collapse", // String: Default CSS class. If changed, you need to edit the CSS too!
            navActiveClass: "js-nav-active", // String: Class that is added to  element when nav is active
            jsClass: "js", // String: 'JS enabled' class which is added to  element
            init: function(){}, // Function: Init callback
            open: function(){}, // Function: Open callback
            close: function(){} // Function: Close callback
        });
    }

    /**
     * Setup the menu item click handlers.
     */
    function setupMenuItemClickHandlers() {
        $navMenu.find('li').click(menuItemClickHandler);
    }

    /**
     * Menu item click handler.
     *
     * Applies the active css active class to the selected item and removes it
     * from others.
     */
    function menuItemClickHandler() {
        var $this = $(this);

        // Apply the active class to the selected menu item.
        $navMenu.find('li.active').removeClass('active');
        $this.addClass('active');
    }

})(jQuery);
