package main

func init() {
	log.SetPrefix("Blockchain: ")
}
func main() {
	myBlockchainAddress := "my_blockchain_address"

	log.Println("test")
	fmt.Println("hello")
	bc := NewBlockchain(myBlockchainAddress)
	bc.AddTransaction("address1", "address3", 1.0)
	bc.AddTransaction("address1", "address3", 2.0)
	bc.mining()
	bc.AddTransaction("address3", "address2", 3.0)
	bc.AddTransaction("address3", "address4", 4.0)
	bc.Print()
	bc.mining()
	bc.Print()
	fmt.Printf("amount: %.1f\n", bc.calculateTotalAmount("address3"))
	fmt.Printf("amount: %.1f\n", bc.calculateTotalAmount("my_blockchain_address"))
}
