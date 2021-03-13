# FLY - FI

### Initialize

Front-End
```
npm install
```

Back-End
```
cd backend
rvm install 2.5.8
rvm use default 2.5.8
bundle install

rake db:reset
rake db:migrate
```


### Start Front-End
```
cd frontend
npm start
```

### Start Back-End
```
vagrant up && vagrant ssh
cd backend
bin/rails s -b 0.0.0.0 -p 3001
```