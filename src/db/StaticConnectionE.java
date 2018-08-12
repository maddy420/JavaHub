package db;
import java.sql.Connection;
import java.sql.DriverManager;

import javax.swing.JFrame;

public class StaticConnectionE {
	static Connection conn;

    static
    {
    	try
    	{ 		
    	
    		 Class.forName("oracle.jdbc.driver.OracleDriver");//OracleDriver
			    conn=DriverManager.getConnection("jdbc:oracle:thin:@localhost:1521:xe","system","mayank");
			   }
    	catch(Exception ex){ex.printStackTrace();}
    }
   
    
    public static Connection getconnection()
    {
    	return conn;
    }

}
