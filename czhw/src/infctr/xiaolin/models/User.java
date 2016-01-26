package infctr.xiaolin.models;

public class User {
	private int id ;			//数据库id
	private String nickName ;	//昵称
	private String pwd ;		//密码
	private String birthday ;	//生日
	private String name;		//真实姓名
	private int room ;			//科室	1代表处领导 2代表办公室 3代表管理科 4代表信息中心
								//		5代表设施科 6代表科技发展科 7代表财务科 8代表餐厨办
	private int level ;			//岗位等级	1代表科员 2代表副科长 3代表科长 4代表副处长 5代表处长
	private String hasRegisted ;//是否已注册 默认为0表示未注册过
	
	public int getId() {
		return id;
	}
	public void setId(int id) {
		this.id = id;
	}
	public String getName() {
		return name;
	}
	public void setName(String name) {
		this.name = name;
	}
	public String getNickName() {
		return nickName;
	}
	public void setNickName(String nickName) {
		this.nickName = nickName;
	}
	public String getBirthday() {
		return birthday;
	}
	public void setBirthday(String birthday) {
		this.birthday = birthday;
	}
	public int getRoom() {
		return room;
	}
	public void setRoom(int room) {
		this.room = room;
	}
	public String getHasRegisted() {
		return hasRegisted;
	}
	public void setHasRegisted(String hasRegisted) {
		this.hasRegisted = hasRegisted;
	}
	public String getPwd() {
		return pwd;
	}
	public void setPwd(String pwd) {
		this.pwd = pwd;
	}
	public int getLevel() {
		return level;
	}
	public void setLevel(int level) {
		this.level = level;
	}
}
