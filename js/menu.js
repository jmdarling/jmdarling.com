(function () {
    "use strict";

    var $menu;

    $(document).ready(function() {
        $menu = $('#menu');
        setupMenuItemClickHandlers();
    });

    function setupMenuItemClickHandlers() {
        $menu.find('.menu_item').click(menuItemClickHandler);
    }

    function menuItemClickHandler() {
        highlightMenuItem(this.id);
        switch (this.id) {
            case 'about_me_button':
                break;

            case 'projects_button':
                break;

            case 'resume_button':
                break;

            case 'contact_me_button':
                break;
        }

        function highlightMenuItem(id) {
            $menu.find('li.selected').removeClass('selected');
            $menu.find('#' + id).addClass('selected');
        }
    }

})(jQuery);