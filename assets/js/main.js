/**
 * Fichier JavaScript principal (main.js)
 * Initialise les bibliothèques tierces et gère les interactions du portfolio.
 */

(function() {
    "use strict";

    // Référence l'élément BODY
    const body = document.querySelector('body');

    /* ========================================================= */
    /* 1. INITIALISATION DE TYPED.JS (Texte d'introduction) */
    /* ========================================================= */
    const typed = document.querySelector('.typed');
    if (typed) {
        let typed_strings = typed.getAttribute('data-typed-items');
        typed_strings = typed_strings.split(',');
        new Typed('.typed', {
            strings: typed_strings,
            loop: true,
            typeSpeed: 100,
            backSpeed: 50,
            backDelay: 2000
        });
    }

    /* ========================================================= */
    /* 2. INITIALISATION DE GLIGHTBOX (Galerie de Projets) */
    /* ========================================================= */
    const lightbox = GLightbox({
        selector: '.glightbox',
        // Configuration minimale pour une utilisation simple
        skin: 'clean', 
        openEffect: 'zoomIn', 
        closeEffect: 'zoomOut',
        // Assure que la galerie fonctionne en mode tactile sur mobile
        touchNavigation: true,
        loop: true 
    });

    /* ========================================================= */
    /* 3. GESTION DU MENU MOBILE (Hamburger) */
    /* ========================================================= */

    const navbar = document.querySelector('#navbar');
    const mobileNavToggle = document.querySelector('.mobile-nav-toggle');

    // Fonction pour ouvrir/fermer le menu
    const toggleMobileNav = function() {
        if (!navbar) return; // S'assurer que la barre de nav existe
        
        // Ajout/Retrait de la classe qui affiche le menu (voir CSS)
        navbar.classList.toggle('navbar-mobile'); 
        
        // Changer l'icône du menu (bi-list <-> bi-x)
        mobileNavToggle.classList.toggle('bi-list');
        mobileNavToggle.classList.toggle('bi-x');
    };

    // Événement au clic sur l'icône du menu
    if (mobileNavToggle) {
        mobileNavToggle.addEventListener('click', function(e) {
            e.preventDefault();
            toggleMobileNav();
        });
    }

    // Fermer le menu mobile lorsque l'on clique sur un lien (scrollto)
    document.querySelectorAll('.navbar .scrollto').forEach(link => {
        link.addEventListener('click', function() {
            if (navbar.classList.contains('navbar-mobile')) {
                toggleMobileNav();
            }
        });
    });


    /* ========================================================= */
    /* 4. GESTION DU BOUTON "BACK TO TOP" */
    /* ========================================================= */

    const backtotop = document.querySelector('.back-to-top');

    // Fonction pour afficher/cacher le bouton
    const toggleBacktotop = () => {
        if (!backtotop) return;
        
        // Afficher le bouton si on a défilé de plus de 100px
        if (window.scrollY > 100) {
            backtotop.classList.add('active');
        } else {
            backtotop.classList.remove('active');
        }
    };

    // Événement de défilement (scroll)
    window.addEventListener('load', toggleBacktotop);
    document.addEventListener('scroll', toggleBacktotop);

    // Événement au clic pour remonter
    if (backtotop) {
        backtotop.addEventListener('click', function(e) {
            e.preventDefault();
            window.scrollTo({
                top: 0,
                behavior: 'smooth'
            });
        });
    }

})();