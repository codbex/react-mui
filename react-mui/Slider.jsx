const {
    Box,
    Stack,
    Slider
} = MaterialUI;

// import VolumeDown from '@mui/icons-material/VolumeDown';
// import VolumeUp from '@mui/icons-material/VolumeUp';

function ContinuousSlider() {
    const [value, setValue] = React.useState(30);

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };

    return (
        <Box sx={{ width: 200 }}>
            <Stack spacing={2} direction="row" sx={{ mb: 1 }} alignItems="center">
                <Slider aria-label="Volume" value={value} onChange={handleChange} />
            </Stack>
            <Slider disabled defaultValue={30} aria-label="Disabled slider" />
        </Box>
    );
    // return (
    //     <Box sx={{ width: 200 }}>
    //         <Stack spacing={2} direction="row" sx={{ mb: 1 }} alignItems="center">
    //             <VolumeDown />
    //             <Slider aria-label="Volume" value={value} onChange={handleChange} />
    //             <VolumeUp />
    //         </Stack>
    //         <Slider disabled defaultValue={30} aria-label="Disabled slider" />
    //     </Box>
    // );
}
