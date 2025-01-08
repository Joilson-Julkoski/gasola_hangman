import React, { useEffect, useState } from "react";
import { Box, Stack, Typography } from "@mui/material";
import VirtualKeyBoard from "../components/virtualKeyboard";
import Word from "../components/word";
import { useGameControl } from "../providers/gameControl";
import { useDevice } from "../providers/isMobile";
import GameOverDialog from "../components/gameOverDialog";
import SaveScoreDialog from "../components/saveScoreDialog";

function Home() {

    const { life, score, sortNewWord, gameOver, isSaving, hint  } = useGameControl()
    const { isMobileDevice } = useDevice()

    useEffect(() => {
        sortNewWord()
    }, [])

    return (<Stack sx={{backgroundImage: "url(./bg.png)"}} alignItems={"center"} boxSizing={"border-box"} padding={"20px"} height={"100vh"} width={"100vw"} direction={isMobileDevice ?  "column" : "row"}>
        {gameOver && <GameOverDialog/>}
        {isSaving && <SaveScoreDialog/>}
        

        <img style={{ maxWidth: isMobileDevice ? "150px" :  "350px" , width: "100%" }} src={`life${life}.png`} alt="" />
        <Stack direction={"column"} alignItems={"center"} width={"100%"} gap={"24px"}>
            <Typography style={{ fontSize: isMobileDevice ? "16px" : "24px" }}>
                Pontuação: {score}
            </Typography>
            <Typography style={{ fontSize: isMobileDevice ? "16px" : "24px" }}>
                Você consegue adivinhar?
            </Typography>
            <Typography style={{ fontSize: isMobileDevice ? "16px" : "24px" }}>
                Dica: {hint}
            </Typography>

            <Word word={"teste"} />
            <Box maxWidth={"700px"}>
                <VirtualKeyBoard />
            </Box>
        </Stack>
    </Stack>)
}

export default Home