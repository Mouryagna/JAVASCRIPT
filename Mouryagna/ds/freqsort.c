#include<stdio.h>
int main() {
    int a[]={1,2,1,5,1,3,2,4,5,3,3,3}; 
    int l=sizeof(a)/sizeof(a[0]);
    int b[l];
    int i,j;
    for(i=0;i<l;i++) {
        b[i]=-1;
    }
    for(i=0;i<l;i++) {
        int count=1;
        for(j=i+1;j<l;j++) {
            if(a[i]==a[j]) {
                count++;
                b[j]=0;
            }
        }
        if(b[i]!=0) {
            b[i]=count;
        }
    }
    for(i=0;i<l-1;i++) {
        int m=i;
        for(j=i+1;j<l-1;j++) {
            if(b[m]>b[j]) {
                m=j;
            }
        }
        if(m!=i) {
            int temp=a[i];
            a[i]=a[i+1];
            a[i+1]=temp;
            temp=b[i];
            b[i]=b[i+1];
            b[i+1]=temp;
        }
    }
    for(i=0;i<l;i++) {
        if(b[i]>0) {
            for(j=0;j<b[i];j++) {
                printf("%d ",a[i]);
            }
        }
    }
}