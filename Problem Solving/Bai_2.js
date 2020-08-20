function merge2String(str1, str2) {
    var temp = str1.concat(str2);
    var str_result = '';
    if (str1.length === str2.length) {
        for (var i = 0; i < str1.length; i++) {
            str_result += temp[i] + temp[i + temp.length / 2] // le
        }
    } else {

        if (str1.length > str2.length) {
            for (var i = 0; i < (temp.length - 1) / 2; i++) {
                str_result += temp[i] + temp[i + (temp.length - 1) / 2 + 1];
            }
            str_result += str1[str1.length - 1];
        } else if (str1.length < str2.length) {
            for (var i = 0; i < (temp.length - 1) / 2; i++) {
                str_result += temp[i] + temp[i + (temp.length - 1) / 2];
            }
            str_result += str2[str2.length - 1];
        }
    }
    return str_result;
}

merge2String('abc', 'xyz');

// merge2String('abcd','xyz');
// merge2String('abc','xyzt');
