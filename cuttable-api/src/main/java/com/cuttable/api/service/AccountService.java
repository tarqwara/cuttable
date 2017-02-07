package com.cuttable.api.service;

import com.cuttable.api.domain.Account;
import com.cuttable.api.domain.AccountRole;
import com.cuttable.api.domain.RoleType;
import com.cuttable.api.exception.AccountExistsException;
import com.cuttable.api.repository.AccountRepository;
import com.cuttable.api.repository.AccountRoleRepository;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.stereotype.Service;

@Service
public class AccountService {

    private AccountRepository accountRepository;
    private AccountRoleRepository accountRoleRepository;

    public AccountService(AccountRepository accountRepository, AccountRoleRepository accountRoleRepository) {
        this.accountRepository = accountRepository;
        this.accountRoleRepository = accountRoleRepository;
    }

    public void createUserAccount(String email, String password) {
        Account existingAccount = accountRepository.findOneByEmail(email);
        if (existingAccount != null) {
            throw new AccountExistsException(email);
        }

        String encryptedPassword = new BCryptPasswordEncoder().encode(password);
        Account account = new Account();
        account.setEmail(email);
        account.setEncryptedPassword(encryptedPassword);
        account.setEnabled(true);
        accountRepository.save(account);

        AccountRole accountRole = new AccountRole();
        accountRole.setAccount(account);
        accountRole.setRole(RoleType.ROLE_USER);
        accountRoleRepository.save(accountRole);
    }

}
