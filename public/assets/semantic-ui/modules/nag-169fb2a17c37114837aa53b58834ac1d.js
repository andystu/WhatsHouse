!function(e,o,t,n){e.fn.nag=function(t){var i,s=e(this),r=s.selector||"",a=(new Date).getTime(),c=[],l=arguments[0],u="string"==typeof l,d=[].slice.call(arguments,1);return e(this).each(function(){var g,f,m,p,h,b,v,y,w,k=e.extend(!0,{},e.fn.nag.settings,t),x=k.className,T=k.selector,S=k.error,z=k.namespace,A="."+z,H=z+"-module",F=e(this),N=F.find(T.close),O=e(k.context),C=this,D=F.data(H),M=o.requestAnimationFrame||o.mozRequestAnimationFrame||o.webkitRequestAnimationFrame||o.msRequestAnimationFrame||function(e){setTimeout(e,0)};w={initialize:function(){w.verbose("Initializing element"),g=F.offset(),f=F.outerHeight(),m=O.outerWidth(),p=O.outerHeight(),h=O.offset(),F.data(H,w),N.on("click"+A,w.dismiss),k.context==o&&"fixed"==k.position&&F.addClass(x.fixed),k.sticky&&(w.verbose("Adding scroll events"),"absolute"==k.position?O.on("scroll"+A,w.event.scroll).on("resize"+A,w.event.scroll):e(o).on("scroll"+A,w.event.scroll).on("resize"+A,w.event.scroll),e.proxy(w.event.scroll,this)()),k.displayTime>0&&setTimeout(w.hide,k.displayTime),w.should.show()?F.is(":visible")||w.show():w.hide()},destroy:function(){w.verbose("Destroying instance"),F.removeData(H).off(A),k.sticky&&O.off(A)},refresh:function(){w.debug("Refreshing cached calculations"),g=F.offset(),f=F.outerHeight(),m=O.outerWidth(),p=O.outerHeight(),h=O.offset()},show:function(){w.debug("Showing nag",k.animation.show),"fade"==k.animation.show?F.fadeIn(k.duration,k.easing):F.slideDown(k.duration,k.easing)},hide:function(){w.debug("Showing nag",k.animation.hide),"fade"==k.animation.show?F.fadeIn(k.duration,k.easing):F.slideUp(k.duration,k.easing)},onHide:function(){w.debug("Removing nag",k.animation.hide),F.remove(),k.onHide&&k.onHide()},stick:function(){if(w.refresh(),"fixed"==k.position){var t=e(o).prop("pageYOffset")||e(o).scrollTop(),n=F.hasClass(x.bottom)?h.top+(p-f)-t:h.top-t;F.css({position:"fixed",top:n,left:h.left,width:m-k.scrollBarWidth})}else F.css({top:v})},unStick:function(){F.css({top:""})},dismiss:function(e){k.storageMethod&&w.storage.set(k.storedKey,k.storedValue),w.hide(),e.stopImmediatePropagation(),e.preventDefault()},should:{show:function(){return k.persist?(w.debug("Persistent nag is set, can show nag"),!0):w.storage.get(k.storedKey)!=k.storedValue?(w.debug("Stored value is not set, can show nag",w.storage.get(k.storedKey)),!0):(w.debug("Stored value is set, cannot show nag",w.storage.get(k.storedKey)),!1)},stick:function(){return b=O.prop("pageYOffset")||O.scrollTop(),v=F.hasClass(x.bottom)?p-F.outerHeight()+b:b,v>g.top?!0:"fixed"==k.position?!0:!1}},storage:{set:function(t,i){w.debug("Setting stored value",t,i,k.storageMethod),"local"==k.storageMethod&&o.store!==n?o.store.set(t,i):e.cookie!==n?e.cookie(t,i):w.error(S.noStorage)},get:function(t){return w.debug("Getting stored value",t,k.storageMethod),"local"==k.storageMethod&&o.store!==n?o.store.get(t):e.cookie!==n?e.cookie(t):void w.error(S.noStorage)}},event:{scroll:function(){y!==n&&clearTimeout(y),y=setTimeout(function(){w.should.stick()?M(w.stick):w.unStick()},k.lag)}},setting:function(o,t){if(e.isPlainObject(o))e.extend(!0,k,o);else{if(t===n)return k[o];k[o]=t}},internal:function(o,t){return w.debug("Changing internal",o,t),t===n?w[o]:void(e.isPlainObject(o)?e.extend(!0,w,o):w[o]=t)},debug:function(){k.debug&&(k.performance?w.performance.log(arguments):(w.debug=Function.prototype.bind.call(console.info,console,k.name+":"),w.debug.apply(console,arguments)))},verbose:function(){k.verbose&&k.debug&&(k.performance?w.performance.log(arguments):(w.verbose=Function.prototype.bind.call(console.info,console,k.name+":"),w.verbose.apply(console,arguments)))},error:function(){w.error=Function.prototype.bind.call(console.error,console,k.name+":"),w.error.apply(console,arguments)},performance:{log:function(e){var o,t,n;k.performance&&(o=(new Date).getTime(),n=a||o,t=o-n,a=o,c.push({Element:C,Name:e[0],Arguments:[].slice.call(e,1)||"","Execution Time":t})),clearTimeout(w.performance.timer),w.performance.timer=setTimeout(w.performance.display,100)},display:function(){var o=k.name+":",t=0;a=!1,clearTimeout(w.performance.timer),e.each(c,function(e,o){t+=o["Execution Time"]}),o+=" "+t+"ms",r&&(o+=" '"+r+"'"),s.size()>1&&(o+=" ("+s.size()+")"),(console.group!==n||console.table!==n)&&c.length>0&&(console.groupCollapsed(o),console.table?console.table(c):e.each(c,function(e,o){console.log(o.Name+": "+o["Execution Time"]+"ms")}),console.groupEnd()),c=[]}},invoke:function(o,t,s){var r,a,c,l=D;return t=t||d,s=C||s,"string"==typeof o&&l!==n&&(o=o.split(/[\. ]/),r=o.length-1,e.each(o,function(t,i){var s=t!=r?i+o[t+1].charAt(0).toUpperCase()+o[t+1].slice(1):o;if(e.isPlainObject(l[s])&&t!=r)l=l[s];else{if(l[s]!==n)return a=l[s],!1;if(!e.isPlainObject(l[i])||t==r)return l[i]!==n?(a=l[i],!1):!1;l=l[i]}})),e.isFunction(a)?c=a.apply(s,t):a!==n&&(c=a),e.isArray(i)?i.push(c):i!==n?i=[i,c]:c!==n&&(i=c),a}},u?(D===n&&w.initialize(),w.invoke(l)):(D!==n&&w.destroy(),w.initialize())}),i!==n?i:this},e.fn.nag.settings={name:"Nag",debug:!1,verbose:!0,performance:!0,namespace:"Nag",persist:!1,displayTime:0,animation:{show:"slide",hide:"slide"},position:"fixed",scrollBarWidth:18,storageMethod:"cookie",storedKey:"nag",storedValue:"dismiss",sticky:!1,lag:0,context:o,error:{noStorage:"Neither $.cookie or store is defined. A storage solution is required for storing state",method:"The method you called is not defined."},className:{bottom:"bottom",fixed:"fixed"},selector:{close:".icon.close"},speed:500,easing:"easeOutQuad",onHide:function(){}}}(jQuery,window,document);