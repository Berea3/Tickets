package com.tickets.security;

import jakarta.servlet.http.HttpServletRequest;
import jakarta.servlet.http.HttpServletResponse;
import org.springframework.security.core.Authentication;
import org.springframework.security.web.authentication.RememberMeServices;

public class RememberMeProvider implements RememberMeServices {
    @Override
    public Authentication autoLogin(HttpServletRequest request, HttpServletResponse response) {
        System.out.println("AAA");
        return null;
    }

    @Override
    public void loginFail(HttpServletRequest request, HttpServletResponse response) {

        System.out.println("BBB");
    }

    @Override
    public void loginSuccess(HttpServletRequest request, HttpServletResponse response, Authentication successfulAuthentication) {

        System.out.println("CCC");
    }
}
