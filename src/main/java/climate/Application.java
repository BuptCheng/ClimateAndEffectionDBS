package climate;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.CommandLineRunner;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.jdbc.core.JdbcTemplate;
import org.springframework.jdbc.core.RowMapper;
import org.springframework.jdbc.datasource.DriverManagerDataSource;
import oracle.jdbc.driver.OracleDriver;

import java.util.Arrays;
import java.util.List;
import java.util.stream.Collectors;
import java.sql.ResultSet;
import java.sql.SQLException;


@SpringBootApplication
public class Application implements CommandLineRunner {

    private static final Logger log = LoggerFactory.getLogger(Application.class);

    public static void main(String args[]) {

        SpringApplication.run(Application.class, args);
    }

    @Autowired
    JdbcTemplate jdbcTemplate;

    @Override
    public void run(String... strings) throws Exception {

        log.info("Creating tables");

        DriverManagerDataSource dataSource = new DriverManagerDataSource();

                 dataSource.setDriverClassName("oracle.jdbc.driver.OracleDriver");
                 dataSource.setUrl("jdbc:oracle:thin:@oracle.cise.ufl.edu:1521:orcl");
                 dataSource.setUsername("tiangebu");
                 dataSource.setPassword("Welcome123");
        jdbcTemplate = new JdbcTemplate(dataSource);
        //jdbcTemplate.execute("DROP TABLE customers IF EXISTS");
        jdbcTemplate.execute("CREATE TABLE customers2(" +
                "id INTEGER , first_name VARCHAR(255), last_name VARCHAR(255))");

    }
}














