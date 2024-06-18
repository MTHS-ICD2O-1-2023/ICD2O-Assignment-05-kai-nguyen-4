// Copyright (c) 2024 Kai Nguyen All rights reserved
//
// Created by: Kai Nguyen
// Created on: May 2024
// This file contains the JS functions for index.html
"use strict"

function fibonacciSequence() {
  const integer = parseInt(document.getElementById('num-entered').value)
  let answer = 0
  let fibSeq = [0, 1] // initialize the Fibonacci sequence with the first two numbers

  for (let counter = 2; counter <= integer; counter++) {
    fibSeq.push(fibSeq[counter - 1] + fibSeq[counter - 2]) // calculate the next number in the sequence
  }

  document.getElementById('answer').innerHTML = `The Fibonacci sequence up to ${integer} is: ${fibSeq.join(', ')}` // display the result
}