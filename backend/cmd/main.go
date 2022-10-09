package main

import (
	"net/http"

	"github.com/Kamiel-Fokkink/Blockscription.com/models"

	"github.com/gin-gonic/gin"
)

func addUserRequestPrescription(c *gin.Context) {
	var request models.UserRequestPrescrition
	if err := c.ShouldBindJSON(&request); err != nil {
		c.JSON(http.StatusBadRequest, gin.H{"error": err.Error()})
		return
	}

	c.JSON(http.StatusOK, gin.H{"data": request})
}

func getUserRequestPrescrition(c *gin.Context) {
	var request models.UserRequestPrescrition
	if err := c.ShouldBindJSON(&request); err != nil {
		c.JSON(http.StatusBadRequest, gin.H{"error": err.Error()})
		return
	}
	c.JSON(http.StatusOK, gin.H{"data": request})
}

func main() {
	models.Init()
	r := gin.Default()

	r.POST("/request", addUserRequestPrescription)
	r.GET("/request", getUserRequestPrescrition)

	r.Run()
}
