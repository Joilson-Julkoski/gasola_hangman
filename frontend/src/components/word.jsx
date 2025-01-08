import { Paper, Stack } from "@mui/material";
import React from "react";
import { useGameControl } from "../providers/gameControl";
import { useDevice } from "../providers/isMobile";

function Word() {

    const { word, tried, normalizedWord } = useGameControl()
    const { isMobileDevice } = useDevice()

    return (
        <Stack direction={"row"} gap={isMobileDevice? "16px" : "24px"} justifyContent={"center"} flexWrap={"wrap"}>
            {word && word.split("").map((e) => {
                return (
                    <Paper style={isMobileDevice ? {width: "60px", height: "60px"} : {width: "100px", height: "100px"}}>
                        <Stack style={{width: "100%", height: "100%", alignItems: "center", justifyContent: "center"}}>
                            {!/^[a-zA-Z\u00C0-\u024F]$/.test(e) || tried.includes(e.normalize("NFD").replace(/[\u0300-\u036f]/g, "")) ? e : ""}
                        </Stack>
                    </Paper>
                );
            })}
        </Stack>
    )

}

export default Word;