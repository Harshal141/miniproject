import java.util.*;

class HelloWorld{
    public static void main(String args[]){
        Scanner sc = new Scanner(System.in);
        int size = sc.nextInt();
        int arr[] = new int[size];
        for(int i=0;i<size;i++){
            int temp = sc.nextInt();
            arr[i] = temp;
        }
        for(int i=0;i<size;i++){
            System.out.println(arr[i]);
        }
    } 
}