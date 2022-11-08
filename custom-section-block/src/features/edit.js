import { useBlockProps, RichText, MediaPlaceholder  } from '@wordpress/block-editor';
import { __ } from '@wordpress/i18n';
import { Spinner,withNotices } from "@wordpress/components";
import { isBlobURL } from '@wordpress/blob';

 function Edit({attributes, setAttributes, noticeUI, noticeOperations}){
    const{title, details, url, id} = attributes;

    const onSelectImage = (newImage)=>{
        if (!newImage || !newImage.url) {
            setAttributes({url: undefined, id: undefined});
            return;
        }
           setAttributes({url: newImage.url, id: newImage.id });
    }
    const onUploadError = (message) => {
        noticeOperations.createErrorNotice(message)
    }

    return (
    <div {...useBlockProps()}>
        {url && ( 
        <div className={`wp-block-create-block-custom-section-block-img${isBlobURL(url)? 'is-loading': ''}`}>
            <img src={url} /> 
            {isBlobURL(url)&& <Spinner/>}
        </div>
        )}
        <MediaPlaceholder 
        icon="image-crop" 
        onSelect={onSelectImage} 
        accept="image/*" 
        allowedTypes={['image']} 
        disableMediaButtons={url}
        notices={noticeUI}
        onError={onUploadError}
        />
        <RichText placeholder={__("Title", "features")} tagName="h2" value={title} onChange={ ( title ) => setAttributes( { title: title } ) }/>
        <RichText placeholder={__("Details", "features")} tagName="p" value={details}  onChange={ ( details ) => setAttributes( { details: details } ) } />
    </div>
    );
    
}
export default withNotices(Edit);