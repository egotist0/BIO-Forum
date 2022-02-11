# BI506-BioBBS

+ **First run:** 

  Modify the database section in the `settings.py` configuration file to the locally used database.

+ **Configuring environment:**

  ```bash
  pip install -r bbs.txt
  ```

  

+ **Database Migration:**

  ```bash
  python manage.py makemigrations
  python manage.py migrate
  ```

  

+ **Run server:**

  ```bash
  python manage.py runserver
  ```

  You can modify the port you want, for example:

  ```bash
  python manage.py runserver 8001
  ```

  