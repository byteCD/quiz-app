import axios from "axios";

class QuizService {
  async getQuiz(category, difficulty, type) {
    return axios.get(
      `https://opentdb.com/api.php?amount=10&category=${category}&difficulty=${difficulty}&type=${type}`
    );
  }
}

export default new QuizService();
