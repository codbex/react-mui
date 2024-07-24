const {
    Box,
    Fab,
} = MaterialUI;

function FloatingActionButtons() {
    return (
        <Box sx={{ '& > :not(style)': { m: 1 } }}>
            <Fab color="primary" aria-label="add">
                <span class="material-icons">add</span>
            </Fab>
            <Fab color="secondary" aria-label="edit">
                <span class="material-icons">edit</span>
            </Fab>
            <Fab variant="extended">
                <span class="material-icons">navigation</span>
                Navigate
            </Fab>
            <Fab disabled aria-label="like">
                <span class="material-icons">favorite</span>
            </Fab>
        </Box>
    );
}
