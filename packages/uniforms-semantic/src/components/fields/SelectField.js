import React          from 'react';
import classnames     from 'classnames';
import {connectField} from 'uniforms';

// eslint-disable-next-line max-len
const Select = ({disabled, error, field: {allowedValues, optional}, label, name, placeholder, transform, value, onChange, ...props}) =>
    <section className={classnames({disabled, error, required: !optional}, 'field')}>
        {label && (
            <label>
                {label}
            </label>
        )}

        <select
            disabled={disabled}
            name={name}
            onChange={event => onChange(event.target.value)}
            value={value}
            {...props}
        >
            {placeholder && (
                <option value="" disabled hidden>
                    {placeholder}
                </option>
            )}

            {allowedValues.map(value =>
                <option key={value} value={value}>
                    {transform ? transform(value) : value}
                </option>
            )}
        </select>
    </section>
;

export default connectField(Select);
