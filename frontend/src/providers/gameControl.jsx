import React, { createContext, useContext, useState } from "react";
import { saveScoreAPI, sortNewWordAPI } from "../service/api";


const GameControlContext = createContext();

export const GameControlProvider = ({ children }) => {
  const [tried, setTried] = useState([]);
  const [score, setScore] = useState(0);
  const [word, setWord] = useState();
  const [life, setLife] = useState(5);
  const [hint, setHint] = useState("")

  const [gameOver, setGameOver] = useState(false);
  const [isSaving, setIsSaving] = useState(false);
  const [name, setName] = useState("");

  const sortNewWord = async () => {
    const data = await sortNewWordAPI();
    if (data) {
      setWord(data.word.toUpperCase())
      setHint(data.hint)
    };
  };

  const handleTry = (opt) => {
    const normalizedWord = word.normalize("NFD").replace(/[\u0300-\u036f]/g, "");
    const _nTried = [...tried, opt];

    if (!normalizedWord.toUpperCase().includes(opt)) setLife(life - 1);
    setTried(_nTried);

    const allLettersGuessed = normalizedWord
      .split("")
      .filter((e) => /^[a-zA-Z\u00C0-\u024F]$/.test(e))
      .every((e) =>
        _nTried.includes(e.normalize("NFD").replace(/[\u0300-\u036f]/g, "").toUpperCase())
      );

    console.log(life)
    console.log(gameOver)

    if (allLettersGuessed) {
      setScore(score + word.length);
      setTried([]);
      sortNewWord();
      return;
    }

    if (life <= 1) setGameOver(true);
  };

  const handleSaveScore = async () => {
    if (name.length < 1) {return alert("Preencha o nome!")}
    saveScoreAPI(name, score)
    setIsSaving(false);
    handleRestart()
  };

  const handleRestart = () => {
    setLife(5);
    setScore(0);
    setWord(null);
    setTried([]);
    setGameOver(false);
    sortNewWord();
  };

  return (
    <GameControlContext.Provider
      value={{
        tried,
        handleTry,
        score,
        word,
        life,
        sortNewWord,
        gameOver,
        handleSaveScore,
        setIsSaving,
        setName,
        handleRestart,
        isSaving,
        hint
      }}
    >
      {children}
    </GameControlContext.Provider>
  );
};

export const useGameControl = () => useContext(GameControlContext);
