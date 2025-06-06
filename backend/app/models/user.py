from typing import TYPE_CHECKING

from sqlalchemy import Integer, String
from sqlalchemy.orm import Mapped, mapped_column, relationship

from app.models.base import BaseModel

# Avoid circular import issues in type checking
if TYPE_CHECKING:
    from app.models.expense import Expense


class User(BaseModel):
    __tablename__ = "user"

    id: Mapped[int] = mapped_column(Integer, primary_key=True)
    username: Mapped[str] = mapped_column(String, nullable=False)
    email: Mapped[str] = mapped_column(String, unique=True, nullable=False)
    password: Mapped[str] = mapped_column(String, nullable=False)

    expenses: Mapped[list["Expense"]] = relationship(back_populates="user")

    def __init__(self, username: str, email: str, password: str):
        self.username = username
        self.email = email
        self.password = password
