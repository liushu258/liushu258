/* 鎺у埗鍙拌緭鍑?*/
if(window.console) {
	var cons = console;
	if(cons) {
		cons.group("O(鈭鈭?O鍝堝柦锛?);
		cons.info("");
		cons.log("");
		cons.info("==============================姝や箖鍒嗙晫绾?=============================");
		cons.log("")
		cons.groupEnd();
	}
}

/* 杞挱鑳屾櫙鍥剧墖 */
/* CSS background is handled in assets/css/_custom.scss */

/* 杩斿洖闅忔満棰滆壊 */
function randomColor() {
	return "rgb("+~~(255*Math.random())+","+~~(255*Math.random())+","+~~(255*Math.random())+")";
}

/* 榧犳爣鐐瑰嚮鏂囧瓧鐗规晥 */
var a_idx = 0;
var a_click = 1;
var a = new Array("浠庢浠ュ悗涓嶈皥鍦颁箙澶╅暱锛屽崟鍒€璧翠細鍋氭皵璐ㄦ祦姘撱€?, "鍏堢┛琚滃瓙鍐嶇┛闉嬶紝鍏堝綋瀛欏瓙鍦ㄥ綋鐖凤紝鐭ラ亾浠€涔堝彨鐖风埛鍚楋紝鐖哥埜鐨勭埜鐖稿氨鍙埛", "浣犲杩芥垜鍗佹潯琛楋紝璇存垜闀垮緱鍍忎綘鐖癸紒", "绀句細鐜板疄涓€鍦烘垙锛岀帺鐨勯兘鏄汉姘戝竵锛?,
			"涓€涓汉70鏂わ紝鍘诲帟鎵€鎷夊畬灞庡洖鏉ワ紝涓轰粈涔堣繕鏄?0鏂?鎷夎￥瀛愪笂浜嗐€?, "骞崇瓑", "鍏" ,"娉曟不", "鐖卞浗", "鏁笟", "璇氫俊", "鍙嬪杽",
			"鑰佸摜绋?, "甯︽垜椋?, "鍘夊浜唚ord鍝?, "鎵庡績浜嗚€侀搧", "钃濈槮棣欒弴", "杩樻湁杩欑鎿嶄綔?", "灏辨槸鏈夎繖绉嶆搷浣?,
			"鐨毊铏炬垜浠蛋", "绗戝埌鐚彨", "鐭充箰蹇?, "涓嶅瓨鍦ㄧ殑", "榛戣溅!", "鎴戣涓嬭溅!", "浠栬繕鍙槸涓瀛?, "璇蜂笉瑕佹斁杩囦粬",
			"鎯婁笉鎯婂枩?", "鎰忎笉鎰忓?", "鎴戞湁涓€涓ぇ鑳嗙殑鎯虫硶", "浣犵殑鑹績涓嶄細鐥涘悧", "浣犲績閲屽氨娌＄偣b鏁板悧", "娌℃湁,鎴戝緢鑶ㄨ儉",
			"绉€", "澶╃", "闄堢嫭绉€", "钂傝姳涔嬬", "閫犲寲閽熺绉€", "鎴戝幓涔板嚑涓瀛?, "浣犲氨绔欏湪姝ゅ湴", "涓嶈璧板姩",
			"鎴戝彲鑳借浜嗗亣涔?, "璐┓闄愬埗浜嗘垜鐨勬兂璞″姏", "鎵揷all", "褰撶劧鏄€夋嫨鍘熻皡濂瑰晩", "浣犳湁freestyle鍚?,
			"鍖楀ぇ杩樿鎾掕礉瀹?, "涓嶇煡濡荤編鍒樺己涓?, "鎮斿垱闃块噷鏉板厠椹?, "涓€鏃犳墍鏈夌帇鍋ユ灄", "鏅€氬搴┈鍖栬吘",
			"鍒偣浜?, "姹傛眰浣犲埆鐐逛簡", "浣犺繕鐐?, "浣犲啀鐐?", "鏈夋湰浜嬬户缁偣!", "浣犲帀瀹?, "鎴戞姇缈?,
			"w(路袛路)w", "(#`O鈥?", "锛?T袛T)/", "鈹敭锕忊敪鈹?, "_(:3銆嶁垹)_");
jQuery(document).ready(function($) {
    $("body").click(function(e) {
		/* 鐐瑰嚮棰戠巼锛岀偣鍑诲嚑娆″氨鎹㈡枃瀛?*/
		var frequency = 2;
		if (a_click % frequency === 0) {

			var $i = $("<span/>").text(a[a_idx]);
			a_idx = (a_idx + 1) % a.length;
			var x = e.pageX,
			y = e.pageY;
			$i.css({
				"z-index": 9999,
				"top": y - 20,
				"left": x,
				"position": "absolute",
				"font-weight": "bold",
				"color": randomColor(),
				"-webkit-user-select": "none",
				"-moz-user-select": "none",
				"-ms-user-select": "none",
				"user-select": "none"
			});
			$("body").append($i);
			$i.animate({
				"top": y - 180,
				"opacity": 0
			},
			1500,
			function() {
				$i.remove();
			});

		}
	a_click ++;

    });
});

/* 鎷夊钑惧鍥炲埌椤堕儴鎴栧簳閮ㄦ寜閽?*/
$(function() {
	$("#lamu img").eq(0).click(function() {
		$("html,body").animate({scrollTop:$(document).height()},800);
		return false;
	});
	$("#leimu img").eq(0).click(function() {
		$("html,body").animate({scrollTop:0},800);
		return false;
	});
});

function getCurrentDateString() {
	var now = new Date();
	var month = now.getMonth() + 1;
	var day = now.getDate();
	var hour = now.getHours();
	return "" + now.getFullYear() + (month < 10 ? "0" + month : month) + (day < 10 ? "0" + day : day) + (hour < 10 ? "0" + hour : hour);
}

/* 绂诲紑褰撳墠椤甸潰鏃朵慨鏀圭綉椤垫爣棰橈紝鍥炲埌褰撳墠椤甸潰鏃舵仮澶嶅師鏉ユ爣棰?*/
window.onload = function() {
  var OriginTitile = document.title;
  var titleTime;
  document.addEventListener('visibilitychange', function() {
    if(document.hidden) {
      $('[rel="icon"]').attr('href', "/failure.ico");
      $('[rel="shortcut icon"]').attr('href', "/failure.ico");
      document.title = '浣犲埆璧伴腑 嗖嗖?;
      clearTimeout(titleTime);
    } else {
      $('[rel="icon"]').attr('href', "/favicon-32x32.png");
      $('[rel="shortcut icon"]').attr('href', "/favicon-32x32.png");
      document.title = 'hi锛屼綘鍥炴潵鍟?Hi~ o(*锟ｂ柦锟?)銉?;
      titleTime = setTimeout(function() {
        document.title = OriginTitile;
      }, 2000);
	}
  });
}

/* 绔欑偣杩愯鏃堕棿 */
function runtime() {
	window.setTimeout("runtime()", 1000);
	/* 璇蜂慨鏀硅繖閲岀殑璧峰鏃堕棿 */
    let startTime = new Date('11/20/2022 15:00:00');
    let endTime = new Date();
    let usedTime = endTime - startTime;
    let days = Math.floor(usedTime / (24 * 3600 * 1000));
    let leavel = usedTime % (24 * 3600 * 1000);
    let hours = Math.floor(leavel / (3600 * 1000));
    let leavel2 = leavel % (3600 * 1000);
    let minutes = Math.floor(leavel2 / (60 * 1000));
    let leavel3 = leavel2 % (60 * 1000);
    let seconds = Math.floor(leavel3 / (1000));
    let runbox = document.getElementById('run-time');
    runbox.innerHTML = '鏈珯宸茶繍琛?i class="far fa-clock fa-fw"></i> '
        + ((days < 10) ? '0' : '') + days + ' 澶?'
        + ((hours < 10) ? '0' : '') + hours + ' 鏃?'
        + ((minutes < 10) ? '0' : '') + minutes + ' 鍒?'
        + ((seconds < 10) ? '0' : '') + seconds + ' 绉?';
}
runtime();
