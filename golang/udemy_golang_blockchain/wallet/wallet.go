package wallet

import (
	"crypto/ecdsa"
	"crypto/elliptic"
	"crypto/rand"
	"fmt"
	"golang.org/btcsuite/btcutil/base58"
	"golang.org/x/crypto/ripemd160"
)

type Wallet struct {
	privateKey *ecdsa.PrivateKey
	publicKey  *ecdsa.PublicKey
}

func NewWallet() *Wallet {
	// 1. Creating ECDSA private key (32 bytes) public key (64bytes)
	w := new(Wallet)

	privateKey, _ := ecdsa.GenerateKey(elliptic.P256(), rand.Reader)
	w.privateKey = privateKey
	w.publicKey = &w.privateKey.PublicKey

	// 2. Perform SHA-256 hashing on the public key (32 bytes)
	// 3. Perform RIPEMD-160 hashing on the result of SHA-256 (20 bytes)
	// 4. Add version byte in front of RIPEMD-160 hash (0x00 for Main Network)
	// 5. Perform SHA-256 hash on the extended RIMEMD-160 result
	// 6. Perform SHA-256 hash on the result of the previous SHA-256 hash
	// 7. Take the first 4 bytes of the second SHA-256 hash for checksum
	// 8. Add the 4 checksum bytes from 7 at the end of extended RIMEMD-160 hash from 4 (25 bytess)
	// 9. Convert the result from a byte string into base58
	return w
}

func (w *Wallet) PrivateKey() *ecdsa.PrivateKey {
	return w.privateKey
}

func (w *Wallet) PrivateKeyStr() string {
	return fmt.Sprintf("%x", w.privateKey.D.Bytes())
}

func (w *Wallet) PublicKey() *ecdsa.PublicKey {
	return w.publicKey
}

func (w *Wallet) PublicKeyStr() string {
	return fmt.Sprintf("%x%x", w.publicKey.X.Bytes(), w.publicKey.Y.Bytes())
}
