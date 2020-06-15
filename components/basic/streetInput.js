import { useState, useEffect, useRef } from 'react';
import { Box, InputField, InvalidBox, StreetWrapper } from './index';
import usePlacesAutocomplete, { getZipCode, getGeocode } from 'use-places-autocomplete';
import useOnclickOutside from 'react-cool-onclickoutside';

const StreetInput = (props) => {    
    const [start, setStart] = useState(false);
    const [edit, setEdit] = useState(false);
    const [valid, setValid] = useState(false);

    const borderStyle = {
      boxShadow: edit ? '0px 0px 0px 2px rgba(26,178,44,0.5)' : start && !valid ? '0px 0px 0px 2px rgba(201, 31, 63, 0.5)' : 'none'
    };

    const {
        ready,
        value,
        suggestions: { status, data },
        setValue,
        clearSuggestions
      } = usePlacesAutocomplete({
        types: ["regions", "postal_code", "geocode"]
      });
    const ref = useRef();

    const handleInput = e => {
    // Update the keyword of the input element
        setValue(e.target.value);
    };

    const parseSelected = (description) => {        
        var splitted = description.split(", ");
        const street = splitted[0];
        const city = splitted[1];
        const states = splitted[2].split(" ")[0];
        const zipcode = splitted[2].split(" ")[1];
        const country = splitted[3];
        setValue(street);
        props.fillAddressForm(country, states, city, zipcode);
        setValid(true);
    }

    const handleSelect = ({ description }) => () => {
        // When user selects a place, we can replace the keyword without request data from API
        // by setting the second parameter as "false"        

        clearSuggestions();
        getGeocode({address: description}).then(res => {
          console.log(res);
          parseSelected(res[0].formatted_address);
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
                onBlur={() => setEdit(false)}
                onFocus={() => {setEdit(true); setStart(true)}}
            />
            {status === 'OK' && <ul>{renderSuggestions()}</ul>}
            {(start && !valid && !edit) && <InvalidBox>
              Please Enter A Valid Street Address
            </InvalidBox>}
            
        </StreetWrapper>
        
    )
}

export default StreetInput;