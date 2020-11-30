/*$(document).ready(function() {
    
});*/

$(function(){
    'use strict';
    
    $('main article:first').hide();

    var copia = $('main article:last').clone();
    $('main').append(copia); /*Lo copia al final/ prepend (copia) al final  */

});