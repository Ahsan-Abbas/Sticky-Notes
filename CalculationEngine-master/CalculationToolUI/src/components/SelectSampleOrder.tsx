import { useState, useEffect } from 'react';
import isEmpty from 'lodash/isEmpty';
import "./SelectSampleOrder.scss";

interface SelectSampleOrderProps {
  label: string;
  options: ValueSampleOrderpage[];
  onChange?: (value: string, optionID: string | number) => void;
  value?: string;
  key?: string;
}

interface state {
  name: string;
  value: string | number;
}

const SelectSampleOrder = ({
  label = "",
  options,
  onChange = () => { },
  value,
  key = 'name',
}: SelectSampleOrderProps) => {
  const [state, setState] = useState<state>({ value: '', name: '' });
  const [showList, setShowList] = useState<boolean>(false);
  const handleChange = (option: state): void => {
    setState({ name: option.name, value: option.value });
    onChange(`${key === 'name' ? option.name : option.value}`, option.value);
    setShowList(!showList);
  }

  const closeAllDropdowns = () => {
    const element = document.getElementById(`select-sample-order-${label}`);
    if (element) {
      if (showList) {
        setShowList(!showList)

      }
    }
  };
  function handleDropdown(event: Event) {
    if (showList) {
      const target = event?.target as HTMLElement;
      if (target.closest(`.select-sample-order`) === null) {
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
    if (!isEmpty(options) && value) {
      const index: number = options.findIndex((item: any) => item[`${key}`] === value)
      if (index === -1) {
        onChange('', '');
        setState({ value: '', name: '' })
      } else {
        setState({ value: options[index].value, name: options[index].name })
      }
    }
  }, [options])

  return <>
    <div id={`select-sample-order-${label}`} onClick={() => setShowList(!showList)} className="select-sample-order">
      <input
        placeholder={label}
        value={state.name}
        type='text'
        className={value ? "select-content" : "select-content empty"}
        style={{ cursor: "pointer" }}
        readOnly />
      <div className="arrow-content" />
    </div>

    <div className={showList ? "options" : 'display-none'}>
      <ul >{options.map(opt =>
        <li className={opt['value'] === state.value ? 'selected' : ''}
          onClick={() => handleChange({ value: opt.value, name: opt.name })}
          key={opt.value} value={opt.value}>{opt.name}</li>)}
      </ul>
    </div>
  </>;
}
export default SelectSampleOrder;
