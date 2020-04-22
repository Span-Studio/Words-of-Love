source ".env.sh"

read -p "Are you sure you want to drop and create the ${LOCAL_DB_NAME} database? (Y/n): " confirm

if [ $confirm != Y ]; then
  echo 'Okay exiting...'
  exit 1
else
  echo 'Okay continuing...'
fi

if [${LOCAL_DB_PASSWORD} == ""]
then
  # mysql -u ${LOCAL_DB_USER} -e "drop database ${LOCAL_DB_NAME}";
  mysql -u ${LOCAL_DB_USER} -e "create database ${LOCAL_DB_NAME}";
  echo 'Drop and create complete'
else
  # mysql -u ${LOCAL_DB_USER} -p${LOCAL_DB_PASSWORD} -e "drop database ${LOCAL_DB_NAME}";
  mysql -u ${LOCAL_DB_USER} -p${LOCAL_DB_PASSWORD} -e "create database ${LOCAL_DB_NAME}";
  echo 'Drop and create complete'
fi

# echo "create database `${LOCAL_DB_NAME}`" | mysql -u ${LOCAL_DB_USER} -p
# echo "${LOCAL_DB_USER}"
