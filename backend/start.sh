#!/bin/bash

# データベースが準備できるまで待機
echo "データベースの準備を待機中..."
while ! nc -z db 5432; do
  sleep 1
done
echo "データベースが準備完了しました"

# alembicマイグレーションを実行
echo "alembicマイグレーションを実行中..."
cd /code/app
alembic upgrade head

# アプリケーションを起動
echo "アプリケーションを起動中..."
cd /code
exec uvicorn app.main:app --host 0.0.0.0 --port 8000 --reload
