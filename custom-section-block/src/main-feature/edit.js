import { useBlockProps, RichText, MediaPlaceholder  } from '@wordpress/block-editor';
import { __ } from '@wordpress/i18n';
import { isBlobURL } from '@wordpress/blob';
import { Spinner,withNotices } from "@wordpress/components";



function Edit({attributes, setAttributes, noticeOperations, noticeUI}){
    const{title, details, id, url} = attributes;
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
        
        <RichText placeholder={__("Title", "custom-section-block")} tagName="h2" value={title} onChange={ ( title ) => setAttributes( { title: title } ) }/>
        <RichText placeholder={__("Details", "custom-section-block")} tagName="p" value={details}  onChange={ ( details ) => setAttributes( { details: details } ) } />
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
    </div>
    );
}

export default withNotices(Edit);