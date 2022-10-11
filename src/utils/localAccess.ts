const access = (function () {
    var navigation: any = null;
    
    var setNavigationAccess = function(val: any) {
        navigation = val
    }
    var getNavigationAccess = function() {
        return navigation;
    }

    return {
        setNavigationAccess,
        getNavigationAccess
    }
})()

export default access