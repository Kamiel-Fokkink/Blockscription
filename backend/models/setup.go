package models

import (
	"fmt"
	"log"
	"os"

	"github.com/joho/godotenv"
	"gorm.io/driver/postgres"
	"gorm.io/gorm"
)

var DB *gorm.DB

func init_dotenv() {
	// loads values from .env into the system
	if err := godotenv.Load("../.env"); err != nil {
		log.Print("No .env file found")
	}
}

func Init() {
	init_dotenv()
	fmt.Println("Connecting to database...")
	db_host := os.Getenv("DB_HOST")
	db_user := os.Getenv("DB_USER")
	db_password := os.Getenv("DB_PASSWORD")
	db_port := os.Getenv("DB_PORT")
	db_name := os.Getenv("DB_NAME")
	dsn := fmt.Sprintf("host=%s user=%s password=%s dbname=%s port=%s sslmode=disable TimeZone=Europe/Paris", db_host, db_user, db_password, db_name, db_port)
	fmt.Println(dsn)
	db, err := gorm.Open(postgres.Open(dsn), &gorm.Config{})
	if err != nil {
		panic(err)
	}
	db.AutoMigrate(&UserRequestPrescrition{})
	fmt.Println("Connected to database")
	DB = db
}
