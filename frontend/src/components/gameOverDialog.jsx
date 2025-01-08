import React from "react";
import { Dialog, DialogActions, DialogContent, DialogTitle, Button, Typography } from "@mui/material";
import { useGameControl } from "../providers/gameControl";

const GameOverDialog = () => {
    const { gameOver, word, score, handleRestart, setIsSaving } = useGameControl();

    return (
        <Dialog open={gameOver} onClose={handleRestart} maxWidth="sm" fullWidth>
            <DialogTitle>Fim de Jogo</DialogTitle>
            <DialogContent>
                <Typography variant="h6">A palavra era: {word}</Typography>
                <Typography variant="h6">Sua pontuação: {score}</Typography>
            </DialogContent>
            <DialogActions>
                <Button onClick={handleRestart} sx={{ color: "white" }}>
                    Reiniciar
                </Button>
                <Button onClick={() => setIsSaving(true)} sx={{ color: "white" }}>
                    Salvar
                </Button>
            </DialogActions>
        </Dialog>
    );
};

export default GameOverDialog;
