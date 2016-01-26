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
					fieldLabel:"科室",
					allowBlank:false,
					//width : 120 ,
					anchor:"80%",
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
					//hideLabel : true ,
					xtype:"combo",
					triggerAction:"all",
					//fieldLabel:" ",
					allowBlank:false,
					anchor:"80%",
					store :nameStore,
					mode : 'local' ,
					displayField:"name",
					valueField:"value",
					msgTarget:"side",
					emptyText:"名字"
				},{
						xtype:"textfield",
						fieldLabel:"密码",
						msgTarget:"side",
						allowBlank:false,
						anchor:"80%",
						emptyText:"请输入密码"
					},
					{
						xtype:"textfield",
						fieldLabel:"真实姓名",
						allowBlank:false,
						msgTarget:"side",
						anchor:"80%",
						emptyText:"请输入真实姓名"
					},
					{
						xtype:"numberfield",
						fieldLabel:"年龄",
						allowBlank:false,
						msgTarget:"side",
						anchor:"80%",
						emptyText:"请输入年龄"
					}
				]
			});
	/*Ext.getCmp('room').on('select', function(combo){
		var r = combo.getValue();
		Ext.Msg.alert(r);
	});*/
				Ext.regesterWin=Ext.extend(Ext.Window ,{
	xtype:"window",
	title:"请填写注册信息",
	width:300,
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
						Ext.Msg.alert("注册成功");
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