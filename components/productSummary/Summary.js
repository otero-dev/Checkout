import React from 'react';
import { Box, Headline, FeatureLine } from '../basic'

const getHtmlString = (value) => {
    var obj = JSON.parse(value);
    return obj.html;
}

const Summary = (props) => {
    let tmp_headline = '', tmp_features = [];
    if(props.metadata.length > 0) {
        props.metadata.map(field => {
            if(field.key === 'headline') tmp_headline = field.value;
            if(field.key === 'feature_1') tmp_features[0] = field.value;
            if(field.key === 'feature_2') tmp_features[1] = field.value;
            if(field.key === 'feature_3') tmp_features[2] = field.value;
            if(field.key === 'feature_4') tmp_features[3] = field.value;
        })        
        tmp_headline = getHtmlString(tmp_headline);
        tmp_features[0] = getHtmlString(tmp_features[0]);
        tmp_features[1] = getHtmlString(tmp_features[1]);
        tmp_features[2] = getHtmlString(tmp_features[2]);
        tmp_features[3] = getHtmlString(tmp_features[3]);
    };   
    
    const headline = tmp_headline;
    const features = tmp_features;
    
    return (
        <Box width={'50%'} m='auto'>
            <Headline dangerouslySetInnerHTML={{__html: headline}} />
            {features.length > 0 && <React.Fragment>
                {features.map(feature => <FeatureLine dangerouslySetInnerHTML={{__html: feature}} />)}
            </React.Fragment>}
        </Box>
    )
}

export default Summary;