(function () {

    angular
        .module('larakit')
        .component('adminlteInjectorClipboard', {
            templateUrl: '/packages/larakit/sf-angular-file-injector/components/adminlte-injector-clipboard/component.html',
            bindings: {
                onPaste: '&',
                url: '='
            },
            controller: Controller
        });

    Controller.$inject = ['$element'];

    function Controller($element) {
        var $ctrl = this;
        $ctrl.$postLink = function () {
            new FileInjector({
                elem: $element, imagePreview: function (base64) {
                    $ctrl.onPaste()(base64, $ctrl.url);
                }
            },function(){});
        };
    }
})();