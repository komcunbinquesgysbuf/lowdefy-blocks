import React from 'react';
import {blockDefaultProps} from '@lowdefy/block-tools';

const FileUpload = ({blockId, properties, methods, value}) => (
    <div id={blockId} className='ant-row ant-form-item' style={{marginBottom: 0}}>
        <div className='ant-col ant-form-item-label ant-form-item-label-left css-vqci06 ant-col-xs-24 ant-col-sm-24'>
            <label htmlFor={`${blockId}-input`} title={properties.label}>
                <span>{properties.label}</span>
            </label>
        </div>
        <div className='ant-col ant-form-item-control ant-col-xs-24 ant-col-sm-24'>
            <div className="ant-form-item-control-input">
                <div className="ant-form-item-control-input-content">
                    <input
                        id={`${blockId}-input`}
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
                </div>
            </div>
        </div>
    </div>
);

FileUpload.defaultProps = blockDefaultProps;

export default FileUpload;
