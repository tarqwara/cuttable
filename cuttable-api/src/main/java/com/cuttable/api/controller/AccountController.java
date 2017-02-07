package com.cuttable.api.controller;

import com.cuttable.api.security.jwt.AccountCredentials;
import com.cuttable.api.service.AccountService;
import org.springframework.http.MediaType;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping(
        value = "/accounts",
        consumes = MediaType.APPLICATION_JSON_VALUE,
        produces = MediaType.APPLICATION_JSON_VALUE
)
public class AccountController {

    private AccountService accountService;

    public AccountController(AccountService accountService) {
        this.accountService = accountService;
    }

    @PostMapping("register")
    public void register(@RequestBody AccountCredentials accountCredentials) {
        accountService.createUserAccount(accountCredentials.getEmail(), accountCredentials.getPassword());
    }

}
