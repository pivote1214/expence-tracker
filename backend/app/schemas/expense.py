from datetime import date

from app.schemas.base import BaseSchema


class ExpenseCreate(BaseSchema):
    title: str
    detail: str | None = None
    amount: int
    payment_date: date
    ratio: float
    payer_id: int


class ExpenseRead(BaseSchema):
    id: int
    title: str
    detail: str | None
    amount: int
    payment_date: date
    ratio: float
    payer_id: int
