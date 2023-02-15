import java.util.*;

public class EightQueens {

    final private int[][] map = new int[8][8];
    final private int[][] testMap = new int[8][8];
    private int heuristic = 0;
    private int queenLoc = 0;
    private int restarts = 0;
    private int moves = 0;
    private boolean newMap = true;
    private int neighbors = 8;

    public EightQueens() { // initializes the map
        for (int i = 0; i < 8; i++) {
            for (int j = 0; j < 8; j++) {
                map[i][j] = 0;
            }
        }
    }

    // randomizes map
    public void randomizeMap() {
        Random rand = new Random();

        while (queenLoc < 8) {
            for (int i = 0; i < 8; i++) {
                map[rand.nextInt(7)][i] = 1;
                queenLoc++;
            }
        }
        heuristic = heuristic(map);
    }

    // Adding heuristic//

    // determines row conflicts
    public boolean findRowEx(int[][] test, int a) {
        boolean isFound = false;
        int count = 0;

        for (int i = 0; i < 8; i++) {
            if (test[i][a] == 1) {
                count++;
            }
        }
        if (count > 1) {
            isFound = true;
        }
        return isFound;
    }

    // finds if there are any columm conflicts
    public boolean findColEx(int[][] test, int j) {
        boolean isFound = false;
        int count = 0;
        for (int i = 0; i < 8; i++) {
            if (test[j][i] == 1) {
                count++;
            }
        }
        if (count > 1) {
            isFound = true;
        }
        return isFound;
    }

    // finds if there are diagonal conflicts
    public boolean findDiaEx(int[][] test, int a, int b) {
        boolean isDiaFound = false;

        for (int i = 1; i < 8; i++) {
            if (isDiaFound) {
                break;
            }

            if ((a + i < 8) && (b + i < 8)) {
                if (test[a + i][b + i] == 1) {
                    isDiaFound = true;
                }
            }
            if ((a - i >= 0) && (b - i >= 0)) {
                if (test[a - i][b - i] == 1) {
                    isDiaFound = true;
                }
            }
            if ((a + i < 8) && (b - i >= 0)) {
                if (test[a + i][b - i] == 1) {
                    isDiaFound = true;
                }
            }
            if ((a - i >= 0) && (b + i < 8)) {
                if (test[a - i][b + i] == 1) {
                    isDiaFound = true;
                }
            }
        }
        return isDiaFound;
    }

    // Counts the number of queens in conflict
    public int heuristic(int[][] test) {
        int count = 0;
        boolean rowEx;
        boolean colEx;
        boolean diaEx;

        for (int i = 0; i < 8; i++) {
            for (int j = 0; j < 8; j++) {
                if (test[i][j] == 1) {
                    rowEx = findRowEx(test, j);
                    colEx = findColEx(test, i);
                    diaEx = findDiaEx(test, i, j);

                    if (rowEx || colEx || diaEx) {
                        count++;
                    }
                }
            }
        }
        return count;
    }

    // moves a queen and chooses either a new state or restart or to summarize
    // solution
    public void moveQueen() {
        int[][] hArray = new int[8][8];
        int colCount;
        int minCol;
        int minRow;
        int prevColQueen = 0;
        newMap = false;

        while (true) {
            colCount = 0;

            for (int i = 0; i < 8; i++) {
                System.arraycopy(map[i], 0, testMap[i], 0, 8);
            }
            while (colCount < 8) {
                for (int i = 0; i < 8; i++) {
                    testMap[i][colCount] = 0;
                }
                for (int i = 0; i < 8; i++) {
                    if (map[i][colCount] == 1) {
                        prevColQueen = i;
                    }
                    testMap[i][colCount] = 1;
                    hArray[i][colCount] = heuristic(testMap);
                    testMap[i][colCount] = 0;
                }
                testMap[prevColQueen][colCount] = 1;
                colCount++;
            }

            if (determineRestart(hArray)) {
                queenLoc = 0;
                for (int i = 0; i < 8; i++) {
                    for (int j = 0; j < 8; j++) {
                        map[i][j] = 0;
                    }
                }
                randomizeMap();
                System.out.println("RESTART");
                restarts++;
            }

            minCol = findMinCol(hArray);
            minRow = findMinRow(hArray);

            for (int i = 0; i < 8; i++) {
                map[i][minCol] = 0;
            }

            map[minRow][minCol] = 1;
            moves++;
            heuristic = heuristic(map);

            if (heuristic(map) == 0) {
                System.out.println("\nCurrent State");
                for (int i = 0; i < 8; i++) {
                    for (int j = 0; j < 8; j++) {
                        System.out.print(map[i][j] + " ");
                    }
                    System.out.print("\n");
                }
                System.out.println("Solution Found!");
                System.out.println("State changes: " + moves);
                System.out.println("Restarts: " + restarts);
                break;
            }

            System.out.println("\n");
            System.out.println("Current h: " + heuristic);
            System.out.println("Current State");
            for (int i = 0; i < 8; i++) {
                for (int j = 0; j < 8; j++) {
                    System.out.print(map[i][j] + " ");
                }
                System.out.print("\n");
            }
            System.out.println("Neighbors found with lower h: " + neighbors);
            System.out.println("Setting new current State");
        }
    }

    // finds column of minimum neighbor state
    public int findMinCol(int[][] test) {
        int minCol = 8;
        int minValue = 8;
        int count = 0;

        for (int i = 0; i < 8; i++) {
            for (int j = 0; j < 8; j++) {
                if (test[i][j] < minValue) {
                    minValue = test[i][j];
                    minCol = j;
                }
                if (test[i][j] < heuristic) {
                    count++;
                }
            }
        }
        neighbors = count;
        return minCol;
    }

    // finds row of minimum neighbor state
    public int findMinRow(int[][] test) {
        int minRow = 8;
        int minValue = 8;

        for (int i = 0; i < 8; i++) {
            for (int j = 0; j < 8; j++) {
                if (test[i][j] < minValue) {
                    minValue = test[i][j];
                    minRow = i;
                }
            }
        }
        return minRow;
    }

    // decides if restart is necessary
    public boolean determineRestart(int[][] test) {
        int minValue = 8;
        boolean restart = false;

        for (int i = 0; i < 8; i++) {
            for (int j = 0; j < 8; j++) {
                if (test[i][j] < minValue) {
                    minValue = test[i][j];
                }
            }
        }
        if (neighbors == 0) {
            restart = true;
        }
        return restart;
    }

    // Main
    // creates object, creates initial random map, then initiates state change
    public static void main(String[] args) {
        EightQueens piece = new EightQueens();
        piece.randomizeMap();
        piece.moveQueen();
    }
}