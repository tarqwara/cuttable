package com.cuttable.api.security.jwt;

import lombok.Data;

@Data
public class AccountCredentials {

    private String email;
    private String password;

}
