FROM python:3.13-slim

WORKDIR /code

# netcatをインストール（データベース接続確認用）
RUN apt-get update && apt-get install -y netcat-traditional && rm -rf /var/lib/apt/lists/*

COPY requirements.txt .
RUN pip install --no-cache-dir -r requirements.txt

COPY ./app /code/app
COPY start.sh /code/start.sh
RUN chmod +x /code/start.sh

# 起動スクリプトを実行
CMD ["bash", "/code/start.sh"]
