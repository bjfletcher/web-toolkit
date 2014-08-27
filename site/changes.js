if (typeof changes==='undefined') changes={};
changes.main = (function(diff) {

    function bindEvents() {
        $(document).on('click','.toggler', toggle);
        $('.sky-form').on('submit', checkDiff);
    }

    function checkDiff(e) {
        e.preventDefault();
        var newRouteDir,
            oldVersion = $('#version').val(),
            newVersion = $('#current-version').text(),
            route = 'http://web-toolkit.global.sky.com',
            routeDir = newRouteDir = '_site/_includes';
        if (location.hostname.indexOf('local')===0){
            route = 'http://'+location.host;
            newRouteDir = '../_includes';
        }
        if (oldVersion.split('.').length<3 || (oldVersion.split('.')[0]<1)){
            $('.sky-form .error').text("The version number is required, and must be '1.0.0' or higher");
        }
        if (parseFloat(oldVersion,10)===1 || (oldVersion.split('.')[0]==='0')){
            oldVersion = '0.6.9';//get lowest version available
        }
        diff({
            oldRoute: route + '/' + oldVersion + '/' + routeDir,
            newRoute: route + '/' + newVersion + '/' + newRouteDir
        });
    }

    function toggle(){
        var $toggler = $(this);
        var $example = $('div[data-toggle=' + $toggler.attr('for') + ']');
        if ($example.hasClass('open')){
            $toggler.removeClass('open');
            $example.removeClass('open');
        } else {
            $toggler.addClass('open');
            $example.addClass('open');
        }
    }

    bindEvents();

});

if (typeof window.define === "function" && window.define.amd){
    define(['changes/diff'], function(diff) {
        return changes.main(diff);
    });
} else {
    changes.main(changes.diff);
}
