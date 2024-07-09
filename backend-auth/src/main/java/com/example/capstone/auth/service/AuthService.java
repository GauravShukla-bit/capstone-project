package com.example.capstone.auth.service;

import com.example.capstone.auth.dao.UserDAO;
import com.example.capstone.auth.dto.LoginRequestDTO;
import com.example.capstone.auth.dto.SignUpRequestDTO;
import com.example.capstone.auth.dto.UserDTO;
import com.example.capstone.auth.entity.User;
import com.fasterxml.jackson.databind.ObjectMapper;
import com.google.common.hash.Hashing;
import io.jsonwebtoken.Claims;
import io.jsonwebtoken.JwtBuilder;
import io.jsonwebtoken.Jwts;
import io.jsonwebtoken.SignatureAlgorithm;
import jakarta.servlet.http.Cookie;
import jakarta.servlet.http.HttpServletRequest;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.http.HttpHeaders;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;

import java.nio.charset.StandardCharsets;
import java.util.Date;
import java.util.HashMap;

@Service
public class AuthService {

    @Autowired
    private UserDAO userDAO;

    @Value("${jwt.secret}")
    private String JWT_SECRET;

    @Value("${jwt.cookie.name}")
    private String COOKIE_NAME;

    public ResponseEntity<String> login(LoginRequestDTO loginRequestDTO) {
        User user = userDAO.getUserByEmail(loginRequestDTO.getEmail());
        if (user == null || !Hashing.sha256().hashString(loginRequestDTO.getPassword(), StandardCharsets.UTF_8).toString().equals(user.getHashedPassword()))
            return ResponseEntity.badRequest().body("Invalid Email/Password");
        ObjectMapper objectMapper = new ObjectMapper();
        try {
            return ResponseEntity.ok(objectMapper.writer().withDefaultPrettyPrinter().writeValueAsString(getResponseWithCookie(user)));
        } catch (Exception e) {
            return null;
        }
    }

    public ResponseEntity<UserDTO> signUp(SignUpRequestDTO signUpRequestDTO) {
        System.out.println(signUpRequestDTO);
        Long duplicateCount = userDAO.getDuplicateUserCount(signUpRequestDTO.getEmail());
        if (duplicateCount > 0L) {
            new ResponseEntity<>(getErrorBody("User Already Exists"), HttpStatus.BAD_REQUEST);
        }
        User user = new User();
        user.setEmail(signUpRequestDTO.getEmail());
        user.setName(signUpRequestDTO.getName());
        user.setHashedPassword(Hashing.sha256().hashString(signUpRequestDTO.getPassword(), StandardCharsets.UTF_8).toString());
        user = userDAO.save(user);
        return getResponseWithCookie(user);
    }

    public ResponseEntity<UserDTO> authenticate(HttpServletRequest httpServletRequest) {
        String value = null;
        Long id = null;
        for (Cookie c : httpServletRequest.getCookies()) {
            if (c.getName().equals(COOKIE_NAME)) value = c.getValue();
        }
        if (value != null) {
            try {
                Claims claims = Jwts.parserBuilder().setSigningKey(JWT_SECRET).build().parseClaimsJws(value).getBody();
                if (claims.getExpiration().before(new Date())) throw new Exception("Expired Token");
                id = Long.parseLong(claims.getId());
            } catch (Exception e) {
                return new ResponseEntity<>(HttpStatus.UNAUTHORIZED);
            }
        }
        if (id != null) {
            return getResponseWithCookie(userDAO.getUserById(id));
        }
        return new ResponseEntity<>(HttpStatus.UNAUTHORIZED);
    }

    private HashMap<String, String> getErrorBody(String errorMessage) {
        HashMap<String, String> errorBody = new HashMap<>();
        errorBody.put("error", errorMessage);
        return errorBody;
    }

    private ResponseEntity<UserDTO> getResponseWithCookie(User user) {
        JwtBuilder jwtBuilder = Jwts.builder().setId(user.getUserId().toString()).setIssuedAt(new Date(System.currentTimeMillis())).setExpiration(new Date(System.currentTimeMillis() + 1000000000)).setIssuer("capstone-project").setSubject("auth").signWith(SignatureAlgorithm.HS256, JWT_SECRET);
        UserDTO userDTO = new UserDTO();
        userDTO.setUserId(user.getUserId());
        userDTO.setName(user.getName());
        userDTO.setEmail(user.getEmail());
        return ResponseEntity.ok().header(HttpHeaders.SET_COOKIE, COOKIE_NAME + "=" + jwtBuilder.compact()).body(userDTO);
    }
}
