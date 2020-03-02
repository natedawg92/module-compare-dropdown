define([
    'jquery',
    'domReady!'
], function($) {
    'use strict';

    $('.compare-wrapper').clone().appendTo('#store\\.links').toggleClass('compare-wrapper compare-wrapper-mobile header links');
});
``