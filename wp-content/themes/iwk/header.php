<!DOCTYPE html>
<!--[if lt IE 7]>      <html class="no-js lt-ie9 lt-ie8 lt-ie7"> <![endif]-->
<!--[if IE 7]>         <html class="no-js lt-ie9 lt-ie8"> <![endif]-->
<!--[if IE 8]>         <html class="no-js lt-ie9"> <![endif]-->
<!--[if gt IE 8]><!--> <html class="no-js" lang="en"> <!--<![endif]-->
    <head>
        <meta charset="utf-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <title>Because It Matters | IWK Annual Report 2018/19</title>
        <meta name="description" content="">
        <meta name="viewport" content="width=device-width, initial-scale=1">

        <link rel="icon" href="favicon.png" type="image/png" sizes="32x32">
        <link rel="apple-touch-icon-precomposed" href="apple-touch-iphone.png" />
        <link rel="apple-touch-icon-precomposed" sizes="72x72" href="apple-touch-ipad.png" />
        <link rel="apple-touch-icon-precomposed" sizes="114x114" href="apple-touch-iphone4.png" />
        <link rel="apple-touch-icon-precomposed" sizes="144x144" href="apple-touch-ipad-retina.png" />
		
		<?php wp_head(); ?>
    </head>
    <body <?php body_class(); ?>>
		
		<!--<div class="houdini"></div>-->
		
		<script>
			(function(i,s,o,g,r,a,m){i['GoogleAnalyticsObject']=r;i[r]=i[r]||function(){
			  (i[r].q=i[r].q||[]).push(arguments)},i[r].l=1*new Date();a=s.createElement(o),
			  m=s.getElementsByTagName(o)[0];a.async=1;a.src=g;m.parentNode.insertBefore(a,m)
			  })(window,document,'script','https://www.google-analytics.com/analytics.js','ga');
			
			  ga('create', 'UA-29439886-4', 'auto');
			  ga('send', 'pageview');
		</script>
		
		<!--[if lt IE 7]>
		<p class="browsehappy">You are using an <strong>outdated</strong> browser. Please <a href="http://browsehappy.com/">upgrade your browser</a> to improve your experience.</p>
		<![endif]-->
		
		<!-- NAVIGATION -->
		<nav>
			<?php 
				wp_nav_menu( array( 
					'theme_location' => 'primary-menu',
					'items_wrap' => '<ul id="%1$s" class="%2$s">%3$s ' . $menu . '</ul>', 
				) ); 
			?>
		</nav>
		<!-- / NAVIGATION -->
		
		<!-- MOBILE TOGGLE -->
		<button class="toggle">
			<span id="nav-icon" class="">
			  <span></span>
			  <span></span>
			  <span></span>
			  <span></span>
			</span>
		</button>
		<!-- / MOBILE TOGGLE -->
		
		<!-- TOP BANNER -->
		<header>
			<div class="inner clearfix max-1600">
				
				<!-- BRANDING -->
				<div class="logo">
					<?php
					$url = home_url( $path = '/', $scheme = https ); ?>
					<a href="<?php echo $url; ?>#home">
						<img src="img/iwk-health-centre-logo.png" alt="IWK Health Centre" />
					</a>
				</div>
				<!-- / BRANDING -->
				
				<!-- SITE TITLE -->
				<div class="site-title">
					<h1><?php bloginfo('name'); ?></h1>
				</div>
				
			</div>
		</header>
		<!-- / TOP BANNER -->
		
		<!-- OVERLAY -->
		<div class="overlay"></div>
		<!-- / OVERLAY -->
	
		<!-- FINANCIAL LINKS -->
		<div class="financial-links">
			<ul>
				<li><a href="#">Audited Financial Statements</a></li>
				<li><a href="#">Management Discussion &amp; Analysis</a></li>
			</ul>
		</div>
		<!-- / FINANCIAL LINKS -->