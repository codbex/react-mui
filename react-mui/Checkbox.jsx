const { Checkbox } = MaterialUI

const label = { inputProps: { 'aria-label': 'Checkbox demo' } };

function Checkboxes() {
    return (
        <div>
            <Checkbox {...label} defaultChecked />
            <Checkbox {...label} />
            <Checkbox {...label} disabled />
            <Checkbox {...label} disabled checked />
        </div>
    );
}
