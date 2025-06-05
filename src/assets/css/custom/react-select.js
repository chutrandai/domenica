export const customStyles = {

    container: (provided, state) => ({
        ...provided,
        paddingLeft: '0px',
        paddingRight: '0px'
    }),
    control: (provided, state) => ({
        ...provided,
        background: state.isDisabled ? '#e0e5ec !important' : '#fff',
        borderColor: '#b5b5c3',
        minHeight: '36px',
        height: '36px',
        boxShadow: null,
        paddingLeft: '0.325rem',
        paddingTop: '0.5px',
        fontSize: '.925rem',
        borderRadius: '8px',
        // cursor: 'pointer'
    }),
    valueContainer: (provided, state) => ({
        ...provided,
        height: 'auto',
        // padding: '0 6px'
    }),
    input: (provided, state) => ({
        ...provided,
        margin: '0px'
    }),
    singleValue: (provided, state) => ({
        ...provided,
        color: '#000'
    }),
    indicatorSeparator: state => ({
        display: 'none',
    }),
    indicatorsContainer: (provided, state) => ({
        ...provided,
        height: '36px',
    }),
    menuPortal: provided => ({ ...provided, zIndex: 10000000 }),
    option: (styles, { data, isDisabled, isFocused, isSelected }) => {
        return {
            ...styles,
            backgroundColor: isSelected || isFocused ? '#F3F6F9' : '',
            color: '#3f4254',
            cursor: isDisabled ? 'not-allowed' : 'pointer',
        };
    }
};