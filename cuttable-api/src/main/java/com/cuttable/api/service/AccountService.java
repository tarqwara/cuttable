package com.cuttable.api.service;

import com.cuttable.api.domain.Account;
import com.cuttable.api.exception.AccountExistsException;
import com.cuttable.api.repository.AccountRepository;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.stereotype.Service;

@Service
public class AccountService {

    private AccountRepository accountRepository;

    public AccountService(AccountRepository accountRepository) {
        this.accountRepository = accountRepository;
    }

    public void createAccount(String email, String password) {
        Account existingAccount = accountRepository.findOneByEmail(email);
        if (existingAccount != null) {
            throw new AccountExistsException(email);
        }

        String encryptedPassword = new BCryptPasswordEncoder().encode(password);
        Account account = new Account();
        account.setEmail(email);
        account.setEncryptedPassword(encryptedPassword);
        accountRepository.save(account);
    }

}
