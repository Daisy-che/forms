(window.webpackJsonp=window.webpackJsonp||[]).push([[545],{5032:function(t,e,n){"use strict";n.r(e);var o=n(11);n(27),n(37),n(29);function r(object,t){var e=Object.keys(object);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(object);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(object,t).enumerable}))),e.push.apply(e,n)}return e}var l={mixins:[n(1147).a],props:{trackEvent:{type:String,default:null},item:{type:Object,default:()=>{}},initWithBrandColor:{type:Boolean,default:!1}},methods:{onEdit(){this.handleAuth()&&(this.canDownload?(this.$analytics.track(this.trackEvent,function(t){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?r(Object(source),!0).forEach((function(e){Object(o.a)(t,e,source[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(source)):r(Object(source)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(source,e))}))}return t}({slug:this.item.slug,uuid:this.item.uuid,price:this.item.price},this.initWithBrandColor&&this.$store.getters["brandPalettes/selectedPalette"]&&{brand_palette_id:this.$store.getters["brandPalettes/selectedPalette"].id})),this.$modal.open({id:"modalSvgToLottie",component:Promise.all([n.e(0),n.e(28),n.e(356)]).then(n.bind(null,4830)),options:{modalOnModal:!0},props:{openedFrom:"pdp-actions",item:this.item,initWithBrandColor:this.initWithBrandColor}})):this.$modal.open({id:"modalSubscribeFeatures",component:Promise.all([n.e(0),n.e(41)]).then(n.bind(null,3830)),options:{modalOnModal:!0},props:{trackingObj:{event:"".concat(this.trackEvent,"Pricing"),data:{route_path:this.$route.path,route_name:this.$route.name,slug:this.item.slug,uuid:this.item.uuid,price:this.item.price,asset:this.item.asset,query:this.item.tags.length>0?this.item.tags[0].slug:null}}}}))}}},c=l,d=n(8),component=Object(d.a)(c,(function(){var t=this,e=t._self._c;return e("div",[e("button",{staticClass:"btn btn-default has-icon btn-block",attrs:{"data-balloon":t.isLoggedIn&&t.canDownload?"Animate this icon using SVG to Lottie":t.$t("editor.cant_edit"),"data-balloon-pos":"down","data-balloon-length":"medium",type:"button"},on:{click:t.onEdit}},[t._v("\n    Animate\n  ")])])}),[],!1,null,null,null);e.default=component.exports}}]);
