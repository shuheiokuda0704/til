package main

import (
  "github.com/gin-gonic/gin"
  "io"
  "log"
  "net/http"
  "os"
)

func main() {
  engine:= gin.Default()

  engine.Static("/static", "./static")

  // ua := ""
  // engine.Use(func(c *gin.Context) {
  //   ua = c.GetHeader("User-Agent")
  //   c.Next()
  // })

  // engine.GET("/", func(c *gin.Context) {
  //   c.JSON(http.StatusOK, gin.H{
  //     "message": "hello world",
  //     "User-Agent": ua,
  //   })
  // })

  engine.LoadHTMLGlob("templates/*")
  engine.GET("/", func(c *gin.Context) {
    c.HTML(http.StatusOK, "index.html", gin.H{
      "message": "hello gin",
    })
  })

  engine.GET("/morning", func(c *gin.Context) {
    c.JSON(http.StatusOK, gin.H{
      "message": "Good morning, world",
    })
  })

  engine.POST("/upload", func(c *gin.Context) {
    file, header, err :=  c.Request.FormFile("image")
    if err != nil {
      c.String(http.StatusBadRequest, "Bad request")
      return
    }
    fileName := header.Filename
    dir, _ := os.Getwd()
    out, err := os.Create(dir+"/images/"+fileName)
    if err != nil {
      log.Fatal(err)
    }
    defer out.Close()
    _, err = io.Copy(out, file)
    if err != nil {
      log.Fatal(err)
    }
    c.JSON(http.StatusOK, gin.H{
      "status": "ok",
    })
  })

  engine.Run(":3000")
}
