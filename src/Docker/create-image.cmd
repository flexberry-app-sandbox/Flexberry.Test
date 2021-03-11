docker build --no-cache -f SQL\Dockerfile.PostgreSql -t test/postgre-sql ../SQL

docker build --no-cache -f Dockerfile -t test/app ../..
