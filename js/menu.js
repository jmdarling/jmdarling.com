(function () {
    "use strict";

    var $navMenu;

    $(document).ready(function() {
        $navMenu = $('#navigation-links');
        setupMenuItemClickHandlers();
    });

    /**
     * Setup the menu item click handlers.
     */
    function setupMenuItemClickHandlers() {
        $navMenu.find('a').click(menuItemClickHandler);
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
        $navMenu.find('a.active').removeClass('active');
        $this.addClass('active');
    }

})(jQuery);
