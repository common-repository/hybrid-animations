<?
/* 
 * The utility functions for the plugin
 */

function pixobe_isset($atts, $var, $def = "")
{
    return isset($atts[$var]) ? $atts[$var] : $def;
}

function pha_shortcode_fn($atts)
{
    $text = pixobe_isset($atts, 'text');
    $effect = pixobe_isset($atts, 'effect');
    return "<hybrid-animations text='" . $text . "' effect='" . $effect . "'>
        </hybrid-animations>";
}

if (!function_exists('pha_add_type_attribute')) {
    function pha_add_type_attribute($tag, $handle, $src)
    {
        // if not your script, do nothing and return original $tag
        if ('hybrid-animations.esm.js' == $handle) {
            return wp_get_script_tag(
                array(
                    'src'      => $src,
                    'type' => 'module',
                )
            );
        } else if ('hybrid-animations.js' == $handle) {
            // change the script tag by adding type="module" and return it.
            return wp_get_script_tag(
                array(
                    'src'      => $src,
                    'nomodule' => true,
                )
            );
        }
        return $tag;
    }
}