import React from 'react';
import {blockDefaultProps} from '@lowdefy/block-tools';

const FileUpload = ({blockId, properties, required, validation: {errors: [error]}, methods: {makeCssClass, setValue, ...otherMethods}, value, ...rest}) => {
    const wrapperClass = makeCssClass([{marginBottom: 0}, properties.style,]);
    const labelClass = makeCssClass([{
        display: 'block',
        border: '2px dashed',
        padding: '24px',
        backgroundColor: '#fff'
    }]);
    const inputClass = makeCssClass([{
        position: 'absolute',
        width: '1px',
        height: '1px',
        clip: 'rect(1px, 1px, 1px, 1px)',
        overflow: 'hidden',
    }]);
    const handleDrop = e => {
        e.stopPropagation();
        e.preventDefault();
    };
    const handleFile = file => (reader => {
        reader.onload = ({target: {result}}) => setValue({
            name: file.name,
            data: result.replace(/^data:.*;base64,/, '')
        });
        reader.readAsDataURL(file);
    })(new FileReader());
    return (
        <div
            id={blockId}
            className={`ant-row ant-form-item ${wrapperClass}${error && ' ant-form-item-has-feedback ant-form-item-has-error'}`}
        >
            <div
                className='ant-col ant-form-item-label ant-form-item-label-left ant-col-xs-24 ant-col-sm-24'>
                <label htmlFor={`${blockId}-input`} title={properties.label} className={required ? 'ant-form-item-required' : ''}>
                    <span>{properties.label || 'Label'}</span>
                </label>
            </div>
            <div
                className='ant-col ant-form-item-control ant-col-xs-24 ant-col-sm-24'
                onDragEnter={handleDrop}
                onDragOver={handleDrop}
                onDrop={e => {
                    const {dataTransfer: {files: [file]}} = e;
                    handleDrop(e);
                    handleFile(file);
                }}
            >
                <label htmlFor={`${blockId}-input`} className={labelClass}>
                    <p className={value || !error ? '' : 'ant-form-item-explain ant-form-item-extra'}>
                        {value
                            ? <em>{value.name}</em>
                            : properties.description || 'Drop a document here or click to open the file chooser...'
                        }
                    </p>
                    <div className="ant-col ant-col-xs-24 ant-col-sm-24 ant-col-md-24">
                        <a className="ant-btn ant-btn-default">
                            <span>
                                {value
                                    ? properties.buttonChangeLabel || 'Choose another…'
                                    : properties.buttonLabel || 'Choose…'
                                }
                            </span>
                        </a>
                    </div>
                </label>
                <input
                    id={`${blockId}-input`}
                    className={inputClass}
                    name='file'
                    type="file"
                    onChange={({target: {files: [file]}}) => handleFile(file)}
                />
            </div>
        </div>
    );
};

FileUpload.defaultProps = blockDefaultProps;

export default FileUpload;
