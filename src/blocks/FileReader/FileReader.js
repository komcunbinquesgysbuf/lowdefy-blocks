import React from 'react';
import {blockDefaultProps} from '@lowdefy/block-tools';

const FileUpload = ({blockId, properties, methods, value}) => (
    <label>
        {properties.label || 'Label'}:
        <input
            data-testid={`${blockId}-input`}
            id={blockId}
            name='file'
            type="file"
            onChange={({target: {files: [file]}}) =>
                (reader => {
                    reader.onload = ({target: {result}}) => methods.setValue({
                        name: file.name,
                        data: result.replace(/^data:.*;base64,/, '')
                    });
                    reader.readAsDataURL(file);
                })(new FileReader())
            }
        />
    </label>
);

FileUpload.defaultProps = blockDefaultProps;

export default FileUpload;
