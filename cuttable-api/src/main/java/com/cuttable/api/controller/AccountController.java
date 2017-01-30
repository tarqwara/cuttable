package com.cuttable.api.controller;

import com.cuttable.api.service.AccountService;
import org.springframework.http.MediaType;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping(
        value = "/accounts",
        consumes = MediaType.APPLICATION_FORM_URLENCODED_VALUE,
        produces = MediaType.APPLICATION_JSON_VALUE
)
public class AccountController {

    private final AccountService accountService;

    public AccountController(AccountService accountService) {
        this.accountService = accountService;
    }

    @GetMapping
    public void checkAccountCredentials(@RequestParam String email, @RequestParam String password) {
        accountService.checkAccountCredentials(email, password);
    }

    @PostMapping
    public void createAccount(@RequestParam String email, @RequestParam String password) {
        accountService.createAccount(email, password);
    }

}