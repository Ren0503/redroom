import React, { useState } from 'react';

export const useForm = () => {
    const [values, setValues] = useState({});

    const onChange = (e: any) =>
        setValues({ ...values, [e.target.name]: e.target.value });

    return {
        onChange,
        values
    };
};
