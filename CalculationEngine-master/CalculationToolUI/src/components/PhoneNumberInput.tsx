import { useState, useEffect, useMemo } from 'react';
import isEmpty from 'lodash/isEmpty';
import './PhoneNumberInput.scss';

type state = { value: string, name: string }

const PhoneNumberInput = (props: any) => {
    const { phoneNumber = "", onChange = () => { }, RF_TELEPHONE_COUNTRY_CODE = '' } = props;
    const countryCodes = useMemo(() => {
        const options: state[] = [];
        RF_TELEPHONE_COUNTRY_CODE.split('|').forEach((element: string) => {
            const option = element.split(':');
            options.push({ name: option[0], value: option[1] })
        })

        return options;

    }, [RF_TELEPHONE_COUNTRY_CODE])
    const [statePhoneNumber, setStatePhoneNumber] = useState('');

    const [state, setState] = useState<state>(!isEmpty(countryCodes) ? countryCodes[0] : { value: '', name: '' });
    const [showList, setShowList] = useState<boolean>(false);
    const handleChange = (obj: state): void => {
        setState(obj);
        onChange(`${obj.value}`);
        setShowList(!showList)
    }
    const closeAllDropdowns = () => {
        const element = document.getElementById(`phone-number-sample-order`);
        if (element) {
            if (showList) {
                setShowList(!showList)

            }
        }
    };
    function handleDropdown(event: Event) {
        if (showList) {
            const target = event?.target as HTMLElement;
            if (target.closest(`.phone-number-sample-order`) === null) {
                closeAllDropdowns();
            }
        }
    };
    useEffect(() => {
        if (showList) {
            document.addEventListener("click", handleDropdown);
            return () => document.removeEventListener('click', handleDropdown)
        }
    }, [showList])
    useEffect(() => {
        if (!isEmpty(countryCodes) && phoneNumber.length > 10) {
            const reverse = (a: string): string => a.split('').reverse().join('');
            const phoneNumberReverse: string = reverse(phoneNumber)
            const code: string = reverse(phoneNumberReverse.slice(10, phoneNumberReverse.length));
            const index: number = countryCodes.findIndex((item: state) => item.value === code);
            if (index > -1) {
                setState({ ...countryCodes[index] })
                setStatePhoneNumber(reverse(phoneNumberReverse.slice(0, 10)));
            }
        }
    }, []);
    return (
        <>
            <div className="input-wrapper">

                <div id={`phone-number-sample-order`} onClick={() => setShowList(!showList)} className="phone-number-sample-order">

                    <div className="phone-select-content">{state.value || ''}</div>

                    <div className="phone-arrow-content" />
                </div>
                <input
                    type="tel"
                    className="phone-number-combined-input"
                    value={statePhoneNumber}
                    onChange={e => {
                        if (e.target.value.length < 11) {
                            setStatePhoneNumber(e.target.value);
                            if (onChange) {
                                onChange?.(e.target.value, state.value)
                            }
                        }
                    }}
                />
            </div>
            <div className={showList ? "options" : 'display-none'}>
                <ul >{countryCodes.map((opt, index) =>
                    <li className={opt['value'] === state.value ? 'selected' : ''}
                        onClick={() => handleChange({ value: opt.value, name: opt.name })}
                        key={index} value={opt.value}>{`${opt.name} (${opt.value})`}</li>)}</ul>
            </div>
        </>
    );
};

export default PhoneNumberInput;