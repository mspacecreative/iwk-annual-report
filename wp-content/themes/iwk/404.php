<?php get_header(); ?>

<div class="wrap">
	<div class="inner align-center" style="padding: 10% 0;">
		<h2><?php esc_html_e('Page Not Found.'); ?></h2>
		<p><?php esc_html_e('Please use navigation to find the content you&#8217;re looking for.'); ?></p>
		<p><?php esc_html_e('Or, click ' ?><a href="<?php echo home_url(); ?>">here</a><?php esc_html_e(' to go to the home page.'); ?></p>
	</div>
</div>

<?php get_footer(); ?>