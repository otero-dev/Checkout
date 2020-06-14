import { useState, useEffect, useRef } from 'react';
import { Box, InputField, InvalidBox, StreetWrapper } from './index';
import usePlacesAutocomplete, { getZipCode, getGeocode } from 'use-places-autocomplete';
import useOnclickOutside from 'react-cool-onclickoutside';

const StreetInput = (props) => {    
    const [active, setActive] = useState(false);
    const [valid, setValid] = useState(false);

    const borderStyle = {
        boxShadow: !valid ? '0px 0px 0px 2px rgba(201, 31, 63, 0.5)' : active ? '0px 0px 0px 2px rgba(26,178,44,0.5)' : 'none'
    };

    const {
        ready,
        value,
        suggestions: { status, data },
        setValue,
        clearSuggestions
      } = usePlacesAutocomplete({
        types: ["regions"]
      });
    const ref = useRef();

    const handleInput = e => {
    // Update the keyword of the input element
        setValue(e.target.value);
    };

    const parseSelected = (description) => {        
        var splited = description.split(", ");
        const country = splited.length > 0 ? splited[splited.length - 1] : "";
        const states = splited.length > 1 ? splited[splited.length - 2] : "";
        const city = splited.length > 2 ? splited[splited.length - 3] : "";
        const streetAddress = splited.length > 3 ? splited[0] : "";
        setValue(streetAddress);
        props.fillAddressForm(country, states, city);
    }

    const handleSelect = ({ description }) => () => {
        // When user selects a place, we can replace the keyword without request data from API
        // by setting the second parameter as "false"
        parseSelected(description);

        clearSuggestions();
        getGeocode({address: description}).then(res => {
            getZipCode(res).then(zipRes=>console.log(zipRes));
        })
        .catch(error => {
            console.log(error);
        })
      };

    const renderSuggestions = () =>
      data.map(suggestion => {
        const {
          id,
          structured_formatting: { main_text, secondary_text }
        } = suggestion;
  
        return (
          <li
            key={id}
            onClick={handleSelect(suggestion)}
          >
            <strong>{main_text}</strong> <small>{secondary_text}</small>
          </li>
        );
      });

    useOnclickOutside(ref, () => {
        clearSuggestions();
    });

    return (
        <StreetWrapper ref={ref}>
            <InputField
                value={value}
                onChange={handleInput}
                disabled={!ready}
                placeholder="Street Address"
                style = {borderStyle}
            />
            {status === 'OK' && <ul>{renderSuggestions()}</ul>}
        </StreetWrapper>
        
    )
}

export default StreetInput;