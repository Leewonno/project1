const dt = new Date();
let year = dt.getFullYear();
let month = dt.getMonth() + 1;
let date = dt.getDate();
let hour = dt.getHours() - 1;

if(hour<10){
    hour = "0" + hour;
}
else{
    hour = hour.toString();
}

if(month<10){
    month = "0" + month;
}
else{
    month = month.toString()
}

if(date<10){
    date = "0" + date;
}
else{
    date = date.toString();
}

let wt_lightning;
let wt_rain;
let wt_rain_hour;
let wt_sky;
let wt_tp;

var xhr = new XMLHttpRequest();
var url = 'http://apis.data.go.kr/1360000/VilageFcstInfoService_2.0/getUltraSrtFcst'; /*URL*/
var queryParams = '?' + encodeURIComponent('serviceKey') + '='+'eNu0V97akqslnjT2GhE%2B6QoXw2G8Vu54veHTb9eO6ptz3t2akQjcxBPZXD7lEA89iaUIwiCjdTdnCGpRdF76Og%3D%3D'; /*Service Key*/
queryParams += '&' + encodeURIComponent('pageNo') + '=' + encodeURIComponent('1'); /**/
queryParams += '&' + encodeURIComponent('numOfRows') + '=' + encodeURIComponent('1000'); /**/
queryParams += '&' + encodeURIComponent('dataType') + '=' + encodeURIComponent('JSON'); /**/
queryParams += '&' + encodeURIComponent('base_date') + '=' + encodeURIComponent(year + month + date); /**/
queryParams += '&' + encodeURIComponent('base_time') + '=' + encodeURIComponent(hour + "00"); /**/
queryParams += '&' + encodeURIComponent('nx') + '=' + encodeURIComponent('98'); /**/
queryParams += '&' + encodeURIComponent('ny') + '=' + encodeURIComponent('76'); /**/
xhr.open('GET', url + queryParams);
xhr.onreadystatechange = function () {
    if (this.readyState == 4) {
        console.log("LGT 낙뢰 : ", JSON.parse(this.responseText).response.body.items.item[0].fcstValue)
        console.log("PTY 강수형태 (0없음, 1비, 2비/눈, 3눈, 5빗방울, 6빗방울눈날림, 7눈날림): ", JSON.parse(this.responseText).response.body.items.item[6].fcstValue)
        console.log("RN1 1시간 강수량 mm : ", JSON.parse(this.responseText).response.body.items.item[12].fcstValue)
        console.log("SKY 맑음(1), 구름많음(3), 흐림(4) : ", JSON.parse(this.responseText).response.body.items.item[18].fcstValue)
        console.log("T1H 기온 : ", JSON.parse(this.responseText).response.body.items.item[24].fcstValue)
        console.log("REH 습도 % : ", JSON.parse(this.responseText).response.body.items.item[30].fcstValue)
        console.log("UUU 풍속(동서성분) m/s : ", JSON.parse(this.responseText).response.body.items.item[36].fcstValue)
        console.log("VVV 풍속(남북성분) m/s : ", JSON.parse(this.responseText).response.body.items.item[42].fcstValue)
        console.log("VEC 풍향 deg : ", JSON.parse(this.responseText).response.body.items.item[48].fcstValue)
        console.log("WSD 풍속 m/s : ", JSON.parse(this.responseText).response.body.items.item[54].fcstValue)
        // alert('Status: '+this.status+'nHeaders: '+JSON.stringify(this.getAllResponseHeaders())+'nBody: '+this.responseText);

        wt_lightning = JSON.parse(this.responseText).response.body.items.item[0].fcstValue;
        wt_rain = JSON.parse(this.responseText).response.body.items.item[6].fcstValue;
        wt_rain_hour = JSON.parse(this.responseText).response.body.items.item[12].fcstValue;
        wt_sky = JSON.parse(this.responseText).response.body.items.item[18].fcstValue;
        wt_tp = JSON.parse(this.responseText).response.body.items.item[24].fcstValue;

        // // 번개가친다.
        // if(wt_lightning>0){

        // }
    }
};

xhr.send('');