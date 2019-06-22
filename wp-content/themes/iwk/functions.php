<?php

/* LOAD STYLES AND SCRIPTS */
function iwk_enqueue_styles() {

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
	
	wp_register_script('slick-control', get_template_directory_uri() . '/js/jquery.visible.min.js', array('jquery'), null, true);
	wp_enqueue_script('slick-control');
	
	wp_register_script('main-scripts', get_template_directory_uri() . '/js/main.js', array('jquery'), null, true);
	wp_enqueue_script('main-scripts');
}

/* REGISTER MENU */
function nav_registration() {
	register_nav_menus( array(
		'primary-menu'   => esc_html__( 'Primary Menu', 'IWK Annual Report 2018/19' )
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
	add_image_size('signatures', 180, 80, true); // Small Thumbnail
	add_image_size('icons', 200, 200, true); // Small Thumbnail
	add_image_size('full', '', '', true); // Small Thumbnail
}

/* TITLE TAG SUPPORT */
function titleTag() {
 add_theme_support( 'title-tag' );
}

$retrievefield = 'time_input';
$retrieveall = get_field($retrievefield, 2);
$currentdate = new DateTime();
$futuredate = new DateTime($retrieveall);

if ( $futuredate < $currentdate ) {
	$my_plugin = $plugin_path . 'mspace_timer/mspace_timer.php';
	// Check to see if plugin is already active
	if(is_plugin_active($my_plugin)) {
		deactivate_plugins($my_plugin);
	}
}

// ACTIONS, OPTIONS AND FILTERS
add_action('wp_enqueue_scripts', 'iwk_enqueue_styles');
add_action( 'after_setup_theme', 'nav_registration' );
add_action( 'after_setup_theme', 'titleTag' );