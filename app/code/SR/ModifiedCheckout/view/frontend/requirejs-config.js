var config = {
    config: {
        mixins: {
            'Magento_Checkout/js/view/shipping': {
                'SR_ModifiedCheckout/js/mixin/shipping-mixin': true
            },
            'Webkul_MpTimeDelivery/js/view/shipping': {
                'SR_ModifiedCheckout/js/mixin/shipping-mixin': true
            },
        }
    }
};