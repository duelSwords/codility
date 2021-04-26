// 1. MaxProductOfThree
// Maximize A[P] * A[Q] * A[R] for any triplet (P, Q, R).
// Task Score
// 100%
// Correctness
// 100%
// Performance
// 100%
// Task description
// A non-empty array A consisting of N integers is given. The product of triplet (P, Q, R)
//  equates to A[P] * A[Q] * A[R] (0 ≤ P < Q < R < N).

// For example, array A such that:

//   A[0] = -3
//   A[1] = 1
//   A[2] = 2
//   A[3] = -2
//   A[4] = 5
//   A[5] = 6
// contains the following example triplets:

// (0, 1, 2), product is −3 * 1 * 2 = −6
// (1, 2, 4), product is 1 * 2 * 5 = 10
// (2, 4, 5), product is 2 * 5 * 6 = 60
// Your goal is to find the maximal product of any triplet.

// Write a function:

// function solution(A);

// that, given a non-empty array A, returns the value of the maximal product of any triplet.

// For example, given array A such that:

//   A[0] = -3
//   A[1] = 1
//   A[2] = 2
//   A[3] = -2
//   A[4] = 5
//   A[5] = 6
// the function should return 60, as the product of triplet (2, 4, 5) is maximal.

// sort them largest to lowest
// max1 largest 3 positive 
// max2 lowest 2 neg, and the largest positive  

function solution(A) {
    let a = A.sort((a,b) => b-a)
    let pos = a.slice(0,3).reduce((a,v) => a*v)
    let neg = a.slice(-2).reduce((b,v) => b*v, a[0])
    return Math.max(pos, neg)
}