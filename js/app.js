(function() {
    'use strict';

    var projectTemplate = _.template(
        [
            '<div class="project-row">',
                '<img src="<%= imageUrl %>" class="rounded three columns"/>',
                '<div class="nine columns">',
                    '<p><%= description %></p>',
                    '<ul class="inline-links centered-text">',
                        '<li><a href="<%= sourceLink %>"><i class="fa fa-github"></i> View source on GitHub</a></li>',
                        '<li><a href="<%= liveLink %>"><i class="fa fa-globe"></i> View it live</a></li>',
                    '</ul>',
                '</div>',
            '</div>'
        ].join('')
    );

    $(document).ready(function() {
       setupChart();
    });

    function setupChart() {
        var context = $('#experience-chart').get(0).getContext('2d');

        var data = {
            labels: ['PHP', 'JavaScript', 'Java', 'HTML5', 'CSS3', 'SQL', 'MongoDB', 'Drupal', 'Android', 'Git'],
            datasets: [
                {
                    label: 'Professional Experience',
                    fillColor: 'rgba(255,44,97,0.8)',
                    strokeColor: 'rgba(255,44,97,1)',
                    highlightFill: 'rgba(255,44,97,0.9)',
                    highlightStroke: 'rgba(255,44,97,1)',
                    // TODO: Dynamically calculate these.
                    data: [3, 2, 1, 2, 2, 2, 1, 2, 1, 3]
                }
            ]
        };

        var options = {
            scaleFontColor: 'rgba(238,238,238,0.8)',
            scaleFontFamily: '"Raleway", "Helvetica Neue", "Helvetica", "Arial", sans-serif',
            scaleLineColor: 'rgba(238,238,238,0.2)',
            scaleGridLineColor: 'rgba(238,238,238,0.2)',
            tooltipFontFamily: '"Raleway", "Helvetica Neue", "Helvetica", "Arial", sans-serif'
        };

        var experienceChart = new Chart(context).Bar(data, options);
    }
})();