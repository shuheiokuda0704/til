package service

import (
    "errors"
    "fmt"
    "github.com/go-xorm/xorm"
    "fastest_gin_rest/model"
    "log"
    _ "github.com/go-sql-driver/mysql"
  )

var DbEngine *xorm.Engine

func init() {
    driverName := "mysql"
    //DsName := "root:root@(127.0.0.1:3306)/gin?charset=utf8"
    DsName := "root:root@(192.168.99.100:3306)/gin?charset=utf8"
    err := errors.New("")
    DbEngine, err = xorm.NewEngine(driverName, DsName)
    if err != nil && err.Error() != ""{
        log.Fatal(err.Error())
    }

    DbEngine.ShowSQL(true)
    DbEngine.SetMaxOpenConns(2)
    DbEngine.Sync2(new(model.Book))
    fmt.Println("init data base ok")
}
