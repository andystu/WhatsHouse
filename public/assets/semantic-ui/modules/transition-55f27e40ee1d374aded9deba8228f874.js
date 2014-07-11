!function(n,i,e,t){n.fn.transition=function(){{var a,o=n(this),s=o.selector||"",r=(new Date).getTime(),d=[],c=arguments,m=c[0],u=[].slice.call(arguments,1),l="string"==typeof m;i.requestAnimationFrame||i.mozRequestAnimationFrame||i.webkitRequestAnimationFrame||i.msRequestAnimationFrame||function(n){setTimeout(n,0)}}return o.each(function(){var i,p,f,g,b,v,y,h,w,C,T=n(this),x=this;C={initialize:function(){i=C.get.settings.apply(x,c),C.verbose("Converted arguments into settings object",i),f=i.error,g=i.className,h=i.namespace,b=i.metadata,w="module-"+h,v=C.get.animationEvent(),y=C.get.animationName(),p=T.data(w)||C,l&&(l=C.invoke(m)),l===!1&&C.animate(),C.instantiate()},instantiate:function(){C.verbose("Storing instance of module",C),T.data(w,p)},destroy:function(){C.verbose("Destroying previous module for",x),T.removeData(w)},refresh:function(){C.verbose("Refreshing display type on next animation"),delete p.displayType},forceRepaint:function(){C.verbose("Forcing element repaint");var n=T.parent(),i=T.next();0===i.size()?T.detach().appendTo(n):T.detach().insertBefore(i)},repaint:function(){C.verbose("Repainting element");x.offsetWidth},animate:function(n){return i=n||i,C.is.supported()?(C.debug("Preparing animation",i.animation),C.is.animating()&&i.queue?(!i.allowRepeats&&C.has.direction()&&C.is.occuring()&&p.queuing!==!0?C.error(f.repeated):C.queue(i.animation),!1):void(C.can.animate?C.set.animating(i.animation):C.error(f.noAnimation,i.animation))):(C.error(f.support),!1)},reset:function(){C.debug("Resetting animation to beginning conditions"),T.off(v),C.restore.conditions(),C.hide(),C.remove.animating()},queue:function(n){C.debug("Queueing animation of",n),p.queuing=!0,T.one(v,function(){p.queuing=!1,C.repaint(),C.animate.apply(this,i)})},complete:function(){C.verbose("CSS animation complete",i.animation),C.is.looping()||(C.is.outward()?(C.verbose("Animation is outward, hiding element"),C.restore.conditions(),C.remove.display(),C.hide(),n.proxy(i.onHide,this)()):C.is.inward()?(C.verbose("Animation is outward, showing element"),C.restore.conditions(),C.show(),n.proxy(i.onShow,this)()):C.restore.conditions(),C.remove.duration(),C.remove.animating()),n.proxy(i.complete,this)()},has:{direction:function(n){return n=n||i.animation,-1!==n.search(g.inward)||-1!==n.search(g.outward)?(C.debug("Direction already set in animation"),!0):!1}},set:{animating:function(n){n=n||i.animation,C.save.conditions(),C.can.transition()&&!C.has.direction()&&C.set.direction(),C.remove.hidden(),C.set.display(),T.addClass(g.animating).addClass(g.transition).addClass(n).one(v,C.complete),C.set.duration(i.duration),C.debug("Starting tween",i.animation,T.attr("class"))},display:function(){var n=C.get.displayType();"block"!==n&&"none"!==n&&(C.verbose("Setting final visibility to",n),T.css({display:n}))},direction:function(){T.is(":visible")?(C.debug("Automatically determining the direction of animation","Outward"),T.removeClass(g.inward).addClass(g.outward)):(C.debug("Automatically determining the direction of animation","Inward"),T.removeClass(g.outward).addClass(g.inward))},looping:function(){C.debug("Transition set to loop"),T.addClass(g.looping)},duration:function(n){n=n||i.duration,n="number"==typeof n?n+"ms":n,C.verbose("Setting animation duration",n),T.css({"-webkit-animation-duration":n,"-moz-animation-duration":n,"-ms-animation-duration":n,"-o-animation-duration":n,"animation-duration":n})},hidden:function(){T.addClass(g.transition).addClass(g.hidden)},visible:function(){T.addClass(g.transition).addClass(g.visible)}},save:{displayType:function(n){p.displayType=n},transitionExists:function(i,e){n.fn.transition.exists[i]=e,C.verbose("Saving existence of transition",i,e)},conditions:function(){p.cache={className:T.attr("class"),style:T.attr("style")},C.verbose("Saving original attributes",p.cache)}},restore:{conditions:function(){return p.cache===t?!1:(p.cache.className?T.attr("class",p.cache.className):T.removeAttr("class"),p.cache.style?T.attr("style",p.cache.style):"block"===C.get.displayType()&&T.removeAttr("style"),C.is.looping()&&C.remove.looping(),void C.verbose("Restoring original attributes",p.cache))}},remove:{animating:function(){T.removeClass(g.animating)},display:function(){p.displayType!==t&&T.css("display","")},duration:function(){T.css({"-webkit-animation-duration":"","-moz-animation-duration":"","-ms-animation-duration":"","-o-animation-duration":"","animation-duration":""})},hidden:function(){T.removeClass(g.hidden)},visible:function(){T.removeClass(g.visible)},looping:function(){C.debug("Transitions are no longer looping"),T.removeClass(g.looping),C.forceRepaint()}},get:{settings:function(i,e,t){return"object"==typeof i?n.extend(!0,{},n.fn.transition.settings,i):"function"==typeof t?n.extend({},n.fn.transition.settings,{animation:i,complete:t,duration:e}):"string"==typeof e||"number"==typeof e?n.extend({},n.fn.transition.settings,{animation:i,duration:e}):"object"==typeof e?n.extend({},n.fn.transition.settings,e,{animation:i}):"function"==typeof e?n.extend({},n.fn.transition.settings,{animation:i,complete:e}):n.extend({},n.fn.transition.settings,{animation:i})},displayType:function(){return p.displayType===t&&C.can.transition(),p.displayType},transitionExists:function(i){return n.fn.transition.exists[i]},animationName:function(){var n,i=e.createElement("div"),a={animation:"animationName",OAnimation:"oAnimationName",MozAnimation:"mozAnimationName",WebkitAnimation:"webkitAnimationName"};for(n in a)if(i.style[n]!==t)return C.verbose("Determined animation vendor name property",a[n]),a[n];return!1},animationEvent:function(){var n,i=e.createElement("div"),a={animation:"animationend",OAnimation:"oAnimationEnd",MozAnimation:"animationend",WebkitAnimation:"webkitAnimationEnd"};for(n in a)if(i.style[n]!==t)return C.verbose("Determined animation vendor end event",a[n]),a[n];return!1}},can:{animate:function(){return"none"!==T.css(i.animation)?(C.debug("CSS definition found",T.css(i.animation)),!0):(C.debug("Unable to find css definition",T.attr("class")),!1)},transition:function(){var e,a,o,s,r=T.attr("class"),d=i.animation,c=C.get.transitionExists(i.animation);return(c===t||p.displayType===t)&&(C.verbose("Determining whether animation exists"),e=n("<div>").addClass(r).appendTo(n("body")),a=e.removeClass(g.inward).removeClass(g.outward).addClass(g.animating).addClass(g.transition).addClass(d).css(y),o=e.addClass(g.inward).css(y),s=e.attr("class",r).show().css("display"),C.verbose("Determining final display state",s),a!=o?(C.debug("Transition exists for animation",d),c=!0):(C.debug("Static animation found",d,s),c=!1),e.remove(),C.save.displayType(s),C.save.transitionExists(d,c)),c}},is:{animating:function(){return T.hasClass(g.animating)},inward:function(){return T.hasClass(g.inward)},outward:function(){return T.hasClass(g.outward)},looping:function(){return T.hasClass(g.looping)},occuring:function(n){return n=n||i.animation,T.hasClass(n)},visible:function(){return T.is(":visible")},supported:function(){return y!==!1&&v!==!1}},hide:function(){C.verbose("Hiding element"),C.remove.visible(),C.set.hidden(),C.repaint()},show:function(n){C.verbose("Showing element",n),C.remove.hidden(),C.set.visible(),C.repaint()},start:function(){C.verbose("Starting animation"),T.removeClass(g.disabled)},stop:function(){C.debug("Stopping animation"),T.addClass(g.disabled)},toggle:function(){C.debug("Toggling play status"),T.toggleClass(g.disabled)},setting:function(e,a){if(n.isPlainObject(e))n.extend(!0,i,e);else{if(a===t)return i[e];i[e]=a}},internal:function(i,e){if(n.isPlainObject(i))n.extend(!0,C,i);else{if(e===t)return C[i];C[i]=e}},debug:function(){i.debug&&(i.performance?C.performance.log(arguments):(C.debug=Function.prototype.bind.call(console.info,console,i.name+":"),C.debug.apply(console,arguments)))},verbose:function(){i.verbose&&i.debug&&(i.performance?C.performance.log(arguments):(C.verbose=Function.prototype.bind.call(console.info,console,i.name+":"),C.verbose.apply(console,arguments)))},error:function(){C.error=Function.prototype.bind.call(console.error,console,i.name+":"),C.error.apply(console,arguments)},performance:{log:function(n){var e,t,a;i.performance&&(e=(new Date).getTime(),a=r||e,t=e-a,r=e,d.push({Element:x,Name:n[0],Arguments:[].slice.call(n,1)||"","Execution Time":t})),clearTimeout(C.performance.timer),C.performance.timer=setTimeout(C.performance.display,100)},display:function(){var e=i.name+":",a=0;r=!1,clearTimeout(C.performance.timer),n.each(d,function(n,i){a+=i["Execution Time"]}),e+=" "+a+"ms",s&&(e+=" '"+s+"'"),o.size()>1&&(e+=" ("+o.size()+")"),(console.group!==t||console.table!==t)&&d.length>0&&(console.groupCollapsed(e),console.table?console.table(d):n.each(d,function(n,i){console.log(i.Name+": "+i["Execution Time"]+"ms")}),console.groupEnd()),d=[]}},invoke:function(i,e,o){var s,r,d,c=p;return e=e||u,o=x||o,"string"==typeof i&&c!==t&&(i=i.split(/[\. ]/),s=i.length-1,n.each(i,function(e,a){var o=e!=s?a+i[e+1].charAt(0).toUpperCase()+i[e+1].slice(1):i;if(n.isPlainObject(c[o])&&e!=s)c=c[o];else{if(c[o]!==t)return r=c[o],!1;if(!n.isPlainObject(c[a])||e==s)return c[a]!==t?(r=c[a],!1):!1;c=c[a]}})),n.isFunction(r)?d=r.apply(o,e):r!==t&&(d=r),n.isArray(a)?a.push(d):a!==t?a=[a,d]:d!==t&&(a=d),r||!1}},C.initialize()}),a!==t?a:this},n.fn.transition.exists={},n.fn.transition.settings={name:"Transition",debug:!1,verbose:!0,performance:!0,namespace:"transition",complete:function(){},onShow:function(){},onHide:function(){},allowRepeats:!1,animation:"fade",duration:"700ms",queue:!0,className:{animating:"animating",disabled:"disabled",hidden:"hidden",inward:"in",loading:"loading",looping:"looping",outward:"out",transition:"ui transition",visible:"visible"},error:{noAnimation:"There is no css animation matching the one you specified.",repeated:"That animation is already occurring, cancelling repeated animation",method:"The method you called is not defined",support:"This browser does not support CSS animations"}}}(jQuery,window,document);