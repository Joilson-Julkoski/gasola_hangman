import { Button, Stack } from "@mui/material";
import React, { useEffect } from "react";
import { useGameControl } from "../providers/gameControl";
import { useDevice } from "../providers/isMobile";

function VirtualKeyBoard() {
    const alphabet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ".split("");
    const { tried, handleTry } = useGameControl();
    const { isMobileDevice } = useDevice();

    useEffect(() => {
        const handleKeyPress = (event) => {
            const key = event.key.toUpperCase();
            if (alphabet.includes(key) && !tried.includes(key)) {
                handleTry(key);
            }
        };


        window.addEventListener("keydown", handleKeyPress);


        return () => {
            window.removeEventListener("keydown", handleKeyPress);
        };
    }, [tried, handleTry]);

    return (
        <Stack direction={"row"} flexWrap={"wrap"} gap={"8px"} justifyContent={"center"}>
            {alphabet.map((e) => {
                return (
                    <Button
                        key={e}
                        style={isMobileDevice ? { width: "40px", minWidth: "40px", height: "40px", borderRadius: "16px" } : {}}
                        onClick={() => handleTry(e)}
                        disabled={tried.includes(e)}
                    >
                        {e}
                    </Button>
                );
            })}
        </Stack>
    );
}

export default VirtualKeyBoard;
