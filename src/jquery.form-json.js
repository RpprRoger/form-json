// the semi-colon before function invocation is a safety net against concatenated
// scripts and/or other plugins which may not be closed properly.
;(function ( $, window, document, undefined ) {

	// undefined is used here as the undefined global variable in ECMAScript 3 is
	// mutable (ie. it can be changed by someone else). undefined isn't really being
	// passed in so we can ensure the value of it is truly undefined. In ES5, undefined
	// can no longer be modified.

	// window and document are passed through as local variable rather than global
	// as this (slightly) quickens the resolution process and can be more efficiently
	// minified (especially when both are regularly referenced in your plugin).

	var pluginName = 'formJSON';

	function importFromJson( $form, json ) {

	}

	function getJsonFromForm( $form ) {

	}

	// A really lightweight plugin wrapper around the constructor,
	// preventing against multiple instantiations
	$.fn[ pluginName ] = function ( option ) {
	
		var type = typeof option,
			stringify = true;

		switch( type ) {
		case 'boolean':
			stringify = !option;
			break;
		case 'string':
		case 'object':
			return this.each();
		default:
			break;
		}

	};

})( jQuery, window, document );
