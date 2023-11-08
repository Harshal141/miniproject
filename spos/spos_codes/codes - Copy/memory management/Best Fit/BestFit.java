import java.util.Scanner;

public class BestFit {

    public static void bestFit(int[] blockSize, int m, int[] processSize, int n) {
        int[] allocation = new int[10];
        for (int i = 0; i < allocation.length; i++) {
            allocation[i] = -1;
        }

        for (int i = 0; i < n; i++) {
            int bestIdx = -1;
            for (int j = 0; j < m; j++) {
                if (blockSize[j] >= processSize[i]) {
                    if (bestIdx == -1)
                        bestIdx = j;
                    else if (blockSize[bestIdx] > blockSize[j])
                        bestIdx = j;
                }
            }

            if (bestIdx != -1) {
                allocation[i] = bestIdx;

                blockSize[bestIdx] -= processSize[i];
            }
        }

        System.out.println("process no\t process Size\t block no.");
        for (int i = 0; i < n; i++) {
            System.out.print((i + 1) + "\t\t" + processSize[i]);
            if (allocation[i] != -1)
                System.out.print("\t\t" + (allocation[i] + 1));
            else
                System.out.print("\tNot Allocated");
            System.out.println();
        }
    }

    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);

        System.out.print("Enter the value of blockSize array and processSize array respectively: ");
        int m = scanner.nextInt();
        int n = scanner.nextInt();

        int[] processSize = new int[n];
        int[] blockSize = new int[m];

        System.out.println("Enter the values in Process size array");
        for (int i = 0; i < n; i++) {
            processSize[i] = scanner.nextInt();
        }

        System.out.println("Enter the values in Block size array");
        for (int i = 0; i < m; i++) {
            blockSize[i] = scanner.nextInt();
        }

        bestFit(blockSize, m, processSize, n);
    }
}
