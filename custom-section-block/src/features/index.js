import { registerBlockType } from '@wordpress/blocks';
import { __ } from '@wordpress/i18n';
import Edit from './edit';
import Save from './save';

registerBlockType('create-block/features', {
    title: __('Features'),
    description: 'Feature block for custom blocks',
    category: 'widget',
    icon: "archive",
    supports:{
        reusable: false,
        html: false
    },
    attributes: {
        title:{
            type:"string",
            source:"html",
            selector: "h2"
        },
        details:{
            type:"string",
            source:"html",
            selector: "p"
        },
        id:{
            type:'number'
        },
        url: {
            type: 'string',
            source: 'attribute',
            selector: 'img',
            attribute: 'src'
        }
    },
    parent: ["create-block/custom-section-block"],
    edit: Edit,
    save: Save
});