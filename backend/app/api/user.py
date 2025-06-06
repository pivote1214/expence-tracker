from typing import List

from fastapi import APIRouter, Depends
from sqlalchemy.orm import Session

from app import crud
from app.db.session import get_db
from app.schemas import UserCreate, UserRead

router = APIRouter(prefix="/users")


@router.post("/", response_model=UserRead)
async def create_user(user: UserCreate, db: Session = Depends(get_db)):
    """
    新しいユーザをデータベースに登録するエンドポイント
    """
    return crud.create_user(db, user)


@router.get("/", response_model=List[UserRead])
async def read_all_users(db: Session = Depends(get_db)):
    """
    データベースに登録されている全てのユーザを取得するエンドポイント
    """
    return crud.read_all_users(db)


@router.get("/{id}/", response_model=UserRead)
async def read_user(id: int, db: Session = Depends(get_db)):
    """
    指定されたIDのユーザをデータベースから取得するエンドポイント
    """
    return crud.read_user(db, id)
