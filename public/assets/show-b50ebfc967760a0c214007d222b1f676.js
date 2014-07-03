function initialize(){var a=new google.maps.LatLng(22.999255,120.215013),e=12,n={center:a,zoom:e,styles:styledMap,disableDefaultUI:!0,mapTypeId:google.maps.MapTypeId.ROADMAP};map=new google.maps.Map(document.getElementById("map_canvas"),n),infowindow=new google.maps.InfoWindow,markers=[];for(var o=gon.real_price_list,s=0;s<o.length;s++)createMarker(o[s],markers);markerCluster=new MarkerClusterer(map,markers)}function addAroundMarker(a){if("police_stations"===a.data)for(var e in aroundMarkers.police_stations)if(e.addr===a.addr)return;var n="";"stores"===a.data?n="/assets/stores-809f532ff0ae94c8a017caeb292d0411.jpg":"stations"===a.data?n="/assets/stations-9d5b047b6dc5b12f04365d8523ed9476.png":"dinings"===a.data?n="/assets/dinings-ba840dc6932c0ffd5f44957857c3edd3.png":"tainan_schools"===a.data?n="/assets/tainan_schools-7040a2104329ad7005a23fbe869761b1.png":"tainan_markets"===a.data?n="/assets/tainan_markets-11d6a9069092f7f8c680d9426619d40b.png":"hospitals"===a.data?n="/assets/hospitals-bfa08ab7f248fdeb9dc2c3649bc8a593.png":"police_stations"===a.data&&(n="/assets/police_stations-f43170ee6b5a13a52ec83eb215ec5601.png");var o={url:n,size:new google.maps.Size(30,30)},s=new google.maps.Marker({map:null,position:new google.maps.LatLng(a.lat,a.lng),id:a.id,data:a.data,lat:a.lat,lng:a.lng,icon:o});google.maps.event.addListener(s,"mouseover",function(){infowindow=new google.maps.InfoWindow;var e="";for(var n in a)"name"===n?e+="<p>\u540d\u7a31: "+a.name+"</p>":"address"===n?e+="<p>address: "+a.address+"</p>":"addr"===n?e+="<p>addr: "+a.addr+"</p>":"location"===n?e+="<p>location: "+a.location+"</p>":"breif"===n?e+="<p>brief: "+a.breif+"</p>":"tel"===n?e+="<p>tel: "+a.tel+"</p>":"time"===n&&(e+="<p>time: "+a.time+"</p>");infowindow.setContent(e),infowindow.open(map,this)}),google.maps.event.addListener(s,"mouseout",function(){infowindow.close(map,this)}),a.data in aroundMarkers||(aroundMarkers[a.data]=[]),aroundMarkers[a.data].push(s)}function createMarker(a,e){var n=new google.maps.Marker({map:map,position:new google.maps.LatLng(a.lat,a.lng),id:a.id,data:a.data,lat:a.lat,lng:a.lng});google.maps.event.addListener(n,"mouseover",function(){}),google.maps.event.addListener(n,"mouseout",function(){}),google.maps.event.addListener(n,"click",function(){if(focusPoint.lat!==n.lat||focusPoint.lng!==n.lng)if(focusPoint.lat=n.lat,focusPoint.lng=n.lng,deleteAround(),$(".form .fields .checkbox").checkbox("disable"),jQuery.ajax({url:"/events/show",dataType:"json",type:"GET",data:{real_price_id:n.id,data:n.data,lat:n.lat,lng:n.lng},success:function(a){for(i=0;i<a.length;++i)if("sale_houses"==a[i].data)$("#information").html('<span class="left-information"><div class="orange ui ribbon label">\u985e\u578b</div><p>'+a[i].use+'</p></span><span class="right-information"><div class="orange ui ribbon label">\u683c\u5c40</div><p>'+a[i].structure+'</p></span><span class="left-information"><div class="orange ui ribbon label">\u5730\u5740</div><p>'+a[i].address+'</p></span><span class="right-information"><div class="orange ui ribbon label">\u552e\u50f9</div><p>'+a[i].price+'</p></span><span class="left-information"><div class="orange ui ribbon label">\u806f\u7d61\u4eba</div><p>'+a[i].owner+'</p></span><span class="right-information"><div class="orange ui ribbon label">\u806f\u7d61\u96fb\u8a71</div><p>'+a[i].tel+'</p></span><span class="brief"><div class="orange ui ribbon label">\u520a\u767b\u8cc7\u8a0a</div><p>'+a[i].breif+"</p></span>");else if("rent_houses"==a[i].data){getHouse=a[i],$("#information").html('<button class="add_to_cart" onclick="addToCart()">add to cart</button><span class="left-information"><div class="orange ui ribbon label">\u985e\u578b</div><p>'+a[i].use+'</p></span><span class="right-information"><div class="orange ui ribbon label">\u683c\u5c40</div><p>'+a[i].structure+'</p></span><span class="left-information"><div class="orange ui ribbon label">\u5730\u5740</div><p>'+a[i].address+'</p></span><span class="right-information"><div class="orange ui ribbon label">\u79df\u91d1</div><p>'+a[i].price+'</p></span><span class="left-information"><div class="orange ui ribbon label">\u806f\u7d61\u4eba</div><p>'+a[i].owner+'</p></span><span class="right-information"><div class="orange ui ribbon label">\u806f\u7d61\u96fb\u8a71</div><p>'+a[i].tel+'</p></span><span class="left-information"><div class="orange ui ribbon label">\u520a\u767b\u8cc7\u8a0a</div><p>'+a[i].breif+"</p></span>");var e=splitImgUrl(a[i].img);$("#slider1_container #images").html(e),jssor_slider1_starter("slider1_container")}else"real_price_deals"==a[i].data?$("#information").html('"<div class="red ui ribbon label">\u9109\u93ae\u5e02\u5340</div><p>'+a[i].area+'</p>"<div class="green ui ribbon label">\u571f\u5730\u8def\u6bb5</div><p>'+a[i].location+'</p>"<div class="blue ui ribbon label">\u7e3d\u6210\u4ea4\u50f9</div><p>'+a[i].total_price+"\u5143</p>"):(a[i].data in around||(console.log("found "+a[i].data),around[a[i].data]=[]),around[a[i].data].push(a[i]),addAroundMarker(a[i]));$("#around_services").find("input").each(function(){var a=$(this).attr("name"),e=$(this).next("label").attr("id");$(this).next("label").text(a in aroundMarkers?e+" ("+aroundMarkers[a].length+")":e+" (0)")})},error:function(a){alert("something went wrong"),console.error(a)}}),window.DISQUS)DISQUS.reset({reload:!0,config:function(){this.page.identifier=n.id,this.page.url="https://example.com/#!newthread"}});else{var a="whatshouse",e=n.id;!function(){var n=document.createElement("script");n.type="text/javascript",n.async=!0,n.id=e,n.src="//"+a+".disqus.com/embed.js",(document.getElementsByTagName("head")[0]||document.getElementsByTagName("body")[0]).appendChild(n)}()}}),e.push(n)}function showAround(a){if("all"!==a){if(a in aroundMarkers)for(var e=0;e!=aroundMarkers[a].length;e++)aroundMarkers[a][e].setMap(map)}else for(var n in aroundMarkers)for(var e=0;e!=aroundMarkers[n].length;e++)aroundMarkers[n][e].setMap(map)}function hideAround(a){if("all"!==a){if(a in aroundMarkers)for(var e=0;e!=aroundMarkers[a].length;e++)aroundMarkers[a][e].setMap(null)}else for(var n in aroundMarkers)for(var e=0;e!=aroundMarkers[n].length;e++)aroundMarkers[n][e].setMap(null)}function deleteAround(){hideAround("all"),around={},aroundMarkers={}}function setAllMap(a){for(var e=0;e<markers.length;e++)markers[e].setMap(a)}function clearMarkers(){setAllMap(null)}function deleteMarkers(){clearMarkers(),markers=[]}function search(){$(".search_form").on("ajax:success",function(a,e){markerCluster.setMap(null),markerCluster=[],deleteMarkers(),deleteAround();var n=e[1];if(" "!=n){$("div.ui.form.success").hide();var o=e[0][n[0]];for($("div#advanced_search").html("<h3>\u641c\u5c0b\u6392\u540d</h3><ol id='search_result'><li>"+o.address+" "+o.price+"\u5143</li>"),t=1;3>t&&!(n.length<=t);++t){var s=e[0][n[t]];$("#search_result").append("<li>"+s.address+" "+s.price+"\u5143</li>")}$("#search_result").append("</ol>")}for(var r=e[0],t=0;t<r.length;t++)createMarker(r[t],markers);markerCluster=new MarkerClusterer(map,markers)})}function splitImgUrl(a){var e=a.split(",");console.log(e);for(var n="",o=0;o<e.length;o++)console.log(e[o]),n+='<div><img u="image" src="'+e[o]+'" /></div>';return n}function addToCart(){var a=5,e=1;return a>=house_number&&(house_array.push(getHouse),e++,$(".cart").append("<div>"+getHouse.address+getHouse.price+'<button onclick="javascript:removeFromCart(this)" id="house'+house_number+'"class="removeclass">\xd7</button></div>'),house_number++),!1}function removeFromCart(a){return house_number>=1&&(delete house_array[a.id[4]],$(a).parent("div").remove(),house_number--),!1}var map,infowindow,services,around={},aroundMarkers={},markers=[],markerCluster,getHouse,focusPoint={lat:null,lng:null},styledMap=[{featureType:"water",stylers:[{visibility:"on"},{color:"#acbcc9"}]},{featureType:"landscape",stylers:[{color:"#f2e5d4"}]},{featureType:"road.highway",elementType:"geometry",stylers:[{color:"#c5c6c6"}]},{featureType:"road.arterial",elementType:"geometry",stylers:[{color:"#e4d7c6"}]},{featureType:"road.local",elementType:"geometry",stylers:[{color:"#fbfaf7"}]},{featureType:"poi.park",elementType:"geometry",stylers:[{color:"#c5dac6"}]},{featureType:"administrative",stylers:[{visibility:"on"},{lightness:33}]},{featureType:"road"},{featureType:"poi.park",elementType:"labels",stylers:[{visibility:"on"},{lightness:20}]},{},{featureType:"road",stylers:[{lightness:20}]}],TainanRealPrice=[{name:"\u6771\u5340",location:new google.maps.LatLng(22.999255,120.215013)},{name:"\u6c38\u5eb7\u5340",location:new google.maps.LatLng(23.021604,120.251487)},{name:"\u4e2d\u897f\u5340",location:new google.maps.LatLng(22.996086,120.196939)},{name:"\u5317\u5340",location:new google.maps.LatLng(23.010149,120.208012)},{name:"\u5b89\u5357\u5340",location:new google.maps.LatLng(23.064255,120.135101)},{name:"\u65b0\u71df\u5340",location:new google.maps.LatLng(23.312937,120.313286)},{name:"\u5357\u5340",location:new google.maps.LatLng(22.9595,120.187313)},{name:"\u6b78\u4ec1\u5340",location:new google.maps.LatLng(22.972302,120.282387)},{name:"\u4ec1\u5fb7\u5340",location:new google.maps.LatLng(22.972618,120.251831)},{name:"\u5b89\u5e73\u5340",location:new google.maps.LatLng(22.996639,120.164997)},{name:"\u9ebb\u8c46\u5340",location:new google.maps.LatLng(23.189285,120.251144)},{name:"\u5584\u5316\u5340",location:new google.maps.LatLng(23.136572,120.300094)},{name:"\u4f73\u91cc\u5340",location:new google.maps.LatLng(23.177923,120.17012)},{name:"\u767d\u6cb3\u5340",location:new google.maps.LatLng(23.340995,120.458854)},{name:"\u65b0\u5e02\u5340",location:new google.maps.LatLng(23.085891,120.300609)},{name:"\u65b0\u5316\u5340",location:new google.maps.LatLng(23.043405,120.310196)},{name:"\u4e03\u80a1\u5340",location:new google.maps.LatLng(23.126468,120.103515)},{name:"\u6771\u5c71\u5340",location:new google.maps.LatLng(23.290549,120.448211)},{name:"\u95dc\u5edf\u5340",location:new google.maps.LatLng(22.966296,120.327705)},{name:"\u5b98\u7530\u5340",location:new google.maps.LatLng(23.189285,120.332855)},{name:"\u67f3\u71df\u5340",location:new google.maps.LatLng(23.282665,120.317405)},{name:"\u7389\u4e95\u5340",location:new google.maps.LatLng(23.124219,120.460085)},{name:"\u9e7d\u6c34\u5340",location:new google.maps.LatLng(23.27415,120.241134)},{name:"\u5b78\u7532\u5340",location:new google.maps.LatLng(23.263111,120.169777)},{name:"\u5f8c\u58c1\u5340",location:new google.maps.LatLng(23.372199,120.355858)},{name:"\u516d\u7532\u5340",location:new google.maps.LatLng(23.232316,120.34711)},{name:"\u5357\u5316\u5340",location:new google.maps.LatLng(23.116365,120.565231)},{name:"\u5b89\u5b9a\u5340",location:new google.maps.LatLng(23.098681,120.216839)},{name:"\u6960\u897f\u5340",location:new google.maps.LatLng(23.174727,120.486392)},{name:"\u897f\u6e2f\u5340",location:new google.maps.LatLng(23.123587,120.203387)},{name:"\u5c07\u8ecd\u5340",location:new google.maps.LatLng(23.199699,120.158991)},{name:"\u4e0b\u71df\u5340",location:new google.maps.LatLng(23.232355,120.268337)},{name:"\u9f8d\u5d0e\u5340",location:new google.maps.LatLng(22.961238,120.37886)},{name:"\u5317\u9580\u5340",location:new google.maps.LatLng(23.292757,120.126518)},{name:"\u5927\u5167\u5340",location:new google.maps.LatLng(23.148884,120.401863)},{name:"\u5de6\u93ae\u5340",location:new google.maps.LatLng(23.034875,120.426925)},{name:"\u5c71\u4e0a\u5340",location:new google.maps.LatLng(23.098997,120.373024)}],house_number=$(".cart").length,house_array=[];google.maps.event.addDomListener(window,"load",initialize);