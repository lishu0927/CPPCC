function compare_str(str1,str2,dom1,dom2){
    var res1 = "";
    var res2 = "";

    while(str1.length && str2.length){
        var arr = find_pos(str1,str2);

        if (arr && arr.length)
        {
            if (arr[0])
            {
                res2 +=("<font color='red'>" + str2.substr(0,arr[0]) + "</font>");
                str2 = str2.substr(arr[0]);
            }
            res1 +=(str1.substr(0,arr[1]));
            res2 +=(str2.substr(0,arr[1]));

            str1 = str1.substr(arr[1]);
            str2 = str2.substr(arr[1]);

        }else{
            arr = find_max_pos(str1,str2);
            tmp = find_match_pos(str1,str2);

            if (tmp.length)
            {
                if (arr[0]>tmp[0] && arr[1]>tmp[1])
                {
                    arr = tmp;
                }
            }

            if (arr!=undefined && arr.length)
            {
                res1 +=str1.substr(0,arr[0]);
                res2 +=("<font color='red'>" + str2.substr(0,arr[1]) + "</font>");
                res1 +=(str1.substr(arr[0],arr[2]));
                res2 +=(str2.substr(arr[1],arr[2]));

                str1 = str1.substr(arr[0]+arr[2]);
                str2 = str2.substr(arr[1]+arr[2]);
            }else{
                res1 +=str1;
                res2 +=("<font color='red'>" + str2 + "</font>");
                str1 = '';
                str2 = '';
            }

        }
    }
    if (str1.length)
    {
        res1 +=str1;
    }
    if (str2.length)
    {
        res2 +=("<font color='red'>" + str2 + "</font>");
    }



    dom1.innerHTML = (res1);
    dom2.innerHTML = (res2);
}

function find_pos(str1,str2){
    var len = 1, pos = 0;
    var ret;

    while (pos>0){
        var str = str1.substr(0,len);
        pos = str2.indexOf(str);
        if (pos!=-1)
        {
            ret = [];
            ret.push(pos,len);
            len++;
            if (len>str1.length){
                break;
            }

        }else{
            break;
        }
    }

    return ret;
}

function find_match_pos(str1,str2,arr){
    var len =1 , pos1 = 0, pos2 = 0, _pos2;
    var ffind = false;
    var ret = [];

    if (arr!=undefined)
    {
        pos1 = arr[0];pos2 = arr[1];
    }
    while((pos1+len)<str1.length){
        var str = str1.substr(pos1,len);
        _pos2 = str2.indexOf(str);
        if (_pos2!=-1)
        {
            ffind = true;len++;pos2 = _pos2;
        }else{
            if (ffind)
            {
                len--;break;
            }else{
                pos1 += len;len = 1;
            }
        }
    }

    if (ffind)
    {
        ret.push(pos1,pos2,len);
    }else{
        ret = [];
    }

    return ret;
}
function find_max_pos(str1,str2){
    var ret,pos1,pos2,arr=null;
    var res, max = 0;
    do
    {
        ret = find_match_pos(str1,str2,arr);
        if (ret.length)
        {
            if (ret[2]>max)
            {
                res = ret;
                max = ret[2];
            }

            arr = new Array(ret[0]+1,ret[1]);

        }
    }
    while (ret.length);

    return res;
}

