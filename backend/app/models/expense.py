from typing import TYPE_CHECKING

from sqlalchemy import Date, Float, ForeignKey, Integer, String
from sqlalchemy.orm import Mapped, mapped_column, relationship

from app.models.base import BaseModel

# Avoid circular import issues in type checking
if TYPE_CHECKING:
    from app.models.user import User


class Expense(BaseModel):
    __tablename__ = "expense"

    id: Mapped[int] = mapped_column(Integer, primary_key=True)
    title: Mapped[str] = mapped_column(String(100), nullable=False)
    detail: Mapped[str] = mapped_column(String(500), nullable=True)
    amount: Mapped[int] = mapped_column(Integer, nullable=False)
    payment_date: Mapped[Date] = mapped_column(Date, nullable=False)
    ratio: Mapped[float] = mapped_column(Float, nullable=False)

    payer_id: Mapped[str] = mapped_column(ForeignKey("user.id"))
    user: Mapped["User"] = relationship(back_populates="expenses")
