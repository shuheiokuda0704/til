package main

import (
    "log"
    "os"
    "text/template"
)

// 構造体(すべて公開)
type Language struct {
    Name string
    URL  string
}

func main() {
    // 構造体に値を設定
    data := Language{
        Name: `Go`,
        URL:  `https://golang.org/`,
    }

    // ひな形
    tmpl := "今回紹介する言語は、{{ .name }}です！\n詳しくは、{{.URL }} を見てください。\n"

    // New(<テンプレート名>).Parse(<文字列>)
    t, err := template.New("sample").Parse(tmpl)
    if err != nil {
        log.Fatal(err)
    }
    // Execute(io.Writer(出力先), <データ>)
    if err = t.Execute(os.Stdout, data); err != nil {
        log.Fatal(err)
    }
}
