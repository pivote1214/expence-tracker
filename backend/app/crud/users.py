from typing import List

from sqlalchemy import select
from sqlalchemy.orm import Session

from app import models, schemas


def create_user(db: Session, user: schemas.UserCreate) -> models.User:
    fake_hashed_password = user.password + ":hashpassword"
    db_user = models.User(
        username=user.username,
        email=user.email,
        password=fake_hashed_password,
    )
    db.add(db_user)
    db.commit()
    return db_user


def read_all_users(db: Session) -> List[models.User]:
    statement = select(models.User)
    return db.scalars(statement).all()


def read_user(db: Session, id: int) -> models.User:
    statement = select(models.User).where(models.User.id == id)
    return db.scalar(statement)
