cd /opt/nodeServer/wechatServer

if [ ! -d "logs" ];then
        mkdir logs
        echo "create dir logs"
fi

#This variable name needs to be modified to match the name of the js boot file
curSerName="invite"

curPath="$(pwd)"
pm2 start $curSerName".js" -i 3 --name $curSerName"Ser" --output $curPath"/logs/"$curSerName"_out.log" --error $curPath"/logs/"$curSerName"_err.log"