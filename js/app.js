(function() {
    'use strict';

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