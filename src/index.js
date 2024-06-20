(function () {
    var select_provinces = document.querySelector('#province'), select_city = document.querySelector('#city'), select_school = document.querySelector('#school');
    // 程序入口函数
    var init = function () {
        provinceData();
        initEvent();
    }
    // 数据
    var provinceData = function () {
        for (const key in province) {
            if (Object.hasOwnProperty.call(province, key)) {
                var option = document.createElement('option');
                option.value = key;
                option.innerHTML = province[key];
                select_provinces.appendChild(option);
            }
        }
    }
    // 事件入口函数
    var initEvent = function () {
        select_provinces.addEventListener('change', select_province_click);
        select_city.addEventListener('change', select_city_click);
    }
    // 城市
    var select_province_click = function (e) {
        select_city.innerHTML = "";
        select_school.innerHTML = "";
        create_select(city, e.target, select_city);
        create_select(allschool, select_city, select_school);
    }
    // 学校
    var select_city_click = function (e) {
        select_school.innerHTML = "";
        create_select(allschool, e.target, select_school);
    }
    // 生成数据
    var create_select = function (obj, eledata, createelement) {
        for (const key in obj[eledata.value]) {
            if (Object.hasOwnProperty.call(obj[eledata.value], key)) {
                var option = document.createElement('option');
                option.value = key;
                option.innerHTML = obj[eledata.value][key];
                createelement.appendChild(option);
            }
        }
    }
    init();
})()