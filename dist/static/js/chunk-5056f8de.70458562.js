(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-5056f8de"],{"09d7":function(e,t,n){},"5d8a":function(e,t,n){"use strict";n.r(t);n("b0c0");var o=n("7a23"),l=Object(o["withScopeId"])("data-v-7e555ff8");Object(o["pushScopeId"])("data-v-7e555ff8");var c={class:"main-container"},a=Object(o["createTextVNode"])("添加 "),r={key:1},d=Object(o["createTextVNode"])("编辑"),i=Object(o["createTextVNode"])("删除"),u=Object(o["createTextVNode"])("无"),b=Object(o["createTextVNode"])("圆点"),s=Object(o["createTextVNode"])("new"),m=Object(o["createTextVNode"])("数字"),f={key:0,class:"text-center"},p={key:1,class:"text-center"};Object(o["popScopeId"])();var O=l((function(e,t,n,O,j,h){var V=Object(o["resolveComponent"])("el-button"),g=Object(o["resolveComponent"])("TableHeader"),N=Object(o["resolveComponent"])("el-table-column"),v=Object(o["resolveComponent"])("SvgIcon"),M=Object(o["resolveComponent"])("el-table"),k=Object(o["resolveComponent"])("TableBody"),_=Object(o["resolveComponent"])("el-option"),y=Object(o["resolveComponent"])("el-select"),w=Object(o["resolveComponent"])("el-form-item"),x=Object(o["resolveComponent"])("el-input"),C=Object(o["resolveComponent"])("el-radio-button"),B=Object(o["resolveComponent"])("el-radio-group"),I=Object(o["resolveComponent"])("el-input-number"),S=Object(o["resolveComponent"])("el-switch"),U=Object(o["resolveComponent"])("el-form"),T=Object(o["resolveComponent"])("Dialog"),D=Object(o["resolveDirective"])("loading"),z=Object(o["resolveDirective"])("infinite-scroll");return Object(o["openBlock"])(),Object(o["createBlock"])("div",c,[Object(o["createVNode"])(g,{"can-collapsed":!1},{right:l((function(){return[Object(o["createVNode"])(V,{type:"primary",size:"mini",icon:"el-icon-plus",onClick:e.onAddItem},{default:l((function(){return[a]})),_:1},8,["onClick"])]})),_:1}),Object(o["createVNode"])(k,{ref:"tableBody"},{default:l((function(){return[Object(o["withDirectives"])(Object(o["createVNode"])(M,{ref:"table",data:e.dataList,"header-cell-style":e.tableConfig.headerCellStyle,size:e.tableConfig.size,stripe:e.tableConfig.stripe,border:e.tableConfig.border,"row-key":"menuUrl","default-expand-all":!0,"tree-props":{children:"children"}},{default:l((function(){return[Object(o["createVNode"])(N,{align:"center",label:"序号",fixed:"left",width:"100"},{default:l((function(e){return[Object(o["createTextVNode"])(Object(o["toDisplayString"])(e.$index+1),1)]})),_:1}),Object(o["createVNode"])(N,{align:"center",label:"菜单名称",prop:"menuName"}),Object(o["createVNode"])(N,{align:"center",label:"菜单地址",prop:"menuUrl"}),Object(o["createVNode"])(N,{align:"center",label:"图标",prop:"menuUrl"},{default:l((function(e){return[e.row.icon?(Object(o["openBlock"])(),Object(o["createBlock"])(v,{key:0,"icon-class":e.row.icon,style:{width:"20px",height:"20px"}},null,8,["icon-class"])):(Object(o["openBlock"])(),Object(o["createBlock"])("div",r,"无"))]})),_:1}),Object(o["createVNode"])(N,{align:"center",label:"是否缓存"},{default:l((function(e){return[Object(o["createTextVNode"])(Object(o["toDisplayString"])(e.row.cacheable?"是":"否"),1)]})),_:1}),Object(o["createVNode"])(N,{align:"center",label:"是否固定"},{default:l((function(e){return[Object(o["createTextVNode"])(Object(o["toDisplayString"])(e.row.affix?"是":"否"),1)]})),_:1}),Object(o["createVNode"])(N,{align:"center",label:"badge提示"},{default:l((function(e){return[Object(o["createTextVNode"])(Object(o["toDisplayString"])(parseInt(e.row.tip)?"number":e.row.tip||"无"),1)]})),_:1}),Object(o["createVNode"])(N,{align:"center",label:"操作",fixed:"right"},{default:l((function(t){return[Object(o["createVNode"])(V,{type:"text",size:"mini",onClick:function(n){return e.onUpdateItem(t.row)}},{default:l((function(){return[d]})),_:2},1032,["onClick"]),Object(o["createVNode"])(V,{type:"text",size:"mini",onClick:function(n){return e.onDeleteItem(t.row)}},{default:l((function(){return[i]})),_:2},1032,["onClick"])]})),_:1})]})),_:1},8,["data","header-cell-style","size","stripe","border"]),[[D,e.tableLoading]])]})),_:1},512),Object(o["createVNode"])(T,{ref:"dialog"},{content:l((function(){return[Object(o["createVNode"])(U,{ref:"baseForm",model:e.menuModel,rules:e.formRules,"label-width":"80px","label-position":"right",class:"padding"},{default:l((function(){return[Object(o["createVNode"])(w,{label:"上级菜单"},{default:l((function(){return[Object(o["createVNode"])(y,{modelValue:e.menuModel.parentPath,"onUpdate:modelValue":t[1]||(t[1]=function(t){return e.menuModel.parentPath=t}),size:"small",placeholder:"请输入菜单名称",style:{width:"100%"}},{default:l((function(){return[(Object(o["openBlock"])(!0),Object(o["createBlock"])(o["Fragment"],null,Object(o["renderList"])(e.dataList,(function(e,t){return Object(o["openBlock"])(),Object(o["createBlock"])(_,{key:t,label:e.menuName,value:e.menuUrl},null,8,["label","value"])})),128))]})),_:1},8,["modelValue"])]})),_:1}),Object(o["createVNode"])(w,{label:"菜单名称",prop:"name"},{default:l((function(){return[Object(o["createVNode"])(x,{modelValue:e.menuModel.name,"onUpdate:modelValue":t[2]||(t[2]=function(t){return e.menuModel.name=t}),size:"small",placeholder:"请输入菜单名称"},null,8,["modelValue"])]})),_:1}),Object(o["createVNode"])(w,{label:"菜单地址",prop:"path"},{default:l((function(){return[Object(o["createVNode"])(x,{modelValue:e.menuModel.path,"onUpdate:modelValue":t[3]||(t[3]=function(t){return e.menuModel.path=t}),size:"small",placeholder:"请输入菜单地址"},null,8,["modelValue"])]})),_:1}),Object(o["createVNode"])(w,{label:"重定向"},{default:l((function(){return[Object(o["createVNode"])(x,{modelValue:e.menuModel.redirect,"onUpdate:modelValue":t[4]||(t[4]=function(t){return e.menuModel.redirect=t}),size:"small",placeholder:"请输入重定向地址"},null,8,["modelValue"])]})),_:1}),Object(o["createVNode"])(w,{label:"badge提示"},{default:l((function(){return[Object(o["createVNode"])(B,{modelValue:e.menuModel.badge,"onUpdate:modelValue":t[5]||(t[5]=function(t){return e.menuModel.badge=t}),size:"mini"},{default:l((function(){return[Object(o["createVNode"])(C,{label:""},{default:l((function(){return[u]})),_:1}),Object(o["createVNode"])(C,{label:"dot"},{default:l((function(){return[b]})),_:1}),Object(o["createVNode"])(C,{label:"new"},{default:l((function(){return[s]})),_:1}),Object(o["createVNode"])(C,{label:"number"},{default:l((function(){return[m]})),_:1})]})),_:1},8,["modelValue"]),Object(o["withDirectives"])(Object(o["createVNode"])(I,{modelValue:e.menuModel.badgeNum,"onUpdate:modelValue":t[6]||(t[6]=function(t){return e.menuModel.badgeNum=t}),size:"mini",type:"",class:"margin-left-sm",max:99,min:1},null,8,["modelValue"]),[[o["vShow"],"number"===e.menuModel.badge]])]})),_:1}),Object(o["createVNode"])(w,{label:"是否缓存"},{default:l((function(){return[Object(o["createVNode"])(S,{modelValue:e.menuModel.cacheable,"onUpdate:modelValue":t[7]||(t[7]=function(t){return e.menuModel.cacheable=t})},null,8,["modelValue"])]})),_:1}),Object(o["createVNode"])(w,{label:"是否隐藏"},{default:l((function(){return[Object(o["createVNode"])(S,{modelValue:e.menuModel.hidden,"onUpdate:modelValue":t[8]||(t[8]=function(t){return e.menuModel.hidden=t})},null,8,["modelValue"])]})),_:1}),Object(o["createVNode"])(w,{label:"是否固定"},{default:l((function(){return[Object(o["createVNode"])(S,{modelValue:e.menuModel.affix,"onUpdate:modelValue":t[9]||(t[9]=function(t){return e.menuModel.affix=t})},null,8,["modelValue"])]})),_:1}),Object(o["createVNode"])(w,{label:"菜单图标"},{default:l((function(){return[Object(o["withDirectives"])(Object(o["createVNode"])("ul",{class:"icon-wrapper","infinite-scroll-disabled":e.disableLoad},[(Object(o["openBlock"])(!0),Object(o["createBlock"])(o["Fragment"],null,Object(o["renderList"])(e.icons,(function(t){return Object(o["openBlock"])(),Object(o["createBlock"])("li",{key:t.name,class:"icon-item",onClick:function(n){return e.selectIcon(t)}},[Object(o["createVNode"])(v,{style:{color:e.menuModel.icon===t.font_class?"red":"#333"},"icon-class":t.font_class},null,8,["style","icon-class"]),Object(o["createVNode"])("div",{style:{color:e.menuModel.icon===t.font_class?"red":"#333"}},Object(o["toDisplayString"])(e.menuModel.icon===t.font_class?"已选":"选择"),5)],8,["onClick"])})),128)),e.disableLoad?(Object(o["openBlock"])(),Object(o["createBlock"])("p",p,"没有更多了")):(Object(o["openBlock"])(),Object(o["createBlock"])("p",f,"加载中..."))],8,["infinite-scroll-disabled"]),[[z,e.loadIcon]])]})),_:1})]})),_:1},8,["model","rules"])]})),_:1},512)])})),j=n("2909"),h=(n("fb6a"),n("e959")),V=n("d257"),g=n("5c40"),N=n("a1e9"),v=n("3fd4"),M=n("e832"),k=Object(g["y"])({name:"Menu",mixins:[h["d"]],data:function(){return{menuModel:{id:Object(V["c"])(),parentPath:"",path:"",name:"",redirect:"",badge:"",badgeNum:1,cacheable:!1,hidden:!1,icon:"",affix:!1},formRules:{name:[{required:!0,message:"请输入菜单名称",trigger:"blur"}],path:[{required:!0,message:"请输入菜单地址",trigger:"blur"}]}}},mounted:function(){this.doRefresh()},methods:{doRefresh:function(){this.$post({url:this.$urlPath.getMenuList,data:{}}).then(this.handleSuccess).catch(console.log)},onAddItem:function(){var e=this;this.menuModel={id:Object(V["c"])(),parentPath:"",path:"",name:"",redirect:"",badge:"",badgeNum:1,cacheable:!1,hidden:!1,icon:"",affix:!1},this.$refs.dialog.show({showSubmitLoading:!0,validator:function(){return e.menuModel.name?!!e.menuModel.path||(v["p"].error("请输入菜单地址"),!1):(v["p"].error("请输入菜单名称"),!1)}}).then((function(t){v["q"].confirm("模拟数据添加成功，参数为：\n"+JSON.stringify(e.menuModel)),t.close()}))},onUpdateItem:function(e){var t=this;this.menuModel.id=Object(V["c"])(),this.menuModel.parentPath=e.parentPath,this.menuModel.path=e.menuUrl,this.menuModel.name=e.menuName,this.menuModel.badge=parseInt(e.tip)?"number":e.tip,this.menuModel.badgeNum=parseInt(e.tip),this.menuModel.icon=e.icon||"",this.$refs.dialog.show({showSubmitLoading:!0,validator:function(){return t.menuModel.name?!!t.menuModel.path||(v["p"].error("请输入菜单地址"),!1):(v["p"].error("请输入菜单名称"),!1)}}).then((function(e){v["q"].confirm("模拟数据修改成功，参数为："+JSON.stringify(t.menuModel)),e.close()}))},onDeleteItem:function(e){v["q"].confirm("是否要删除此数据？").then((function(){v["q"].confirm("模拟删除成功，参数为："+JSON.stringify(e))}))},selectIcon:function(e){this.menuModel.icon=e.font_class}},setup:function(){var e=Object(N["m"])(100),t=Object(N["o"])(M.glyphs.slice(0,e.value)),n=Object(N["m"])(!1),o=function(){setTimeout((function(){var o=M.glyphs.slice(e.value,e.value+=100);t.push.apply(t,Object(j["a"])(o)),n.value=t.length===M.glyphs.length}),500)};return{icons:t,loadIcon:o,disableLoad:n}}});n("e3bc");k.render=O,k.__scopeId="data-v-7e555ff8";t["default"]=k},e3bc:function(e,t,n){"use strict";n("09d7")}}]);