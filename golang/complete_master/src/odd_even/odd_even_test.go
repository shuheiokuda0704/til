package main

import (
	"testing"
)

func TestOddSuccess(t *testing.T) {
	result, err := OddEven(1)
	if err != nil {
		t.Fatalf("failed test %#v", err)
	}
	if result != "odd" {
		t.Fatal("failed test")
	}
}

func TestEvenSuccess(t *testing.T) {
	result, err := OddEven(2)
	if err != nil {
		t.Fatalf("failed test %#v", err)
	}
	if result != "even" {
		t.Fatal("failed test")
	}
}
