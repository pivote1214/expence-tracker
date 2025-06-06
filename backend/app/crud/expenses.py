from typing import List

from sqlalchemy import select
from sqlalchemy.orm import Session

from app import models, schemas


def create_expense(db: Session, expense: schemas.ExpenseCreate) -> models.Expense:
    db_expense = models.Expense(
        title=expense.title,
        detail=expense.detail,
        amount=expense.amount,
        payment_date=expense.payment_date,
        ratio=expense.ratio,
        payer_id=expense.payer_id,
    )
    db.add(db_expense)
    db.commit()
    return db_expense


def read_all_expenses(db: Session) -> List[models.Expense]:
    statement = select(models.Expense)
    return db.scalars(statement).all()


def read_expense(db: Session, id: int) -> models.Expense:
    statement = select(models.Expense).where(models.Expense.id == id)
    return db.scalar(statement)
