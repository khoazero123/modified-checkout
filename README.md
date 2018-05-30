# Magento2 Modified Checkout Functionality
## Mod by KhoaZero123 - FGC
Many marchent wants to move billing address under shipping address in checkout in magento 2.

This is easiest solution for them. Just download and install this module and done.

# Supporting version: 2.1.x and 2.2.x

# GET EXTENSION

Use modman [Linux](https://github.com/colinmollenhour/modman) | [Windows](https://github.com/khoazero123/modman-php) :

	cd magento_root/
    modman clone https://github.com/khoazero123/modified-checkout.git
	modman deploy modified-checkout

Use git:

    git clone https://github.com/khoazero123/modified-checkout.git
    mv modified-checkout/* magento_root/

# INSTALLATION

	bin/magento setup:upgrade
	bin/magento setup:di:compile
	bin/magento setup:static-content:deploy
	php bin/magento cache:clean && bin/magento cache:flush