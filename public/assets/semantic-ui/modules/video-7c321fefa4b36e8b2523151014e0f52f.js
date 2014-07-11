!function(e,o,n,t){e.fn.video=function(o){var n,a=e(this),i=a.selector||"",r=(new Date).getTime(),l=[],c=arguments[0],u="string"==typeof c,s=[].slice.call(arguments,1);return a.each(function(){var d,m=e.isPlainObject(o)?e.extend(!0,{},e.fn.video.settings,o):e.extend({},e.fn.video.settings),f=m.selector,p=m.className,h=m.error,g=m.metadata,b=m.namespace,v="."+b,y="module-"+b,w=e(this),F=w.find(f.placeholder),z=w.find(f.playButton),P=w.find(f.embed),T=this,C=w.data(y);d={initialize:function(){d.debug("Initializing video"),F.on("click"+v,d.play),z.on("click"+v,d.play),d.instantiate()},instantiate:function(){d.verbose("Storing instance of module",d),C=d,w.data(y,d)},destroy:function(){d.verbose("Destroying previous instance of video"),w.removeData(y).off(v),F.off(v),z.off(v)},change:function(e,o,n){d.debug("Changing video to ",e,o,n),w.data(g.source,e).data(g.id,o).data(g.url,n),m.onChange()},reset:function(){d.debug("Clearing video embed and showing placeholder"),w.removeClass(p.active),P.html(" "),F.show(),m.onReset()},play:function(){d.debug("Playing video");var e=w.data(g.source)||!1,o=w.data(g.url)||!1,n=w.data(g.id)||!1;P.html(d.generate.html(e,n,o)),w.addClass(p.active),m.onPlay()},generate:{html:function(e,o,n){d.debug("Generating embed html");var t,a="auto"==m.width?w.width():m.width,i="auto"==m.height?w.height():m.height;return e&&o?"vimeo"==e?t='<iframe src="http://player.vimeo.com/video/'+o+"?="+d.generate.url(e)+'" width="'+a+'" height="'+i+'" frameborder="0" webkitAllowFullScreen mozallowfullscreen allowFullScreen></iframe>':"youtube"==e&&(t='<iframe src="http://www.youtube.com/embed/'+o+"?="+d.generate.url(e)+'" width="'+a+'" height="'+i+'" frameborder="0" webkitAllowFullScreen mozallowfullscreen allowFullScreen></iframe>'):n?t='<iframe src="'+n+'" width="'+a+'" height="'+i+'" frameborder="0" webkitAllowFullScreen mozallowfullscreen allowFullScreen></iframe>':d.error(h.noVideo),t},url:function(e){var o=m.api?1:0,n=m.autoplay?1:0,t=m.hd?1:0,a=m.showUI?1:0,i=m.showUI?0:1,r="";return"vimeo"==e&&(r="api="+o+"&amp;title="+a+"&amp;byline="+a+"&amp;portrait="+a+"&amp;autoplay="+n,m.color&&(r+="&amp;color="+m.color)),"ustream"==e?(r="autoplay="+n,m.color&&(r+="&amp;color="+m.color)):"youtube"==e&&(r="enablejsapi="+o+"&amp;autoplay="+n+"&amp;autohide="+i+"&amp;hq="+t+"&amp;modestbranding=1",m.color&&(r+="&amp;color="+m.color)),r}},setting:function(o,n){if(e.isPlainObject(o))e.extend(!0,m,o);else{if(n===t)return m[o];m[o]=n}},internal:function(o,n){if(e.isPlainObject(o))e.extend(!0,d,o);else{if(n===t)return d[o];d[o]=n}},debug:function(){m.debug&&(m.performance?d.performance.log(arguments):(d.debug=Function.prototype.bind.call(console.info,console,m.name+":"),d.debug.apply(console,arguments)))},verbose:function(){m.verbose&&m.debug&&(m.performance?d.performance.log(arguments):(d.verbose=Function.prototype.bind.call(console.info,console,m.name+":"),d.verbose.apply(console,arguments)))},error:function(){d.error=Function.prototype.bind.call(console.error,console,m.name+":"),d.error.apply(console,arguments)},performance:{log:function(e){var o,n,t;m.performance&&(o=(new Date).getTime(),t=r||o,n=o-t,r=o,l.push({Element:T,Name:e[0],Arguments:[].slice.call(e,1)||"","Execution Time":n})),clearTimeout(d.performance.timer),d.performance.timer=setTimeout(d.performance.display,100)},display:function(){var o=m.name+":",n=0;r=!1,clearTimeout(d.performance.timer),e.each(l,function(e,o){n+=o["Execution Time"]}),o+=" "+n+"ms",i&&(o+=" '"+i+"'"),a.size()>1&&(o+=" ("+a.size()+")"),(console.group!==t||console.table!==t)&&l.length>0&&(console.groupCollapsed(o),console.table?console.table(l):e.each(l,function(e,o){console.log(o.Name+": "+o["Execution Time"]+"ms")}),console.groupEnd()),l=[]}},invoke:function(o,a,i){var r,l,c,u=C;return a=a||s,i=T||i,"string"==typeof o&&u!==t&&(o=o.split(/[\. ]/),r=o.length-1,e.each(o,function(n,a){var i=n!=r?a+o[n+1].charAt(0).toUpperCase()+o[n+1].slice(1):o;if(e.isPlainObject(u[i])&&n!=r)u=u[i];else{if(u[i]!==t)return l=u[i],!1;if(!e.isPlainObject(u[a])||n==r)return u[a]!==t?(l=u[a],!1):!1;u=u[a]}})),e.isFunction(l)?c=l.apply(i,a):l!==t&&(c=l),e.isArray(n)?n.push(c):n!==t?n=[n,c]:c!==t&&(n=c),l}},u?(C===t&&d.initialize(),d.invoke(c)):(C!==t&&d.destroy(),d.initialize())}),n!==t?n:this},e.fn.video.settings={name:"Video",namespace:"video",debug:!1,verbose:!0,performance:!0,metadata:{source:"source",id:"id",url:"url"},onPlay:function(){},onReset:function(){},onChange:function(){},onPause:function(){},onStop:function(){},width:"auto",height:"auto",autoplay:!1,color:"#442359",hd:!0,showUI:!1,api:!0,error:{noVideo:"No video specified",method:"The method you called is not defined"},className:{active:"active"},selector:{embed:".embed",placeholder:".placeholder",playButton:".play"}}}(jQuery,window,document);