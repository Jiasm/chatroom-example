echo "start db servers";
brew services start redis; 
brew services start mysql;
echo "start db servers success";
echo "start project";
nodemon server;