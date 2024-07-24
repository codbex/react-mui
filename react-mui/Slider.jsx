const {
    Box,
    Stack,
    Slider
} = MaterialUI;

function ContinuousSlider() {
    const [value, setValue] = React.useState(30);

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };

    return (
        <Box sx={{ width: 200 }}>
            <Stack spacing={2} direction="row" sx={{ mb: 1 }} alignItems="center">
                <span class="material-icons">volume_down</span>
                <Slider aria-label="Volume" value={value} onChange={handleChange} />
                <span class="material-icons">volume_up</span>
            </Stack>
            <Slider disabled defaultValue={30} aria-label="Disabled slider" />
        </Box>
    );
}
