import { createContext, useState } from "react";

const FormProvinder = ({ children }: any) => {
    const [model, setModel] = useState({});
    const [validation, setValidation] = useState([]);
    const [error, setError] = useState({ username: 'false' });

    const onChangeModel = (e: any) => {
        const name = e.target.name;
        console.log(name);
        const value = e.target.value;
        console.log(value);
        setModel((x: any) => ({ ...x, [name]: value }));
    }

    const context: IFormContext = {
        model: model,
        validation: validation,
        error: error,
        setModel: setModel,
        setValidation: setValidation,
        setError: setError,
        onChangeModel: onChangeModel,
    };

    return <FormContext.Provider value={context} children={children} />
}

export interface IFormContext {
    model: any,
    validation: any,
    error: any,
    setModel: any,
    setValidation: any,
    setError: any,
    onChangeModel: (e: any) => void,
}

const defaultContext: IFormContext = {
    model: {},
    validation: {},
    error: {},
    setModel: () => { },
    setValidation: () => { },
    setError: () => { },
    onChangeModel: (e: any) => { },
}

const FormContext = createContext<IFormContext>(defaultContext)

export { FormContext, FormProvinder };