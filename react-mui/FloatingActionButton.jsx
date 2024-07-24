const {
    Box,
    Fab,
} = MaterialUI
const {
    AddIcon,
    EditIcon,
    FavoriteIcon,
    NavigationIcon
} = MaterialUIIcons

function FloatingActionButtons() {
    return (
        <Box sx={{ '& > :not(style)': { m: 1 } }}>
            <Fab color="primary" aria-label="add">
                <AddIcon />
            </Fab>
            <Fab color="secondary" aria-label="edit">
                <EditIcon />
            </Fab>
            <Fab variant="extended">
                <NavigationIcon sx={{ mr: 1 }} />
                Navigate
            </Fab>
            <Fab disabled aria-label="like">
                <FavoriteIcon />
            </Fab>
        </Box>
    );
}
