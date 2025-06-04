from pydantic import EmailStr

from app.schemas.base import BaseSchema


class UserCreate(BaseSchema):
    username: str
    email: EmailStr
    password: str


class UserRead(BaseSchema):
    id: int
    username: str
    email: EmailStr
