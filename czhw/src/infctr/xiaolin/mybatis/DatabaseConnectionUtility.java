package infctr.xiaolin.mybatis;

import java.io.IOException;

import org.apache.ibatis.io.Resources;
import org.apache.ibatis.session.SqlSessionFactory;
import org.apache.ibatis.session.SqlSessionFactoryBuilder;

public class DatabaseConnectionUtility {
	private static SqlSessionFactory instance;

	private DatabaseConnectionUtility() {
	}

	public static synchronized SqlSessionFactory getInstance() throws IOException {
		if (instance == null) {
			instance = new SqlSessionFactoryBuilder().build(Resources.getResourceAsStream("configuration.xml"));
		}
		return instance;
	}
}