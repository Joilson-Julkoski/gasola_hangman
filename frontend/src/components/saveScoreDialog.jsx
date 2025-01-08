import React, { useEffect, useState } from "react";
import { Dialog, DialogActions, DialogContent, DialogTitle, Button, TextField, Typography } from "@mui/material";
import { useGameControl } from "../providers/gameControl";
import { getTopThreeAPI } from "../service/api";


const SaveScoreDialog = () => {
    const { isSaving, setIsSaving, name, setName, handleSaveScore } = useGameControl();

    const [ranking, setRanking] = useState([])

    useEffect(() => {
        const fetchTopThree = async () => {
            const topThree = await getTopThreeAPI();
            setRanking(topThree ?? []);
        };

        fetchTopThree();
    }, []);
    return (
        <Dialog
            open={isSaving}
            onClose={() => setIsSaving(false)}
            maxWidth="sm"
            fullWidth
            sx={{ maxHeight: "80vh", overflowY: "auto" }}
        >
            <DialogTitle>Salvar sua Pontuação</DialogTitle>
            <DialogContent>
                {ranking.map((entry, index) => (
                    <Typography key={index} variant="h6">

                        Top {index + 1}: {entry.name} | {entry.score} pontos
                    </Typography>
                ))}

                <TextField
                    label="Digite seu nome"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    fullWidth
                />
            </DialogContent>
            <DialogActions>
                <Button onClick={handleSaveScore} sx={{ color: "white" }}>
                    Salvar
                </Button>
                <Button onClick={() => setIsSaving(false)} sx={{ color: "white" }}>
                    Cancelar
                </Button>
            </DialogActions>
        </Dialog>
    );
};

export default SaveScoreDialog;
