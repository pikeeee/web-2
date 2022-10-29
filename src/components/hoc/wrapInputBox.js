import KeyCode from 'keycode-js';
import { compose, withState, withHandlers } from 'recompose';

export default compose(
    withState('value', 'setValue', props => {
        console.log('got props', props);
        return props.value || ''
    }),
    withHandlers({
        handleKeyUp: ({ addNew, setValue }) => e => {
            const text = e.target.value.trim();
            const day = new Date();
            const date = day.getFullYear()+'-'+(day.getMonth()+1)+'-'+day.getDate();
            const time = day.getHours() + ":" + day.getMinutes() + ":" + day.getSeconds();
            const time_create = date+' '+time;
            if (e.keyCode === KeyCode.KEY_RETURN && text) {
                addNew(text, time_create);
                setValue('');
            }
        },
        handleChange: ({ setValue }) => e => {
            setValue(e.target.value);
        }
    })
);
