from sqlalchemy import create_engine, inspect

from app.core.config import DATABASE_URL

if __name__ == "__main__":
    engine = create_engine(DATABASE_URL)
    insp = inspect(engine)
    print(insp.get_table_names())
