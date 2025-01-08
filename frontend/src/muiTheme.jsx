import { createTheme } from "@mui/material/styles";

const theme = createTheme({
    palette: {
        primary: {
            main: "#FD853A",
        },
    },
    typography: {
        fontFamily: "'Roboto', 'Helvetica', 'Arial', sans-serif",
        h1: {
            fontSize: "2.5rem",
            fontWeight: 700,
        },
        h2: {
            fontSize: "2rem",
            fontWeight: 600,
        },
        body1: {
            fontSize: "1rem",
            lineHeight: 1.5,
        },
    },
    components: {
        MuiTextField: {
            styleOverrides: {
                root: {
                    "& .MuiOutlinedInput-root": {
                        "& input": {
                            color: "white", // Texto do input
                        },
                        "& fieldset": {
                            borderColor: "white", // Borda padrão
                        },
                        "&:hover fieldset": {
                            borderColor: "white", // Borda ao passar o mouse
                        },
                        "&.Mui-focused fieldset": {
                            borderColor: "white", // Borda ao focar
                        },
                    },
                    "& .MuiInputLabel-root": {
                        color: "white", // Texto do label
                    },
                    "& .MuiInputLabel-root.Mui-focused": {
                        color: "white", // Label ao focar
                    },
                },
            },
        },
        MuiPaper: {
            variants: [{
                props: { variant: "outlined" },
                style: {
                    borderRadius: "24px",
                    backgroundColor: "rgba(253, 133, 58, 0.32)",
                }
            },
            {
                props: { variant: "elevation" }, style: {
                    color: "white",
                    fontSize: "40px",
                    borderRadius: "24px",
                    backgroundColor: "#FD853A",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",


                }
            }]
        }, MuiButton: {
            variants: [
                {
                    props: { disabled: false },
                    style: {
                        backgroundColor: "rgba(253, 133, 58, 0.12)",
                        color: "#FD853A",
                        border: "1px solid #FD853A",
                        borderRadius: "24px",
                        height: "60px",
                        boxShadow: "0px 7px 30px 0px rgba(0,0,0,0.25)",
                    }
                },
                {
                    props: { disabled: true },
                    style: {
                        color: "#606060",
                        borderRadius: "24px",
                        height: "60px",
                    }
                },
            ]
        }
    }


});

export default theme;
