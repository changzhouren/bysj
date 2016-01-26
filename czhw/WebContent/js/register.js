/**
 * 注册窗口
 */
var roomData = [
                ['处领导','处领导'] ,
                ['办公室','办公室'] ,
                ['管理科','管理科'] ,
                ['信息中心','信息中心'] ,
                ['设施科','设施科'] ,
                ['科技发展科','科技发展科'] ,
                ['财务科','财务科'],
                ['餐厨办','餐厨办']
               ] ;
var leaderData = [
                  ['王炳伟','王炳伟'],
                  ['于斌','于斌'],
                  ['何云飞','何云飞'],
                  ['陈爱梅','陈爱梅']
                  ];
var bgsData = [
               	 ['陈俐','陈俐'],
	             ['李晓','李晓'],
	             ['占颖芳','占颖芳'],
	             ['何小伟','何小伟'],
	             ['张卫平','张卫平'],
	             ['吕清','吕清'],
	             ['朱玉柱','朱玉柱'],
	             ['蔡金芳','蔡金芳'],
	             ['吴培芳','吴培芳']
	             ];
   var glkData = [
                     ['梁敏','梁敏'],
                     ['金辉','金辉'],
                     ['夏伟谊','夏伟谊'],
                     ['周亚琴','周亚琴'],
                     ['任红军','任红军'],
                     ['汪淼','汪淼'],
                     ['张剑','张剑'],
                     ['胡起靖','胡起靖'],
                     ['徐匡浩','徐匡浩']
                     ];
   var xxzxData = [
                   ['张备','张备'],
                   ['张健','张健'],
                   ['肖林','肖林']
                   ];
   var sskData = [
                   ['周佳','周佳'],
                   ['钱瑜','钱瑜'],
                   ['颜若冰','颜若冰']
                   ];
   var kjfzkData = [
                   ['俞妹','俞妹'],
                   ['黄刚飙','黄刚飙'],
                   ['赵志萍','赵志萍']
                   ];
   var cwkData = [
                   ['王晓文','王晓文'],
                   ['戴小娟','戴小娟']
                   ];
   var ccbData = [
                   ['张晓叶','张晓叶']
                   ];


var roomStore = new Ext.data.SimpleStore({
	fields : ['ks' ,'value'] ,
	data : roomData
});

var nameStore = new Ext.data.SimpleStore({
	fields : ['name','value'] ,
	data : []
});

var registerForm = new Ext.form.FormPanel({
				labelWidth:70,
				labelAlign:"right",
				frame:true,
				labelPad:15,
				items:[{
					forceSelection : true ,
					xtype:"combo",
					triggerAction:"all",
					fieldLabel:"我的身份",
					allowBlank:false,
					anchor:"90%",
					store :roomStore,
					mode : 'local' ,
					displayField:"ks",
					valueField:"value",
					msgTarget:"side",
					emptyText:"科室" ,
					listeners : {
			        'select' : function(combo,record,index) {
			        	var r = combo.getValue();
			        	if(r == '处领导'){
			        		nameStore.loadData(leaderData);
			        	}else if(r == '信息中心'){
			        		nameStore.loadData(xxzxData);
			        	}else if(r == '办公室'){
			        		nameStore.loadData(bgsData);
			        	}else if(r == '管理科'){
			        		nameStore.loadData(glkData);
			        	}else if(r == '设施科'){
			        		nameStore.loadData(sskData);
			        	}else if(r == '科技发展科'){
			        		nameStore.loadData(kjfzkData);
			        	}else if(r == '财务科'){
			        		nameStore.loadData(cwkData);
			        	}else if(r == '餐厨办'){
			        		nameStore.loadData(ccbData);
			        	}
			          }
			        },
			        scope : this 
				},{
					forceSelection : true ,
					//hideLabel : true ,
					xtype:"combo",
					triggerAction:"all",
					//fieldLabel:" ",
					allowBlank:false,
					anchor:"90%",
					store :nameStore,
					mode : 'local' ,
					displayField:"name",
					valueField:"value",
					msgTarget:"side",
					name:'name' ,
					emptyText:"名字"
				},{
					xtype:"textfield",
					vtype:'alphanum' ,
					fieldLabel:"登录名",
					allowBlank:false,
					msgTarget:"side",
					anchor:"90%",
					name:'nickName' ,
					emptyText:"请填写登录名"
				},{
					xtype:"datefield",
					fieldLabel:"我的生日",
					name:'birthday' ,
					format:'Y-m-d' ,
					msgTarget:"side",
					allowBlank:false,
					anchor:"90%"
				},{
					xtype:"textfield",
					fieldLabel:"登陆密码",
					name:'pwd' ,
					msgTarget:"side",
					inputType : 'password' ,
					allowBlank:false,
					anchor:"90%"
				}]
			});
	/*Ext.getCmp('room').on('select', function(combo){
		var r = combo.getValue();
		Ext.Msg.alert(r);
	});*/
				Ext.regesterWin=Ext.extend(Ext.Window ,{
	xtype:"window",
	title:"请填写注册信息",
	width:280,
	height:220,
	layout:"fit",
	//autoHeight:false,
	bodyBorder:false,
	border:true,
	buttonAlign:"center",
	shadow:"sides",
	constrain:true,
	plain:true,
	initComponent: function(){
		this.items=[
			registerForm
		] ,
		this.buttons=[{
					text : '注册' ,
					handler : function(){
						var valid = registerForm.form.isValid();
						if(valid != true)
							return;
						Ext.Msg.alert(valid);
						registerForm.getForm().submit({
								waitMsg : '提交注册信息,请稍后...',
								url:'webRegist' ,
								success : function(f,action){
									if(action.result.msg=='noUser'){
										Ext.Msg.alert('登录',"无此用户!");
									}if(action.result.msg=='yes'){
										form.getForm().getEl().dom.action = 'goodsManagement.jsp' ;
										form.getForm().getEl().dom.submit();
									}
								},
								failure:function(){
									Ext.Msg.alert('失败',"登录失败!");
								}
							});
					}
				},{
					text : '重置' ,
					handler : function(){
						registerForm.getForm().reset();
					}					
				}]
		Ext.regesterWin.superclass.initComponent.call(this);
	}
});