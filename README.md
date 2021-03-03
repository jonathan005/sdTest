
1. Open a terminal window (folder project) and execute
   docker-compose up
2. Once the database server is up, open a terminal and execute
	 docker exec djangoAPI /bin/sh -c "python manage.py collectstatic --no-input && python manage.py makemigrations && python manage.py migrate"
5. Run tests with
	 docker exec djangoAPI /bin/sh -c "python manage.py test"
3. Open a web browser and go to localhost:8000
4. Start creating products
