# Step

1. convert the number to array. 2736 -> [2,7,3,6]
2. create a max idx array: Find maximum digits for each index from right to left
   | maxIdx[3] = 3 because 6 is maximum in [6]
   | maxIdx[2] = 3 because 6 is maximum in [3, 6]
   | maxIdx[1] = 1 because 7 is maximum in [7, 3, 6]
   | maxIdx[0] = 1 because 7 is maximum in [2, 7, 3, 6]
3. Find first swappable digit: Compare each digit with the corresponding maximun digit later in the list:
   at index 0, arr[index] < arr[maxIdx[index]] so we swap 2, 7
4. return the result
