from fastapi import FastAPI
from db.session import SessionLocal, engine

app = FastAPI()


@app.get("/")
async def root():
    return {"message": "Hello, Expence Tracker!"}


if __name__ == "__main__":
    print(engine.url)
    print(SessionLocal)
