function initialize(){var a=new google.maps.LatLng(22.999255,120.215013),e=12,n={center:a,zoom:e,styles:styledMap,disableDefaultUI:!0,mapTypeId:google.maps.MapTypeId.ROADMAP};map=new google.maps.Map(document.getElementById("map_canvas"),n);for(var o=[],i=gon.real_price_list,t=0;t<i.length;t++)createMarker(i[t],o);new MarkerClusterer(map,o)}function addAroundMarker(a){if("police_stations"===a.data)for(var e in aroundMarkers.police_stations)if(e.addr===a.addr)return;var n="";"stores"===a.data?n="/assets/stores-809f532ff0ae94c8a017caeb292d0411.jpg":"stations"===a.data?n="/assets/stations-3ff530afdfff30ab7b7576aa91073ca9.jpg":"dinings"===a.data?n="/assets/dinings-4f9f6a141b6c6726d530cb0ae6174bb3.jpg":"tainan_schools"===a.data?n="/assets/tainan_schools-ef07777eeb4b98f0daa6d224372a8b38.jpg":"tainan_markets"===a.data?n="/assets/tainan_markets-6fc809e30c792c93b1c6d333782f8f25.jpg":"hospitals"===a.data?n="/assets/hospitals-671cce95c4cd672fd9989ab9ded91072.png":"police_stations"===a.data&&(n="/assets/police_stations-f43170ee6b5a13a52ec83eb215ec5601.png");var o={url:n,size:new google.maps.Size(30,30)},i=new google.maps.Marker({map:null,position:new google.maps.LatLng(a.lat,a.lng),id:a.id,data:a.data,lat:a.lat,lng:a.lng,icon:o});google.maps.event.addListener(i,"mouseover",function(){infowindow=new google.maps.InfoWindow;var e="";for(var n in a)e+="<p>"+n+": "+a[n]+"</p>";infowindow.setContent(e),infowindow.open(map,this)}),google.maps.event.addListener(i,"mouseout",function(){infowindow.close(map,this)}),a.data in aroundMarkers||(aroundMarkers[a.data]=[]),aroundMarkers[a.data].push(i)}function createMarker(a,e){var n=new google.maps.Marker({map:map,position:new google.maps.LatLng(a.lat,a.lng),id:a.id,data:a.data,lat:a.lat,lng:a.lng});google.maps.event.addListener(n,"mouseover",function(){}),google.maps.event.addListener(n,"mouseout",function(){}),google.maps.event.addListener(n,"click",function(){if(deleteAround(),$(".form .fields .checkbox").checkbox("disable"),jQuery.ajax({url:"/events/show",dataType:"json",type:"GET",data:{real_price_id:n.id,data:n.data,lat:n.lat,lng:n.lng},success:function(a){for(i=0;i<a.length;++i)"sale_houses"==a[i].data?$("#information").html('<span class="left-information"><div class="orange ui ribbon label">\u985e\u578b</div><p>'+a[i].use+'</p></span><span class="right-information"><div class="orange ui ribbon label">\u683c\u5c40</div><p>'+a[i].structure+'</p></span><span class="left-information"><div class="orange ui ribbon label">\u5730\u5740</div><p>'+a[i].address+'</p></span><span class="right-information"><div class="orange ui ribbon label">\u552e\u50f9</div><p>'+a[i].price+'</p></span><span class="left-information"><div class="orange ui ribbon label">\u806f\u7d61\u4eba</div><p>'+a[i].owner+'</p></span><span class="right-information"><div class="orange ui ribbon label">\u806f\u7d61\u96fb\u8a71</div><p>'+a[i].tel+'</p></span><span class="brief"><div class="orange ui ribbon label">\u520a\u767b\u8cc7\u8a0a</div><p>'+a[i].breif+"</p></span>"):"rent_houses"==a[i].data?$("#information").html('<span class="left-information"><div class="orange ui ribbon label">\u985e\u578b</div><p>'+a[i].use+'</p></span><span class="right-information"><div class="orange ui ribbon label">\u683c\u5c40</div><p>'+a[i].structure+'</p></span><span class="left-information"><div class="orange ui ribbon label">\u5730\u5740</div><p>'+a[i].address+'</p></span><span class="right-information"><div class="orange ui ribbon label">\u79df\u91d1</div><p>'+a[i].price+'</p></span><span class="left-information"><div class="orange ui ribbon label">\u806f\u7d61\u4eba</div><p>'+a[i].owner+'</p></span><span class="right-information"><div class="orange ui ribbon label">\u806f\u7d61\u96fb\u8a71</div><p>'+a[i].tel+'</p></span><span class="left-information"><div class="orange ui ribbon label">\u520a\u767b\u8cc7\u8a0a</div><p>'+a[i].breif+"</p></span>"):"real_price_deals"==a[i].data?$("#information").html('"<div class="red ui ribbon label">\u9109\u93ae\u5e02\u5340</div><p>'+a[i].area+'</p>"<div class="green ui ribbon label">\u571f\u5730\u8def\u6bb5</div><p>'+a[i].location+'</p>"<div class="blue ui ribbon label">\u7e3d\u6210\u4ea4\u50f9</div><p>'+a[i].total_price+"\u5143</p>"):(a[i].data in around||(console.log("found "+a[i].data),around[a[i].data]=[]),around[a[i].data].push(a[i]),addAroundMarker(a[i]));$("input").each(function(){var a=$(this).attr("name"),e=$(this).next("label").attr("id");$(this).next("label").text(a in aroundMarkers?e+" ("+aroundMarkers[a].length+")":e+" (0)")})},error:function(a){alert("something went wrong"),console.error(a)}}),window.DISQUS)DISQUS.reset({reload:!0,config:function(){this.page.identifier=n.id,this.page.url="https://example.com/#!newthread"}});else{var a="whatshouse",e=n.id;!function(){var n=document.createElement("script");n.type="text/javascript",n.async=!0,n.id=e,n.src="//"+a+".disqus.com/embed.js",(document.getElementsByTagName("head")[0]||document.getElementsByTagName("body")[0]).appendChild(n)}()}}),e.push(n)}function showAround(a){if("all"!==a){if(a in aroundMarkers)for(var e=0;e!=aroundMarkers[a].length;e++)aroundMarkers[a][e].setMap(map)}else for(var n in aroundMarkers)for(var e=0;e!=aroundMarkers[n].length;e++)aroundMarkers[n][e].setMap(map)}function hideAround(a){if("all"!==a){if(a in aroundMarkers)for(var e=0;e!=aroundMarkers[a].length;e++)aroundMarkers[a][e].setMap(null)}else for(var n in aroundMarkers)for(var e=0;e!=aroundMarkers[n].length;e++)aroundMarkers[n][e].setMap(null)}function deleteAround(){hideAround("all"),around={},aroundMarkers={}}var map,infowindow,services,around={},aroundMarkers={},styledMap=[{featureType:"water",stylers:[{visibility:"on"},{color:"#acbcc9"}]},{featureType:"landscape",stylers:[{color:"#f2e5d4"}]},{featureType:"road.highway",elementType:"geometry",stylers:[{color:"#c5c6c6"}]},{featureType:"road.arterial",elementType:"geometry",stylers:[{color:"#e4d7c6"}]},{featureType:"road.local",elementType:"geometry",stylers:[{color:"#fbfaf7"}]},{featureType:"poi.park",elementType:"geometry",stylers:[{color:"#c5dac6"}]},{featureType:"administrative",stylers:[{visibility:"on"},{lightness:33}]},{featureType:"road"},{featureType:"poi.park",elementType:"labels",stylers:[{visibility:"on"},{lightness:20}]},{},{featureType:"road",stylers:[{lightness:20}]}],TainanRealPrice=[{name:"\u6771\u5340",location:new google.maps.LatLng(22.999255,120.215013)},{name:"\u6c38\u5eb7\u5340",location:new google.maps.LatLng(23.021604,120.251487)},{name:"\u4e2d\u897f\u5340",location:new google.maps.LatLng(22.996086,120.196939)},{name:"\u5317\u5340",location:new google.maps.LatLng(23.010149,120.208012)},{name:"\u5b89\u5357\u5340",location:new google.maps.LatLng(23.064255,120.135101)},{name:"\u65b0\u71df\u5340",location:new google.maps.LatLng(23.312937,120.313286)},{name:"\u5357\u5340",location:new google.maps.LatLng(22.9595,120.187313)},{name:"\u6b78\u4ec1\u5340",location:new google.maps.LatLng(22.972302,120.282387)},{name:"\u4ec1\u5fb7\u5340",location:new google.maps.LatLng(22.972618,120.251831)},{name:"\u5b89\u5e73\u5340",location:new google.maps.LatLng(22.996639,120.164997)},{name:"\u9ebb\u8c46\u5340",location:new google.maps.LatLng(23.189285,120.251144)},{name:"\u5584\u5316\u5340",location:new google.maps.LatLng(23.136572,120.300094)},{name:"\u4f73\u91cc\u5340",location:new google.maps.LatLng(23.177923,120.17012)},{name:"\u767d\u6cb3\u5340",location:new google.maps.LatLng(23.340995,120.458854)},{name:"\u65b0\u5e02\u5340",location:new google.maps.LatLng(23.085891,120.300609)},{name:"\u65b0\u5316\u5340",location:new google.maps.LatLng(23.043405,120.310196)},{name:"\u4e03\u80a1\u5340",location:new google.maps.LatLng(23.126468,120.103515)},{name:"\u6771\u5c71\u5340",location:new google.maps.LatLng(23.290549,120.448211)},{name:"\u95dc\u5edf\u5340",location:new google.maps.LatLng(22.966296,120.327705)},{name:"\u5b98\u7530\u5340",location:new google.maps.LatLng(23.189285,120.332855)},{name:"\u67f3\u71df\u5340",location:new google.maps.LatLng(23.282665,120.317405)},{name:"\u7389\u4e95\u5340",location:new google.maps.LatLng(23.124219,120.460085)},{name:"\u9e7d\u6c34\u5340",location:new google.maps.LatLng(23.27415,120.241134)},{name:"\u5b78\u7532\u5340",location:new google.maps.LatLng(23.263111,120.169777)},{name:"\u5f8c\u58c1\u5340",location:new google.maps.LatLng(23.372199,120.355858)},{name:"\u516d\u7532\u5340",location:new google.maps.LatLng(23.232316,120.34711)},{name:"\u5357\u5316\u5340",location:new google.maps.LatLng(23.116365,120.565231)},{name:"\u5b89\u5b9a\u5340",location:new google.maps.LatLng(23.098681,120.216839)},{name:"\u6960\u897f\u5340",location:new google.maps.LatLng(23.174727,120.486392)},{name:"\u897f\u6e2f\u5340",location:new google.maps.LatLng(23.123587,120.203387)},{name:"\u5c07\u8ecd\u5340",location:new google.maps.LatLng(23.199699,120.158991)},{name:"\u4e0b\u71df\u5340",location:new google.maps.LatLng(23.232355,120.268337)},{name:"\u9f8d\u5d0e\u5340",location:new google.maps.LatLng(22.961238,120.37886)},{name:"\u5317\u9580\u5340",location:new google.maps.LatLng(23.292757,120.126518)},{name:"\u5927\u5167\u5340",location:new google.maps.LatLng(23.148884,120.401863)},{name:"\u5de6\u93ae\u5340",location:new google.maps.LatLng(23.034875,120.426925)},{name:"\u5c71\u4e0a\u5340",location:new google.maps.LatLng(23.098997,120.373024)}];google.maps.event.addDomListener(window,"load",initialize);