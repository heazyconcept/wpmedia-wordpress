import { __ } from '@wordpress/i18n';
import { useBlockProps, InnerBlocks } from '@wordpress/block-editor';
import './editor.scss';
/**
 * The edit function describes the structure of your block in the context of the
 * editor. This represents what the editor will render when the block is used.
 *
 * @see https://developer.wordpress.org/block-editor/reference-guides/block-api/block-edit-save/#edit
 *
 * @return {WPElement} Element to render.
 */
export default function Edit({ attributes, setAttributes }) {
	const ALLOWED_BLOCKS = ["create-block/features", "create-block/main-feature"];
	const template = [
		['create-block/main-feature'],
		['create-block/features'],
		['create-block/features'],
		['create-block/features']
	];

	return (

		<div  {...useBlockProps({
			className: `has-4-columns`
		})}>

			<InnerBlocks
				allowedBlocks={ALLOWED_BLOCKS}
				template={template}
				templateLock={"all"}
			/>
		</div>


	);
}

// export default function 
