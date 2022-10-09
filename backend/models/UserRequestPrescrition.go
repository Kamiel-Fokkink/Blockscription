package models

type UserRequestPrescrition struct {
	UserAdress         string `json:"user_adress"`
	UserPrescriptionID string `json:"user_prescription_id"`
	DoctorAddress      string `json:"doctor_address"`
}
