source ".env.sh"
rsync -avzP -e 'ssh' ${LOCAL_BACKUPS_PATH}${LOCAL_DB_NAME} ${REMOTE_SSH_LOGIN}:${REMOTE_ROOT_PATH}${REMOTE_BACKUPS_PATH}