package com.example.demo;

import org.apache.catalina.connector.RequestFacade;
import org.springframework.core.io.FileSystemResource;
import org.springframework.util.StreamUtils;

import javax.servlet.*;
import java.io.IOException;

public class EscapedFragmentFilter implements Filter {

    private String sitemapPath;

    public EscapedFragmentFilter(String sitemapPath) {
        this.sitemapPath = sitemapPath;
    }

    @Override
    public void doFilter(ServletRequest servletRequest, ServletResponse servletResponse, FilterChain filterChain) throws IOException, ServletException {

        if (servletRequest.getParameterMap().containsKey("_escaped_fragment_") && ".".equals(servletRequest.getParameter("_escaped_fragment_"))) {
            FileSystemResource resource = new FileSystemResource(sitemapPath + ((RequestFacade) servletRequest).getServletPath() + "/index.html");
            if (resource.isReadable()) {
                StreamUtils.copy(resource.getInputStream(), servletResponse.getOutputStream());
                return;
            }
        }
        filterChain.doFilter(servletRequest, servletResponse);
    }
}
