public class bottleh {
    public long solution(int price, int money, int count) {
        long sumPrice = price * ((long) count * (count + 1) / 2);
        return money >= sumPrice ? 0 : sumPrice - money;
    }
}