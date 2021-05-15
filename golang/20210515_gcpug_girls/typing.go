package main

import "fmt"

func main() {
	var slice = []string{"The", "first", "go", "room"}
	fmt.Println(slice)
	fmt.Println(len(slice))

	for _, v := range slice {
		fmt.Println(v)
		fmt.Print("Input > ")

		var answer string

		fmt.Scanln(&answer)

		if answer == v {
			fmt.Println("○")
		} else {
			fmt.Println("✗")
		}
	}
}
