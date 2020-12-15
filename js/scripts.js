/*$(document).ready(function() {
    
});*/

$(function(){
    'use strict';

    $('main').on({
        click: function() {
            $(this).addClass('fondorojo activo');            
        }, mouseenter: function() {
            $(this).addClass('fondorojo');
        }, mouseleave: function(){
            $(this).addClass('activo');
        } 
    })

    /* $('div.logo img').addClass('activo');

    $('.navegacion').show();
    $('main article:first').addClass('activo');
    
    $('.navegacion ul li a').on('click', function(e){
        $('.navegacion ul li a').removClass ('activo');
        e.preventDefault();
        $(this).addClass('activo');
    });*/
    
   /*Selectores: $('.class/etiqueta/#id') */
  /* $('header'); /*= document.querySelector('header')

   $('header .contenedor');

   $('.navegacion').find('a'); /* =  $('.navegacion a') ;Devuelve todas las a 

   $('#navegacion');/*Devuelve toda la navegacion 

   $('main article'); /*Devuelve todos los articles 

   $('main article:last p:first') /*Devuelve el primer parrafo del ultimo  articulo */

   /* $('main article:first').hide();  Oculta el primer articulo*/ 

   /*Clonando */
    /*var copia = $('main article:last').clone();
    $('main').append(copia); /*Lo copia al final/ prepend (copia) al final*/

    /*var copia = $('main article:last').clone();
    $('main').prependTo(main); /*Lo copia donde le indiques*/

    /*$('div.logo img').on('click',function(){
        /*console.log("Haz hecho click en el logo");
        $('this').remove(); Remueve el elemento cuando das click en el 
    })*/

    /*$('div.logo img').on('mouseenter',function() {
        console.log("Sobre el logo");
    });
    $('div.logo img').on('mouseleave',function() {
        console.log("Fuera del logo");
    });*/

    /*$('#menu').on('click',function() {
        $('#navegacion').show();
    })*/




    



});