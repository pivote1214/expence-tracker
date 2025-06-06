from fastapi import FastAPI

from app.api import user, expense

app = FastAPI()

app.include_router(user.router, prefix="/api", tags=["users"])
app.include_router(expense.router, prefix="/api", tags=["expense"])

@app.get("/")
async def root():
    return {"message": "Welcome to the FastAPI application!"}
