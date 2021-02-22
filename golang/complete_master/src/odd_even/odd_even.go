package main

import (
	"errors"
	"fmt"
)

func OddEven(in int) (string, error) {
	if in%2 == 0 {
		return "even", nil
	} else if in%2 == 1 {
		return "odd", nil
	}

	return "", errors.New("unexpected error")
}

func main() {
	result, err := OddEven(1)
	if err != nil {
		fmt.Printf("err: %s", err)
	}

	fmt.Printf("%s\n", result)
}
