<?php

/* LOAD STYLES AND SCRIPTS */
function nodal_enqueue_styles() {

	wp_register_style( 'normalize', get_template_directory_uri() . '/css/normalize.min.css', '', null );
	wp_enqueue_style('normalize');
	
	wp_register_style( 'main-styles', get_template_directory_uri() . '/css/main.css', '', null );
	wp_enqueue_style('main-styles');
	
	wp_register_style( 'slick-css', get_template_directory_uri() . '/css/slick.css', '', null );
	wp_enqueue_style('slick-css');
	
	wp_register_style( 'slick-theme', get_template_directory_uri() . '/css/slick-theme.css', '', null );
	wp_enqueue_style('slick-theme');
	
	wp_register_style( 'google-fonts', 'https://fonts.googleapis.com/css?family=Poppins%7CRoboto+Slab&display=swap', '', null );
	wp_enqueue_style('google-fonts');
	
	wp_register_style( 'aos-css', 'https://unpkg.com/aos@2.3.1/dist/aos.css', '', null );
	wp_enqueue_style('aos-css');
	
	wp_register_script('js-vendor', get_template_directory_uri() . '/js/vendor/modernizr-2.6.2.min.js', array('jquery'), null);
	wp_enqueue_script('js-vendor');
	
	wp_register_script('fontawesome', 'https://use.fontawesome.com/6ccd600e51.js', array('jquery'), null, true);
	wp_enqueue_script('fontawesome');
	
	wp_register_script('aos-script', 'https://unpkg.com/aos@2.3.1/dist/aos.js', array('jquery'), null, true);
	wp_enqueue_script('aos-script');
	
	wp_register_script('counter-script', 'https://cdnjs.cloudflare.com/ajax/libs/waypoints/4.0.0/jquery.waypoints.min.js', array('jquery'), null, true);
	wp_enqueue_script('counter-script');
	
	wp_register_script('counter-main', get_template_directory_uri() . '/js/jquery.counterup.js', array('jquery'), null, true);
	wp_enqueue_script('counter-main');
	
	wp_register_script('slick-script', get_template_directory_uri() . '/js/slick.min.js', array('jquery'), null, true);
	wp_enqueue_script('slick-script');
	
	wp_register_script('main-scripts', get_template_directory_uri() . '/js/main.js', array('jquery'), null, true);
	wp_enqueue_script('main-scripts');
}

/* REGISTER MENU */
function nav_registration() {
	register_nav_menus( array(
		'primary-menu'   => esc_html__( 'Primary Menu', 'NodalBlock' )
	) );
}

if( function_exists('acf_add_options_page') ) {

	acf_add_options_page('Footer');

}

/* REGISTER THUMBNAILS */
if (function_exists('add_theme_support')) {
	add_theme_support('post-thumbnails');
	add_image_size('large', 700, '', true); // Large Thumbnail
	add_image_size('medium', 250, '', true); // Medium Thumbnail
	add_image_size('small', 120, '', true); // Small Thumbnail
}

/* TITLE TAG SUPPORT */
function titleTag() {
 add_theme_support( 'title-tag' );
}

function my_mce_before_init_insert_formats( $init_array ) {
 
    $style_formats = array(  

        array(  
            'title' => 'White CTA Button',  
            'block' => 'a',  
            'classes' => 'cta_button_light',
            'wrapper' => true,
             
        ),  
        array(  
            'title' => 'Green CTA Button',  
            'block' => 'a',  
            'classes' => 'cta_button',
            'wrapper' => true,
        ),
        array(  
            'title' => 'H3 with top line rule',  
            'block' => 'h3',  
            'classes' => 'h3_linerule',
            'wrapper' => true,
        ),
    );  
    $init_array['style_formats'] = json_encode( $style_formats );  
     
    return $init_array;  
   
}

// ACTIONS, OPTIONS AND FILTERS
add_action('wp_enqueue_scripts', 'nodal_enqueue_styles');
add_action( 'after_setup_theme', 'nav_registration' );
add_filter( 'tiny_mce_before_init', 'my_mce_before_init_insert_formats' );
add_action( 'after_setup_theme', 'titleTag' );