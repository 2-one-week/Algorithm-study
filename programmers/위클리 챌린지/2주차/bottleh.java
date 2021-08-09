import java.util.Arrays;

public class bottleh {
    public String solution(int[][] scores) {
        StringBuilder answer = new StringBuilder(); // 문자열 append 효율성 위해 StringBuilder 사용

        int row = scores.length;
        int column = scores[0].length;
        int[] reverseScore = new int[column];

        for (int i = 0; i < column; i++) {
            int sumScore = 0;
            boolean checkDub = false;

            // 열 기준으로 배열 세팅 및 유일한 최고점 최저점 위해 비교
            for (int j = 0; j < row; j++) {
                reverseScore[j] = scores[j][i];
                sumScore += reverseScore[j];
                if (scores[i][i] == reverseScore[j] && i != j) { // reverseScore[i] 비교하면 안됨.
                    checkDub = true;
                }
            }

            int divided = column;

            if ((reverseScore[i] == Arrays.stream(reverseScore).max().getAsInt() && !checkDub)
                    || (reverseScore[i] == Arrays.stream(reverseScore).min().getAsInt() && !checkDub)) {
                sumScore -= reverseScore[i];
                divided -= 1;
            }

            double avgScore = (double) sumScore / divided;
            answer.append(checkGrade(avgScore));
        }
        return answer.toString();
    }

    private String checkGrade(double score) {
        if (score >= 90) {
            return "A";
        }

        if (score >= 80) {
            return "B";
        }

        if (score >= 70) {
            return "C";
        }

        if (score >= 50) {
            return "D";
        }
        return "F";
    }
}