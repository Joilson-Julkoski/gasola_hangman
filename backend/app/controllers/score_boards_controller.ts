import ScoreRegister from '#models/score_register';
import type { HttpContext } from '@adonisjs/core/http'

interface SaveScorePayload {
  name: string;
  score: number;
}

export default class ScoreBoardsController {

  async saveScore({ request, response }: HttpContext) {
    const { name, score } = request.all() as SaveScorePayload;

    if (name == null || score == null) {
      return response.status(404).send({ error: "Missing Infos" })
    }

    await ScoreRegister.create({
      name, score
    })

    return { name, score }

  }

  getScores() {
    return ScoreRegister.query().orderBy('score', 'desc').limit(3)
  }

}