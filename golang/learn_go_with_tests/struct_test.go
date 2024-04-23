package main

import "testing"

func TestPerimeter(t *testing.T) {
	t.Run("test perimeter of a rectangle", func(t *testing.T) {
		r := Rectangle{12, 6}
		got := r.Perimeter()
		want := 36.0

		if got != want {
			t.Errorf("got %.2f want %.2f", got, want)
		}
	})
}

func TestArea(t *testing.T) {
	t.Run("test area of a rectangle", func(t *testing.T) {
		r := Rectangle{12, 6}
		got := r.Area()
		want := 72.0

		if got != want {
			t.Errorf("got %.2f want %.2f", got, want)
		}
	})
}
