package com.tickets.security;

import com.fasterxml.jackson.databind.ObjectMapper;
import com.tickets.security.entities.User;
import jakarta.servlet.ServletException;
import jakarta.servlet.http.HttpServletRequest;
import jakarta.servlet.http.HttpServletResponse;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.messaging.Message;
import org.springframework.security.authorization.AuthorizationManager;
import org.springframework.security.config.annotation.web.builders.HttpSecurity;
import org.springframework.security.config.annotation.web.configuration.EnableWebSecurity;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.AuthenticationException;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.messaging.access.intercept.MessageMatcherDelegatingAuthorizationManager;
import org.springframework.security.provisioning.InMemoryUserDetailsManager;
import org.springframework.security.provisioning.JdbcUserDetailsManager;
import org.springframework.security.provisioning.UserDetailsManager;
import org.springframework.security.web.AuthenticationEntryPoint;
import org.springframework.security.web.SecurityFilterChain;
import org.springframework.security.web.authentication.AuthenticationFailureHandler;
import org.springframework.security.web.authentication.AuthenticationSuccessHandler;
import org.springframework.security.web.authentication.RememberMeServices;
import org.springframework.security.web.authentication.rememberme.TokenBasedRememberMeServices;
import org.springframework.web.cors.CorsConfiguration;
import org.springframework.web.cors.CorsConfigurationSource;
import org.springframework.web.cors.UrlBasedCorsConfigurationSource;

import javax.sql.DataSource;
import java.io.IOException;
import java.util.Arrays;
import java.util.HashMap;
import java.util.Map;
import java.util.Objects;

import static org.springframework.messaging.simp.SimpMessageType.MESSAGE;
import static org.springframework.messaging.simp.SimpMessageType.SUBSCRIBE;
import static org.springframework.security.config.Customizer.withDefaults;

@Configuration
@EnableWebSecurity
public class SecurityConfig {

    @Bean
    public SecurityFilterChain securityFilterChain(HttpSecurity httpSecurity) throws Exception {

        httpSecurity.authorizeHttpRequests(config -> config
                .requestMatchers("/security/unauthenticated").permitAll()   // this works without logging in, for example for sign up
                .requestMatchers("/portfolio").permitAll()     // this is for sockets
                .requestMatchers("/theatres/getAll").permitAll()
                .requestMatchers("/theatres/getById/{id}").permitAll()
                .requestMatchers("/theatres/read/attachment/{id}").permitAll()
                .requestMatchers("/security/sign-up").permitAll()
                .requestMatchers("/security/admin").hasAuthority("admin")
                .requestMatchers("/theatres/create").hasAuthority("organizer")
                .requestMatchers("/sendEmail").permitAll()
                .anyRequest().authenticated());
        httpSecurity.formLogin(form -> form.usernameParameter("username").passwordParameter("password").loginPage("/login")
                .permitAll().successHandler(new AuthenticationSuccessHandler() {
            @Override
            public void onAuthenticationSuccess(HttpServletRequest request, HttpServletResponse response, Authentication authentication)
                    throws IOException, ServletException { // Authentication success handler decides what to return if the login is successfull
//                System.out.println(authentication.toString());
                String json=authentication.getName();
                response.getWriter().write(json);
//                response.setStatus(200);
//                String json=mapper.writeValueAsString(responseBody);
//                response.setStatus(HttpServletResponse.SC_FOUND);
                response.setStatus(202);
            }
        }).failureHandler(new AuthenticationFailureHandler() {
                    @Override
                    public void onAuthenticationFailure(HttpServletRequest request, HttpServletResponse response, AuthenticationException exception) throws IOException, ServletException {
//                        response.setStatus(HttpServletResponse.SC_ACCEPTED);

//                        response.setContentType("application/json");
//                        Map<String, Boolean> responseBody=new HashMap<>();
//                        responseBody.put("loggedin",false);
//
//                        ObjectMapper mapper=new ObjectMapper();
//                        String json=mapper.writeValueAsString(responseBody);
//                        response.getWriter().write(json);
//                        response.getWriter().write("proba");
                        User user=new User();
                        ObjectMapper mapper=new ObjectMapper();
                        String json=mapper.writeValueAsString(user);
                        response.setStatus(202);
                        response.getWriter().write(json);
                    }
                }));

        httpSecurity.exceptionHandling(exceptionHandling -> exceptionHandling.authenticationEntryPoint(new AuthenticationEntryPoint() {
            @Override
            public void commence(HttpServletRequest request, HttpServletResponse response, AuthenticationException authException) throws IOException, ServletException {
                response.setStatus(HttpServletResponse.SC_ACCEPTED);

                response.setContentType("application/json");
                Map<String, Boolean> responseBody=new HashMap<>();
                responseBody.put("loggedin",false);

                ObjectMapper mapper=new ObjectMapper();
                String json=mapper.writeValueAsString(responseBody);
                response.getWriter().write(json);
            }
        }));

//        httpSecurity.rememberMe(withDefaults());

        httpSecurity.logout(logout -> logout.deleteCookies("JSESSIONID").invalidateHttpSession(false).logoutUrl("/logout").permitAll());
        httpSecurity.httpBasic(withDefaults());

        httpSecurity.cors(cors -> cors.configurationSource(corsConfigurationSource()));
        httpSecurity.csrf(csrf -> csrf.disable());

        httpSecurity.rememberMe(rememberMe -> rememberMe.rememberMeParameter("rememberMe"));

//        httpSecurity.rememberMe(rememberMeConfigurer -> rememberMeConfigurer)

        return httpSecurity.build();
    }

//    @Autowired
//    private RememberMeProvider rememberMeProvider;

    @Autowired
    private MyAuthenticationProvider authenticationProvider;

    @Autowired
    private MyUserDetailsService myUserDetailsService;

//    @Bean
//    RememberMeServices rememberMeServices(UserDetailsService userDetailsService) {
//        TokenBasedRememberMeServices.RememberMeTokenAlgorithm encodingAlgorithm = TokenBasedRememberMeServices.RememberMeTokenAlgorithm.SHA256;
//        TokenBasedRememberMeServices rememberMe = new TokenBasedRememberMeServices(myKey, userDetailsService, encodingAlgorithm);
//        rememberMe.setMatchingAlgorithm(TokenBasedRememberMeServices.RememberMeTokenAlgorithm.MD5);
//        return rememberMe;
//    }

//    @Bean
//    public UserDetailsManager userDetailsManager(DataSource dataSource)
//    {
//        return new JdbcUserDetailsManager(dataSource);
//    }

//    @Bean
//    UserDetailsManager users(DataSource dataSource) {
//        UserDetails user = User.builder()
//                .username("user")
//                .password("{noop}1234")
//                .roles("USER")
//                .build();
//        UserDetails admin = User.builder()
//                .username("admin")
//                .password("{noop}Berea2003")
//                .roles("USER", "ADMIN")
//                .build();
//        JdbcUserDetailsManager users = new JdbcUserDetailsManager(dataSource);
//        users.createUser(user);
//        users.createUser(admin);
//        return users;
//    }

//    @Bean
//    public InMemoryUserDetailsManager userDetailsManager()
//    {
//        UserDetails pers1= User.builder()
//                .username("berean5")
//                .password("{noop}1234")
//                .roles("dev")
//                .build();
//        return new InMemoryUserDetailsManager(pers1);
//    }

    @Bean
    CorsConfigurationSource corsConfigurationSource()
    {
        CorsConfiguration configuration=new CorsConfiguration();

        configuration.addAllowedOriginPattern("*");

        configuration.setAllowedMethods(Arrays.asList("GET","POST","PUT","DELETE"));
        configuration.setAllowedHeaders(Arrays.asList("*"));
        configuration.setAllowCredentials(true);

        UrlBasedCorsConfigurationSource source=new UrlBasedCorsConfigurationSource();
        source.registerCorsConfiguration("/**",configuration);
        return source;
    }
}
