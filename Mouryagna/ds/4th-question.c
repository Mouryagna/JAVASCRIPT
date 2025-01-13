#include<stdio.h>
int main() {
    int r,c,i,j;
    printf("Enter no. of rows: ");scanf("%d",&r);
    printf("Enter no. colunms: ");scanf("%d",&c);
    int a[r][c];
    for(i=0;i<r;i++) {
        for(j=0;j<c;j++) {
            printf("Enter a[%d][%d]: ",i+1,j+1);scanf("%d",&a[i][j]);
        }
    }
    for(int k=0;k<r;k++) {
        for(i=0;i<c-1;i++) {
            for(j=0;j<c-1;j++) {
                if(a[k][j]>a[k][j+1]) {
                    int temp = a[k][j];
                    a[k][j]=a[k][j+1];
                    a[k][j+1]=temp;
                }
            }
        }
    }
    for(i=0;i<r;i++) {
        for(j=0;j<c;j++) {
            printf("%d ",a[i][j]);
        }
        printf("\n");
    }
}