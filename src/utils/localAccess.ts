const access = (function () {
    let navigation: any = null;
    let isOnline: boolean = true;
    
    const setNavigationAccess = function(val: any) {
        navigation = val
    }
    const getNavigationAccess = function() {
        return navigation;
    }
    const setInternetStatus = function(val: boolean) {
        isOnline = val
    }
    const getInternetStatus = function() {
        return isOnline;
    }

    return {
        setNavigationAccess,
        getNavigationAccess,
        setInternetStatus,
        getInternetStatus
    }
})()

export default access