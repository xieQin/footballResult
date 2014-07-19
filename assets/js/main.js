/**
 *
 * @author  xieq
 * @date    2014-07-18 16:30:15
 */

$(document).ready(function($) {
	var first = new Array();
    var second = new Array();
    var third = new Array();
    var fourth = new Array();
    var cFirst = new Array();
    var cSecond = new Array();
    var cThird = new Array();
    var cFourth = new Array();
    var record1 = 0;
    var record2 = 0;
    var record3 = 0;
    var record4 = 0;
    var record5 = 0;
    var record6 = 0;
    var record7 = 0;
    var record8 = 0;
	var url_lv = '';
	var divhight;
	var showtimes;

	getUrl();

	function getUrl() {
		var v = window.location.href;
        var index = v.lastIndexOf('/');

        url_lv = v.substring(0, index);
    }

    $.getJSON(url_lv + '/service/index.php/Index/getVotResult', function(data) {
    	var result = data;
    	var firsthtml = '';
    	var secondhtml = '';
    	checkResult(result);
    	$.each(first,function(i,item) {
    		firsthtml += '<div><li>' + item.Name + '</li><li>' + item.YY + '</li><li>' + item.Mobile + '</li></div>';

    	})
    	$.each(second,function(i,item) {
    		secondhtml += '<div><li>' + item.Name + '</li><li>' + item.YY + '</li><li>' + item.Mobile + '</li></div>';

    	})
    	$("#first").append($(firsthtml)).hide();
    	$("#second").append($(secondhtml)).hide();
    	var len1 = ($("#first").find("div").length);
        var num1 = 0;
        setInterval(function(){
        	$("#first").show();
            $("#first").find("div").eq(num1).show().siblings().hide();
            $("#first").find("div").eq((num1+1)%len1).show();
            $("#first").find("div").eq((num1+2)%len1).show();
            $("#first").find("div").eq((num1+3)%len1).show();
            if(num1+3<len1){
                num1 ++;
            }else{
                num1 = 0;
            }
        },1000);

        var len2 = ($("#second").find("div").length);
        var num2= 0;
        setInterval(function(){
        	$("#second").show();
                $("#second").find("div").eq(num2).show().siblings().hide();
                $("#second").find("div").eq((num2+1)%len2).show();
                if(num2+1<len2){
                        num2++;
                }else{
                        num2 = 0;
                }
        },1000);
    })

    $.getJSON(url_lv + '/service/index.php/Index/getVotResult', function(data) {
    	var result = data;
    	var cFirsthtml = '';
    	var cSecondhtml = '';
    	checkResult(result);
    	$.each(first,function(i,item) {
    		cFirsthtml += '<div><li>' + item.Name + '</li><li>' + item.YY + '</li><li>' + item.Mobile + '</li></div>';

    	})
    	$.each(second,function(i,item) {
    		cSecondhtml += '<div><li>' + item.Name + '</li><li>' + item.YY + '</li><li>' + item.Mobile + '</li></div>';

    	})
    	$("#cFirst").append($(cFirsthtml)).hide();
    	$("#cSecond").append($(cSecondhtml)).hide();
    	$("#cThird").append($(cSecondhtml)).hide();
    	var len1 = ($("#cFirst").find("div").length);
        var num1 = 0;
        setInterval(function(){
        	$("#cFirst").show();
            $("#cFirst").find("div").eq(num1).show().siblings().hide();
            $("#cFirst").find("div").eq((num1+1)%len1).show();
            $("#cFirst").find("div").eq((num1+2)%len1).show();
            $("#cFirst").find("div").eq((num1+3)%len1).show();
            if(num1+3<len1){
                num1 ++;
            }else{
                num1 = 0;
            }
        },1000);

        var len2 = ($("#cSecond").find("div").length);
        var num2= 0;
        setInterval(function(){
        	$("#cSecond").show();
                $("#cSecond").find("div").eq(num2).show().siblings().hide();
                $("#cSecond").find("div").eq((num2+1)%len2).show();
                if(num2+1<len2){
                        num2++;
                }else{
                        num2 = 0;
                }
        },1000);

        var num3= 0;
        setInterval(function(){
        	$("#cThird").show();
                $("#cThird").find("div").eq(num3).show().siblings().hide();
                $("#cThird").find("div").eq((num3+1)%len2).show();
                if(num3+1<len2){
                        num3++;
                }else{
                        num3 = 0;
                }
        },1000);

    })

    function checkResult(result) {
    	for(var i = 0; i < result.length; i++) {
            var count = 0;
            // var j = 0;
            var res = result[i].Result;
            // first[0] = '1';

            res = aryToJson(JSON.parse(res));

            if(!res||!res.A||!res.B||!res.C||!res.D||!res.E||!res.F||!res.G||!res.H){
                continue;
            }

            // alert(res.A)
            if((res.A[0] == 1 && res.A[1] == 2) ||(res.A[0] == 2 && res.A[1] == 1)){
                count ++;
            }
            if((res.B[0] == 2 && res.B[1] == 3) ||(res.B[0] == 3 && res.B[1] == 2)){
                count ++;
            }
            if((res.C[0] == 1 && res.C[1] == 3) ||(res.C[0] == 3 && res.C[1] == 1)){
                count ++;
            }
            if((res.D[0] == 1 && res.D[1] == 2) ||(res.D[0] == 2 && res.D[1] == 1)){
                count ++;
            }
            if((res.E[0] == 1 && res.E[1] == 2) ||(res.E[0] == 2 && res.E[1] == 1)){
                count ++;
            }
            if((res.F[0] == 1 && res.F[1] == 4) ||(res.F[0] == 4 && res.F[1] == 1)){
                count ++;
            }
            if((res.G[0] == 1 && res.G[1] == 4) ||(res.G[0] == 4 && res.G[1] == 1)){
                count ++;
            }
            if((res.H[0] == 1 && res.H[1] == 3) ||(res.H[0] == 3 && res.H[1] == 1)){
                count ++;
            }

            if(count == 2 || count == 3){
                first[record1] = result[i];
                record1 ++;
            }
            if(count == 4 || count == 5){
                second[record2] = result[i];
                record2 ++;
            }
        }
    }

    function checkCResult(result) {
        for(var i = 0; i < result.length; i++) {
            var count = 0;
            var countC = 0;
            var res = result[i].Result;
            var resC = result[i].ResultDetail;

            res = aryToJson(JSON.parse(res));
            resC = aryToJson(JSON.parse(resC));

            if(res.A[0] == 1) {
                count ++;
            }
            if(res.B[0] == 3) {
                count ++;
            }
            if(res.C[0] == 1) {
                count ++;
            }
            if(res.D[0] == 1) {
                count ++;
            }
            if(resC.B[0] == 2) {
                countC = 1;
            }

            if(count == 2) {
                cFirst[record3] = result[i];
                record3 ++;
            }
            if(count == 3) {
                cSecond[record4] = result[i];
                record4 ++;
            }
            if(count == 4) {
                cThird[record5] = result[i];
                record5 ++;
            }
            if(countC == 1) {
                cFourth[record6] = result[i];
                record6 ++;
            }
        }
    }


})

