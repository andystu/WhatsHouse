!function(e,n,o,t){e.fn.checkbox=function(n){var o,i=e(this),r=i.selector||"",c=(new Date).getTime(),a=[],l=arguments[0],s="string"==typeof l,u=[].slice.call(arguments,1);return i.each(function(){var i,d=e.extend(!0,{},e.fn.checkbox.settings,n),g=d.className,p=d.namespace,b=(d.error,"."+p),f="module-"+p,m=e(this),h=e(this).next(d.selector.label).first(),x=e(this).find(d.selector.input),y=m.selector||"",v=m.data(f),k=this;i={initialize:function(){i.verbose("Initializing checkbox",d),d.context&&""!==y?(i.verbose("Adding delegated events"),e(k,d.context).on(y,"click"+b,i.toggle).on(y+" + "+d.selector.label,"click"+b,i.toggle)):(m.on("click"+b,i.toggle).data(f,i),h.on("click"+b,i.toggle)),i.instantiate()},instantiate:function(){i.verbose("Storing instance of module",i),v=i,m.data(f,i)},destroy:function(){i.verbose("Destroying previous module"),m.off(b).removeData(f)},is:{radio:function(){return m.hasClass(g.radio)},enabled:function(){return x.prop("checked")!==t&&x.prop("checked")},disabled:function(){return!i.is.enabled()}},can:{disable:function(){return"boolean"==typeof d.required?d.required:!i.is.radio()}},enable:function(){i.debug("Enabling checkbox",x),x.prop("checked",!0).trigger("change"),e.proxy(d.onChange,x.get())(),e.proxy(d.onEnable,x.get())()},disable:function(){i.debug("Disabling checkbox"),x.prop("checked",!1).trigger("change"),e.proxy(d.onChange,x.get())(),e.proxy(d.onDisable,x.get())()},toggle:function(){i.verbose("Determining new checkbox state"),x.prop("disabled")||(i.is.disabled()?i.enable():i.is.enabled()&&i.can.disable()&&i.disable())},setting:function(n,o){if(e.isPlainObject(n))e.extend(!0,d,n);else{if(o===t)return d[n];d[n]=o}},internal:function(n,o){if(e.isPlainObject(n))e.extend(!0,i,n);else{if(o===t)return i[n];i[n]=o}},debug:function(){d.debug&&(d.performance?i.performance.log(arguments):(i.debug=Function.prototype.bind.call(console.info,console,d.name+":"),i.debug.apply(console,arguments)))},verbose:function(){d.verbose&&d.debug&&(d.performance?i.performance.log(arguments):(i.verbose=Function.prototype.bind.call(console.info,console,d.name+":"),i.verbose.apply(console,arguments)))},error:function(){i.error=Function.prototype.bind.call(console.error,console,d.name+":"),i.error.apply(console,arguments)},performance:{log:function(e){var n,o,t;d.performance&&(n=(new Date).getTime(),t=c||n,o=n-t,c=n,a.push({Element:k,Name:e[0],Arguments:[].slice.call(e,1)||"","Execution Time":o})),clearTimeout(i.performance.timer),i.performance.timer=setTimeout(i.performance.display,100)},display:function(){var n=d.name+":",o=0;c=!1,clearTimeout(i.performance.timer),e.each(a,function(e,n){o+=n["Execution Time"]}),n+=" "+o+"ms",r&&(n+=" '"+r+"'"),(console.group!==t||console.table!==t)&&a.length>0&&(console.groupCollapsed(n),console.table?console.table(a):e.each(a,function(e,n){console.log(n.Name+": "+n["Execution Time"]+"ms")}),console.groupEnd()),a=[]}},invoke:function(n,i,r){var c,a,l,s=v;return i=i||u,r=k||r,"string"==typeof n&&s!==t&&(n=n.split(/[\. ]/),c=n.length-1,e.each(n,function(o,i){var r=o!=c?i+n[o+1].charAt(0).toUpperCase()+n[o+1].slice(1):n;if(e.isPlainObject(s[r])&&o!=c)s=s[r];else{if(s[r]!==t)return a=s[r],!1;if(!e.isPlainObject(s[i])||o==c)return s[i]!==t?(a=s[i],!1):!1;s=s[i]}})),e.isFunction(a)?l=a.apply(r,i):a!==t&&(l=a),e.isArray(o)?o.push(l):o!==t?o=[o,l]:l!==t&&(o=l),a}},s?(v===t&&i.initialize(),i.invoke(l)):(v!==t&&i.destroy(),i.initialize())}),o!==t?o:this},e.fn.checkbox.settings={name:"Checkbox",namespace:"checkbox",debug:!1,verbose:!0,performance:!0,context:!1,required:"auto",onChange:function(){},onEnable:function(){},onDisable:function(){},error:{method:"The method you called is not defined."},selector:{input:"input[type=checkbox], input[type=radio]",label:"label"},className:{radio:"radio"}}}(jQuery,window,document);