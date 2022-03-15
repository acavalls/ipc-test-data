/**
 * @author Roeland Jago Douma <roeland@famdouma.nl>
 *
 * @copyright Copyright (c) 2015, ownCloud, Inc.
 * @license AGPL-3.0
 *
 * This code is free software: you can redistribute it and/or modify
 * it under the terms of the GNU Affero General Public License, version 3,
 * as published by the Free Software Foundation.
 *
 * This program is distributed in the hope that it will be useful,
 * but WITHOUT ANY WARRANTY; without even the implied warranty of
 * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE. See the
 * GNU Affero General Public License for more details.
 *
 * You should have received a copy of the GNU Affero General Public License, version 3,
 * along with this program.  If not, see <http://www.gnu.org/licenses/>
 *
 */

/**
 * Namespace to hold functions related to convert mimetype to icons
 *
 * @namespace
 */
OC.MimeType = {

	/**
	 * Cache that maps mimeTypes to icon urls
	 */
	_mimeTypeIcons: {},

	/**
	 * Return the file icon we want to use for the given mimeType.
	 * The file needs to be present in the supplied file list
	 *
	 * @param {string} mimeType The mimeType we want an icon for
	 * @param {array} files The available icons in this theme
	 * @return {string} The icon to use or null if there is no match
	 */
	_getFile: function(mimeType, files) {
		var icon = mimeType.replace(new RegExp('/', 'g'), '-');

		// Generate path
		if (mimeType === 'dir' && $.inArray('folder', files) !== -1) {
			return 'folder';
		} else if (mimeType === 'dir-encrypted' && $.inArray('folder-encrypted', files) !== -1) {
			return 'folder-encrypted';
		} else if (mimeType === 'dir-shared' && $.inArray('folder-shared', files) !== -1) {
			return 'folder-shared';
		} else if (mimeType === 'dir-public' && $.inArray('folder-public', files) !== -1) {
			return 'folder-public';
		} else if (mimeType === 'dir-external' && $.inArray('folder-external', files) !== -1) {
			return 'folder-external';
		} else if ($.inArray(icon, files) !== -1) {
			return icon;
		} else if ($.inArray(icon.split('-')[0], files) !== -1) {
			return icon.split('-')[0];
		} else if ($.inArray('file', files) !== -1) {
			return 'file';
		}

		return null;
	},

	/**
	 * Return the url to icon of the given mimeType
	 *
	 * @param {string} mimeType The mimeType to get the icon for
	 * @return {string} Url to the icon for mimeType
	 */
	getIconUrl: function(mimeType) {
		if (_.isUndefined(mimeType)) {
			return undefined;
		}

		while (mimeType in OC.MimeTypeList.aliases) {
			mimeType = OC.MimeTypeList.aliases[mimeType];
		}
		if (mimeType in OC.MimeType._mimeTypeIcons) {
			return OC.MimeType._mimeTypeIcons[mimeType];
		}

		// First try to get the correct icon from the current theme
		var gotIcon = null;
		var path = '';
		if (OC.theme.folder !== '' && $.isArray(OC.MimeTypeList.themes[OC.theme.folder])) {
			path = OC.getRootPath() + '/themes/' + OC.theme.folder + '/core/img/filetypes/';
			var icon = OC.MimeType._getFile(mimeType, OC.MimeTypeList.themes[OC.theme.folder]);

			if (icon !== null) {
				gotIcon = true;
				path += icon;
			}
		}
		if(OCA.Theming && gotIcon === null) {
			path = OC.generateUrl('/apps/theming/img/core/filetypes/');
			path += OC.MimeType._getFile(mimeType, OC.MimeTypeList.files);
			gotIcon = true;
		}

		// If we do not yet have an icon fall back to the default
		if (gotIcon === null) {
			path = OC.getRootPath() + '/core/img/filetypes/';
			path += OC.MimeType._getFile(mimeType, OC.MimeTypeList.files);
		}

		path += '.svg';

		if(OCA.Theming) {
			path += "?v=" + OCA.Theming.cacheBuster;
		}

		// Cache the result
		OC.MimeType._mimeTypeIcons[mimeType] = path;
		return path;
	}

};


/**
* This file is automatically generated
* DO NOT EDIT MANUALLY!
*
* You can update the list of MimeType Aliases in config/mimetypealiases.json
* The list of files is fetched from core/img/filetypes
* To regenerate this file run ./occ maintenance:mimetype:update-js
*/
OC.MimeTypeList={
	aliases: {
    "application/coreldraw": "image",
    "application/epub+zip": "text",
    "application/font-sfnt": "image",
    "application/font-woff": "image",
    "application/gpx+xml": "location",
    "application/illustrator": "image",
    "application/javascript": "text/code",
    "application/json": "text/code",
    "application/msaccess": "file",
    "application/msexcel": "x-office/spreadsheet",
    "application/msonenote": "x-office/document",
    "application/mspowerpoint": "x-office/presentation",
    "application/msword": "x-office/document",
    "application/octet-stream": "file",
    "application/postscript": "image",
    "application/rss+xml": "application/xml",
    "application/vnd.android.package-archive": "package/x-generic",
    "application/vnd.lotus-wordpro": "x-office/document",
    "application/vnd.garmin.tcx+xml": "location",
    "application/vnd.google-earth.kml+xml": "location",
    "application/vnd.google-earth.kmz": "location",
    "application/vnd.ms-excel": "x-office/spreadsheet",
    "application/vnd.ms-excel.addin.macroEnabled.12": "x-office/spreadsheet",
    "application/vnd.ms-excel.sheet.binary.macroEnabled.12": "x-office/spreadsheet",
    "application/vnd.ms-excel.sheet.macroEnabled.12": "x-office/spreadsheet",
    "application/vnd.ms-excel.template.macroEnabled.12": "x-office/spreadsheet",
    "application/vnd.ms-fontobject": "image",
    "application/vnd.ms-powerpoint": "x-office/presentation",
    "application/vnd.ms-powerpoint.addin.macroEnabled.12": "x-office/presentation",
    "application/vnd.ms-powerpoint.presentation.macroEnabled.12": "x-office/presentation",
    "application/vnd.ms-powerpoint.slideshow.macroEnabled.12": "x-office/presentation",
    "application/vnd.ms-powerpoint.template.macroEnabled.12": "x-office/presentation",
    "application/vnd.ms-visio.drawing.macroEnabled.12": "application/vnd.visio",
    "application/vnd.ms-visio.drawing": "application/vnd.visio",
    "application/vnd.ms-visio.stencil.macroEnabled.12": "application/vnd.visio",
    "application/vnd.ms-visio.stencil": "application/vnd.visio",
    "application/vnd.ms-visio.template.macroEnabled.12": "application/vnd.visio",
    "application/vnd.ms-visio.template": "application/vnd.visio",
    "application/vnd.ms-word.document.macroEnabled.12": "x-office/document",
    "application/vnd.ms-word.template.macroEnabled.12": "x-office/document",
    "application/vnd.oasis.opendocument.presentation": "x-office/presentation",
    "application/vnd.oasis.opendocument.presentation-template": "x-office/presentation",
    "application/vnd.oasis.opendocument.spreadsheet": "x-office/spreadsheet",
    "application/vnd.oasis.opendocument.spreadsheet-template": "x-office/spreadsheet",
    "application/vnd.oasis.opendocument.text": "x-office/document",
    "application/vnd.oasis.opendocument.text-master": "x-office/document",
    "application/vnd.oasis.opendocument.text-template": "x-office/document",
    "application/vnd.oasis.opendocument.text-web": "x-office/document",
    "application/vnd.openxmlformats-officedocument.presentationml.presentation": "x-office/presentation",
    "application/vnd.openxmlformats-officedocument.presentationml.slideshow": "x-office/presentation",
    "application/vnd.openxmlformats-officedocument.presentationml.template": "x-office/presentation",
    "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet": "x-office/spreadsheet",
    "application/vnd.openxmlformats-officedocument.spreadsheetml.template": "x-office/spreadsheet",
    "application/vnd.openxmlformats-officedocument.wordprocessingml.document": "x-office/document",
    "application/vnd.openxmlformats-officedocument.wordprocessingml.template": "x-office/document",
    "application/vnd.visio": "x-office/document",
    "application/vnd.wordperfect": "x-office/document",
    "application/x-7z-compressed": "package/x-generic",
    "application/x-bzip2": "package/x-generic",
    "application/x-cbr": "text",
    "application/x-compressed": "package/x-generic",
    "application/x-dcraw": "image",
    "application/x-deb": "package/x-generic",
    "application/x-fictionbook+xml": "text",
    "application/x-font": "image",
    "application/x-gimp": "image",
    "application/x-gzip": "package/x-generic",
    "application/x-iwork-keynote-sffkey": "x-office/presentation",
    "application/x-iwork-numbers-sffnumbers": "x-office/spreadsheet",
    "application/x-iwork-pages-sffpages": "x-office/document",
    "application/x-mobipocket-ebook": "text",
    "application/x-perl": "text/code",
    "application/x-photoshop": "image",
    "application/x-php": "text/code",
    "application/x-rar-compressed": "package/x-generic",
    "application/x-tar": "package/x-generic",
    "application/x-tex": "text",
    "application/xml": "text/html",
    "application/yaml": "text/code",
    "application/zip": "package/x-generic",
    "database": "file",
    "httpd/unix-directory": "dir",
    "text/css": "text/code",
    "text/csv": "x-office/spreadsheet",
    "text/html": "text/code",
    "text/x-c": "text/code",
    "text/x-c++src": "text/code",
    "text/x-h": "text/code",
    "text/x-java-source": "text/code",
    "text/x-ldif": "text/code",
    "text/x-python": "text/code",
    "text/x-shellscript": "text/code",
    "web": "text/code",
    "application/internet-shortcut": "link",
    "application/km": "mindmap",
    "application/x-freemind": "mindmap",
    "application/vnd.xmind.workbook": "mindmap"
},
	files: [
    "application",
    "application-pdf",
    "audio",
    "file",
    "folder",
    "folder-drag-accept",
    "folder-encrypted",
    "folder-external",
    "folder-public",
    "folder-shared",
    "folder-starred",
    "image",
    "link",
    "location",
    "mindmap",
    "package-x-generic",
    "text",
    "text-calendar",
    "text-code",
    "text-vcard",
    "video",
    "x-office-document",
    "x-office-presentation",
    "x-office-spreadsheet"
],
	themes: []
};


/*
 * Copyright (c) 2015
 *
 * This file is licensed under the Affero General Public License version 3
 * or later.
 *
 * See the COPYING-README file.
 *
 */

/* global Select2 */

/**
 * Select2 extension for toggling values in a multi-select dropdown
 */
(function(Select2) {

	var Select2FindHighlightableChoices = Select2.class.multi.prototype.findHighlightableChoices;
	Select2.class.multi.prototype.findHighlightableChoices = function () {
		if (this.opts.toggleSelect) {
			return this.results.find('.select2-result-selectable:not(.select2-disabled)');
		}
		return Select2FindHighlightableChoices.apply(this, arguments);
	};

	var Select2TriggerSelect = Select2.class.multi.prototype.triggerSelect;
	Select2.class.multi.prototype.triggerSelect = function (data) {
		if (this.opts.toggleSelect && this.val().indexOf(this.id(data)) !== -1) {
			var self = this;
			var val = this.id(data);

			var selectionEls = this.container.find('.select2-search-choice').filter(function() {
				return (self.id($(this).data('select2-data')) === val);
			});

			if (this.unselect(selectionEls)) {
				// also unselect in dropdown
				this.results.find('.select2-result.select2-selected').each(function () {
					var $this = $(this);
					if (self.id($this.data('select2-data')) === val) {
						$this.removeClass('select2-selected');
					}
				});
				this.clearSearch();
			}

			return false;
		} else {
			return Select2TriggerSelect.apply(this, arguments);
		}
	};

})(Select2);



