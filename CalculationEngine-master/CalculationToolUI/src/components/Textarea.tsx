import React, { useState } from 'react'
import "./Textarea.scss";

type TextareaProps = {
    maxLength?: number;
    value?: string;
    required?: boolean;
    onChange?: (value: string) => void
    rows?: number
}

const Textarea = (props: TextareaProps) => {
    const { maxLength = 500, value = '', required = false, rows = 4, onChange = () => { } }: TextareaProps = props;
    const [state, setState] = useState<string>(value || '');
    const handleChange = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
        const eventValue: string = event?.target?.value;
        if (eventValue.length <= maxLength) {
            setState(eventValue);
            if (onChange) {
                onChange(eventValue)
            }

        }
    }
    return (
        <div className='textarea'>
            <textarea rows={rows} onChange={handleChange} value={state} required={required} maxLength={maxLength}>
            </textarea>
            <div className="textarea-content">
                {`${state.length} / ${maxLength}`}
            </div>
        </div>

    )
}

export default Textarea