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
			resp.sendRedirect("/infocenter");
			return ;
		}
		PrintWriter ps = resp.getWriter();
		String nickName = req.getParameter("nickName");
		String pwd = req.getParameter("pwd");
		String age = req.getParameter("age");
		String level = req.getParameter("level");
		String name = req.getParameter("name");
		User user = new User();
		user.setNickName(nickName);
		user.setName(name);
		user.setPwd(pwd);
		user.setAge(Integer.parseInt(age));
		user.setLevel(Integer.parseInt(level));
		SqlSession sqlsession = DatabaseConnectionUtility.getInstance().openSession();
		 sqlsession.insert("queryForLogin", name);
		
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
