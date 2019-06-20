			<!-- FOOTER -->
			<?php if( have_rows('footer', 'options') ): ?>
			<footer class="section fp-auto-height">
				<div class="inner light top-bottom-padding max-1600">
					<?php while( have_rows('footer', 'options') ): the_row(); ?>
					<div class="clearfix flex-container">
						<?php
						$image = get_sub_field('footer_logo', 'options');
						$size = 'full';
						if ( $image ) { ?>
						<div class="one_third">
							<?php echo wp_get_attachment_image( $image, $size ); ?>
						</div>
						<?php } ?>
						<div class="one_third">
							<p><?php the_sub_field('site_description', 'options'); ?></p>
						</div>
						<?php if( have_rows('footer_external_link', 'options') ): ?>
						<div class="one_third last_column">
							<?php while( have_rows('footer_external_link', 'options') ): the_row(); ?>
							<ul class="links">
								<li><a href="<?php the_sub_field('link', 'options'); ?>" target="_blank"><?php the_sub_field('label', 'options'); ?> &raquo;</a></li>
							</ul>
							<?php endwhile; ?>
						</div>
						<?php endif; ?>
					</div>
					<div class="clearfix" style="margin-top: 20px;">
						<div class="lcol-full">
							<div class="footer-menu">
								<ul>
									<li class="contact-slide"><a href="javascript:void(0)">Contact Us</a></li>
									<?php if( have_rows('link_list', 'options') ): ?>
									<?php while( have_rows('link_list', 'options') ): the_row(); ?>
							    	<li><a href="<?php the_sub_field('list_link', 'options'); ?>" target="_blank"><?php the_sub_field('list_label', 'options'); ?></a></li>
									<?php endwhile; ?>
									<?php endif; ?>
								</ul>
							</div>
						</div>
						<div class="rcol-full">
							<p>&copy; 2019 <?php bloginfo( 'name' ); ?>. All Rights Reserved.</p>
						</div>
					</div>
					<?php endwhile; ?>
				</div>
			</footer>
			<?php endif; ?>
			<!-- / FOOTER -->
		
			<!-- CONTACT SLIDE-OUT BOX -->
			<?php if ( get_field('contact_slideout', 'options') ): ?>
			<div class="contact-slideout">
				<div class="contact-toggle"><i class="fa fa-times"></i></div>
				<?php the_field('contact_slideout', 'options'); ?>
			</div>
			<?php endif; ?>
			<!-- / CONTACT SLIDE-OUT BOX -->
			
		</div>
		<!-- / WRAP -->
       
        <script>window.jQuery || document.write('<script src="js/vendor/jquery-1.10.2.min.js"><\/script>')</script>
        
        <?php wp_footer(); ?>
    </body>
</html>