(function(angular) {
    'use strict';

    angular
        .module('dedojr')
        .directive('autoExpand', autoExpand);

    autoExpand.$inject = [];

    function autoExpand() {
        return {
            restrict: 'A',
            link: function(scope, element, attrs) {

                element.css({
                    resize: 'none'
                });

                element.attr('rows', 1);

                function update() {
                    element.height('auto');
                    var scrollHeight = element.get(0).scrollHeight;
                    var paddingTop = parseInt(element.css('padding-top'))
                    var paddingBottom = parseInt(element.css('padding-bottom'));
                    var targetHeight = scrollHeight - (paddingTop + paddingBottom);
                    element.height(targetHeight);
                }

                element.on('input', update);

                update();
            }
        };
    };
})(window.angular);
