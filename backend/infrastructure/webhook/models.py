import datetime
from typing import Optional

from pydantic import BaseModel


class Diagnostic(BaseModel):
    diagnostic_id: int
    type_name: str
    description: str
    price: float

    class Config:
        orm_mode = True


class DiagnosticLocation(BaseModel):
    diagnostic_location_id: int
    diagnostic_id: int
    location_id: int

    class Config:
        orm_mode = True


class Doctor(BaseModel):
    doctor_id: int
    location_id: int
    full_name: str
    specialty: str
    price: float

    class Config:
        orm_mode = True


class DoctorRating(BaseModel):
    doctor_id: int
    rating: int

    class Config:
        orm_mode = True


class DoctorBooking(BaseModel):
    appointment_id: int
    user_id: int
    doctor_id: int
    slot_id: int
    status: str

    class Config:
        orm_mode = True


class Location(BaseModel):
    location_id: int
    name: str
    address: str

    class Config:
        orm_mode = True


class Slot(BaseModel):
    slot_id: int
    location_id: int
    start_time: int
    end_time: int
    class Config:
        orm_mode = True


class DoctorSlot(BaseModel):
    doctor_slot_id: int
    doctor_id: int
    slot_id: int
    is_booked: bool

    class Config:
        orm_mode = True


class DiagnosticSlot(BaseModel):
    diagnostic_slot_id: int
    diagnostic_location_id: int
    slot_id: int
    is_booked: bool


    class Config:
        orm_mode = True


class Booking(BaseModel):
    booking_id: int
    user_full_name: str
    user_email: str
    user_phone_number: str
    doctor_slot_id: int
    diagnostic_slot_id: int

    class Config:
        orm_mode = True


class User(BaseModel):
    user_id: int
    username: Optional[str]
    full_name: str

    class Config:
        orm_mode = True
