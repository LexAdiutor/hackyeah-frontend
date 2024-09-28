import React from "react";

interface Question {
	name: string;
	type: string;
	title: string;
	description?: string;
	required: boolean;
	showOn?: string;
	vanishOn?: string;
    default?: string;
}

interface RadioQuestion extends Question {
	type: "radio";
	options: string[];
}

interface SelectQuestion extends Question {
	type: "select";
	options: string[];
}

interface TextQuestion extends Question {
	type: "text";
	title: string;
}

export type InputType = RadioQuestion | SelectQuestion | TextQuestion;

const Input = ({question, form, onChange}: {question: InputType, form: any, onChange: (data: any) => void}) => {
    const {name, type, title, description, required, showOn, vanishOn, ...defaultWrapper} = question;

    function shouldShow() {
        const showRequirements = showOn?.split('|').map((str) => {
            const [key, value] = str.split(':');
            return form[key] === value;
        });

        const vanishRequirements = vanishOn?.split('|').map((str) => {
            const [key, value] = str.split(':');
            return form[key] !== value;
        });

        const result = (!showOn || showRequirements?.some((req) => req)) && (!vanishOn || vanishRequirements?.some((req) => req));

        if (!result)
            form[name] = '';
        
        return result;
    }

	return (
        <div style={{ paddingBottom: 32, display: shouldShow() ? 'block' : 'none' }}>
            <p style={{fontSize: 24}}>{title}<span style={required ? { color: 'red' } : {}}>{required ? '*' : ' (Opcjonalnie)'}</span></p>
            {type === 'radio' && (
                (question as RadioQuestion).options.map((option, index) => (
                    <div style={{marginLeft: 24}} key={index}>
                        <input type="radio" id={option} checked={form[name] === option} name={name} value={option} onChange={(e) => {
                            onChange(e.target.value);
                        }} />
                        <label style={{marginLeft: 4}} htmlFor={option}>{option}</label>
                    </div>
                ))
            )}
            {type === 'select' && (
                <select name={name} id={name} value={form[name]} onChange={(e) => {
                    onChange(e.target.value);
                }}>
                    {(question as SelectQuestion).options.map((option, index) => (
                        <option key={index} value={option}>{option}</option>
                    ))}
                </select>
            )}
            {type === 'text' && (
                <input type="text" name={name} id={name} onChange={(e) => {
                    onChange(e.target.value);
                }} />
            )}
        </div>
    );
};

export default Input;
