/*
|--------------------------------------------------------------------------
| Routes file
|--------------------------------------------------------------------------
|
| The routes file is used for defining the HTTP routes.
|
*/

import router from '@adonisjs/core/services/router'
const WordsController = () => import("#controllers/words_controller")
const ScoreBoardsController = () => import("#controllers/score_boards_controller")


router.get('/generateWord', [WordsController, 'generateNewWord'])
router.post('/saveScore', [ScoreBoardsController, 'saveScore'])
router.get('/getScores', [ScoreBoardsController, 'getScores'])
