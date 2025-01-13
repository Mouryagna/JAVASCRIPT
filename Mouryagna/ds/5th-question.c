#include <stdio.h>

int main() {
    int n, i, j;
    printf("Enter size of array: ");
    scanf("%d", &n);

    int a[n], b[n];
    for (i = 0; i < n; i++) {
        printf("Enter %d element in array: ", i + 1);
        scanf("%d", &a[i]);
        b[i] = -1; 
    }
    for (i = 0; i < n; i++) {
        int count = 1;
        for (j = i + 1; j < n; j++) {
            if (a[i] == a[j]) {
                count++;
                b[j] = 0; 
            }
        }
        if (b[i] != 0) {
            b[i] = count; 
        }
    }
    for (i = 0; i < n - 1; i++) {
        for (j = i + 1; j < n; j++) {
            if (b[i] > b[j]) {
                int temp = b[i];
                b[i] = b[j];
                b[j] = temp;

                temp = a[i];
                a[i] = a[j];
                a[j] = temp;
            }
        }
    }

    for (i = 0; i < n; i++) {
        if (b[i] > 0) {
            for (j = 0; j < b[i]; j++) {
                printf("%d ", a[i]);
            }
        }
    }

    return 0;
}
