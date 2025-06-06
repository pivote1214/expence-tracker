from typing import List

from fastapi import APIRouter, Depends
from sqlalchemy.orm import Session

from app import crud
from app.db.session import get_db
from app.schemas import ExpenseCreate, ExpenseRead

router = APIRouter(prefix="/expenses")


@router.post("/", response_model=ExpenseRead)
async def create_expense(expense: ExpenseCreate, db: Session = Depends(get_db)):
    """
    新しい出費をデータベースに登録するエンドポイント
    """
    return crud.create_expense(db, expense)


@router.get("/", response_model=List[ExpenseRead])
async def read_all_expenses(db: Session = Depends(get_db)):
    """
    データベースに登録されている全ての出費を取得するエンドポイント
    """
    return crud.read_all_expenses(db)


@router.get("/{id}/", response_model=ExpenseRead)
async def read_expense(id: int, db: Session = Depends(get_db)):
    """
    指定されたIDの出費をデータベースから取得するエンドポイント
    """
    return crud.read_expense(db, id)
