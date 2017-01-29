package com.cuttable.api.service;

import com.cuttable.api.domain.Account;
import com.cuttable.api.exception.AccountExistsException;
import com.cuttable.api.exception.WrongEmailOrPasswordException;
import com.cuttable.api.repository.AccountRepository;
import com.cuttable.api.util.BCryptUtil;
import org.springframework.stereotype.Service;

@Service
public class AccountService {

    private final AccountRepository accountRepository;

    public AccountService(AccountRepository accountRepository) {
        this.accountRepository = accountRepository;
    }

    public void checkAccountCredentials(String email, String password) {
        Account account = accountRepository.findOneByEmail(email);
        if (account == null) {
            throw new WrongEmailOrPasswordException();
        }

        String encryptedPassword = account.getEncryptedPassword();
        if (!BCryptUtil.areMatchingPasswords(password, encryptedPassword)) {
            throw new WrongEmailOrPasswordException();
        }
    }

    public void createAccount(String email, String password) {
        Account existingAccount = accountRepository.findOneByEmail(email);
        if (existingAccount != null) {
            throw new AccountExistsException(email);
        }

        String encryptedPassword = BCryptUtil.encryptPassword(password);
        Account account = new Account();
        account.setEmail(email);
        account.setEncryptedPassword(encryptedPassword);
        accountRepository.save(account);
    }

}
