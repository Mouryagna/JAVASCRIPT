#include<stdio.h>
int main() {
    int n;
    printf("size of array: ");scanf("%d",&n);
    int a[n];
    for(int i=0;i<n;i++) {
        printf("Enter %d element in array: ",i+1);
        scanf("%d",&a[i]);
    }
    for(int i=1;i<n;i++) {
        int k =a[i];
        int j=i-1;
        while(j>=0 && a[j]>k) {
            a[j+1]=a[j];
            j--;
        }
        a[j+1]=k;
    }
    for(int i=0;i<n;i++) {
        printf("%d ",a[i]);
    }
    return 0;
}