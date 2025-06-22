from app.api import expense, user
from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware

app = FastAPI()

app.add_middleware(
    CORSMiddleware,
    allow_origins=["http://localhost:5173"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

app.include_router(user.router, prefix="/api", tags=["users"])
app.include_router(expense.router, prefix="/api", tags=["expense"])


@app.get("/")
async def root():
    return {"message": "Welcome to the FastAPI application!"}
