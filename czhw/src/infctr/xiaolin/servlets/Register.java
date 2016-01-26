package infctr.xiaolin.servlets;

import java.io.IOException;
import java.io.PrintWriter;

import javax.servlet.ServletException;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import javax.servlet.http.HttpSession;

import org.apache.ibatis.session.SqlSession;

import infctr.xiaolin.models.User;
import infctr.xiaolin.mybatis.DatabaseConnectionUtility;

public class Register extends HttpServlet {

	@Override
	protected void doGet(HttpServletRequest req, HttpServletResponse resp) throws ServletException, IOException {
		doPost(req, resp);
	}

	@Override
	protected void doPost(HttpServletRequest req, HttpServletResponse resp) throws ServletException, IOException {
		HttpSession httpSession = req.getSession();
		User u = (User) httpSession.getAttribute("user");
		if (u != null ){
			httpSession.removeAttribute("user");
			resp.sendRedirect("/czhw");
			return ;
		}
		PrintWriter ps = resp.getWriter();
		String nickName = req.getParameter("nickName");
		String pwd = req.getParameter("pwd");
		String birthday = req.getParameter("birthday");
		String name = req.getParameter("name");
		User user = new User();
		user.setNickName(nickName);
		user.setName(name);
		user.setPwd(pwd);
		user.setBirthday(birthday);
		SqlSession sqlsession = DatabaseConnectionUtility.getInstance().openSession();
		User dataBaseUserInfo = sqlsession.selectOne("queryUserInfo", user.getName());
		if(dataBaseUserInfo == null){
			ps.print("{success:false,error:{msg:'noUser'}}");
		}else if("1".equals(dataBaseUserInfo.getHasRegisted())){
			ps.print("{success:false,error:{msg:'hasRegisted'}}");
		}
		sqlsession.update("updateUserInfo", user);
		sqlsession.commit();
		if (user == null) {
			ps.print("{success:true,msg:'noUser'}");
		} else if (user.getPwd().equals(pwd)) {
			ps.print("{success:true,msg:'yes'}");
			httpSession.setAttribute("user", user);
		} else {
			ps.print("{success:true,msg:'noUser'}");
		}
		sqlsession.close();
		ps.flush();
	}
}
