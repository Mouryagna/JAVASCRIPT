#include<stdio.h>
int main() {
    int n;
    printf("size of array: ");scanf("%d",&n);
    int a[n];
    for(int i=0;i<n;i++) {
        printf("Enter %d element in array: ",i+1);
        scanf("%d",&a[i]);
    }
    for(int i=0;i<n-1;i++) {
        int min= i;
        for(int j=i;j<n;j++) {
            if(a[min]>a[j]) {
                min=j;
            }
        }
        if(min!=i) {
            int temp= a[i];
            a[i]=a[min];
            a[min]=temp;
        }
    }
    for(int i=0;i<n;i++) {
        printf("%d ",a[i]);
    }
    return 0;
}