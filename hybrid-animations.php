<?php

/**
 * Plugin Name: Hybrid Animations
 * Description: Animate text, image, slider and anything.
 * Version:           1.0.0
 * Author:            Pixobe
 * Author URI:        https://pixobe.com
 * License:           GPL-2.0+
 * License URI:       http://www.gnu.org/licenses/gpl-2.0.txt
 */

/*
 Hybrid Animation is free software: you can redistribute it and/or modify
it under the terms of the GNU General Public License as published by
the Free Software Foundation, either version 2 of the License, or
any later version.
 
 Hybrid Animation is distributed in the hope that it will be useful,
but WITHOUT ANY WARRANTY; without even the implied warranty of
MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE. See the
GNU General Public License for more details.
 
You should have received a copy of the GNU General Public License
along with Informative Maps. If not, see {URI to Plugin License}.
*/
require_once plugin_dir_path(__FILE__) . 'includes/functions.php';

if (!class_exists('PixobeHybridAnimations')) :

	class PixobeHybridAnimations
	{
		/** @var string The plugin version number. */
		var $version = '1.0.0';

		/** @var array The plugin settings array. */
		var $settings = array();

		/** @var array The plugin data array. */
		var $data = array();

		/** @var array Storage for class instances. */
		var $instances = array();

		/** @var array Prefix for variables and handles. */
		var $prefix = 'pcb';

		/**
		 * __construct
		 *
		 * A dummy constructor to ensure PixobeCartography is only setup once.
		 *
		 * @date	11/07/2020
		 * @since	1.0.0
		 *
		 * @param	void
		 * @return	void
		 */
		function __construct()
		{
			// Do nothing.
		}

		/**
		 * initialize
		 *
		 * Sets up the Pixobe Jockey plugin.
		 *
		 * @date	11/07/2020
		 * @since	1.0.0
		 *
		 * @param	void
		 * @return	void
		 */
		function initialize()
		{
			define('PHA', true);
			define('PHA_PLUGIN_NAME', 'Pixobe Hybrid Animations');
			define('PHA_PLUGIN_OPTS', 'pixobe_hybridanimations_opts');
			define('PHA_BASENAME', plugin_basename(__FILE__));
			define('PHA_PATH', plugin_dir_path(__FILE__));
			define('PHA_VERSION', $this->version);
			define('PHA_MAJOR_VERSION', 1);

			$this->settings = array(
				'name'						=> __(PHA_PLUGIN_NAME, 'PHA_plugin_name'),
				'shortname' 				=> $this->prefix,
				'slug'						=> dirname(PHA_BASENAME),
				'version'					=> PHA_VERSION,
				'basename'					=> PHA_BASENAME,
				'path'						=> PHA_PATH,
				'file'						=> __FILE__,
				'url'						=> plugin_dir_url(__FILE__),
				'show_admin'				=> true,
				'show_updates'				=> true,
				'scripts_path'				=> 'www/build',
				'css_handle'				=> $this->prefix . "_admin_styles",
				'top_level_menu'			=> 'toplevel_page_hybrid_animations',
			);

			//add option version
			add_option($this->get_setting("slug"), $this->get_setting("version"));

			// add application scripts
			add_action('wp_enqueue_scripts', array($this, 'add_application_scripts'), 5);
		}

		/**
		 * register application scripts scripts
		 *
		 * @date	11/05/2022
		 * @since	1.0.0
		 *
		 * @param	void
		 * @return	void
		 */
		function add_application_scripts()
		{
			$script_path = $this->get_setting('url') . $this->get_setting('scripts_path');
			$scripts = [
				'hybrid-animations.esm.js',
				'hybrid-animations.js'
			];

			foreach ($scripts as $key => $value) {
				wp_enqueue_script($value, $this->get_resource_path($script_path, $value), ['jquery', 'wp-api-request'], $this->version, true);
			}
			// register styles
		}


		/**
		 * get_setting
		 *
		 * Returns a setting or null if doesn't exist.
		 *
		 * @date	11/08/2020
		 * @since	1.0.0
		 *
		 * @param	string $name The setting name.
		 * @return	mixed
		 */
		function get_setting($name)
		{
			return isset($this->settings[$name]) ? $this->settings[$name] : null;
		}

		/**
		 * Joins the path
		 * 
		 * @param base_path
		 * @param name
		 */
		function get_resource_path($base_path, $name)
		{
			return join(DIRECTORY_SEPARATOR, array($base_path, $name));
		}
	}

	function pixobe_hybrid_animations()
	{
		global $PHA;
		// Instantiate only once.
		if (!isset($PHA)) {
			$PHA = new PixobeHybridAnimations();
			$PHA->initialize();
		}
		return $PHA;
	}
	pixobe_hybrid_animations();

endif;

add_filter('script_loader_tag', 'pha_add_type_attribute', 10, 3);
add_shortcode('hybridanimations', 'pha_shortcode_fn');