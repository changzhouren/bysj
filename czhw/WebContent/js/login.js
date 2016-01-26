/**
 * 登陆窗口
 */

var register = new Ext.regesterWin();
var form = new Ext.form.FormPanel({
			defaultType : 'textfield' ,
			labelAlign : 'right' ,
			labelWidth : 60 ,
			frame :true ,
			labelPad : 10 ,
			bodyStyle : 'padding-top:10px;padding-bottom:10px' ,
			items : [{
						fieldLabel:'用户名   ',
						name : 'name' ,
						anchor : '90%' ,
						allowBlank : false ,  
						blankText : '用户名不能为空'
					},{
						fieldLabel:'密码   ' ,
						name : 'pwd',
						anchor : '90%' ,
						inputType : 'password' ,
						allowBlank : false ,  
						blankText : '密码不能为空'
						}] 
		});

var window1 = new Ext.Window({
	el : 'win' ,
	frame :true ,
	title : '登录' ,
	height : 160 ,
	width : 280 ,
	plain : true ,
	closeAction : 'hide' ,
	animateTarget : 'target' ,
	layout : 'fit' ,
	bodyStyle : 'padding-right:1px' ,
	items : [form],
	buttonAlign : 'center',
	buttons : [{
			text:'登录' ,
			handler :function(){
				var valid = form.form.isValid();
				if(valid == false)
					return;
				form.getForm().submit({
					waitMsg : '正在进行登陆验证,请稍后...',
					url:'webLogin' ,
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
				//var items = this.ownerCt.items ;
				//var name = items.first().getValue();
				//var pwd = items.itemAt(1).getValue();
			}
		} ,		{
			text:'注册',
			handler:function(){
				register.show();
			}
			},{
			text:'重置',
			handler:function(){
				form.getForm().reset();
			}
			}]
});