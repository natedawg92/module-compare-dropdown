# Compare Dropdown

## Description

Magento 2 Module to add Customer Compare list as a Dropdown to the Site Header

State | Desktop | Mobile
-- | --- | ---
Empty | ![empty-desktop](screenshots/empty-desktop.png) | ![empty-mobile](screenshots/empty-mobile.png)
Filled | ![filled-desktop](screenshots/filled-desktop.png) | ![filled-mobile](screenshots/filled-mobile.png)

## Install Instructions

### Install Via Composer (Recommended)
```BAASH
composer config repositories.nathanday/module-core git git@github.com:natedawg92/module-core.git
composer config repositories.nathanday/module-compare-dropdown git git@github.com:natedawg92/module-compare-dropdown.git
composer require nathanday/module-compare-dropdown

php bin/magento module:enable NathanDay_CompareDropdown NathanDay_Core
```

### Install via Code Copy

1. Download the latest releases from:
    - [natedawg92/module-core](https://github.com/natedawg92/module-core/releases) **AND**
    - [natedawg9/module-compare-dropdown](https://github.com/natedawg92/module-compare-dropdown/releases)
2. Create the following Directories
    - `app/code/NathanDay/Core`
    - `app/code/NathanDay/CompareDropdown`
3. Extract the downloaded files into the appropriate directory
4. run `php bin/magento module:enable NathanDay_Core NathanDay_CompareDropdown`

## Credits

[Email](mailto:nathanday92@gmail.com)
[GitHub](https://github.com/natedawg92)
[LinkedIn](https://www.linkedin.com/in/nathanday92/)

## License