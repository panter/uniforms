import React          from 'react';
import {connectField} from 'uniforms';

const Bool = ({disabled, name, label, value, onChange, ...props}) =>
    <section {...props}>
        <input
            checked={value}
            disabled={disabled}
            name={name}
            onChange={() => disabled || onChange(!value)}
            type="checkbox"
        />

        {label && (
            <label onClick={() => disabled || onChange(!value)}>
                {label}
            </label>
        )}
    </section>
;

export default connectField(Bool);
